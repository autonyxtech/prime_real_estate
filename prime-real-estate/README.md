# Prime Real Estate Ahmedabad

A responsive Next.js App Router site for the Ahmedabad property agency. The site includes Home, Properties, Services and Contact pages, sample editable listings, Gujarati/English UI toggle, a validated contact form, and persistent WhatsApp/call actions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run lint`, `npm run typecheck` and `npm run build` before deployment.

## Update business information

- Business name, phone, social links, stats, service copy, localities, FAQs and testimonials: `src/data/site.ts`
- Sample listings and their photos, prices, features and descriptions: `src/data/properties.ts`
- Logo used in the header, footer, search card and browser tab: `public/images/logo.jpg`
- Supplied property photos are stored in `public/images/` and mapped to listings in `src/data/properties.ts`.

Listing details, prices and testimonials are examples; confirm availability and replace them with verified information before launch.

## Contact delivery

Copy `.env.example` to `.env.local` and set the public phone and WhatsApp values if they differ. Form submissions are validated in the browser and on the server, protected by a honeypot and a basic per-process rate limit. Configure either:

- `CONTACT_WEBHOOK_URL` for an automation endpoint (for example, a Google Sheets workflow), or
- `RESEND_API_KEY`, `CONTACT_EMAIL` and optionally `CONTACT_FROM_EMAIL` to deliver enquiries by email.

Without a delivery integration, the form validates and prepares the enquiry for the user to continue on WhatsApp. Set `NEXT_PUBLIC_SITE_URL` to the production URL before launch so canonical metadata and sitemap URLs use the correct domain. On Vercel, the deployment URL is used as a fallback if this variable is not set.

## Scroll and motion

The reference site uses Lenis with a GSAP ticker and ScrollTrigger for pinned scroll-linked sections. This site follows that pattern in `src/components/SmoothScroll.tsx` and `src/components/ProcessSteps.tsx`, with responsive pinning, reduced-motion support, reveal-on-scroll content and a mobile-friendly normal-flow process layout. The `reference` folder is not modified.

## Deploy

Deploy the `prime-real-estate` directory as the Vercel project root (or set the Vercel project's Root Directory to `prime-real-estate` when importing the parent workspace). The included `vercel.json` selects the Next.js framework; Vercel detects the build and install commands from the project. Add any contact integration environment variables in Vercel project settings, and set `NEXT_PUBLIC_SITE_URL`, business contact details, sample listing content and testimonials before publishing.
