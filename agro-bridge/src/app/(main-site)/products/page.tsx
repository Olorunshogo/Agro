
import { products } from "~/store/products";
import ProductCard from "~/components/ProductCard";
import type { ProductCardInfo } from "~/app/types/types";

const metadata = {
  title: "Our Products – Premium Nigerian Crops",
  description: "Browse export-ready sesame seeds, cashew nuts, cocoa beans, ginger, and more.",

  keywords: [
    "nigerian crops", "sesame seeds", "cashew nuts", "cocoa beans",
    "ginger export", "export ready crops", "verified products"
  ],

  // openGraph: {
  //   url: "/products",
  //   title: "Our Products – Premium Nigerian Crops | AgroBridge",
  //   description: "High-quality, verified agricultural products ready for export.",
  // },

  twitter: {
    title: "Our Products – Premium Nigerian Crops | AgroBridge",
    description: "High-quality, verified agricultural products ready for export.",
  },
  alternates: { canonical: "/products" },
  robots: { index: true, follow: true },

  openGraph: {
    url: "https://agrobridge.com/products",
    title: "Our Products – Premium Nigerian Crops | AgroBridge",
    description: "High-quality, verified agricultural products ready for global export.",
    images: ["/og-products.png"],
  },
};

// Pre-render all product detail pages at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Regenerate page every 6 hours if content changes
export const revalidate = 21600; // 6 hours

export const dynamic = "force-static";

export default function ProductsPage() {

  // Map all products → card info
  const productCardInfo: ProductCardInfo[] = products.map(
    ({ slug, name, price, location, inStock, imageUrl, imageAlt }) => ({
      slug,
      name,
      price,
      location,
      inStock,
      imageUrl,
      imageAlt,
    })
  );
   
  return (
    <div className="relative w-full h-full min-h-screen py-12">
      <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) w-full h-full mx-auto max-w-7xl">


      {/* 
        Fixed width sidebar:  grid-cols-[210px_1fr] 
        Sidebar that can shrink or grow using minmax() (at least 210 and at most 250px): grid-cols-[minmax(210px, 250px)_1fr]
       */}

      <div className="grid grid-cols-1 md:grid-cols-[210px_1fr] w-full max-w-7xl mx-auto h-full">
        
        <div className="flex flex-col w-full gap-4">
          What's even here
        </div>


        <div className="flex flex-col gap-6 w-full px-(--section-px)">
          <h1 className="text-3xl font-bold text-center">Our Products</h1>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {productCardInfo.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>

      </div>
      
      </div>
    </div>
  );
}
