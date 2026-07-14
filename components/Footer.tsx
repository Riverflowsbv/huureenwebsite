import Link from "next/link";
import { site } from "@/lib/site";
import { steden } from "@/lib/steden";
import { ArrowRight } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              HuurEen<span>Website</span>.nl
            </div>
            <p style={{ fontSize: "14.5px", maxWidth: 280 }}>
              Professionele websites voor een vast bedrag per maand. Onderdeel
              van {site.bv}
            </p>
          </div>
          <details className="foot-col">
            <summary className="foot-h">Diensten</summary>
            <ul>
              <li><Link href="/website-huren">Website huren</Link></li>
              <li><Link href="/website-vanaf-199">Website vanaf €199</Link></li>
              <li><Link href="/website-laten-maken">Website laten maken</Link></li>
              <li><Link href="/hosting-en-onderhoud">Hosting &amp; onderhoud</Link></li>
              <li><Link href="/seo">SEO-optimalisatie</Link></li>
              <li><Link href="/aanvullende-diensten">Aanvullende diensten</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </details>
          <details className="foot-col">
            <summary className="foot-h">Werkgebied</summary>
            <ul>
              {steden.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/website-laten-maken/${s.slug}`}>
                    Website laten maken {s.naam}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/website-laten-maken" className="foot-link-arrow">
                  Heel Nederland <ArrowRight size={15} />
                </Link>
              </li>
            </ul>
          </details>
          <details className="foot-col">
            <summary className="foot-h">Contact</summary>
            <ul>
              <li>{site.adres}</li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.telefoonLink}>{site.telefoon}</a></li>
              <li><Link href="/contact">Plan een gesprek</Link></li>
            </ul>
          </details>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {site.naam} · {site.bv}</span>
          <span>
            <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link> ·{" "}
            <Link href="/privacyverklaring">Privacyverklaring</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
