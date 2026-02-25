export interface Experience {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Incoming Software Engineer Intern",
    company: "Dell Technologies",
    dates: "Summer 2026",
    bullets: [
      "Joining Dell ISG this summer — excited to dive into infrastructure and software at scale."
    ],
  },
  {
    role: "Computational Bioengineering Research Assistant",
    company: "UT Dallas - Department of Bioengineering",
    dates: "January 2026 - Present",
    bullets: [
      "Multinational research on forecasting solitary fibrous tumors using Deep Learning"
    ],
  },
  {
    role: "Software Development Co-Op",
    company: "Verizon",
    dates: "July 2025 - December 2025",
    bullets: [
      "Knowledge-retrieval engine, semantic search and automation pipelines for HGC Wireless Network Performance."
    ],
  },
  {
    role: "ML Research Intern",
    company: "Marshall University - College of Engineering & Computer Sciences",
    dates: "May 2025 - July 2025",
    bullets: [
      "NSF-REU funded research on CNN vs. Transformer-based object detection models for railroad infrastructure monitoring.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "INGENIUS",
    dates: "May 2024 - October 2024",
    bullets: [
      "API & CSV data ingestion pipelines, for creator-centric social media analytics platforms.",
    ],
  },
];
