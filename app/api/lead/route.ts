import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import twilio from "twilio";

interface LeadData {
  has_routine?: string;
  primary_goal?: string;
  timeline?: string;
  name: string;
  email: string;
  phone: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
}

async function appendToGoogleSheet(data: LeadData & { timestamp: string }) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  console.log("Google Sheets config check:", {
    hasSpreadsheetId: !!spreadsheetId,
    hasClientEmail: !!clientEmail,
    hasPrivateKey: !!privateKey,
    privateKeyLength: privateKey?.length || 0,
    privateKeyStart: privateKey?.substring(0, 60),
    hasLiteralBackslashN: privateKey?.includes("\\n"),
    hasActualNewline: privateKey?.includes("\n"),
  });

  if (!spreadsheetId || !clientEmail || !privateKey) {
    console.warn("Google Sheets not configured - skipping sheet append");
    return;
  }

  // Handle different newline formats from env vars
  // Try multiple approaches to fix the key format
  let formattedKey = privateKey;

  // Method 1: Replace literal backslash-n with newlines
  if (formattedKey.includes("\\n")) {
    formattedKey = formattedKey.split("\\n").join("\n");
  }

  // Method 2: If key is JSON-escaped (starts with extra chars), try parsing
  if (formattedKey.startsWith('"')) {
    try {
      formattedKey = JSON.parse(formattedKey);
    } catch {
      // Not valid JSON, continue with current value
    }
  }

  console.log("Formatted key check:", {
    originalLength: privateKey.length,
    formattedLength: formattedKey.length,
    startsCorrectly: formattedKey.startsWith("-----BEGIN"),
    endsCorrectly: formattedKey.trimEnd().endsWith("-----END PRIVATE KEY-----"),
    newlineCount: (formattedKey.match(/\n/g) || []).length,
  });

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: formattedKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.has_routine || "",
      data.primary_goal || "",
      data.timeline || "",
      data.utm_source || "",
      data.utm_medium || "",
      data.utm_campaign || "",
      data.utm_content || "",
      data.utm_term || "",
      data.gclid || "",
    ];

    console.log("Attempting to append to Google Sheet:", spreadsheetId);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Website Leads!A:M",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    console.log("Successfully appended to Google Sheet");
  } catch (error) {
    console.error("Google Sheets error:", error);
    throw error;
  }
}

async function sendSmsNotification(data: LeadData) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
  const notifyPhone = process.env.NOTIFICATION_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhone || !notifyPhone) {
    console.warn("Twilio not configured - skipping SMS notification");
    return;
  }

  try {
    const client = twilio(accountSid, authToken);

    const goalMap: Record<string, string> = {
      weight_loss: "Lose weight",
      build_muscle: "Build muscle",
      develop_routine: "Develop routine",
      general_health: "General health",
    };

    const timelineMap: Record<string, string> = {
      asap: "ASAP",
      "2_4_weeks": "2-4 weeks",
      "4_plus_weeks": "4+ weeks",
    };

    const message = `🏋️ New Lead!
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Goal: ${goalMap[data.primary_goal || ""] || data.primary_goal || "N/A"}
Timeline: ${timelineMap[data.timeline || ""] || data.timeline || "N/A"}
Has routine: ${data.has_routine || "N/A"}`;

    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: notifyPhone,
    });

    console.log("SMS notification sent successfully");
  } catch (error) {
    console.error("Twilio SMS error:", error);
    // Don't throw - SMS failure shouldn't fail the lead submission
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // 1. Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 3. Add timestamp
    const timestamp = new Date().toISOString();

    // 4. Append to Google Sheets
    await appendToGoogleSheet({ timestamp, ...data });

    // 5. Send SMS notification
    await sendSmsNotification(data);

    // Log for debugging
    console.log("Lead received:", { timestamp, ...data });

    // 6. Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    console.error("Error details:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
