
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { simpleRateLimit } from "~/lib/rate-limit";

const users = new Map<string, any>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";

  // Simple in-memory rate-limiting
  // Always protect login from brute force
  if (!simpleRateLimit(ip, 8, 15 * 60 * 1000)) { // 8 attempts per 15 min
    return NextResponse.json(
      { message: "Too many login attempts. Try again later." },
      { status: 429 }
    );
  }

  if (!request.body) {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }
  
  try {
    const { email, password } = await request.json();

    // Mock authentication — replace with real logic later
    //
    // Admin Login
    if (email === "admin@admin.com" && password === "adminPassword123") {

      (await cookies()).set("auth_token", "admin-session-123", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      (await cookies()).set("user_role", "admin", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      return NextResponse.json({
        message: "Signed in successfully", 
        redirectTo: "/admin-dashboard",
        user: { email },        
        status: 200,
      });
    }

    // Regular User Login
    if (email === "user@user.com" && password === "userPassword123") {

      (await cookies()).set("auth_token", "user-session-123", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      (await cookies()).set("user_role", "user", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      return NextResponse.json({
        message: "Signed in successfully", 
        redirectTo: "/user-dashboard",
        user: { email },        
        status: 200,
      });
    }

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}