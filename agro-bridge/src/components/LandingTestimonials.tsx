
"use client";

import PersonaCard, { type UserPersona } from "~/components/UserPersona";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Flower, Flower2, LucideFlower, LucideFlower2, TreePine, TreePalm } from "lucide-react";

const userPersona: UserPersona[] = [
  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but Debridger changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 3.5,
    description: "Sourcing from Africa used to be complicated, but Debridger changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/man-1.jpg",
    imageAlt: "man standing beside wall ",
    name: "Goodness J.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but Debridger changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-2.jpg",
    imageAlt: "woman in white scoop neck shirt smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 4,
    description: "Sourcing from Africa used to be complicated, but Debridger changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/man-1.jpg",
    imageAlt: "man's grey and black shirt",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but Debridger changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },
];

export default function UserPersona() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  // Number of “pages"
  const totalPages = 3;

  // Track scroll position and update dot index
  useEffect(() => {
    function handleScroll() {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.scrollWidth / totalPages;

      const newPage = Math.round(scrollLeft / sectionWidth);
      setPage(newPage);
    }

    const div = scrollRef.current;
    if (div) div.addEventListener("scroll", handleScroll);

    return () => div?.removeEventListener("scroll", handleScroll);
  }, [totalPages]);

  function scrollToPage(p: number) {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const sectionWidth = container.scrollWidth / totalPages;

    container.scrollTo({
      left: p * sectionWidth,
      behavior: "smooth",
    });
  }


  return (
    <>
      {/* Testimonials / Buyer Personas */}
      <section className="relative font-openSans py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

          <h2 className="text-lg font-normal font-indie lg:text-xl text-center text-(--heading-color)">
            Trusted by Buyers Across the U.S
          </h2>

          <div 
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-hidden scroll-smooth"
          >
            <div className="absolute translate-y-1/2 left-3">
              <Flower className="w-6 h-6 text-(--agro-green-dark)" />
            </div>

            {userPersona.map((persona: UserPersona, index) => (
              <PersonaCard key={index} persona={persona} />
            ))}

            <div className="absolute flex justify-end translate-y-1/2 right-3">
              <Flower className="w-6 h-6 text-(--agro-green-dark)" />
            </div>
            
          </div>

          {/* Pagination Arrows */}
          <div className="flex items-center justify-center gap-3 py-4">

            {/* LEFT ARROW */}
            <button
              onClick={() => scrollToPage(Math.max(0, page - 1))}
              className="p-2 transition-all duration-300 ease-in-out border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => scrollToPage(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer duration-300 ease-in-out transition-all 
                    ${page === i ? "bg-(--agro-green-dark)" : "bg-gray-300"}`}
                />
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() => scrollToPage(Math.min(totalPages - 1, page + 1))}
              className="p-2 transition-all duration-300 ease-in-out border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

          </div>

          
        </div>
      </section>        
    </>
  );
}