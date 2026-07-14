import Link from "next/link";
import type { BlogMeta } from "@/lib/blog";

export const meta: BlogMeta = {
  slug: "webshop-beginnen-waar-op-letten",
  titel: "Een webshop beginnen: waar moet je op letten?",
  excerpt:
    "Van betaalmethoden tot verzending en vindbaarheid: de belangrijkste keuzes voordat je online gaat verkopen.",
  datum: "2024-06-18",
  leestijd: 6,
  categorie: "Webshop & verkopen",
  faq: [
    {
      vraag: "Wat kost een webshop laten maken?",
      antwoord:
        "Een professionele webshop begint doorgaans vanaf een paar duizend euro, afhankelijk van het aantal producten en functies. Huren kan ook: dan spreid je de kosten over een vast maandbedrag.",
    },
    {
      vraag: "Welke betaalmethoden heb ik nodig in Nederland?",
      antwoord:
        "iDEAL is in Nederland onmisbaar. Vul aan met creditcard, en eventueel achteraf betalen. Een betrouwbare betaalkoppeling regelt dit veilig voor je.",
    },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Online verkopen klinkt eenvoudig: producten erop, kassa rinkelt. In de
        praktijk maak je vooraf een paar keuzes die het verschil maken tussen een
        webshop die verkoopt en een die stof vangt. Dit zijn de belangrijkste.
      </p>

      <h2>1. Betalen: maak het makkelijk en vertrouwd</h2>
      <p>
        In Nederland is iDEAL een must. Hoe soepeler het afrekenen, hoe minder
        mensen afhaken bij de laatste stap. Een goede betaalkoppeling is dus geen
        detail, maar direct omzet.
      </p>

      <h2>2. Verzending: wees vooraf duidelijk</h2>
      <p>
        Onverwachte verzendkosten zijn reden nummer één om een winkelmandje te
        verlaten. Wees helder over kosten en levertijd, het liefst al op de
        productpagina.
      </p>

      <h2>3. Vindbaarheid: producten die gevonden worden</h2>
      <p>
        Een webshop zonder bezoekers verkoopt niets. Zorg voor goede
        productteksten, snelle laadtijd en een technische basis die Google
        begrijpt, dezelfde <Link href="/blog/hoger-in-google-seo-basis">SEO-basis</Link>{" "}
        die voor elke site geldt.
      </p>

      <h2>4. Vertrouwen: durven mensen bij je te kopen?</h2>
      <p>
        Reviews, duidelijke retourvoorwaarden, een zichtbaar adres en het slotje
        in de browser: allemaal signalen die een bezoeker over de streep trekken
        om zijn kaartgegevens in te vullen.
      </p>

      <h2>5. Beheer: hoeveel werk wil je eraan hebben?</h2>
      <p>
        Voorraad, bestellingen, updates, beveiliging: een webshop vraagt meer
        onderhoud dan een gewone site. Bedenk vooraf of je dat zelf doet of laat
        regelen.
      </p>

      <h2>Kopen of huren?</h2>
      <p>
        Een webshop is een investering. Wil je zonder hoge kosten vooraf starten,
        dan kan een webshop ook onderdeel zijn van een{" "}
        <Link href="/website-huren">huurpakket</Link> (ons Pro-pakket). Zo begin
        je met een vast maandbedrag, inclusief onderhoud en betaalkoppeling.
        Benieuwd wat bij jouw plannen past?{" "}
        <Link href="/contact">Plan een gratis adviesgesprek</Link>.
      </p>
    </>
  );
}
