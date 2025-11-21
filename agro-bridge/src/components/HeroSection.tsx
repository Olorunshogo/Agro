"use client";

import Image from "next/image";
import Link from "next/link";
import { MousePointer } from "lucide-react";
import type { Sponsor } from "~/app/types/types";

interface HeroSectionProps {
  backgroundImage: string;
  heading: string;
  paragraph: string;

  primaryCta?: {
    text: string;
    href: string;
  };

  secondaryCta?: {
    text: string;
    href: string;
  };

  showCtas?: boolean;

  sponsors?: Sponsor[];
}

const defaultSponsors: Sponsor[] = [
  { imageUrl: "/cargill_logo.png", imageAlt: "Cargill" },
  { imageUrl: "/louis_dreyfus_company_logo.png", imageAlt: "Louis Dreyfus Company" },
  { imageUrl: "/kuehnenagel_logo.png", imageAlt: "Kuehne+Nagel" },
  { imageUrl: "/cargo_logo.png", imageAlt: "Cargo" },
];

export default function HeroSection({
  backgroundImage,
  heading,
  paragraph,
  primaryCta,
  secondaryCta,
  showCtas = true,
  sponsors = defaultSponsors,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen lg:h-dvh">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover dark:invert"
        priority
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-12 w-full max-w-4xl mx-auto h-full">
        {/* Top Content */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 py-12 sm:py-20 lg:py-30 sm:gap-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h1 className="max-w-3xl text-3xl font-bold text-center text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h1>

            <p className="mx-auto text-sm text-center text-white max-w-xl lg:text-base">
              {paragraph}
            </p>
          </div>

          {/* CTA Links - conditionally rendered */}
          {showCtas && (primaryCta || secondaryCta) && (
            <div className="flex flex-wrap justify-center gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="flex items-center gap-2 text-white text-sm font-semibold border border-(--primary-bg-light) bg-(--agro-green-dark) hover:bg-(--agro-green-light) px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
                >
                  <span>{primaryCta.text}</span>
                  <MousePointer className="w-5 h-5 rotate-90" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-white text-sm font-semibold border border-(--primary-bg-light) bg-transparent hover:bg-(--agro-green-light) px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
                >
                  {secondaryCta.text}
                </Link>
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