
"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

interface StatusItem {
id: string;
label: string;
value: number;
}

interface CheckItem {
  id: string;
  label: string;
}

const checkItems: CheckItem[] = [
  { id: "c1", label: "Safe Environment" },
  { id: "c2", label: "Safe Environment" },
  { id: "c3", label: "Safe Environment" },
  { id: "c4", label: "Safe Environment" },
];

const statusItems: StatusItem[] = [
{ id: "s1", label: "Transparent funding flow", value: 86 },
{ id: "s2", label: "Accelerating farm-to-market progress", value: 69 },
];

export default function OurMission() {
  return (
    <section className="relative font-openSans py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) overflow-hidden bg-[#F7F7F7]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">

      {/* Our Mission Header */}
      <div className="flex flex-col w-full h-full gap-4 lg:gap-6">
        <h2 className="text-lg lg:text-xl font-bold text-(--text-color)">
          Finance and Growth Strategy
        </h2>

        <p className="text-black">
          With secure finacial tools and a marketplace built for expansion, weempower business to grow confidently 
        </p>

        {/* Safe Environment */}
        <div className="grid grid-cols-1 gap-4 lg:gap-6 font-indie sm:grid-cols-2">
          {checkItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-2 bg-white rounded-md shadow-md open_sans_6487050-module__9grdqG__variablegap-3"
            >
              <div className="w-5 h-5 text-white rounded-full bg-(--agro-green-dark) flex items-center justify-center shadow-md">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-(--text-colour) font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Status Bars */}
        <div className="flex flex-col gap-6 font-indie">
          {statusItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm font-medium text-(--text-colour)">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>


              <div className="w-full h-3 overflow-hidden rounded-full bg-slate-300">
                <div
                  className="h-full bg-(--agro-green-dark)"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Primary Link */}
        <Link
          href="/about"
          className="flex items-center font-inter gap-2 w-fit text-white text-sm font-semibold border border-(--primary-bg-light) bg-(--agro-green-dark) hover:bg-(--agro-green-light) px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
        >
          Learn how we Support Growth
        </Link>          

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative flex justify-center w-full h-full lg:justify-center lg:items-center">

        {/* Font Indie Flower */}
        <div className="absolute z-2 -translate-x-28 translate-y-0 lg:-translate-y-24 flex flex-col items-center justify-between font-indie bg-(--agro-green-dark) rounded-full w-28 h-28 p-4 overflow-hidden">

          {/* SEED */}
          <span className="text-sm font-semibold text-white lg:text-base">Seed</span>

          {/* BADGE for PLANT */}
          <div className="absolute w-32 top-10 z-2 bg-(--agro-green-dark-2) shadow-md">
            {/* Main badge rectangle */}
            <div className="relative z-10 px-4 py-0.5 text-base lg:text-lg font-bold text-center text-white rounded-md">
              Plant
            </div>
          </div>

          {/* GRAINS */}
          <span className="text-sm font-semibold text-white lg:text-base">Grains</span>

        </div>

        {/* Farmer's Picture */}
        <div className="z-1 w-74 h-74 mx-auto border-12 rounded-full border-[#4B7A51] relative lg:w-80 lg:h-80">
          <Image
            src="/landing/our-mission-farmer.jpg"
            alt="Farmer"
            fill
            className="object-contain object-cover w-full h-full rounded-full"
          />
        </div>

      </div>

        
      </div>
    </section>   
  )
}
