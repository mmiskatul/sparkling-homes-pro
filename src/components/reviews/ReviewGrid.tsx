import { Reveal } from "@/components/common/Reveal";
import type { Review } from "@/data/reviews";
import { ReviewCard } from "./ReviewCard";

export function ReviewGrid({ items }: { items: Review[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((review, i) => (
        <Reveal as="li" key={review.id} delay={(i % 3) * 80} className="h-full">
          <ReviewCard review={review} />
        </Reveal>
      ))}
    </ul>
  );
}