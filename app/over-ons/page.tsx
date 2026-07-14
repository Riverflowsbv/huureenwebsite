import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons: wie zit erachter?",
  description:
    "HuurEenWebsite.nl maakt professionele websites bereikbaar voor elke ondernemer: zonder dure investering vooraf, zonder gedoe. Maak kennis met het team.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOns() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Wij regelen websites. Jij runt je bedrijf.</h1>
          <p className="lead">
            {site.naam} is opgericht met één overtuiging: elke ondernemer
            verdient een professionele website, ook zonder duizenden
            euro&apos;s budget of technische kennis.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="prose">
            <h2>Waarom wij dit doen</h2>
            <p>
              We zagen te vaak hetzelfde: ondernemers met een prachtig bedrijf
              en een website die dat niet waarmaakt. Verouderd, traag, of
              helemaal geen site. Niet omdat ze het niet belangrijk vinden,
              maar omdat een goede website duur en ingewikkeld voelt.
            </p>
            <p>
              Dat hebben we omgedraaid. Bij ons huur je een complete,
              professionele website voor een vast bedrag per maand. Wij
              bouwen, onderhouden en optimaliseren. Jij hoeft alleen te
              vertellen wat je doet.
            </p>
            <h2>Hoe wij werken</h2>
            <p>
              Modern en snel: we bouwen met dezelfde technologie als de
              grootste techbedrijven, geen trage standaardsystemen. Eerlijk en
              persoonlijk: je krijgt direct contact met de mensen die je site
              bouwen, en advies dat klopt, ook als dat betekent dat we je iets
              afraden.
            </p>
            <p>
              {site.naam} is onderdeel van {site.bv}, gevestigd in
              Noord-Holland en actief door heel Nederland.
            </p>
            {/* TODO: teamfoto's en persoonlijke introducties toevoegen */}
          </div>
        </div>
      </section>

      <CtaBand
        titel="Zin om samen te werken?"
        tekst="Plan een gratis kennismaking. Koffie in Noord-Holland of een videocall, wat jij wil."
      />
    </>
  );
}
