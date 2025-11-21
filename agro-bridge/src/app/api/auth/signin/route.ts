
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Mock authentication — replace with real logic later
    // if (email === "admin@agrobridge.com" && password === "password123") {
      if (email === "admin@admin.com" && password === "password123") {
      return NextResponse.json(
        { message: "Signed in successfully", user: { email } },
        { status: 200 }
      );
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