
"use client";

import { useRouter, usePathname } from "next/navigation";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { 
  LogOut, Home, Package, 
  ShoppingCart, Settings, Users,
  BarChart3, Inbox, FileText,
  Shield, UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current base path
  const isAdmin = pathname.startsWith("/admin-dashboard");
  const isUser = pathname.startsWith("/user-dashboard");
  const basePath = isAdmin ? "/admin-dashboard" : isUser ? "/user-dashboard" : "/dashboard";

  // Role-specific nav items
  const adminNavItems = [
    { icon: Home, label: "Overview", href: `${basePath}` },
    { icon: BarChart3, label: "Analytics", href: `${basePath}/analytics` },
    { icon: Package, label: "Products", href: `${basePath}/products` },
    { icon: ShoppingCart, label: "Quote Requests", href: `${basePath}/quote-requests` },
    { icon: Settings, label: "Settings", href: `${basePath}/settings` },
  ];

  const userNavItems = [
    { icon: Home, label: "Overview", href: `${basePath}` },
    { icon: BarChart3, label: "Analytics", href: `${basePath}/analytics` },
    { icon: Package, label: "Products", href: `${basePath}/products` },
    { icon: ShoppingCart, label: "Quote Requests", href: `${basePath}/quote-requests` },
    { icon: Settings, label: "Settings", href: `${basePath}/settings` },
  ];

  const navItems = isAdmin ? adminNavItems : userNavItems;
  
  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/signin");
    router.refresh();
  }

  // const navItems = [
  //   { icon: Home, label: "Overview", href: "/dashboard" },
  //   { icon: Package, label: "Analytics", href: "/dashboard/analytics" },
  //   { icon: ShoppingCart, label: "Products", href: "/dashboard/products" },
  //   { icon: Users, label: "Quote Requests", href: "/dashboard/quote-requests" },
  //   { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  // ];
  
  return (
    <>
      <aside className="flex flex-col w-64 bg-white border-r border-(--border-gray)">
        <div className="p-6 border-b border-(--border-gray)">
          <Link href={basePath} className="flex items-center gap-3">
            <AppLogo className="w-8 h-8" />
            <span className="text-xl lg:text-2xl font-bold text-(--agro-green-dark)">Debridger</span>
          </Link>
        </div>

        <nav className="flex flex-1 p-6 overflow-y-auto">
          <ul className="flex flex-col w-full gap-2">
            {navItems.map(({ href, icon: Icon, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium
                      ${isActive
                        ? "bg-(--agro-green-light)/10 text-(--agro-green-dark) shadow-sm border-1 border-(--agro-green-light)/20"
                        : "text-gray-700 hover:bg-gray-50 hover:text-(--agro-green-dark)"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
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
    </>
  )
}
