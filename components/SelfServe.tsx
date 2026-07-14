import { Check } from "@/components/icons";

const punten = [
  "Teksten en pagina's bijwerken",
  "Foto's en projecten toevoegen",
  "Reviews plaatsen",
  "Geen technische kennis nodig",
];

export default function SelfServe({
  titel = "Zelf aanpassen? Net zo makkelijk als een mailtje.",
  sub = "Na livegang beheer je je website zelf via een gebruiksvriendelijk systeem, of je laat alles aan ons over. Jij kiest.",
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
              En wil je iets liever niet zelf doen? Eén appje of mailtje en wij
              regelen het, meestal dezelfde dag nog.
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
