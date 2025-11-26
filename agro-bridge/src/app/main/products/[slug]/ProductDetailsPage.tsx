
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "~/app/(main)/products/[slug]/Breadcrumbs";
// import { useParams } from "next/navigation";
import { useProducts } from "~/store/useProduct";
import { notFound } from "next/navigation";
import { DollarSign, Download } from "lucide-react";

export default function ProductDetailPage({ slug }: { slug: string }) {
  // const { slug } = useParams();
  const products = useProducts();  
  const product = products.find((p) => p.slug === slug);
  
  if (!product) notFound();

  const category = product.category || "General"

  const gallery = product.galleryImages || [];
  const images = [
    { url: product.imageUrl, alt: product.imageAlt },
    ...gallery,
  ].slice(0, 3); // Limit to 3 images

  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col min-h-screen gap-12 py-12">
      <div className="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">
        {/* Breadcrumbs */}
        <Breadcrumbs
          category={category}
          productName={product.name}
        />
        
        <div className="grid w-full h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
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

            {/* Thumbnails */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMainImage(img);
                    setActiveIndex(index);
                  }}
                  className={`relative overflow-hidden border-2 rounded-md hover:cursor-pointer duration-300 ease-in-out transition-all ${
                    activeIndex === index
                      ? "border-(--agro-green-dark) ring-2 ring-(--agro-green-dark) ring-offset-2"
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

          {/* Product Information */}
          <div className="flex flex-col gap-6">
            {/* Product Name */}
            <h1 className="text-3xl font-bold text-(--text-colour)">{product.name}</h1>

            {/* Price */}
            <div className="text-4xl font-bold text-(--agro-green-dark)">
              ${product.price.toFixed(2)} 
              <span className="text-lg  text-(--heading-colour) font-normal">/ Ton</span>
            </div>

            <div className="flex flex-col gap-4 text-(--text-colour) *:grid *:w-full *:h-full *:grid-cols-2">
              {/* Seeds */}
              {product.seeds && 
                <p>
                  <span>Seeds:</span> 
                  <span className="text-(--heading-colour)">{product.seeds}</span>
                </p>
              }
              {/*Availability */}
              <p>
                <span>Availability:</span> 
                <span className="text-(--heading-colour) font-semibold">{product.availability}</span>
              </p>
              {/* Min Order */}
              <p>
                <span>Min Order:</span> 
                <span className="text-(--heading-colour) font-semibold">{product.minimumOrder}</span>
              </p>
              {/* Grade */}
              <p>
                <span>Grade:</span>
                <span className="text-(--heading-colour) font-semibold">{product.grade}</span>
              </p>
              {/* Packaging */}
              <p>
                <span>Packaging:</span>
                <span className="text-(--heading-colour) font-semibold">{product.packaging}</span>
              </p>
            </div>

            <p className="text-(--text-colour) font-medium">{product.originDetails}</p>
            
            {/* Request a Quote Link */}
            <Link
              href="/request-quote"
              className="flex items-center gap-2 text-white hover:text-black bg-(--agro-green-dark) hover:bg-(--agro-green-light) px-8 py-3 rounded-full font-medium w-fit"
            >
              <DollarSign className="w-5 h-5" />
              Request a Quote
            </Link>
            {/* <a
              href={product.downloadSpecSheetUrl || "#"}
              download
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Download Spec Sheet (PDF)
            </a> */}
            <a
              href={product.downloadSpecSheetUrl || "#"}
              download
              className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-(--agro-green-dark) w-fit"
            >
              <Download className="w-4 h-4" />
              Download Product Spec Sheet (PDF)
            </a>

          </div>
        </div>
          

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="flex flex-col gap-8">

            <h2 className="text-2xl font-bold">Related Products</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="flex items-center gap-4 transition-all duration-300 ease-in-out rounded-lg group"
                >
                  <div className="relative w-24 h-20 transition-all duration-300 ease-in-out group-hover:scale-105">
                    <Image 
                      src={rel.imageUrl} 
                      alt={rel.name} 
                      width={200}
                      height={200} 
                      className="object-cover w-full h-full rounded-md shadow-md" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="line-clamp-2 group-hover:text-(--agro-green-dark)">{rel.name}</h3>
                    <p className="text-lg font-bold text-(--agro-green-dark) line-clamp-2">
                      ${rel.price}/Ton
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}