import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "wat-is-website-hosting",
  titel: "Wat is website-hosting en heb je het echt nodig?",
  excerpt:
    "Hosting, domein, SSL, back-ups: wat betekent het allemaal en wat heb je écht nodig? Een uitleg zonder technisch jargon.",
  datum: "2025-03-04",
  leestijd: 5,
  categorie: "Techniek & snelheid",
  faq: [
    {
      vraag: "Wat kost hosting gemiddeld?",
      antwoord:
        "Losse hosting kost meestal tussen de €5 en €25 per maand. Reken daarbij onderhoud en beveiliging op, dan zit je al snel hoger. Bij een huurwebsite zit hosting al in het maandbedrag.",
    },
    {
      vraag: "Wat is het verschil tussen hosting en een domeinnaam?",
      antwoord:
        "Je domeinnaam (bijv. jouwbedrijf.nl) is je adres op internet. Hosting is de ruimte waar je website daadwerkelijk 'woont'. Je hebt allebei nodig om online te staan.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Hosting is een van die woorden die iedereen gebruikt maar niemand echt
        uitlegt. Toch is het simpel. In dit artikel: wat hosting is, waarom het
        belangrijk is, en of je het echt zelf moet regelen.
      </p>

      <h2>Hosting in één zin</h2>
      <p>
        Je website bestaat uit bestanden, en die moeten ergens staan op een
        computer die altijd aan staat: een server. Hosting is precies dat, de
        plek waar je website woont zodat bezoekers hem dag en nacht kunnen
        bekijken.
      </p>

      <h2>Waarom goede hosting belangrijk is</h2>
      <ul>
        <li>
          <strong>Snelheid.</strong> Goedkope, overvolle servers maken je site
          traag. Snelle hosting houdt je site vlot.
        </li>
        <li>
          <strong>Beschikbaarheid.</strong> Ligt de server plat, dan is je site
          offline, en mis je klanten.
        </li>
        <li>
          <strong>Beveiliging.</strong> Goede hosting beschermt tegen hacks en
          maakt automatisch back-ups.
        </li>
      </ul>

      <h2>Wat je nog meer nodig hebt</h2>
      <p>
        Naast hosting hoort erbij: een domeinnaam (je adres), een SSL-certificaat
        (het slotje in de browser, tegenwoordig verplicht), en regelmatig
        onderhoud en updates. Los geregeld ben je zo €20 tot €50 per maand kwijt,
        en moet je het allemaal zelf in de gaten houden.
      </p>

      <h2>Of laat het gewoon regelen</h2>
      <p>
        Heb je al een website en wil je er geen omkijken naar hebben? Ons{" "}
        <Link href="/hosting-en-onderhoud">hosting- en onderhoudspakket</Link>{" "}
        regelt hosting, back-ups, updates, beveiliging én support in één. En huur
        je een <Link href="/website-huren">complete website</Link> bij ons, dan
        zit dit er sowieso al bij, zonder dat je ooit het woord
        &quot;server&quot; hoeft te horen.
      </p>
    </>
  );
}
