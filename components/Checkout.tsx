"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { pakketten, site } from "@/lib/site";
import { cartAddons } from "@/lib/addons";
import { Check } from "@/components/icons";

function euro(n: number) {
  return `€${n.toLocaleString("nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function Checkout() {
  const params = useSearchParams();
  const startPakket = params.get("pakket")?.toLowerCase();

  const [pakketNaam, setPakketNaam] = useState(
    pakketten.find((p) => p.naam.toLowerCase() === startPakket)?.naam ??
      pakketten[0].naam
  );
  const [gekozen, setGekozen] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [bezig, setBezig] = useState(false);

  const pakket = pakketten.find((p) => p.naam === pakketNaam)!;

  const maandAddons = cartAddons.filter((a) => a.cartType === "maandelijks");
  const eenmaligAddons = cartAddons.filter((a) => a.cartType === "eenmalig");

  const toggle = (id: string) =>
    setGekozen((g) =>
      g.includes(id) ? g.filter((x) => x !== id) : [...g, id]
    );

  const { maandTotaal, eenmaligTotaal } = useMemo(() => {
    const maandExtra = maandAddons
      .filter((a) => gekozen.includes(a.id))
      .reduce((s, a) => s + (a.bedrag ?? 0), 0);
    const eenmaligExtra = eenmaligAddons
      .filter((a) => gekozen.includes(a.id))
      .reduce((s, a) => s + (a.bedrag ?? 0), 0);
    return {
      maandTotaal: pakket.prijs + maandExtra,
      eenmaligTotaal: site.setupFee + eenmaligExtra,
    };
  }, [pakket.prijs, gekozen, maandAddons, eenmaligAddons]);

  async function afrekenen() {
    setBezig(true);
    setStatus(null);
    const order = {
      pakket: pakket.naam,
      addons: gekozen,
      maandTotaal,
      eenmaligTotaal,
    };
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Stripe Checkout (fase 2)
      } else {
        setStatus(
          data.message ??
            "De betaalstap wordt binnenkort geactiveerd. Neem gerust contact op om alvast te starten."
        );
      }
    } catch {
      setStatus(
        "Er ging iets mis. Neem gerust contact op, dan regelen we het samen."
      );
    } finally {
      setBezig(false);
    }
  }

  return (
    <section className="white">
      <div className="container">
        <div className="checkout-grid">
          {/* Configuratie */}
          <div className="checkout-config">
            <div className="checkout-block">
              <h2>1. Je pakket</h2>
              <div className="pakket-keuze">
                {pakketten.map((p) => (
                  <button
                    key={p.naam}
                    type="button"
                    className={`pakket-optie${
                      p.naam === pakketNaam ? " actief" : ""
                    }`}
                    onClick={() => setPakketNaam(p.naam)}
                  >
                    <span className="pakket-optie-naam">{p.naam}</span>
                    <span className="pakket-optie-prijs">
                      {euro(p.prijs)} <small>p/mnd</small>
                    </span>
                    <span className="pakket-optie-voor">{p.voor}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="checkout-block">
              <h2>2. Voeg extra's toe</h2>
              <p className="sub" style={{ marginBottom: 20 }}>
                Optioneel. Je kunt dit later ook nog aanpassen.
              </p>

              <h3 className="addon-sub">Doorlopend (per maand)</h3>
              <div className="addon-keuze">
                {maandAddons.map((a) => (
                  <label
                    key={a.id}
                    className={`addon-optie${
                      gekozen.includes(a.id) ? " actief" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={gekozen.includes(a.id)}
                      onChange={() => toggle(a.id)}
                    />
                    <span className="addon-optie-tekst">
                      <span className="addon-optie-naam">{a.naam}</span>
                      <span className="addon-optie-desc">{a.beschrijving}</span>
                    </span>
                    <span className="addon-optie-prijs">
                      +{euro(a.bedrag ?? 0)}
                      <small> p/mnd</small>
                    </span>
                  </label>
                ))}
              </div>

              <h3 className="addon-sub">Eenmalig</h3>
              <div className="addon-keuze">
                {eenmaligAddons.map((a) => (
                  <label
                    key={a.id}
                    className={`addon-optie${
                      gekozen.includes(a.id) ? " actief" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={gekozen.includes(a.id)}
                      onChange={() => toggle(a.id)}
                    />
                    <span className="addon-optie-tekst">
                      <span className="addon-optie-naam">{a.naam}</span>
                      <span className="addon-optie-desc">{a.beschrijving}</span>
                    </span>
                    <span className="addon-optie-prijs">
                      +{euro(a.bedrag ?? 0)}
                      <small> eenmalig</small>
                    </span>
                  </label>
                ))}
              </div>

              <p className="checkout-offerte-note">
                Zoek je SEO, advertenties, een logo of een webshop? Die stellen
                we op maat samen. Bekijk de{" "}
                <Link href="/aanvullende-diensten">aanvullende diensten</Link>{" "}
                of zet ze erbij in een gesprek.
              </p>
            </div>
          </div>

          {/* Overzicht */}
          <aside className="checkout-summary">
            <div className="checkout-summary-card">
              <h2>Je bestelling</h2>

              <div className="sum-section">
                <div className="sum-section-title">Maandelijks</div>
                <div className="sum-row">
                  <span>Pakket {pakket.naam}</span>
                  <span>{euro(pakket.prijs)}</span>
                </div>
                {maandAddons
                  .filter((a) => gekozen.includes(a.id))
                  .map((a) => (
                    <div className="sum-row" key={a.id}>
                      <span>{a.naam}</span>
                      <span>{euro(a.bedrag ?? 0)}</span>
                    </div>
                  ))}
                <div className="sum-row sum-total">
                  <span>Per maand</span>
                  <span>{euro(maandTotaal)}</span>
                </div>
              </div>

              <div className="sum-section">
                <div className="sum-section-title">Vandaag eenmalig</div>
                <div className="sum-row">
                  <span>Opstartkosten</span>
                  <span>{euro(site.setupFee)}</span>
                </div>
                {eenmaligAddons
                  .filter((a) => gekozen.includes(a.id))
                  .map((a) => (
                    <div className="sum-row" key={a.id}>
                      <span>{a.naam}</span>
                      <span>{euro(a.bedrag ?? 0)}</span>
                    </div>
                  ))}
                <div className="sum-row sum-total">
                  <span>Nu te betalen</span>
                  <span>{euro(eenmaligTotaal)}</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={afrekenen}
                disabled={bezig}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {bezig ? "Even geduld…" : "Doorgaan naar betalen"}
              </button>

              {status && <p className="checkout-status">{status}</p>}

              <ul className="checkout-fine">
                <li>
                  <Check className="ic-check" size={15} /> Prijzen excl. btw
                </li>
                <li>
                  <Check className="ic-check" size={15} /> Betaal direct via
                  iDEAL, daarna automatische incasso (SEPA)
                </li>
                <li>
                  <Check className="ic-check" size={15} /> Minimaal{" "}
                  {site.minMaanden} maanden, daarna maandelijks opzegbaar
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
