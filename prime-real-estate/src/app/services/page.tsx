import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, FileCheck2, KeyRound, Map, TrendingUp } from "lucide-react";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Property Services in Ahmedabad",
  description: "Buy, sell, rent, property investment and documentation support in Ahmedabad.",
};

const icons = [Building2, Map, KeyRound, TrendingUp, FileCheck2];
const process = [
  ["01", "Tell us what you need", "Share your goals, preferred area and the kind of support you’re looking for."],
  ["02", "Explore your options", "We’ll help you understand suitable choices and the questions to ask."],
  ["03", "Take the next step", "Arrange a visit, discuss details and get help with the paperwork."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-intro section-shell"><p className="eyebrow">Here to make it easier</p><h1>Local support for every property step.</h1><p>Practical guidance for finding a place, making a move or getting your property documents in order.</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Services</span></div></section>
      <section className="section-shell service-details">
        {services.map((service, index) => {
          const Icon = icons[index];
          return <article key={service.title} className={`service-detail${index % 2 ? " reverse" : ""}`}>
            <div className="service-detail-art"><span className="service-art-number">0{index + 1}</span><Icon size={56} strokeWidth={1.3} /><span>{index === 3 ? "GUIDANCE THAT FITS YOUR PLANS" : "AHMEDABAD • LOCAL PROPERTY"}</span></div>
            <div className="service-detail-copy"><p className="eyebrow">Service 0{index + 1}</p><h2>{service.title}</h2><p>{service.description}</p>{index === 4 && <ul className="document-list"><li>Rent Agreement</li><li>Affidavit & Agreement</li><li>Stamp Paper / E-Stamp</li><li>Notary and documentation support</li></ul>}<Link className="text-link" href="/contact/">Ask us about this service <ArrowRight size={16} /></Link></div>
          </article>;
        })}
      </section>
      <section className="process-section service-process"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Our process</p><h2>One clear step at a time.</h2></div><div className="timeline-grid">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="section-shell section-block docs-highlight"><div><p className="eyebrow">Documents we help with</p><h2>Legal documents, made simpler.</h2><p>We’ll help you understand the common paperwork around a property transaction and connect you with the right next step.</p><ul>{["Rent Agreement", "Affidavit and Agreement", "Stamp Paper / E-Stamp", "Notary support", "Property documentation guidance"].map((item) => <li key={item}><BadgeCheck size={18} />{item}</li>)}</ul></div><div className="docs-art"><FileCheck2 size={70} /><span>PROPERTY<br />PAPERWORK</span></div></section>
      <section className="inner-cta section-shell"><div><h2>Need a little guidance?</h2><p>Let’s talk about what you need and how we can help.</p></div><Link href="/contact/" className="button button-primary">Contact our team <ArrowRight size={16} /></Link></section>
    </main>
  );
}
