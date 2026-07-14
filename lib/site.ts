export const site = {
  naam: "HuurEenWebsite.nl",
  url: "https://huureenwebsite.nl",
  email: "info@huureenwebsite.nl",
  telefoon: "06 42 62 97 37",
  telefoonLink: "tel:+31642629737",
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

export const pakketten = [
  {
    naam: "Start",
    prijs: 99,
    voor: "Voor starters die snel professioneel online willen",
    populair: false,
    features: [
      "Complete website (tot 5 pagina's)",
      "Domein, hosting & onderhoud",
      "Professioneel mailadres",
      "Teksten en afbeeldingen",
      "Basis-SEO: vindbaar in Google",
      "WhatsApp-knop of contactformulier",
    ],
  },
  {
    naam: "Groei",
    prijs: 149,
    voor: "Voor ondernemers die meer klanten uit hun site willen",
    populair: true,
    features: [
      "Alles uit Start",
      "Tot 10 pagina's + blogmodule",
      "Maandelijkse content-update door ons",
      "Uitgebreide SEO-optimalisatie",
      "Google Bedrijfsprofiel-hulp",
      "Voorrang bij support",
    ],
  },
  {
    naam: "Pro",
    prijs: 249,
    voor: "Voor wie online wil verkopen of boekingen wil ontvangen",
    populair: false,
    features: [
      "Alles uit Groei",
      "Webshop óf boekingssysteem",
      "Betaalkoppeling (iDEAL)",
      "SEO-rapport per kwartaal",
      "Directe support-lijn",
    ],
  },
];
