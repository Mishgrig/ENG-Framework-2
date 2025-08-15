import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { Analytics } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s — " + site.name
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
    locale: "en_US"
  },
  alternates: {
    languages: {
      "en-US": "/",
      "ru-RU": "/ru"
    }
  },
  robots: { index: true, follow: true },
  icons: { shortcut: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: []
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: "IP-safe production system to launch Telegram Mini Apps in 14 days.",
    brand: site.name
  };
  return (
    <html lang="en" className="min-h-full">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <Analytics />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
