
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Toaster, toast } from "sonner";
import { EmailInput } from "~/components/input-fields/EmailInput";
import { PasswordInput } from "~/components/input-fields/PasswordInput";
import { AppLogo } from "~/components/app-logo";
import Link from "next/link";
import { Chrome } from "lucide-react";
import { z } from "zod";

const metadata = {
  title: "Sign In to Your Account",
  description: "Log in to Debridger to access verified Nigerian agricultural products and manage your orders.",

  keywords: [
    "Debridger login", "signin", "buyer login",
    "agricultural marketplace login"
  ],

  openGraph: {
    url: "/signin",
    title: "Sign In to Your Account | Debridger",
    description: "Access your buyer dashboard and start sourcing premium crops.",
  },

  twitter: {
    title: "Sign In to Your Account | Debridger",
    description: "Access your buyer dashboard and start sourcing premium crops.",
  },

  alternates: { canonical: "/signin" },
};

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const router = useRouter();
  
  const [form, setForm] = useState<SignInForm>({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<SignInForm>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof SignInForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const validate = (): boolean => {
    const result = signInSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<SignInForm> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof SignInForm;
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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.redirectTo) {
        console.log("Welcome back! Signed in successfully");
        router.push(data.redirectTo);
        router.refresh();
      } else {
        const data = await res.json();
        console.log(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.log("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = (provider: "google" | "github") => {
    toast.info(`Sign in with ${provider} coming soon!`);
    // window.location.href = `/api/auth/${provider}`;
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="min-h-screen bg-(--primary-bg-light) flex items-center justify-center w-full h-full p-4 font-openSans">
        <div className="flex flex-col w-full h-full max-w-md gap-6">

          {/* Heading, App Logo and Title*/}
          <div className="flex flex-col items-center w-full h-full gap-6">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8 text-(--agro-green-light)" />
              <span className="text-xl text-(--agro-green-dark) font-semibold">Debridger</span> 
            </Link>

            <div className="text-xl text-(--heading-colour) font-semibold">Sign In</div>
          </div>

           {/* OAuth Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <Button
              type="button"
              variant="outline"
              className="w-full h-10 text-base font-medium hover:border-(--agro-green-dark) border-(--border-gray) hover:cursor-pointer duration-300 ease-in-out transition-all"
              onClick={() => handleOAuth("google")}
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-(--primary-bg-light) px-4 text-(--text-colour)">
                or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full h-full gap-6">
            <div className="flex flex-col gap-2">
              <EmailInput
                label="Email Address"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange("email")}
                error={!!errors.email}
              />
              {errors.email && (
                <p className="text-sm text-(--input-error-red)">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={handleChange("password")}
                error={!!errors.password}
              />
              {errors.password && (
                <p className="text-sm text-(--input-error-red)">{errors.password}</p>
              )}

              <Link 
                href="/forgot-password" 
                className="self-end text-sm text-(--agro-green-dark) hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-(--agro-green-dark) hover:bg-(--agro-green-light) text-white hover:cursor-pointer font-semibold rounded-full text-lg transition-all duration-300"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>            
          </form>

          {/* Footer */}
          <p className="flex items-center mx-auto text-sm text-center text-(--text-colour)">
            Don’t have an account?{" "}            
            <Link 
              href="/signup" 
              className="font-bold text-(--agro-green-dark) hover:underline"
            >
              &nbsp;Sign Up
            </Link>
          </p>
          
        </div>
      </div>
    </>
  );
}