
"use client";

import { products } from "~/store/products";
import ProductCard from "~/components/ProductCard";
import type { ProductCardInfo } from "~/app/types/types";

export default function LandingProducts() {

  // Map all products → card info
    const landingProductsCardInfo: ProductCardInfo[] = products.map(
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
    <>
      {/* Featured Products */}
      <section className="relative font-openSans py-(--section-py) lg:py-(--section-py-lg) overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

          <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
            Featured Products Section
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* <div className="grid gap-4 grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"></div> */}
            {landingProductsCardInfo.map((p: ProductCardInfo, index) => (
              <ProductCard key={index} product={p} />
            ))}
          </div>
          
        </div>
      </section> 
    </>
  );
}