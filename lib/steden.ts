export type Stad = {
  slug: string;
  naam: string;
  regio: string;
  intro: string;
  lokaal: string;
  // Verrijking voor unieke, niet-dunne lokale content:
  kans: string; // de lokale kans/uitdaging, andere invalshoek dan `lokaal`
  gebieden: string[]; // echte wijken/gebieden (lokale zoekwoorden)
  sectoren: string[]; // typische lokale ondernemers/sectoren
};

// Elke stad heeft eigen intro, lokaal, kans, gebieden en sectoren, zodat
// pagina's echt uniek zijn (geen dunne copy-paste). Vul gerust verder aan.
export const steden: Stad[] = [
  {
    slug: "amstelveen",
    naam: "Amstelveen",
    regio: "Amstelland",
    intro:
      "Amstelveen is onze thuisbasis. We kennen de stad, de ondernemers en de markt: van het Stadshart tot Westwijk. Precies daarom bouwen we hier websites die direct vertrouwen wekken.",
    lokaal:
      "Amstelveen heeft een veeleisend, internationaal publiek: kritisch, zakelijk en online-georiënteerd. Een matige website valt hier extra hard op, een strakke en snelle site juist ook.",
    kans:
      "Met veel expats, internationale bedrijven en hoogopgeleide inwoners loont een verzorgde, razendsnelle website in Amstelveen dubbel. Tweetalig (Nederlands/Engels) bouwen we net zo makkelijk. En omdat wij hier zelf gevestigd zijn, kunnen we altijd even langskomen.",
    gebieden: [
      "Stadshart",
      "Westwijk",
      "Middenhoven",
      "Elsrijk",
      "Bankras-Kostverloren",
      "Groenelaan",
    ],
    sectoren: [
      "zakelijke dienstverlening",
      "internationale bedrijven",
      "zorg & praktijken",
      "retail en horeca",
    ],
  },
  {
    slug: "amsterdam",
    naam: "Amsterdam",
    regio: "Noord-Holland",
    intro:
      "Van zzp'er in Noord tot horecazaak in De Pijp: in Amsterdam is online opvallen geen luxe maar noodzaak. Wij bouwen websites die de drukte doorbreken.",
    lokaal:
      "Met honderdduizenden bedrijven is de concurrentie in Amsterdam enorm. Juist daarom telt elke seconde laadtijd en elke plek in Google.",
    kans:
      "In een verzadigde markt wint niet de grootste, maar de best vindbare. Een snelle site met sterke lokale SEO zet je vóór concurrenten die nog op een trage WordPress-site draaien, of helemaal geen fatsoenlijke website hebben.",
    gebieden: [
      "De Pijp",
      "Jordaan",
      "Amsterdam-Noord",
      "Zuidoost",
      "Oud-West",
      "Oost",
    ],
    sectoren: [
      "horeca",
      "creatieve zzp'ers",
      "retail",
      "tech- en dienstverlening",
    ],
  },
  {
    slug: "haarlem",
    naam: "Haarlem",
    regio: "Zuid-Kennemerland",
    intro:
      "Haarlemse ondernemers combineren ambacht met ondernemerschap. Daar hoort een website bij die net zo verzorgd is als je zaak zelf.",
    lokaal:
      "Van de Grote Houtstraat tot Schalkwijk: klanten in Haarlem zoeken lokaal. Wij zorgen dat ze jou vinden en niet je concurrent.",
    kans:
      "Haarlem heeft een sterk winkelhart en veel gespecialiseerde zaken. Klanten oriënteren zich online vóór ze langskomen. Een website die vertrouwen wekt en snel laadt, is hier vaak het verschil tussen wél en niet gebeld worden.",
    gebieden: [
      "Centrum (Grote Houtstraat)",
      "Schalkwijk",
      "Haarlem-Noord",
      "Zuidwest",
      "Haarlem-Oost",
    ],
    sectoren: [
      "ambachtelijke retail",
      "horeca",
      "zorg & praktijken",
      "zakelijke dienstverlening",
    ],
  },
  {
    slug: "alkmaar",
    naam: "Alkmaar",
    regio: "Noord-Holland-Noord",
    intro:
      "Alkmaar en omstreken is thuisregio nummer twee. We kennen de markt, komen graag langs en zorgen dat jouw bedrijf hier online de standaard zet.",
    lokaal:
      "Veel Alkmaarse mkb'ers draaien nog op verouderde websites. Dat is jouw kans om er met een snelle, moderne site bovenuit te steken.",
    kans:
      "In Alkmaar is de online concurrentie een stuk milder dan in de Randstad. Wie hier nu investeert in een snelle, goed vindbare website, pakt een voorsprong die jaren meegaat, in de stad én de omliggende dorpen.",
    gebieden: ["Centrum", "Overstad", "Huiswaard", "De Mare", "Alkmaar-Noord"],
    sectoren: [
      "mkb & familiebedrijven",
      "bouw & installatie",
      "retail",
      "horeca",
    ],
  },
  {
    slug: "zaandam",
    naam: "Zaandam",
    regio: "Zaanstreek",
    intro:
      "De Zaanstreek groeit hard en het aantal ondernemers groeit mee. Een professionele website is hier het verschil tussen meedoen en voorop lopen.",
    lokaal:
      "Zaandam ligt op een steenworp van Amsterdam, maar klanten zoeken hier op 'Zaandam'. Lokale vindbaarheid is dus goud waard.",
    kans:
      "Van het vernieuwde Inverdan-centrum tot de maakbedrijven langs de Zaan: Zaandam heeft een praktische, no-nonsense ondernemerscultuur. Een heldere website die gewoon werkt en snel laadt, past daar perfect bij.",
    gebieden: [
      "Centrum (Inverdan)",
      "Poelenburg",
      "Kogerveld",
      "Rosmolenwijk",
      "Westerkoog",
    ],
    sectoren: [
      "industrie & maakbedrijven",
      "bouw",
      "logistiek",
      "retail",
    ],
  },
  {
    slug: "hoorn",
    naam: "Hoorn",
    regio: "West-Friesland",
    intro:
      "West-Friese nuchterheid, dat snappen wij. Geen mooie praatjes maar een website die gewoon doet wat hij moet doen: klanten opleveren.",
    lokaal:
      "In Hoorn en West-Friesland winnen bedrijven het van elkaar op betrouwbaarheid. Een verzorgde website met echte reviews maakt dat verschil.",
    kans:
      "Hoorn is het economische hart van West-Friesland, met een groeiende bevolking in wijken als Bangert en Oosterpolder. Nieuwe inwoners zoeken online een lokale kapper, klusser of boekhouder. Wie goed vindbaar is, pakt die klanten.",
    gebieden: [
      "Centrum",
      "Kersenboogerd",
      "Risdam",
      "Grote Waal",
      "Bangert en Oosterpolder",
    ],
    sectoren: ["ambacht", "retail", "toerisme & recreatie", "zorg"],
  },
  {
    slug: "purmerend",
    naam: "Purmerend",
    regio: "Waterland",
    intro:
      "Purmerend groeit als kool en nieuwe inwoners zoeken lokale bedrijven via Google. Sta jij er dan tussen, of je concurrent?",
    lokaal:
      "Duizenden nieuwe woningen betekenen duizenden nieuwe klanten die nog geen vaste kapper, klusser of boekhouder hebben. Wees vindbaar.",
    kans:
      "Met de groei van wijken als Weidevenne verschuift de markt continu. Ondernemers die nu een snelle, goed vindbare website hebben, worden de vaste keuze van al die nieuwe Purmerenders, voordat de concurrent dat doet.",
    gebieden: [
      "Centrum",
      "Weidevenne",
      "Overwhere",
      "Gors",
      "Wheermolen",
    ],
    sectoren: [
      "bouw & installatie",
      "dienstverlening",
      "retail",
      "zorg",
    ],
  },
  {
    slug: "hilversum",
    naam: "Hilversum",
    regio: "Gooi en Vechtstreek",
    intro:
      "In de mediastad kijkt iedereen met een professioneel oog. Een matige website valt in Hilversum extra hard op, een goede ook.",
    lokaal:
      "Creatieve zzp'ers en mediabedrijven zijn hier de norm. Onderscheid je met een site die visueel klopt én technisch razendsnel is.",
    kans:
      "Hilversum zit vol mensen die weten hoe goede communicatie eruitziet, van omroepen tot creatieve bureaus. Juist daar telt een strakke, snelle website extra zwaar: je uitstraling online is meteen je visitekaartje.",
    gebieden: [
      "Centrum",
      "Kerkelanden",
      "Hilversumse Meent",
      "Over 't Spoor",
      "Trompenberg",
    ],
    sectoren: [
      "media & creatief",
      "marketing & communicatie",
      "zzp'ers",
      "zakelijke dienstverlening",
    ],
  },
  {
    slug: "heerhugowaard",
    naam: "Heerhugowaard",
    regio: "Dijk en Waard",
    intro:
      "Ondernemers in Dijk en Waard bouwen aan een groeiende regio. Wij bouwen de website die daarbij past, zonder dat jij ernaar om hoeft te kijken.",
    lokaal:
      "De fusie tot Dijk en Waard maakt lokale zoektermen extra interessant: wie nu goed vindbaar is, pakt de hele regio.",
    kans:
      "Van het winkelhart tot de Stad van de Zon: Heerhugowaard heeft een sterk retail- en mkb-klimaat. Nu de gemeente met Langedijk is samengegaan, verschuiven zoekgedrag en concurrentie, een uitgelezen moment om lokaal bovenaan te staan.",
    gebieden: [
      "Centrum",
      "Stad van de Zon",
      "De Noord",
      "Butterhuizen",
      "Schrijverskwartier",
    ],
    sectoren: [
      "retail & winkelcentra",
      "bouw",
      "logistiek",
      "mkb",
    ],
  },
  {
    slug: "den-helder",
    naam: "Den Helder",
    regio: "Kop van Noord-Holland",
    intro:
      "Van de marinestad tot Julianadorp: ook in de kop van Noord-Holland verwachten klanten een professionele online uitstraling.",
    lokaal:
      "Minder concurrentie dan in de Randstad betekent hier: met een goede website sta je snel bovenaan in Google. Die kans ligt open.",
    kans:
      "Den Helder heeft een unieke economie rond marine, offshore en toerisme. Bedrijven die deze specialistische markten bedienen, hebben baat bij een heldere, professionele site die precies de juiste bezoeker aantrekt, ook van buiten de regio.",
    gebieden: [
      "Centrum",
      "Julianadorp",
      "Nieuw Den Helder",
      "De Schooten",
      "Stad binnen de Linie",
    ],
    sectoren: [
      "maritiem & offshore",
      "toerisme & recreatie",
      "zorg",
      "retail",
    ],
  },
];
