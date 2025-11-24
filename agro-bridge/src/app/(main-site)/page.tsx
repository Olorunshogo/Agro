
"use client";

import { useState, useEffect } from "react";
import HeroSection from "~/components/HeroSection";
import LandingProducts from "~/components/LandingProducts";
import LandingHowitworks from "~/components/LandingHowitWorks";
import LandingUserPersona from "~/components/LandingTestimonials";

// Static metadata
const metadata = {
  title: "Buy Direct from Nigerian Farmers",
  description: "Source sesame, cashew, cocoa & more directly from verified farmers in Nigeria.",
  
  keywords: [
    "Agrobridge", "sellers", "crops",
    "Nigerian agriculture",
    "export crops Nigeria",
    "buy farm produce Africa",
    "agricultural marketplace",
    "sesame seeds export",
    "cashew nuts Nigeria",
    "cocoa beans export",
    "verified farmers"
  ],

  openGraph: {
    url: "/",
    title: "AgroBridge | Buy Direct from Nigerian Farmers",
    description: "Best prices. Verified quality. End-to-end logistics.",
  },

  twitter: {
    title: "Agrobridge | Buy Direct from Nigerian Farmers",
    description: "Premium crops. Verified suppliers. Seamless export logistics.",
  },

  alternates: {
    canonical: "/"
  },
};

export default function Home() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative font-openSans">
      <div className="flex flex-col gap-12 w-full -mt-(--navbar-h) h-full bg-(--primary-bg-light) dark:bg-black">
        
        {/* Hero */}
        <HeroSection 
          backgroundImageUrl="/home-landing-page.png"
          backgroundImageAlt="A picture of farmers bagging their farm produce"
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

        {/* Featured Products */}
        <LandingProducts />

        {/* How It Works */}
        <LandingHowitworks />      

        {/* Testimonials / Buyer Personas */}
        <LandingUserPersona />
      </div>

    </main>
  );
}