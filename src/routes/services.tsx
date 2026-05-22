import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Microscope, ShieldCheck, Handshake } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Matrix — Faisal Plant Pathology" },
      { name: "description", content: "Epidemiological audits, digital phytopathology, lab QA, and enterprise ag-tech research partnerships." },
      { property: "og:title", content: "Services Matrix — Faisal Plant Pathology" },
      { property: "og:description", content: "Audits, consulting, lab QA and research partnerships." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Microscope,
    title: "Epidemiological Crop Audits",
    desc: "On-site surveillance, sampling and outbreak risk modeling across enterprise estates.",
    price: "from $4,800 / audit",
    points: ["Stratified field sampling", "Pathogen population mapping", "Containment playbook"],
  },
  {
    icon: ClipboardCheck,
    title: "Digital Phytopathology Consulting",
    desc: "Remote diagnostic review, treatment design and seasonal advisory retainers.",
    price: "from $1,200 / month",
    points: ["Image-based triage", "Bi-weekly advisory call", "Custom decision dashboards"],
  },
  {
    icon: ShieldCheck,
    title: "Lab Quality Assurance",
    desc: "ISO 17025 readiness, method validation and inter-laboratory proficiency programs.",
    price: "scoped engagement",
    points: ["Method validation", "Audit preparation", "SOP authoring"],
  },
  {
    icon: Handshake,
    title: "Enterprise Ag-Tech Partnerships",
    desc: "Co-development of diagnostic IP, sensor calibration and biological dataset curation.",
    price: "by partnership",
    points: ["Co-developed IP", "Calibrated field datasets", "Joint publications"],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services matrix</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          Engagements engineered for <span className="gradient-text">enterprise agriculture</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Four core practice areas. Each scoped, accredited and delivered with the rigor of a
          clinical laboratory.
        </p>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex-1" />
            <div className="border-t border-border/70 pt-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Investment</p>
              <p className="mt-1 text-sm font-semibold text-primary">{s.price}</p>
            </div>

            <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
              <Link
                to="/appointment"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
              >
                Inquire for Service
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA STRIP */}
      <section className="mt-24 overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <div className="grid gap-8 p-10 md:grid-cols-3 md:p-14">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Custom engagement? We scope every diagnostic to your operation.
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Submit your field profile and we'll return a tailored protocol within two business days.
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start Intake <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
