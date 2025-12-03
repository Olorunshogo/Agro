
import { NextResponse } from "next/server";

export interface CountryDemandItem {
  country: string;
  value: number;
}

export interface CountryDemandResponse {
  data: CountryDemandItem[];
}

export async function GET() {
  // Replace with real DB logic later
  const mockData: CountryDemandItem[] = [
    { country: "Nigeria", value: 450 },
    { country: "Ghana", value: 380 },
    { country: "Kenya", value: 290 },
    { country: "India", value: 220 },
    { country: "Vietnam", value: 180 },
    { country: "USA", value: 140 },
  ];

  return NextResponse.json({ data: mockData });
}