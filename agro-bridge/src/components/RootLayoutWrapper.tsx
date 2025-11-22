
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');
  const isForgotten = pathname.startsWith('/forgotten-password');
  const isSignIn = pathname.startsWith('/signin');
  const isSignUp = pathname.startsWith('/signup');
  const isVerifyEmail = pathname.startsWith('/verify-email');

  return (
    <>
      {!isDashboard && !isForgotten && !isSignIn && !isSignUp && !isVerifyEmail &&
        <Header />
      }
      <main>{children}</main>

      {!isDashboard && !isForgotten && !isSignIn && !isSignUp && !isVerifyEmail &&
        <SubscribeSection />
      
      }
      {!isDashboard && !isForgotten && !isSignIn && !isSignUp && !isVerifyEmail &&
        <Footer />
      }
    </>
  );
}