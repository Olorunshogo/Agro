
import ProductDetailPage from "./ProductDetailsPage";
import ProductSkeleton from "./ProductSkeleton";
import { Suspense } from "react";
import { products } from "~/store/products";
import { notFound } from "next/navigation";

// const ProductDetail = ProductDetailPage as unknown as ComponentType<{ slug: string }>;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Debridger",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.name} | Debridger`,
    description: product.seoDescription || product.description,
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!products.some(p => p.slug === slug)) {
    notFound();
  }

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetailPage slug={slug} />
    </Suspense>
  );
}
