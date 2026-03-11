export type SkillDomain =
  | 'web'
  | 'server'
  | 'mobile'
  | 'databases'
  | 'desktop'
  | 'cloud'
  | 'general'
  | 'languages';

export interface Skill {
  id: string;
  name: string;
  domain: SkillDomain;
  ratings: number;
  major: boolean;
  priority?: number;
}
