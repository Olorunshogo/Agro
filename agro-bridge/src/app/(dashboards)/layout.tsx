// app/(dashboard)/layout.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DashboardSidebar from "~/components/DashboardSidebar";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import { useDashboardNav } from "~/store/useDashboardNavItems";
import Link from "next/link";
import { AppLogo } from "~/components/app-logo";

const titleMap: Record<string, string> = {
  "admin-dashboard": "Admin Dashboard",
  "user-dashboard": "User Dashboard",
  analytics: "Analytics",
  products: "Products",
  "quote-requests": "Quote Requests",
  settings: "Settings",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { navItems, isActive, basePath } = useDashboardNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const pageTitle = titleMap[lastSegment] || lastSegment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <DashboardSidebar />

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <div 
          className="fixed inset-0 w-full bg-black/50" 
          onClick={() => setMobileOpen(false)} 
        />
        
        <aside className="fixed top-0 left-0 flex flex-col w-full h-full bg-white shadow-xl sm:w-1/2 md:w-1/3 max-w-120">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href={basePath} className="flex items-center gap-3">
              <AppLogo className="w-8 h-8" />
              <span className="text-2xl font-bold text-green-800">Debridger</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileOpen(false)}
            >
              ×
            </Button>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map(({ href, icon: Icon, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                      ${isActive(href)
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 bg-white border-b border-(--border-gray)">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
          </div>
          <div className="hidden text-sm text-gray-600 sm:flex">
            Welcome back, {pathname.includes("admin") ? "Admin" : "User"}
          </div>
        </header>

        {/* Page */}
        <main className="flex-1 overflow-auto px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) lg:py-(--section-py-lg)">
          {children}
        </main>
      </div>
    </div>
  );
}