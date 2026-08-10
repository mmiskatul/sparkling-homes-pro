import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/Container";
import { site } from "@/data/site";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Reviews", to: "/reviews" },
];

const serviceLinks = [
  "Residential Cleaning",
  "Deep Cleaning",
  "Move-In Cleaning",
  "Move-Out Cleaning",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-lg font-semibold">{site.name}</span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional residential cleaning for busy households across {site.primaryCity} and
              the surrounding communities.
            </p>
            <div className="flex gap-2">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="grid size-11 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-soft hover:text-accent-foreground"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary-soft hover:text-accent-foreground"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Company">
            <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Company</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Services</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide uppercase">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 break-all transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.addressLine}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}