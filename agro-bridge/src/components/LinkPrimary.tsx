
"use client";

import Link from "next/link";
import { MousePointer } from "lucide-react";

interface PrimaryLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function PrimaryLink({ href, text, className = "" }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center font-inter gap-2 w-fit text-white text-sm font-semibold border border-(--primary-bg-light) bg-(--agro-green-dark) hover:bg-(--agro-green-light) px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
    >
      <span>{text}</span>
      <MousePointer className="w-5 h-5 rotate-90" />
    </Link>
  );
}
