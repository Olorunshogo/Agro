
"use client";

import { usePathname } from "next/navigation";
import DashboardSidebar from "~/components/DashboardSidebar";


const metadata = {
  title: "Dashboard",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const pathname = usePathname();

  const pageName = pathname.split("/").pop() || "dashboard";
  const capitalisedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1) + " Page";

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />      

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="px-8 py-6 bg-white border-b border-(--border-gray)">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-(--heading-colour)">{capitalisedPageName}</h1>
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