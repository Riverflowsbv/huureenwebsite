import { NextResponse } from "next/server";

// Fase 2: hier wordt de Stripe Checkout Session aangemaakt.
// Werkt zodra STRIPE_SECRET_KEY (en de Stripe-producten/prijzen) zijn ingesteld
// en de site live op Vercel staat. Zolang dat er niet is, geven we netjes terug
// dat de betaalstap nog niet actief is.
export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;

  // Order uitlezen (voor later gebruik bij de Stripe-sessie).
  try {
    await request.json();
  } catch {
    // geen geldige body, niet erg voor de stub
  }

  if (!key) {
    return NextResponse.json({
      configured: false,
      message:
        "De online betaling wordt binnenkort geactiveerd. Wil je nu al starten? Plan een gratis adviesgesprek, dan regelen we het samen.",
    });
  }

  // TODO fase 2: Stripe Checkout Session aanmaken
  // - subscription-mode voor het maandbedrag (pakket + doorlopende add-ons)
  // - eenmalige regel(s) voor opstartkosten + eenmalige add-ons
  // - betaalmethoden: iDEAL (eerste betaling) + SEPA-incasso (recurring)
  // - success_url / cancel_url
  return NextResponse.json({
    configured: false,
    message: "Stripe-integratie volgt (fase 2).",
  });
}
