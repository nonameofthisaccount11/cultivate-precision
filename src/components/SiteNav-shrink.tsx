import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/services", label: "Services" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Custom hook: useThrottledScroll
 * 
 * Detects when scroll position exceeds a threshold with throttling applied.
 * This prevents excessive state updates during rapid scroll events.
 * 
 * @param threshold - Scroll position in pixels beyond which isScrolled becomes true (default: 50px)
 * @param throttleDelay - Minimum delay in ms between allowed scroll event checks (default: 16ms = ~60fps)
 * @returns boolean - true when window.scrollY > threshold
 * 
 * Performance Optimizations:
 * - Passive event listener: { passive: true } allows browser to optimize scrolling performance
 * - Throttling: Only processes scroll events every 16ms (~60fps), not on every single event
 * - Ref-based tracking: Uses useRef for scroll position to avoid dependency array issues
 * - Conditional state updates: Only calls setIsScrolled when state actually changes
 * - Proper cleanup: Clears timeout and removes listener on unmount
 */
function useThrottledScroll(threshold: number = 50, throttleDelay: number = 16) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const throttleTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      // Skip if we're already throttled
      if (throttleTimeoutRef.current) return;

      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > threshold;

      // Only update state if the state has actually changed to minimize rerenders
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }

      lastScrollYRef.current = currentScrollY;

      // Start throttle timeout: prevents next scroll event from triggering state update
      throttleTimeoutRef.current = setTimeout(() => {
        throttleTimeoutRef.current = undefined;
      }, throttleDelay);
    };

    // Passive listener = browser can optimize scroll performance without waiting for JS
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, [isScrolled, threshold, throttleDelay]);

  return isScrolled;
}

/**
 * SiteNav Component
 * 
 * Professional shrink-on-scroll navigation bar with the following features:
 * - Smooth size transitions using hardware-accelerated CSS properties (padding, transform)
 * - Fixed positioning to remain at top of viewport
 * - Responsive design for mobile and desktop
 * - Mobile hamburger menu with smooth drawer animation
 * 
 * Scroll Behavior:
 * - Default state: Full-size navbar with expanded padding and typography
 * - Scrolled state: Compact navbar when window.scrollY > 50px
 * - Smooth 300ms transition between states using ease-out timing
 */
export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom hook: Tracks if user has scrolled past 50px threshold
  // Returns boolean with throttled updates (~60fps) for optimal performance
  const isScrolled = useThrottledScroll(50, 16);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={{
        // Hardware-accelerated padding changes (preferred over height changes)
        paddingTop: isScrolled ? "0.5rem" : "1rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      }}
    >
      <div 
        className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 sm:px-4 transition-all duration-300 ease-out"
        style={{
          // Smooth padding transition for compact appearance
          paddingTop: isScrolled ? "0.5rem" : "0.75rem",
          paddingBottom: isScrolled ? "0.5rem" : "0.75rem",
          marginTop: isScrolled ? "0.5rem" : "0.75rem",
        }}
      >
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group z-50 transition-all duration-300 ease-out flex-shrink-0"
        >
          {/* Logo Icon: Shrinks smoothly from 2.25rem to 2rem */}
          <span 
            className="grid place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-all duration-300 ease-out group-hover:rotate-12 group-hover:scale-105 flex-shrink-0"
            style={{
              width: isScrolled ? "2rem" : "2.25rem",
              height: isScrolled ? "2rem" : "2.25rem",
            }}
          >
            <Leaf className="h-4 w-4" />
          </span>

          {/* Logo Text: Slightly smaller when scrolled */}
          <span 
            className="text-sm font-semibold tracking-tight text-foreground transition-all duration-300 ease-out whitespace-nowrap"
            style={{
              opacity: isScrolled ? 0.8 : 1,
              fontSize: isScrolled ? "0.8125rem" : "0.875rem",
            }}
          >
            Faisal<span className="text-accent font-bold">.</span>Lab
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 transition-all duration-300 ease-out">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`rounded-full transition-all duration-200 font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 [&.active]:bg-primary/10 [&.active]:text-primary dark:[&.active]:bg-primary/20 dark:[&.active]:text-primary ${
                isScrolled 
                  ? "px-3 py-1.5 text-xs" 
                  : "px-4 py-2 text-sm"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center gap-2 z-50">
          {/* Desktop CTA Button: Responsive sizing based on scroll state */}
          <Link
            to="/appointment"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground shadow-elegant transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/95 font-semibold ${
              isScrolled 
                ? "px-4 py-1.5 text-xs" 
                : "px-5 py-2 text-xs"
            }`}
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/50 text-foreground md:hidden transition-all hover:bg-foreground/5 cursor-pointer flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer: Full-screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
            {/* Mobile Navigation Links */}
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

            {/* Mobile CTA and Footer */}
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
