import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { projecten, echteCases } from "@/lib/projecten";
import { site } from "@/lib/site";
import { Check, ArrowRight } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return echteCases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projecten.find((x) => x.slug === slug && x.echt);
  if (!p) return {};
  return {
    title: `${p.naam}: website case ${p.plaats}`,
    description: p.intro,
    alternates: { canonical: `/portfolio/${p.slug}` },
  };
}

export default async function CasePagina({ params }: Props) {
  const { slug } = await params;
  const p = projecten.find((x) => x.slug === slug && x.echt);
  if (!p) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${site.url}/portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: p.naam,
        item: `${site.url}/portfolio/${p.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <Check size={16} /> {p.sector} · {p.plaats}
          </div>
          <h1>{p.naam}</h1>
          <p className="lead">{p.intro}</p>
          <div className="hero-cta">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Bekijk de live website
              </a>
            )}
            <Link href="/contact" className="btn btn-ghost">
              Zoiets voor jouw bedrijf?
            </Link>
          </div>
        </div>
      </div>

      {/* Preview */}
      <section className="white" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div
            className="mockup case-mockup"
            style={{ transform: "none", maxWidth: 900, margin: "0 auto" }}
          >
            <div className="mockup-bar">
              <span className="dot" style={{ background: "#ff5f57" }} />
              <span className="dot" style={{ background: "#febc2e" }} />
              <span className="dot" style={{ background: "#28c840" }} />
              <div className="mockup-url">
                {p.liveUrl ? p.liveUrl.replace("https://", "") : ""}
              </div>
            </div>
            <div className="mockup-body">
              <div
                className="sk sk-hero"
                style={{
                  height: 220,
                  background: `linear-gradient(135deg, ${p.kleur}, ${p.accent})`,
                }}
              >
                {p.naam}
              </div>
              <div className="sk-row">
                <div className="sk" />
                <div className="sk" />
                <div className="sk" />
              </div>
              <div className="sk sk-line" />
              <div className="sk sk-line short" />
            </div>
          </div>
        </div>
      </section>

      {/* Case content */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="case-grid">
            <div className="case-blocks">
              <div className="case-block">
                <h2>De uitdaging</h2>
                <p>{p.uitdaging}</p>
              </div>
              <div className="case-block">
                <h2>Onze aanpak</h2>
                <p>{p.aanpak}</p>
              </div>
              <div className="case-block">
                <h2>Het resultaat</h2>
                <p>{p.resultaat}</p>
              </div>
            </div>

            <aside className="case-side">
              <div className="case-side-card">
                <h3>Wat we leverden</h3>
                <ul>
                  {p.diensten?.map((d) => (
                    <li key={d}>
                      <Check className="ic-check" size={17} /> {d}
                    </li>
                  ))}
                </ul>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-side-link"
                  >
                    Live bekijken <ArrowRight size={15} />
                  </a>
                )}
              </div>
              <Link href="/portfolio" className="case-back">
                ← Terug naar portfolio
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        titel={`Wil jij ook zo'n website?`}
        tekst="Plan een gratis adviesgesprek. Binnen 15 minuten weet je wat een professionele website voor jouw bedrijf kan betekenen."
      />
    </>
  );
}
