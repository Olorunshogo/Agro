
import { inter, openSans } from "../fonts";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${openSans.variable} antialiased`}>
        <main>{children}</main>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}




