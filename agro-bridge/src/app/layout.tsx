
import type { Metadata } from "next";
import { inter, openSans } from "./fonts";
import "./globals.css";

import RootLayoutWrapper from "~/components/RootLayoutWrapper";
import { Toaster } from "sonner";

const metadata: Metadata = {
  // This applies to EVERY page
  metadataBase: new URL("https://agro-bom-vercel.vercel.app"),

  title: {
    template: "%s | AgroBridge", 
    default: "AgroBridge | Bridging Farmers to Global Buyers",
  },

  description: "Premium Nigerian agricultural products. Verified farmers. Secure payments. Direct from source.",

  authors: [{
    name: "Agrobridge Team", 
    url: "https://agro-bom-vercel.vercel.app/",
  }],

  creator: "AgroBridge Team",
  publisher: "AgroBridge",  

  robots : {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AgroBridge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgroBridge - Premium Nigerian Crops",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
    creator: "@agrobridge",
    images: {
      url: "/twitter-image.png",
      alt: "Agrobridge Twitter Card",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <RootLayoutWrapper>
            {children}
          </RootLayoutWrapper>
          <Toaster richColors position="top-right" />
        </body>
      </html>
    </>
  );
}