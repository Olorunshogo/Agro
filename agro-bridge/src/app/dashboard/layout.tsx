
"use client";

import { useRouter } from "next/navigation";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { LogOut, Home, Package, ShoppingCart, Settings, Users } from "lucide-react";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/signin");
    // router.refresh();
  }
  
  const navItems = [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
    { icon: Users, label: "Customers", href: "/dashboard/customers" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white border-r border-(--border-gray)">
        <div className="p-6 border-b border-(--border-gray)">
          <Link href="/dashboard" className="flex items-center gap-3">
            <AppLogo className="w-10 h-10" />
            <span className="text-xl lg:text-2xl font-bold text-(--heading-colour)">AgroBridge</span>
          </Link>
        </div>

        <nav className="flex flex-1 p-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-(--hover-bg) transition-colors hover:bg-green-50 hover:text-(--agro-green-dark) font-medium"
                >
                  <nav.icon className="w-5 h-5" />
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={logout}
            className="justify-start w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="px-8 py-5 bg-white border-b border-(--border-gray)">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-(--heading-colour)">Dashboard</h1>
            <div className="text-sm text-(--text-colour)">
              Welcome back, Admin
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}