import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, MapPin, Phone, Clock3, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { business, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Prime Real Estate Ahmedabad",
  description: "Talk to our Ahmedabad property team about buying, selling, renting or documentation support.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-intro section-shell"><p className="eyebrow">We’re happy to help</p><h1>Let’s talk about what you’re looking for.</h1><p>Share a few details and our Ahmedabad team will help you figure out a good next step.</p><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></div></section>
      <section className="section-shell contact-layout">
        <aside className="contact-sidebar">
          <h2>Get in touch</h2><p>Choose the way that works for you. We’ll be glad to hear from you.</p>
          <a className="contact-method" href={`tel:${business.phone}`}><span><Phone size={19} /></span><div><small>Call us</small><strong>{business.phone}</strong></div></a>
          <a className="contact-method" href={whatsappUrl(business.whatsappMessage)} target="_blank" rel="noreferrer"><span><MessageCircle size={19} /></span><div><small>WhatsApp</small><strong>Chat with our team</strong></div></a>
          <a className="contact-method" href={business.instagram} target="_blank" rel="noreferrer"><span><Instagram size={19} /></span><div><small>Instagram</small><strong>@prime_realestate_ahmedabad</strong></div></a>
          <div className="contact-method"><span><MapPin size={19} /></span><div><small>Location</small><strong>{business.city}</strong></div></div>
          <div className="contact-method"><span><Clock3 size={19} /></span><div><small>Working hours</small><strong>Contact us to arrange a visit</strong></div></div>
          <div className="map-placeholder contact-map"><MapPin size={28} /><strong>Ahmedabad, Gujarat</strong><span>Site visits available on request</span></div>
        </aside>
        <div className="contact-form-panel"><p className="eyebrow">Send an enquiry</p><h2>What can we help you find?</h2><p className="form-panel-intro">We’ll use your details only to follow up about this request.</p><ContactForm /></div>
      </section>
    </main>
  );
}
