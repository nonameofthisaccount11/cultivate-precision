import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/services", label: "Services" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4">
      <div className="glass mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Faisal<span className="text-accent font-bold">.</span>Lab
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-foreground/5 [&.active]:bg-primary/10 [&.active]:text-primary dark:[&.active]:bg-primary/20 dark:[&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 z-50">
          {/* Consultation CTA (Desktop) */}
          <Link
            to="/appointment"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-elegant transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/95"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/50 text-foreground md:hidden transition-all hover:bg-foreground/5 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
            <nav className="flex flex-col gap-6">
              {links.map((l, index) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={handleLinkClick}
                  activeOptions={{ exact: l.to === "/" }}
                  className="text-3xl font-bold tracking-tight text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
                  style={{
                    animation: `fade-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) both`,
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div
              className="flex flex-col gap-4"
              style={{
                animation: `fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both`,
                animationDelay: `300ms`,
              }}
            >
              <Link
                to="/appointment"
                onClick={handleLinkClick}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:bg-primary/90"
              >
                Book Consultation
              </Link>
              <p className="text-center text-xs text-muted-foreground">
                Dr. Faisal Sohail Fateh · Plant Pathology
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
