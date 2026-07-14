"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Check } from "@/components/icons";

type Status = "idle" | "sending" | "ok" | "error";

const hasFormspree =
  !!site.formspreeId && !site.formspreeId.startsWith("[");

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, silently succeed (likely a bot).
    if (data.get("_gotcha")) {
      setStatus("ok");
      form.reset();
      return;
    }

    if (!hasFormspree) {
      // Fallback zolang er nog geen Formspree-ID is gekoppeld.
      const naam = String(data.get("naam") || "");
      const bericht = String(data.get("bericht") || "");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Website-aanvraag van ${naam}`
      )}&body=${encodeURIComponent(bericht)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="form-success" role="status">
        <span className="form-success-badge">
          <Check size={22} />
        </span>
        <h3>Bericht ontvangen. Bedankt!</h3>
        <p>
          We nemen binnen één werkdag contact met je op via e-mail of telefoon.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="naam">Naam</label>
          <input id="naam" name="naam" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="bedrijf">Bedrijf</label>
          <input
            id="bedrijf"
            name="bedrijf"
            type="text"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">E-mailadres</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="telefoon">Telefoon (optioneel)</label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="bericht">Waar kunnen we je mee helpen?</label>
        <textarea id="bericht" name="bericht" rows={5} required />
      </div>

      {/* Honeypot: verborgen voor mensen, ingevuld door bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Versturen…" : "Verstuur bericht"}
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          Er ging iets mis bij het versturen. Mail ons gerust direct op{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <p className="form-note">
        <Check className="ic-check" size={15} /> Binnen één werkdag reactie, van
        een mens. Geen verplichtingen.
      </p>
    </form>
  );
}
