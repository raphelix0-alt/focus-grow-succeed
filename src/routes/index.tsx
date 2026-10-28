import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  SearchCheck,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react";

import heroImage from "@/assets/hero-books.jpg";
import { Button } from "@/components/ui/button";
import { GenreBookCover } from "@/components/site/genre-book-cover";
import { Section, SectionHeading } from "@/components/site/section";
import {
  BENEFITS,
  FEATURED_BOOKS,
  GENRES,
  PRINCIPLES,
  SERVICES,
  STEPS,
  VALUE_CARDS,
} from "@/lib/content";

const valueIcons = [SearchCheck, BookOpen, Compass];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raphelix | Goodreads Book Discoverability for Authors" },
      {
        name: "description",
        content:
          "Explore Goodreads Listopia research, book metadata optimization, and reader-focused discoverability services for independent authors and publishers.",
      },
      {
        property: "og:title",
        content: "Raphelix | Goodreads Book Discoverability for Authors",
      },
      {
        property: "og:description",
        content:
          "Explore Goodreads Listopia research, book metadata optimization, and reader-focused discoverability services for independent authors and publishers.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="gold-relative gold-ambient overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Focus · Growth · Succeed
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Help Your Book{" "}
              <span className="text-gold-gradient">Find Its Readers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Strategic Goodreads discoverability for authors who want their
              books to reach the right audience. Raphelix helps you explore
              relevant Listopia opportunities, strengthen your book's
              presentation, and build a clearer path to reader discovery.
            </p>
            <p className="mt-3 max-w-xl text-sm italic text-gold/80">
              Build your books for readers — we help readers find them.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get a Book Assessment</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl"
            />
            <img
              src={heroImage}
              alt="Elegant dark bookshelf with black and gold hardcover books under warm golden lighting"
              width={1024}
              height={1024}
              className="relative aspect-square w-full rounded-xl border border-gold/25 object-cover shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="gold-divider mx-auto max-w-6xl" />

      {/* Trust and value proposition */}
      <Section>
        <SectionHeading
          title="Every Book Deserves a Thoughtful Discovery Strategy."
          intro="Writing and publishing a book takes dedication. Helping the right readers discover it requires a thoughtful approach, too. Raphelix helps authors explore relevant discovery opportunities and present their books more effectively to readers interested in their subject matter."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUE_CARDS.map((card, i) => {
            const Icon = valueIcons[i];
            return (
              <div
                key={card.title}
                className="rounded-lg border border-gold/25 bg-card p-8 transition-colors duration-300 hover:border-gold/60"
              >
                <Icon
                  aria-hidden="true"
                  className="h-8 w-8 text-gold"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services preview */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Services"
          title="Book Marketing Services Designed Around Your Story."
          intro="Explore practical services designed to help authors improve their book presentation and identify relevant opportunities for discovery."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-lg border border-gold/25 bg-card p-8 transition-colors duration-300 hover:border-gold/60"
            >
              <h3 className="font-display text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
              >
                {service.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works preview */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear, Author-Focused Process."
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="relative">
              <span className="font-display text-4xl font-bold text-gold">
                {step.number}
              </span>
              <div aria-hidden="true" className="mt-3 h-px w-full bg-gold/25" />
              <h3 className="mt-4 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/how-it-works">See the Full Process</Link>
          </Button>
        </div>
      </Section>

      <div className="gold-divider mx-auto max-w-6xl" />

      {/* Featured books */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Featured Books"
              title="Build Your Mind, Transform Your Life"
              intro="Discover inspiring books that help you grow, think clearly, and achieve your goals. Explore powerful ideas, practical lessons, and motivation to help you overcome challenges, develop confidence, and move forward with purpose."
            />
            <ul className="space-y-3">
              {FEATURED_BOOKS.map((book) => (
                <li
                  key={book.title}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-gold"
                  />
                  <span className="font-display text-lg font-semibold">
                    {book.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    — {book.author}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 uppercase" size="lg">
              <Link to="/contact">Explore the Books</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {FEATURED_BOOKS.map((book) => (
              <div key={book.title} className="w-40 sm:w-48">
                <GenreBookCover title={book.title} />
                <p className="mt-4 text-center text-sm font-semibold text-foreground">
                  {book.title}
                </p>
                <p className="text-center text-xs text-muted-foreground">
                  {book.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Genres */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Genres"
          title="Explore Books Across Every Genre."
          intro="From sweeping fantasy epics to quiet literary fiction, we research discovery opportunities matched to the readers your book was written for."
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {GENRES.map((genre) => (
            <div key={genre}>
              <GenreBookCover title={genre} />
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {genre}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Illustrative covers. The books shown represent genres we research —
          they are not Raphelix clients, and their authors do not necessarily
          endorse Raphelix.
        </p>
      </Section>

      {/* Working principles (testimonials placeholder) */}
      <Section>
        <SectionHeading
          eyebrow="Our Promise"
          title="Built on Clear Communication and Thoughtful Service."
          intro="We are building our track record one author at a time. Until verified client testimonials are published, these working principles describe what every Raphelix engagement stands on."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <figure
              key={principle.title}
              className="rounded-lg border border-gold/25 bg-card p-8"
            >
              <Quote
                aria-hidden="true"
                className="h-6 w-6 text-gold"
                strokeWidth={1.5}
              />
              <blockquote className="mt-4 font-display text-xl font-semibold">
                {principle.title}
              </blockquote>
              <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Why choose Raphelix */}
      <Section className="bg-surface/40">
        <SectionHeading
          title="A Strategy Built Around Your Book, Not Empty Promises."
          intro="We focus on relevant opportunities, practical recommendations, and transparent work. Our approach prioritizes genuine discoverability over artificial activity or unrealistic promises."
        />
        <ul className="mx-auto grid max-w-3xl gap-4">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              className="flex items-start gap-3 rounded-lg border border-gold/20 bg-card px-6 py-4"
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

      {/* Closing CTA */}
      <Section className="gold-ambient text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Let's Put Your Book on the{" "}
          <span className="text-gold-gradient">Discovery Map.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Tell us about your book, your audience, and what you hope to
          achieve. We'll help you explore appropriate next steps.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/contact">Let's Discuss Your Book</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
