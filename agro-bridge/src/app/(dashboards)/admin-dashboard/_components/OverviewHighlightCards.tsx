
"use client";

import { Package, OrbitIcon, DollarSign, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  Package,
  OrbitIcon,
  DollarSign,
  Users,
};

interface Highlight {
  icon: string;
  value: number;
  heading: string;
}

interface Props {
  adminHighlights: Highlight[];
}

export default function OverviewHighlightCards({ adminHighlights }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {adminHighlights.map((highlight) => {
        const Icon = iconMap[highlight.icon];
        return (
          <div
            key={highlight.heading}
            className="flex flex-col gap-4 p-6 transition-all border rounded-md shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="p-2 bg-green-100 rounded-full">
                {Icon && <Icon className="w-5 h-5 text-green-700" />}
              </span>
              <span className="text-xl font-bold">{highlight.value}</span>
            </div>
            <div className="text-sm text-gray-600">{highlight.heading}</div>
          </div>
        );
      })}
    </div>
  );
}