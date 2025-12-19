import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
  icon: LucideIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'security' | 'dev' | 'other';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}