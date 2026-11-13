export const business = {
  name: "Prime Real Estate Ahmedabad",
  tagline: "Your Trusted Property Partner",
  city: "Ahmedabad, Gujarat, India",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+919510319836",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919510319836",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/prime_realestate_ahmedabad/",
  whatsappMessage:
    "Hi Prime Real Estate, I am interested in a property in Ahmedabad.",
};

export const stats = [
  { value: "500+", label: "Happy clients" },
  { value: "350+", label: "Properties listed" },
  { value: "12+", label: "Localities covered" },
  { value: "1,000+", label: "Documents handled" },
];

export const services = [
  {
    title: "Residential & commercial",
    gujarati: "રહેણાંક અને વ્યાપારી",
    description: "Find a home, office, shop or commercial space that fits your plans.",
    icon: "home",
  },
  {
    title: "Plots & land deals",
    gujarati: "પ્લોટ અને જમીન",
    description: "Explore land and plot options with clear, helpful local guidance.",
    icon: "map",
  },
  {
    title: "Rental services",
    gujarati: "ભાડાની સેવાઓ",
    description: "Practical support for tenants and owners through the rental process.",
    icon: "key",
  },
  {
    title: "Purchase & investment guidance",
    gujarati: "ખરીદી અને રોકાણ માર્ગદર્શન",
    description: "Compare options and make informed property decisions at your pace.",
    icon: "chart",
  },
  {
    title: "Property documentation",
    gujarati: "મિલકતના દસ્તાવેજો",
    description: "Rent agreements, affidavits, stamp papers, e-stamps and notary support.",
    icon: "file",
  },
];

export const localities = [
  "Gota",
  "Ghatlodia",
  "New Ranip",
  "Chandkheda",
  "Sola",
  "Bopal",
  "Satellite",
  "Vaishnodevi Circle",
];

export const testimonials = [
  {
    quote: "The team understood what we needed and made the search feel much simpler.",
    name: "A local home seeker",
    detail: "Residential rental",
  },
  {
    quote: "Clear communication at every step. We knew what documents to prepare.",
    name: "Ahmedabad property owner",
    detail: "Rental support",
  },
  {
    quote: "Helpful local options and a smooth site visit made all the difference.",
    name: "A family in New Ranip",
    detail: "Home search",
  },
];

export const faqs = [
  {
    question: "Can I request a site visit?",
    answer: "Yes. Share the property or locality you are interested in and we will help arrange a suitable visit.",
  },
  {
    question: "What documentation can you help with?",
    answer: "We can guide you with rent agreements, affidavits, agreements, stamp paper or e-stamp, and notary support.",
  },
  {
    question: "Do you help with both buying and renting?",
    answer: "Yes. We support property searches for buying, selling and renting across residential and commercial needs.",
  },
  {
    question: "Which areas do you cover?",
    answer: "We work across Ahmedabad, including Gota, Ghatlodia, New Ranip and Chandkheda, along with nearby localities.",
  },
];

export const whatsappUrl = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
