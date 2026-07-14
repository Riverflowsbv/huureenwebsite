import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "google-bedrijfsprofiel-meer-lokale-klanten",
  titel: "Google Bedrijfsprofiel: gratis meer lokale klanten",
  excerpt:
    "Het krachtigste gratis marketinginstrument voor lokale ondernemers, en de meesten benutten het niet. Zo haal je er wél klanten uit.",
  datum: "2025-05-07",
  leestijd: 5,
  categorie: "SEO & vindbaarheid",
  faq: [
    {
      vraag: "Kost een Google Bedrijfsprofiel geld?",
      antwoord:
        "Nee, het is volledig gratis. Je hebt alleen een Google-account nodig en een eenmalige verificatie om te bewijzen dat het bedrijf van jou is.",
    },
    {
      vraag: "Heb ik een website nodig naast mijn Bedrijfsprofiel?",
      antwoord:
        "Ja. Het profiel trekt mensen aan, maar je website overtuigt ze. De twee versterken elkaar: het profiel maakt je vindbaar, de website maakt er klanten van.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Zoek eens naar &quot;kapper&quot; of &quot;loodgieter&quot; met je
        plaatsnaam erbij. Die bedrijven bovenaan op de kaart? Die staan daar
        dankzij hun Google Bedrijfsprofiel, gratis, en verrassend krachtig.
      </p>

      <h2>Wat is een Google Bedrijfsprofiel?</h2>
      <p>
        Het is je vermelding in Google Maps en de lokale zoekresultaten: met je
        openingstijden, adres, telefoonnummer, foto&apos;s en reviews. Voor veel
        lokale ondernemers is dit letterlijk het eerste wat een klant van je
        ziet.
      </p>

      <h2>Zo haal je er klanten uit</h2>
      <ul>
        <li>
          <strong>Vul alles compleet in.</strong> Categorie, diensten,
          openingstijden, gebied. Hoe completer, hoe hoger je verschijnt.
        </li>
        <li>
          <strong>Voeg echte foto&apos;s toe.</strong> Profielen met foto&apos;s
          krijgen fors meer klikken en routes.
        </li>
        <li>
          <strong>Verzamel reviews.</strong> Vraag tevreden klanten actief om een
          review, dit is de sterkste factor voor lokale ranking én vertrouwen.
        </li>
        <li>
          <strong>Reageer op reviews.</strong> Ook op de minder leuke, netjes en
          behulpzaam. Dat ziet elke potentiële klant.
        </li>
        <li>
          <strong>Post updates.</strong> Nieuws, acties of projecten houden je
          profiel actief.
        </li>
      </ul>

      <h2>Combineer met je website</h2>
      <p>
        Je Bedrijfsprofiel en je website versterken elkaar. Zorg dat je adres en
        telefoonnummer overal identiek zijn, en link vanuit je profiel naar je
        site. Google beloont die consistentie met betere lokale vindbaarheid,
        precies waar onze{" "}
        <Link href="/blog/hoger-in-google-seo-basis">SEO-basis</Link> op inzet.
      </p>
      <p>
        Wil je dat wij je lokale vindbaarheid compleet oppakken, van website tot
        Bedrijfsprofiel? Bekijk onze{" "}
        <Link href="/seo">SEO-diensten</Link> of{" "}
        <Link href="/contact">plan een gratis gesprek</Link>.
      </p>
    </>
  );
}
