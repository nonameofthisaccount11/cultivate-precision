"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Microscope, ShieldCheck, Handshake } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Faisal Sohail Fateh, Plant Pathology" },
      {
        name: "description",
        content:
          "Plant pathology consulting services: crop disease diagnosis, field surveillance, molecular diagnostics, mango and citrus disease management.",
      },
      { property: "og:title", content: "Services — Dr. Faisal Sohail Fateh" },
      {
        property: "og:description",
        content:
          "Crop disease diagnosis, field surveillance, molecular diagnostics and disease management consulting.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Microscope,
    title: "Crop Disease Diagnosis",
    desc: "On-site field surveillance, specimen sampling and disease identification for mango, citrus, guava, wheat, rice and potato.",
    price: "Contact for scope",
    points: [
      "Field sampling & survey",
      "Fungal & pathogen identification",
      "Disease management report",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Molecular Diagnostics",
    desc: "Laboratory-based molecular characterisation of plant pathogens including phytoplasma detection and fungal identification.",
    price: "Contact for scope",
    points: [
      "Phytoplasma detection",
      "Fungal isolation & identification",
      "Molecular characterisation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Mango Disease Management",
    desc: "Specialised consulting on mango sudden death syndrome, postharvest diseases and high-density nursery establishment.",
    price: "Contact for scope",
    points: [
      "Mango sudden death (MSD) diagnosis",
      "Postharvest disease control",
      "Nursery health assessment",
    ],
  },
  {
    icon: Handshake,
    title: "Research & Training",
    desc: "Collaborative research partnerships, farmer field school facilitation and capacity-building trainings for growers and extension workers.",
    price: "Contact for scope",
    points: [
      "Farmer Field School (FFS) facilitation",
      "Extension worker training",
      "Joint research collaboration",
    ],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 relative">
      {/* Background glow effects */}
      <div
        className="absolute top-1/3 left-10 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10"
        aria-hidden
      />
      <div
        className="absolute bottom-10 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] dark:bg-accent/10"
        aria-hidden
      />

      <header className="max-w-3xl animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services</p>
        <TypewriterEffectSmooth 
          words={[
            { text: "Expertise" },
            { text: "for" },
            { text: "growers" },
            { text: "and" },
            { text: "researchers.", className: "text-primary" },
          ]}
          className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight"
          cursorClassName="bg-primary"
        />
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Over two decades of field and laboratory experience at NARC Islamabad — from crop disease
          diagnosis and molecular diagnostics to mango disease management and capacity-building
          trainings.
        </p>
      </header>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => (
          <article
            key={s.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl animate-fade-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Top icon and border gradient */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
              <s.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

            <ul className="mt-6 space-y-3.5 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-foreground/80 font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex-1" />

            <div className="border-t border-border/70 pt-4 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Investment
              </p>
              <p className="mt-0.5 text-sm font-semibold text-primary">{s.price}</p>
            </div>

            <Link
              to="/appointment"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary text-primary bg-transparent py-2.5 text-xs font-semibold shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Inquire for Service
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>

      {/* CTA STRIP */}
      <section
        className="mt-24 overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-elegant animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="grid gap-8 p-10 md:grid-cols-3 md:p-14 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Need a tailored consultation?
            </h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/80 leading-relaxed font-medium">
              Submit your details and Dr. Faisal Sohail Fateh will respond with a proposed approach
              and diagnostic scope within two business days.
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Start Intake
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
