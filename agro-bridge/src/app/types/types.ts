
// Header
import type { LucideIcon } from "lucide-react";
import { JSX } from "react";

// HomePage
export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  color?: string;
};

export interface Sponsor {
  imageUrl: string;
  imageAlt: string;
}


// About Page
export interface OurProcess {
  icon: LucideIcon;
  heading: string;
  paragraph: string;
}

export type TeamMember = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
}

