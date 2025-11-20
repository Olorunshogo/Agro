
"use client";

import { 
  useState, useTransition, 
  useEffect
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MousePointer, Mail, Loader2,
  Search, DollarSign, Truck
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "sonner"; 
import { handleSubscribe } from "~/actions/subscribe";

import ProductCard, { ProductInfo } from "~/components/ProductCard";
import HowItWorksGallery, { SlidePair, ControlButton } from "~/components/HowItWorksGallery";
import PersonaCard, { UserPersona as PersonaType } from "~/components/UserPersona";

import { 
  Dialog, DialogContent,
  DialogHeader, DialogTitle 
} from "~/components/ui/dialog";

import type { Metadata } from "next";
import type { Sponsor } from "./types/types";
import type { UserPersona } from "./types/types";


// Static metadata
const metadata: Metadata = {
  title: {
    template: "%s | Bridging Farmers to Sellers",
    default: "Agrobridge",
  },
  description:
    "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
  keywords: "Agrobridge, farmers, sellers, agriculture, crops, marketplace",
  authors: [{ name: "Agrobridge Team", url: "https://agro-bridge-taupe.vercel.app/" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agro-bridge-taupe.vercel.app/",
    title: "Agrobridge | Bridging Farmers to Sellers",
    description:
      "Agrobridge connects farmers with the right sellers for their crops. Streamlining agriculture for a better tomorrow.",
    siteName: "Agrobridge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agrobridge - Connecting Farmers to Sellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agrobridge",
    title: "Agrobridge | Bridging Farmers to Sellers",
    description:
      "Agrobridge connects farmers with the right sellers for their crops.",
    images: "/twitter-image.jpg",
  },
  // favicon: "/favicon.ico", // Replace with your favicon path
};


const sponsors: Sponsor[] = [
  { imageUrl: "/cargill_logo.png", imageAlt: "Sponsor Two" },
  { imageUrl: "/louis_dreyfus_company_logo.png", imageAlt: "Sponsor One" },
  { imageUrl: "/kuehnenagel_logo.png", imageAlt: "Sponsor Three" },
  { imageUrl: "/cargo_logo.png", imageAlt: "Sponsor Four" },
];

const productsInfo: ProductInfo[] = [
  {
    inStock: true,
    imageUrl: "/product-1.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-2.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-3.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  },

  {
    inStock: true,
    imageUrl: "/product-4.jpg",
    imageAlt: "",
    location: "Nigeria",
    price: 48.97,
    productDetailsLink: "/"  
  }
];

const userPersona: UserPersona[] = [
  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 3.5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/man-1.jpg",
    imageAlt: "man standing beside wall ",
    name: "Goodness J.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-2.jpg",
    imageAlt: "woman in white scoop neck shirt smiling",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 4,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/man-1.jpg",
    imageAlt: "man's grey and black shirt",
    name: "Rebecca L.",
    location: "USA"
  },

  {
    rating: 5,
    description: "Sourcing from Africa used to be complicated, but AgroBridge changed that. Every supplier is verified, payments are secure, and logistics are handled smoothly.",
    imageUrl: "/woman-1.jpg",
    imageAlt: "closeup photography of woman smiling",
    name: "Rebecca L.",
    location: "USA"
  },
];


export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Simple fade-in animation
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage(null);

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const result = await handleSubscribe(formData);

      if (!result.success) {
        toast.error("❌" + result.message);
        return;
      }

      setShowSuccessModal(true);
      setEmail("");

      
    } catch (error) {
      console.error(error);
      toast.error("❌ Network or server error occurred.");
      setMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }

  }

  const howItWorksImageSlides: SlidePair[] = [
    { 
      id: "s1",
      imageUrlA: "/howitworks-1a.png",
      imageUrlB: "/howitworks-1b.jpg",
      imageAltA: "Step 1 image A",
      imageAltB: "Step 1 image B",
    },
    {
      id: "s2",
      imageUrlA: "/howitworks-2a.png",
      imageUrlB: "/howitworks-2b.png",
      imageAltA: "Step 2 image A",
      imageAltB: "Step 2 image B",
    },
    {
      id: "s3",
      imageUrlA: "/howitworks-3a.png",
      imageUrlB: "/howitworks-3b.jpg",
      imageAltA: "Step 3 image A",
      imageAltB: "Step 3 image B",
    },
  ];

  // Controls/buttons (right-hand side) — each has imageIndex pointing into slides
  const howItWorksImageControls: ControlButton[] = [
    {
      id: "c1",
      label: "Browse Products",
      subtitle: "View verified agricultural products with full export details.",
      imageIndex: 0,
      icon: Search,
    },
    {
      id: "c2",
      label: "Request a Quote",
      subtitle: "Tell us your quantity and delivery destination",
      imageIndex: 1,
      icon: DollarSign,
    },
    {
      id: "c3",
      label: "We Handle the Rest",
      subtitle: "We Handle the Rest",
      imageIndex: 2,
      icon: Truck,
    },
  ];

  return (
    <main className="relative font-openSans">
      <div className="flex flex-col gap-12 w-full -mt-(--navbar-h) h-full bg-(--primary-bg-light) dark:bg-black">
        
        {/* Home Hero Section */}
        <section className="relative h-screen lg:h-dvh">
          {/* Background Image */}
          <Image
            src="/home-landing-page.png"
            alt=""
            fill
            className="object-cover dark:invert"
            priority
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-12 flex flex-col gap-4 justify-center px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-12 w-full max-w-4xl mx-auto h-full">
            
            {/* Top Content */}
            <div className="flex flex-col items-center justify-center flex-1 gap-8 py-12 sm:py-20 lg:py-30 sm:gap-12">
              <div className="flex flex-col items-center justify-center gap-6 text-center">

                <h1 className="max-w-2xl text-3xl font-bold text-center text-white lg:max-w-3xl sm:text-4xl lg:text-5xl dark:text-white">
                  Buy Fresh Farm Produce Directly from Source at the Best Price.
                </h1>

                <p className="max-w-lg mx-auto text-sm text-center text-white lg:max-w-xl lg:text-base">
                  AgroBridge connects international buyers with premium-quality agricultural goods sourced and verified by our team in Nigeria.
                </p>
              </div>

              {/* CTA Links */}
              <div className="flex flex-wrap justify-center gap-4">            
                <Link 
                  href="/products"
                  className="flex items-center gap-2 text-white text-sm font-semibold border-1 border-(--primary-bg-light) bg-(--agro-green-light) hover:bg-(--agro-green-dark) px-6 py-3 rounded-full shadow-md hover:cursor-pointer duration-300 ease-in-out transition-all"
                >
                  <span>Get Started </span>
                  <span className="flex">
                    <MousePointer className="w-5 h-5 rotate-90" />
                  </span>
                </Link>

                <Link 
                  href="/contact"
                  className="text-white text-sm font-semibold border-1 border-(--primary-bg-light) bg-transparent hover:bg-(--agro-green-dark) px-6 py-3 rounded-full hover:cursor-pointer hover:shadow-lg cursor-pointer duration-300 ease-in-out transition-all"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Sponsor Bar */}
            <div className="flex flex-wrap items-center gap-6 mx-auto">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.imageAlt}
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* Products Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
              Featured Products Section
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
             {/* <div className="grid gap-4 grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"></div> */}
              {productsInfo.map((p: ProductInfo, index) => (
                <ProductCard key={index} product={p} />
              ))}
            </div>
            
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">
          {/* Background Image */}
          <Image
            src="/home-landing-page.png"
            alt=""
            fill
            className="z-0 object-cover dark:invert"
            priority
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-0 bg-black/50"></div>
          
          <div className="z-10 flex flex-col w-full h-full gap-8">

            {/* Heading */}
            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color-2)">
              How It Works
            </h2>

            {/* Image & Buttons */}
            <HowItWorksGallery 
              slides={howItWorksImageSlides} 
              controls={howItWorksImageControls}
              maxVisibleDots={5}
            />
            
          </div>
            
          </div>
        </section>        

        {/* User Persona Section */}
        <section className="relative py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg) overflow-hidden bg-white">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) h-full">

            <h2 className="text-lg font-normal lg:text-xl text-center text-(--heading-color)">
              Trusted by Buyers Across the U.S
            </h2>

            <div className="flex items-center gap-8 overflow-x-auto scroll-smooth">

              {userPersona.map((persona: PersonaType, index) => (
                <PersonaCard key={index} persona={persona} />
              ))}
              
            </div>
            
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="relative w-4/5 h-full mx-auto -mb-12 z-2">
          <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6
            px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) 
            lg:py-(--section-py-lg)
            bg-[radial-gradient(circle_at_center,_#22C55E_0%,_#3ECC72_50%,_#22C55E_100%)] 
            w-full max-w-7xl mx-auto h-full"
          >

            <div className="flex items-center justify-center">
              <Image
                src="/home-subscribe.png"
                alt="Subscribe"
                width={500}
                height={400}
                className="object-contain w-4/5 h-40 -mt-12 sm:w-3/5 lg:w-9/10 lg:h-88 lg:-mt-40 max-w-120"
              />
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 text-(--text-colour) pb-8">
              <p className="text-center text-white lg:text-base">
                Stay Updated on Price Trends & Product Availability.
              </p>

              {/* Subscribe input field */}
              <div className="relative w-full max-w-xl mx-auto">
                <Mail className="absolute -translate-y-1/2 left-3 top-1/2 text-(--text-colour) w-5 h-5" />

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 pr-36 bg-white py-6 rounded-md text-(--text-colour) shadow-custom border border-(--border-gray)) focus-visible:ring-(--border-grey)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="absolute -translate-y-1/2 right-2 top-1/2 rounded-md bg-(--agro-green-dark) hover:bg-(--agro-green-dark)/90 text-white px-6 py-2 text-sm font-semibold shadow-md cursor-pointer duration-300 ease-in-out transition-all"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>

              </div>

              <p className="text-xs text-center text-white lg:text-sm">
                Stay Updated on Price Trends & Product Availability.
              </p>

              {message && (
                <p className="text-sm text-center text-white">{message}</p>
              )}
              
            </form>

          </div>
        </section> 

      </div>




      {/* Success Modal Dialog */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">Subscription Successful 🎉</DialogTitle>
          </DialogHeader>

          <p className="mt-4 text-sm text-center text-gray-600">
            Thank you for subscribing!  
            You'll receive updates on price trends & product availability.
          </p>

          <Button 
            onClick={() => setShowSuccessModal(false)} 
            className="mt-6 w-full bg-(--agro-green-dark) text-white hover:bg-(--agro-green-dark)/90"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

    </main>
  );
}