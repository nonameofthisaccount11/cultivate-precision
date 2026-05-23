import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  Sprout,
  BadgeCheck,
  Activity,
  FlaskConical,
  Dna,
} from "lucide-react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Faisal Sohail Fateh — Principal Scientific Officer, Plant Pathology" },
      {
        name: "description",
        content:
          "Independent plant pathology consultancy by Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad. Specialising in mango, citrus, wheat rusts, rice diseases and molecular diagnostics.",
      },
      { property: "og:title", content: "Dr. Faisal Sohail Fateh — Plant Pathology" },
      {
        property: "og:description",
        content:
          "Principal Scientific Officer at NARC Islamabad. Molecular diagnostics, crop disease management and field-tested research.",
      },
    ],
  }),
  component: Index,
});

const TAGLINES = ["Mango Pathology.", "Molecular Diagnostics.", "Crop Disease Management."];

function Index() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10"
        aria-hidden
      />
      <div
        className="absolute top-1/3 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px] dark:bg-accent/10"
        aria-hidden
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-20 lg:pb-28">
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-center animate-fade-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary dark:text-primary-foreground dark:bg-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Active research · Principal Scientific Officer, NARC Islamabad
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-foreground/90">Diagnosing the</span>
              <GooeyText
                texts={TAGLINES}
                morphTime={1}
                cooldownTime={1}
                className="mt-2 w-full"
                textClassName="text-3xl font-extrabold sm:text-5xl lg:text-6xl xl:text-7xl text-primary left-0 text-left"
              />
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Principal Scientific Officer at the National Agricultural Research Centre (NARC),
              Islamabad. Over two decades of field and laboratory experience in plant pathology —
              from mango sudden death and citrus decline to wheat rusts, rice diseases and fungal
              identification. PhD from PMAS Arid Agriculture University, Rawalpindi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:bg-primary/95"
              >
                Book Diagnostic
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-card/90"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-0 flex flex-col gap-4 animate-fade-up" style={{ animationDelay: "150ms" }}>
            {/* Image with floating name card */}
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-elegant">
                <img
                  src="/faisal-portrait.jpeg"
                  alt="Dr. Faisal Sohail Fateh, Principal Scientific Officer"
                  className="w-full object-cover object-top max-h-[420px] sm:max-h-[480px] lg:max-h-[520px] transition-transform duration-700 group-hover:scale-102"
                  width={896}
                  height={1216}
                />
              </div>

              {/* Floating glass name card — anchored inside image bottom */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 sm:bottom-5 sm:left-6 sm:right-6 sm:p-5 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Dr. Faisal Sohail Fateh, PhD
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Principal Scientific Officer, NARC Islamabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two info badges — below image, side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-2xl bg-accent/10 border border-accent/20 p-4 text-foreground transition-all duration-300 hover:bg-accent/15">
                <Microscope className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-xs font-semibold leading-snug">
                  Molecular diagnostics & fungal identification
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/20 p-4 text-foreground transition-all duration-300 hover:bg-primary/15">
                <FlaskConical className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-xs font-semibold leading-snug">
                  NARC Phytopathology Lab, Islamabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALIDATION TIER */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-16">
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {[
            {
              icon: Activity,
              kpi: "20+",
              label: "Years of Experience",
              desc: "Scientific Officer at NARC since 2004, Principal Scientific Officer since 2020.",
            },
            {
              icon: Sprout,
              kpi: "60+",
              label: "Trainings Conducted",
              desc: "Local and international trainings benefitting 1,500+ farmers and scientists.",
            },
            {
              icon: ShieldCheck,
              kpi: "25+",
              label: "Peer-Reviewed Papers",
              desc: "Published in Pakistan Journal of Agricultural Research, Acta Horticulturae and more.",
            },
          ].map((c, i) => (
            <div
              key={c.label}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-elegant transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-3xl font-extrabold tracking-tight text-foreground">{c.kpi}</p>
              <p className="mt-1 text-sm font-semibold text-primary">{c.label}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINE BAND */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:mt-28 lg:mb-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Research specialisations
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              From <span className="gradient-text">field survey</span> to molecular diagnosis.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Four core disciplines — every recommendation grounded in two decades of hands-on
              research at NARC and international collaboration with Australia, China and beyond.
            </p>
          </div>
          <Link
            to="/research"
            className="group text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1"
          >
            View research portfolio{" "}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Phytopathology",
              d: "Mango, citrus, guava and forest tree decline; disease etiology and host-pathogen biology.",
              icon: Sprout,
            },
            {
              t: "Crop Epidemiology",
              d: "Wheat rusts, rice diseases, potato black scurf — population-scale outbreak assessment.",
              icon: Microscope,
            },
            {
              t: "Molecular Diagnostics",
              d: "Fungal identification, phytoplasma detection and molecular characterisation techniques.",
              icon: Dna,
            },
            {
              t: "Mango Research",
              d: "Mango sudden death syndrome, postharvest diseases, high-density nursery establishment.",
              icon: FlaskConical,
            },
          ].map((d, idx) => (
            <div
              key={d.t}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-elegant transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{d.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
