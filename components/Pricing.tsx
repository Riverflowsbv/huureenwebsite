import Link from "next/link";
import { pakketten, site } from "@/lib/site";
import { Check } from "@/components/icons";

export default function Pricing() {
  return (
    <section className="pricing" id="pakketten">
      <div className="container center">
        <h2>Kies je pakket</h2>
        <p className="sub">
          Altijd inclusief ontwerp, hosting, onderhoud, mailadres en
          vindbaarheid in Google. Geen verborgen kosten.
        </p>
        <div className="plans left">
          {pakketten.map((p, i) => (
            <div
              key={p.naam}
              className={`plan${p.populair ? " popular" : ""}`}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.populair && <div className="pop-badge">Meest gekozen</div>}
              <h3>{p.naam}</h3>
              <p className="for">{p.voor}</p>
              <div className="price">
                €{p.prijs}
                <small> /maand excl. btw</small>
              </div>
              <div className="price-setup">+ eenmalig €{site.setupFee} opstartkosten</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check className="ic-check" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/afrekenen?pakket=${p.naam.toLowerCase()}`}
                className={`btn ${p.populair ? "btn-primary" : "btn-ghost"}`}
              >
                Kies {p.naam}
              </Link>
            </div>
          ))}
        </div>
        <p className="plan-note">
          Eenmalig €{site.setupFee} opstartkosten. Minimaal {site.minMaanden}{" "}
          maanden, daarna maandelijks opzegbaar. Later je website overnemen? Dat
          kan altijd.
        </p>
        <p className="plan-note">
          Meer nodig, zoals SEO, extra pagina&apos;s of een webshop? Bekijk onze{" "}
          <Link href="/aanvullende-diensten">aanvullende diensten</Link>.
        </p>
      </div>
    </section>
  );
}
