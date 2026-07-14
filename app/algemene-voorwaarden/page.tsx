import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "De algemene voorwaarden van HuurEenWebsite.nl (River Flows B.V.) voor het huren, laten maken, hosten en optimaliseren van websites.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaarden() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Algemene voorwaarden</h1>
          <p className="lead">
            Deze voorwaarden zijn van toepassing op alle diensten van {site.naam}
            , een handelsnaam van {site.bv}.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="prose">
            <p>
              <strong>Laatst bijgewerkt:</strong> {new Date().getFullYear()}
            </p>

            <h2>1. Definities</h2>
            <ul>
              <li>
                <strong>Wij / ons:</strong> {site.bv}, handelend onder de naam{" "}
                {site.naam}, KvK-nummer {site.kvk}.
              </li>
              <li>
                <strong>Klant:</strong> de natuurlijke of rechtspersoon die met
                ons een overeenkomst aangaat.
              </li>
              <li>
                <strong>Huurwebsite:</strong> een website die wij bouwen,
                hosten en onderhouden tegen een vast bedrag per maand.
              </li>
            </ul>

            <h2>2. Toepasselijkheid</h2>
            <p>
              Deze voorwaarden gelden voor alle offertes, overeenkomsten en
              diensten van {site.naam}. Afwijkingen gelden alleen als deze
              schriftelijk zijn overeengekomen.
            </p>

            <h2>3. Aanbod en overeenkomst</h2>
            <p>
              Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders
              vermeld. Een overeenkomst komt tot stand na schriftelijke of
              digitale bevestiging door beide partijen.
            </p>

            <h2>4. Website huren: looptijd en opzegging</h2>
            <ul>
              <li>
                Een huurovereenkomst heeft een minimale looptijd van 6 maanden.
              </li>
              <li>
                Na de minimale looptijd is de overeenkomst maandelijks opzegbaar,
                met een opzegtermijn van één kalendermaand.
              </li>
              <li>
                Opzeggen kan schriftelijk of per e-mail via{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </li>
            </ul>

            <h2>5. Eigendom en overname</h2>
            <ul>
              <li>
                Gedurende de huurperiode blijft de door ons ontwikkelde website
                (inclusief broncode en technische opzet) ons eigendom.
              </li>
              <li>
                De domeinnaam, aangeleverde teksten, logo&apos;s en
                beeldmateriaal van de klant blijven eigendom van de klant.
              </li>
              <li>
                De klant kan de website op elk moment overnemen tegen een vooraf
                afgesproken afkoopsom. Na volledige betaling worden de bestanden
                en rechten overgedragen.
              </li>
            </ul>

            <h2>6. Prijzen en betaling</h2>
            <ul>
              <li>Alle genoemde prijzen zijn exclusief btw, tenzij anders vermeld.</li>
              <li>
                Voor een huurwebsite gelden eenmalige opstartkosten van €199,
                te voldoen bij aanvang van de overeenkomst.
              </li>
              <li>
                Maandbedragen worden vooraf gefactureerd. Betaling vindt plaats
                binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
              </li>
              <li>
                Bij te late betaling kunnen wij de dienstverlening opschorten na
                een betalingsherinnering. Wettelijke rente en incassokosten
                kunnen in rekening worden gebracht.
              </li>
            </ul>

            <h2>7. Uitvoering en oplevering</h2>
            <p>
              Wij spannen ons in om de website vakkundig en binnen de afgesproken
              termijn op te leveren. Genoemde doorlooptijden (zoals &quot;binnen
              1 week live&quot;) zijn indicatief en afhankelijk van tijdige
              aanlevering van informatie door de klant.
            </p>

            <h2>8. Hosting, onderhoud en beschikbaarheid</h2>
            <p>
              Wij streven naar een hoge beschikbaarheid van gehoste websites,
              maar kunnen geen ononderbroken beschikbaarheid garanderen. Onderhoud
              en updates voeren wij uit als onderdeel van de huur- of
              onderhoudsovereenkomst.
            </p>

            <h2>9. Aansprakelijkheid</h2>
            <p>
              Onze aansprakelijkheid is beperkt tot het bedrag dat in het
              betreffende geval door onze verzekering wordt uitgekeerd, of, bij
              gebreke daarvan, tot maximaal het factuurbedrag over de laatste drie
              maanden. Wij zijn niet aansprakelijk voor indirecte schade, zoals
              gederfde omzet of gemiste besparingen.
            </p>

            <h2>10. Intellectueel eigendom</h2>
            <p>
              Aangeleverd materiaal blijft eigendom van de klant. De klant staat
              ervoor in dat hij beschikt over de benodigde rechten op aangeleverde
              teksten en afbeeldingen en vrijwaart ons voor aanspraken van derden.
            </p>

            <h2>11. Toepasselijk recht</h2>
            <p>
              Op alle overeenkomsten is Nederlands recht van toepassing.
              Geschillen worden voorgelegd aan de bevoegde rechter in het
              arrondissement waar {site.bv} is gevestigd.
            </p>

            <h2>12. Contact</h2>
            <p>
              Vragen over deze voorwaarden? Neem contact op via{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <p>
              <em>
                Dit is een algemeen model. Laat deze voorwaarden, en met name de
                lease-specifieke bepalingen over eigendom, opzegging en afkoop,
                vóór livegang juridisch controleren.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
