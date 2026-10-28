import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Section, SectionHeading } from "@/components/site/section";
import { FAQS } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Raphelix Book Discoverability" },
      {
        name: "description",
        content:
          "Answers about Goodreads Listopia research, working with self-published authors, what we can and cannot guarantee, pricing, and how to get started.",
      },
      { property: "og:title", content: "FAQ | Raphelix Book Discoverability" },
      {
        property: "og:description",
        content:
          "Answers about Goodreads Listopia research, working with self-published authors, what we can and cannot guarantee, pricing, and how to get started.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <Section className="gold-ambient">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions."
        intro="Clear answers about how we work, what we do, and what stays outside anyone's control."
      />
      <div className="mx-auto max-w-3xl">
        <FaqAccordion items={FAQS} />
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Still have a question about your book?
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/contact">Ask Us Directly</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
