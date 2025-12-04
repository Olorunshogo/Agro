
import OverviewHighlightCards from "./OverviewHighlightCards";
import OverviewProductManagement from "./OverviewProductManagement";
import CountryDemandChart from "./CountryDemandChart";
import OverviewQuoteRequests from "./OverviewQuoteRequests";

interface Props {
  initialCountryDemand: { country: string; value: number }[];
  initialProducts: { id: string; name: string; stock: number }[];
  highlights: { icon: string; value: number; heading: string }[];
  quoteRequests: {
    id: string;
    buyer: string;
    status: "not_sent" | "pending" | "quoted";
    assignedTo: string;
  }[];
}

export default async function AdminDashboard({
  initialCountryDemand,
  initialProducts,
  highlights,
  quoteRequests,
}: Props) {

  return (
    <div className="relative flex flex-col w-full h-full gap-12 p-2">
      <OverviewHighlightCards adminHighlights={highlights} />

      <div className="grid w-full h-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
        <OverviewProductManagement initialProducts={initialProducts} />
        
        <CountryDemandChart data={initialCountryDemand} />
      </div>

      <OverviewQuoteRequests quoteRequests={quoteRequests} />
    </div>
  );
}
