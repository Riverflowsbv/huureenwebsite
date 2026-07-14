import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "waarom-is-mijn-website-traag",
  titel: "Waarom is mijn website zo traag (en wat kost je dat)?",
  excerpt:
    "Een trage website jaagt bezoekers weg en kost je plekken in Google. We leggen uit waar traagheid vandaan komt en hoe je het oplost.",
  datum: "2025-09-03",
  leestijd: 6,
  categorie: "Techniek & snelheid",
  faq: [
    {
      vraag: "Hoe snel moet mijn website laden?",
      antwoord:
        "Vuistregel: je belangrijkste content is binnen 2,5 seconden zichtbaar. Alles daarboven kost je bezoekers. Google meet dit ook mee in de Core Web Vitals en gebruikt het als rankingfactor.",
    },
    {
      vraag: "Waarom is mijn WordPress-site zo traag?",
      antwoord:
        "Vaak door zware pagebuilders (zoals Elementor), te veel plugins, niet-geoptimaliseerde afbeeldingen en goedkope gedeelde hosting. Elk daarvan telt op, met een trage site als resultaat.",
    },
    {
      vraag: "Kan een trage website sneller worden gemaakt?",
      antwoord:
        "Meestal wel, met beeldoptimalisatie, caching en betere hosting valt veel te winnen. Soms is een site zó zwaar opgebouwd dat opnieuw bouwen met moderne techniek voordeliger én sneller is.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Je website laadt traag. Vervelend, en het kost je ook nog eens geld.
        Bezoekers haken af voordat je pagina in beeld staat, en Google zet trage
        sites lager in de resultaten. In dit artikel: waar die traagheid vandaan
        komt en wat je eraan doet.
      </p>

      <h2>Hoe erg is traag eigenlijk?</h2>
      <p>
        Onderzoek is er helder over: laadt je pagina langzaam, dan vertrekt een
        groot deel van je bezoekers nog voordat ze iets gezien hebben. Voor een
        ondernemer betekent dat: minder aanvragen, minder verkopen, minder
        klanten. En omdat Google snelheid meeweegt in de ranking, kom je ook nog
        eens lager te staan. Dubbel verlies dus.
      </p>

      <h2>5 veelvoorkomende oorzaken</h2>
      <ul>
        <li>
          <strong>Zware pagebuilders.</strong> Tools als Elementor maken bouwen
          makkelijk, maar produceren rommelige, trage code.
        </li>
        <li>
          <strong>Te veel plugins.</strong> Elke plugin laadt extra bestanden.
          Tien plugins voel je in de laadtijd.
        </li>
        <li>
          <strong>Niet-geoptimaliseerde afbeeldingen.</strong> Een foto van 5 MB
          rechtstreeks uploaden is een klassieke snelheidskiller.
        </li>
        <li>
          <strong>Goedkope gedeelde hosting.</strong> Deel je een trage server
          met honderden andere sites, dan merk je dat.
        </li>
        <li>
          <strong>Geen caching.</strong> Zonder caching wordt elke pagina steeds
          opnieuw opgebouwd, telkens weer.
        </li>
      </ul>

      <h2>Wat het je concreet kost</h2>
      <p>
        Elke seconde extra laadtijd verlaagt je conversie. Voor een webshop is
        dat direct omzet; voor een dienstverlener zijn het gemiste aanvragen. En
        omdat je bovendien lager in Google staat, komen er ook minder nieuwe
        bezoekers binnen. Snelheid is dus geen technisch detail, maar puur
        commercieel.
      </p>

      <h2>Hoe wij het oplossen</h2>
      <p>
        Wij bouwen niet met trage pagebuilders, maar met moderne, lichte
        techniek waarmee de grootste techbedrijven ook werken. Het resultaat:
        sites die in een fractie van een seconde laden en standaard hoog scoren
        op Google&apos;s snelheidstest. Heb je al een website die traag is? Dan
        kunnen we die vaak versnellen via ons{" "}
        <Link href="/hosting-en-onderhoud">hosting- en onderhoudspakket</Link>,
        of je stapt over op een razendsnelle{" "}
        <Link href="/website-laten-maken">nieuwe website</Link>.
      </p>
      <p>
        Benieuwd hoe snel jouw site nu is? Vraag een{" "}
        <Link href="/seo">gratis scan</Link> aan, dan vertellen we je eerlijk
        wat er te winnen valt.
      </p>
    </>
  );
}
