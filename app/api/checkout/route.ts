import { NextResponse } from "next/server";
import Stripe from "stripe";
import { pakketten, site } from "@/lib/site";
import { cartAddons } from "@/lib/addons";

type OrderAddon = { id: string; aantal: number };
type Order = { pakket?: string; addons?: OrderAddon[] };

// Fase 2: echte Stripe Checkout. Actief zodra STRIPE_SECRET_KEY is ingesteld
// (in Vercel). Zonder sleutel geven we netjes terug dat betalen nog niet aan staat.
export async function POST(request: Request) {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    return NextResponse.json({
      configured: false,
      message:
        "De online betaling wordt binnenkort geactiveerd. Wil je nu al starten? Plan een gratis adviesgesprek, dan regelen we het samen.",
    });
  }

  let order: Order;
  try {
    order = (await request.json()) as Order;
  } catch {
    return NextResponse.json({ error: "Ongeldige bestelling." }, { status: 400 });
  }

  // Pakket server-side opzoeken (nooit op client-bedragen vertrouwen).
  const pakket = pakketten.find(
    (p) => p.naam.toLowerCase() === (order.pakket ?? "").toLowerCase()
  );
  if (!pakket) {
    return NextResponse.json({ error: "Onbekend pakket." }, { status: 400 });
  }

  // 21% btw automatisch laten berekenen door Stripe Tax. Standaard UIT, zodat de
  // checkout meteen werkt zonder dat Stripe Tax al is ingesteld. Zet STRIPE_TAX=true
  // in Vercel zodra je Stripe Tax hebt geconfigureerd (btw-registratie NL).
  const belastingAan = process.env.STRIPE_TAX === "true";
  const centen = (n: number) => Math.round(n * 100);

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  // 1. Maandbedrag: het pakket zelf.
  lineItems.push({
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: centen(pakket.prijs),
      tax_behavior: "exclusive",
      recurring: { interval: "month" },
      product_data: { name: `Pakket ${pakket.naam} (website huren)` },
    },
  });

  // 2. Gekozen add-ons (server-side opgezocht, aantal geklemd).
  const gekozen = (order.addons ?? [])
    .map((a) => ({
      addon: cartAddons.find((c) => c.id === a.id),
      aantal: Math.max(0, Math.min(25, Math.floor(Number(a.aantal) || 0))),
    }))
    .filter(
      (x): x is { addon: (typeof cartAddons)[number]; aantal: number } =>
        Boolean(x.addon) && x.aantal > 0
    );

  for (const { addon, aantal } of gekozen) {
    const eenmalig = addon.cartType === "eenmalig";
    lineItems.push({
      quantity: aantal,
      price_data: {
        currency: "eur",
        unit_amount: centen(addon.bedrag ?? 0),
        tax_behavior: "exclusive",
        ...(eenmalig ? {} : { recurring: { interval: "month" } }),
        product_data: { name: addon.naam },
      },
    });
  }

  // 3. Eenmalige opstartkosten (op de eerste factuur).
  lineItems.push({
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: centen(site.setupFee),
      tax_behavior: "exclusive",
      product_data: { name: "Eenmalige opstartkosten" },
    },
  });

  const origin = request.headers.get("origin") ?? site.url;
  const stripe = new Stripe(key);

  // De maandelijkse incasso start pas na 2 weken. De opstartkosten en eenmalige
  // extra's worden wél direct betaald (via iDEAL, waarmee meteen de SEPA-
  // machtiging wordt gezet). billing_cycle_anchor in de toekomst +
  // proration_behavior "none" = geen kosten voor de periode tot de eerste incasso.
  const INCASSO_START_DAGEN = 14;
  const incassoStart =
    Math.floor(Date.now() / 1000) + INCASSO_START_DAGEN * 24 * 60 * 60;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      // iDEAL/Bancontact = eerste betaling; Stripe maakt automatisch een
      // SEPA-incassomachtiging aan voor de maandelijkse afschrijvingen.
      payment_method_types: ["ideal", "bancontact", "card", "sepa_debit"],
      line_items: lineItems,
      billing_address_collection: "required",
      locale: "nl",
      automatic_tax: { enabled: belastingAan },
      subscription_data: {
        billing_cycle_anchor: incassoStart,
        proration_behavior: "none",
        metadata: {
          merk: "huureenwebsite",
          pakket: pakket.naam,
          incasso_start_na_dagen: String(INCASSO_START_DAGEN),
        },
      },
      metadata: {
        merk: "huureenwebsite",
        pakket: pakket.naam,
        addons:
          gekozen.map((g) => `${g.addon.id}x${g.aantal}`).join(", ") || "geen",
      },
      success_url: `${origin}/afrekenen/gelukt?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/afrekenen?pakket=${pakket.naam.toLowerCase()}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "De betaalsessie kon niet worden gestart. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
