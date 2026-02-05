
export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string[];
  result: string;
  stack: string[];
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}
