import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ExternalLink, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Faisal Sohail Fateh" },
      {
        name: "description",
        content:
          "Contact Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad. Phone: +92-333-5562477. Email: f.sohail@parc.gov.pk",
      },
      { property: "og:title", content: "Contact — Dr. Faisal Sohail Fateh" },
      { property: "og:description", content: "Contact Dr. Faisal Sohail Fateh at NARC Islamabad." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [v, setV] = useState({ name: "", email: "", org: "", msg: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!v.name.trim() || !v.email.includes("@") || v.msg.trim().length < 10) {
      toast.error("Please complete all required fields (message must be at least 10 characters).");
      return;
    }

    toast.success("Message received. Expect a reply within one business day.");
    setV({ name: "", email: "", org: "", msg: "" });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 relative">
      <div
        className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10"
        aria-hidden
      />

      <header className="max-w-3xl animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Get in <span className="gradient-text">touch</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          For diagnostic consultations, please use our appointment form. For research collaboration,
          training enquiries, or general correspondence — reach Dr. Faisal Sohail Fateh below.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
        <form
          onSubmit={submit}
          className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Send an Enquiry</h3>
            <Floating label="Full name" value={v.name} onChange={(x) => setV({ ...v, name: x })} />
            <Floating
              label="Email"
              type="email"
              value={v.email}
              onChange={(x) => setV({ ...v, email: x })}
            />
            <Floating label="Organization" value={v.org} onChange={(x) => setV({ ...v, org: x })} />
            <Floating
              label="Message"
              textarea
              value={v.msg}
              onChange={(x) => setV({ ...v, msg: x })}
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95 cursor-pointer"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant relative group">
            <div className="absolute top-3 right-3 z-10 flex gap-2">
              <span className="bg-background/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded border border-border text-foreground">
                33.684° N, 73.099° E
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=33.684,73.099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/95 text-primary-foreground text-[10px] font-bold px-2 py-1 rounded border border-primary hover:bg-primary transition-colors flex items-center gap-1"
              >
                Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <iframe
              title="NARC Islamabad location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.08%2C33.67%2C73.12%2C33.70&layer=mapnik&marker=33.684%2C73.099"
              className="h-64 w-full grayscale contrast-110 dark:invert dark:opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Floating({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full rounded-xl border border-border bg-background px-4 pt-[1.625rem] pb-[0.625rem] text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div className="relative mb-2">
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={cls}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px]">
        {label}
      </span>
    </div>
  );
}



