import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Check, ChevronLeft, ChevronRight, UploadCloud, FileText, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book a Diagnostic — Faisal Plant Pathology" },
      { name: "description", content: "Multi-step intake for scheduling pathology consultations and secure document uploads." },
      { property: "og:title", content: "Book a Diagnostic" },
      { property: "og:description", content: "Schedule a pathology consultation and upload field documents securely." },
    ],
  }),
  component: Appointment,
});

const STEPS = ["Contact", "Service", "Schedule", "Documents"];
const SERVICES = ["Epidemiological Audit", "Digital Consultation", "Lab QA Engagement", "Research Partnership"];
const TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00"];

function Appointment() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", location: "", agent: "", service: SERVICES[0], date: "", time: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + i); return d;
  });

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((f) => [...f, ...Array.from(list)].slice(0, 6));
  };

  const submit = () => {
    if (!form.name || !form.email) { toast.error("Please complete the contact step."); setStep(0); return; }
    if (!form.date || !form.time) { toast.error("Please pick a date and time."); setStep(2); return; }
    toast.success("Intake received. Our coordinator will confirm within 24 hours.");
    setStep(0);
    setForm({ name: "", email: "", location: "", agent: "", service: SERVICES[0], date: "", time: "" });
    setFiles([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 pb-20">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Appointment intake</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
          Schedule a <span className="gradient-text">diagnostic</span>.
        </h1>
      </header>

      {/* Stepper */}
      <ol className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-2">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-col items-center text-center">
            <div className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold transition-all
              ${i < step ? "border-primary bg-primary text-primary-foreground"
                : i === step ? "border-accent bg-accent text-accent-foreground shadow-elegant"
                : "border-border bg-card text-muted-foreground"}`}>
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`mt-2 text-xs font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
          </li>
        ))}
      </ol>

      <section className="mt-10 rounded-3xl border border-border/70 bg-card p-6 shadow-elegant sm:p-10">
        {step === 0 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Dr. Maria Chen" />
            <Field label="Enterprise Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="maria@enterprise.ag" />
            <Field label="Field Location / Phone" value={form.location} onChange={(v) => setForm({ ...form, location: v })} placeholder="Punjab region · +1 415 555 0142" />
            <Field label="Referring Agronomist / Agency" value={form.agent} onChange={(v) => setForm({ ...form, agent: v })} placeholder="(Optional)" />
          </div>
        )}

        {step === 1 && (
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Pathology Service Required</label>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm({ ...form, service: s })}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5
                    ${form.service === s ? "border-primary bg-primary/5 shadow-elegant" : "border-border hover:border-accent/50"}`}
                >
                  <p className="text-sm font-semibold">{s}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Detailed scope provided after intake review.</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Select Date</p>
              <div className="mt-4 grid grid-cols-7 gap-2">
                {days.map((d) => {
                  const iso = d.toISOString().slice(0, 10);
                  const active = form.date === iso;
                  return (
                    <button
                      key={iso}
                      type="button"
                      onClick={() => setForm({ ...form, date: iso })}
                      className={`flex flex-col items-center rounded-xl border p-2 text-xs transition-all
                        ${active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-accent"}`}
                    >
                      <span className="opacity-70">{d.toLocaleDateString(undefined, { weekday: "short" })}</span>
                      <span className="mt-1 text-lg font-bold">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Time Slot</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    disabled={!form.date}
                    onClick={() => setForm({ ...form, time: t })}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all disabled:opacity-40
                      ${form.time === t ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-accent"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Secure Document Upload</p>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
              onClick={() => inputRef.current?.click()}
              className={`mt-4 cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all
                ${dragging ? "border-accent bg-accent/5 scale-[1.01]" : "border-border bg-secondary/40 hover:border-accent/50"}`}
            >
              <UploadCloud className={`mx-auto h-10 w-10 transition-transform ${dragging ? "scale-110 text-accent" : "text-muted-foreground"}`} />
              <p className="mt-3 text-sm font-medium">Drop soil reports, field imagery or prior diagnostics</p>
              <p className="mt-1 text-xs text-muted-foreground">PDF, JPG, PNG · up to 6 files · encrypted in transit</p>
              <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />
            </div>
            {files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between rounded-xl border border-border/70 bg-card px-4 py-3 text-sm">
                    <span className="flex items-center gap-2 truncate">
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="truncate">{f.name}</span>
                      <span className="text-xs text-muted-foreground">({(f.size / 1024).toFixed(0)} KB)</span>
                    </span>
                    <button onClick={() => setFiles(files.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive">
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* NAV */}
        <div className="mt-10 flex items-center justify-between border-t border-border/70 pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:border-foreground disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Submit Intake <Check className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}
