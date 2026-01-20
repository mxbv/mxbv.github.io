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
    subtitle: "Managing Special Moments",
    problem: "We all want to remember the important people in our lives, but in the hustle of daily life, it's easy to forget birthdays, lose track of gift ideas, and miss anniversaries.",
    solution: `A simple way to remember what's important and make your loved ones happy on time. Create profiles with photos and notes, use smart sorting to prioritize events, set flexible reminders a week or day in advance. Keep wish lists for gifts, plan your year on a calendar, and find everything instantly through search. All data is stored only on your device.`,
    technologies: ["Swift", "SwiftUI"],
    imageUrl: "/assets/img/projects/dearDates.png",
    imageAlt: "Dear Dates - Managing important dates and gifts",
    link: "/deardates",
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

