import { Quote, Star } from "lucide-react";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Quote className="size-6 text-primary/40" aria-hidden="true" />
      {review.rating ? (
        <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < Math.round(review.rating ?? 0)
                  ? "size-4 fill-secondary text-secondary"
                  : "size-4 text-border"
              }
              aria-hidden="true"
            />
          ))}
        </div>
      ) : (
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Rating pending
        </p>
      )}
      <p className="flex-1 text-sm leading-relaxed text-pretty text-foreground">{review.quote}</p>
      <footer className="flex items-center gap-3 border-t border-border pt-4">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft font-display text-sm font-semibold text-accent-foreground"
        >
          {review.placeholder ? "?" : review.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{review.name}</p>
          <p className="truncate text-xs text-muted-foreground">{review.location}</p>
        </div>
      </footer>
    </article>
  );
}