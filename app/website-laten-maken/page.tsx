import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import SelfServe from "@/components/SelfServe";
import { steden } from "@/lib/steden";
import { Zap, Target, Handshake, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Website laten maken in heel Nederland",
  description:
    "Professionele website laten maken door heel Nederland. Maatwerk design, razendsnel en SEO-geoptimaliseerd. Kopen vanaf €1.499 of huren vanaf €99 per maand.",
  alternates: { canonical: "/website-laten-maken" },
};

const faqItems = [
  {
    vraag: "Wat kost een website laten maken?",
    antwoord:
      "Een maatwerk website begint bij ons vanaf €1.499 excl. btw, afhankelijk van omvang en functionaliteiten. Liever geen grote investering vooraf? Dan kun je bij ons ook een complete website huren voor €199 opstartkosten en vanaf €99 per maand.",
  },
  {
    vraag: "Hoe lang duurt het bouwen van een website?",
    antwoord:
      "Een standaard bedrijfswebsite staat binnen 2 tot 4 weken live. Grotere projecten zoals webshops duren langer, dat spreken we vooraf helder met je af.",
  },
  {
    vraag: "Kopen of huren, wat is slimmer?",
    antwoord:
      "Kopen is voordeliger op lange termijn als je zelf hosting en onderhoud wil regelen. Huren is slimmer als je geen omkijken wil hebben naar techniek en liever een vast laag maandbedrag betaalt. We adviseren je er graag eerlijk over.",
  },
  {
    vraag: "Werken jullie door heel Nederland?",
    antwoord:
      "Ja. We zijn gevestigd in Noord-Holland en komen daar graag persoonlijk langs, maar we bouwen websites voor ondernemers in heel Nederland. Videobellen werkt net zo goed.",
  },
];

export default function WebsiteLatenMaken() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Website laten maken die wél klanten oplevert</h1>
          <p className="lead">
            Maatwerk design, razendsnelle techniek en direct vindbaar in
            Google. Kopen kan vanaf €1.499, huren al vanaf €99 per maand.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              Vraag een offerte aan
            </Link>
            <Link href="/website-huren" className="btn btn-ghost">
              Liever huren?
            </Link>
          </div>
        </div>
      </div>

      <section className="white">
        <div className="container center">
          <h2>Waarom ondernemers voor ons kiezen</h2>
          <div className="cards left">
            <div className="card" data-reveal>
              <div className="icon"><Zap /></div>
              <h3>Razendsnel</h3>
              <p>
                Wij bouwen met moderne techniek, geen trage pagebuilders. Dat
                betekent hogere Google-scores en meer bezoekers die blijven.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "80ms" }}>
              <div className="icon"><Target /></div>
              <h3>Gebouwd om te verkopen</h3>
              <p>
                Mooi is niet genoeg. Elke pagina is ontworpen om bezoekers om
                te zetten in klanten: heldere teksten, logische opbouw, sterke
                call-to-actions.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "160ms" }}>
              <div className="icon"><Handshake /></div>
              <h3>Eén aanspreekpunt</h3>
              <p>
                Geen ticketsystemen of wachtrijen. Je hebt direct contact met
                de mensen die jouw website bouwen en onderhouden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container center">
          <h2>Werkgebied</h2>
          <p className="sub">
            We werken voor ondernemers in heel Nederland, met extra
            aandacht voor onze thuisregio Noord-Holland.
          </p>
          <div className="cards left" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {steden.map((s) => (
              <Link
                key={s.slug}
                href={`/website-laten-maken/${s.slug}`}
                className="card city-card"
              >
                <h3>
                  <span>Website laten maken {s.naam}</span>
                  <ArrowRight className="city-arrow" size={18} />
                </h3>
                <p>{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SelfServe />
      <Faq items={faqItems} titel="Veelgestelde vragen" />
      <CtaBand
        titel="Benieuwd wat jouw website gaat kosten?"
        tekst="Vraag vrijblijvend een offerte aan of plan een gratis adviesgesprek. Binnen één werkdag reactie."
        knop="Vraag offerte aan"
      />
    </>
  );
}
