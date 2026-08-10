import { Check, Phone } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";
import { Badge } from "@/components/common/Badge";
import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { site } from "@/data/site";

const trustPoints = ["Reliable Service", "Experienced Cleaners", "Satisfaction Guaranteed"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 size-[28rem] rounded-full bg-primary-soft blur-3xl"
      />
      <Container className="relative py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <Badge>{site.tagline}</Badge>
            <h1 className="text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">
              A Cleaner Home Starts Here
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              Professional residential cleaning services designed to give you more time to enjoy the
              things that matter.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink to="/contact" size="lg">
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary" size="lg">
                <Phone className="size-4" aria-hidden="true" />
                Call Us
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroImage}
                alt="Bright, freshly cleaned living room with sunlight streaming through the windows"
                width={1200}
                height={1408}
                fetchPriority="high"
                className="aspect-4/3 w-full object-cover lg:aspect-3/4"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}