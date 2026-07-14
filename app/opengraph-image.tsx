import { ImageResponse } from "next/og";

export const alt =
  "HuurEenWebsite.nl. Jouw website. Geregeld. Vanaf €99 per maand.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0e1b3d 0%, #16264f 55%, #1e2f5c 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#2f5cff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: "#fff" }}>HuurEen</span>
            <span style={{ color: "#6b8cff" }}>Website</span>
            <span style={{ color: "#8d99b8" }}>.nl</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 68,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Een professionele website, zonder gedoe
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#c9d2ea" }}>
            Ontwerp, hosting, onderhoud én vindbaarheid. Compleet geregeld.
          </div>
        </div>

        {/* Price pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#12b981",
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: 999,
            }}
          >
            Vanaf €99 per maand
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8d99b8" }}>
            Binnen 2 weken live · geen dure investering vooraf
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
