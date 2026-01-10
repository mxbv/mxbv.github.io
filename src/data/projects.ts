export interface Project {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  imageAlt?: string;
  reverse?: boolean;
}

export const projects: Project[] = [
  {
    title: "Dear Dates",
    subtitle: "Managing important dates and gifts",
    problem: "We all want to remember the important people in our lives, but in the hustle of daily life, it's easy to forget birthdays, lose track of gift ideas, and miss anniversaries.",
    solution: `App that combines date tracking, gift management, and personal information in one place, with smart reminders and privacy-first local storage.`,
    technologies: ["Swift", "SwiftUI"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyiaOrHH5yqdVDPReEpME3AYg-zCF1yRLtbRiYT3bwe9I69j9nTSaMNQXJGWaaFtYFaZhbnnJoKJpQNyPJpKZLhgpFh-6bNaNyYUOgVwHb8CIV18xLxjhD4e6PhUGSC0_dV0Zi8C3H4KXqFhX1mBQDITRwedreAF5WsBoimFRM-TzVMSd-kUTjf1JyGM3WBKy5C0KhSFoAFRVDfOcaDwAEs2HjRxwZ9-Sn1lHgnBCi2t3kL_k4Z68UkDJYZuHJ_NFJtCJudrdzjWZL",
    imageAlt: "Dear Dates - Managing important dates and gifts",
    link: "#",
  },
  {
    title: "Svidomo",
    subtitle: "NATURAL WELLNESS KITS FOR CONSCIOUS LIVING",
    problem: "We all want to feel balanced, focused, and well-rested, but finding the right combination of adaptogens, herbal teas, and essential oils requires extensive research, trial and error, and often results in ineffective isolated products that miss the holistic approach needed for lasting wellness.",
    solution: "E-commerce platform offering curated wellness kits that combine science-backed adaptogens, functional herbal teas, essential oils, and crystals in ready-to-use rituals. Each kit targets a specific state (Energy, Focus, Calm, Sleep) with proven synergistic formulas that work simultaneously on body, mind, and senses.",
    technologies: ["Vue 3", "Tailwind CSS", "PHP", "Google API"],
    imageUrl: "/assets/img/projects/svidomo.png",
    imageAlt: "Modern fintech mobile app screens floating in dark space",
    link: "https://svidomo.me",
    reverse: true,
  },
];

