import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { site } from "@/lib/site";
import { steden } from "@/lib/steden";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Website huren vanaf €99 per maand | HuurEenWebsite.nl",
    template: "%s | HuurEenWebsite.nl",
  },
  description:
    "Een professionele website zonder dure investering vooraf: €199 opstartkosten, daarna €99 per maand. Compleet geregeld: ontwerp, hosting, onderhoud en SEO. Binnen 1 week live.",
  openGraph: {
    siteName: site.naam,
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.naam,
  url: site.url,
  email: site.email,
  telephone: site.telefoonLink.replace("tel:", ""),
  slogan: site.slogan,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Veilmeesterweg 36",
    postalCode: "1186 DT",
    addressLocality: "Amstelveen",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3008,
    longitude: 4.8639,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  parentOrganization: { "@type": "Organization", name: site.bv },
  areaServed: ["Nederland", ...steden.map((s) => s.naam)],
  priceRange: "€99 - €249 per maand",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={jakarta.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
