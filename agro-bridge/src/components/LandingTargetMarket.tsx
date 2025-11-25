
"use client";

import Image from "next/image";
import PrimaryLink from "./LinkPrimary";

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
      <div className="flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

      {/* Our Mission Header */}
      <div className="flex flex-col gap-4 mx-auto text-center">
        <h2 className="text-lg lg:text-xl font-bold text-(--text-color)">
          Finance and Growth Strategy
        </h2>

        <p className="text-(--text-xolour) text-lg lg:text-xl">
          Industries needing high-grade raw materials for manufacturing.
        </p>
      </div>

      {/* Target Market Grid */}
      <div className="grid w-full h-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {/* Test Market Image */}        
        {targetMarkets.map((market) => (
          <div 
            key={market.id}
            className="relative flex items-center justify-center w-full max-w-[350px] mx-auto overflow-hidden text-center rounded-full h-full max-h-[350px]"
          >
            {/* Background Image */}
            <Image
              src={market.imageUrl}
              alt={market.imageAlt}
              fill
              className="object-cover dark:invert"
              priority
              sizes="100vw"
            />
          
            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-black/70" />
      
            {/* Content */}
            <div className="relative z-20 flex flex-col font-openSans justify-center px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-12 w-full max-w-4xl mx-auto h-full">
              {/* Top Content */}
              <div className="flex flex-col items-center justify-center flex-1 gap-8 py-12 sm:py-20 lg:py-30 sm:gap-12">
                <div className="flex flex-col items-center justify-center gap-4 text-center font-openSans">
                  <h1 className="text-2xl font-bold text-center text-white lg:text-3xl">
                    {market.heading}
                  </h1>
      
                  <p className="text-lg text-center text-white">
                    {market.description}
                  </p>
                </div>
      

              </div>
      

            </div>
            
          </div>
        ))}
      </div>

      {/* See More Link */}
      <div className="flex items-center justify-center mx-auto">
        <PrimaryLink
          href="/about"
          text="See more"      
        />  
      </div>      
        
      </div>
    </section>   
  )
}
