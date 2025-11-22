
// app/verify-email/page.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
