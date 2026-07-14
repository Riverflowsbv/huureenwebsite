import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "hoeveel-paginas-heeft-een-website-nodig",
  titel: "Hoeveel pagina's heeft een bedrijfswebsite nodig?",
  excerpt:
    "Meer pagina's is niet automatisch beter. Dit zijn de pagina's die elke bedrijfswebsite echt nodig heeft, en welke optioneel zijn.",
  datum: "2024-12-10",
  leestijd: 4,
  categorie: "Tips & checklist",
  faq: [
    {
      vraag: "Is één pagina genoeg voor een bedrijfswebsite?",
      antwoord:
        "Voor een zzp'er of eenvoudige dienst kan een goede one-page prima werken. Zodra je meerdere diensten of doelgroepen hebt, is een site met aparte pagina's beter voor overzicht én vindbaarheid.",
    },
    {
      vraag: "Helpen meer pagina's voor SEO?",
      antwoord:
        "Alleen als elke pagina echt waarde toevoegt. Een aparte pagina per dienst of plaats helpt; tientallen dunne pagina's zonder inhoud werken juist averechts.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        &quot;Hoeveel pagina&apos;s moet mijn website hebben?&quot; Het antwoord
        is niet een getal, maar: precies zoveel als nodig om je bezoeker te
        helpen en je diensten goed te laten vinden. Meestal zijn dat er minder
        dan je denkt.
      </p>

      <h2>De basis: 4 tot 6 pagina&apos;s</h2>
      <p>
        Voor de meeste mkb&apos;ers volstaat een handjevol pagina&apos;s. Een
        homepage die in één oogopslag laat zien wie je bent en waarom mensen
        voor jou kiezen. Een dienstenpagina, of één pagina per dienst als je er
        meerdere aanbiedt. Een over-onspagina met het verhaal en het gezicht
        achter je bedrijf. En een contactpagina waar mensen je makkelijk
        bereiken, met een formulier en je gegevens erop.
      </p>
      <p>
        Vul je dat aan met een <Link href="/portfolio">portfolio</Link> of een{" "}
        <Link href="/blog">blog</Link>, dan heb je een complete, professionele
        site.
      </p>

      <h2>Wanneer je meer pagina&apos;s nodig hebt</h2>
      <ul>
        <li>
          Bied je meerdere diensten aan? Een aparte pagina per dienst scoort
          beter in Google.
        </li>
        <li>
          Werk je in meerdere plaatsen? Lokale pagina&apos;s (zoals{" "}
          <Link href="/website-laten-maken">website laten maken per stad</Link>)
          trekken gerichte bezoekers.
        </li>
        <li>Verkoop je online? Dan komt daar een webshop-gedeelte bij.</li>
      </ul>

      <h2>Kwaliteit boven kwantiteit</h2>
      <p>
        Eén sterke, duidelijke pagina verslaat tien halfslachtige. Google, én je
        bezoeker, houden van pagina&apos;s die een vraag écht beantwoorden.
        Begin dus niet met &quot;zoveel mogelijk&quot;, maar met &quot;wat heeft
        mijn klant nodig?&quot;. Weten wat voor jouw bedrijf slim is?{" "}
        <Link href="/contact">Vraag het ons</Link> in een gratis adviesgesprek.
      </p>
    </>
  );
}
