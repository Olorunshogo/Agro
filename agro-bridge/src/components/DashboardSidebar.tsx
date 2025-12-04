
"use client";

import { useRouter, usePathname } from "next/navigation";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useDashboardNav } from "~/store/useDashboardNavItems";

export default function DashboardSidebar() {
  const router = useRouter();

  // Detect current base path
  const { navItems, isActive, basePath } = useDashboardNav();
  
  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/signin");
    router.refresh();
  }
  
  return (
    <>
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-(--border-gray)">
        <div className="p-6 border-b border-(--border-gray)">
          <Link href={basePath} className="flex items-center gap-3">
            <AppLogo className="w-8 h-8" />
            <span className="text-xl lg:text-2xl font-bold text-(--agro-green-dark)">Debridger</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map(({ href, icon: Icon, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200
                    ${isActive(href)
                      ? "bg-green-50 text-green-800 border border-green-200 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-green-800"
                    }`}
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
    </>
  )
}
