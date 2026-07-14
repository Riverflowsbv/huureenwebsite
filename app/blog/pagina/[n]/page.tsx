import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import BlogList from "@/components/BlogList";
import Pagination from "@/components/Pagination";
import { pagePosts, totalBlogPages } from "@/lib/blog";

type Props = { params: Promise<{ n: string }> };

export function generateStaticParams() {
  const total = totalBlogPages();
  // Pagina 1 = /blog; hier alleen 2 t/m N.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    n: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `Blog, pagina ${n}`,
    description:
      "Meer praktische tips over websites, SEO en online groeien voor ondernemers.",
    alternates: { canonical: `/blog/pagina/${n}` },
  };
}

export default async function BlogPagina({ params }: Props) {
  const { n } = await params;
  const page = Number(n);
  const total = totalBlogPages();

  if (!Number.isInteger(page) || page < 2 || page > total) notFound();

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead">
            Praktische, eerlijke tips over websites, vindbaarheid en online
            groeien. Pagina {page} van {total}.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <BlogList posts={pagePosts(page)} />
          <Pagination current={page} total={total} />
        </div>
      </section>

      <CtaBand
        titel="Liever direct advies op maat?"
        tekst="Plan een gratis adviesgesprek. Binnen 15 minuten weet je wat een professionele website voor jouw bedrijf kan betekenen."
      />
    </>
  );
}
