
// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory fallback if no Redis
const redis = process.env.UPSTASH_REDIS_REST_URL
  ? Redis.fromEnv()
  : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 signups per 10 min per IP
    })
  : null;

// In-memory DB (replace with Prisma + PostgreSQL later)
const users = new Map<string, any>();
const verificationTokens = new Map<string, { userId: string; email: string; expires: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

  // Rate limiting
  if (ratelimit) {
    const { success } = await ratelimit.limit(ip);
    if (!success)
      return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  try {
    const { companyName, contactPerson, email, password } = await request.json();

    if (!companyName || !contactPerson || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Check existing user
    const existing = Array.from(users.values()).find(
      (u: any) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (existing) {
      NextResponse.json({ message: "Email already registered" }, { status: 409 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    const userId = crypto.randomUUID();
    const user = {
      id: userId,
      companyName,
      contactPerson,
      email: email.toLowerCase(),
      passwordHash,
      emailVerified: false,
      createdAt: new Date().toISOString(),
    };

    users.set(userId, user);

    // Generate verification token
    const token = crypto.randomUUID();
    verificationTokens.set(token, {
      userId,
      expires: Date.now() + 1000 * 60 * 60 * 24,
      email: ""
    });

    // TODO: Send email with link: https://yourdomain.com/verify-email?token=xxx
    const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/verify-email?token=${token}`;
    console.log("Verification link:", verifyUrl);
    // In production: use Resend, Nodemailer, etc.

    // Do NOT log in yet — require email verification
    return NextResponse.json(
      {
        message: "Account created! Please check your email to verify your account.",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
