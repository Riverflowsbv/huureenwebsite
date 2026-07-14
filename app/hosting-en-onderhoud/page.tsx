import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { Rocket, Shield, Chat } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hosting & onderhoud v.a. €41 per maand",
  description:
    "Professionele hosting én onderhoud voor je bestaande website. Updates, back-ups, beveiliging en support in één pakket. €41 per maand, jaarlijks gefactureerd.",
  alternates: { canonical: "/hosting-en-onderhoud" },
};

const faqItems = [
  {
    vraag: "Wat zit er precies in het pakket?",
    antwoord:
      "Snelle hosting, dagelijkse back-ups, software-updates, beveiligingsmonitoring, SSL-certificaat en elke maand een klein aanpassingsuurtje. Kortom: alles om je website veilig en snel online te houden.",
  },
  {
    vraag: "Mijn website is ergens anders gebouwd. Kan dat?",
    antwoord:
      "Ja. We verhuizen je bestaande website gratis naar onze hosting en nemen het onderhoud over. Jij merkt niets van de overstap, behalve dat je site waarschijnlijk sneller wordt.",
  },
  {
    vraag: "Waarom jaarlijks gefactureerd?",
    antwoord:
      "Dat houdt de administratie voor ons én voor jou simpel, en daardoor kunnen we de prijs laag houden: €495 per jaar, oftewel €41 per maand.",
  },
  {
    vraag: "Wat als mijn website kapot gaat of gehackt wordt?",
    antwoord:
      "Dan lossen wij het op, zonder extra kosten. Door dagelijkse back-ups en actieve beveiligingsmonitoring vangen we problemen meestal op voordat jij er iets van merkt.",
  },
];

export default function Hosting() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Hosting &amp; onderhoud: nooit meer omkijken naar je website</h1>
          <p className="lead">
            Eén alles-in-één pakket voor je bestaande website: snelle hosting,
            updates, back-ups, beveiliging én support. Voor €41 per maand
            (€495 per jaar) is het geregeld.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Regel het in 5 minuten
          </Link>
        </div>
      </div>

      <section className="white">
        <div className="container center">
          <h2>Wat er allemaal in zit</h2>
          <div className="cards left">
            <div className="card" data-reveal>
              <div className="icon"><Rocket /></div>
              <h3>Snelle hosting</h3>
              <p>
                Nederlandse servers, dagelijkse back-ups en een gratis
                SSL-certificaat. Je site laadt snel en blijft bereikbaar.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "80ms" }}>
              <div className="icon"><Shield /></div>
              <h3>Updates &amp; beveiliging</h3>
              <p>
                Wij houden alle software up-to-date en monitoren actief op
                problemen. Gehackt worden? Niet onder onze hoede.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "160ms" }}>
              <div className="icon"><Chat /></div>
              <h3>Support &amp; aanpassingen</h3>
              <p>
                Elke maand een klein aanpassingsuurtje inbegrepen. Tekstje
                wijzigen, foto vervangen? Mail of app ons, morgen geregeld.
              </p>
            </div>
          </div>
          <p className="plan-note">
            €41 per maand excl. btw, jaarlijks gefactureerd (€495 p.j.).{" "}
            <Link href="/website-huren">Website bij ons gehuurd</Link>? Dan zit
            dit er al bij.
          </p>
        </div>
      </section>

      <Faq items={faqItems} titel="Veelgestelde vragen over hosting" />
      <CtaBand
        titel="Klaar met gedoe rond je website?"
        tekst="We verhuizen je site gratis en nemen alles over. Plan een gesprek of mail ons je websiteadres, dan sturen we binnen één werkdag een voorstel."
      />
    </>
  );
}
