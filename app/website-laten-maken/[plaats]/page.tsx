import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { steden } from "@/lib/steden";
import { site } from "@/lib/site";
import { Check } from "@/components/icons";

type Props = { params: Promise<{ plaats: string }> };

export function generateStaticParams() {
  return steden.map((s) => ({ plaats: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { plaats } = await params;
  const stad = steden.find((s) => s.slug === plaats);
  if (!stad) return {};
  return {
    title: `Website laten maken in ${stad.naam}`,
    description: `Professionele website laten maken in ${stad.naam}? Maatwerk design, SEO-geoptimaliseerd en snel live. Kopen vanaf €1.499 of huren vanaf €99 per maand.`,
    alternates: { canonical: `/website-laten-maken/${stad.slug}` },
  };
}

export default async function StadPagina({ params }: Props) {
  const { plaats } = await params;
  const stad = steden.find((s) => s.slug === plaats);
  if (!stad) notFound();

  const faqItems = [
    {
      vraag: `Wat kost een website laten maken in ${stad.naam}?`,
      antwoord: `Voor ondernemers in ${stad.naam} bouwen we maatwerk websites vanaf €1.499 excl. btw. Liever geen grote investering vooraf? Huur dan een complete website voor €199 opstartkosten en vanaf €99 per maand, inclusief hosting, onderhoud en SEO.`,
    },
    {
      vraag: `Komen jullie ook langs in ${stad.naam}?`,
      antwoord: `Ja, ${stad.naam} ligt in ons werkgebied (${stad.regio}). We komen graag langs voor een kop koffie, maar videobellen kan natuurlijk ook.`,
    },
    {
      vraag: `Hoe word ik beter vindbaar in Google in ${stad.naam}?`,
      antwoord: `Elke website leveren we standaard SEO-geoptimaliseerd op, inclusief lokale vindbaarheid: je Google Bedrijfsprofiel, lokale zoektermen en de juiste technische basis. Wil je structureel hoger scoren, dan hebben we aanvullende SEO-pakketten.`,
    },
    {
      vraag: "Hoe snel staat mijn website online?",
      antwoord:
        "Een huurwebsite staat meestal binnen 1 week live. Maatwerkprojecten duren 2 tot 4 weken, afhankelijk van de omvang.",
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website laten maken",
        item: `${site.url}/website-laten-maken`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: stad.naam,
        item: `${site.url}/website-laten-maken/${stad.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow"><Check size={16} /> Actief in {stad.naam} en omgeving</div>
          <h1>Website laten maken in {stad.naam}</h1>
          <p className="lead">{stad.intro}</p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              Plan gratis adviesgesprek
            </Link>
            <Link href="/website-huren" className="btn btn-ghost">
              Of huur vanaf €99 p/m
            </Link>
          </div>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="prose">
            <h2>Ondernemen in {stad.naam} vraagt om online zichtbaarheid</h2>
            <p>{stad.lokaal}</p>
            <p>{stad.kans}</p>
            <p>
              Wij bouwen websites met moderne, razendsnelle techniek. Geen
              trage pagebuilders, maar maatwerk dat hoog scoort in Google en
              bezoekers omzet in klanten. En het mooiste: je kunt bij ons ook
              een <Link href="/website-huren">complete website huren</Link> voor
              een vast bedrag per maand, zonder dure investering vooraf.
            </p>

            <h2>Wijken en gebieden waar we werken in {stad.naam}</h2>
            <p>
              We bouwen websites voor ondernemers in heel {stad.naam} en de
              regio {stad.regio}, waaronder:
            </p>
            <ul>
              {stad.gebieden.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>

            <h2>Sectoren die we in {stad.naam} helpen</h2>
            <p>
              Van {stad.sectoren[0]} tot{" "}
              {stad.sectoren[stad.sectoren.length - 1]}: elke ondernemer
              verdient een website die klopt. We werken in {stad.naam} onder
              meer voor:
            </p>
            <ul>
              {stad.sectoren.map((s) => (
                <li key={s}>Websites voor {s}</li>
              ))}
            </ul>

            <h2>Wat je van ons krijgt</h2>
            <ul>
              <li>Maatwerk ontwerp dat past bij jouw bedrijf in {stad.naam}</li>
              <li>Razendsnelle laadtijd en top Google-scores</li>
              <li>Teksten en afbeeldingen, door ons verzorgd</li>
              <li>Lokale vindbaarheid: gevonden worden in {stad.naam} en {stad.regio}</li>
              <li>Hosting, onderhoud en support volledig geregeld</li>
            </ul>

            <p>
              Wil je structureel hoger scoren in {stad.naam}? Bekijk onze{" "}
              <Link href="/seo">SEO-diensten</Link>, of{" "}
              <Link href="/contact">plan een gratis adviesgesprek</Link>. We
              denken graag met je mee.
            </p>
          </div>
        </div>
      </section>

      <Steps
        titel={`Zo snel heb jij een website in ${stad.naam}`}
        sub="Van kennismaking tot live, gemiddeld binnen 1 week."
      />
      <Faq
        items={faqItems}
        titel={`Veelgestelde vragen uit ${stad.naam}`}
      />
      <CtaBand
        titel={`Dé website-partner voor ondernemers in ${stad.naam}`}
        tekst="Plan een gratis adviesgesprek. Binnen 15 minuten weet je wat er mogelijk is en wat het kost."
      />
    </>
  );
}
