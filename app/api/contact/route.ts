import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const destinationEmail = "anuragjha724@gmail.com";
    const origin = req.headers.get("origin") || req.headers.get("referer") || "http://localhost:3000";

    // Forward submission to FormSubmit.co for direct inbox delivery
    const response = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": origin,
        "Referer": origin
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "Portfolio Contact Message",
        message,
        _subject: `[Portfolio Contact] Message from ${name}: ${subject || "Inquiry"}`,
        _replyto: email,
        _captcha: "false",
        _template: "table"
      })
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An unexpected error occurred while transmitting your message."
      },
      { status: 500 }
    );
  }
}
