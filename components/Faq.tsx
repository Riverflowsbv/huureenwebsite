export type FaqItem = { vraag: string; antwoord: string };

export default function Faq({
  items,
  titel = "Veelgestelde vragen",
  sub = "Helder en eerlijk, zonder vakjargon.",
}: {
  items: FaqItem[];
  titel?: string;
  sub?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.vraag,
      acceptedAnswer: { "@type": "Answer", text: i.antwoord },
    })),
  };

  return (
    <section className="white" id="faq">
      <div className="container center">
        <h2>{titel}</h2>
        <p className="sub">{sub}</p>
        <div className="faq-list left">
          {items.map((i) => (
            <details key={i.vraag}>
              <summary>{i.vraag}</summary>
              <div>{i.antwoord}</div>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
