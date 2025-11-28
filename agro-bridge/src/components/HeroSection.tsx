
"use client";

import Image from "next/image";
import PrimaryLink from "./LinkPrimary";
import SecondaryLink from "./LinkSecondary";
import { MousePointer } from "lucide-react";

interface HeroSectionProps {
  backgroundImageUrl: string;
  backgroundImageAlt: string;
  heading: string;
  paragraph: string;

  primaryCta?: {
    label: string;
    href: string;
  };

  secondaryCta?: {
    label: string;
    href: string;
  };

  showCtas?: boolean;

  sponsors?: Sponsor[];
}

interface Sponsor {
  imageUrl: string;
  imageAlt: string;
}

const defaultSponsors: Sponsor[] = [
  { 
    imageUrl: "/landing/logo_cargill.png", 
    imageAlt: "Cargill logo" 
  },
  { 
    imageUrl: "/landing/logo_louis_dreyfus_company.png", 
    imageAlt: "Louis Dreyfus Company logo" 
  },
  { 
    imageUrl: "/landing/logo_kuehnenagel.png", 
    imageAlt: "Kuehne+Nagel logo" 
  },
  { 
    imageUrl: "/landing/logo_cargo.png", 
    imageAlt: "Cargo logo" 
  },
];

export default function HeroSection({
  backgroundImageUrl,
  backgroundImageAlt,
  heading,
  paragraph,
  primaryCta,
  secondaryCta,
  showCtas = true,
  sponsors = defaultSponsors,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen font-openSans lg:h-dvh">
      {/* Background Image */}
      <Image
        src={backgroundImageUrl}
        alt={backgroundImageAlt}
        fill
        className="object-cover dark:invert"
        priority
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-12 w-full max-w-4xl mx-auto h-full">
        {/* Top Content */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 py-12 sm:py-20 lg:py-30 sm:gap-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h1 className="max-w-3xl text-3xl font-bold text-center text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h1>

            <p className="max-w-xl mx-auto text-lg text-center text-white font-indie">
              {paragraph}
            </p>
          </div>

          {/* CTA Links - conditionally rendered */}
          {showCtas && (primaryCta || secondaryCta) && (
            <div className="flex flex-wrap justify-center gap-4">
              {primaryCta && (
                <PrimaryLink
                  href={primaryCta.href}
                  label={primaryCta.label}
                  icon={MousePointer}
                  rotateClass="rotate-90"
                />

                
              )}

              {secondaryCta && (
                <SecondaryLink
                  href={secondaryCta.href}
                  label={secondaryCta.label}
                />
              )}
            </div>
          )}
        </div>

        {/* Sponsor Bar - always visible unless you want to hide it later */}
        <div className="flex flex-wrap items-center justify-center gap-6 mx-auto mt-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.imageAlt}
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}