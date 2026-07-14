import Link from "next/link";
import { ArrowRight } from "@/components/icons";

// Bouwt het pad voor een paginanummer: pagina 1 = /blog, rest = /blog/pagina/n
function href(base: string, page: number) {
  return page <= 1 ? base : `${base}/pagina/${page}`;
}

export default function Pagination({
  current,
  total,
  base = "/blog",
}: {
  current: number;
  total: number;
  base?: string;
}) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Bloglijst paginering">
      {current > 1 ? (
        <Link
          href={href(base, current - 1)}
          className="page-arrow"
          rel="prev"
          aria-label="Vorige pagina"
        >
          <ArrowRight size={16} className="flip" /> Vorige
        </Link>
      ) : (
        <span className="page-arrow is-disabled" aria-hidden="true">
          <ArrowRight size={16} className="flip" /> Vorige
        </span>
      )}

      <div className="page-numbers">
        {pages.map((p) =>
          p === current ? (
            <span key={p} className="page-num is-current" aria-current="page">
              {p}
            </span>
          ) : (
            <Link key={p} href={href(base, p)} className="page-num">
              {p}
            </Link>
          )
        )}
      </div>

      {current < total ? (
        <Link
          href={href(base, current + 1)}
          className="page-arrow"
          rel="next"
          aria-label="Volgende pagina"
        >
          Volgende <ArrowRight size={16} />
        </Link>
      ) : (
        <span className="page-arrow is-disabled" aria-hidden="true">
          Volgende <ArrowRight size={16} />
        </span>
      )}
    </nav>
  );
}
