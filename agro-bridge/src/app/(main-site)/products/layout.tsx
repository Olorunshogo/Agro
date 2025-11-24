
import React from "react";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      {children}
    </main>
  );
}




