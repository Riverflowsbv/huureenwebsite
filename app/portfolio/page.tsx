import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { projecten } from "@/lib/projecten";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Portfolio: websites die wij bouwden",
  description:
    "Bekijk ons eerdere werk: maatwerk websites en webshops voor ondernemers door heel Nederland.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Ons werk</h1>
          <p className="lead">
            Elke website die we bouwen is maatwerk: snel, strak en gemaakt om
            klanten op te leveren. Een greep uit onze projecten.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div
            className="cards"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: 0 }}
          >
            {projecten.map((p) => {
              const inner = (
                <>
                  <div
                    className="mockup"
                    style={{ transform: "none", marginBottom: 24 }}
                  >
                    <div className="mockup-bar">
                      <span className="dot" style={{ background: "#ff5f57" }} />
                      <span className="dot" style={{ background: "#febc2e" }} />
                      <span className="dot" style={{ background: "#28c840" }} />
                      <div className="mockup-url">
                        {p.echt && p.liveUrl
                          ? p.liveUrl.replace("https://", "")
                          : "www.klantwebsite.nl"}
                      </div>
                    </div>
                    <div className="mockup-body">
                      <div
                        className="sk sk-hero"
                        style={{
                          background: `linear-gradient(135deg, ${p.kleur}, ${p.accent})`,
                        }}
                      >
                        {p.naam}
                      </div>
                      <div className="sk-row">
                        <div className="sk" />
                        <div className="sk" />
                      </div>
                    </div>
                  </div>
                  <div className="case-meta">
                    <h3>{p.naam}</h3>
                    {p.echt && <span className="case-badge">Case</span>}
                  </div>
                  <p>
                    {p.type}
                    {p.plaats ? ` · ${p.plaats}` : ""}
                  </p>
                  {p.echt && (
                    <p className="case-kort">{p.kort}</p>
                  )}
                  {p.echt && (
                    <span className="case-link">
                      Bekijk de case <ArrowRight size={16} />
                    </span>
                  )}
                </>
              );

              return p.echt ? (
                <Link
                  key={p.naam}
                  href={`/portfolio/${p.slug}`}
                  className="card city-card"
                >
                  {inner}
                </Link>
              ) : (
                <div key={p.naam} className="card is-placeholder">
                  {inner}
                </div>
              );
            })}
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
