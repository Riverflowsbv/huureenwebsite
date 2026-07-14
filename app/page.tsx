import Link from "next/link";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import SelfServe from "@/components/SelfServe";
import { Check, Cross, Star, ArrowRight } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    vraag: "Wat kost een website huren precies?",
    antwoord:
      "Je betaalt eenmalig €199 opstartkosten en daarna één vast bedrag per maand, vanaf €99 excl. btw. In dat maandbedrag zit álles: ontwerp, domein, hosting, onderhoud, mailadres en vindbaarheid in Google. Geen dure investering vooraf, geen verrassingen achteraf.",
  },
  {
    vraag: "Ben ik ergens aan vast?",
    antwoord:
      "Het contract loopt minimaal 6 maanden. Daarna is het maandelijks opzegbaar. De meeste klanten blijven, omdat hun website gewoon blijft werken en meegroeit.",
  },
  {
    vraag: "Kan ik de website later kopen?",
    antwoord:
      "Ja. Je kunt je website op elk moment overnemen tegen een vooraf afgesproken bedrag. Zo blijf je flexibel.",
  },
  {
    vraag: "Hoe snel sta ik online?",
    antwoord:
      "Meestal binnen 2 weken nadat we alles besproken hebben. Heb je haast? Met onze spoed-oplevering sta je al binnen 48 tot 72 uur online. Wij schrijven de teksten en regelen de afbeeldingen, dus jij hoeft niets aan te leveren als je dat niet wil.",
  },
  {
    vraag: "Ik snap niets van websites. Is dat een probleem?",
    antwoord:
      "Nee, dat is juist waarom we bestaan. Jij vertelt over je bedrijf, wij vertalen dat naar een professionele website. Wil je iets aanpassen? Eén mailtje of appje is genoeg.",
  },
  {
    vraag: "Zit vindbaarheid in Google erbij?",
    antwoord:
      "Ja, elke website leveren we geoptimaliseerd op: snelle laadtijd, juiste zoekwoorden, meta-teksten en koppeling met Google. Wil je hoger scoren op moeilijke zoektermen? Daarvoor hebben we aanvullende SEO-pakketten.",
  },
];

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <Check size={16} /> Binnen 2 weken live, geen dure investering vooraf
            </div>
            <h1>
              Een professionele website, <em>zonder gedoe</em>
            </h1>
            <p className="lead">
              Geen duizenden euro&apos;s vooraf. Geen technisch gedoe. Jij
              vertelt over je bedrijf, wij regelen de rest: ontwerp, teksten,
              hosting, onderhoud én vindbaarheid in Google.
            </p>
            <div className="hero-cta">
              <Link href="/website-huren" className="btn btn-primary">
                Bekijk pakketten vanaf €99 p/m
              </Link>
              <Link href="#hoe" className="btn btn-ghost">
                Hoe werkt het?
              </Link>
            </div>
            <ul className="trust">
              <li>
                <Check className="ic-check" size={18} /> Maandelijks opzegbaar na 6 mnd
              </li>
              <li>
                <Check className="ic-check" size={18} /> Alles inbegrepen
              </li>
              <li>
                <Check className="ic-check" size={18} /> Persoonlijke support
              </li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="mockup">
              <div className="mockup-bar">
                <span className="dot" style={{ background: "#ff5f57" }} />
                <span className="dot" style={{ background: "#febc2e" }} />
                <span className="dot" style={{ background: "#28c840" }} />
                <div className="mockup-url">www.jouwbedrijf.nl</div>
              </div>
              <div className="mockup-body">
                <div className="sk sk-hero">
                  Jouw bedrijf, professioneel online
                </div>
                <div className="sk-row">
                  <div className="sk" />
                  <div className="sk" />
                  <div className="sk" />
                </div>
                <div className="sk sk-line" />
                <div className="sk sk-line short" />
              </div>
            </div>
            <div className="badge-live">
              <span className="pulse" /> Live binnen 2 weken
            </div>
          </div>
        </div>
      </div>

      <div className="usp-strip">
        <div className="container">
          <ul>
            <li><Check className="ic-check" size={17} /> Ontwerp op maat</li>
            <li><Check className="ic-check" size={17} /> Hosting &amp; onderhoud</li>
            <li><Check className="ic-check" size={17} /> Vindbaar in Google</li>
            <li><Check className="ic-check" size={17} /> Eigen mailadres</li>
            <li><Check className="ic-check" size={17} /> Teksten &amp; afbeeldingen</li>
          </ul>
        </div>
      </div>

      <Steps />
      <Pricing variant="compact" />

      <section>
        <div className="container">
          <div className="center">
            <h2>Huren of duizenden euro&apos;s investeren?</h2>
            <p className="sub">
              Een maatwerk website kost normaal €3.000 tot €8.000 vooraf. Wij
              draaien het om.
            </p>
          </div>
          <div className="compare-card" data-reveal>
            <div>
              <h3 className="compare-head">
                <span className="compare-badge yes"><Check size={16} /></span>
                Website huren bij ons
              </h3>
              <ul>
                <li><Check className="ic-check" size={18} /> Slechts €199 opstart i.p.v. duizenden vooraf</li>
                <li><Check className="ic-check" size={18} /> Onderhoud, updates en beveiliging inbegrepen</li>
                <li><Check className="ic-check" size={18} /> Site blijft altijd modern en snel</li>
                <li><Check className="ic-check" size={18} /> Eén aanspreekpunt voor alles</li>
                <li><Check className="ic-check" size={18} /> Meegroeien of overnemen kan altijd</li>
              </ul>
            </div>
            <div>
              <h3 className="compare-head dim">
                <span className="compare-badge no"><Cross size={16} /></span>
                Zelf laten bouwen
              </h3>
              <ul>
                <li><Cross className="ic-cross" size={18} /> €3.000+ investering vooraf</li>
                <li><Cross className="ic-cross" size={18} /> Onderhoud en hosting apart regelen</li>
                <li><Cross className="ic-cross" size={18} /> Na 3 jaar verouderd, opnieuw betalen</li>
                <li><Cross className="ic-cross" size={18} /> Bij problemen sta je er alleen voor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)" }} id="reviews">
        <div className="container center">
          <h2>Ondernemers zoals jij gingen je voor</h2>
          <div className="reviews-grid left">
            {[
              {
                tekst:
                  '"Ik snap niks van websites en dat hoefde ook niet. Binnen twee weken stond alles online en het ziet er echt professioneel uit."',
                wie: "[Naam klant]",
                bedrijf: "[Bedrijf], [plaats]",
              },
              {
                tekst:
                  '"Eindelijk geen gedoe meer met updates en hosting. Ik mail wat ik veranderd wil hebben en het is de volgende dag gedaan."',
                wie: "[Naam klant]",
                bedrijf: "[Bedrijf], [plaats]",
              },
              {
                tekst:
                  '"Voor 99 euro per maand had ik nooit verwacht dat het zó compleet zou zijn. Ik word nu echt gevonden in Google."',
                wie: "[Naam klant]",
                bedrijf: "[Bedrijf], [plaats]",
              },
            ].map((r, i) => (
              <div
                key={r.tekst}
                className="review"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="stars" aria-label="5 van 5 sterren">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={17} />
                  ))}
                </div>
                <p>{r.tekst}</p>
                <div className="who">
                  {r.wie}
                  <span>{r.bedrijf}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SelfServe />
      <Faq items={faqItems} />
      <CtaBand />
    </>
  );
}
