import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  FileText,
  X,
  Calendar,
  Clock,
  User,
  Clipboard,
  Layers,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Dr. Faisal Sohail Fateh" },
      {
        name: "description",
        content:
          "Schedule a plant pathology consultation with Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad.",
      },
      { property: "og:title", content: "Book a Consultation — Dr. Faisal Sohail Fateh" },
      {
        property: "og:description",
        content: "Schedule a plant pathology consultation and upload field documents.",
      },
    ],
  }),
  component: Appointment,
});

const STEPS = ["Contact", "Service", "Schedule", "Documents", "Summary"];
const SERVICES = [
  {
    name: "Crop Disease Diagnosis",
    d: "On-site field surveillance, specimen sampling & disease etiology report.",
  },
  {
    name: "Molecular Diagnostics",
    d: "Laboratory-based PCR diagnostics, phytoplasma detection & sequencing prep.",
  },
  {
    name: "Mango Disease Management",
    d: "Tailored treatments for sudden death syndrome & high-density nurseries.",
  },
  {
    name: "Research & Training Collaboration",
    d: "Farmer field school setups, capacity-building seminars & scientific partnerships.",
  },
];
const TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00"];

function Appointment() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    agent: "",
    service: SERVICES[0].name,
    date: "",
    time: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const today = new Date();
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const validateCurrentStep = () => {
    if (step === 0) {
      if (!form.name.trim()) {
        toast.error("Please enter your name.");
        return false;
      }
      if (!form.email.trim() || !form.email.includes("@")) {
        toast.error("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 1) {
      if (!form.service) {
        toast.error("Please select a pathology service.");
        return false;
      }
    }
    if (step === 2) {
      if (!form.date) {
        toast.error("Please select a date.");
        return false;
      }
      if (!form.time) {
        toast.error("Please select a time slot.");
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (validateCurrentStep()) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((f) => [...f, ...Array.from(list)].slice(0, 6));
  };

  const submit = () => {
    toast.success("Intake received successfully. Our coordinator will contact you shortly.");
    setStep(0);
    setForm({
      name: "",
      email: "",
      location: "",
      agent: "",
      service: SERVICES[0].name,
      date: "",
      time: "",
    });
    setFiles([]);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 relative">
      {/* Background glow effects */}
      <div
        className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10"
        aria-hidden
      />

      <header className="text-center animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Appointment intake
        </p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Schedule a <span className="gradient-text">diagnostic</span>.
        </h1>
        <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
          Complete our multi-step intake form to secure advisory or scientific service with Dr.
          Faisal.
        </p>
      </header>

      {/* Stepper */}
      <ol
        className="mx-auto mt-12 grid grid-cols-5 gap-1 sm:gap-2 max-w-3xl animate-fade-up"
        style={{ animationDelay: "100ms" }}
      >
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-col items-center text-center">
            <div
              className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold transition-all duration-300
              ${
                i < step
                  ? "border-primary bg-primary text-primary-foreground"
                  : i === step
                    ? "border-accent bg-accent text-accent-foreground shadow-elegant scale-110"
                    : "border-border bg-card text-muted-foreground"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span
              className={`mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider ${i === step ? "text-primary font-extrabold" : "text-muted-foreground"}`}
            >
              {label}
            </span>
          </li>
        ))}
      </ol>

      <section
        className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 animate-fade-up"
        style={{ animationDelay: "150ms" }}
      >
        {/* STEP 0: CONTACT */}
        {step === 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Full Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Dr. Maria Chen"
            />
            <Field
              label="Enterprise Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="maria@enterprise.ag"
            />
            <Field
              label="Field Location / Phone"
              value={form.location}
              onChange={(v) => setForm({ ...form, location: v })}
              placeholder="Punjab region · +92 300 1234567"
            />
            <Field
              label="Referring Agronomist / Agency"
              value={form.agent}
              onChange={(v) => setForm({ ...form, agent: v })}
              placeholder="(Optional)"
            />
          </div>
        )}

        {/* STEP 1: SERVICE */}
        {step === 1 && (
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Select Pathology Service Required
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setForm({ ...form, service: s.name })}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 cursor-pointer
                    ${form.service === s.name ? "border-primary bg-primary/5 shadow-elegant ring-2 ring-primary/20" : "border-border bg-card/50 hover:border-accent/50"}`}
                >
                  <p className="text-sm font-bold text-foreground">{s.name}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: SCHEDULE */}
        {step === 2 && (
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Select Date
              </p>
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2">
                {days.map((d) => {
                  const iso = d.toISOString().slice(0, 10);
                  const active = form.date === iso;
                  return (
                    <button
                      key={iso}
                      type="button"
                      onClick={() => setForm({ ...form, date: iso })}
                      className={`flex flex-col items-center rounded-xl border p-3 text-xs transition-all duration-200 cursor-pointer
                        ${active ? "border-primary bg-primary text-primary-foreground shadow-elegant scale-102" : "border-border bg-card hover:border-accent"}`}
                    >
                      <span className="opacity-70 text-[10px] uppercase font-bold">
                        {d.toLocaleDateString(undefined, { weekday: "short" })}
                      </span>
                      <span className="mt-1 text-lg font-bold">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Time Slot
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    disabled={!form.date}
                    onClick={() => setForm({ ...form, time: t })}
                    className={`rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-200 disabled:opacity-40 cursor-pointer
                      ${form.time === t ? "border-accent bg-accent text-accent-foreground shadow-elegant scale-102" : "border-border bg-card hover:border-accent"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: DOCUMENTS */}
        {step === 3 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Secure Document Upload
            </p>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                addFiles(e.dataTransfer.files);
              }}
              onClick={() => inputRef.current?.click()}
              className={`mt-4 cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300
                ${dragging ? "border-accent bg-accent/10 scale-[1.01]" : "border-border bg-secondary/20 hover:border-accent/40"}`}
            >
              <UploadCloud
                className={`mx-auto h-12 w-12 transition-transform duration-300 ${dragging ? "scale-110 text-accent" : "text-muted-foreground"}`}
              />
              <p className="mt-3 text-sm font-semibold text-foreground">
                Drop soil reports, field imagery or prior diagnostics
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PDF, JPG, PNG · up to 6 files · encrypted in transit
              </p>
              <input
                ref={inputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => addFiles(e.target.files)}
              />
            </div>
            {files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {files.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3 text-sm animate-fade-in"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="truncate font-medium">{f.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({(f.size / 1024).toFixed(0)} KB)
                      </span>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFiles(files.filter((_, j) => j !== i));
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* STEP 4: SUMMARY */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Confirm Diagnostic Consultation</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <SummaryItem
                icon={User}
                label="Grower Details"
                value={`${form.name} (${form.email})`}
              />
              <SummaryItem icon={Layers} label="Consulting Service" value={form.service} />
              <SummaryItem icon={Calendar} label="Date" value={form.date} />
              <SummaryItem icon={Clock} label="Time Slot" value={form.time} />
              <SummaryItem
                icon={Clipboard}
                label="Field Info"
                value={`Location: ${form.location || "Not specified"} | Referring Agency: ${form.agent || "None"}`}
              />
              <SummaryItem
                icon={FileText}
                label="Uploaded Documents"
                value={
                  files.length > 0 ? files.map((f) => f.name).join(", ") : "No reports uploaded"
                }
              />
            </div>
          </div>
        )}

        {/* NAV */}
        <div className="mt-10 flex items-center justify-between border-t border-border/70 pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:border-foreground disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Submit Intake <Check className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
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

function SummaryItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-border bg-card/60">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground truncate whitespace-pre-wrap">
          {value}
        </p>
      </div>
    </div>
  );
}
