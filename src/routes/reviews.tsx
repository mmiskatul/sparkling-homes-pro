import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ReviewGrid } from "@/components/reviews/ReviewGrid";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

const title = `Customer Reviews | ${site.name}`;
const description =
  "Read what homeowners say about our residential cleaning service. Verified customer reviews are published here.";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
});

export function ReviewsPage() {
  const hasRatings = reviews.some((review) => review.rating !== null);

  return (
    <>
      <PageHero
        label="Reviews"
        title="What Our Customers Say"
        description="We publish real feedback from real customers — nothing invented."
      />

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-2 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
            <h2 className="font-display text-xl font-semibold">Customer Reviews</h2>
            <p className="text-sm text-muted-foreground">
              {hasRatings
                ? "Based on verified customer feedback."
                : "An overall rating will be displayed here once verified reviews are collected."}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeader
            label="Featured"
            title="Featured reviews"
            description="Placeholder cards ready to be replaced with real customer testimonials."
          />
          <div className="mt-12">
            <ReviewGrid items={reviews.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader label="All reviews" title="More from our customers" />
          <div className="mt-12">
            <ReviewGrid items={reviews} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Join Our Happy Customers"
        description="Book your first clean and see the difference a detail-focused team makes."
      />
    </>
  );
}