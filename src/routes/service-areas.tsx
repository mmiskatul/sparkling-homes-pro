import { createFileRoute } from "@tanstack/react-router";
import { MapPlaceholder } from "@/components/areas/MapPlaceholder";
import { ServiceAreaGrid } from "@/components/areas/ServiceAreaGrid";
import { CheckList } from "@/components/common/CheckList";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { areas } from "@/data/areas";
import { site } from "@/data/site";

const title = `Service Areas | ${site.name}`;
const description = `Residential cleaning across ${site.primaryCity} and surrounding communities. Check whether we cover your neighbourhood.`;

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
});

export function ServiceAreasPage() {
  return (
    <>
      <PageHero
        label="Service areas"
        title="Professional Cleaning Services Near You"
        description={`We serve homes throughout ${site.primaryCity} and the surrounding areas.`}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Where we serve"
            title="Communities we clean in"
            description="Don't see your area listed? Get in touch — we regularly travel just beyond these locations."
          />
          <div className="mt-12">
            <ServiceAreaGrid items={areas} />
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <MapPlaceholder />
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-6">
              <SectionHeader
                align="left"
                label="Local information"
                title="A local team, close to home"
                description="Because we work within a focused radius, we can offer tighter arrival windows, easier rescheduling and the same cleaners on each visit."
              />
              <CheckList
                items={[
                  "Houses, condos and apartments",
                  "Recurring and one-off cleans",
                  "Flexible arrival windows",
                  "Coverage beyond listed areas on request",
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Not Sure If We Cover Your Area?"
        description="Send us your address and we'll confirm availability and pricing right away."
      />
    </>
  );
}