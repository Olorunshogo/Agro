
// components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export type ProductInfo = {
  inStock: boolean;
  imageUrl: string;
  imageAlt: string;
  location: string;
  price: number;
  productDetailsLink: string;
  name?: string;
};

type Props = {
  product: ProductInfo;
  className?: string;
};

export const ProductCard: React.FC<Props> = ({ product, className = "" }) => {
  return (
    <article
      className={`flex flex-col gap-6 p-4 border rounded-xl font-openSans shadow-custom w-4/5 max-w-[320px] lg:w-full mx-auto ${className}`}
      aria-label={`Product ${product.name ?? "Product"}`}
    >
      <div className="flex flex-col gap-4">
        <div className="relative w-full h-40 overflow-hidden rounded-md">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt || product.name || "product image"}
            fill
            sizes="(max-width: 1024px) 100vw, 320px"
            className="object-cover object-center"
            priority={false}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium lg:text-base text-(--heading-colour)">
              {product.name ?? "Product Name"}
            </span>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-[#414652]">
              <MapPin className="w-3 h-3" />
              <span>{product.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="text-lg font-semibold text-(--heading-colour)">
              ${product.price}
              <span className="text-sm">/Ton</span>
            </div>

            <Link
              href={product.productDetailsLink}
              className="text-[#FFF8F8] text-sm bg-(--agro-green-dark) hover:bg-(--agro-green-light) px-3 py-1.5 rounded-full shadow-lg"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
