import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "teksten-die-klanten-opleveren",
  titel: "Zo schrijf je websiteteksten die klanten opleveren",
  excerpt:
    "Mooie zinnen verkopen niet, duidelijke wel. Vijf praktische regels voor websiteteksten die bezoekers omzetten in klanten.",
  datum: "2024-09-24",
  leestijd: 5,
  categorie: "Conversie & copy",
  faq: [
    {
      vraag: "Hoeveel tekst heeft een pagina nodig?",
      antwoord:
        "Genoeg om de vraag van je bezoeker te beantwoorden, niet meer. Liever één heldere alinea die raak is dan drie die om de hete brij heen draaien.",
    },
    {
      vraag: "Moet ik mijn teksten zelf schrijven?",
      antwoord:
        "Dat mag, maar het hoeft niet. Bij ons kun je de teksten volledig uit handen geven, we vertalen jouw verhaal naar tekst die verkoopt.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        De meeste websiteteksten gaan over het bedrijf: &quot;Wij zijn al 20
        jaar...&quot;. Maar je bezoeker heeft maar één vraag: &quot;Wat levert dit
        mij op?&quot; Met deze vijf regels schrijf je teksten die dáár antwoord
        op geven, en dus verkopen.
      </p>

      <h2>1. Schrijf over de klant, niet over jezelf</h2>
      <p>
        Begin niet met wie jij bent, maar met welk probleem je oplost. Niet
        &quot;Wij leveren maatwerkkozijnen&quot;, maar &quot;Nooit meer tocht en
        een lagere energierekening&quot;.
      </p>

      <h2>2. Wees concreet</h2>
      <p>
        &quot;Kwaliteit en service&quot; zegt niets, iedereen roept dat. &quot;Binnen
        2 weken geplaatst, met 10 jaar garantie&quot; is concreet en geloofwaardig.
      </p>

      <h2>3. Eén boodschap per pagina</h2>
      <p>
        Wil je bezoeker overal tegelijk naartoe sturen, dan gaat hij nergens
        heen. Bepaal per pagina de belangrijkste boodschap en de gewenste
        volgende stap.
      </p>

      <h2>4. Schrijf zoals je praat</h2>
      <p>
        Geen vakjargon, geen ellenlange zinnen. Als je het niet hardop tegen een
        klant zou zeggen, zet het dan ook niet op je site.
      </p>

      <h2>5. Sluit af met een duidelijke stap</h2>
      <p>
        Elke pagina eindigt met wat de bezoeker nu moet doen: bellen, mailen, een
        offerte aanvragen. Maak die stap makkelijk en opvallend, zoals je in{" "}
        <Link href="/blog/7-dingen-die-elke-bedrijfswebsite-nodig-heeft">
          elke goede bedrijfswebsite
        </Link>{" "}
        terugziet.
      </p>

      <h2>Liever niet zelf schrijven?</h2>
      <p>
        Snap ik. Bij elke website die wij{" "}
        <Link href="/website-huren">bouwen of verhuren</Link> verzorgen we de
        teksten voor je: jij vertelt over je bedrijf, wij vertalen dat naar tekst
        die klanten oplevert. <Link href="/contact">Neem contact op</Link> en we
        maken er samen iets moois van.
      </p>
    </>
  );
}
