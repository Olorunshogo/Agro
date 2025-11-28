
"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SecondaryLinkProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  rotateClass?: string;
}

export default function SecondaryLink({
  href,
  label,
  icon: Icon,
  rotateClass = "",
}: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-white text-sm w-fit font-inter font-semibold border hover:border-none border-(--primary-bg-light) bg-transparent hover:bg-(--agro-green-light) px-6 py-3 rounded-full hover:opacity-90 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
    > 
      {Icon && (
        <Icon
          className={`w-5 h-5 ${rotateClass}`}
        />
      )}
      <span>{label}</span>   
    </Link>
  );
}

