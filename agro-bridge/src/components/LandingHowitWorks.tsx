
"use client";

import Image from "next/image";
import { Search, DollarSign, Truck } from "lucide-react";

import HowItWorksGallery, { SlidePair, ControlButton } from "~/components/HowItWorksGallery";


export default function LandingHowitworks() {

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
    <>
      {/* How It Works */}
      <section className="relative font-openSans py-(--section-py) lg:py-(--section-py-lg) overflow-hidden bg-white">
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
    </>
  );
}