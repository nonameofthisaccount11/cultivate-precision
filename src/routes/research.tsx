import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, FlaskConical, Microscope, Sprout, Dna, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Portfolio — Dr. Faisal Sohail Fateh" },
      {
        name: "description",
        content:
          "Academic credentials, publications, international conferences and specialisation vectors of Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad.",
      },
      { property: "og:title", content: "Research Portfolio — Dr. Faisal Sohail Fateh" },
      {
        property: "og:description",
        content:
          "Academic credentials, publications and research specialisations of Dr. Faisal Sohail Fateh.",
      },
    ],
  }),
  component: Research,
});

const timeline = [
  {
    year: "1992",
    title: "SSC (Science)",
    meta: "Board of Intermediate & Secondary Education, Rawalpindi",
    body: "Completed secondary education with 696/850 (81.88%).",
  },
  {
    year: "1994",
    title: "HSSC (Pre-Medical)",
    meta: "Federal Board of Intermediate & Secondary Education, Islamabad",
    body: "Completed higher secondary with 697/1100 (63.36%).",
  },
  {
    year: "2003",
    title: "B.Sc. (Hons) Agriculture — Plant Pathology",
    meta: "University of Arid Agriculture, Rawalpindi · 3.60/4.00 (76.10%)",
    body: "Undergraduate specialisation in plant pathology at the University of Arid Agriculture, Rawalpindi.",
  },
  {
    year: "2004",
    title: "M.Sc. (Hons) Agriculture — Plant Pathology",
    meta: "University of Arid Agriculture, Rawalpindi · 3.94/4.00 (86.06%) · Silver Medal",
    body: "Awarded silver medal for securing second position in Master of Science Honours. Graduated with distinction from the University of Arid Agriculture, Rawalpindi.",
  },
  {
    year: "2004",
    title: "Scientific Officer → Senior Scientific Officer",
    meta: "National Agricultural Research Centre (NARC), Islamabad",
    body: "Joined NARC as Scientific Officer in February 2004, promoted to Senior Scientific Officer in March 2004. Conducted research on mango, citrus, guava and forest tree decline; wheat rusts, rice diseases, potato black scurf disease and fungal identification.",
  },
  {
    year: "2009",
    title: "Ph.D. Plant Pathology",
    meta: "PMAS Arid Agriculture University, Shamasabad, Rawalpindi",
    body: "Doctoral research focused on mango sudden death syndrome, Ceratocystis fimbriata and related fungal pathogens. First in the world to report Ceratocystis fimbriata on Shisham from Pakistan.",
  },
  {
    year: "2009",
    title: "Project Director — High Density Mango Project",
    meta: "PSDP Funded Project (2009–2011)",
    body: "Led the PSDP-funded High Density Mango Project. Established 07 High Health Mango Nurseries at government institutes in collaboration with Australian and local provincial partners.",
  },
  {
    year: "2011",
    title: "National Coordinator — Mango ASLP Phase II",
    meta: "Australia–Pakistan Collaboration (2011–2015)",
    body: "Served as National Coordinator for the Mango ASLP Phase II project. Conducted 60+ local trainings and 4 foreign trainings, benefitting 1,500 Pakistanis in Pakistan and 50 in Australia. Presented Pakistan at international forums in China and Australia.",
  },
  {
    year: "2020",
    title: "Principal Scientific Officer",
    meta: "National Agricultural Research Centre (NARC), Islamabad",
    body: "Promoted to Principal Scientific Officer since March 2020. Continues to lead research on crop pathology, molecular diagnostics and disease management at NARC.",
  },
];

const vectors = [
  {
    t: "Phytopathology",
    d: "Mango, citrus, guava and forest tree decline; disease etiology and host-pathogen interaction.",
    i: Sprout,
  },
  {
    t: "Crop Epidemiology",
    d: "Wheat rusts, rice diseases, potato black scurf — field surveillance and outbreak assessment.",
    i: Microscope,
  },
  {
    t: "Molecular Diagnostics",
    d: "Fungal identification, phytoplasma detection via molecular techniques, Ceratocystis research.",
    i: Dna,
  },
  {
    t: "Mango Research",
    d: "Mango sudden death syndrome, postharvest diseases, high-density nursery establishment and ASLP collaboration.",
    i: FlaskConical,
  },
];

function Research() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 relative">
      {/* Background glow elements */}
      <div
        className="absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] dark:bg-accent/10"
        aria-hidden
      />

      {/* BIO */}
      <section className="grid gap-12 lg:grid-cols-12 animate-fade-up">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Profile</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
            A scientist's <span className="gradient-text">record</span>.
          </h1>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dr. Faisal Sohail Fateh holds a PhD in Plant Pathology from PMAS Arid Agriculture
            University, Rawalpindi, and an M.Sc. (Hons) with a silver medal from the University of
            Arid Agriculture. He has served at the National Agricultural Research Centre (NARC),
            Islamabad since 2004, rising to Principal Scientific Officer in 2020. His research spans
            mango sudden death syndrome, citrus decline, wheat rusts, rice diseases and molecular
            diagnostics. He has developed international research relations with Australia, China,
            Malaysia, Japan, Saudi Arabia and Russia, and has provided plant pathological services
            to the Armed Forces of Pakistan.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { l: "Peer-reviewed papers", v: "25+" },
              { l: "Trainings conducted", v: "60+" },
              { l: "Years at NARC", v: "20+" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-card p-5 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-3xl font-extrabold text-primary">{s.v}</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mt-28 animate-fade-up" style={{ animationDelay: "100ms" }}>
        <div className="flex items-end justify-between border-b border-border/70 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Career epochs
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Professional Timeline
            </h2>
          </div>
          <Award className="hidden h-8 w-8 text-primary md:block animate-pulse" />
        </div>

        <div className="relative mt-12 pl-6 sm:pl-10">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border/50 to-transparent sm:left-4" />
          <ol className="space-y-8">
            {timeline.map((t, idx) => (
              <li
                key={t.year}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <span className="absolute -left-[23px] top-6 grid h-5 w-5 place-items-center rounded-full bg-background border-2 border-primary ring-4 ring-background transition-transform duration-300 group-hover:scale-125 group-hover:bg-primary sm:-left-[33px]" />
                <div className="rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-2xl">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-sm font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {t.year}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{t.title}</h3>
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-primary">{t.meta}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VECTORS */}
      <section className="mt-28 animate-fade-up" style={{ animationDelay: "150ms" }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Specialization vectors
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Core disciplines
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vectors.map((v, i) => (
            <div
              key={v.t}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-accent/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section
        className="mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-elegant animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="flex items-center gap-3 border-b border-border/70 pb-5">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            Selected publications
          </h2>
        </div>
        <ul className="mt-6 divide-y divide-border/70">
          {[
            {
              t: "Assessment of bacterial leaf blight incidence and severity in rice growing areas of Pakistan",
              j: "Pakistan Journal of Agricultural Research · 2021, 34(4): 693–699",
            },
            {
              t: "Peach rot disease prevalence in the markets of federal capital territory, Pakistan",
              j: "Pakistan Journal of Agricultural Research · 2020, 33(3): 429–432",
            },
            {
              t: "Black scurf of potato disease prevalence in the markets of federal capital territory, Pakistan",
              j: "Pakistan Journal of Agricultural Research · 2020, 33(3): 440–444",
            },
            {
              t: "Distribution of citrus decline in district Sargodha",
              j: "Pakistan Journal of Agricultural Sciences · 2017, 54(1): 9–13",
            },
            {
              t: "Influence of different fungicides and plant extracts against Ceratocystis fimbriata associated with mango sudden death (MSD)",
              j: "SAJMS · 2016, 3(2): 1–10",
            },
            {
              t: "Pre-harvest Management Strategies for Post-harvest Disease Control in Mango",
              j: "Plant Pathology in 21st Century · 2014, 7: 73–80",
            },
            {
              t: "First record of Ceratocystis fimbriata associated with Shisham (Dalbergia sissoo) decline in Pakistan",
              j: "Australasian Plant Disease Notes · 2010, 5: 63–65",
            },
            {
              t: "Identification of phytoplasma from mango trees showing sudden death phenomenon through molecular techniques",
              j: "Pakistan Journal of Botany · 2007, 39: 2153–2157",
            },
            {
              t: "Ceratocystis fimbriata isolated from vascular bundles of declining mango trees in Sindh, Pakistan",
              j: "Pakistan Journal of Botany · 2006, 38(4): 1257–1259",
            },
            {
              t: "Incidence and Etiology of Mango Sudden Death Phenomenon in Pakistan",
              j: "Pakistan Journal of Phytopathology · 2005, 17(2): 154–158",
            },
          ].map((p, idx) => (
            <li
              key={p.t}
              className="grid gap-2 py-5 sm:grid-cols-12 group items-center transition-colors hover:bg-secondary/20 px-2 rounded-lg"
            >
              <div className="flex gap-3 sm:col-span-9 items-start">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.t}
                </p>
              </div>
              <p className="text-xs text-muted-foreground sm:col-span-3 sm:text-right font-medium italic">
                {p.j}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
