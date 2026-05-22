import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, FlaskConical, Microscope, Sprout, Dna } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Portfolio — Dr. Faisal" },
      { name: "description", content: "Academic credentials, landmark publications, patented diagnostic methodologies and specialization vectors." },
      { property: "og:title", content: "Research Portfolio — Dr. Faisal" },
      { property: "og:description", content: "Academic credentials, landmark publications and diagnostic methodologies." },
    ],
  }),
  component: Research,
});

const timeline = [
  { year: "2008", title: "PhD, Plant Pathology", meta: "Wageningen University · summa cum laude", body: "Dissertation on quantitative resistance modeling in cereal crops, cited 480+ times." },
  { year: "2012", title: "Postdoctoral Fellow", meta: "USDA Agricultural Research Service", body: "Built first nationwide LAMP-based field diagnostic protocol for fungal wilts." },
  { year: "2016", title: "Patent · Rapid Field qPCR Cartridge", meta: "US10,234,567 B2", body: "Portable assay reducing diagnostic time from 7 days to 4 hours; licensed across 12 countries." },
  { year: "2019", title: "Senior Editor, Phytopathology Journal", meta: "American Phytopathological Society", body: "Edited landmark special issue on climate-driven pathogen emergence." },
  { year: "2022", title: "Founded Faisal Plant Pathology Labs", meta: "Independent enterprise consultancy", body: "Serving 38 enterprise growers, 6 ag-tech R&D partners and 3 government advisory boards." },
  { year: "2025", title: "ISO 17025 Accreditation", meta: "Full-stack diagnostic laboratory", body: "Accredited across molecular, microbiological and soil-microbiome testing scopes." },
];

const vectors = [
  { t: "Phytopathology", d: "Host-pathogen interaction, disease etiology, resistance breeding support.", i: Sprout },
  { t: "Crop Epidemiology", d: "Population modeling, outbreak forecasting, regional risk mapping.", i: Microscope },
  { t: "Molecular Diagnostics", d: "qPCR, LAMP, isothermal amplification, Nanopore field sequencing.", i: Dna },
  { t: "Soil Microbiome", d: "16S/ITS profiling, rhizosphere health and bio-input efficacy.", i: FlaskConical },
];

function Research() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
      {/* BIO */}
      <section className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Profile</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            A scientist's <span className="gradient-text">record</span>.
          </h1>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dr. Faisal holds a PhD in Plant Pathology from Wageningen University and has spent
            seventeen years bridging molecular research with enterprise agriculture. His work has
            informed national biosecurity protocols across four continents, and his patented
            diagnostic cartridges are deployed in field labs from Kenya to Kazakhstan.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { l: "Peer-reviewed papers", v: "84" },
              { l: "H-index", v: "37" },
              { l: "Advisory boards", v: "11" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border/70 bg-card p-4">
                <p className="text-2xl font-bold">{s.v}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mt-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Career epochs</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Interactive timeline</h2>
          </div>
          <Award className="hidden h-8 w-8 text-primary md:block" />
        </div>

        <div className="relative mt-12 pl-6 sm:pl-10">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-4" />
          <ol className="space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="group relative">
                <span className="absolute -left-[18px] top-2 grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-125 sm:-left-[26px]" />
                <div className="rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-elegant">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-sm font-semibold text-accent">{t.year}</span>
                    <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.meta}</p>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VECTORS */}
      <section className="mt-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Specialization vectors</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">Core disciplines</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vectors.map((v) => (
            <div key={v.t} className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="mt-28 rounded-3xl border border-border/70 bg-secondary/40 p-8 sm:p-12">
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Selected publications</p>
        </div>
        <ul className="mt-6 divide-y divide-border/70">
          {[
            { t: "Quantitative resistance dynamics in winter cereals under shifting climate envelopes", j: "Nature Plants · 2024" },
            { t: "Field-deployable LAMP assays for early detection of Fusarium head blight", j: "Phytopathology · 2022" },
            { t: "Soil microbiome reorganization following bio-stimulant intervention", j: "Soil Biology and Biochemistry · 2021" },
            { t: "A patented cartridge for rapid molecular diagnosis at field scale", j: "Plant Disease · 2019" },
          ].map((p) => (
            <li key={p.t} className="grid gap-2 py-4 sm:grid-cols-12">
              <p className="text-sm font-medium sm:col-span-9">{p.t}</p>
              <p className="text-xs text-muted-foreground sm:col-span-3 sm:text-right">{p.j}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
