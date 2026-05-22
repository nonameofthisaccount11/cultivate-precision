import { Link } from "@tanstack/react-router";
import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.936 9.936 0 0 0 4.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.984 0-2.67-1.037-5.178-2.924-7.062C17.19 3.003 14.685 2 12.012 2zm5.836 14.199c-.32.899-1.547 1.64-2.52 1.834-.67.133-1.548.243-4.502-.98-3.774-1.563-6.208-5.395-6.397-5.648-.187-.253-1.5-1.999-1.5-3.815 0-1.815.945-2.709 1.282-3.062.336-.353.73-.44.973-.44a.78.78 0 0 1 .596.282c.243.593.83 2.016.902 2.164.072.148.12.32.02.518-.098.199-.148.32-.294.495-.147.175-.308.388-.44.52a.377.377 0 0 0-.083.424c.16.28.71 2.923 2.87 4.846 2.158 1.923 3.978 2.52 4.398 2.695.42.175.67.149.92-.128.25-.278 1.082-1.258 1.372-1.688.29-.43.58-.359.976-.212.397.147 2.523 1.189 2.96 1.408.437.22.73.328.835.507.106.18.106 1.03-.214 1.929z" />
  </svg>
);

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
              Plant pathology consultancy by Dr. Faisal Sohail Fateh, Principal Scientific Officer
              at the National Agricultural Research Centre (NARC), Islamabad. Specialising in crop
              disease diagnosis, molecular diagnostics and mango disease management.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { name: "Facebook", href: "https://www.facebook.com/share/1CppgiRvjF/", icon: Facebook, hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
                { name: "Instagram", href: "https://www.instagram.com/faisalsohailfateh?igsh=bmxncWRxb2k4YWo0", icon: Instagram, hoverClass: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/dr-faisal-sohail-fateh-75589b18", icon: Linkedin, hoverClass: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
                { name: "WhatsApp", href: "https://wa.me/923335562477", icon: WhatsAppIcon, hoverClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant ${s.hoverClass}`}
                  aria-label={s.name}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
              <li>House No. 11, St. No. 1</li>
              <li>Nawaz Town, New Shakrial, Islamabad</li>
              <li>+92-333-5562477</li>
              <li>f.sohail@parc.gov.pk</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dr. Faisal Sohail Fateh — Plant Pathology. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Disclaimer: Diagnostic outputs are advisory. Field application of agrochemical recommendations
            must be supervised by a certified agronomist in accordance with local regulatory frameworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
