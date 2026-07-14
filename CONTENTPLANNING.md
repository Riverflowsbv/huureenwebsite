# Contentplanning HuurEenWebsite.nl

**Ritme: één blog per twee weken.** Onderwerpen zijn gekozen op zoekintentie
(mensen die zoeken zitten dicht bij een aankoopbeslissing) en op interne
linkkracht naar de dienstpagina's.

---

## ✅ Gepubliceerd (historie, 2024–2026)

Deze 12 artikelen staan live en zijn gespreid gedateerd van juni 2024 t/m juli
2026, zodat de blog een gevestigde bron is:

| Datum | Titel | Categorie |
|---|---|---|
| 13-07-2026 | 7 dingen die elke goede bedrijfswebsite nodig heeft | Tips & checklist |
| 20-05-2026 | Wat kost een website laten maken in 2026? | Kosten & prijzen |
| 11-03-2026 | Hoe kom je hoger in Google? SEO-basis voor mkb'ers | SEO & vindbaarheid |
| 14-01-2026 | Website huren of kopen: wat is slimmer? | Huren vs. kopen |
| 05-11-2025 | 8 vragen om je websitebouwer te stellen | Tips & checklist |
| 03-09-2025 | Waarom is mijn website zo traag? | Techniek & snelheid |
| 16-07-2025 | Zelf maken met WordPress/Wix of laten maken? | Huren vs. kopen |
| 07-05-2025 | Google Bedrijfsprofiel: gratis meer lokale klanten | SEO & vindbaarheid |
| 04-03-2025 | Wat is website-hosting en heb je het echt nodig? | Techniek & snelheid |
| 10-12-2024 | Hoeveel pagina's heeft een bedrijfswebsite nodig? | Tips & checklist |
| 24-09-2024 | Zo schrijf je websiteteksten die klanten opleveren | Conversie & copy |
| 18-06-2024 | Een webshop beginnen: waar moet je op letten? | Webshop & verkopen |

---

## 📅 Planning komende 24 weken (om de week, elke maandag)

| # | Datum | Titel | Zoekintentie | Interne links naar |
|---|---|---|---|---|
| 1 | 20-07-2026 | Hoe kies je een goede domeinnaam voor je bedrijf? | informatief/koop | website-huren, contact |
| 2 | 03-08-2026 | Responsive website: waarom mobiel-eerst niet optioneel is | informatief | website-laten-maken, blog/traag |
| 3 | 17-08-2026 | Werkt mijn website eigenlijk? Google Analytics uitgelegd | informatief | seo, contact |
| 4 | 31-08-2026 | Wat is een landingspagina en wanneer heb je er een nodig? | koop | website-laten-maken |
| 5 | 14-09-2026 | AVG en je website: wat moet je verplicht regelen? | informatief | privacyverklaring, hosting |
| 6 | 28-09-2026 | Welke foto's heeft je website nodig (en waar haal je ze)? | informatief | website-huren |
| 7 | 12-10-2026 | Van bezoeker naar klant: wat is conversie en hoe verhoog je het? | koop | blog/7-dingen, seo |
| 8 | 26-10-2026 | Een nieuwe website: zo bereid je je goed voor (checklist) | koop | website-laten-maken, contact |
| 9 | 09-11-2026 | Website of social media: waar kun je beter in investeren? | informatief | website-huren |
| 10 | 23-11-2026 | Wat is een CMS en waarom wil je er een? | informatief | website-huren, portfolio |
| 11 | 07-12-2026 | Je website onderhouden: wat moet je écht bijhouden? | koop | hosting-en-onderhoud |
| 12 | 21-12-2026 | 5 signalen dat je website aan vervanging toe is | koop | website-huren, contact |

---

## Hoe publiceer je een nieuwe blog?

1. Maak een bestand `content/blog/<slug>.tsx` (kopieer een bestaand artikel als
   basis).
2. Vul `meta` in (slug, titel, excerpt, datum, leestijd, categorie, faq) en
   schrijf de `Body`.
3. Voeg één importregel + één regel toe in `lib/blog.ts` (de registry).
4. Klaar: het artikel verschijnt automatisch op `/blog`, in de sitemap en met
   Article- + FAQ-schema.

> Let op: artikelen verschijnen zodra ze in de registry staan, ongeacht de
> datum. Wil je écht wekelijks "inplannen", voeg dan telkens één artikel per
> week toe (of vraag Claude om ze klaar te zetten en per week te activeren).
