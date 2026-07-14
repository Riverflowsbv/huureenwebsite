import type { Metadata } from "next";
import Link from "next/link";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import SelfServe from "@/components/SelfServe";
import { Check, Palette, Wrench, TrendingUp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Website huren: alles inclusief v.a. €99",
  description:
    "Huur een professionele maatwerk website: €199 opstartkosten, daarna €99 per maand. Inclusief hosting, onderhoud, mailadres en SEO. Binnen 1 week live.",
  alternates: { canonical: "/website-huren" },
};

const faqItems = [
  {
    vraag: "Wat is het verschil tussen huren en leasen?",
    antwoord:
      "In de praktijk niets: je betaalt een vast bedrag per maand voor een complete website die wij bouwen en onderhouden. Wij noemen het huren, omdat dat het eerlijkst beschrijft wat het is.",
  },
  {
    vraag: "Van wie is de website?",
    antwoord:
      "Tijdens de huurperiode blijft de website technisch van ons, zodat wij alles voor je kunnen regelen. Jouw domeinnaam, teksten en logo blijven altijd van jou. Wil je de site overnemen? Dat kan tegen een vooraf afgesproken bedrag.",
  },
  {
    vraag: "Wat gebeurt er als ik stop?",
    antwoord:
      "Na de minimale periode van 6 maanden kun je maandelijks opzeggen. Je domeinnaam neem je gewoon mee. Je kunt de website ook overnemen, dan blijft alles online staan.",
  },
  {
    vraag: "Zijn er verder nog kosten?",
    antwoord:
      "Naast de eenmalige opstartkosten van €199 betaal je alleen je vaste maandbedrag. Domein, hosting, onderhoud, updates, mailadres en support zitten daar al in. Alleen extra wensen buiten je pakket (bijvoorbeeld een extra functionaliteit) offreren we apart, altijd vooraf.",
  },
  {
    vraag: "Kan ik zelf dingen aanpassen?",
    antwoord:
      "Dat mag, maar het hoeft niet. De meeste klanten mailen of appen ons gewoon wat er anders moet. Kleine aanpassingen zitten in je pakket en zijn meestal binnen één werkdag gedaan.",
  },
];

export default function WebsiteHuren() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow"><Check size={16} /> Geen dure investering vooraf</div>
          <h1>Website huren: compleet geregeld voor een vast bedrag per maand</h1>
          <p className="lead">
            Een maatwerk website kost al snel duizenden euro&apos;s. Bij ons
            niet. Je huurt een complete, professionele website inclusief
            hosting, onderhoud en vindbaarheid in Google. Vanaf €99 per maand.
          </p>
          <Link href="#pakketten" className="btn btn-primary">
            Bekijk de pakketten
          </Link>
        </div>
      </div>

      <section className="white" style={{ paddingBottom: 0 }}>
        <div className="container center">
          <h2>Alles wat je nodig hebt, in één pakket</h2>
          <p className="sub">
            Geen losse rekeningen voor hosting, onderhoud of e-mail. Eén
            bedrag, alles geregeld.
          </p>
          <div className="cards left">
            <div className="card" data-reveal>
              <div className="icon"><Palette /></div>
              <h3>Ontwerp op maat</h3>
              <p>
                Geen standaard template, maar een ontwerp dat past bij jouw
                bedrijf. Inclusief teksten en afbeeldingen, door ons verzorgd.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "80ms" }}>
              <div className="icon"><Wrench /></div>
              <h3>Hosting &amp; onderhoud</h3>
              <p>
                Snelle hosting, dagelijkse back-ups, updates en beveiliging.
                Jij merkt er niets van, en dat is precies de bedoeling.
              </p>
            </div>
            <div className="card" data-reveal style={{ transitionDelay: "160ms" }}>
              <div className="icon"><TrendingUp /></div>
              <h3>Vindbaar in Google</h3>
              <p>
                Elke website leveren we SEO-geoptimaliseerd op: snelle
                laadtijd, juiste zoekwoorden en koppeling met Google.
              </p>
            </div>
          </div>
          <p className="plan-note">
            Wil je hoger scoren op moeilijke zoektermen? Bekijk onze{" "}
            <Link href="/seo">SEO-diensten</Link>. Heb je al een website?
            Dan is los{" "}
            <Link href="/hosting-en-onderhoud">hosting &amp; onderhoud</Link>{" "}
            wellicht wat je zoekt.
          </p>
        </div>
      </section>

      <Pricing />
      <Steps
        titel="Van gesprek naar live in 3 stappen"
        sub="Gemiddeld staat je website binnen 1 week online."
      />
      <SelfServe />
      <Faq
        items={faqItems}
        titel="Veelgestelde vragen over website huren"
      />
      <CtaBand
        titel="Weten wat huren voor jouw bedrijf kost?"
        tekst="Plan een gratis adviesgesprek. Geen verkooppraatje, gewoon helder advies over wat bij jouw situatie past."
      />
    </>
  );
}
