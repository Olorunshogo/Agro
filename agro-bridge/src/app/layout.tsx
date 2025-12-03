

import { inter, openSans } from "./fonts";
import "./globals.css";
import { Toaster } from "sonner";

const metadata = {
  // This applies to EVERY page
  metadataBase: new URL("https://agro-bom-vercel.vercel.app"),

  title: {
    template: "%s | Debridger", 
    default: "Debridger | Bridging Farmers to Global Buyers",
  },

  description: "Premium Nigerian agricultural products. Verified farmers. Secure payments. Direct from source.",

  authors: [{
    name: "Debridger Team", 
    url: "https://agro-bom-vercel.vercel.app/",
  }],

  creator: "Debridger Team",
  publisher: "Debridger",  

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
    siteName: "Debridger",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Debridger - Premium Nigerian Crops",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Debridger",
    creator: "@Debridger",
    images: {
      url: "/twitter-image.png",
      alt: "Debridger Twitter Card",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}