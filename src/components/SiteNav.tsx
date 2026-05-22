import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/services", label: "Services" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-105">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Faisal<span className="text-accent">.</span>Lab
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/appointment"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
