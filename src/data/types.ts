export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  whatsapp: string; 
  github: string;
  linkedin: string;
  cvFile: string; 
  img: string; 
}

export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  // role: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  type: "formation" | "diplome" | "certification" | "projet" ;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "whatsapp";
}
