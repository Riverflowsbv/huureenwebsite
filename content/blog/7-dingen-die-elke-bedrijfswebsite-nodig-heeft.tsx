import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "7-dingen-die-elke-bedrijfswebsite-nodig-heeft",
  titel: "7 dingen die elke goede bedrijfswebsite nodig heeft",
  excerpt:
    "Van een duidelijke boodschap tot snelheid en vindbaarheid: dit zijn de zeven bouwstenen van een website die écht klanten oplevert.",
  datum: "2026-07-13",
  leestijd: 7,
  categorie: "Tips & checklist",
  faq: [
    {
      vraag: "Hoeveel pagina's heeft een bedrijfswebsite minimaal nodig?",
      antwoord:
        "Voor de meeste mkb'ers volstaat een site van 4 tot 6 pagina's: home, diensten, over ons, contact en eventueel een portfolio of blog. Kwaliteit en duidelijkheid tellen zwaarder dan het aantal pagina's.",
    },
    {
      vraag: "Moet mijn website per se mobielvriendelijk zijn?",
      antwoord:
        "Ja. Het merendeel van je bezoekers komt via de telefoon, en Google beoordeelt je site primair op de mobiele versie. Een site die op mobiel niet goed werkt, kost je direct klanten en ranking.",
    },
    {
      vraag: "Hoe weet ik of mijn huidige website goed genoeg is?",
      antwoord:
        "Loop deze zeven punten langs, of vraag een gratis website-check aan. Dan krijg je een eerlijk overzicht van wat goed gaat en wat beter kan.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Een mooie website is niet automatisch een goede website. Een goede
        website levert klanten op. Dat lukt alleen als de basis klopt. Dit zijn
        de zeven bouwstenen die geen enkele bedrijfswebsite mag missen.
      </p>

      <h2>1. Een duidelijke boodschap boven de vouw</h2>
      <p>
        Binnen drie seconden moet een bezoeker snappen wát je doet en vóór wie.
        Geen vage slogans, maar een heldere kop die meteen de juiste mensen
        aanspreekt.
      </p>

      <h2>2. Razendsnelle laadtijd</h2>
      <p>
        Laadt je site traag, dan is een bezoeker weg voordat je boodschap in
        beeld staat. Snelheid is geen luxe, het is de eerste indruk die je maakt.
      </p>

      <h2>3. Perfect op mobiel</h2>
      <p>
        De meeste bezoekers komen via hun telefoon. Werkt je site daar niet
        soepel, dan verlies je het grootste deel van je publiek, en Google straft
        je er bovendien voor af.
      </p>

      <h2>4. Eén duidelijke volgende stap</h2>
      <p>
        Wat moet de bezoeker doen? Bellen, mailen, een offerte aanvragen? Maak
        die actie overal opvallend en makkelijk. Een website zonder duidelijke
        call-to-action is een etalage zonder deur.
      </p>

      <h2>5. Vindbaar in Google</h2>
      <p>
        De mooiste site heeft geen zin als niemand hem vindt. Een goede
        technische basis, de juiste zoekwoorden en lokale vindbaarheid zorgen dat
        klanten jóu tegenkomen in plaats van je concurrent.
      </p>

      <h2>6. Vertrouwen wekken</h2>
      <p>
        Reviews, echte foto&apos;s, een helder verhaal en makkelijk vindbare
        contactgegevens: alles wat een bezoeker het gevoel geeft dat je een
        betrouwbare, echte onderneming bent.
      </p>

      <h2>7. Onderhoud en actualiteit</h2>
      <p>
        Een website is geen eenmalig project. Updates, beveiliging en actuele
        content houden je site veilig, snel en relevant. Zonder onderhoud veroudert
        elke site razendsnel.
      </p>

      <h2>Hoe scoort jouw website?</h2>
      <p>
        Vink je alle zeven punten af? Top. Twijfel je bij een paar? Dan valt er
        winst te halen. Bij ons zitten deze zeven bouwstenen standaard in elke{" "}
        <Link href="/website-huren">huurwebsite</Link> en elk{" "}
        <Link href="/website-laten-maken">maatwerkproject</Link>. Wil je weten
        hoe jouw huidige site ervoor staat? Plan een{" "}
        <Link href="/contact">gratis adviesgesprek</Link> en we lopen ze samen
        langs.
      </p>
    </>
  );
}
