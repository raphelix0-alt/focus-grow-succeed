import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { BENEFITS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Raphelix | Thoughtful Book Marketing" },
      {
        name: "description",
        content:
          "Raphelix helps authors navigate book discoverability with research, thoughtful presentation, and genre-focused strategies built around each book.",
      },
      {
        property: "og:title",
        content: "About Raphelix | Thoughtful Book Marketing",
      },
      {
        property: "og:description",
        content:
          "Raphelix helps authors navigate book discoverability with research, thoughtful presentation, and genre-focused strategies built around each book.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About Raphelix"
          title="Thoughtful Marketing. Meaningful Book Discovery."
        />
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Raphelix is a digital marketing brand focused on helping authors
            navigate book discoverability with a more strategic and
            reader-focused approach.
          </p>
          <p>
            We understand that publishing a book is only one part of an
            author's journey. Helping readers discover a book that interests
            them is another important part.
          </p>
          <p>
            Our work combines research, thoughtful book presentation,
            genre-focused discovery strategies, and transparent communication.
            Every book has its own audience, and our goal is to help authors
            explore relevant opportunities that align with their work.
          </p>
          <p>
            At Raphelix, we believe good book marketing begins with
            understanding the book, respecting its intended readership, and
            developing a practical strategy around its unique qualities.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Work With Raphelix</Link>
          </Button>
        </div>
      </Section>

      <div className="gold-divider mx-auto max-w-6xl" />

      <Section>
        <SectionHeading
          eyebrow="Why Choose Raphelix?"
          title="A Strategy Built Around Your Book, Not Empty Promises."
          intro="We focus on relevant opportunities, practical recommendations, and transparent work. Our approach prioritizes genuine discoverability over artificial activity or unrealistic promises."
        />
        <ul className="mx-auto grid max-w-3xl gap-4">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-start gap-3 rounded-lg border border-gold/25 bg-card px-6 py-4"
            >
              <Check
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
              />
              <span className="text-sm leading-relaxed text-foreground sm:text-base">
                {benefit.title}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
