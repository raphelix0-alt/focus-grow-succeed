import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const leadSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  bookTitle: z.string().trim().max(200).optional().default(""),
  authorName: z.string().trim().max(200).optional().default(""),
  bookGenre: z.string().trim().max(120).optional().default(""),
  bookLink: z
    .string()
    .trim()
    .max(600)
    .optional()
    .default("")
    .refine(
      (v) => v === "" || /^https?:\/\//i.test(v),
      "Book link must start with http:// or https://"
    ),
  helpTopic: z.string().trim().max(120).optional().default(""),
  additionalInfo: z.string().trim().max(2000).optional().default(""),
  // Honeypot: real visitors never fill this. If it is filled, accept and
  // discard the submission so bots see a success response.
  website: z.string().max(200).optional().default(""),
});

// Lightweight in-memory rate limit per IP. Worker state is per-instance, so
// this is a soft guard against bursts rather than a hard global cap.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const stamps = (recentSubmissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (stamps.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  recentSubmissions.set(ip, stamps);
  return false;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? (forwarded.split(",")[0]?.trim() ?? "unknown") : "unknown";
}

export const Route = createFileRoute("/api/public/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json(
            { ok: false, error: "Invalid request." },
            { status: 400 }
          );
        }

        const parsed = leadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            {
              ok: false,
              error:
                "Please check your details — a name, a valid email address, and a working book link are required where filled in.",
            },
            { status: 422 }
          );
        }

        const data = parsed.data;
        const ip = clientIp(request);

        if (data.website) {
          // Bot honeypot hit: respond as success without storing anything.
          return Response.json({ ok: true });
        }

        if (isRateLimited(ip)) {
          return Response.json(
            {
              ok: false,
              error:
                "You've sent several messages recently. Please try again a little later.",
            },
            { status: 429 }
          );
        }

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );
        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            full_name: data.fullName,
            email: data.email,
            book_title: data.bookTitle || null,
            author_name: data.authorName || null,
            book_genre: data.bookGenre || null,
            book_link: data.bookLink || null,
            help_topic: data.helpTopic || null,
            additional_info: data.additionalInfo || null,
          });

        if (error) {
          console.error("Failed to store contact submission:", error.message);
          return Response.json(
            {
              ok: false,
              error:
                "We couldn't save your message just now. Please try again, or email us directly.",
            },
            { status: 500 }
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
