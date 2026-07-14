const defaultStappen = [
  {
    titel: "Vertel over je bedrijf",
    tekst:
      "In een gratis gesprek (bellen of koffie) horen we wat je doet en wat je wil bereiken. Meer hoef jij niet voor te bereiden.",
  },
  {
    titel: "Wij bouwen alles",
    tekst:
      "Ontwerp, teksten, foto's, techniek: wij maken het compleet af. Jij kijkt mee en zegt wat je ervan vindt.",
  },
  {
    titel: "Binnen 2 weken live",
    tekst:
      "Je website staat online en blijft in topconditie. Updates, beveiliging en aanpassingen? Geregeld. Voor één vast bedrag per maand.",
  },
];

export default function Steps({
  titel = "Zo simpel werkt het",
  sub = "Jij hoeft niets van websites te snappen. Dat is precies het punt.",
  stappen = defaultStappen,
}: {
  titel?: string;
  sub?: string;
  stappen?: { titel: string; tekst: string }[];
}) {
  return (
    <section id="hoe">
      <div className="container center">
        <h2>{titel}</h2>
        <p className="sub">{sub}</p>
        <div className="steps left">
          {stappen.map((s, i) => (
            <div
              key={s.titel}
              className="step"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="step-num">{i + 1}</div>
              <h3>{s.titel}</h3>
              <p>{s.tekst}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
