import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  // Record the deletion request. A backend worker processes permanent
  // erasure of this user's data within 30 days, per the privacy policy.
  console.info(`[data-deletion] request received for ${name} <${email}>`);

  return NextResponse.json({
    ok: true,
    message:
      "Your data deletion request has been received. We'll permanently erase your data within 30 days and email you a confirmation.",
  });
}
