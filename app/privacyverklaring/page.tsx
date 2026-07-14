import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Hoe HuurEenWebsite.nl (River Flows B.V.) omgaat met je persoonsgegevens, conform de AVG.",
  alternates: { canonical: "/privacyverklaring" },
};

export default function Privacyverklaring() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Privacyverklaring</h1>
          <p className="lead">
            {site.naam} respecteert je privacy en verwerkt je persoonsgegevens
            uitsluitend in overeenstemming met de Algemene Verordening
            Gegevensbescherming (AVG).
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="prose">
            <p>
              <strong>Laatst bijgewerkt:</strong> {new Date().getFullYear()}
            </p>

            <h2>1. Wie zijn wij?</h2>
            <p>
              {site.naam} is een handelsnaam van {site.bv}. Wij zijn
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              beschreven in deze verklaring.
            </p>
            <ul>
              <li>Bedrijf: {site.bv} ({site.naam})</li>
              <li>Adres: {site.adres}</li>
              <li>KvK-nummer: {site.kvk}</li>
              <li>
                E-mail:{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>Telefoon: {site.telefoon}</li>
            </ul>

            <h2>2. Welke gegevens verwerken wij?</h2>
            <p>
              Wij verwerken alleen de gegevens die je zelf aan ons verstrekt of
              die noodzakelijk zijn voor onze dienstverlening:
            </p>
            <ul>
              <li>
                Contactgegevens (naam, bedrijfsnaam, e-mailadres,
                telefoonnummer) die je invult via een formulier of ons toestuurt;
              </li>
              <li>
                Gegevens die nodig zijn om een offerte, overeenkomst of website
                voor je te maken en te onderhouden;
              </li>
              <li>
                Technische gegevens (zoals IP-adres en browsergegevens) via
                analytische cookies, indien je daar toestemming voor geeft.
              </li>
            </ul>

            <h2>3. Waarom verwerken wij deze gegevens?</h2>
            <ul>
              <li>Om contact met je op te nemen en je vragen te beantwoorden;</li>
              <li>
                Om onze diensten (website huren, laten maken, hosting en SEO) te
                leveren en te factureren;
              </li>
              <li>Om te voldoen aan wettelijke verplichtingen, zoals de belastingadministratie;</li>
              <li>Om onze website te verbeteren (uitsluitend met je toestemming).</li>
            </ul>

            <h2>4. Grondslag en bewaartermijn</h2>
            <p>
              Wij verwerken persoonsgegevens op basis van je toestemming, de
              uitvoering van een overeenkomst of een wettelijke verplichting. Wij
              bewaren gegevens niet langer dan noodzakelijk. Administratieve en
              fiscale gegevens bewaren wij conform de wettelijke termijn van 7
              jaar.
            </p>

            <h2>5. Delen met derden</h2>
            <p>
              Wij verkopen je gegevens nooit. Wij delen gegevens alleen met
              partijen die ons helpen onze diensten te leveren (zoals onze
              hosting- en e-mailproviders), en uitsluitend voor zover
              noodzakelijk. Met deze partijen sluiten wij
              verwerkersovereenkomsten. Gegevens worden binnen de EU verwerkt,
              tenzij anders vermeld.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Onze website gebruikt functionele cookies die nodig zijn om de site
              te laten werken. Analytische of marketingcookies plaatsen wij
              alleen met je toestemming. Je kunt cookies altijd verwijderen of
              blokkeren via je browserinstellingen.
            </p>

            <h2>7. Jouw rechten</h2>
            <p>Je hebt onder de AVG het recht om:</p>
            <ul>
              <li>je gegevens in te zien, te corrigeren of te laten verwijderen;</li>
              <li>je toestemming in te trekken;</li>
              <li>bezwaar te maken tegen de verwerking;</li>
              <li>je gegevens over te laten dragen (dataportabiliteit).</li>
            </ul>
            <p>
              Wil je gebruikmaken van een van deze rechten? Stuur een e-mail naar{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. Je hebt ook het
              recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
            </p>

            <h2>8. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om je
              gegevens te beschermen tegen verlies of onrechtmatige verwerking,
              waaronder versleutelde verbindingen (SSL) en beveiligde hosting.
            </p>

            <h2>9. Wijzigingen</h2>
            <p>
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De
              meest actuele versie vind je altijd op deze pagina.
            </p>

            <p>
              <em>
                Dit is een algemene privacyverklaring. Laat deze vóór livegang
                controleren zodat alle bedrijfsgegevens en verwerkingen juist en
                volledig zijn.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
