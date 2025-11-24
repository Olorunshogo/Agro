
"use client";

import PersonaCard, { type UserPersona } from "~/components/UserPersona";

const userPersona: UserPersona[] = [
  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 3.5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/man-1.jpg",
    imageAlt: "man standing beside wall ",
    name: "Goodness J.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-2.jpg",
    imageAlt: "woman in white scoop neck shirt smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 4,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/man-1.jpg",
    imageAlt: "man's grey and black shirt",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/landing/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },
];

export default function LandingUserPersona() {

  return (
    <>
      {/* Testimonials / Buyer Personas */}
      <section className="relative font-openSans py-(--section-py) lg:py-(--section-py-lg) overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

          <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
            Trusted by Buyers Across the U.S
          </h2>

          <div className="flex items-center gap-8 overflow-x-auto scroll-smooth">

            {userPersona.map((persona: UserPersona, index) => (
              <PersonaCard key={index} persona={persona} />
            ))}
            
          </div>
          
        </div>
      </section>        
    </>
  );
}