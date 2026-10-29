import { describe, expect, it } from "vitest";
import { CONTACT_EMAIL, FEATURED_BOOKS, NAV_LINKS } from "@/lib/content";

// The owner specified these business details; they must not silently change.
describe("Raphelix business details", () => {
  it("shows the owner's contact email everywhere the site needs it", () => {
    expect(CONTACT_EMAIL).toBe("rapheli0@gmail.com");
  });

  it("keeps the Focus · Growth · Succeed tagline elements and nav intact", () => {
    expect(NAV_LINKS.map((l) => l.to)).toEqual([
      "/",
      "/about",
      "/services",
      "/how-it-works",
      "/faq",
      "/contact",
    ]);
  });

  it("features the books the owner listed", () => {
    expect(FEATURED_BOOKS.map((b) => b.title)).toEqual([
      "Go Pro",
      "Dream Achievers",
    ]);
  });
});
