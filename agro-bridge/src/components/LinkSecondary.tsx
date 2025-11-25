
"use client";

import Link from "next/link";

interface SecondaryLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function SecondaryLink({ href, text, className = "" }: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className={`text-white text-sm w-fit font-inter font-semibold border border-(--primary-bg-light) bg-transparent hover:bg-(--agro-green-light) px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}
    >
      {text}
    </Link>
  );
}
