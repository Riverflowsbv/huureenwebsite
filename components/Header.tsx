"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, CloseMenu } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="container nav">
        <Link href="/" className="logo">
          HuurEen<span>Website</span>.nl
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`}>
          <Link href="/website-huren" onClick={() => setOpen(false)}>Website huren</Link>
          <Link href="/website-laten-maken" onClick={() => setOpen(false)}>Website laten maken</Link>
          <Link href="/hosting-en-onderhoud" onClick={() => setOpen(false)}>Hosting</Link>
          <Link href="/seo" onClick={() => setOpen(false)}>SEO</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Gratis adviesgesprek
          </Link>
        </nav>
        <button
          className="hamburger"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseMenu /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
