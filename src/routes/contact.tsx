import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { CONTACT_EMAIL, HELP_TOPICS } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  fullName: "",
  email: "",
  bookTitle: "",
  authorName: "",
  bookGenre: "",
  bookLink: "",
  helpTopic: "",
  additionalInfo: "",
  website: "", // honeypot
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Raphelix — Let's Discuss Your Book" },
      {
        name: "description",
        content:
          "Tell Raphelix about your book, your audience, and your goals. Request a book assessment and explore discoverability next steps.",
      },
      {
        property: "og:title",
        content: "Contact | Raphelix — Let's Discuss Your Book",
      },
      {
        property: "og:description",
        content:
          "Tell Raphelix about your book, your audience, and your goals. Request a book assessment and explore discoverability next steps.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const set = (key: keyof typeof initialForm) => (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((f) => ({ ...f, [key]: event.target.value }));

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!form.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (
      form.bookLink.trim() &&
      !/^https?:\/\/\S+$/.test(form.bookLink.trim())
    ) {
      errors.bookLink =
        "Book link should start with https:// (e.g. a Goodreads or Amazon link).";
    }
    if (form.additionalInfo.length > 2000) {
      errors.additionalInfo = "Please keep this under 2000 characters.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch("/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setErrorMessage(
          result.error ?? "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }
      setForm(initialForm);
      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <Section className="gold-ambient">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Put Your Book on the Discovery Map."
        intro="Tell us about your book, your audience, and what you hope to achieve. We'll help you explore appropriate next steps."
      />

      <div className="mx-auto max-w-3xl">
        {status === "success" ? (
          <div
            role="status"
            className="rounded-lg border border-gold/40 bg-card p-10 text-center"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-gold"
              strokeWidth={1.5}
            />
            <h2 className="mt-5 font-display text-2xl font-semibold">
              Thank you — your book details are on their way.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We'll review your inquiry and get back to you at the email
              address you provided. If you'd like to reach us directly in the
              meantime, write to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-lg border border-gold/25 bg-card p-6 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                id="fullName"
                label="Full Name"
                required
                error={fieldErrors.fullName}
              >
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={set("fullName")}
                  className={inputClass}
                  placeholder="Your name"
                  maxLength={120}
                />
              </Field>
              <Field
                id="email"
                label="Email Address"
                required
                error={fieldErrors.email}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </Field>
              <Field id="bookTitle" label="Book Title">
                <input
                  id="bookTitle"
                  name="bookTitle"
                  value={form.bookTitle}
                  onChange={set("bookTitle")}
                  className={inputClass}
                  placeholder="Your book's title"
                  maxLength={200}
                />
              </Field>
              <Field id="authorName" label="Author Name">
                <input
                  id="authorName"
                  name="authorName"
                  value={form.authorName}
                  onChange={set("authorName")}
                  className={inputClass}
                  placeholder="Name as it appears on the book"
                  maxLength={200}
                />
              </Field>
              <Field id="bookGenre" label="Book Genre">
                <input
                  id="bookGenre"
                  name="bookGenre"
                  value={form.bookGenre}
                  onChange={set("bookGenre")}
                  className={inputClass}
                  placeholder="e.g. Epic Fantasy"
                  maxLength={120}
                />
              </Field>
              <Field
                id="bookLink"
                label="Goodreads or Amazon Book Link"
                error={fieldErrors.bookLink}
              >
                <input
                  id="bookLink"
                  name="bookLink"
                  value={form.bookLink}
                  onChange={set("bookLink")}
                  className={inputClass}
                  placeholder="https://..."
                  maxLength={600}
                />
              </Field>
            </div>

            <div className="mt-6 space-y-6">
              <Field id="helpTopic" label="What Would You Like Help With?">
                <select
                  id="helpTopic"
                  name="helpTopic"
                  value={form.helpTopic}
                  onChange={set("helpTopic")}
                  className={inputClass}
                >
                  <option value="">Choose a topic (optional)</option>
                  {HELP_TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id="additionalInfo"
                label="Additional Information"
                error={fieldErrors.additionalInfo}
              >
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={5}
                  value={form.additionalInfo}
                  onChange={set("additionalInfo")}
                  className={inputClass}
                  placeholder="Your publishing goals, timeline, or anything else we should know"
                  maxLength={2000}
                />
              </Field>
            </div>

            {/* Honeypot — hidden from humans, catches spam bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={set("website")}
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="mt-6 rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground"
              >
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="mt-8 w-full uppercase sm:w-auto"
              disabled={status === "submitting"}
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              {status === "submitting" ? "Sending…" : "Send My Book Details"}
            </Button>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail aria-hidden="true" className="h-4 w-4 text-gold" />
              Prefer email? Write to us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              By sending your details you agree to our{" "}
              <Link to="/privacy" className="text-gold hover:underline">
                Privacy Policy
              </Link>
              . We use your information only to respond to your inquiry.
            </p>
          </form>
        )}
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-gold"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive-foreground">
          {error}
        </p>
      )}
    </div>
  );
}
