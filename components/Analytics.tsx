"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const STORAGE_KEY = "hw-cookie-consent";

// Laadt de GA4-tag pas ná toestemming (AVG-proof). Zonder toestemming gebeurt
// er niets en worden er geen cookies geplaatst.
function loadGA(id: string) {
  if (document.getElementById("ga4-src")) return;
  const src = document.createElement("script");
  src.id = "ga4-src";
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(src);

  const init = document.createElement("script");
  init.id = "ga4-init";
  init.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`;
  document.head.appendChild(init);
}

export default function Analytics() {
  const gaId = site.ga4Id;
  const [choice, setChoice] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!gaId) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    setChoice(stored);
    setReady(true);
    if (stored === "granted") loadGA(gaId);
  }, [gaId]);

  if (!gaId || !ready || choice) return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    setChoice("granted");
    loadGA(gaId);
  };
  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    setChoice("denied");
  };

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookievoorkeuren">
      <p>
        We gebruiken analytische cookies om te zien hoe bezoekers onze site
        gebruiken, zodat we hem kunnen verbeteren. Zonder jouw akkoord plaatsen
        we niets.{" "}
        <a href="/privacyverklaring">Meer lezen</a>.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-ghost" onClick={decline}>
          Weigeren
        </button>
        <button className="btn btn-primary" onClick={accept}>
          Accepteren
        </button>
      </div>
    </div>
  );
}
