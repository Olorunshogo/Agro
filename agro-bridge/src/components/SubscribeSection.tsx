
"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "sonner";
import { handleSubscribe } from "~/actions/subscribe";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const result = await handleSubscribe(formData);

      if (!result.success) {
        toast.error("❌ " + result.message);
        return;
      }

      toast.success("Subscribed successfully!");
      setEmail("");
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative z-10 w-full mx-auto mt-12 -mb-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto lg:w-4/5 h-full gap-6 bg-[radial-gradient(circle_at_center,_#2B6036_0%,_#55805E_46%,_#2B6036_1000%)] rounded-2xl overflow-hidden shadow-2xl">
          {/* Left: Image */}
          <div className="flex items-center justify-center p-8">
            <Image
              src="/home-subscribe.png"
              alt="Stay updated with AgroBridge"
              width={500}
              height={400}
              className="object-contain w-full max-w-md -mt-12 lg:-mt-20"
              priority
            />
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-center p-8 text-white lg:p-12">
            <h3 className="mb-4 text-2xl font-bold text-center">
              Stay Updated on Price Trends & Product Availability
            </h3>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="relative max-w-xl mx-auto">
                <Mail className="absolute w-5 h-5 text-gray-700 -translate-y-1/2 left-4 top-1/2" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 text-gray-900 bg-white rounded-lg shadow-lg pr-36 py-7 focus-visible:ring-2 focus-visible:ring-white/50"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-(--agro-green-dark) hover:bg-(--agro-green-dark)/90 text-white font-semibold px-6 py-3 rounded-md"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Subscribe"}
                </Button>
              </div>

              <p className="text-sm text-center text-white/90">
                Get the latest insights on crops, pricing, and export-ready products.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Subscription Successful 🎉</DialogTitle>
          </DialogHeader>
          <p className="mt-4 text-center text-gray-600">
            Thank you for subscribing! You'll receive updates on price trends & product availability.
          </p>
          <Button
            onClick={() => setShowSuccessModal(false)}
            className="mt-6 w-full bg-(--agro-green-dark) hover:bg-(--agro-green-dark)/90 text-white"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}