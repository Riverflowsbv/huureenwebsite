import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { steden } from "@/lib/steden";
import { echteCases } from "@/lib/projecten";
import { posts, totalBlogPages } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = [
    "",
    "/website-huren",
    "/website-vanaf-199",
    "/website-laten-maken",
    "/hosting-en-onderhoud",
    "/seo",
    "/aanvullende-diensten",
    "/portfolio",
    "/blog",
    "/over-ons",
    "/contact",
  ].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : p === "/website-vanaf-199" ? 0.9 : 0.8,
  }));

  const stadPaginas = steden.map((s) => ({
    url: `${site.url}/website-laten-maken/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const casePaginas = echteCases.map((p) => ({
    url: `${site.url}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPaginas = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.datum),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogOverzicht = Array.from(
    { length: totalBlogPages() - 1 },
    (_, i) => ({
      url: `${site.url}/blog/pagina/${i + 2}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })
  );

  return [
    ...paginas,
    ...stadPaginas,
    ...casePaginas,
    ...blogPaginas,
    ...blogOverzicht,
  ];
}
