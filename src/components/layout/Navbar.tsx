import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-card/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-b border-border shadow-soft" : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-20 lg:grid-cols-[auto_1fr_auto]">
          <Logo />

          <nav aria-label="Primary" className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-accent-foreground bg-primary-soft" }}
                    className="inline-flex items-center rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:px-3"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <ButtonLink
              href={site.phoneHref}
              variant="ghost"
              size="sm"
              className="hidden whitespace-nowrap 2xl:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phoneDisplay}
            </ButtonLink>
            <ButtonLink to="/contact" size="sm" className="hidden whitespace-nowrap sm:inline-flex">
              Get a Free Quote
            </ButtonLink>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.name}`}
              className="grid size-11 place-items-center rounded-full bg-primary-soft text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:hidden"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}