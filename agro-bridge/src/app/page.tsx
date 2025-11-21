
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MousePointer, Search,
  DollarSign, Truck
} from "lucide-react";

import HeroSection from "~/components/HeroSection";
import ProductCard, { ProductInfo } from "~/components/ProductCard";
import HowItWorksGallery, { SlidePair, ControlButton } from "~/components/HowItWorksGallery";
import PersonaCard, { type UserPersona } from "~/components/UserPersona";

import type { Metadata } from "next";
import type { Sponsor } from "./types/types";


// Static metadata
const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Agrobridge",
  },
  description:
    "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
  keywords: "Agrobridge, farmers, sellers, agriculture, crops, marketplace",
  authors: [
    { 
      name: "Agrobridge Team", 
      url: "https://agro-bom-vercel.vercel.app/",
    }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agro-bom-vercel.vercel.app/",
    title: "Agrobridge | Bridging Farmers to Sellers",
    description: "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
    siteName: "Agrobridge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,  
        height: 630,
        alt: "Agrobridge - Connecting Farmers to Sellers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
    title: "Agrobridge | Bridging Farmers to Sellers",
    description: "Agrobridge connects farmers with the right sellers for their crops.",
    images: "/twitter-image.png",
  },
};

const sponsors: Sponsor[] = [
  { imageUrl: "/cargill_logo.png", imageAlt: "Sponsor Two" },
  { imageUrl: "/louis_dreyfus_company_logo.png", imageAlt: "Sponsor One" },
  { imageUrl: "/kuehnenagel_logo.png", imageAlt: "Sponsor Three" },
  { imageUrl: "/cargo_logo.png", imageAlt: "Sponsor Four" },
];

const productsInfo: ProductInfo[] = [
  {
    inStock: true,
    imageUrl: "/product-1.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-2.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-3.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-4.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  }
];

const userPersona: UserPersona[] = [
  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 3.5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/man-1.jpg",
    imageAlt: "man standing beside wall ",
    name: "Goodness J.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-2.jpg",
    imageAlt: "woman in white scoop neck shirt smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 4,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/man-1.jpg",
    imageAlt: "man's grey and black shirt",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },
];


export default function Home() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const howItWorksImageSlides: SlidePair[] = [
    { 
      id: "s1",
      imageUrlA: "/howitworks-1a.png",
      imageUrlB: "/howitworks-1b.jpg",
      imageAltA: "Step 1 image A",
      imageAltB: "Step 1 image B",
    },
    {
      id: "s2",
      imageUrlA: "/howitworks-2a.png",
      imageUrlB: "/howitworks-2b.png",
      imageAltA: "Step 2 image A",
      imageAltB: "Step 2 image B",
    },
    {
      id: "s3",
      imageUrlA: "/howitworks-3a.png",
      imageUrlB: "/howitworks-3b.jpg",
      imageAltA: "Step 3 image A",
      imageAltB: "Step 3 image B",
    },
  ];

  // Controls/buttons (right-hand side) — each has imageIndex pointing into slides
  const howItWorksImageControls: ControlButton[] = [
    {
      id: "c1",
      label: "Browse Products",
      subtitle: "View verified agricultural products with full export details.",
      imageIndex: 0,
      icon: Search,
    },
    {
      id: "c2",
      label: "Request a Quote",
      subtitle: "Tell us your quantity and delivery destination",
      imageIndex: 1,
      icon: DollarSign,
    },
    {
      id: "c3",
      label: "We Handle the Rest",
      subtitle: "We Handle the Rest",
      imageIndex: 2,
      icon: Truck,
    },
  ];

  return (
    <main className="relative font-openSans">
      <div className="flex flex-col gap-12 w-full -mt-(--navbar-h) h-full bg-(--primary-bg-light) dark:bg-black">
        
        {/* Home Hero Section */}
        <HeroSection 
          backgroundImage="/home-landing-page.png"
          heading="Buy Fresh Farm Produce Directly from Source at the Best Price."
          paragraph="AgroBridge connects international buyers with premium-quality agricultural goods sourced and verified by our team in Nigeria."
          showCtas={true}
          primaryCta={{
            text: "Get Started",
            href: "/products",
          }}
          secondaryCta={{
            text: "Request a Quote",
            href: "/contact",
          }}
        />

        {/* Products Section */}
        <section className="relative py-(--section-py) sm:py-( ) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
              Featured Products Section
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* <div className="grid gap-4 grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"></div> */}
              {productsInfo.map((p: ProductInfo, index) => (
                <ProductCard key={index} product={p} />
              ))}
            </div>
            
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-(--section-py) sm:py-( ) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">
          {/* Background Image */}
          <Image
            src="/home-landing-page.png"
            alt=""
            fill
            className="z-0 object-cover dark:invert"
            priority
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-0 bg-black/50"></div>
          
          <div className="z-10 flex flex-col w-full h-full gap-8">

            {/* Heading */}
            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color-2)">
              How It Works
            </h2>

            {/* Image & Buttons */}
            <HowItWorksGallery 
              slides={howItWorksImageSlides} 
              controls={howItWorksImageControls}
              maxVisibleDots={5}
            />
            
          </div>
            
          </div>
        </section>        

        {/* User Persona Section */}
        <section className="relative py-(--section-py) sm:py-( ) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
              Trusted by Buyers Across the U.S
            </h2>

            <div className="flex items-center gap-8 overflow-x-auto scroll-smooth">

              {userPersona.map((persona: UserPersona, index) => (
                <PersonaCard key={index} persona={persona} />
              ))}
              
            </div>
            
          </div>
        </section>        

      </div>

    </main>
  );
}