"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface PrimaryLinkProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  rotateClass?: string; 
  className?: string;
}

export default function PrimaryLink({
  href,
  label,
  icon: Icon,
  rotateClass = "",  
  className = "",
}: PrimaryLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center font-inter gap-2 w-fit text-white text-center text-sm font-semibold bg-linear-to-r from-(--agro-green-light) to-(--agro-green-dark) hover:opacity-90 px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out ${className}`}
    >
      <span>{label}</span>

      {Icon && (
        <Icon
          className={`w-4 h-4 ${rotateClass}`} 
        />
      )}
    </Link>
  );
}
