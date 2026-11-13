import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, FileCheck2, Handshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { PropertySearch } from "@/components/PropertySearch";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/data/properties";
import { business, faqs, localities, services, stats, testimonials, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Homes, Rentals & Property Guidance in Ahmedabad",
  description: "Explore homes, rentals, commercial properties and documentation support with Prime Real Estate Ahmedabad.",
  alternates: { canonical: "/" },
};

const reasons = [
  ["Trusted service", "Friendly guidance built around what matters to you.", ShieldCheck],
  ["Clear communication", "Know the next step and ask questions along the way.", Handshake],
  ["Local options", "Explore Ahmedabad neighbourhoods with local context.", MapPin],
  ["Documentation help", "Get support with everyday property paperwork.", FileCheck2],
];

export default function HomePage() {
  const featured = properties.slice(0, 6);
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: business.name,
    telephone: business.phone,
    address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
    sameAs: [business.instagram],
    areaServed: "Ahmedabad",
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-grid section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Your trusted property partner</p>
            <h1>Find your dream property <em>in Ahmedabad.</em></h1>
            <p className="hero-intro">A home to grow in, a space for your business, or a place to begin again—we’ll help you find the right fit.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/properties/">Explore properties <ArrowRight size={17} /></Link>
              <a className="button button-outline" href={whatsappUrl(business.whatsappMessage)} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="trust-chips">
              <span><BadgeCheck size={17} />Verified listings</span>
              <span><ShieldCheck size={17} />Transparent guidance</span>
              <span><MapPin size={17} />Site visits available</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-building-art">
              <Image
                className="hero-property-image"
                src="/images/villa-pool.png"
                alt="Modern Ahmedabad home beside a swimming pool"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 45vw"
              />
              <div className="hero-image-overlay" aria-hidden="true" />
              <div className="hero-art-label"><span>AHMEDABAD</span><strong>Find a place to call yours.</strong></div>
            </div>
            <div className="hero-floating-note"><Sparkles size={16} /><span>Let’s find your<br /><strong>right place</strong></span></div>
          </div>
        </div>
        <div className="hero-search section-shell"><PropertySearch /></div>
      </section>

      <section className="stats-strip section-shell" aria-label="Our experience">
        {stats.map((item) => <div className="stat-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="section-shell section-block" id="services">
        <Reveal className="section-heading">
          <p className="eyebrow">Ways we can help</p><h2>Property decisions, made a little easier.</h2>
          <p className="section-intro">Whether you’re searching, moving, investing or sorting paperwork, we’re here to help you take the next step.</p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = [Building2, MapPin, Handshake, Sparkles, FileCheck2][index];
            return <Reveal key={service.title} className="service-card">
              <span className="service-icon"><Icon size={24} /></span><span className="card-index">0{index + 1}</span>
              <h3>{service.title}</h3><p>{service.description}</p><Link href="/services/" className="text-link">Explore service <ArrowRight size={15} /></Link>
            </Reveal>;
          })}
        </div>
      </section>

      <section className="featured-section section-block" id="properties">
        <div className="section-shell">
          <div className="section-heading heading-inline">
            <div><p className="eyebrow">A few places to begin</p><h2>Featured properties</h2><p className="section-intro">A small selection of sample options. Ask us for current availability and details.</p></div>
            <Link href="/properties/" className="button button-outline">View all properties <ArrowRight size={16} /></Link>
          </div>
          <div className="featured-grid">
            {featured.map((property) => (
              <article className="featured-card" key={property.id}>
                <Link href={`/properties/?intent=${property.intent}&locality=${encodeURIComponent(property.locality)}`} className="featured-image">
                  <Image src={property.image} alt={`${property.title} in ${property.locality}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                  <span className="property-tag">{property.intent === "Rent" ? "For Rent" : "For Sale"}</span>
                </Link>
                <div className="featured-copy"><p><MapPin size={14} />{property.locality}, Ahmedabad</p><h3>{property.title}</h3><strong>{property.intent === "Rent" ? `₹${property.price.toLocaleString("en-IN")} / month` : `₹${(property.price / 100000).toFixed(0)} lakh`}</strong><Link href={`/properties/?intent=${property.intent}&locality=${encodeURIComponent(property.locality)}`}>See details <ArrowRight size={14} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block localities-section">
        <div className="section-heading"><p className="eyebrow">Find your neighbourhood</p><h2>Ahmedabad, one neighbourhood at a time.</h2><p className="section-intro">Start with an area you know—or let us introduce you to somewhere new.</p></div>
        <div className="locality-grid">{localities.slice(0, 4).map((locality, index) => <Link key={locality} href={`/properties/?locality=${encodeURIComponent(locality)}`} className={`locality-card locality-${index + 1}`}><span>0{index + 1}</span><strong>{locality}</strong><span className="locality-arrow"><ArrowRight size={18} /></span></Link>)}</div>
      </section>
      <div className="locality-marquee" aria-label="More Ahmedabad areas"><div>{[...localities, ...localities].map((area, index) => <span key={`${area}-${index}`}>{area}<i>✦</i></span>)}</div></div>

      <section className="why-section section-block">
        <div className="section-shell why-layout">
          <div className="section-heading"><p className="eyebrow">Why Prime Real Estate</p><h2>Your priorities come first.</h2><p className="section-intro">Finding the right property is personal. We listen first, then help you move forward with clarity.</p><Link href="/contact/" className="text-link">Talk to our team <ArrowRight size={15} /></Link></div>
          <div className="reason-list">{reasons.map(([title, description, Icon], index) => {
            const ReasonIcon = Icon as typeof ShieldCheck;
            return <article className="reason-row" key={String(title)}><span className="reason-number">0{index + 1}</span><span className="reason-icon"><ReasonIcon size={21} /></span><div><h3>{String(title)}</h3><p>{String(description)}</p></div></article>;
          })}</div>
        </div>
      </section>

      <ProcessSteps />

      <section className="about-section section-block" id="about">
        <div className="section-shell about-layout">
          <div className="about-emblem"><Image src="/images/logo.jpg" alt="Prime Real Estate Ahmedabad" width={260} height={260} /><span>YOUR PROPERTY,<br />OUR PRIORITY.</span></div>
          <div><p className="eyebrow">A little about us</p><h2>Rooted here. Ready to help you find your place.</h2><p>Prime Real Estate Ahmedabad is a local team helping people navigate property choices with a friendly, practical approach. From the first conversation to paperwork and site visits, we’ll keep the focus on your needs.</p><p>Our promise is simple: <strong>Your Property, Our Priority.</strong></p><Link href="/contact/" className="button button-primary">Get to know our team <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="documentation-section section-block">
        <div className="section-shell documentation-card"><div className="document-icon"><FileCheck2 size={30} /></div><div><p className="eyebrow">Property paperwork, made simpler</p><h2>Support for the documents that move things forward.</h2><p>Rent agreements, affidavits, agreements, stamp paper and e-stamp, notary, and property documentation support.</p></div><Link className="button button-primary" href="/services/">Explore documentation <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section-shell section-block testimonials-section">
        <div className="section-heading"><p className="eyebrow">Kind words</p><h2>Good guidance makes a difference.</h2><p className="section-intro">Experiences shared by people we’ve helped. Individual results and timelines vary by requirement.</p></div>
        <div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><div className="quote-mark">“</div><blockquote>{item.quote}</blockquote><div className="testimonial-person"><span>{item.name}</span><small>{item.detail}</small></div></article>)}</div>
      </section>

      <section className="faq-section section-block" id="faq">
        <div className="section-shell faq-layout"><div className="section-heading"><p className="eyebrow">A few answers</p><h2>Questions you might have.</h2><p className="section-intro">Still wondering about something? We’re only a message away.</p></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="final-cta section-shell"><div><p className="eyebrow">Ready when you are</p><h2>Looking for a flat in Ahmedabad?<br />Let’s find it together.</h2><p>Tell us what you need. We’ll help you explore the next step.</p></div><div className="cta-actions"><a className="button button-white" href={whatsappUrl(business.whatsappMessage)} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight size={16} /></a><a href={`tel:${business.phone}`} className="cta-phone">Or call {business.phone}</a></div></section>
    </main>
  );
}
