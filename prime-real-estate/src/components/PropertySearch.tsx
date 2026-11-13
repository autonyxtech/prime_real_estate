"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { localities } from "@/data/site";

export function PropertySearch() {
  const router = useRouter();
  const [intent, setIntent] = useState<"Rent" | "Sale">("Rent");
  const [locality, setLocality] = useState("");
  const [bhk, setBhk] = useState("");
  const search = () => {
    const params = new URLSearchParams({ intent });
    if (locality) params.set("locality", locality);
    if (bhk) params.set("bhk", bhk);
    router.push(`/properties/?${params.toString()}`);
  };
  return (
    <div className="search-card">
      <div className="search-card-heading">
        <Image src="/images/logo.jpg" alt="" width={38} height={38} aria-hidden="true" />
        <div><strong>Find a place that feels right</strong><span>Start with a few details</span></div>
      </div>
      <div className="search-tabs" role="group" aria-label="Listing purpose">
        <button type="button" className={intent === "Rent" ? "selected" : ""} onClick={() => setIntent("Rent")}>Rent</button>
        <button type="button" className={intent === "Sale" ? "selected" : ""} onClick={() => setIntent("Sale")}>Buy</button>
      </div>
      <div className="search-fields">
        <label>Locality
          <select value={locality} onChange={(event) => setLocality(event.target.value)}>
            <option value="">All Ahmedabad</option>
            {localities.map((area) => <option value={area} key={area}>{area}</option>)}
          </select>
        </label>
        <label>BHK
          <select value={bhk} onChange={(event) => setBhk(event.target.value)}>
            <option value="">Any</option><option value="1">1 BHK</option><option value="2">2 BHK</option>
            <option value="3">3 BHK</option><option value="4">4+ BHK</option>
          </select>
        </label>
        <button className="button button-primary search-submit" onClick={search} type="button"><Search size={17} />Search homes</button>
      </div>
    </div>
  );
}
