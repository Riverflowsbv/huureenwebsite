import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "vragen-om-je-websitebouwer-te-stellen",
  titel: "8 vragen om je websitebouwer te stellen (voordat je tekent)",
  excerpt:
    "Voorkom verrassingen achteraf. Deze acht vragen scheiden een goede websitebouwer van een dure teleurstelling.",
  datum: "2025-11-05",
  leestijd: 6,
  categorie: "Tips & checklist",
  faq: [
    {
      vraag: "Van wie is mijn website na oplevering?",
      antwoord:
        "Belangrijke vraag om altijd te stellen. Bij ons blijven je domein, teksten en logo altijd van jou; bij een huurwebsite kun je de site later overnemen tegen een vooraf afgesproken bedrag.",
    },
    {
      vraag: "Wat als ik na oplevering iets wil aanpassen?",
      antwoord:
        "Vraag dit vooraf. Bij ons regel je aanpassingen met een simpel mailtje of appje; bij een huur- of onderhoudspakket zitten kleine wijzigingen er gewoon bij.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Een website laten maken is een investering, en het aanbod loopt enorm
        uiteen. Met deze acht vragen kom je er snel achter of je met een
        professional te maken hebt, of met iemand die je straks in de kou laat
        staan.
      </p>

      <h2>1. Van wie is de website na oplevering?</h2>
      <p>
        Krijg je de bestanden en het beheer, of blijf je afhankelijk? En wat
        gebeurt er met je domeinnaam? Zorg dat dit zwart-op-wit staat.
      </p>

      <h2>2. Zit hosting, onderhoud en beveiliging erbij?</h2>
      <p>
        Of komen die er los bij? Een lage bouwprijs met dure losse{" "}
        <Link href="/blog/wat-is-website-hosting">hosting</Link> erachter is geen
        koopje.
      </p>

      <h2>3. Hoe snel wordt de site?</h2>
      <p>
        Vraag naar de aanpak. Bouwen ze met een zware pagebuilder of met snelle,
        moderne techniek? <Link href="/blog/waarom-is-mijn-website-traag">
        Snelheid</Link> bepaalt mede je plek in Google.
      </p>

      <h2>4. Is de site straks goed vindbaar?</h2>
      <p>
        Wordt de website SEO-geoptimaliseerd opgeleverd, of moet je daar later
        apart voor betalen? Vindbaarheid hoort standaard, geen dure toevoeging te
        zijn.
      </p>

      <h2>5. Wie schrijft de teksten?</h2>
      <p>
        Moet jij alles aanleveren, of denken zij mee? Goede{" "}
        <Link href="/blog/teksten-die-klanten-opleveren">teksten</Link> maken het
        verschil tussen een mooie site en een die verkoopt.
      </p>

      <h2>6. Werkt de site perfect op mobiel?</h2>
      <p>
        Het merendeel van je bezoekers komt via de telefoon. Vraag om voorbeelden
        en bekijk ze zelf op je mobiel.
      </p>

      <h2>7. Wat kost een aanpassing later?</h2>
      <p>
        Een tekst wijzigen of foto vervangen: kan dat makkelijk, en wat kost het?
        Hier zit vaak het verschil tussen een fijne en een frustrerende
        samenwerking.
      </p>

      <h2>8. Kun je eerder werk en reviews zien?</h2>
      <p>
        Vraag naar een <Link href="/portfolio">portfolio</Link> en echte
        ervaringen van klanten. Een goede bouwer laat met plezier zien wat hij
        gemaakt heeft.
      </p>

      <h2>Onze antwoorden? Gewoon eerlijk</h2>
      <p>
        Wij beantwoorden deze acht vragen graag, zonder kleine lettertjes. Wil je
        ze aan ons voorleggen?{" "}
        <Link href="/contact">Plan een gratis adviesgesprek</Link>, dan weet je
        binnen 15 minuten waar je aan toe bent.
      </p>
    </>
  );
}
