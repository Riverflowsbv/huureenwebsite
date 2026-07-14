import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "website-huren-of-kopen",
  titel: "Website huren of kopen: wat is slimmer?",
  excerpt:
    "Een website huren of eenmalig kopen? We zetten de voor- en nadelen eerlijk naast elkaar, zodat je weet wat past bij jouw bedrijf.",
  datum: "2026-01-14",
  leestijd: 5,
  categorie: "Huren vs. kopen",
  faq: [
    {
      vraag: "Van wie is de website als ik hem huur?",
      antwoord:
        "Tijdens de huurperiode blijft de techniek van ons, zodat wij alles voor je regelen. Je domeinnaam, teksten en logo blijven altijd van jou. Je kunt de site ook op elk moment overnemen tegen een vooraf afgesproken bedrag.",
    },
    {
      vraag: "Is huren op lange termijn niet duurder?",
      antwoord:
        "Puur op de bouwkosten gerekend soms wel. Maar bij huren zitten hosting, onderhoud, updates en support in het bedrag, kosten die je bij kopen apart betaalt. En je site blijft altijd modern, terwijl een gekochte site na een paar jaar vaak opnieuw gebouwd moet worden.",
    },
    {
      vraag: "Kan ik later van huren naar kopen overstappen?",
      antwoord:
        "Ja. Je kunt je huurwebsite op elk moment overnemen tegen een vooraf afgesproken afkoopsom. Zo blijf je flexibel.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Je wilt een professionele website, maar moet je die nu eenmalig kopen of
        maandelijks huren? Beide kan slim zijn, het hangt af van je bedrijf en
        hoeveel je zelf wil regelen. We zetten het eerlijk op een rij.
      </p>

      <h2>Wat betekent een website kopen?</h2>
      <p>
        Je betaalt eenmalig voor het ontwerp en de bouw, en de site is daarna
        van jou. Klinkt aantrekkelijk, maar je bent vervolgens zelf
        verantwoordelijk voor hosting, onderhoud, updates en beveiliging, of je
        besteedt dat los uit.
      </p>
      <ul>
        <li>
          <strong>Voordeel:</strong> op lange termijn goedkoper als je zelf
          techniek kunt of wil regelen
        </li>
        <li>
          <strong>Voordeel:</strong> volledige controle en eigendom
        </li>
        <li>
          <strong>Nadeel:</strong> flinke investering vooraf (vanaf €1.499, vaak
          meer)
        </li>
        <li>
          <strong>Nadeel:</strong> na 3 à 4 jaar vaak verouderd en toe aan een
          dure herbouw
        </li>
      </ul>

      <h2>Wat betekent een website huren?</h2>
      <p>
        Je betaalt een vast bedrag per maand voor een complete website die wij
        bouwen én onderhouden. Ontwerp, hosting, onderhoud, mailadres en
        vindbaarheid: alles inbegrepen.
      </p>
      <ul>
        <li>
          <strong>Voordeel:</strong> lage opstartkosten, direct professioneel
          online zonder dure investering vooraf
        </li>
        <li>
          <strong>Voordeel:</strong> onderhoud, updates en beveiliging altijd
          geregeld
        </li>
        <li>
          <strong>Voordeel:</strong> je site blijft modern en snel, ook over
          jaren
        </li>
        <li>
          <strong>Nadeel:</strong> je betaalt doorlopend (maar krijgt daar ook
          doorlopend service voor terug)
        </li>
      </ul>

      <h2>Voor wie is wat slim?</h2>
      <p>
        <strong>Kopen</strong> past bij je als je een groter budget vooraf hebt
        en zelf (of via iemand) de techniek en het onderhoud kunt regelen.{" "}
        <strong>Huren</strong> past bij je als je geen omkijken wil hebben naar
        techniek, liever een laag vast maandbedrag betaalt en zeker wil weten
        dat je site altijd up-to-date blijft. Voor de meeste mkb&apos;ers en
        zzp&apos;ers is dat laatste precies wat ze zoeken.
      </p>

      <h2>Het beste van twee werelden</h2>
      <p>
        Bij ons hoef je niet te kiezen voor altijd. Je kunt starten met een{" "}
        <Link href="/website-huren">huurwebsite vanaf €99 per maand</Link> en de
        site later gewoon <Link href="/website-laten-maken">overnemen</Link>{" "}
        tegen een afgesproken bedrag. Zo begin je zonder risico en hou je alle
        opties open. Twijfel je nog? Plan een{" "}
        <Link href="/contact">gratis adviesgesprek</Link>, dan rekenen we het
        samen voor je door.
      </p>
    </>
  );
}
