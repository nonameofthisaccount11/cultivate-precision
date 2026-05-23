import { Leaf } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import { SocialIcons } from "@/components/ui/social-icons";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Services", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <Footer
      brandName="Faisal.Lab"
      brandDescription="Plant pathology consultancy by Dr. Faisal Sohail Fateh, Principal Scientific Officer at NARC Islamabad. Specialising in crop disease diagnosis, molecular diagnostics and mango disease management."
      socialSlot={<SocialIcons />}
      navLinks={navLinks}
      brandIcon={<Leaf className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />}
    />
  );
}
