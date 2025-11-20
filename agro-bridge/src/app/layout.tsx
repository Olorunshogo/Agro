
import type { Metadata } from "next";
import { inter, openSans } from "./fonts";
import "./globals.css";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "Agrobridge",
  description: "Bridging Farmers to Sellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} antialiased`}
      >
        <Header />

        <main>{children}</main>
        
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}