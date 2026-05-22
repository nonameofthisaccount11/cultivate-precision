import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-4 w-4" />
              </span>
              <span className="font-semibold">Faisal.Lab</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Independent plant pathology consultancy advancing precision agriculture
              through molecular diagnostics, epidemiological auditing, and enterprise
              research partnerships.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/research" className="hover:text-primary">Research</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/appointment" className="hover:text-primary">Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Pathology Wing, Block C</li>
              <li>Agri-Sciences Campus</li>
              <li>+1 (415) 555-0142</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Faisal Plant Pathology Laboratories. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Disclaimer: Diagnostic outputs are advisory. Field application of agrochemical recommendations
            must be supervised by a certified agronomist in accordance with local regulatory frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
