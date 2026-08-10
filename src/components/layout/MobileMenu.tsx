import { Link } from "@tanstack/react-router";
import { Phone, X } from "lucide-react";
import { useEffect } from "react";
import { ButtonLink } from "@/components/common/Button";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal={open}
        aria-label="Site menu"
        className={`absolute top-0 right-0 flex h-dvh w-[86%] max-w-sm flex-col bg-card shadow-lift transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-base font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-primary-soft text-accent-foreground" }}
                  className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3 border-t border-border px-5 py-5">
          <ButtonLink to="/contact" block onClick={onClose} tabIndex={open ? 0 : -1}>
            Get a Free Quote
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary" block tabIndex={open ? 0 : -1}>
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}