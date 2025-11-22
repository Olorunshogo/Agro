
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "My Products",
  description: "Browse and manage your requested and purchased agricultural products on AgroBridge.",

  openGraph: {
    url: "/dashboard/products",
    title: "My Products | AgroBridge Dashboard",
  },

  twitter: {
    title: "My Products | AgroBridge Dashboard",
  },

  alternates: { canonical: "/dashboard/products" },
  robots: { index: false, follow: true },
};

export default function ProductsPage() {
  return (
    <div>Products Page</div>
  )
}
