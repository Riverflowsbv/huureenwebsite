export type Addon = {
  id: string;
  naam: string;
  prijs: string; // weergave, bijv. "€2,50", "vanaf €199", "Op aanvraag"
  eenheid: string; // "per maand", "eenmalig" of "" (bij op aanvraag)
  beschrijving: string;
  populair?: boolean;
  // Voor het mandje/afrekenen:
  cartType: "maandelijks" | "eenmalig" | "offerte";
  bedrag?: number; // vast bedrag in euro's; ontbreekt bij "offerte"
  perStuk?: boolean; // true = klant kan een aantal kiezen (bijv. 4 mailboxen)
};

export type AddonGroep = {
  slug: string;
  titel: string;
  intro: string;
  items: Addon[];
};

// Alle prijzen zijn excl. btw, net als de pakketten.
// cartType "offerte" = niet zelf af te rekenen (prijs op maat), wel aanvraagbaar.
export const addonGroepen: AddonGroep[] = [
  {
    slug: "extras",
    titel: "Extra's bij je pakket",
    intro:
      "Kleine uitbreidingen die je er direct bij kiest. Handig als je net iets meer wil dan je pakket standaard biedt.",
    items: [
      {
        id: "email-pakket",
        naam: "Professioneel e-mailpakket",
        prijs: "€6,50",
        eenheid: "p/mnd per gebruiker",
        cartType: "maandelijks",
        bedrag: 6.5,
        perStuk: true,
        beschrijving:
          "Mail, agenda en opslag via Google Workspace of Microsoft 365, gekoppeld aan je domein. Wij regelen de installatie.",
      },
      {
        id: "extra-mailbox",
        naam: "Extra mailbox",
        prijs: "€2,50",
        eenheid: "p/mnd per mailbox",
        cartType: "maandelijks",
        bedrag: 2.5,
        perStuk: true,
        beschrijving:
          "Een extra professioneel mailadres op je eigen domein, bijvoorbeeld voor een collega of een aparte afdeling.",
      },
      {
        id: "tweetalig",
        naam: "Tweetalige website (NL/EN)",
        prijs: "€19",
        eenheid: "per maand",
        cartType: "maandelijks",
        bedrag: 19,
        beschrijving:
          "Je website in het Nederlands én Engels. Handig als je ook internationale klanten bedient.",
      },
      {
        id: "extra-pagina",
        naam: "Extra pagina",
        prijs: "€7,50",
        eenheid: "p/mnd per pagina",
        cartType: "maandelijks",
        bedrag: 7.5,
        perStuk: true,
        beschrijving:
          "Je pakket heeft een maximaal aantal pagina's. Meer nodig? Voeg losse pagina's toe, per stuk.",
      },
      {
        id: "spoed",
        naam: "Spoed-oplevering",
        prijs: "€149",
        eenheid: "eenmalig",
        cartType: "eenmalig",
        bedrag: 149,
        beschrijving:
          "Haast? Dan zetten we jouw project vooraan in de rij en leveren we binnen 48 tot 72 uur op, in plaats van de gebruikelijke twee weken.",
      },
    ],
  },
  {
    slug: "groeipakketten",
    titel: "Doorlopende groeipakketten",
    intro:
      "Wil je meer uit je website halen? Deze maandpakketten helpen je groeien. Net als je website: maandelijks opzegbaar na de minimale periode.",
    items: [
      {
        id: "seo",
        naam: "SEO-abonnement",
        prijs: "€149 / €299",
        eenheid: "per maand",
        cartType: "offerte",
        populair: true,
        beschrijving:
          "Structureel hoger in Google. Techniek, content en linkbuilding, met een heldere maandrapportage. Basis vanaf €149, uitgebreid €299.",
      },
      {
        id: "content",
        naam: "Content- en blogpakket",
        prijs: "€99",
        eenheid: "per maand",
        cartType: "maandelijks",
        bedrag: 99,
        beschrijving:
          "Wij schrijven elke maand twee verse blogartikelen die klanten aantrekken en je vindbaarheid vergroten.",
      },
      {
        id: "ads",
        naam: "Google Ads-beheer",
        prijs: "€149",
        eenheid: "per maand",
        cartType: "offerte",
        beschrijving:
          "Wij richten je advertenties in, beheren ze en sturen bij op resultaat. Het advertentiebudget komt daar los bovenop.",
      },
      {
        id: "social",
        naam: "Social media-beheer",
        prijs: "vanaf €199",
        eenheid: "per maand",
        cartType: "offerte",
        beschrijving:
          "Wij vullen en beheren je social kanalen, zodat je zichtbaar blijft zonder er zelf tijd in te steken.",
      },
    ],
  },
  {
    slug: "eenmalig",
    titel: "Eenmalige extra's",
    intro: "Losse klussen die we eenmalig voor je oppakken.",
    items: [
      {
        id: "logo",
        naam: "Logo en huisstijl",
        prijs: "vanaf €249",
        eenheid: "eenmalig",
        cartType: "offerte",
        beschrijving:
          "Een professioneel logo met bijpassende kleuren en fonts, zodat je merk overal klopt.",
      },
      {
        id: "fotografie",
        naam: "Professionele fotografie",
        prijs: "vanaf €199",
        eenheid: "eenmalig",
        cartType: "offerte",
        beschrijving:
          "Echte foto's van je bedrijf, team of werk. Dat oogt een stuk sterker dan stockbeelden.",
      },
      {
        id: "webshop",
        naam: "Webshop of boekingssysteem",
        prijs: "Op aanvraag",
        eenheid: "",
        cartType: "offerte",
        beschrijving:
          "Online verkopen of klanten zelf afspraken laten inplannen? We bouwen het op maat in je site.",
      },
      {
        id: "koppelingen",
        naam: "Koppelingen",
        prijs: "Op aanvraag",
        eenheid: "",
        cartType: "offerte",
        beschrijving:
          "Agenda, betaalsystemen, CRM of andere tools gekoppeld aan je website.",
      },
    ],
  },
];

// Alle add-ons als platte lijst (handig voor het mandje).
export const alleAddons: Addon[] = addonGroepen.flatMap((g) => g.items);

// Add-ons die je zelf in het mandje kunt afrekenen (vaste prijs).
export const cartAddons: Addon[] = alleAddons.filter(
  (a) => a.cartType !== "offerte"
);
