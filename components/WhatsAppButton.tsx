import { site } from "@/lib/site";
import { WhatsApp } from "@/components/icons";

// Zwevende WhatsApp-knop, site-breed. Nummer komt uit lib/site.ts, dus altijd
// in sync met het zakelijke nummer.
export default function WhatsAppButton() {
  const nummer = site.telefoonLink.replace(/[^0-9]/g, ""); // 31625125001
  const bericht = encodeURIComponent(
    "Hoi! Ik heb een vraag over een website."
  );

  return (
    <a
      href={`https://wa.me/${nummer}?text=${bericht}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Stuur ons een bericht via WhatsApp"
    >
      <WhatsApp size={30} />
    </a>
  );
}
