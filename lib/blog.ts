import type { ComponentType } from "react";

export type BlogMeta = {
  slug: string;
  titel: string;
  excerpt: string;
  datum: string; // ISO, bijv. "2026-07-13"
  leestijd: number; // in minuten
  categorie: string;
  faq?: { vraag: string; antwoord: string }[];
  // Optioneel: een echte foto i.p.v. de gebrande categorie-cover.
  // Zet het bestand in public/blog/ en verwijs ernaar, bijv. "/blog/mijn-foto.jpg".
  // Vul altijd een kloppende, beschrijvende alt-tekst in (voor SEO + toegankelijkheid).
  afbeelding?: { src: string; alt: string };
};

export type BlogPost = BlogMeta & { Body: ComponentType };

// Nieuwe blog toevoegen? Maak een bestand in content/blog/<slug>.tsx met een
// `meta` (BlogMeta) en een default Body-component, en registreer het hieronder.
import Body1, { meta as meta1 } from "@/content/blog/wat-kost-een-website-laten-maken";
import Body2, { meta as meta2 } from "@/content/blog/website-huren-of-kopen";
import Body3, { meta as meta3 } from "@/content/blog/waarom-is-mijn-website-traag";
import Body4, { meta as meta4 } from "@/content/blog/7-dingen-die-elke-bedrijfswebsite-nodig-heeft";
import Body5, { meta as meta5 } from "@/content/blog/hoger-in-google-seo-basis";
import Body6, { meta as meta6 } from "@/content/blog/wat-is-website-hosting";
import Body7, { meta as meta7 } from "@/content/blog/zelf-maken-of-laten-maken";
import Body8, { meta as meta8 } from "@/content/blog/hoeveel-paginas-heeft-een-website-nodig";
import Body9, { meta as meta9 } from "@/content/blog/teksten-die-klanten-opleveren";
import Body10, { meta as meta10 } from "@/content/blog/google-bedrijfsprofiel-meer-lokale-klanten";
import Body11, { meta as meta11 } from "@/content/blog/webshop-beginnen-waar-op-letten";
import Body12, { meta as meta12 } from "@/content/blog/vragen-om-je-websitebouwer-te-stellen";

export const posts: BlogPost[] = [
  { ...meta1, Body: Body1 },
  { ...meta2, Body: Body2 },
  { ...meta3, Body: Body3 },
  { ...meta4, Body: Body4 },
  { ...meta5, Body: Body5 },
  { ...meta6, Body: Body6 },
  { ...meta7, Body: Body7 },
  { ...meta8, Body: Body8 },
  { ...meta9, Body: Body9 },
  { ...meta10, Body: Body10 },
  { ...meta11, Body: Body11 },
  { ...meta12, Body: Body12 },
].sort((a, b) => b.datum.localeCompare(a.datum));

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Paginering: houdt de bloglijst kort (vooral op mobiel).
export const POSTS_PER_PAGE = 6;

export function totalBlogPages(): number {
  return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

export function pagePosts(page: number): BlogPost[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

export function formatDatum(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
