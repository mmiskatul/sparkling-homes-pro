import { createFileRoute } from "@tanstack/react-router";
import { MapPlaceholder } from "@/components/areas/MapPlaceholder";
import { ServiceAreaGrid } from "@/components/areas/ServiceAreaGrid";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { areas } from "@/data/areas";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";

const title = `Get a Free Quote | ${site.name}`;
const description = `Request a free residential cleaning quote in ${site.primaryCity}. Call, email or send us a message and we'll reply the same business day.`;

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

export function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get Your Free Quote"
        description="Tell us about your home and we'll send a clear, no-obligation price — usually the same business day."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <Reveal>
              <QuoteForm extended />
            </Reveal>
            <Reveal delay={80}>
              <ContactInfo />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <MapPlaceholder />
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-6">
              <SectionHeader
                align="left"
                label="Service areas"
                title="Where we clean"
                description={`We cover ${site.primaryCity} and the surrounding communities.`}
              />
              <ServiceAreaGrid items={areas.slice(0, 4)} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader label="FAQ" title="Before you book" />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}