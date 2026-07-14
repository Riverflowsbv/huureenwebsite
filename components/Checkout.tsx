"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { pakketten, site } from "@/lib/site";
import { cartAddons } from "@/lib/addons";
import { Check, Info, ArrowRight, Cross } from "@/components/icons";

function euro(n: number) {
  return `€${n.toLocaleString("nl-NL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const MAX_AANTAL = 25;

export default function Checkout() {
  const params = useSearchParams();
  const startPakket = params.get("pakket")?.toLowerCase();

  const [pakketNaam, setPakketNaam] = useState(
    pakketten.find((p) => p.naam.toLowerCase() === startPakket)?.naam ??
      pakketten[0].naam
  );
  // Aantal per add-on. 0 = niet gekozen. Voor vinkjes is het 0 of 1.
  const [aantal, setAantal] = useState<Record<string, number>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [bezig, setBezig] = useState(false);
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  // Sluit de info-popover als je ergens buiten de geopende kaart klikt.
  useEffect(() => {
    if (!infoOpen) return;
    const sluitBijBuitenklik = (e: PointerEvent) => {
      const doel = e.target as HTMLElement | null;
      if (doel?.closest(".pakket-optie-wrap.info-open")) return;
      setInfoOpen(null);
    };
    document.addEventListener("pointerdown", sluitBijBuitenklik);
    return () =>
      document.removeEventListener("pointerdown", sluitBijBuitenklik);
  }, [infoOpen]);

  const pakket = pakketten.find((p) => p.naam === pakketNaam)!;
  const maandAddons = cartAddons.filter((a) => a.cartType === "maandelijks");
  const eenmaligAddons = cartAddons.filter((a) => a.cartType === "eenmalig");

  const qty = (id: string) => aantal[id] ?? 0;
  const clamp = (n: number) => Math.min(MAX_AANTAL, Math.max(0, n));
  const changeQty = (id: string, delta: number) =>
    setAantal((a) => ({ ...a, [id]: clamp((a[id] ?? 0) + delta) }));
  const toggle = (id: string) =>
    setAantal((a) => ({ ...a, [id]: (a[id] ?? 0) > 0 ? 0 : 1 }));
  const verwijder = (id: string) =>
    setAantal((a) => ({ ...a, [id]: 0 }));

  const { maandTotaal, eenmaligTotaal } = useMemo(() => {
    const som = (list: typeof cartAddons) =>
      list.reduce((s, a) => s + (a.bedrag ?? 0) * qty(a.id), 0);
    return {
      maandTotaal: pakket.prijs + som(maandAddons),
      eenmaligTotaal: site.setupFee + som(eenmaligAddons),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pakket.prijs, aantal, maandAddons, eenmaligAddons]);

  async function afrekenen() {
    setBezig(true);
    setStatus(null);
    const order = {
      pakket: pakket.naam,
      addons: cartAddons
        .filter((a) => qty(a.id) > 0)
        .map((a) => ({ id: a.id, aantal: qty(a.id) })),
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
        window.location.href = data.url;
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

  const renderAddon = (a: (typeof cartAddons)[number], eenmalig: boolean) => {
    const n = qty(a.id);
    const gekozen = n > 0;
    const per = eenmalig ? "eenmalig" : "p/mnd";
    const control = a.perStuk ? (
      <div className="qty-stepper" aria-label={`Aantal ${a.naam}`}>
        <button
          type="button"
          onClick={() => changeQty(a.id, -1)}
          disabled={n === 0}
          aria-label="Minder"
        >
          −
        </button>
        <span>{n}</span>
        <button
          type="button"
          onClick={() => changeQty(a.id, 1)}
          aria-label="Meer"
        >
          +
        </button>
      </div>
    ) : (
      <input
        type="checkbox"
        className="addon-check"
        checked={gekozen}
        onChange={() => toggle(a.id)}
        aria-label={`${a.naam} toevoegen`}
      />
    );

    return (
      <div
        key={a.id}
        className={`addon-optie${gekozen ? " actief" : ""}`}
      >
        <span className="addon-optie-tekst">
          <span className="addon-optie-naam">{a.naam}</span>
          <span className="addon-optie-desc">{a.beschrijving}</span>
        </span>
        <span className="addon-optie-right">
          <span className="addon-optie-prijs">
            +{euro(a.bedrag ?? 0)}
            <small> {per}</small>
          </span>
          {control}
        </span>
      </div>
    );
  };

  const gekozenAddons = (list: typeof cartAddons) =>
    list.filter((a) => qty(a.id) > 0);

  return (
    <section className="white">
      <div className="container">
        <div className="checkout-grid">
          <div className="checkout-config">
            <div className="checkout-block">
              <h2>1. Je pakket</h2>
              <div className="pakket-keuze">
                {pakketten.map((p) => {
                  const website = p.groepen.find((g) => g.label === "Website");
                  const onderhoud = p.groepen.find(
                    (g) => g.label === "Onderhoud"
                  );
                  const infoItems = [
                    ...(website?.items ?? []),
                    ...(onderhoud?.items ?? []),
                  ];
                  const open = infoOpen === p.naam;
                  return (
                    <div
                      key={p.naam}
                      className={`pakket-optie-wrap${open ? " info-open" : ""}`}
                    >
                      <button
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
                      <button
                        type="button"
                        className="pakket-info-btn"
                        aria-label={`Wat zit er in pakket ${p.naam}?`}
                        aria-expanded={open}
                        onClick={() => setInfoOpen(open ? null : p.naam)}
                      >
                        <Info size={18} />
                      </button>
                      <div
                        className="pakket-info-pop"
                        role="region"
                        aria-label={`Inhoud pakket ${p.naam}`}
                      >
                        <button
                          type="button"
                          className="pakket-info-close"
                          aria-label="Sluiten"
                          onClick={() => setInfoOpen(null)}
                        >
                          <Cross size={15} />
                        </button>
                        <div className="pakket-info-pop-title">
                          Dit zit in {p.naam}
                        </div>
                        <ul>
                          {infoItems.map((item) => (
                            <li key={item.tekst}>
                              <Check className="ic-check" size={15} />
                              {item.tekst}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/website-huren#pakketten"
                          className="pakket-info-pop-link"
                        >
                          Volledige vergelijking <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="checkout-block">
              <h2>2. Voeg extra&apos;s toe</h2>
              <p className="sub" style={{ marginBottom: 20 }}>
                Optioneel. Bij mailboxen, gebruikers en pagina&apos;s kies je
                zelf het aantal.
              </p>

              <h3 className="addon-sub">Doorlopend (per maand)</h3>
              <div className="addon-keuze">
                {maandAddons.map((a) => renderAddon(a, false))}
              </div>

              <h3 className="addon-sub">Eenmalig</h3>
              <div className="addon-keuze">
                {eenmaligAddons.map((a) => renderAddon(a, true))}
              </div>

              <p className="checkout-offerte-note">
                Zoek je SEO, advertenties, een logo of een webshop? Die stellen
                we op maat samen. Bekijk de{" "}
                <Link href="/aanvullende-diensten">aanvullende diensten</Link>{" "}
                of zet ze erbij in een gesprek.
              </p>
            </div>
          </div>

          <aside className="checkout-summary">
            <div className="checkout-summary-card">
              <h2>Je bestelling</h2>

              <div className="sum-section">
                <div className="sum-section-title">Maandelijks</div>
                <div className="sum-row">
                  <span>Pakket {pakket.naam}</span>
                  <span>{euro(pakket.prijs)}</span>
                </div>
                {gekozenAddons(maandAddons).map((a) => (
                  <div className="sum-row" key={a.id}>
                    <span>
                      {a.naam}
                      {qty(a.id) > 1 ? ` × ${qty(a.id)}` : ""}
                    </span>
                    <span className="sum-row-right">
                      {euro((a.bedrag ?? 0) * qty(a.id))}
                      <button
                        type="button"
                        className="sum-remove"
                        onClick={() => verwijder(a.id)}
                        aria-label={`${a.naam} verwijderen`}
                      >
                        <Cross size={13} />
                      </button>
                    </span>
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
                {gekozenAddons(eenmaligAddons).map((a) => (
                  <div className="sum-row" key={a.id}>
                    <span>
                      {a.naam}
                      {qty(a.id) > 1 ? ` × ${qty(a.id)}` : ""}
                    </span>
                    <span className="sum-row-right">
                      {euro((a.bedrag ?? 0) * qty(a.id))}
                      <button
                        type="button"
                        className="sum-remove"
                        onClick={() => verwijder(a.id)}
                        aria-label={`${a.naam} verwijderen`}
                      >
                        <Cross size={13} />
                      </button>
                    </span>
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
