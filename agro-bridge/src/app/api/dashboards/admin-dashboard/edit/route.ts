
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.id || !body.name || typeof body.stock != "number") {
      return NextResponse.json({
        error: "Invalid product data",
        status: 400,
      });
    }
    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
    });

  } catch (error) {
    return NextResponse.json({
      error: "Server error",
      status: 500,
    });
  }
  
}
