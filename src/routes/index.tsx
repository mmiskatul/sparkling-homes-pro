import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-team.jpg";
import whyUsImage from "@/assets/why-us-cleaner.jpg";
import { areas } from "@/data/areas";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { ServiceAreaGrid } from "@/components/areas/ServiceAreaGrid";
import { ButtonLink } from "@/components/common/Button";
import { CheckList } from "@/components/common/CheckList";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/common/CTASection";
import { ImageSection } from "@/components/common/ImageSection";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { Benefits } from "@/components/home/Benefits";
import { Hero } from "@/components/home/Hero";
import { ReviewGrid } from "@/components/reviews/ReviewGrid";
import { ServiceGrid } from "@/components/services/ServiceGrid";

const title = `${site.name} | Professional Residential Cleaning Services`;
const description = `Professional residential cleaning services in ${site.primaryCity}. Reliable cleaners, flexible scheduling and a spotless finish. Get a free quote today.`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description,
          telephone: site.phoneDisplay,
          email: site.email,
          areaServed: site.primaryCity,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Benefits />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Our services"
            title="Our Cleaning Services"
            description="Professional cleaning solutions designed to keep your home fresh, comfortable, and spotless."
          />
          <div className="mt-12">
            <ServiceGrid items={services} />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/services" variant="secondary" size="lg">
              View All Services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ImageSection
        image={whyUsImage}
        imageAlt="Professional cleaner wiping down a bright kitchen counter"
        className="bg-card"
      >
        <SectionHeader
          align="left"
          label="Why choose us"
          title="Cleaning You Can Trust"
          description="We're a local cleaning team built on consistency and care. Every visit follows the same detailed standard, so your home always feels the way it should."
        />
        <CheckList
          items={[
            "Professional and friendly cleaners",
            "Attention to detail",
            "Flexible scheduling",
            "Quality cleaning products",
            "Reliable service",
            "Customer-focused approach",
          ]}
        />
        <div>
          <ButtonLink to="/contact" size="lg">
            Get a Free Quote
          </ButtonLink>
        </div>
      </ImageSection>

      <ImageSection
        image={aboutImage}
        imageAlt="Two friendly cleaning professionals with supplies in a home hallway"
        reverse
      >
        <SectionHeader
          align="left"
          label="About us"
          title="A Cleaning Service With a Personal Touch"
          description="We're a small local cleaning company that treats every home like our own. You'll get the same trusted faces, clear communication, and a finish you can see and feel."
        />
        <dl className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years in business", value: "[  ]" },
            { label: "Homes served", value: "[  ]" },
            { label: "Team members", value: "[  ]" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-4">
              <dt className="text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="font-display text-xl font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-muted-foreground">
          Placeholder figures — to be replaced with verified business information.
        </p>
        <div>
          <ButtonLink to="/about" variant="secondary" size="lg">
            Learn More About Us
          </ButtonLink>
        </div>
      </ImageSection>

      <section className="bg-card py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Service areas"
            title="Proudly Serving Your Community"
            description={`We provide professional residential cleaning services throughout ${site.primaryCity} and surrounding areas.`}
          />
          <div className="mt-12">
            <ServiceAreaGrid items={areas} />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/service-areas" variant="secondary" size="lg">
              View Service Areas
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            label="Reviews"
            title="What Our Customers Say"
            description="Verified customer reviews will appear here once supplied by the business."
          />
          <div className="mt-12">
            <ReviewGrid items={reviews.slice(0, 3)} />
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/reviews" variant="secondary" size="lg">
              Read More Reviews
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection />

      <section id="quote" className="bg-card py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <Reveal>
              <SectionHeader
                align="left"
                title="Get Your Free Quote"
                description="Tell us a little about your home and we'll send a clear, no-obligation price."
                className="mb-8"
              />
              <QuoteForm />
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-5">
              <ContactInfo />
              <p className="text-sm text-muted-foreground">
                Prefer to browse first?{" "}
                <Link to="/services" className="font-semibold text-primary hover:underline">
                  See all cleaning services
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
