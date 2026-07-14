import { Check } from "@/components/icons";

const punten = [
  "Teksten en pagina's bijwerken",
  "Foto's en projecten toevoegen",
  "Reviews plaatsen",
  "Geen technische kennis nodig",
];

export default function SelfServe({
  titel = "Iets aanpassen? Net zo makkelijk als een mailtje.",
  sub = "Kleine aanpassingen horen bij je pakket: één appje of mailtje en wij regelen het, meestal dezelfde dag nog. Jij hoeft niets technisch te doen.",
}: {
  titel?: string;
  sub?: string;
}) {
  return (
    <section className="white">
      <div className="container">
        <div className="selfserve" data-reveal>
          <div className="selfserve-text">
            <h2>{titel}</h2>
            <p className="sub">{sub}</p>
            <p className="selfserve-note">
              Wil je liever zélf aan de knoppen, wanneer het jou uitkomt? Voeg
              dan ons simpele beheersysteem toe en beheer teksten, foto&apos;s en
              prijzen zelf.
            </p>
          </div>
          <ul className="selfserve-list">
            {punten.map((p) => (
              <li key={p}>
                <Check className="ic-check" size={20} /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
