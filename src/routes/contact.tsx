import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Faisal Plant Pathology" },
      { name: "description", content: "Reach the lab: validated contact form, coordinates, business lines, and encrypted communication." },
      { property: "og:title", content: "Contact — Faisal Plant Pathology" },
      { property: "og:description", content: "Reach the lab: contact form, coordinates and encrypted channels." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [v, setV] = useState({ name: "", email: "", org: "", msg: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.name.trim() || !v.email.includes("@") || v.msg.trim().length < 10) {
      toast.error("Please complete all required fields.");
      return;
    }
    toast.success("Message received. Expect a reply within one business day.");
    setV({ name: "", email: "", org: "", msg: "" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact hub</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          Open a <span className="gradient-text">secure channel</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          For diagnostic intake use the appointment form. For research collaboration, advisory boards
          or media — reach us below.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* FORM */}
        <form onSubmit={submit} className="rounded-3xl border border-border/70 bg-card p-6 shadow-elegant sm:p-10">
          <Floating label="Full name" value={v.name} onChange={(x) => setV({ ...v, name: x })} />
          <Floating label="Email" type="email" value={v.email} onChange={(x) => setV({ ...v, email: x })} />
          <Floating label="Organization" value={v.org} onChange={(x) => setV({ ...v, org: x })} />
          <Floating label="Message" textarea value={v.msg} onChange={(x) => setV({ ...v, msg: x })} />
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>

        {/* META */}
        <div className="space-y-4">
          {[
            { icon: MapPin, l: "Laboratory", v: "Pathology Wing, Block C\nAgri-Sciences Campus · 24.8607° N, 67.0011° E" },
            { icon: Phone, l: "Business Line", v: "+1 (415) 555-0142\nMon–Fri · 09:00–18:00 UTC" },
            { icon: Mail, l: "Encrypted Email", v: "lab@faisal-pathology.science\nPGP fingerprint on request" },
            { icon: ShieldCheck, l: "Compliance", v: "ISO 17025 accredited · GDPR & HIPAA-aligned data handling" },
          ].map((m) => (
            <div key={m.l} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
                <m.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.l}</p>
                <p className="mt-1 whitespace-pre-line text-sm text-foreground">{m.v}</p>
              </div>
            </div>
          ))}

          {/* MAP */}
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
            <iframe
              title="Laboratory location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=67.0%2C24.85%2C67.02%2C24.87&layer=mapnik"
              className="h-64 w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Floating({ label, value, onChange, type = "text", textarea = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean }) {
  const cls = "peer w-full rounded-xl border border-border bg-background px-4 pt-6 pb-2 text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  return (
    <div className="relative mb-4">
      {textarea ? (
        <textarea rows={5} value={value} onChange={(e) => onChange(e.target.value)} placeholder=" " className={cls} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder=" " className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground transition-all">
        {label}
      </span>
    </div>
  );
}
