import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink } from "@/components/common/Button";
import { CheckList } from "@/components/common/CheckList";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { HowItWorks } from "@/components/services/HowItWorks";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { faqs } from "@/data/faqs";
import { includedAreas, services } from "@/data/services";
import { site } from "@/data/site";

const title = `Cleaning Services | ${site.name}`;
const description =
  "Residential, deep, move-in, move-out, recurring and apartment cleaning services for your home. See what's included and get a free quote.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Professional Cleaning Services for Your Home"
        description="Choose the clean that fits your home right now — from weekly upkeep to a full move-out reset."
      >
        <ButtonLink to="/contact" size="lg">
          Get a Free Quote
        </ButtonLink>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <ServiceGrid items={services} detailed />
        </Container>
      </section>

      <HowItWorks />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="What's included"
            title="Every room, every visit"
            description="A standard clean covers the areas your household uses most."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <CheckList items={includedAreas} />
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="FAQ"
            title="Frequently asked questions"
            description="Everything homeowners usually ask before their first clean."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}