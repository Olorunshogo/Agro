

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { BadgeCheck, SearchCheck, FunnelPlus, Truck, LucideIcon } from "lucide-react";
import HeroSection from "~/components/HeroSection";


import type { Metadata } from "next";
import type { OurProcess, TeamMember } from "../types/types";

// Static metadata
const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "About Us",
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

const ourProcesses: OurProcess[] = [
  {
    icon: BadgeCheck,
    heading: "Farm Verification & Onboarding",
    paragraph: "We rigorously vet and onboard local farms, ensuring they meet international standards for quality and ethical practices."
  },
  {
    icon: SearchCheck,
    heading: "Sourcing & Order Matching",
    paragraph: "Our platform intelligently matches global buyer demand with the right produce from our network of verified farms."
  },
  {
    icon: FunnelPlus,
    heading: "Rigorous Quality Assurance",
    paragraph: "Every batch undergoes strict quality control checks to guarantee freshness, safety, and compliance with standards."
  },
  {
    icon: Truck,
    heading: "Streamlined Logistics & Export",
    paragraph: "We handle all logistics, from packaging and transport to customs clearance, ensuring a seamless delivery."
  }
];

const teamMembers: TeamMember[] = [
  {
    imageUrl: "/team-member-1.jpg",
    imageAlt: "An image of John Doe",
    name: "John Doe",
    role: "Chief Executive Officer"
  },
  {
    imageUrl: "/team-member-2.jpg",
    imageAlt: "An image of Emmanuel Elisha",
    name: "Emmanuel Elisha",
    role: "Head of Logistics"
  },
  {
    imageUrl: "/team-member-3.jpg",
    imageAlt: "An image of Grace Peace.",
    name: "Grace Peace",
    role: "Chief Executive Officer"
  },
  {
    imageUrl: "/team-member-4.jpg",
    imageAlt: "An image of Kelvin Adams.",
    name: "Kelvin Adams",
    role: "Market Relation Officer"
  }
];

export default function AboutUsPage() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative font-openSans">
      <div className="flex flex-col gap-12 w-full -mt-(--navbar-h) h-full bg-(--primary-bg-light) dark:bg-black">

        {/* Home Hero Section */}
        <HeroSection 
          backgroundImage="/home-landing-page.png"
          heading="Our Mission is to Make African Produce Globally Accessible"
          paragraph="Debridger connects international buyers with premium-quality agricultural goods sourced and verified by our team in Nigeria."
          showCtas={false}
        />

        {/* Who We Are & Our Values Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-( ) lg:py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

            <div className="flex flex-col w-full h-full gap-6">
              <h2 className="text-(--heading-colour) lg:text-(--text-colour) text-xl lg:text-2xl font-semibold">Who Are We</h2>
              <p className="text-sm lg:text-lg text-(--text-colour)">
                Debridger is a tech-enabled export facilitator dedicated to showcasing the best of African agriculture on the global stage. 
                We believe in creating sustainable opportunities for local farmers by bridging the gap between their potential and international market demand.
              </p>
            </div>

            <div className="flex flex-col w-full h-full gap-6">
              <h2 className="text-(--heading-colour) lg:text-(--text-colour) text-xl lg:text-2xl font-semibold">Our Vision</h2>
              <p className="text-sm lg:text-lg text-(--text-colour)">
                Our vision is to be the most trusted bridge between African agricultural excellence and the international market, ensuring fair trade and prosperity for the communities we serve. 
                We aim to foster a global marketplace where quality and sustainability are paramount.
              </p>
            </div>


            
          </div>
        </section>

        {/* Our Process Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

            <div className="flex flex-col items-center max-w-xl gap-6 mx-auto text-center">
              <h2 className="text-(--heading-colour) lg:text-(--text-colour) text-xl lg:text-2xl font-semibold">Our Process</h2>
              <p className="text-sm lg:text-lg text-(--text-colour)">
                We follow a meticulous four- step to ensure quality, reliability  and efficiency from farm to port. 
              </p>
            </div>

            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
              {ourProcesses.map(({ icon: Icon, heading, paragraph }, index) => (
                <div 
                  key={index} 
                  className="flex flex-col gap-6 text-center p-6 border-1 border-(--border-gray) rounded-md shadow-custom cursor-text"
                >
                  <div className="flex items-center justify-center mx-auto p-3 rounded-full bg-[#FDF5E7]">
                    <Icon className="w-8 h-8 text-[#EF9E0B]" />
                  </div>

                  <h3 className="text-lg font-semibold text-(--heading-colour)">{heading}</h3>
                  <p className="text-sm text-(--text-colour)">{paragraph}</p>
                </div>
              ))}


            </div>
            
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-( ) lg:py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

            <div className="flex flex-col w-full h-full max-w-xl gap-6 mx-auto text-center">
              <h2 className="text-(--heading-colour) lg:text-(--text-colour) text-xl lg:text-2xl font-semibold">Meet the Team</h2>
              <p className="text-sm lg:text-lg text-(--text-colour)">
                The passionate individuals dedicated to bring continents through agriculture. 
              </p>
            </div>

            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
              {teamMembers.map(({ imageUrl, imageAlt, name, role }, index) => (
                <div 
                  key={index} 
                  className="flex flex-col gap-6 p-6 border-1 border-(--border-gray) rounded-md shadow-custom cursor-text"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={imageUrl}
                      alt={imageAlt ?? name}
                      width={400}
                      height={300}
                      priority
                      className="object-cover rounded-full w-[180px] h-[180px]"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-center">
                    <h3 className="text-sm lg:text-base text-(--text-colour) font-semibold">{name}</h3>
                    <p className="text-sm lg:text-base text-[#4ED17E] font-semibold">{role}</p>
                  </div>
                </div>
              ))}


            </div>
            
          </div>
        </section>

      </div>

    </main>
  );
}
