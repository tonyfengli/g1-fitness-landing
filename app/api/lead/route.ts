import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string; // Additional fields
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

    // TODO: Add Google Sheets integration
    // await appendToSheet({ timestamp, ...data });

    // TODO: Add Twilio SMS notification
    // await sendSMS(`New lead: ${data.name}`);

    // Log for now (remove in production)
    console.log("Lead received:", { timestamp, ...data });

    // 4. Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
