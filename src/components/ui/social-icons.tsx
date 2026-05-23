"use client"

import { useState } from "react"

const socials = [
  {
    name: "Email",
    href: "mailto:f.sohail@parc.gov.pk",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7" fill="none">
        <rect width="20" height="16" x="2" y="4" rx="2" fill="#EA4335"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-faisal-sohail-fateh-75589b18",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/faisalsohailfateh?igsh=bmxncWRxb2k4YWo0",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#ig-grad)"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CppgiRvjF/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7">
        <rect width="24" height="24" rx="4" fill="#1877F2"/>
        <path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 0 1 4-4h2v3z" fill="#fff"/>
      </svg>
    ),
  },
]

export function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-foreground/5 border border-border">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-foreground/[0.03] to-transparent pointer-events-none" />

      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target={social.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center size-14 rounded-xl transition-colors duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={social.name}
        >
          <span
            className={`absolute inset-1 rounded-lg bg-foreground/[0.08] transition-all duration-300 ease-out ${
              hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          <span
            className={`relative z-10 transition-all duration-300 ease-out ${
              hoveredIndex === index ? "scale-110" : "scale-100"
            }`}
          >
            {social.icon}
          </span>
          <span
            className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-foreground transition-all duration-300 ease-out ${
              hoveredIndex === index ? "w-3 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <span
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-foreground text-background text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
              hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
            }`}
          >
            {social.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-foreground" />
          </span>
        </a>
      ))}
    </div>
  )
}
