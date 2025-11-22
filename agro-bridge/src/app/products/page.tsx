
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Our Products – Premium Nigerian Crops",
  description: "Browse export-ready sesame seeds, cashew nuts, cocoa beans, ginger, and more.",

  keywords: [
    "nigerian crops", "sesame seeds", "cashew nuts", "cocoa beans",
    "ginger export", "export ready crops", "verified products"
  ],

  openGraph: {
    url: "/products",
    title: "Our Products – Premium Nigerian Crops | AgroBridge",
    description: "High-quality, verified agricultural products ready for export.",
  },

  twitter: {
    title: "Our Products – Premium Nigerian Crops | AgroBridge",
    description: "High-quality, verified agricultural products ready for export.",
  },
  alternates: { canonical: "/products" },
  robots: { index: false, follow: true },
};

export default function ProductsPage() {
  return (
    <div>ProductsPage</div>
  )
}
