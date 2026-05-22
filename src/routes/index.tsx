import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Microscope, Sprout, BadgeCheck, Activity, FlaskConical } from "lucide-react";
import heroImg from "@/assets/hero-scientist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Faisal — Precision Plant Pathology Consultancy" },
      { name: "description", content: "Cellular insights and crop pathology excellence for enterprise growers. Diagnostic accuracy of 99.8%, ISO certified methodologies." },
      { property: "og:title", content: "Dr. Faisal — Precision Plant Pathology" },
      { property: "og:description", content: "Cellular insights and crop pathology excellence for enterprise growers." },
    ],
  }),
  component: Index,
});

const TAGLINES = ["Precision Agriculture.", "Cellular Insights.", "Crop Pathology Excellence."];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = TAGLINES[i];
    const speed = del ? 40 : 75;
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 1600);
      } else {
        if (text.length > 0) setText(full.slice(0, text.length - 1));
        else { setDel(false); setI((i + 1) % TAGLINES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

function Index() {
  const typed = useTyping();
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-32">
          {/* LEFT */}
          <div className="flex flex-col justify-center animate-fade-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Active research · 2,400+ field samples this quarter
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-foreground/90">Diagnosing the</span>
              <span className="block gradient-text min-h-[1.1em]">
                {typed}
                <span className="animate-blink text-accent">|</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Independent plant pathology consultancy uniting molecular diagnostics with
              enterprise-scale agronomy. Clinical precision, field-tested results, ISO-certified
              methodologies trusted by global growers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 ease-out hover:-translate-y-0.5"
              >
                Book Diagnostic
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative animate-fade-up">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3">
              <div className="col-span-5 row-span-6 overflow-hidden rounded-3xl border border-border/60 shadow-elegant">
                <img
                  src={heroImg}
                  alt="Dr. Faisal examining plant specimen in laboratory"
                  className="h-full w-full object-cover"
                  width={896}
                  height={1216}
                />
              </div>
              <div className="col-span-2 col-start-5 row-span-2 row-start-1 rounded-2xl bg-accent/90 p-4 text-accent-foreground shadow-elegant">
                <Microscope className="h-5 w-5" />
                <p className="mt-2 text-xs font-medium leading-snug">Molecular DNA sequencing on-site</p>
              </div>
              <div className="col-span-2 col-start-5 row-span-2 row-start-5 rounded-2xl bg-primary p-4 text-primary-foreground shadow-elegant">
                <FlaskConical className="h-5 w-5" />
                <p className="mt-2 text-xs font-medium leading-snug">Phytopathology Lab — Class II</p>
              </div>
            </div>

            {/* Floating glass card */}
            <div className="absolute -bottom-6 left-4 right-12 glass rounded-2xl p-4 sm:left-8 sm:right-20">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Dr. Faisal, PhD</p>
                  <p className="text-xs text-muted-foreground">Lead Plant Pathology Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION TIER */}
      <section className="mx-auto -mt-6 max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Activity, kpi: "99.8%", label: "Diagnostic Accuracy", desc: "Cross-validated across 14,000+ field specimens." },
            { icon: Sprout, kpi: "48 hrs", label: "Rapid Field Turnaround", desc: "Specimen-to-report including molecular assays." },
            { icon: ShieldCheck, kpi: "ISO 17025", label: "Certified Methodologies", desc: "Accredited testing protocols & chain-of-custody." },
          ].map((c, i) => (
            <div
              key={c.label}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <c.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{c.kpi}</p>
              <p className="mt-1 text-sm font-semibold text-primary">{c.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINE BAND */}
      <section className="mx-auto mt-32 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Specialization vectors</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              From <span className="gradient-text">cell wall</span> to continental yield.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four disciplines, one integrated practice — every recommendation traceable from molecular
              diagnostic through field intervention.
            </p>
          </div>
          <Link to="/research" className="text-sm font-semibold text-primary hover:underline">
            View research portfolio →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Phytopathology", d: "Disease etiology and host-pathogen biology." },
            { t: "Crop Epidemiology", d: "Population-scale outbreak modeling." },
            { t: "Molecular Diagnostics", d: "qPCR, LAMP and sequencing assays." },
            { t: "Soil Microbiome", d: "Rhizosphere community profiling." },
          ].map((d) => (
            <div key={d.t} className="rounded-2xl border border-border/70 bg-secondary/40 p-6 transition-colors hover:border-accent/40 hover:bg-card">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <Sprout className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{d.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
