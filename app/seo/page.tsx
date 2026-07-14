import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { Check, Search, Sliders, BarChart } from "@/components/icons";

export const metadata: Metadata = {
  title: "SEO: hoger in Google, meer klanten",
  description:
    "Beter vindbaar in Google? Onze SEO-aanpak combineert techniek, content en lokale vindbaarheid. Gratis SEO-scan of een compleet abonnement vanaf €299 per maand.",
  alternates: { canonical: "/seo" },
};

const faqItems = [
  {
    vraag: "Hoe snel zie ik resultaat van SEO?",
    antwoord:
      "Eerlijk antwoord: de eerste beweging zie je meestal na 2 tot 3 maanden, echt resultaat na 6 maanden. SEO is een investering die zich daarna maand na maand blijft uitbetalen. Wie snelle garanties belooft, belazert je.",
  },
  {
    vraag: "Wat kost SEO?",
    antwoord:
      "De gratis SEO-scan kost niets. Een eenmalige uitgebreide analyse met verbeterplan kost €149. Structureel hoger scoren doe je met ons SEO-abonnement vanaf €299 per maand, inclusief content, techniek en maandelijkse rapportage.",
  },
  {
    vraag: "Ik heb al een website. Kunnen jullie die optimaliseren?",
    antwoord:
      "Ja. We starten met een scan van je huidige site en vertellen je eerlijk wat er te winnen valt, ook als dat betekent dat je huidige site prima is.",
  },
  {
    vraag: "Wat is lokale SEO?",
    antwoord:
      "Zorgen dat je gevonden wordt door mensen in jouw regio, bijvoorbeeld op 'kapper Alkmaar'. Denk aan je Google Bedrijfsprofiel, reviews en lokale zoektermen. Voor de meeste mkb'ers is dit de snelste winst.",
  },
];

export default function Seo() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow"><Check size={16} /> Gratis SEO-scan van je website</div>
          <h1>Hoger in Google, zonder loze beloftes</h1>
          <p className="lead">
            Meer bezoekers, meer aanvragen, meer omzet. Onze SEO-aanpak
            combineert techniek, content en lokale vindbaarheid. En we
            beginnen gratis: met een eerlijke scan van waar jij nu staat.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Vraag je gratis SEO-scan aan
          </Link>
        </div>
      </div>

      <section className="white">
        <div className="container center">
          <h2>Onze aanpak</h2>
          <div className="cards left">
            <div className="card" data-reveal>
              <div className="icon"><Search /></div>
              <h3>1. Gratis scan</h3>
              <p>
                We analyseren je website, je concurrenten en je vindbaarheid.
                Je krijgt een helder rapport: wat gaat goed, wat kan beter.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "80ms" }}>
              <div className="icon"><Sliders /></div>
              <h3>2. Techniek &amp; content</h3>
              <p>
                Snelle laadtijd, juiste zoekwoorden, sterke teksten en
                structured data. De basis waarop Google je beloont.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "160ms" }}>
              <div className="icon"><BarChart /></div>
              <h3>3. Meten en verbeteren</h3>
              <p>
                Elke maand een rapport in gewone mensentaal: waar sta je, wat
                hebben we gedaan, wat levert het op.
              </p>
            </div>
          </div>
          <p className="plan-note">
            Nog geen website? Die SEO-basis zit standaard in elke{" "}
            <Link href="/website-huren">huurwebsite</Link> en in elk{" "}
            <Link href="/website-laten-maken">maatwerkproject</Link> dat we bouwen.
          </p>
        </div>
      </section>

      <Faq items={faqItems} titel="Veelgestelde vragen over SEO" />
      <CtaBand
        titel="Benieuwd waar jij staat in Google?"
        tekst="Vraag de gratis SEO-scan aan. Binnen 3 werkdagen krijg je een eerlijk rapport, zonder verplichtingen."
        knop="Gratis SEO-scan aanvragen"
      />
    </>
  );
}
