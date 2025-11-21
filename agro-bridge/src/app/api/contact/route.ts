
// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Here: send email via Resend, Brevo, Nodemailer, etc.
  console.log("Contact form:", body);
  return NextResponse.json({ message: "Message received" });
}