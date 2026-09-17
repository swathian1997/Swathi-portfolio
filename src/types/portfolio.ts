export interface Project {
  id: string;
  title: string;
  category: 'enterprise' | 'freelance' | 'ai' | 'automation';
  categoryLabel: string;
  role: string;
  organization?: string;
  timeframe?: string;
  summary: string;
  description: string;
  keyHighlights: string[];
  technologies: string[];
  aiToolsUsed?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  statusBadge?: string;
}

export interface CareerTimelineItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: 'Full-time Enterprise' | 'Freelance / Project-Based' | 'Continuous Learning & Prototyping';
  statusBadge: string;
  summary: string;
  keyPoints: string[];
  skills: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: 'Full-time' | 'Freelance / Project-Based' | 'Freelance / Client Projects';
  duration: string;
  location: string;
  isCompleted: boolean;
  summary: string;
  responsibilities: string[];
  skills: string[];
  deliverables?: {
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Hands-on' | 'Exploration & Learning';
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  category: 'Frontend' | 'Salesforce' | 'AI & Prompting' | 'Full-Stack & Backend';
  description?: string;
}

export interface AiExplorationTopic {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
  isDedicatedCard?: boolean;
}

export interface CareerStep {
  title: string;
  subtitle: string;
  period?: string;
  badge: string;
  iconName: string;
}
