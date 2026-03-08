export interface Project {
  id: string;
  name: string;
  summary: string;
  description?: string;
  features?: string[];
  contribution?: string | string[];
  domain: string;
  technologies: string[];
  thumbnail?: string;
  code?: string;
  url?: string;
  apk?: string;
  company?: string;
  current?: boolean;
  spotlight?: boolean;
}
