import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { posts, getPost, formatDatum } from "@/lib/blog";
import { site } from "@/lib/site";
import BlogCover from "@/components/BlogCover";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.titel,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.titel,
      description: post.excerpt,
      publishedTime: post.datum,
    },
  };
}

export default async function BlogArtikel({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Body } = post;
  const overige = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titel,
    description: post.excerpt,
    datePublished: post.datum,
    dateModified: post.datum,
    author: { "@type": "Organization", name: site.naam },
    publisher: {
      "@type": "Organization",
      name: site.naam,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.titel,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">{post.categorie}</div>
          <h1>{post.titel}</h1>
          <p className="blog-article-meta">
            {formatDatum(post.datum)} · {post.leestijd} min lezen
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="blog-article-cover">
            {post.afbeelding ? (
              <img
                src={post.afbeelding.src}
                alt={post.afbeelding.alt}
                className="blog-article-img"
              />
            ) : (
              <BlogCover categorie={post.categorie} variant="hero" />
            )}
          </div>
          <article className="prose">
            <Body />
          </article>
        </div>
      </section>

      {post.faq && post.faq.length > 0 && (
        <Faq
          items={post.faq}
          titel="Veelgestelde vragen"
          sub="Kort en helder antwoord op wat mensen vaak vragen."
        />
      )}

      {overige.length > 0 && (
        <section>
          <div className="container">
            <h2 className="center">Lees ook</h2>
            <div className="blog-grid" style={{ marginTop: 40 }}>
              {overige.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="blog-card"
                >
                  {p.afbeelding ? (
                    <img
                      src={p.afbeelding.src}
                      alt={p.afbeelding.alt}
                      className="blog-card-img"
                      loading="lazy"
                    />
                  ) : (
                    <BlogCover categorie={p.categorie} variant="card" />
                  )}
                  <span className="blog-cat">{p.categorie}</span>
                  <h3>{p.titel}</h3>
                  <p className="blog-excerpt">{p.excerpt}</p>
                </Link>
              ))}
            </div>
            <p className="center" style={{ marginTop: 32 }}>
              <Link href="/blog" className="btn btn-ghost">
                ← Alle artikelen
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
