import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "gestion-bibliotheque",
    name: "Application de gestion de bibliothèque",
    problem:
      "Suivre manuellement les ressources d'une bibliothèque (emprunts, retours, disponibilité) devient vite source d'erreurs.",
    solution:
      "Une application qui centralise l'inventaire et le suivi des emprunts pour donner une vue claire et à jour des ressources disponibles.",
    features: [
      "Gestion des ressources (ajout, modification, suppression)",
      "Suivi des emprunts et des retours",
      "Recherche et filtrage des ressources",
    ],
    stack: ["PHP", "JavaScript","Bootstrap", "HTML","Xampp server", "CSS"],
    // role: "Conception et développement complet de l'application.",
    githubUrl: "https://github.com/hanssystem1-blip",
  },
  {
    slug: "suivi-consultation",
    name: "Application de suivi de consultation",
    problem:
      "Garder une trace fiable des consultations et de leur historique est essentiel pour un suivi de qualité.",
    solution:
      "Une application qui permet d'enregistrer, organiser et retrouver facilement les consultations et leur historique.",
    features: [
      "Enregistrement des consultations",
      "Historique par patient ou par période",
      "Tableau de suivi clair",
    ],
    stack: ["PHP", "JavaScript","Bootstrap", "HTML", "Xampp server"," Sweetalert2", "CSS"],
    // role: "Conception de la structure de données et développement des fonctionnalités.",
    githubUrl: "https://github.com/hanssystem1-blip/centre-medicale",
  },
  {
    slug: "auth-otp",
    name: "Système d'authentification OTP",
    problem:
      "De nombreuses applications ont besoin d'une vérification d'identité simple et sécurisée, sans mot de passe complexe à retenir.",
    solution:
      "Un système d'authentification par code à usage unique (OTP), pensé pour être intégré facilement dans d'autres applications et sites web.",
    features: [
      "Génération et validation de codes OTP",
      "Expiration automatique des codes",
      "Intégration simple dans un projet existant",
    ],
    stack: ["PHP", "JavaScript","API","JWT", "Twillio", "Xampp server"],
    // role: "Conception et développement du système d'authentification.",
    githubUrl: "https://github.com/hanssystem1-blip/auth-otp",
  },
  {
    slug: "facturation",
    name: "Application de facturation",
    problem:
      "Le suivi manuel des factures rend difficile d'avoir une vision claire des paiements et des montants dus.",
    solution:
      "Une application qui centralise la création des factures et améliore le suivi du processus de facturation de bout en bout.",
    features: [
      "Création et édition de factures",
      "Suivi du statut des paiements",
      "Vue d'ensemble des factures en cours",
    ],
    stack: ["TypeScript","Tailwind CSS","Next.js", "Supabase", "Vercel", "sweetalert2","hooks form","jspdf"],
    // role: "Conception et développement complet de l'application.",
    githubUrl: "https://github.com/hanssystem1-blip/fact-marketV1",
  },
];
