
"use client";

import Image from "next/image";
import { TreePalm, MousePointer } from "lucide-react";
import ConnectingMission from "./ConnectingMission";
import PrimaryLink from "./LinkPrimary";
import { motion } from "framer-motion";

interface List {
  title: string;
  description: string;
}

const listItems: List[] = [
  {
    title: "Direct Sourcing:",
    description: "We work closely with farmers, cooperatives, and processors to ensure buyers access premium-grade agricultural products sourced straight from the farm."
  },
  {
    title: "Quality & Verification:",
    description: "Every product listed passes through our verification process, grading, documentation, and compliance checks."
  },
  {
    title: "Secure Transactions:",
    description: "Through escrow-backed payments, buyers transact safely while farmers receive guaranteed payouts."
  }
];

export default function ConnectingFarms() {

  return (
    <>
      {/* Connecting Farmers */}
      <section className="relative font-openSans py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

          {/* Images */}
          <div className="relative w-full h-full">

            {/* BIG IMAGE - animate from left */}
            <motion.div 
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="relative w-4/5 h-90 lg:h-110 rounded-xl"
            >
              <Image
                src="/landing/connecting-farms-1.jpg"
                alt="Connecting farms 1"
                fill
                className="object-contain object-cover w-full h-full rounded-xl"
              />
            </motion.div>

            {/* ABSOLUTE IMAGE - animate from bottom */}
            <motion.div
              initial={{ y: 140, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute right-0 z-20 w-1/2 p-4 overflow-hidden border-white top-1/4 max-w-110 border-10 h-1/2 rounded-xl"
            >

              <Image
                src="/landing/connecting-farms-2.jpg"
                alt="Connecting farms 2"
                fill
                className="object-cover w-full h-full"
              />
                            
            </motion.div>
          </div>

          {/* Right Hand Side */}
          <div className="relative flex flex-col w-full h-full gap-6">
            
            {/* Font: Indie Flower */}
            <ConnectingMission
              titleText="Connecting Farms to the World"
            />
            
            {/* Heading */}
            <h2 className="text-xl font-openSans font-semibold text-(--heading-colour) lg:text-xl">
              Debrigger
            </h2>

            <p className="font-normal text-(--text-colour) font-openSans">
              Modern agricultural export platform built to connect African farmers directly with global buyers. 
              We exist to remove the long chain of middlemen, reduce fraud, and give international importers a reliable way to source high-quality produce at scale.
            </p>

            <div className="flex flex-col gap-4">
              {listItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <TreePalm className="text-(--agro-green-dark) w-6 h-6" />
                  <div className="text-(--colour)">
                    <span className="text-(--agro-green-dark) font-semibold">{item.title}</span>&nbsp;{item.description}              
                  </div>
                </div>
              ))}
            </div>

            <PrimaryLink
              href="/about"
              label="See more"
              icon={MousePointer}
              rotateClass="rotate-90"
              className="mx-auto lg:mx-0"
            />
            
          </div>      
          
        </div>
      </section>      
    </>
  );
}