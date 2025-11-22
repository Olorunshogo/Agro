
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Account Settings – Profile & Preferences",
  description: "Update your profile, payment methods, notifications, and account preferences.",

  keywords: [
    "account settings", "profile settings", "payment methods",
    "notifications", "agrobridge account"
  ],

  openGraph: {
    url: "/dashboard/settings",
    title: "Account Settings – Profile & Preferences | AgroBridge",
    description: "Manage your AgroBridge account and preferences.",
  },

  twitter: {
    title: "Account Settings – Profile & Preferences | AgroBridge",
    description: "Manage your AgroBridge account and preferences.",
  },

  alternates: { canonical: "/dashboard/settings" },  
  robots: { index: false, follow: true },
};

export default function DashboardSettingsPage() {
  return (
    <div>Dashboard Settings Page</div>
  )
}
