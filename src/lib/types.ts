export interface HeroContent {
  positioning: string;
  about: string;
  aboutImage?: string;
  interests: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** Canonical deployed portfolio URL (webring, OG, metadata). */
  url: string;
  avatar?: string;
  hero: HeroContent;
  links: {
    email: string;
    linkedin: string;
    github: string;
    instagram?: string;
    twitter?: string;
  };
  availability: string;
}

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  image?: string;
  imageCaption?: string;
  tags: string[];
  links: {
    code?: string;
    demo?: string;
    writeup?: string;
  };
  highlight?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface Publication {
  title: string;
  venue: string;
  links?: {
    paper?: string;
    code?: string;
    abstract?: string;
  };
}
