import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PropertyExplorer } from "@/components/PropertyExplorer";

export const metadata: Metadata = {
  title: "Properties for Rent & Sale in Ahmedabad",
  description: "Browse sample homes, rentals, commercial properties and plots across Ahmedabad.",
};

export default function PropertiesPage() {
  return (
    <main className="inner-page">
      <section className="page-intro section-shell"><p className="eyebrow">Find your next place</p><h1>Properties in Ahmedabad</h1><p>Explore a starting point for your search. Availability, pricing and details are confirmed directly with our team.</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Properties</span></div></section>
      <section className="section-shell page-content"><Suspense fallback={<div className="loading-state">Loading properties…</div>}><PropertyExplorer /></Suspense></section>
      <section className="inner-cta section-shell"><div><h2>Can’t find what you need?</h2><p>Tell us your requirement and we’ll help you look for the right fit.</p></div><Link className="button button-primary" href="/contact/">Tell us your requirement</Link></section>
    </main>
  );
}
