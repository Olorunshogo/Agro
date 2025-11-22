
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "How It Works – 3 Simple Steps",
  description: "Discover how AgroBridge connects you with verified Nigerian farmers in just 3 steps.",

  keywords: [
    "how it works", "agrobridge process", "buying process",
    "crop sourcing steps", "export from nigeria"
  ],

  openGraph: {
    url: "/how-it-works",
    title: "How It Works – 3 Simple Steps | AgroBridge",
    description: "Browse → Request Quote → We handle quality & logistics.",
  },

  twitter: {
    title: "How It Works – 3 Simple Steps | AgroBridge",
    description: "Browse → Request Quote → We handle quality & logistics.",
  },

  alternates: { canonical: "/how-it-works" },
  robots: { index: true, follow: true },
};


export default function HowItWorksPage() {
  return (
    <div>How It Works Page</div>
  )
}
