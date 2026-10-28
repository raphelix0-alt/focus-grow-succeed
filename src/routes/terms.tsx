import { createFileRoute } from '@tanstack/react-router'
import { Section, SectionHeading } from "@/components/site/section";
import { CONTACT_EMAIL } from "@/lib/content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Raphelix" },
      {
        name: "description",
        content:
          "The terms that apply when you use the Raphelix website and engage Raphelix book discoverability services.",
      },
      { property: "og:title", content: "Terms of Service | Raphelix" },
      {
        property: "og:description",
        content:
          "The terms that apply when you use the Raphelix website and engage Raphelix book discoverability services.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "About These Terms",
    body: [
      "These terms apply to your use of the Raphelix website and to inquiries you send us about our book discoverability services. Specific services, deliverables, timelines, and costs are agreed with you individually before any paid work begins.",
    ],
  },
  {
    heading: "Our Services",
    body: [
      "Raphelix provides research, presentation recommendations, and discoverability strategy support focused on Goodreads Listopia and related opportunities, always within platform rules. Raphelix is an independent service and is not affiliated with, sponsored by, or endorsed by Goodreads or Amazon.",
    ],
  },
  {
    heading: "No Guarantees",
    body: [
      "List availability, list-owner decisions, reader participation, rankings, and discovery outcomes depend on factors outside our control. We do not guarantee placement, rankings, sales results, or any specific discovery outcome. What we commit to is the transparent delivery of the research and services agreed with you.",
    ],
  },
  {
    heading: "Your Responsibilities",
    body: [
      "You confirm that information you provide about your book is accurate and that you have the right to promote it. You agree not to use our site to send unlawful, abusive, or automated submissions.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website, including text and design, belongs to Raphelix. You retain full ownership of your book and any materials you share with us; we use them only to provide the services you request.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the extent permitted by law, Raphelix is not liable for indirect or consequential losses arising from the use of this website or our recommendations.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
    ],
  },
];

function TermsPage() {
  return (
    <Section className="gold-ambient">
      <SectionHeading
        eyebrow="Legal"
        title="Terms of Service"
        intro="The terms that apply when you use the Raphelix website and engage our services."
      />
      <div className="mx-auto max-w-3xl space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-gold sm:text-2xl">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
