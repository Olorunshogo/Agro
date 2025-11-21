
"use client";

import React, { useState } from "react";
import { TextInput } from "~/components/TextInput";
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
  companyName: z.string().min(3, "Input a minimum of three letters here"),
  userName: z.string().min(3, "Input a minimum of three letters here"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters"),
});


type FormData = z.infer<typeof formSchema>;

export default function SignInPage() {
  const [form, setForm] = useState<FormData>({ 
    companyName: "",
    userName: "",
    email: "", 
    password: "" 
  });
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
        
        {/* Heading, App Logo and Title*/}
        <div className="flex flex-col items-center w-full h-full gap-6">
          <div className="flex items-center gap-4">
            <AppLogo className="w-8 h-8" />
            <span className="text-xl text-(--agro-green-dark) font-semibold">AgroBridge</span>              
          </div>

          <div className="text-xl text-(--heading-colour) font-semibold">Sign Up</div>
        </div>

         <form
          onSubmit={submit}
          className="flex flex-col w-full gap-8 bg-white"
        >        
          {/* Input Fieldss */}
          <div className="flex flex-col gap-4">
            {/* Company Name Input Field */}
            <div className="flex flex-col gap-4">
              <TextInput 
                label="Company Name"
                placeholder="Enter your company name"
                required
                value={form.companyName}
                onChange={onChange("companyName")}
                error={!!errors.companyName}
              />
              
              {errors.companyName && (
                <p className="text-sm text-(--input-error-red)">{errors.companyName}</p>
              )}
            </div>

            {/* User Name Input Field */}
            <div className="flex flex-col gap-4">
              <TextInput 
                label="User Name"
                placeholder="Enter your user name"
                required
                value={form.userName}
                onChange={onChange("userName")}
                error={!!errors.userName}
              />
              
              {errors.companyName && (
                <p className="text-sm text-(--input-error-red)">{errors.userName}</p>
              )}
            </div>
            
            {/* Email */}
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

            {/* Password */}
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
  );
  
}



// File: app/(auth)/sign-in/toastStub.tsx
// Small toast replacement. Replace with your toast library or keep this simple one for dev.
export const toast = {
  success: (msg: string) => alert(msg),
  error: (msg: string) => alert(msg),
};