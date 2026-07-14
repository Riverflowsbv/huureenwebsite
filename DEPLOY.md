# Deployen naar Vercel

De site is deploy-klaar (Next.js, productie-build slaagt). Volg deze stappen.
Het aanmaken van de accounts doe je zelf; Claude doet dat niet.

## 1. Zet de code op GitHub
1. Maak een GitHub-account/organisatie aan (bijv. onder River Flows BV).
2. Maak een nieuwe, lege repository, bijvoorbeeld `huureenwebsite`.
3. Koppel deze map en push (de map is al een git-repo met een eerste commit):
   ```
   git remote add origin https://github.com/<jouw-account>/huureenwebsite.git
   git branch -M main
   git push -u origin main
   ```

## 2. Importeer op Vercel
1. Maak een Vercel-account aan onder River Flows BV.
2. Klik "Add New Project" en kies de GitHub-repo. Vercel herkent Next.js
   automatisch, je hoeft niets in te stellen.
3. Klik "Deploy". Na ~1 minuut staat de site live op een `.vercel.app`-adres.

## 3. Koppel het domein
1. Ga in het project naar Settings -> Domains.
2. Voeg `huureenwebsite.nl` (en `www.huureenwebsite.nl`) toe.
3. Volg de DNS-instructies bij je domeinregistrar.

## 4. Omgevingsvariabelen (voor later)
Onder Settings -> Environment Variables zet je straks (fase 2, Stripe):
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

Zonder deze keys werkt de site gewoon; alleen de online betaalstap is dan nog
niet actief (de knop toont een nette melding).

## 5. Na livegang
- Google Analytics begint automatisch data te verzamelen (het meet-ID zit al in
  de code, en laadt pas na cookie-toestemming).
- Dien de sitemap in bij Google Search Console: `https://huureenwebsite.nl/sitemap.xml`.

## Handig om te weten
- Elke `git push` naar `main` deployt automatisch een nieuwe versie.
- Lokaal draaien: `npm install` en dan `npm run dev` (http://localhost:3000).
- Productie testen: `npm run build`.
