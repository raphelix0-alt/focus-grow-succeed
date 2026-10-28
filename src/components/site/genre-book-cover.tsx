import { cn } from "@/lib/utils";

/**
 * Stylized placeholder book cover used in the genre showcase. Deliberately
 * abstract: it does not depict any real book or imply client work.
 */
export function GenreBookCover({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex aspect-[2/3] w-full flex-col items-center justify-between overflow-hidden rounded-sm border border-gold/30 bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:glow-gold",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-2 rounded-[2px] border border-gold/20 transition-colors duration-300 group-hover:border-gold/50"
      />
      <span
        aria-hidden="true"
        className="mt-4 h-px w-10 bg-gold/60"
      />
      <span className="font-display text-lg leading-snug text-foreground">
        {title}
      </span>
      <span className="mb-4 text-[10px] uppercase tracking-[0.25em] text-gold">
        Raphelix
      </span>
    </div>
  );
}
