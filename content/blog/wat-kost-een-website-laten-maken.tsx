import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "wat-kost-een-website-laten-maken",
  titel: "Wat kost een website laten maken in 2026?",
  excerpt:
    "Een eerlijk overzicht van wat een professionele website écht kost, waar de prijs van afhangt en op welke verborgen kosten je moet letten.",
  datum: "2026-05-20",
  leestijd: 6,
  categorie: "Kosten & prijzen",
  faq: [
    {
      vraag: "Wat is de goedkoopste manier om een website te krijgen?",
      antwoord:
        "Een website huren is meestal de goedkoopste instap: je betaalt geen duizenden euro's vooraf, maar een vast laag bedrag per maand (vanaf €99) waarin ontwerp, hosting, onderhoud en SEO al zitten.",
    },
    {
      vraag: "Zitten er naast de bouwkosten nog andere kosten?",
      antwoord:
        "Bij eenmalig kopen wel: hosting, onderhoud, updates, beveiliging en een mailadres komen er los bij, samen al snel €20 tot €50 per maand. Bij een huurwebsite zit dat allemaal in het maandbedrag.",
    },
    {
      vraag: "Waarom lopen de prijzen zo uiteen?",
      antwoord:
        "De prijs hangt af van het aantal pagina's, of teksten en foto's worden aangeleverd of gemaakt, en van eventuele extra functies zoals een webshop of boekingssysteem. Vraag daarom altijd een offerte op maat.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Het eerlijke antwoord: een website laten maken kost in Nederland grofweg
        tussen de <strong>€500 en €10.000+</strong>. Dat is een enorme
        bandbreedte, en precies daarom lopen ondernemers erop vast. In dit
        artikel leggen we helder uit waar die verschillen vandaan komen, zodat
        je weet wat reëel is voor jouw situatie.
      </p>

      <h2>De richtprijzen op een rij</h2>
      <ul>
        <li>
          <strong>Eenvoudige one-page of visitekaartje-site:</strong> €500 tot
          €1.500
        </li>
        <li>
          <strong>Professionele mkb-website (5 tot 10 pagina&apos;s):</strong>{" "}
          €1.500 tot €4.000
        </li>
        <li>
          <strong>Maatwerk met webshop of boekingssysteem:</strong> €4.000 tot
          €10.000+
        </li>
      </ul>
      <p>
        Dit zijn eenmalige bouwkosten. En daar zit meteen de valkuil, want de
        bouw is niet de enige kostenpost.
      </p>

      <h2>Waar hangt de prijs van af?</h2>
      <ul>
        <li>Het aantal pagina&apos;s en de complexiteit van het ontwerp</li>
        <li>Of jij de teksten en foto&apos;s aanlevert, of dat wij die maken</li>
        <li>Extra functies: webshop, betaalkoppeling, boekingssysteem, meertaligheid</li>
        <li>De techniek: een snelle maatwerksite kost meer dan een kant-en-klaar template</li>
        <li>SEO: wordt de site standaard vindbaar opgeleverd of niet?</li>
      </ul>

      <h2>Let op de verborgen kosten</h2>
      <p>
        Een website is geen eenmalige aankoop die je daarna vergeet. Reken bij
        eenmalig kopen ook op deze doorlopende kosten:
      </p>
      <ul>
        <li>Hosting: €5 tot €25 per maand</li>
        <li>Onderhoud en updates: €20 tot €80 per maand of per uur</li>
        <li>Beveiliging en back-ups</li>
        <li>Een professioneel e-mailadres</li>
      </ul>
      <p>
        Bij elkaar ben je zo €20 tot €50 per maand kwijt <em>bovenop</em> de
        bouwkosten. Reken je dat mee, dan valt een dure maatwerksite in de
        praktijk vaak nog een stuk hoger uit dan de offerte doet vermoeden.
      </p>

      <h2>Kopen of huren?</h2>
      <p>
        Daarom kiezen steeds meer ondernemers ervoor om een website te{" "}
        <Link href="/website-huren">huren</Link>: geen dure investering vooraf,
        maar lage opstartkosten en één vast bedrag per maand waarin ontwerp,
        hosting, onderhoud én vindbaarheid al zitten. Wil je liever kopen? Dat kan bij ons ook, met{" "}
        <Link href="/website-laten-maken">maatwerk vanaf €1.499</Link>. Welke
        het slimst is, hangt af van je situatie, en dat leggen we in een{" "}
        <Link href="/contact">gratis adviesgesprek</Link> eerlijk voor je uit.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Reken voor een serieuze bedrijfswebsite op minimaal €1.500 eenmalig, of
        vanaf €99 per maand als je huurt. Laat je niet verrassen door verborgen
        kosten, en vraag altijd een offerte waarin duidelijk staat wat er wél en
        niet inbegrepen is.
      </p>
    </>
  );
}
