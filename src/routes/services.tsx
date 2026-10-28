import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Raphelix Book Discoverability" },
      {
        name: "description",
        content:
          "Goodreads Listopia research, book metadata optimization, discoverability strategy, and transparent campaign reporting for authors and publishers.",
      },
      {
        property: "og:title",
        content: "Services | Raphelix Book Discoverability",
      },
      {
        property: "og:description",
        content:
          "Goodreads Listopia research, book metadata optimization, discoverability strategy, and transparent campaign reporting for authors and publishers.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="gold-ambient">
        <SectionHeading
          eyebrow="Our Services"
          title="Book Marketing Services Designed Around Your Story."
          intro="Explore practical services designed to help authors improve their book presentation and identify relevant opportunities for discovery."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-lg border border-gold/25 bg-card p-8 transition-colors duration-300 hover:border-gold/60"
            >
              <h2 className="font-display text-2xl font-semibold">
                {service.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
              >
                {service.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Every engagement starts with a conversation about your book —
            scope, deliverables, and costs are agreed before any paid work
            begins.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">Discuss Your Book</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
