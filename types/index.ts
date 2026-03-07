export type Domain = 'freelance' | 'side-project' | 'challenge' | 'company-based' | 'open-source';

export type SkillDomain =
  | 'web'
  | 'server'
  | 'databases'
  | 'mobile'
  | 'cloud'
  | 'general'
  | 'languages'
  | 'softwares';

export type EmploymentType = 'Full-time' | 'Part-time';

export interface Project {
  id: string;
  name: string;
  summary: string;
  description?: string;
  features?: string[];
  contribution?: string | string[];
  domain: Domain;
  company?: string;
  technologies: string[];
  thumbnail?: string;
  code?: string;
  url?: string;
  apk?: string;
  spotlight?: boolean;
  current?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  domain: SkillDomain;
  ratings: number;
  major: boolean;
  priority?: number;
}

export interface ClientEntry {
  clientId: number;
  client: string;
  clientTag: string;
  clientUrl?: string;
  clientTheme: string;
  clientSubsidiary?: string;
  clientSubsidiaryTag?: string;
  clientSubsidiaryUrl?: string;
  clientSubsidiaryTheme?: string;
  clientSummary: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  companyTag: string;
  companyUrl?: string;
  companyTheme?: string;
  type: EmploymentType;
  startDate: string;
  endDate?: string;
  location: string;
  summary: (string | ClientEntry)[];
}

export interface SocialLink {
  title: string;
  url: string;
  icon: string;
}

export interface TechStackItem {
  name: string;
  domain: string;
}
