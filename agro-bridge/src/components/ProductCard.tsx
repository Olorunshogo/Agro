
// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ProductCardInfo } from "~/app/types/types";

export type Props = {
  product: ProductCardInfo;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col w-full gap-6 p-4 transition-all duration-300 ease-in-out border rounded-xl font-openSans shadow-custom hover:shadow-lg">

      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt || product.name || "product image"}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium lg:text-base text-(--heading-colour) line-clamp-1">
            {product.name || "Premium Product"} 
          </h3>
          <div className="flex items-center gap-1 text-xs lg:text-sm text-[#414652]">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{product.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="text-lg font-semibold text-(--heading-colour) line-clamp-1">
            ${product.price.toFixed(2)}
            <span className="text-sm">/Ton</span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="text-[#FFF8F8] text-sm bg-(--agro-green-dark) hover:bg-(--agro-green-light) line-clamp-1 px-3 py-1.5 rounded-full shadow-lg"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
