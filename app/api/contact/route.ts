import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const origin =
      req.headers.get("origin") ||
      req.headers.get("referer") ||
      "https://balaji-portfolio.vercel.app";

    // Forward to FormSubmit to deliver the email directly to Balaji's inbox
    const response = await fetch("https://formsubmit.co/ajax/balaji.hdev@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: origin,
        Origin: origin,
      },
      body: JSON.stringify({
        name,
        email,
        _subject: subject || `New Portfolio Inquiry from ${name}`,
        message,
        _captcha: "false",
        _template: "table",
      }),
    });

    const data = await response.json().catch(() => ({}));

    // FormSubmit returns success: "false" when form activation is pending
    if (data.success === "false" || data.success === false) {
      const isActivationPending =
        typeof data.message === "string" &&
        data.message.toLowerCase().includes("activation");

      return NextResponse.json(
        {
          error: data.message || "Failed to dispatch email.",
          needsActivation: isActivationPending,
        },
        { status: 400 }
      );
    }

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: data.message || "Message sent successfully!",
      });
    } else {
      return NextResponse.json(
        { error: data.message || "Failed to deliver message via email service." },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "Server error occurred while transmitting message." },
      { status: 500 }
    );
  }
}
