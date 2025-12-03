
import AdminDashboard from "./_components/AdminDashboard";
import { 
  getHighlights, getProducts, getCountryDemandData, getQuoteRequests
} from "./actions";


const metadata = {
  title: "Admin Dashboard – Manage Orders & Quotes",
  description: "Your personal Debridger buyer dashboard. Track orders, quotes, and sourcing activity.",

  keywords: [
    "debridger admin dashboard", "analysis", "order tracking",
    "quote requests", "agricultural sourcing dashboard"
  ],

  openGraph: {
    url: "/dashboard",
    title: "Dashboard – Manage Orders & Quotes | Debridger",
    description: "Track your orders, quotes, and sourcing activity in one place.",
  },

  twitter: {
    title: "Dashboard – Manage Orders & Quotes | Debridger",
    description: "Track your orders, quotes, and sourcing activity in one place.",
  },

  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: true },
};

export default async function AdminDashboardPage() {  
  const [countryDemand, products, highlights, quoteRequests] = await Promise.all([
    getCountryDemandData(),
    getProducts(),
    getHighlights(),
    getQuoteRequests(),
  ]);

  // Normalize and narrow the status to the expected literal union
  const normalizedQuoteRequests = quoteRequests.map(q => ({
    ...q,
    status:
      q.status === "pending" || q.status === "quoted" || q.status === "not_sent"
        ? q.status
        : "not_sent",
  })) as {
    id: string;
    buyer: string;
    status: "not_sent" | "pending" | "quoted";
    assignedTo: string;
  }[];
  
  return (
    <>
      <AdminDashboard 
        highlights={highlights}
        initialProducts={products}
        initialCountryDemand={countryDemand.data}
        quoteRequests={normalizedQuoteRequests}
        
      />

    </>
  );
}
