
import { usePathname } from "next/navigation";
import { Home, BarChart3, Package, ShoppingCart, Settings, Users, FileText, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const adminNavItems: NavItem[] = [
  { label: "Overview", icon: Home, href: "/admin-dashboard" },
  { label: "Analytics", icon: BarChart3, href: "/admin-dashboard/analytics" },
  { label: "Products", icon: Package, href: "/admin-dashboard/products" },
  { label: "Quote Requests", icon: ShoppingCart, href: "/admin-dashboard/quote-requests" },
  // { label: "Buyers", icon: Users, href: "/admin-dashboard/buyers" },
  // { label: "Suppliers", icon: Truck, href: "/admin-dashboard/suppliers" },
  // { label: "Reports", icon: FileText, href: "/admin-dashboard/reports" },
  { label: "Settings", icon: Settings, href: "/admin-dashboard/settings" },
];

export const userNavItems: NavItem[] = [
  { label: "Overview", icon: Home, href: "/user-dashboard" },
  { label: "Analytics", icon: BarChart3, href: "/user-dashboard/analytics" },
  { label: "Products", icon: Package, href: "/user-dashboard/products" },
  { label: "Quote Requests", icon: ShoppingCart, href: "/user-dashboard/quote-requests" },
  // { label: "My Orders", icon: FileText, href: "/user-dashboard/orders" },
  { label: "Settings", icon: Settings, href: "/user-dashboard/settings" },
];

export function useDashboardNav() {
  const pathnameRaw = usePathname();
  const pathname = pathnameRaw ?? "/";

  const isAdmin = pathname.startsWith("/admin-dashboard");
  const isUser = pathname.startsWith("/user-dashboard");
  const basePath = isAdmin ? "/admin-dashboard" : isUser ? "/user-dashboard" : "/dashboard";

  // Select correct nav items based on role
  const baseNavItems = isAdmin ? adminNavItems : userNavItems;

  // Fix hrefs in case basePath changes in future (safe)
  const navItems: NavItem[] = baseNavItems.map((item: NavItem) => ({
    ...item,
    href: item.href
      .replace("/admin-dashboard", basePath)
      .replace("/user-dashboard", basePath),
  }));

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return { navItems, isActive, basePath, isAdmin, isUser };
}
