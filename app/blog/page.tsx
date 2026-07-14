import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import BlogList from "@/components/BlogList";
import Pagination from "@/components/Pagination";
import { pagePosts, totalBlogPages } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: tips over websites, SEO en online groeien",
  description:
    "Praktische, jargonvrije tips over websites laten maken, huren, hosting en vindbaar worden in Google. Voor ondernemers die vooruit willen.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead">
            Praktische, eerlijke tips over websites, vindbaarheid en online
            groeien. Zonder vakjargon, gewoon in mensentaal.
          </p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <BlogList posts={pagePosts(1)} />
          <Pagination current={1} total={totalBlogPages()} />
        </div>
      </section>

      <CtaBand
        titel="Liever direct advies op maat?"
        tekst="Plan een gratis adviesgesprek. Binnen 15 minuten weet je wat een professionele website voor jouw bedrijf kan betekenen."
      />
    </>
  );
}
