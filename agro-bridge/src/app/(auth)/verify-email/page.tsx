
import { redirect } from "next/navigation";
import { cookies } from "next/headers";



const metadata = {
  title: "Verify Your Email",
  description: "Almost there! Verify your email address to activate your AgroBridge account and start buying.",

  openGraph: {
    url: "/verify-email",
    title: "Verify Email | AgroBridge",
    description: "One click to activate your account and access verified suppliers.",
  },

  twitter: {
    title: "Verify Email | AgroBridge",
    description: "One click to activate your account and access verified suppliers.",
  },

  alternates: { canonical: "/verify-email" },
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token;

  if (!token) {
    return <div>Invalid link</div>;
  }

  // In real app: validate token from DB
  // For now, mock success
  // await markEmailAsVerified(token);
  // Set cookie after verification
  const cookieStore = cookies();
  ( await cookieStore ).set("auth_token", "verified-user-id", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60,
  });

  redirect("/dashboard");
}
