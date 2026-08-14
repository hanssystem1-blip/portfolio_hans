import { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Conception",
    description: "Analyser un besoin et structurer une solution avant d'écrire du code,cela fait partie des mes passions.",
    items: ["Analyse fonctionnelle", "Architecture d'application", "Modélisation de données","MVC" ,"UX/UI de base"],
  },
  {
    category: "Développement Frontend",
    description: "Construire des interfaces réactives, accessibles,maintenables et scalables meme a long terme.",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "Bootstrap"],
  },
  {
    category: "Développement Backend",
    description: "La stack qui permet de faire fonctionner la logique métier et connecter les données.",
    items: ["PHP", "API REST", "Neon", "Supabase" , "Laravel " , "Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Méthode de travail",
    description: "Ce qui structure ma façon d'aborder un projet, au-delà des outils.",
    items: ["Résolution de problèmes", "Apprentissage rapide", "Adaptabilité", "Itération progressive" ,"Test unitaire", "Test d'intégration", "Test fonctionnel", "Git", "GitHub", "GitLab"],
  },
];
