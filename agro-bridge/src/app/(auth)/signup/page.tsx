
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";
import { TextInput } from "~/components/TextInput";
import { EmailInput } from "~/components/EmailInput";
import { PasswordInput } from "~/components/PasswordInput";
import { AppLogo } from "~/components/app-logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";



const metadata = {
  title: "Create Free Account – Start Sourcing",
  description: "Join AgroBridge today and buy premium Nigerian crops directly from verified farmers.",

  keywords: [
    "agrobridge signup", "create account", "register",
    "buyer registration", "agricultural marketplace"
  ],

  openGraph: {
    url: "/signup",
    title: "Create Free Account – Start Sourcing | AgroBridge",
    description: "Join thousands of buyers sourcing directly from Nigeria.",
  },

  twitter: {
    title: "Create Free Account – Start Sourcing | AgroBridge",
    description: "Join thousands of buyers sourcing directly from Nigeria.",
  },

  alternates: { canonical: "/signup" },
};

const signUpSchema = z.
  object({
    companyName: z.string().min(3, "Company name must be at least 3 characters"),
    contactPerson: z.string().min(3, "Contact person name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  
  const [form, setForm] = useState<SignUpForm>({ 
    companyName: "",
    contactPerson: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<Partial<SignUpForm>>({});
  const [loading, setLoading] = useState(false);  

  // Live password match check
  const passwordMismatch =
    form.password && form.password && form.confirmPassword && form.password !== form.confirmPassword;

  useEffect(() => {
    if (passwordMismatch) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
    }
  }, [form.password, form.confirmPassword, passwordMismatch]);

  const handleChange = (field: keyof SignUpForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = signUpSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<SignUpForm> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof SignUpForm;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactPerson: form.contactPerson,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success("Account created successfully! Welcome to AgroBridge");
        router.push("/dashboard");
        router.refresh();
      } else {
        toast.error(data.message || "Signup failed");
      }
      
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
    
  };    

  return ( 
    <>
      <Toaster position="top-center" richColors />    
      <div className="flex items-center justify-center min-h-screen bg-(--primary-bg-light) font-inter w-full h-full">

        <div className="flex flex-col w-full h-full max-w-[564px] border-1 border-(--border-gray) shadow-md max-h-full gap-6 p-6 lg:p-8">
          
          {/* App Logo and Title*/}
          <div className="flex items-center gap-4 mx-auto">
            <AppLogo className="w-8 h-8" />
            <span className="text-xl text-(--agro-green-dark) font-semibold">AgroBridge</span>              
          </div>                 

          {/* Title */}
          <div className="text-xl text-center text-(--heading-colour) font-semibold">Sign Up</div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-8 bg-white"
          >        
            {/* Input Fieldss */}
            <div className="flex flex-col gap-4">
              {/* Company Name Input Field */}
              <div className="flex flex-col gap-2">
                <TextInput 
                  label="Company Name"
                  placeholder="Olak Inc"
                  required
                  value={form.companyName}
                  onChange={handleChange("companyName")}
                  error={!!errors.companyName}
                />
                
                {errors.companyName && (
                  <p className="text-sm text-(--input-error-red)">{errors.companyName}</p>
                )}
              </div>

              {/* Contact person Input Field */}
              <div className="flex flex-col gap-2">
                <TextInput 
                  label="Contact person"
                  placeholder="John Deo"
                  required
                  value={form.contactPerson}
                  onChange={handleChange("contactPerson")}
                  error={!!errors.contactPerson}
                />
                
                {errors.companyName && (
                  <p className="text-sm text-(--input-error-red)">{errors.contactPerson}</p>
                )}
              </div>

              {/* Email Input Field */}
              <div className="flex flex-col gap-2">
                <EmailInput 
                  label="Email"
                  placeholder="example@example.com"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  error={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm text-(--input-error-red)">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <PasswordInput
                  label="Password"
                  value={form.password}
                  onChange={handleChange("password")}
                  placeholder="Abcdefghi124$"
                  required
                  error={!!errors.password}
                />
                
                {errors.password && 
                  <p className="text-sm text-(--input-error-red)">{errors.password}</p>
                }
              
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <PasswordInput
                  label="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  placeholder="************"
                  required
                  error={!!errors.confirmPassword}
                />
                {errors.confirmPassword && 
                  <p className="text-sm text-(--input-error-red)">{errors.confirmPassword}</p>
                }
              </div>
            </div>

            {/* Submit */}
            <div>
              <Button
                type="submit"
                className="w-full text-white rounded-full h-10 bg-(--agro-green-dark) hover:bg-(--agro-green-light) hover:opacity-90 hover:cursor-pointer duration-300 ease-in-out transition-all"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </div>
            
          </form>

          {/* Footer */}
          <p className="flex items-center mx-auto text-sm text-center text-(--text-colour)">
            You already have an account?{" "}            
            <Link 
              href="/signin" 
              className="font-bold text-(--agro-green-dark) hover:underline"
            >
              &nbsp;Sign In
            </Link>
          </p>
        </div>
          
      </div>
    </>

  );
  
}
