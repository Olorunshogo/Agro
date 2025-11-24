
"use client";

import { useRouter, usePathname } from "next/navigation";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { LogOut, Home, Package, ShoppingCart, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardSidebar() {
  const router = useRouter();
  
  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/signin");
    router.refresh();
  }

  const navItems = [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Package, label: "Analytics", href: "/dashboard/analytics" },
    { icon: ShoppingCart, label: "Products", href: "/dashboard/products" },
    { icon: Users, label: "Quote Requests", href: "/dashboard/quote-requests" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];
  
  return (
    <aside className="flex flex-col w-64 bg-white border-r border-(--border-gray)">
      <div className="p-6 border-b border-(--border-gray)">
        <Link href="/dashboard" className="flex items-center gap-3">
          <AppLogo className="w-8 h-8" />
          <span className="text-xl lg:text-2xl font-bold text-(--agro-green-dark)">AgroBridge</span>
        </Link>
      </div>

      <nav className="flex flex-1 p-6 overflow-y-auto">
        <ul className="flex flex-col w-full gap-2">
          {navItems.map(({ href, icon: Icon, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="flex items-center gap-3 py-3 text-gray-700 w-full rounded-lg hover:bg-(--hover-bg) duration-300 ease-in-out transition-all hover:cursor-pointer hover:bg-green-50 hover:text-(--agro-green-dark) font-medium"
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={logout}
          className="flex items-center gap-3 justify-start w-full text-(--input-error-red) hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
            Log Out
        </Button>
      </div>
    </aside>
  )
}
