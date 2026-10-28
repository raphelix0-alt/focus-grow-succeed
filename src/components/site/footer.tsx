import { Link } from "@tanstack/react-router";

import { CONTACT_EMAIL } from "@/lib/content";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/25 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/60 font-display text-2xl font-bold text-gold"
            >
              R
            </span>
            <span className="font-display text-2xl font-semibold">
              <span className="text-foreground">Raphe</span>
              <span className="text-gold">lix</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Helping authors explore thoughtful, genre-focused book
            discoverability opportunities.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h2>
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="gold-divider mx-auto max-w-6xl" />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Raphelix is an independent service and is not affiliated with,
          sponsored by, or endorsed by Goodreads or Amazon.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {year} Raphelix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
