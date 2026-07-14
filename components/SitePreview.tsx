"use client";

import { useEffect, useRef, useState } from "react";

// Virtuele desktopbreedte waarop we de echte site renderen en daarna schalen.
const BASE_W = 1280;

type Props = {
  url?: string; // live URL; leeg = gradient-placeholder
  naam: string;
  kleur: string;
  accent: string;
  // Zichtbare hoogte t.o.v. breedte (0.64 ≈ browservenster-verhouding).
  ratio?: number;
};

export default function SitePreview({
  url,
  naam,
  kleur,
  accent,
  ratio = 0.64,
}: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const virtualH = Math.round(BASE_W * ratio);
  const schoneUrl = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "www.klantwebsite.nl";

  return (
    <div className="site-frame">
      <div className="site-frame-bar">
        <span className="dot" style={{ background: "#ff5f57" }} />
        <span className="dot" style={{ background: "#febc2e" }} />
        <span className="dot" style={{ background: "#28c840" }} />
        <div className="site-frame-url">{schoneUrl}</div>
      </div>
      <div
        ref={bodyRef}
        className="site-frame-body"
        style={{
          aspectRatio: `${BASE_W} / ${virtualH}`,
          background: `linear-gradient(135deg, ${kleur}, ${accent})`,
        }}
      >
        {url ? (
          <iframe
            src={url}
            title={`Live preview van de website van ${naam}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            scrolling="no"
            className="site-frame-iframe"
            style={{
              width: BASE_W,
              height: virtualH,
              transform: `scale(${scale})`,
            }}
          />
        ) : (
          <div className="site-frame-placeholder">{naam}</div>
        )}
      </div>
    </div>
  );
}
