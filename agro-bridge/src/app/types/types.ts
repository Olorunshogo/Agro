
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

// export interface ProductInfo {
//   inStock: boolean;
//   imageUrl: string;
//   imageAlt: string;
//   location: string;
//   price: number;
//   productDetailsLink: string;
// }

export type UserPersona = {
  rating: number;
  description: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  location: string;
}

export interface VideoComponent {
  id: string;
  imageUrl: string;
  imageAlt: string;
  videoUrl: string;
  captionUrl?: string;
  title?: string;
}

export interface Stat {
  value: string;
  label: string;
};


// Company
// Farmers
export type Benefit = {
  title: string;
  description: string;
};

// About
export type TeamMember = {
  name: string;
  role: string;
  imageId: string;
}

// Pricing
export interface PricingProp {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  cta: boolean;
  ctaLink: string;
}

// Products
export interface Product {
  title: string;
  description: string;
  imageId: string;
  link: string;
  linkLabel: string;
}

// Contact
export interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string;
}