
"use client";

import React, { useState } from "react";

import { EmailInput } from "~/components/EmailInput";
import { PasswordInput } from "~/components/PasswordInput";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";
import { z } from "zod";
import { AppLogo } from "~/components/app-logo";


// icons
import { Github, Chromium } from "lucide-react";


const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters"),
});


type FormData = z.infer<typeof formSchema>;

export default function SignInPage() {
  const [form, setForm] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);  
  
  const onChange = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [k]: e.target.value }));
  };  
  
  const validate = (): boolean => {
    const res = formSchema.safeParse(form);
    if (!res.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of res.error.issues) {
        const key = issue.path[0] as keyof FormData;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!validate()) return;
    setLoading(true);
    
    try {
      // Example: replace with your real signin call
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.message || "Sign-in failed");
      } else {
        toast.success("Signed in");
        // redirect or update UI
      }
      
    } catch (err) {
      console.error(err);
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
    
  };    
    
  const handleOAuth = (provider: "google" | "github") => {
    // Example - replace with your OAuth endpoint
    window.location.href = `/api/auth/${provider}`;
  };


  return ( 
    <div className="flex items-center justify-center min-h-screen bg-(--primary-bg-light) font-inter">

      <div className="flex flex-col items-center w-full h-full max-w-[564px] max-h-[664px] gap-6 p-6 lg:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-center w-full gap-4">
          {/* <img src="/logo.png" alt="AgroBridge logo" className="object-contain w-10 h-10" /> */}
          <AppLogo className="w-8 h-8" />
          <div className="text-lg font-semibold">AgroBridge</div>
        </div>      
      
        {/* Title + OAuth buttons */}        
        <div className="text-xl font-semibold text-center lg:text-2xl">Sign In</div>      
      
        <form
          onSubmit={submit}
          className="flex flex-col w-full gap-8 bg-white"
        >        
          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <EmailInput
                value={form.email}
                onChange={onChange("email")}
                placeholder="Enter your email"
                required
                error={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <PasswordInput
                value={form.password}
                onChange={onChange("password")}
                placeholder="***********"
                required
                error={!!errors.email}
              />
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>
          </div>

          <div className="flex flex-col w-full h-full gap-6">
            {/* Submit */}
            <div>
              <Button
                type="submit"
                className="w-full text-white rounded-full bg-(--agro-green-dark) hover:bg-(--agro-green-light) hover:opacity-90 hover:cursor-pointer duration-300 ease-in-out transition-all"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </div>

            {/* Footer */}
            <div className="text-sm text-center text-black lg:text-base">
              You already have an account? {" "}
              <Link href="/auth/signin" className="font-bold underline">
                Sign In
              </Link>
            </div>
          </div>
          
        </form>
        
      </div>
    </div>
  );
  
}



// File: app/(auth)/sign-in/toastStub.tsx
// Small toast replacement. Replace with your toast library or keep this simple one for dev.
export const toast = {
  success: (msg: string) => alert(msg),
  error: (msg: string) => alert(msg),
};