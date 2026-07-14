import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "zelf-maken-of-laten-maken",
  titel: "Zelf een website maken met WordPress of Wix, of laten maken?",
  excerpt:
    "Zelf klooien in Wix of WordPress, of het laten doen? We wegen de echte kosten, tijd en resultaten tegen elkaar af.",
  datum: "2025-07-16",
  leestijd: 6,
  categorie: "Huren vs. kopen",
  faq: [
    {
      vraag: "Is zelf een website maken echt goedkoper?",
      antwoord:
        "Op papier wel, maar reken je jouw eigen uren mee, dan valt het vaak tegen. Veel ondernemers besteden tientallen uren en houden alsnog een site over die niet lekker converteert.",
    },
    {
      vraag: "Kan ik later een zelfgemaakte site laten overnemen?",
      antwoord:
        "Meestal wel. We kijken dan of we je bestaande site kunnen versnellen en verbeteren, of dat opnieuw bouwen met moderne techniek voordeliger is. Dat vertellen we je eerlijk.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Wix, Squarespace, WordPress: er zijn genoeg tools om zelf een website in
        elkaar te zetten. Maar is dat slim, of kost het je uiteindelijk meer dan
        het oplevert? De eerlijke afweging.
      </p>

      <h2>Zelf maken: de voordelen</h2>
      <ul>
        <li>Lage instapkosten (een abonnement vanaf een paar euro per maand)</li>
        <li>Je hebt volledige controle en kunt direct beginnen</li>
        <li>Prima voor een simpel visitekaartje of tijdelijke pagina</li>
      </ul>

      <h2>Zelf maken: de nadelen</h2>
      <ul>
        <li>
          <strong>Je tijd.</strong> Een goede site bouwen kost al snel tientallen
          uren, tijd die je niet in je bedrijf steekt.
        </li>
        <li>
          <strong>Het resultaat.</strong> Templates zien er al gauw
          &quot;standaard&quot; uit en zijn vaak traag.
        </li>
        <li>
          <strong>Conversie.</strong> Mooi maken lukt vaak wel; zó bouwen dat
          bezoekers ook echt klant worden, is een vak apart.
        </li>
        <li>
          <strong>Onderhoud.</strong> Updates, beveiliging en snelheid blijven
          jouw verantwoordelijkheid.
        </li>
      </ul>

      <h2>Laten maken: waar je voor betaalt</h2>
      <p>
        Bij laten maken betaal je voor meer dan een mooie site. Je betaalt voor
        de strategie erachter: een heldere structuur, sterke teksten, snelheid en
        vindbaarheid. En je houdt je eigen tijd over. Reken wel op een grotere
        investering, tenzij je kiest voor{" "}
        <Link href="/website-huren">huren</Link>, waarbij je met lage
        opstartkosten begint.
      </p>

      <h2>Wanneer kies je wat?</h2>
      <p>
        Heb je écht even alleen een simpele pagina nodig en veel tijd? Dan kun je
        zelf prima starten. Wil je een website die serieus klanten oplevert,
        zonder er zelf uren in te steken? Dan is{" "}
        <Link href="/website-laten-maken">laten maken</Link> of{" "}
        <Link href="/website-huren">huren</Link> bijna altijd de verstandigere
        keuze. Twijfel je? <Link href="/contact">Plan een gratis gesprek</Link>,
        we denken eerlijk met je mee, ook als zelf doen voor jou het slimste is.
      </p>
    </>
  );
}
