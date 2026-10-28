import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { STEPS } from "@/lib/content";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Raphelix" },
      {
        name: "description",
        content:
          "A clear, author-focused process: share your book details, we research relevant opportunities, develop your strategy, and keep you updated on progress.",
      },
      { property: "og:title", content: "How It Works | Raphelix" },
      {
        property: "og:description",
        content:
          "A clear, author-focused process: share your book details, we research relevant opportunities, develop your strategy, and keep you updated on progress.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <Section className="gold-ambient">
      <SectionHeading
        eyebrow="How It Works"
        title="A Clear, Author-Focused Process."
        intro="Four straightforward steps, with services and costs discussed before any paid work begins."
      />
      <ol className="relative mx-auto max-w-3xl space-y-12">
        {STEPS.map((step, index) => (
          <li key={step.number} className="relative flex gap-6 sm:gap-10">
            {index < STEPS.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[27px] top-16 h-[calc(100%-1rem)] w-px bg-gold/25 sm:left-[35px]"
              />
            )}
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-card font-display text-xl font-bold text-gold sm:h-[4.5rem] sm:w-[4.5rem]">
              {step.number}
            </span>
            <div className="pt-1">
              <h2 className="font-display text-2xl font-semibold">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link to="/contact">Start Your Book Assessment</Link>
        </Button>
      </div>
    </Section>
  );
}
