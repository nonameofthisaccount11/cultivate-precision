import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Send, Copy, ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.936 9.936 0 0 0 4.877 1.28h.005c5.505 0 9.989-4.478 9.99-9.984 0-2.67-1.037-5.178-2.924-7.062C17.19 3.003 14.685 2 12.012 2zm5.836 14.199c-.32.899-1.547 1.64-2.52 1.834-.67.133-1.548.243-4.502-.98-3.774-1.563-6.208-5.395-6.397-5.648-.187-.253-1.5-1.999-1.5-3.815 0-1.815.945-2.709 1.282-3.062.336-.353.73-.44.973-.44a.78.78 0 0 1 .596.282c.243.593.83 2.016.902 2.164.072.148.12.32.02.518-.098.199-.148.32-.294.495-.147.175-.308.388-.44.52a.377.377 0 0 0-.083.424c.16.28.71 2.923 2.87 4.846 2.158 1.923 3.978 2.52 4.398 2.695.42.175.67.149.92-.128.25-.278 1.082-1.258 1.372-1.688.29-.43.58-.359.976-.212.397.147 2.523 1.189 2.96 1.408.437.22.73.328.835.507.106.18.106 1.03-.214 1.929z" />
  </svg>
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Faisal Sohail Fateh" },
      { name: "description", content: "Contact Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad. Phone: +92-333-5562477. Email: f.sohail@parc.gov.pk" },
      { property: "og:title", content: "Contact — Dr. Faisal Sohail Fateh" },
      { property: "og:description", content: "Contact Dr. Faisal Sohail Fateh at NARC Islamabad." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [v, setV] = useState({ name: "", email: "", org: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.name.trim() || !v.email.includes("@") || v.msg.trim().length < 10) {
      toast.error("Please complete all required fields (message must be at least 10 characters).");
      return;
    }
    toast.success("Message received. Expect a reply within one business day.");
    setV({ name: "", email: "", org: "", msg: "" });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const contactDetails = [
    { 
      icon: MapPin, 
      l: "Address", 
      v: "House No. 11, St. No. 1, Nawaz Town\nNew Shakrial, Islamabad, Pakistan",
      copyVal: "House No. 11, St. No. 1, Nawaz Town, New Shakrial, Islamabad, Pakistan",
      copyable: true
    },
    { 
      icon: Phone, 
      l: "Phone", 
      v: "+92-333-5562477\nMon–Fri · 09:00–17:00 PKT",
      copyVal: "+923335562477",
      copyable: true 
    },
    { 
      icon: Mail, 
      l: "Email", 
      v: "f.sohail@parc.gov.pk",
      copyVal: "f.sohail@parc.gov.pk",
      copyable: true 
    },
    { 
      icon: ShieldCheck, 
      l: "Institution", 
      v: "National Agricultural Research Centre (NARC)\nIslamabad, Pakistan",
      copyVal: "National Agricultural Research Centre (NARC), Islamabad, Pakistan",
      copyable: false 
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" aria-hidden />
      
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
        {/* FORM */}
        <form onSubmit={submit} className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Send an Enquiry</h3>
            <Floating label="Full name" value={v.name} onChange={(x) => setV({ ...v, name: x })} />
            <Floating label="Email" type="email" value={v.email} onChange={(x) => setV({ ...v, email: x })} />
            <Floating label="Organization" value={v.org} onChange={(x) => setV({ ...v, org: x })} />
            <Floating label="Message" textarea value={v.msg} onChange={(x) => setV({ ...v, msg: x })} />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95 cursor-pointer"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* META & MAP */}
        <div className="lg:col-span-5 space-y-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="space-y-4">
            {contactDetails.map((m) => (
              <div 
                key={m.l} 
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{m.l}</p>
                  <p className="mt-1 whitespace-pre-line text-sm font-semibold text-foreground leading-relaxed">{m.v}</p>
                </div>
                {m.copyable && (
                  <button
                    onClick={() => copyToClipboard(m.copyVal || "", m.l)}
                    className="h-8 w-8 rounded-lg border border-border bg-card grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer self-center"
                    title={`Copy ${m.l}`}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* MAP */}
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

          {/* CONNECT ONLINE */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect Online</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Facebook", href: "https://facebook.com", icon: Facebook, colorClass: "text-[#1877F2] bg-[#1877F2]/5 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]" },
                { name: "Instagram", href: "https://instagram.com", icon: Instagram, colorClass: "text-[#E4405F] bg-[#E4405F]/5 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white hover:border-transparent" },
                { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, colorClass: "text-[#0077B5] bg-[#0077B5]/5 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
                { name: "WhatsApp", href: "https://wa.me/923335562477", icon: WhatsAppIcon, colorClass: "text-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 rounded-xl border border-border/70 p-3 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant ${s.colorClass}`}
                >
                  <s.icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Floating({ label, value, onChange, type = "text", textarea = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean }) {
  const cls = "peer w-full rounded-xl border border-border bg-background px-4 pt-6.5 pb-2.5 text-sm text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  return (
    <div className="relative mb-2">
      {textarea ? (
        <textarea rows={4} value={value} onChange={(e) => onChange(e.target.value)} placeholder=" " className={cls} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder=" " className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px]">
        {label}
      </span>
    </div>
  );
}
