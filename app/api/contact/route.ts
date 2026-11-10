import { NextResponse } from "next/server";

// In-memory sliding-window rate limiter: max 5 requests per 10 minutes per IP
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Periodically purge stale records every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    const valid = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      record.timestamps = valid;
    }
  }
}, 15 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };
  const validTimestamps = record.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: validTimestamps });
  return false;
}

function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[^\w\s.,!?'"()\-@]/gi, "") // strip suspicious characters
    .trim();
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    // 1. Origin / Referer Validation (Restrictive CORS)
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    const allowedHosts = [
      "portfolio-website-anurag.vercel.app",
      "localhost:3000",
      "127.0.0.1:3000"
    ];

    const isAllowedOrigin =
      allowedHosts.some((host) => origin.includes(host)) || process.env.NODE_ENV === "development";

    if (!isAllowedOrigin && origin !== "") {
      return NextResponse.json(
        { success: false, message: "Forbidden: Request origin not authorized." },
        { status: 403 }
      );
    }

    // 2. IP extraction & Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please wait 10 minutes before sending another message."
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600"
          }
        }
      );
    }

    // 3. Body Parsing
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid payload format." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, hp_website } = body;

    // 4. Honeypot Bot Detection
    // If hidden bot field is filled, silently discard or return fake success
    if (hp_website && typeof hp_website === "string" && hp_website.trim().length > 0) {
      // Fake delay and success response so bot does not retry
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // 5. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 3000
    ) {
      return NextResponse.json(
        { success: false, message: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    const cleanName = sanitizeText(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject && typeof subject === "string" ? sanitizeText(subject) : "Portfolio Inquiry";
    const cleanMessage = sanitizeText(message);

    const destinationEmail = process.env.CONTACT_EMAIL || "anuragjha724@gmail.com";

    // 6. Secure Forwarding to FormSubmit.co
    const forwardResponse = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        _subject: `[Portfolio Inquiry] ${cleanName}: ${cleanSubject}`,
        _replyto: cleanEmail,
        _captcha: "false"
      })
    });

    if (!forwardResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Transmission failed. You can also reach out via email directly."
        },
        { status: 502 }
      );
    }

    await forwardResponse.json();
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. I will get back to you shortly."
      },
      { status: 200 }
    );
  } catch {
    // No stack traces or internal errors returned to client
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request."
      },
      { status: 500 }
    );
  }
}
