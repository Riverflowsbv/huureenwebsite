import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { CheckCircle } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bedankt voor je bestelling",
  robots: { index: false, follow: false },
};

export default function Gelukt() {
  return (
    <section className="white">
      <div className="container center" style={{ maxWidth: 640 }}>
        <div style={{ color: "var(--green)", display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <CheckCircle size={64} />
        </div>
        <h1>Gelukt! Bedankt voor je bestelling.</h1>
        <p className="sub" style={{ margin: "16px auto 0" }}>
          Je betaling is gelukt en je machtiging voor de maandelijkse incasso is
          geregeld. Je ontvangt een bevestiging per e-mail met de factuur.
        </p>
        <p className="sub" style={{ margin: "16px auto 0" }}>
          We nemen binnen één werkdag contact met je op om je website te starten.
          Vragen? Mail ons op{" "}
          <a href={`mailto:${site.email}`} style={{ color: "var(--blue)", fontWeight: 700 }}>
            {site.email}
          </a>
          .
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-primary">
            Terug naar de website
          </Link>
        </div>
      </div>
    </section>
  );
}
