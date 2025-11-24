// app/(main-site)/products/[slug]/page.tsx
"use client"; // ← Important: This must be a Client Component

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "~/store/products";
import { useState } from "react";

async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };

  return {
    title: `${product.name} | AgroBridge`,
    description: product.seoDescription || product.description,
  };
}

async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const gallery = product.galleryImages || [];
  const images = [
    { url: product.imageUrl, alt: product.imageAlt },
    ...gallery,
  ].slice(0, 4);

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="grid gap-12 px-4 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden border rounded-lg h-96 lg:h-full min-h-96">
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              fill
              className="object-cover transition-all duration-300"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setMainImage(img);
                  setActiveIndex(index);
                }}
                className={`relative overflow-hidden border-2 rounded-md transition-all ${
                  activeIndex === index
                    ? "border-[var(--agro-green-dark)] ring-2 ring-[var(--agro-green-dark)] ring-offset-2"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="object-cover w-full h-24"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-4xl font-bold text-[var(--agro-green-dark)]">
            ${product.price.toFixed(2)} <span className="text-lg font-normal">/ Ton</span>
          </div>

          <div className="space-y-4 text-gray-700">
            {product.seeds && <p><strong>Seeds:</strong> {product.seeds}</p>}
            <p>
              <strong>Availability:</strong> 
              <span className="text-green-600">{product.availability}</span>
            </p>
            <p>
              <strong>Min Order:</strong> {product.minimumOrder}
            </p>
            <p>
              <strong>Grade:</strong> {product.grade}</p>
            <p>
              <strong>Packaging:</strong> {product.packaging}</p>
          </div>

          <p className="text-gray-600">{product.originDetails}</p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-[var(--agro-green-dark)] hover:bg-[var(--agro-green-light)] text-white px-8 py-3 rounded-lg font-medium"
            >
              Request a Quote
            </Link>
            <a
              href={product.downloadSpecSheetUrl || "#"}
              download
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Download Spec Sheet (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="px-4 mx-auto mt-20 max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className="block overflow-hidden transition-shadow border rounded-lg hover:shadow-lg"
              >
                <div className="relative h-48">
                  <Image src={rel.imageUrl} alt={rel.name} fill className="object-cover" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{rel.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-[var(--agro-green-dark)]">
                    ${rel.price}/Ton
                  </p>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">{rel.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}