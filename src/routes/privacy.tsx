import { createFileRoute } from '@tanstack/react-router'
import { Section, SectionHeading } from "@/components/site/section";
import { CONTACT_EMAIL } from "@/lib/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Raphelix" },
      {
        name: "description",
        content:
          "How Raphelix collects, uses, and protects the information you share through our contact form and website.",
      },
      { property: "og:title", content: "Privacy Policy | Raphelix" },
      {
        property: "og:description",
        content:
          "How Raphelix collects, uses, and protects the information you share through our contact form and website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "When you send your book details through our contact form, we collect the information you provide: your name, email address, book title, author name, genre, book link, the topic you'd like help with, and any additional information you choose to share.",
      "Like most websites, we may also receive standard technical information from your browser, such as your IP address and browser type, which we use only to keep the site secure and prevent abuse.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you provide solely to respond to your inquiry, discuss our services with you, and communicate about work you have requested. We do not sell your personal information, and we do not use it for unrelated marketing.",
    ],
  },
  {
    heading: "Storage and Retention",
    body: [
      "Inquiries are stored in our secure database and retained only as long as needed to handle your request and any follow-up work. You may ask us to delete your information at any time by emailing us.",
    ],
  },
  {
    heading: "Sharing",
    body: [
      "We do not share your personal information with third parties except where necessary to operate the site (such as our hosting and database providers) or where required by law.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, contact us using the details below.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `For any privacy questions, contact Raphelix at ${CONTACT_EMAIL}. Raphelix is an independent service and is not affiliated with or endorsed by Goodreads or Amazon.`,
    ],
  },
];

function PrivacyPage() {
  return (
    <Section className="gold-ambient">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we handle the information you share with Raphelix."
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
