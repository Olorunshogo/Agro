
"use client";

import { usePathname } from "next/navigation";
import DashboardSidebar from "~/components/DashboardSidebar";

const titleMap: Record<string, string> = {
  "admin-dashboard": "Admin Dashboard",
  "user-dashboard": "User Dashboard",
  orders: "Orders",
  products: "Products",
  analytics: "Analytics",
  "quote-requests": "Quote Requests",
  settings: "Settings",
  profile: "Profile",
  buyers: "Buyers",
  suppliers: "Suppliers",
  inventory: "Inventory",
  messages: "Messages",
  payments: "Payments",
  reports: "Reports",
  support: "Support",
};


const metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {  
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  // Use the mapped title if exists, otherwise format nicely
  const displayTitle =
    titleMap[lastSegment] ||
    lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
      
  const role = typeof document !== "undefined" 
  ? document.cookie.split("; ").find(row => row.startsWith("user_role="))?.split("=")[1]
  : "User";

  return (
    <div className="flex min-h-screen font-openSans">
      {/* Sidebar */}
      <DashboardSidebar />      

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="px-8 py-6 bg-white border-b border-(--border-gray)">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-(--heading-colour)">
              {displayTitle}
            </h1>
            <div className="text-sm text-(--text-colour)">
              Welcome back, {role === "admin" ? "Admin" : "User"}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}