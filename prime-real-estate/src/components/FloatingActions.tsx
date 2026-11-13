"use client";

import { MessageCircle, Phone } from "lucide-react";
import { business, whatsappUrl } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="floating-actions">
      <a className="floating-call" href={`tel:${business.phone}`} aria-label="Call Prime Real Estate">
        <Phone size={21} />
      </a>
      <a className="floating-whatsapp" href={whatsappUrl(business.whatsappMessage)} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <MessageCircle size={23} /><span>Chat with us</span>
      </a>
    </div>
  );
}
