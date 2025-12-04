
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { submitContactForm } from "~/actions/contactForm";

import HeroSection from "~/components/HeroSection";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

import { TextInput } from "~/components/input-fields/TextInput";
import { EmailInput } from "~/components/input-fields/EmailInput";
import { MessageInput } from "~/components/input-fields/MessageInput";
import { z } from "zod";

import { Phone, Mail, Clock } from "lucide-react";
// import ContactMap from "~/components/ContactMap";



// Static metadata
const metadata = {
  title: "Contact Us",
  description: "Get in touch with Debridger for quotes, partnerships, or support.",

  openGraph: {
    url: "/contact",
    title: "Contact Debridger",
    description: "We're here to help with your agricultural sourcing needs.",
  },

  twitter: {
    title: "Contact Debridger",
    description: "We're here to help with your agricultural sourcing needs.",
  },

  alternates: { canonical: "/contact" },
};

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 words")
    .max(300, "Message cannot exceed 300 words"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    field: keyof ContactForm
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<ContactForm> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await submitContactForm(form);

      if (res.ok) {
        toast.success("Thank you! We’ll get back to you soon.");
        setForm({ fullName: "", email: "", message: "" });
      } else {
        toast.error(res.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Dynamically import ContactMap - NO SSR;
  const ContactMap = dynamic(() => import('~/components/ContactMap'), {
    loading: (() =>    
      <div className="flex items-center justify-center w-full bg-gray-200 border-2 border-gray-300 border-dashed h-96 lg:h-full min-h-96 rounded-xl">
        <p className="text-gray-500">Loading map...</p>
      </div>
    ),
    ssr: false,
  });

  const sitemapUrl:string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952412683761!2d3.342567!3d6.596429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1703123456789";
  
  return (
    <main className="relative font-openSans">
      <div className="flex flex-col gap-12 w-full h-full bg-(--primary-bg-light) dark:bg-black">
        
        {/* Home Hero Section */}
        <HeroSection 
          backgroundImageUrl="/landing/landing-contact-bg.jpg"
          backgroundImageAlt="A picture of farmers bagging their farm produce"
          heading="Buy Fresh Farm Produce Directly from Source at the Best Price."
          paragraph="Debridger connects international buyers with premium-quality agricultural goods sourced and verified by our team in Nigeria."
          showCtas={true}
          primaryCta={{
            label: "Explore Product",
            href: "/products",
          }}
        />

        {/* Who We Are & Our Values Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py)    lg:py-(--section-py-lg) w-full max-w-7xl mx-auto h-full">

            <div className="flex flex-col w-full h-full gap-6 text-center">
              <h2 className="text-(--heading-colour) lg:text-(--text-colour) text-xl lg:text-2xl font-semibold">Who Are We</h2>
              <p className="text-sm lg:text-lg text-(--text-colour)">
                We&apos;re here to help you reach out with any question or partnership inquires.
              </p>
            </div>

            <div className="grid w-full h-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Form area */}
              <div className="relative flex flex-col w-full h-full gap-6 p-6 rounded-md">
                <p className="font-semibold text-black">Send Us A Message </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                  {/* Full Name Input Field */}
                  <div className="flex flex-col gap-4">
                    <TextInput 
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                      value={form.fullName}
                      onChange={handleChange("fullName")}
                      error={!!errors.fullName}
                    />
                    
                    {errors.fullName && (
                      <p className="text-sm text-(--input-error-red)">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div className="flex flex-col gap-4">
                    <EmailInput 
                      label="Email"
                      placeholder="Enter your email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      error={!!errors.email}
                    />
                    
                    {errors.email && (
                      <p className="text-sm text-(--input-error-red)">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input Field */}
                  <div className="flex flex-col gap-4">
                    <MessageInput 
                      label="Your Message"
                      placeholder="Type your message here"
                      required
                      minWords={10}
                      maxWords={300}
                      value={form.message}
                      onChange={handleChange("message")}
                      error={!!errors.message}
                    />
                    
                    {errors.message && (
                      <p className="text-sm text-(--input-error-red)">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full max-w-md mx-auto rounded-full bg-(--agro-green-dark) hover:bg-(--agro-green-light) hover:cursor-pointer text-white py-6 font-medium duration-300 ease-in-out transition-all"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  
                </form>
              </div>

              {/* Contact Information and Map Area */}
              <div className="flex flex-col w-full h-full gap-8">

                {/* Contact Information */}
                <div className="flex flex-col w-full gap-4 border-(--agro-green-dark)">
                  <a 
                    href="tel:+2347012288798" 
                    className="flex items-center gap-4"
                  >
                    <span className="p-3 rounded-md bg-[#FCECCE]">
                      <Phone className="w-6 h-6 text-[#EF9E0B]" />
                    </span>

                    <div className="flex flex-col flex-1 text-(--text-colour)">
                      <span className="font-semibold">Phone</span>
                      <span className="text-sm hover:text-black">+2347012288798</span>                      
                    </div>
                  </a>

                  <a href="mailto:shownzy001@gmail.com" className="flex items-center gap-4">
                    <span className="p-3 rounded-md bg-[#FCECCE]">
                      <Mail className="w-6 h-6 text-[#EF9E0B]" />
                    </span>

                    <div className="flex flex-col flex-1 text-(--text-colour)">
                      <span className="font-semibold">Email</span>
                      <span className="text-sm hover:text-black">shownzy001@gmail.com</span>                      
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="p-3 rounded-md bg-[#FCECCE]">
                      <Clock className="w-6 h-6 text-[#EF9E0B]" />
                    </span>

                    <div className="flex flex-col flex-1 text-(--text-colour)">
                      <span className="font-semibold">Business Hours</span>
                      <span className="text-sm hover:text-black">Active 24hrs</span>                      
                    </div>
                  </div>                  
                </div>

                {/* Map Area */}
                {/* Use Leaflet to remake this part: https://leafletjs.com/ */}
                {/* <div className="relative w-full overflow-hidden border border-gray-200 shadow-xl h-96 lg:h-full min-h-96 rounded-xl">
                  <iframe
                    src={sitemapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div> */}

                {/* Map Area - Interactive Leaflet Map */}
                <div className="relative w-full overflow-hidden border border-gray-200 shadow-xl h-96 lg:h-full min-h-96 rounded-xl">
                  {/* Location for barnawa Market road */}
                  <ContactMap lat={10.4831} lng={7.4324} zoom={15} />

                  {/* 
                    Barnawa — neighborhood center (general reference)
                    Decimal: 10.48342, 7.43488                    
                    DMS: 10°29′0.3″ N, 7°26′5.6″ E.
                    
                    Federal Neuro-Psychiatric Hospital, Kaduna (FNPH — Barnawa)                    
                    Decimal: 10.46468, 7.43100                    
                    DMS: 10°27′52″ N, 7°25′51″ E.
                    
                    Source: Wikipedia / Mindat entries for the hospital. 
                    Wikipedia                    
                    Graceland Hagwop Hospital (Barnawa)                    
                    Decimal: 10.4828762, 7.4385206
                    
                    Barnawa / Barnawa Market Road (approx — Market area reference)
                    Decimal (approx): 10.4831, 7.4324
                    
                    CoLab (No. 4 Barnawa Close — local workspace / training point)                    
                    Decimal: 10.4822884, 7.4279777                    
                    
                    Medium-Income Housing Estate, Barnawa (example residential complex)                    
                    Decimal: 10.4653125, 7.4387944
                  */}

                  <div className="absolute z-10 px-3 py-1 text-xs text-gray-600 bg-white rounded shadow bottom-2 right-2">
                    Map powered by Leaflet © OpenStreetMap
                  </div>
                </div>

              </div>

              
            </div>            
            
          </div>
        </section>   

      </div>

    </main>
  );
}