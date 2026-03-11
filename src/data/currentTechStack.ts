import type { Skill } from '@/types/skill';
import skills from './skills';

interface TechStackDisplay {
  icon: string;
  color: string;
  hoverColor: string;
}

export interface TechStackItem extends Skill {
  icon: string;
  color: string;
  hoverColor: string;
}

const techStackConfig: Record<string, TechStackDisplay> = {
  ts: {
    icon: '/svg/typescript.svg',
    color: 'text-typescript',
    hoverColor: 'group-hover:text-typescript',
  },
  next: { icon: '/svg/next.svg', color: 'text-next', hoverColor: 'group-hover:text-next' },
  react: { icon: '/svg/react.svg', color: 'text-react', hoverColor: 'group-hover:text-react' },
  tailwind: {
    icon: '/svg/tailwind.svg',
    color: 'text-tailwind',
    hoverColor: 'group-hover:text-tailwind',
  },
  webrtc: { icon: '/svg/webrtc.svg', color: 'text-webrtc', hoverColor: 'group-hover:text-webrtc' },
  electron: {
    icon: '/svg/electron.svg',
    color: 'text-electron',
    hoverColor: 'group-hover:text-electron',
  },
  playwright: {
    icon: '/svg/playwright.svg',
    color: 'text-playwright',
    hoverColor: 'group-hover:text-playwright',
  },
  rails: { icon: '/svg/rails.svg', color: 'text-rails', hoverColor: 'group-hover:text-rails' },
  node: { icon: '/svg/node.svg', color: 'text-node', hoverColor: 'group-hover:text-node' },
};

const CURRENT_TECH_STACK: TechStackItem[] = Object.entries(techStackConfig).map(([id, display]) => {
  const skill = skills.find((s) => s.id === id);
  if (!skill) throw new Error(`Skill "${id}" not found in skills data`);
  return { ...skill, ...display };
});

export default CURRENT_TECH_STACK;
