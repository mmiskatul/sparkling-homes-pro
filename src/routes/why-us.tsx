import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Eye, Leaf, ShieldCheck, Smile, Users } from "lucide-react";
import whyUsImage from "@/assets/why-us-cleaner.jpg";
import { CheckList } from "@/components/common/CheckList";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { ImageSection } from "@/components/common/ImageSection";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ReviewGrid } from "@/components/reviews/ReviewGrid";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

const title = `Why Choose Us | ${site.name}`;
const description =
  "Professional cleaners, a consistent process and a satisfaction-focused guarantee. See why homeowners choose our residential cleaning team.";

export const Route = createFileRoute("/why-us")({
  component: WhyUsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
});

const benefits = [
  { icon: Users, title: "Professional Team", text: "Trained, friendly cleaners who respect your home." },
  { icon: ShieldCheck, title: "Reliable Service", text: "Consistent arrival times and dependable results." },
  { icon: Eye, title: "Attention to Detail", text: "We finish the corners other services rush past." },
  { icon: CalendarClock, title: "Flexible Scheduling", text: "One-off or recurring, on your timetable." },
  { icon: Leaf, title: "Quality Products", text: "Effective products that are gentle on your surfaces." },
  { icon: Smile, title: "Customer Satisfaction", text: "Not happy with something? We'll put it right." },
];

const process = [
  { step: "01", title: "Understand Your Needs", text: "We learn your home's layout, priorities and preferences." },
  { step: "02", title: "Prepare the Cleaning Plan", text: "A room-by-room checklist tailored to your request." },
  { step: "03", title: "Clean With Care", text: "Our team works methodically through every space." },
  { step: "04", title: "Final Quality Check", text: "A last walkthrough before we consider the job done." },
];

export function WhyUsPage() {
  return (
    <>
      <PageHero
        label="Why choose us"
        title="Why Homeowners Choose Us"
        description="A cleaning service judged on consistency — the same detailed standard, every visit."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={(i % 3) * 70} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                    <benefit.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-lg font-semibold">{benefit.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Our process"
            title="How we clean"
            description="A repeatable process is what keeps results consistent from visit to visit."
          />
          <ol className="mt-12 grid gap-8 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 80} className="flex gap-4 lg:flex-col">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground shadow-soft">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <ImageSection
        image={whyUsImage}
        imageAlt="Cleaner carefully wiping a kitchen surface"
        reverse
      >
        <SectionHeader
          align="left"
          label="Our commitment"
          title="Quality you can inspect"
          description="We'd rather take an extra ten minutes than leave something half-done. If any part of your clean isn't right, tell us within 24 hours and we'll return to fix it."
        />
        <CheckList
          items={[
            "Room-by-room quality checklist",
            "Consistent cleaning team",
            "Clear, upfront pricing",
            "24-hour satisfaction response",
          ]}
        />
      </ImageSection>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Reviews"
            title="What our customers say"
            description="Verified customer reviews will appear here once supplied by the business."
          />
          <div className="mt-12">
            <ReviewGrid items={reviews.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}