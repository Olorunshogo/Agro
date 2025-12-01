
"use client";

import Image from "next/image";
import PrimaryLink from "./LinkPrimary";
import { ConnectingBorder } from "./connecting-border";

interface TargetMarketItem {
  id: string;
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
}

const targetMarkets: TargetMarketItem[] = [
  {
    id: "tm1",
    imageUrl: "/landing/target-market-1.jpg",
    imageAlt: "Bulk Produce Buyer background image",
    heading: "Bulk Produce Buyers",
    description: "Companies sourcing, cocoa, sesame, ginger, and other export crop"
  },
  {
    id: "tm2",
    imageUrl: "/landing/target-market-2.jpg",
    imageAlt: "Importers & Distributors background image",
    heading: "Importers & Distributors",
    description: "Firms looking for verified suppliers and consistent shipment quality "
  },
  {
    id: "tm3",
    imageUrl: "/landing/target-market-3.jpg",
    imageAlt: "Food Processing Firm background image",
    heading: "Food Processing Firm",
    description: "Industries needing high-grade raw materials for manufacturingg."
  },
];

export default function TargetMarket() {
  return (
    <section className="relative font-openSans overflow-hidden bg-[#F7F7F7]">
      <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

      {/* Background Image */}
      <div className="absolute w-full h-full inset-0 z-0">
        <Image
          src="/landing/target-market-bg.jpg"
          alt="Target Market Background Image"
          fill
          className="object-cover object-contain"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-white via-white to-white/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-12 w-full h-full">
        {/* Our Mission Header */}
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h2 className="text-lg lg:text-xl font-bold text-(--text-color)">
            Target Market
          </h2>

          <p className="text-(--text-xolour) text-lg lg:text-xl">
            We serve a wide range of business that rely on consistent agricultural supply chain.
          </p>
        </div>

        {/* Target Market Image Grid */}
        <div className="grid w-full h-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">      
          {targetMarkets.map((market) => (
            <div 
              key={market.id}
              className="relative flex items-center justify-center border-6 border-(--agro-green-dark) w-full max-w-[300px] mx-auto overflow-hidden text-center rounded-full h-[280px] sm:h-[300px]"
            >
              {/* Grid Background Image */}
              <Image
                src={market.imageUrl}
                alt={market.imageAlt}
                fill
                className="object-cover dark:invert"
                priority
                sizes="100vw"
              />
            
              {/* Dark Overlay */}
              <div className="absolute inset-0 z-10 bg-black/70 overflow-hidden" />
        
              {/* Content */}
              <div className="relative z-20 flex flex-col font-openSans justify-center p-4 w-full max-w-2xl mx-auto h-full">
                {/* Top Content */}
                <div className="flex flex-col items-center justify-center gap-4 text-center font-openSans">
                  <h1 className="text-xl font-bold text-center text-white lg:text-2xl">
                    {market.heading}
                  </h1>
      
                  <p className="lg:text-base text-center text-white">
                    {market.description}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="flex items-center justify-center mx-auto">
          <PrimaryLink
            href="/about"
            label="See more"      
            rotateClass="rotate-90"
          /> 
        </div>      
      </div>
        
      </div>
    </section>   
  )
}
