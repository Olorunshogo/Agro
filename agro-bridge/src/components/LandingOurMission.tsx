
"use client";

import Image from "next/image";

interface StatusItem {
id: string;
label: string;
value: number;
}

interface CheckItem {
  id: string;
  label: string;
}

const checkItems: CheckItem[] = [
  { id: "c1", label: "Safe Environment" },
  { id: "c2", label: "Safe Environment" },
  { id: "c3", label: "Safe Environment" },
  { id: "c4", label: "Safe Environment" },
];

const statusItems: StatusItem[] = [
{ id: "s1", label: "Context", value: 86 },
{ id: "s2", label: "Context", value: 39 },
];

export default function LandingOurMission() {
  return (
    <div>LandingOurMission</div>
  )
}
