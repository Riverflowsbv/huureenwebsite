# HuurEenWebsite.nl

Next.js-website voor HuurEenWebsite.nl (River Flows B.V.).

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deployen naar Vercel

1. Push deze map naar een GitHub-repository
2. Importeer de repo op vercel.com (framework wordt automatisch herkend)
3. Koppel het domein huureenwebsite.nl onder Settings → Domains

## Structuur

- `app/` — alle pagina's (App Router)
- `app/website-laten-maken/[plaats]/` — lokale SEO-landingspagina's, gegenereerd uit `lib/steden.ts`
- `components/` — herbruikbare componenten (Header, Footer, Pricing, Faq, Steps, CtaBand)
- `lib/site.ts` — bedrijfsgegevens en pakketten (prijzen op één plek aanpassen)
- `lib/steden.ts` — steden voor lokale landingspagina's

## Vóór livegang (TODO)

- [ ] Contactgegevens invullen in `lib/site.ts` (telefoon, adres)
- [ ] Contactformulier koppelen (bijv. Resend of Formspree) in `app/contact/page.tsx`
- [ ] Agenda-link (Calendly/Cal.com) toevoegen in `app/contact/page.tsx`
- [ ] Echte reviews en portfolio-projecten toevoegen (placeholders vervangen)
- [ ] Stadsteksten in `lib/steden.ts` per stad verder uniek maken en uitbreiden
- [ ] Pagina's: algemene-voorwaarden en privacyverklaring toevoegen
- [ ] Google Analytics 4 + Search Console koppelen
- [ ] Favicon en OG-afbeelding toevoegen
