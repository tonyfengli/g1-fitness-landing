import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

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

  if (!spreadsheetId) {
    console.warn("Google Sheets not configured - skipping sheet append");
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./service-account.json",
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

    // Log for debugging
    console.log("Lead received:", { timestamp, ...data });

    // 5. Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
