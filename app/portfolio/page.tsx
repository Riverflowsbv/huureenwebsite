import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import SitePreview from "@/components/SitePreview";
import { projecten, echteCases } from "@/lib/projecten";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Portfolio: websites die wij bouwden",
  description:
    "Bekijk ons eerdere werk: maatwerk websites en webshops voor ondernemers door heel Nederland, met een echte live preview.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  const featured = echteCases[0];
  const overige = projecten.filter((p) => p !== featured);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Ons werk</h1>
          <p className="lead">
            Elke website die we bouwen is maatwerk: snel, strak en gemaakt om
            klanten op te leveren. Bekijk hieronder een echte live preview van
            ons werk.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          {/* Uitgelichte case met echte live preview */}
          {featured && (
            <Link
              href={`/portfolio/${featured.slug}`}
              className="case-featured"
              aria-label={`Bekijk de case van ${featured.naam}`}
            >
              <div className="case-featured-preview">
                <SitePreview
                  url={featured.liveUrl}
                  naam={featured.naam}
                  kleur={featured.kleur}
                  accent={featured.accent}
                />
              </div>
              <div
                className="case-featured-info"
                style={{
                  background: `linear-gradient(150deg, ${featured.kleur}, ${featured.accent})`,
                }}
              >
                <span className="case-featured-tag">
                  <Check size={15} /> Uitgelichte case
                </span>
                <h2>{featured.naam}</h2>
                <p className="case-featured-sector">
                  {featured.type}
                  {featured.plaats ? ` · ${featured.plaats}` : ""}
                </p>
                <p className="case-featured-kort">{featured.kort}</p>
                <span className="case-featured-cta">
                  Bekijk de volledige case <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          )}

          {/* Overige projecten */}
          <div className="portfolio-more">
            <h2>Meer projecten</h2>
            <p className="sub">
              We werken continu aan nieuwe websites. Deze cases komen er
              binnenkort bij.
            </p>
          </div>
          <div className="soon-grid">
            {overige.map((p, i) => (
              <div
                key={i}
                className="soon-card"
                style={{
                  background: `linear-gradient(150deg, ${p.kleur}, ${p.accent})`,
                }}
              >
                <span className="soon-badge">Binnenkort</span>
                <div className="soon-browser" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="soon-meta">
                  <h3>{p.type}</h3>
                  <p>Een nieuwe case is in de maak.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        titel="Wil jij hier ook tussen staan?"
        tekst="Plan een gratis adviesgesprek en ontdek wat een professionele website voor jouw bedrijf doet."
      />
    </>
  );
}
