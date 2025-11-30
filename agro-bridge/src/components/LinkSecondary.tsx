
"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SecondaryLinkProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
  rotateClass?: string;
}

export default function SecondaryLink({
  href,
  label,
  icon: Icon,
  className = "",
  rotateClass = "",
}: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center font-inter gap-2 w-fit text-white text-sm font-semibold border border-(--primary-bg-light) bg-transparent px-3 py-2 rounded-full hover:opacity-90 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-lg ${className}`}
    > 
      {Icon && (
        <Icon
          className={`w-4 h-4 ${rotateClass}`}
        />
      )}
      <span>{label}</span>   
    </Link>
  );
}

