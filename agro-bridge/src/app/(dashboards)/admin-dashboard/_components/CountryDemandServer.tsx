
import CountryDemandChart from "./CountryDemandChart";
import { CountryDemandResponse } from "~/app/api/dashboards/admin-dashboard/country-demand/route";

export default async function CountryDemandServer() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboards/admin-dashboard/country-demand`,
    { cache: "no-store" }
  );

  const json: CountryDemandResponse = await res.json();

  return <CountryDemandChart data={json.data} />;
}

