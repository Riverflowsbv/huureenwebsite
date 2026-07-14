import {
  CheckCircle,
  PriceTag,
  Search,
  Handshake,
  Zap,
  Target,
  Cart,
  TrendingUp,
} from "@/components/icons";
import type { ComponentType } from "react";

type IconCmp = ComponentType<{ size?: number; className?: string }>;

// Per categorie een eigen icoon + accentkleur, zodat elk artikel een
// herkenbare, gebrande cover krijgt (geen generieke stockfoto).
const config: Record<string, { Icon: IconCmp; accent: string }> = {
  "Tips & checklist": { Icon: CheckCircle, accent: "#12b981" },
  "Kosten & prijzen": { Icon: PriceTag, accent: "#2f5cff" },
  "SEO & vindbaarheid": { Icon: Search, accent: "#12b981" },
  "Huren vs. kopen": { Icon: Handshake, accent: "#2f5cff" },
  "Techniek & snelheid": { Icon: Zap, accent: "#f5a623" },
  "Conversie & copy": { Icon: Target, accent: "#8b5cf6" },
  "Webshop & verkopen": { Icon: Cart, accent: "#12b981" },
};

const fallback = { Icon: TrendingUp, accent: "#2f5cff" };

export default function BlogCover({
  categorie,
  variant = "card",
}: {
  categorie: string;
  variant?: "card" | "hero";
}) {
  const { Icon, accent } = config[categorie] ?? fallback;
  const iconSize = variant === "hero" ? 116 : 68;

  return (
    <div
      className={`blog-cover blog-cover-${variant}`}
      role="img"
      aria-label={`Illustratie bij de categorie ${categorie}`}
      style={{ ["--cover-accent" as string]: accent }}
    >
      <span className="blog-cover-icon">
        <Icon size={iconSize} />
      </span>
      <span className="blog-cover-label">{categorie}</span>
    </div>
  );
}
