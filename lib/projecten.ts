export type Project = {
  slug: string;
  naam: string;
  type: string;
  plaats: string;
  sector: string;
  kleur: string; // primaire huisstijlkleur van de klant
  accent: string; // accentkleur
  liveUrl?: string; // live website (leeg = nog geen publieke link)
  kort: string; // één zin voor de overzichtskaart
  echt: boolean; // true = echte case met detailpagina, false = placeholder
  // Detailpagina-velden (alleen voor echte cases):
  intro?: string;
  uitdaging?: string;
  aanpak?: string;
  resultaat?: string;
  diensten?: string[];
};

export const projecten: Project[] = [
  {
    slug: "jvb-bouw",
    naam: "JvB Bouw",
    type: "Bedrijfswebsite · Maatwerk",
    plaats: "Aalsmeer",
    sector: "Bouw, verbouwing & renovatie",
    kleur: "#3B5B7A", // staalblauw
    accent: "#C2A06B", // messing
    // Live op de tijdelijke Vercel-URL; wordt jvbbouw.nl zodra het domein overgaat.
    liveUrl: "https://jvb-bouw.vercel.app",
    kort: "Van een verouderde, oranje site naar een strakke, razendsnelle bouwwebsite met eigen CMS.",
    echt: true,
    intro:
      "JvB Bouw uit Aalsmeer is een aannemersbedrijf voor verbouwing, renovatie en onderhoud. De oude website deed het bedrijf tekort: gedateerd, niet mobielvriendelijk en traag. Wij bouwden een compleet nieuwe site die net zo verzorgd is als hun vakwerk.",
    uitdaging:
      "De bestaande website was oranje, niet responsive en oogde verouderd. Potentiële klanten haakten af nog voordat ze het vakmanschap zagen. Er was geen manier om zelf teksten of projecten bij te werken, en de site was nauwelijks vindbaar in de regio.",
    aanpak:
      "We ontwierpen een eigen, rustige huisstijl (staalblauw en messing, geïnspireerd op bouwtekeningen) en bouwden de site met moderne, razendsnelle techniek. Inclusief een eenvoudig CMS zodat JvB zelf teksten, projecten en reviews kan beheren, een contactformulier dat direct in de mailbox binnenkomt, en lokale SEO voor de hele werkregio.",
    resultaat:
      "Een professionele, mobielvriendelijke website die in seconden laadt en JvB Bouw serieus neerzet. Vindbaar op lokale zoektermen in Aalsmeer, Uithoorn, Amstelveen en Mijdrecht, met alle content in eigen beheer.",
    diensten: [
      "Maatwerk ontwerp & huisstijl",
      "Development (razendsnel)",
      "Eenvoudig CMS",
      "Contactformulier",
      "Lokale SEO",
      "Hosting & onderhoud",
    ],
  },
  {
    slug: "",
    naam: "[Projectnaam 2]",
    type: "Webshop · Maatwerk",
    plaats: "",
    sector: "",
    kleur: "#12b981",
    accent: "#0d9668",
    kort: "Binnenkort: een nieuwe case.",
    echt: false,
  },
  {
    slug: "",
    naam: "[Projectnaam 3]",
    type: "Website · Huur",
    plaats: "",
    sector: "",
    kleur: "#f5a623",
    accent: "#d98c0a",
    kort: "Binnenkort: een nieuwe case.",
    echt: false,
  },
  {
    slug: "",
    naam: "[Projectnaam 4]",
    type: "Website · Maatwerk",
    plaats: "",
    sector: "",
    kleur: "#8b5cf6",
    accent: "#7c3aed",
    kort: "Binnenkort: een nieuwe case.",
    echt: false,
  },
];

export const echteCases = projecten.filter((p) => p.echt);
