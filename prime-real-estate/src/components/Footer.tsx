import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Phone } from "lucide-react";
import { business, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-brand">
          <Link href="/" className="brand-lockup">
            <Image src="/images/logo.jpg" alt="Prime Real Estate Ahmedabad logo" width={72} height={72} />
            <span><strong>Prime Real Estate</strong><small>AHMEDABAD</small></span>
          </Link>
          <p>Local property guidance for buying, selling, renting and making documentation simpler.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link><Link href="/properties/">Properties</Link>
          <Link href="/services/">Services</Link><Link href="/contact/">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.slice(0, 4).map((service) => <Link key={service.title} href="/services/">{service.title}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <a href={`tel:${business.phone}`}><Phone size={16} />{business.phone}</a>
          <a href={business.instagram} target="_blank" rel="noreferrer"><Instagram size={16} />@prime_realestate_ahmedabad</a>
          <span><MapPin size={16} />{business.city}</span>
          <div className="map-placeholder" aria-label="Ahmedabad location map placeholder">
            <MapPin size={22} /><span>Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>© {new Date().getFullYear()} Prime Real Estate Ahmedabad. All rights reserved.</span>
        <span>Your Property, Our Priority.</span>
      </div>
    </footer>
  );
}
