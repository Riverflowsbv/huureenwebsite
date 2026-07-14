import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { addonGroepen } from "@/lib/addons";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Aanvullende diensten & uitbreidingen",
  description:
    "Breid je website uit met extra mailboxen, een SEO-abonnement, content, een webshop en meer. Overzicht van al onze aanvullende diensten en prijzen.",
  alternates: { canonical: "/aanvullende-diensten" },
};

const faqItems = [
  {
    vraag: "Kan ik deze diensten los afnemen?",
    antwoord:
      "De extra's en groeipakketten zijn een aanvulling op je website bij ons. Losse diensten zoals een logo, fotografie of een SEO-abonnement kunnen we vaak ook los leveren. Vraag het ons gerust.",
  },
  {
    vraag: "Kan ik later een dienst toevoegen of stopzetten?",
    antwoord:
      "Ja. Doorlopende pakketten zijn na de minimale periode maandelijks opzegbaar, en toevoegen kan op elk moment met één bericht.",
  },
  {
    vraag: "Zijn de prijzen inclusief of exclusief btw?",
    antwoord:
      "Alle genoemde prijzen zijn exclusief btw, net als onze pakketten.",
  },
];

export default function AanvullendeDiensten() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Aanvullende diensten</h1>
          <p className="lead">
            Je website groeit met je bedrijf mee. Van een extra mailbox tot een
            compleet SEO-abonnement: kies erbij wat je nodig hebt, wanneer je het
            nodig hebt. Alle prijzen zijn excl. btw.
          </p>
        </div>
      </div>

      {addonGroepen.map((groep, i) => (
        <section
          key={groep.slug}
          className={i % 2 === 1 ? "white" : undefined}
        >
          <div className="container">
            <div className="center">
              <h2>{groep.titel}</h2>
              <p className="sub">{groep.intro}</p>
            </div>
            <div className="addon-grid">
              {groep.items.map((item) => (
                <div
                  key={item.naam}
                  className={`addon-card${item.populair ? " popular" : ""}`}
                  data-reveal
                >
                  {item.populair && (
                    <span className="addon-badge">Meest gekozen</span>
                  )}
                  <h3>{item.naam}</h3>
                  <div className="addon-prijs">
                    {item.prijs}
                    {item.eenheid && <small> {item.eenheid}</small>}
                  </div>
                  <p>{item.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="white">
        <div className="container center">
          <h2>Niet gevonden wat je zoekt?</h2>
          <p className="sub">
            Heb je iets specifieks nodig dat hier niet tussen staat? We denken
            graag mee.{" "}
            <Link href="/contact">Plan een gratis adviesgesprek</Link> en we
            kijken samen wat past.
          </p>
          <p style={{ marginTop: 20 }}>
            <Link href="/website-huren" className="btn btn-primary">
              Bekijk eerst de pakketten
            </Link>
          </p>
        </div>
      </section>

      <Faq items={faqItems} titel="Veelgestelde vragen over de extra's" />
      <CtaBand
        titel="Klaar om je website uit te breiden?"
        tekst="Vertel ons wat je nodig hebt. We stellen een pakket samen dat bij je bedrijf past, zonder verplichtingen."
      />
    </>
  );
}
