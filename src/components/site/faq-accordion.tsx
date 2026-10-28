import { useState } from "react";

import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold/15 border-y border-gold/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg font-semibold transition-colors sm:text-xl",
                  isOpen ? "text-gold" : "text-foreground"
                )}
              >
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-lg text-gold transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
