
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
      <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/landing/target-market-bg.jpg"
          alt="Target Market Background Image"
          fill
          className="object-contain object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-white via-white to-white/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full h-full gap-12">
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
        <div className="grid w-full h-full grid-cols-1 gap-8 lg:grid-cols-3">      
          {targetMarkets.map((market) => (
            <div 
              key={market.id}
              className="relative flex items-center justify-center border-6 border-(--agro-green-dark) w-full max-w-[320px] mx-auto overflow-hidden text-center rounded-full h-[320px]"
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
              <div className="absolute inset-0 z-10 overflow-hidden bg-black/70" />
        
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center w-full h-full max-w-2xl p-4 mx-auto font-openSans">
                {/* Top Content */}
                <div className="flex flex-col items-center justify-center gap-4 text-center font-openSans">
                  <h1 className="text-xl font-bold text-center text-white lg:text-2xl">
                    {market.heading}
                  </h1>
      
                  <p className="text-center text-white lg:text-base">
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
