
// components/PersonaCard.tsx
import React from "react";
import Image from "next/image";
import { StarRating } from "~/components/StarRating";

export type UserPersona = {
  rating: number;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  name: string;
  location?: string;
};

type Props = {
  persona: UserPersona;
  className?: string;
};

export const PersonaCard: React.FC<Props> = ({ persona, className = "" }) => {
  return (
    <div
      className={`flex flex-col min-w-76 w-9/10 sm:w-full max-w-80 p-4 gap-4 border rounded-xl shadow-custom ${className}`}
    >
      <StarRating rating={persona.rating} />
      <p className="text-xs lg:text-sm text-[var(--text-colour)]">
        {persona.description}
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={persona.imageUrl}
          alt={persona.imageAlt ?? persona.name}
          width={40}
          height={40}
          className="object-cover w-10 h-10 rounded-full"
        />

        <div className="flex flex-col">
          <h3 className="font-bold text-[var(--heading-color)]">{persona.name}</h3>
          <p className="text-xs lg:text-sm text-[var(--text-colour)]">
            {persona.location ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
