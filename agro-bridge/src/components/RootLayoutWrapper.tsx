
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
  const isSignIn = pathname.startsWith('/signin');
  const isSignUp = pathname.startsWith('/signup');

  return (
    <>
      {!isDashboard && !isSignIn && !isSignUp &&
        <Header />
      }
      <main>{children}</main>

      {!isDashboard && isSignIn && !isSignUp &&
        <SubscribeSection />
      
      }
      {!isDashboard && isSignIn && !isSignUp &&
        <Footer />
      }
    </>
  );
}