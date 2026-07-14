import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "hoger-in-google-seo-basis",
  titel: "Hoe kom je hoger in Google? SEO-basis voor mkb'ers",
  excerpt:
    "Geen technisch verhaal, maar de vier basisstappen waarmee elke ondernemer beter vindbaar wordt in Google. In gewone mensentaal.",
  datum: "2026-03-11",
  leestijd: 6,
  categorie: "SEO & vindbaarheid",
  faq: [
    {
      vraag: "Hoe lang duurt het voordat SEO resultaat geeft?",
      antwoord:
        "Reken op 2 tot 3 maanden voor de eerste beweging en zo'n 6 maanden voor echt resultaat. SEO is een investering die zich daarna maand na maand blijft uitbetalen.",
    },
    {
      vraag: "Kan ik zelf aan SEO doen?",
      antwoord:
        "De basis zeker: goede teksten, snelle laadtijd en een compleet Google Bedrijfsprofiel kun je zelf oppakken. Voor techniek en linkbuilding schakelen de meeste ondernemers hulp in.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        &quot;Hoe kom ik hoger in Google?&quot; is misschien wel de meest
        gestelde vraag van ondernemers. Het goede nieuws: je hoeft geen
        SEO-specialist te zijn om de basis op orde te krijgen. Deze vier stappen
        maken het grootste verschil.
      </p>

      <h2>1. Schrijf voor je klant, niet voor Google</h2>
      <p>
        Google wil bezoekers het beste antwoord geven. Beschrijf dus helder wat
        je doet, voor wie en waar. Gebruik de woorden die je klanten zelf
        intypen (&quot;kapper Alkmaar&quot;, niet &quot;haarstylist-collectief&quot;),
        en beantwoord de vragen die ze hebben.
      </p>

      <h2>2. Zorg dat je site razendsnel is</h2>
      <p>
        Snelheid is een officiële rankingfactor. Een trage site zakt weg in de
        resultaten, hoe goed je teksten ook zijn. Lees ook waarom{" "}
        <Link href="/blog/waarom-is-mijn-website-traag">
          een trage website je klanten kost
        </Link>
        .
      </p>

      <h2>3. Word lokaal gevonden</h2>
      <p>
        Voor de meeste mkb&apos;ers zit de snelste winst in lokale SEO: gevonden
        worden door mensen in jouw regio. Een compleet ingevuld{" "}
        <Link href="/blog/google-bedrijfsprofiel-meer-lokale-klanten">
          Google Bedrijfsprofiel
        </Link>{" "}
        en lokale zoektermen op je website zijn hierbij goud waard.
      </p>

      <h2>4. Bouw aan autoriteit</h2>
      <p>
        Google vertrouwt sites die anderen ook vertrouwen. Verzamel echte
        reviews, zorg voor vermeldingen op relevante websites en publiceer
        regelmatig nuttige content, zoals dit artikel. Zo laat je zien dat je
        weet waar je het over hebt.
      </p>

      <h2>Zelf doen of uitbesteden?</h2>
      <p>
        De basis kun je prima zelf oppakken. Wil je structureel hoger scoren op
        moeilijkere zoektermen, dan helpt gerichte hulp. Elke website die wij
        bouwen leveren we standaard{" "}
        <Link href="/website-huren">SEO-geoptimaliseerd</Link> op, en met onze{" "}
        <Link href="/seo">SEO-diensten</Link> gaan we een stap verder. Benieuwd
        waar je nu staat? Vraag een gratis scan aan.
      </p>
    </>
  );
}
