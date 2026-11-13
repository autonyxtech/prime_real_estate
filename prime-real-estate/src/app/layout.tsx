import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { business } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Prime Real Estate Ahmedabad | Your Trusted Property Partner",
    template: "%s | Prime Real Estate Ahmedabad",
  },
  description:
    "Find homes, rentals, commercial spaces and property documentation support in Ahmedabad with Prime Real Estate.",
  keywords: ["Ahmedabad real estate", "property for rent Ahmedabad", "property for sale Ahmedabad"],
  openGraph: {
    title: "Prime Real Estate Ahmedabad",
    description: "Your trusted property partner for buying, selling and renting in Ahmedabad.",
    siteName: business.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
            <FloatingActions />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
