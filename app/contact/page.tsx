import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Phone, Mail, Calendar, ArrowRight } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

const hasAgenda = !!site.agendaUrl;

export const metadata: Metadata = {
  title: "Contact: plan een gratis adviesgesprek",
  description:
    "Vragen over een website huren, laten maken, hosting of SEO? Plan een gratis adviesgesprek of stuur ons een bericht. Binnen één werkdag reactie.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Laten we kennismaken</h1>
          <p className="lead">
            Plan een gratis adviesgesprek of stuur een bericht. Je krijgt
            binnen één werkdag antwoord, van een mens.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="cards" style={{ marginTop: 0 }}>
            <div className="card">
              <div className="icon"><Phone /></div>
              <h3>Bel of app ons</h3>
              <p>
                <a href={site.telefoonLink}>{site.telefoon}</a>
                <br />
                Ma t/m vr, 9:00 - 17:30
              </p>
            </div>
            <div className="card">
              <div className="icon"><Mail /></div>
              <h3>Mail ons</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                Binnen één werkdag reactie
              </p>
            </div>
            <div className="card">
              <div className="icon"><Calendar /></div>
              <h3>Plan direct een gesprek</h3>
              <p>
                {hasAgenda ? (
                  <>
                    Kies zelf een moment in de agenda.
                    <br />
                    <a
                      href={site.agendaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="foot-link-arrow"
                    >
                      Plan een adviesgesprek <ArrowRight size={15} />
                    </a>
                  </>
                ) : (
                  <>
                    Liever meteen bellen of mailen? Gebruik de gegevens
                    hiernaast, of stuur hieronder een bericht.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Stuur ons een bericht</h2>
            <p className="sub">
              Vertel kort waar je mee bezig bent. Je krijgt binnen één werkdag
              antwoord.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
