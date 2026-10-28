import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/content";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Raphelix home">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/60 font-display text-2xl font-bold text-gold"
      >
        R
      </span>
      <span className="font-display text-2xl font-semibold tracking-wide">
        <span className="text-foreground">Raphe</span>
        <span className="text-gold">lix</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      {/* Tagline strip */}
      <div className="flex items-center justify-between gap-4 px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase sm:px-6 lg:px-10">
        <p className="text-gold/90">
          Focus <span className="text-muted-foreground">·</span> Growth{" "}
          <span className="text-muted-foreground">·</span> Succeed
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hidden text-muted-foreground transition-colors hover:text-gold sm:block"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
      <div className="gold-divider" />

      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Wordmark />

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="uppercase">
            <Link to="/contact">Let's Discuss Your Book</Link>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gold/20 bg-background lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 uppercase" onClick={() => setOpen(false)}>
              <Link to="/contact">Let's Discuss Your Book</Link>
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-3 py-2 text-sm text-muted-foreground"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
