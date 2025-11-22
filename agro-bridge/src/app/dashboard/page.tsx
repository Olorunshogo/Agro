
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react";

import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Dashboard – Manage Orders & Quotes",
  description: "Your personal AgroBridge buyer dashboard. Track orders, quotes, and sourcing activity.",

  keywords: [
    "agrobridge dashboard", "buyer dashboard", "order tracking",
    "quote requests", "agricultural sourcing dashboard"
  ],

  openGraph: {
    url: "/dashboard",
    title: "Dashboard – Manage Orders & Quotes | AgroBridge",
    description: "Track your orders, quotes, and sourcing activity in one place.",
  },

  twitter: {
    title: "Dashboard – Manage Orders & Quotes | AgroBridge",
    description: "Track your orders, quotes, and sourcing activity in one place.",
  },

  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: true },
};

export default function Dashboard() {
  const stats = [
    { title: "Total Products", value: "124", icon: Package, change: "+12%" },
    { title: "Active Orders", value: "89", icon: ShoppingCart, change: "+23%" },
    { title: "Customers", value: "2,845", icon: Users, change: "+18%" },
    { title: "Revenue", value: "₦12.4M", icon: TrendingUp, change: "+41%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back!</h2>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="transition-shadow hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-5 h-5 text-(--agro-green-dark)" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-xs text-green-600">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">No recent orders yet.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">All products in stock!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}