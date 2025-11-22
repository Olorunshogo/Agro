
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how AgroBridge protects your personal information and respects your privacy.",

  keywords: [
    "privacy policy", "data protection", "agrobridge privacy",
    "buyer privacy"
  ],

  openGraph: {
    url: "/privacy",
    title: "Privacy Policy | AgroBridge",
    description: "We never sell your data. Full transparency on how we protect your information.",
  },

  twitter: {
    title: "Privacy Policy | AgroBridge",
    description: "We never sell your data.",
  },

  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div>Privacy Policy Page</div>
  )
}
