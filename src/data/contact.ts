import { ContactLink } from "./types";
import { profile } from "./profile";

export const contactLinks: ContactLink[] = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    icon: "whatsapp",
  },
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
];
