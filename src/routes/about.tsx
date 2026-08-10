import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { ImageSection } from "@/components/common/ImageSection";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { site } from "@/data/site";

const title = `About ${site.name} | Local Residential Cleaning Team`;
const description = `Learn about ${site.name} — a local residential cleaning company built on reliability, quality and genuine customer care.`;

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: ShieldCheck, title: "Reliability", text: "We show up on time and do what we say we'll do." },
  { icon: Sparkles, title: "Quality", text: "A consistent, detailed standard on every single visit." },
  { icon: HeartHandshake, title: "Honesty", text: "Clear pricing and straightforward communication." },
  { icon: Award, title: "Customer Care", text: "Friendly service and a team that listens." },
  { icon: Eye, title: "Attention to Detail", text: "The small finishing touches you actually notice." },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About us"
        title={`About ${site.name}`}
        description="Professional cleaning with a personal touch."
      />

      <ImageSection
        image={aboutImage}
        imageAlt="Two friendly cleaning professionals with supplies in a home hallway"
      >
        <SectionHeader
          align="left"
          label="Our story"
          title="Built around neighbours, not contracts"
          description="[Company background placeholder — share when the business started, who founded it and what makes it local.] We began with a simple belief: a well-cleaned home should feel calm, not clinical, and booking one should be effortless."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Today we help households across {site.primaryCity} keep their homes fresh with regular,
          deep and move-related cleaning — always with the same careful standard.
        </p>
      </ImageSection>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl rounded-3xl border border-border bg-primary-soft p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-accent-foreground">
              To give people back their time with dependable, detail-focused cleaning that makes
              home the easiest place to be.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Our values"
            title="What guides our work"
            description="Five principles that shape how we clean and how we treat your home."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={(i % 3) * 70} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-accent-foreground">
                    <value.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Our team"
            title="Meet the cleaners"
            description="Team profiles will be published here once photos and bios are provided by the business."
          />
          <Reveal className="mx-auto mt-10 max-w-xl rounded-3xl border border-dashed border-border bg-background p-8 text-center text-sm text-muted-foreground">
            [Team member cards placeholder — add names, roles and photos to display this section.]
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Let Us Take Care of Your Cleaning"
        description="Request a free quote and we'll build a cleaning plan around your home and your schedule."
      />
    </>
  );
}