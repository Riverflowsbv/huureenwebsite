import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDatum } from "@/lib/blog";
import { ArrowRight } from "@/components/icons";
import BlogCover from "@/components/BlogCover";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="blog-grid">
      {posts.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
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
          <h2>{p.titel}</h2>
          <p className="blog-excerpt">{p.excerpt}</p>
          <div className="blog-meta">
            <span>
              {formatDatum(p.datum)} · {p.leestijd} min lezen
            </span>
            <span className="blog-readmore">
              Lees meer <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
