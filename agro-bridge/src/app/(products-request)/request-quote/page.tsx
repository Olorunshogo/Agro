
"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { TextInput } from "~/components/input-fields/TextInput";
import { EmailInput } from "~/components/input-fields/EmailInput";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { SearchableSelect } from "~/components/input-fields/SearchableInput";
import { CheckboxInput } from "~/components/input-fields/CheckboxInput";
import { Textarea } from "~/components/ui/textarea";
import { products } from "~/store/products";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Zod Schema
const quoteSchema = z.object({
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Quantity is required"),
  destinationPort: z.string().min(1, "Destination port is required"),
  contactPerson: z.string().min(3, "Contact person name is required"),
  companyName: z.string().min(3, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  specialRequirements: z.string().optional(),
  terms: z.boolean().refine((v) => v === true, "You must agree to terms"),
});

type QuoteForm = z.infer<typeof quoteSchema>;
type FormErrors = Partial<Record<keyof QuoteForm, string>>;

const productOptions = products.map((p) => ({
  value: p.slug,
  label: `${p.name} (${p.grade || "Export Grade"})`,
}));

const portOptions = [
  { value: "rotterdam", label: "Rotterdam, Netherlands" },
  { value: "antwerp", label: "Antwerp, Belgium" },
  { value: "hamburg", label: "Hamburg, Germany" },
  { value: "shanghai", label: "Shanghai, China" },
  { value: "mumbai", label: "Mumbai, India" },
  { value: "singapore", label: "Singapore" },
  { value: "dubai", label: "Dubai, UAE" },
  { value: "lagos", label: "Lagos, Nigeria (Local Delivery)" },
];

export default function RequestQuotePage() {
  const router = useRouter();
  const [form, setForm] = useState<QuoteForm>({
    product: "cashew-nuts",
    quantity: "",
    destinationPort: "",
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    specialRequirements: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (field: keyof QuoteForm) => (value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof QuoteForm;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      console.error("Please fix the errors below");
      // toast.error("Please fix the errors below");
      return;
    }

    setLoading(true);
    setShowSuccessModal(false);

    try {
      const res = await fetch("/api/quote/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await res.json();

      if (res.ok) {
        // toast.success("Quote request sent! We'll contact you within 24 hours.");
        router.push("/thank-you");
        console.log("Quote request sent! We'll contact you within 24 hours.");
        
      } else {
        // toast.error(data.message || "Failed to send request");
        console.error(data.message || "Failed to send request");
      }
    } catch (err) {
      // toast.error("Network error. Please try again.");
      console.error("Network error. Please try again.");
    } finally {
      setLoading(false);
      setShowSuccessModal(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-full min-h-screen font-inter">
        <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) flex flex-col w-full gap-8 mx-auto max-w-7xl">                    
          
          {/* Header */}
          <h1 className="text-xl font-bold text-center text-(--text-colour) lg:text-2xl">
            Request a Quote
          </h1>

          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col w-full h-full gap-8"
          >
            <div className="grid w-full h-full grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Product Selection */}
              <div className="flex flex-col gap-2">
                <SearchableSelect
                  label="Product"
                  required
                  placeholder="Search products..."
                  options={productOptions}
                  value={form.product}
                  onValueChange={(val) => handleChange("product")(val)}
                  error={!!errors.product}
                />
                {errors.product && 
                  <p className="text-sm text-(--input-error-red)">
                    {errors.product}
                  </p>
                }
              </div>

              {/* Quantity */}
              {/* === Use a number input here instead ==== */}
              <div className="w-full gap-6">
                <div className="flex flex-col gap-2">
                  <TextInput
                    label="Quantity"
                    placeholder="tons"
                    required
                    value={form.quantity}
                    onChange={(e) => handleChange("quantity")(e.target.value)}
                    error={!!errors.quantity}
                  />
                  {errors.quantity && 
                    <p className="text-sm text-(--input-error-red)">{errors.quantity}</p>
                  }
                </div>

                {/* <SelectInput
                  value={form.quantity ? "tons" : ""}
                  onValueChange={() => {}}
                  disabled
                >
                  <SelectItem value="tons">tons</SelectItem>
                </SelectInput> */}
              </div>

              {/* Destination Port */}
              <div className="flex flex-col gap-2">
                <SearchableSelect
                  label="Destination Port / Delivery"
                  required
                  placeholder="Select or search port..."
                  options={portOptions}
                  value={form.destinationPort}
                  onValueChange={(val) => handleChange("destinationPort")(val)}
                  error={!!errors.destinationPort}
                />
                {errors.destinationPort && (
                  <p className="text-sm text-(--input-error-red)">{errors.destinationPort}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                  <TextInput
                    label="Company Name"
                    placeholder="eg Olak inc."
                    required
                    value={form.contactPerson}
                    onChange={(e) => handleChange("contactPerson")(e.target.value)}
                    error={!!errors.contactPerson}
                  />
                  {errors.contactPerson && (
                    <p className="text-sm text-(--input-error-red)">{errors.contactPerson}</p>
                  )}
              </div>

              {/* Contact Person */}
              <div className="flex flex-col gap-2">
                <TextInput
                  label="Contact Person"
                  placeholder="Enter name"
                  required
                  value={form.contactPerson}
                  onChange={(e) => handleChange("contactPerson")(e.target.value)}
                  error={!!errors.contactPerson}
                />
                {errors.contactPerson && (
                  <p className="text-sm text-(--input-error-red)">{errors.contactPerson}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <TextInput
                  label="Company Name"
                  placeholder="e.g. Olak Inc"
                  required
                  value={form.companyName}
                  onChange={(e) => handleChange("companyName")(e.target.value)}
                  error={!!errors.companyName}
                />
                {errors.companyName && (
                  <p className="text-sm text-(--input-error-red)">{errors.companyName}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <EmailInput
                  label="Email"
                  placeholder="Input your email"
                  required
                  value={form.email}
                  onChange={(e: { target: { value: string | boolean; }; }) => handleChange("email")(e.target.value)}
                  error={!!errors.email}
                />
                {errors.email && 
                  <p className="text-sm text-(--input-error-red)">
                    {errors.email}
                  </p>
                }
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <TextInput
                  label="Phone No"
                  placeholder="NG +234 81 6704 2797"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange("phone")(e.target.value)}
                  error={!!errors.phone}
                />
                {errors.phone && 
                  <p className="text-sm text-(--input-error-red)">
                    {errors.phone}
                  </p>
                }
              </div>

              {/* Terms */}
              <div className="flex flex-col gap-2">
                <CheckboxInput
                  label="I agree to the terms of purchase"
                  checked={form.terms}
                  onCheckedChange={(checked) => handleChange("terms")(!!checked)}
                  error={!!errors.terms}
                />
                {errors.terms && 
                  <p className="text-sm text-(--input-error-red)">
                    {errors.terms}
                  </p>
                }
              </div>

              {/* Special Requirements */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
                  Note/Special requirement{" "}
                  <span className="font-normal text-gray-500">(optional)</span>
                </label>
                <Textarea
                  placeholder="Kindly make sure the nut measure is in tons."
                  value={form.specialRequirements}
                  onChange={(e) => handleChange("specialRequirements")(e.target.value)}
                  className="resize-none min-h-24"
                />
              </div>

            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading || !form.terms}
              className="w-full h-12 mx-auto text-base font-semibold text-white transition-all duration-300 bg-green-800 rounded-full max-w-80 hover:bg-green-700 disabled:opacity-60"
            >
              {loading ? "Submitting Request..." : "Submit Request"}
            </Button>
            
          </form>
          
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-sm border-4 border-(--border-gray)">
          <DialogHeader className="">
            <DialogTitle className="text-2xl text-center">On success 🎉</DialogTitle>
          </DialogHeader>
          <p className="mt-4 text-center text-gray-600">
            Thank you! Our export manager will contact you within 24 hours.
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
