import Link from "next/link";

export default function CtaBand({
  titel = "Klaar om professioneel online te gaan?",
  tekst = "Plan een gratis en vrijblijvend adviesgesprek. Binnen 15 minuten weet je precies wat een website huren voor jouw bedrijf betekent.",
  knop = "Plan gratis adviesgesprek",
}: {
  titel?: string;
  tekst?: string;
  knop?: string;
}) {
  return (
    <section style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="cta-band">
          <h2>{titel}</h2>
          <p>{tekst}</p>
          <Link href="/contact" className="btn btn-primary">
            {knop}
          </Link>
        </div>
      </div>
    </section>
  );
}
