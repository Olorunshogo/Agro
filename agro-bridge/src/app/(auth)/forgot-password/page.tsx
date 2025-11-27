
"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { EmailInput } from "~/components/input-fields/EmailInput";
import { toast } from "sonner";


const metadata = {
  title: "Forgot Password – Reset Securely",
  description: "Reset your AgroBridge password securely. We’ll send a reset link to your email.",

  keywords: [
    "forgot password", "password reset", "recover account",
    "agrobridge password"
  ],

  openGraph: {
    url: "/forgotten-password",
    title: "Forgot Password – Reset Securely | AgroBridge",
    description: "Get back into your account in seconds.",
  },

  twitter: {
    title: "Forgot Password – Reset Securely | AgroBridge",
    description: "Get back into your account in seconds.",
  },

  alternates: { canonical: "/forgotten-password" },
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSent(true);
      toast.success("Reset link sent to your email!");
    } else {
      toast.error("Email not found");
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 text-center bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold">Check your email</h2>
          <p className="mt-4 text-gray-600">
            We sent a password reset link to <strong>{email}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <EmailInput
            label="Email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-(--agro-green-dark) hover:bg-(--agro-green-light)"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </div>
    </div>
  );
}
