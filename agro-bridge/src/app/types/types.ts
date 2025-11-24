
// Header
import type { LucideIcon } from "lucide-react";

// HomePage
export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  color?: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  location: string;
  inStock: boolean;
  imageUrl: string;         // main image
  imageAlt: string;
  galleryImages?: { url: string; alt: string }[];
  description: string;
  seeds?: string;
  availability: string;
  minimumOrder: string;
  grade: string;
  packaging: string;
  originDetails: string;
  downloadSpecSheetUrl?: string;
  seoDescription?: string;
  relatedProducts?: {
    slug: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  }[];
};

export type ProductCardInfo = Pick<
  Product,
  "slug" | "name" | "price" | "location" | "inStock" | "imageUrl" | "imageAlt"
>;

// export type ProductCardInfo = {
//   slug: string;           // ← This is what we use now
//   name: string;
//   price: number;
//   location: string;
//   inStock: boolean;
//   imageUrl: string;
//   imageAlt: string;
// };
