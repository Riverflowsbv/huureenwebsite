import type { Metadata } from "next";
import { Suspense } from "react";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = {
  title: "Afrekenen",
  description:
    "Stel je pakket samen, voeg extra's toe en reken direct af. Betaal via iDEAL en zet de automatische incasso aan.",
  robots: { index: false }, // bestelpagina hoeft niet in Google
};

export default function AfrekenenPagina() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Stel je website samen</h1>
          <p className="lead">
            Kies je pakket, voeg optioneel extra&apos;s toe en reken direct af.
            Je betaalt via iDEAL en zet in één keer de automatische incasso aan
            voor het maandbedrag.
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        <Checkout />
      </Suspense>
    </>
  );
}
