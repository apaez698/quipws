import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, details } = body;

    // Validate required fields
    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // In production, you would send an email, store in DB, or forward to a CRM
    // For now, we log it (replace with actual integration)
    console.log("Contact form submission:", { name, email, service, details });

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
