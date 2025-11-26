
"use client";

import Link from "next/link";
import { MousePointer, ArrowRight } from "lucide-react";

interface PrimaryLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function PrimaryLink({ href, text, className = "" }: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center font-inter gap-2 w-fit text-white hover:text-black text-sm font-semibold bg-(--agro-green-dark) hover:opacity-90 px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
    >
      <ArrowRight className="w-5 h-5 -rotate-45" />
      <span>{text}</span>
    </Link>
  );
}
