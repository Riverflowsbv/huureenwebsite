export const site = {
  naam: "HuurEenWebsite.nl",
  url: "https://huureenwebsite.nl",
  email: "info@huureenwebsite.nl",
  telefoon: "06 25 12 50 01",
  telefoonLink: "tel:+31625125001",
  adres: "Veilmeesterweg 36, 1186 DT Amstelveen",
  bv: "River Flows B.V.",
  kvk: "42056039",
  slogan: "Jouw website. Geregeld. Vanaf €99 per maand.",
  setupFee: 199, // eenmalige opstartkosten
  minMaanden: 6, // minimale huurperiode
  // Formspree: maak een form aan op formspree.io en plak hier het ID (het
  // deel na /f/ in de endpoint-URL, bijv. "mqerkpkz").
  formspreeId: "mgogeprv",
  // Optionele agenda-link (Calendly / Cal.com). Leeg laten = knop verbergen.
  agendaUrl: "",
  // Google Analytics 4 meet-ID. Leeg laten = geen tracking + geen cookiebanner.
  ga4Id: "G-D9N1LD7DHQ",
};

// Eén regel binnen een pakketblok. `detail` = grijze toelichting achter de tekst.
// `status: "uitbreidbaar"` toont een kruisje i.p.v. een vinkje (nog niet inbegrepen,
// wel bij te bestellen of in een hoger pakket).
export type PakketItem = {
  tekst: string;
  detail?: string;
  status?: "inbegrepen" | "uitbreidbaar";
};

export type PakketGroep = {
  label: string;
  items: PakketItem[];
};

export type Pakket = {
  naam: string;
  prijs: number;
  voor: string;
  populair: boolean;
  groepen: PakketGroep[];
};

export const pakketten: Pakket[] = [
  {
    naam: "Start",
    prijs: 99,
    voor: "Ideaal voor zzp'ers en starters die snel en professioneel online willen.",
    populair: false,
    groepen: [
      {
        label: "Basis inbegrepen",
        items: [
          { tekst: "SSL-beveiliging & hosting" },
          { tekst: "Eigen domeinnaam geregeld" },
          { tekst: "Contactformulier" },
          { tekst: "Google Maps-integratie" },
          { tekst: "Technische SEO-basis" },
          { tekst: "Razendsnel & mobielvriendelijk" },
        ],
      },
      {
        label: "Website",
        items: [
          {
            tekst: "1 pagina (one-pager)",
            detail: "Een professionele one-pager waarop alles overzichtelijk samenkomt.",
          },
          { tekst: "1 professioneel e-mailadres" },
        ],
      },
      {
        label: "Onderhoud",
        items: [
          {
            tekst: "2 wijzigingen per jaar",
            detail:
              "Bijvoorbeeld een tekst aanpassen, een foto vervangen of je openingstijden wijzigen.",
          },
        ],
      },
      {
        label: "Uitbreidbaar met",
        items: [
          { tekst: "Extra pagina's", status: "uitbreidbaar" },
          { tekst: "Compleet e-mailpakket", status: "uitbreidbaar" },
          { tekst: "SEO-abonnement", status: "uitbreidbaar" },
        ],
      },
    ],
  },
  {
    naam: "Groei",
    prijs: 149,
    voor: "Voor bedrijven die professioneel online willen groeien.",
    populair: true,
    groepen: [
      {
        label: "Basis inbegrepen",
        items: [
          { tekst: "SSL-beveiliging & hosting" },
          { tekst: "Eigen domeinnaam geregeld" },
          { tekst: "Contactformulier" },
          { tekst: "Google Maps-integratie" },
          { tekst: "Technische SEO per pagina" },
          { tekst: "Razendsnel & mobielvriendelijk" },
        ],
      },
      {
        label: "Website",
        items: [
          {
            tekst: "Tot 5 pagina's",
            detail: "Bijvoorbeeld Home, Diensten, Over ons, Portfolio en Contact.",
          },
          { tekst: "3 e-mailadressen" },
          { tekst: "Offerteformulier" },
          { tekst: "Reviews-widget" },
        ],
      },
      {
        label: "Onderhoud",
        items: [
          {
            tekst: "1 wijziging per kwartaal",
            detail:
              "Bijvoorbeeld een tekst aanpassen, een afbeelding vervangen of een bestaande sectie bijwerken.",
          },
        ],
      },
      {
        label: "Extra inbegrepen",
        items: [{ tekst: "Voorrang bij support" }],
      },
      {
        label: "Uitbreidbaar met",
        items: [
          { tekst: "Tweetalige website (NL/EN)", status: "uitbreidbaar" },
          { tekst: "Online reserveringen", status: "uitbreidbaar" },
        ],
      },
    ],
  },
  {
    naam: "Pro",
    prijs: 249,
    voor: "Voor bedrijven die serieus willen doorgroeien of online willen verkopen.",
    populair: false,
    groepen: [
      {
        label: "Basis inbegrepen",
        items: [
          { tekst: "SSL-beveiliging & hosting" },
          { tekst: "Eigen domeinnaam geregeld" },
          { tekst: "Contactformulier" },
          { tekst: "Google Maps-integratie" },
          { tekst: "Technische SEO per pagina" },
          { tekst: "Razendsnel & mobielvriendelijk" },
        ],
      },
      {
        label: "Website",
        items: [
          {
            tekst: "Tot 10 pagina's",
            detail: "Ruimte voor een uitgebreide site met blog, diensten- en projectpagina's.",
          },
          { tekst: "5 e-mailadressen" },
          {
            tekst: "Alle formuliertypes",
            detail: "Contact, offerte én boeking.",
          },
          { tekst: "Reviews + social media-integratie" },
        ],
      },
      {
        label: "Onderhoud",
        items: [
          {
            tekst: "1 wijziging per maand",
            detail:
              "Voor bestaande onderdelen op je site. Compleet nieuwe pagina's of maatwerk doen we op aanvraag.",
          },
        ],
      },
      {
        label: "Extra inbegrepen",
        items: [
          { tekst: "Webshop óf boekingssysteem" },
          { tekst: "Betaalkoppeling (iDEAL)" },
          {
            tekst: "Prioriteit-support",
            detail: "Directe lijn, snellere reactie en voorrang bij aanpassingen.",
          },
        ],
      },
    ],
  },
];
