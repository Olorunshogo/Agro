
// app/api/auth/forgot-password/route.ts
import { NextResponse } from "next/server";

const resetTokens = new Map<string, { userId: string; expires: number }>();

export async function POST(request: Request) {
  const { email } = await request.json();

  // Find user (mock
  // const user = Array.from(users.values()).find(
  //   (u: any) => u.email.toLowerCase() === email.toLowerCase()
  // );
  const user = null;


  if (!user) {
    // Don't reveal if email exists
    return NextResponse.json({ message: "If email exists, reset link sent" });
  }

  const token = crypto.randomUUID();
  // resetTokens.set(token, {
  //   userId: user.id,
  //   expires: Date.now() + 1000 * 60 * 30, // 30 min
  // });

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;
  console.log("Reset link:", resetUrl);
  // TODO: Send via email

  return NextResponse.json({ message: "If email exists, reset link sent" });
}
