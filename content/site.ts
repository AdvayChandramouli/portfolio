import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Advay Chandramouli",
  tagline: "SWE, AI/ML & HCI",
  avatar: "/hero/headshot.jpg",
  hero: {
    positioning:
      "Building thoughtful software at the intersection of machine learning and human-computer interaction.",
    ctas: [
      { label: "View projects", href: "#projects" },
      { label: "Get in touch", href: "#contact" },
    ],
    about:
      "I'm a software engineer drawn to problems where intelligent systems meet real human workflows. I enjoy turning research ideas into tools people can actually use, and I care a lot about how the experience feels along the way.",
    interests: [
      "Currently: applied ML research",
      "Time-series forecasting",
      "Computer vision",
      "Human-centered design",
      "Always learning",
    ],
  },
  links: {
    email: "advaycmouli@gmail.com",
    linkedin: "https://www.linkedin.com/in/advaychandramouli/",
    github: "https://github.com/AdvayChandramouli",
    instagram: "https://instagram.com/advay.chandramouli",
    twitter: "https://twitter.com/advaycmouli",
  },
  availability: "Here to connect, learn and grow!",
};
