import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { Check, Zap, Shield, Handshake } from "@/components/icons";

export const metadata: Metadata = {
  title: "Professionele website vanaf €199",
  description:
    "Een gloednieuwe, professionele website vanaf €199 opstartkosten en €99 per maand. Ontwerp, hosting, onderhoud én vindbaarheid inbegrepen. Binnen 1 week live.",
  alternates: { canonical: "/website-vanaf-199" },
};

const faqItems = [
  {
    vraag: "Is €199 echt alles wat ik betaal?",
    antwoord:
      "€199 zijn de eenmalige opstartkosten om je gloednieuwe website te laten bouwen en online te zetten. Daarna betaal je een vast maandbedrag vanaf €99, waarin ontwerp, hosting, onderhoud, mailadres en vindbaarheid al zitten. Geen dure investering vooraf, geen verrassingen.",
  },
  {
    vraag: "Waarom is dit zo veel goedkoper dan elders?",
    antwoord:
      "Een maatwerk website kost normaal €3.000 tot €8.000 vooraf. Wij draaien dat om: jij betaalt een klein bedrag om te starten en een vast bedrag per maand. Doordat wij met slimme, moderne techniek werken, kunnen we de kosten laag houden zonder in te leveren op kwaliteit.",
  },
  {
    vraag: "Wat is de catch?",
    antwoord:
      "Die is er niet. Je zit minimaal 6 maanden vast, daarna is het maandelijks opzegbaar. Je domeinnaam, teksten en logo blijven altijd van jou, en je kunt de website later overnemen tegen een vooraf afgesproken bedrag.",
  },
  {
    vraag: "Hoe snel sta ik online?",
    antwoord:
      "Meestal binnen 1 week nadat we alles besproken hebben. Wij schrijven de teksten en regelen de afbeeldingen, dus jij hoeft niets aan te leveren als je dat niet wil.",
  },
];

export default function WebsiteVanaf199() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <Check size={16} /> Binnen 1 week live · geen dure investering vooraf
          </div>
          <h1>
            Een gloednieuwe, professionele website <em>vanaf €199</em>
          </h1>
          <p className="lead">
            Geen duizenden euro&apos;s vooraf. Voor <strong>€199 opstartkosten</strong>{" "}
            sta je binnen één week professioneel online, daarna{" "}
            <strong>€99 per maand</strong> met álles inbegrepen: ontwerp,
            hosting, onderhoud, mailadres en vindbaarheid in Google.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              Start je website voor €199
            </Link>
            <Link href="#pakketten" className="btn btn-ghost">
              Bekijk de pakketten
            </Link>
          </div>
          <ul className="trust">
            <li>
              <Check className="ic-check" size={18} /> Vanaf €199 opstart, dan €99 p/m
            </li>
            <li>
              <Check className="ic-check" size={18} /> Alles inbegrepen
            </li>
            <li>
              <Check className="ic-check" size={18} /> Al na 6 maanden opzegbaar
            </li>
          </ul>
        </div>
      </div>

      <section className="white">
        <div className="container center">
          <h2>Wat krijg je voor €199 + €99 per maand?</h2>
          <p className="sub">
            Een complete, professionele website. Geen kale template, maar
            maatwerk dat klanten oplevert.
          </p>
          <div className="cards left">
            <div className="card" data-reveal>
              <div className="icon"><Zap /></div>
              <h3>Razendsnel &amp; op maat</h3>
              <p>
                Een uniek ontwerp met moderne techniek. Hoge Google-scores en
                bezoekers die blijven, geen trage standaardsite.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "80ms" }}>
              <div className="icon"><Shield /></div>
              <h3>Alles geregeld</h3>
              <p>
                Domein, hosting, onderhoud, updates, beveiliging en een
                professioneel mailadres. Jij hoeft nergens naar om te kijken.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "160ms" }}>
              <div className="icon"><Handshake /></div>
              <h3>Persoonlijk contact</h3>
              <p>
                Geen ticketsysteem. Iets aanpassen? Eén appje of mailtje en het
                is meestal dezelfde dag geregeld.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="prose">
            <h2>Hoe kan een professionele website zó betaalbaar zijn?</h2>
            <p>
              Simpel: we draaien het klassieke model om. In plaats van je
              vooraf duizenden euro&apos;s te laten betalen, bouwen wij je
              website voor lage opstartkosten en verhuren we hem voor een vast
              bedrag per maand. Zo spreid je de kosten en blijft je site altijd
              modern, snel en veilig, want wij onderhouden hem.
            </p>
            <p>
              Doordat we met efficiënte, moderne techniek werken (geen trage
              pagebuilders) houden we onze kosten laag. Dat voordeel geven we aan
              jou door. Meer weten over de afweging?{" "}
              <Link href="/blog/website-huren-of-kopen">
                Lees: website huren of kopen
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Pricing />
      <Steps
        titel="Zo sta je binnen 1 week online"
        sub="Jij vertelt over je bedrijf, wij regelen de rest."
      />
      <Faq
        items={faqItems}
        titel="Veelgestelde vragen over de €199-start"
      />
      <CtaBand
        titel="Klaar om professioneel online te gaan voor €199?"
        tekst="Plan een gratis en vrijblijvend adviesgesprek. Binnen 15 minuten weet je precies wat een website huren voor jouw bedrijf betekent."
        knop="Start je website voor €199"
      />
    </>
  );
}
