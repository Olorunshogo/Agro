import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



import { Product } from "~/app/types/types";

export function getRandomRelatedProducts(allProducts: Product[], currentSlug: string, count = 4) {
  const filtered = allProducts.filter(p => p.slug !== currentSlug);

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count).map(p => ({
    slug: p.slug,
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    description: p.description,
  }));
}

export function randomizeProducts(products: Product[]): Product[] {
  return products.map(product => ({
    ...product,
    relatedProducts: getRandomRelatedProducts(products, product.slug),
  }));
}

