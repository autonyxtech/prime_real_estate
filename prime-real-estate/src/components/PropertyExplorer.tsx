"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Bath, BedDouble, MapPin, Maximize, X } from "lucide-react";
import { properties, type Property } from "@/data/properties";
import { business, whatsappUrl } from "@/data/site";

const money = (amount: number, intent: Property["intent"]) =>
  intent === "Rent"
    ? `₹${amount.toLocaleString("en-IN")} / month`
    : `₹${(amount / 100000).toLocaleString("en-IN", { maximumFractionDigits: 0 })} lakh`;

export function PropertyExplorer() {
  const searchParams = useSearchParams();
  const [intent, setIntent] = useState(searchParams.get("intent") || "Any");
  const [type, setType] = useState("Any");
  const [bhk, setBhk] = useState(searchParams.get("bhk") || "Any");
  const [locality, setLocality] = useState(searchParams.get("locality") || "Any");
  const [maxBudget, setMaxBudget] = useState(20000000);
  const [selected, setSelected] = useState<Property | null>(null);

  const results = useMemo(() => properties.filter((property) => {
    const bhkMatches = bhk === "Any" || (bhk === "4" ? property.bhk >= 4 : property.bhk === Number(bhk));
    return (intent === "Any" || property.intent === intent)
      && (type === "Any" || property.type === type)
      && bhkMatches
      && (locality === "Any" || property.locality === locality)
      && property.price <= maxBudget;
  }), [intent, type, bhk, locality, maxBudget]);

  const reset = () => {
    setIntent("Any"); setType("Any"); setBhk("Any"); setLocality("Any"); setMaxBudget(20000000);
  };

  return (
    <>
      <div className="filter-panel">
        <label>Buy or rent<select value={intent} onChange={(event) => setIntent(event.target.value)}><option>Any</option><option value="Sale">Buy</option><option>Rent</option></select></label>
        <label>Property type<select value={type} onChange={(event) => setType(event.target.value)}>{["Any", "Flat", "House", "Shop", "Office", "Plot"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>BHK<select value={bhk} onChange={(event) => setBhk(event.target.value)}><option>Any</option><option value="1">1 BHK</option><option value="2">2 BHK</option><option value="3">3 BHK</option><option value="4">4+ BHK</option></select></label>
        <label>Locality<select value={locality} onChange={(event) => setLocality(event.target.value)}><option>Any</option>{["Gota", "Ghatlodia", "New Ranip", "Chandkheda", "Sola", "Bopal"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="budget-filter">Budget up to <strong>₹{(maxBudget / 100000).toFixed(0)} lakh</strong><input type="range" min="10000" max="20000000" step="10000" value={maxBudget} onChange={(event) => setMaxBudget(Number(event.target.value))} /></label>
        <button className="button button-outline reset-button" type="button" onClick={reset}>Reset filters</button>
      </div>
      <p className="results-count">{results.length} {results.length === 1 ? "property" : "properties"} to explore</p>
      {results.length ? (
        <div className="property-grid">
          {results.map((property) => (
            <article className="property-card" key={property.id}>
              <button type="button" className="property-image-button" onClick={() => setSelected(property)} aria-label={`View ${property.title}`}>
                <Image src={property.image} alt={`${property.title} in ${property.locality}`} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <span className="property-tag">{property.intent === "Rent" ? "For Rent" : "For Sale"}</span>
              </button>
              <div className="property-card-content">
                <p className="property-locality"><MapPin size={15} />{property.locality}, Ahmedabad</p>
                <h2>{property.title}</h2><strong className="property-price">{money(property.price, property.intent)}</strong>
                <div className="property-meta">
                  {property.bhk > 0 && <span><BedDouble size={15} />{property.bhk} BHK</span>}
                  {property.bathrooms > 0 && <span><Bath size={15} />{property.bathrooms} bath</span>}
                  <span><Maximize size={15} />{property.area} sq ft</span>
                </div>
                <div className="feature-chips">{property.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
                <div className="property-actions">
                  <a className="button button-primary" href={whatsappUrl(`Hi Prime Real Estate, I am interested in ${property.title} in ${property.locality}.`)} target="_blank" rel="noreferrer">WhatsApp enquiry</a>
                  <a className="button button-outline" href={`tel:${business.phone}`}>Call</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : <div className="empty-state"><h2>No properties match those filters yet</h2><p>Try widening your search or contact us and we will help find a suitable option.</p><button className="button button-primary" type="button" onClick={reset}>Clear filters</button></div>}
      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="property-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close details" onClick={() => setSelected(null)}><X /></button>
            <div className="modal-image"><Image src={selected.image} alt={selected.title} fill sizes="(max-width: 700px) 100vw, 700px" /></div>
            <div className="modal-body"><p className="eyebrow">{selected.locality}, Ahmedabad</p><h2 id="modal-title">{selected.title}</h2><strong className="property-price">{money(selected.price, selected.intent)}</strong><p>{selected.description}</p><div className="feature-chips">{selected.features.map((feature) => <span key={feature}>{feature}</span>)}</div><a className="button button-primary" href={whatsappUrl(`Hi Prime Real Estate, please share more details about ${selected.title} in ${selected.locality}.`)} target="_blank" rel="noreferrer">Enquire on WhatsApp</a></div>
          </section>
        </div>
      )}
    </>
  );
}
