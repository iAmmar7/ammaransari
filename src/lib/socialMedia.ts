import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiStackOverflowLine,
  type RemixiconComponentType,
} from '@remixicon/react';

export interface SocialLink {
  title: string;
  url: string;
  icon: RemixiconComponentType;
}

export const socialLinks: SocialLink[] = [
  {
    title: 'Email',
    url: 'mailto:contact@ammaransari.dev',
    icon: RiMailLine,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/iammar7',
    icon: RiGithubLine,
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/iammar7',
    icon: RiLinkedinLine,
  },
  {
    title: 'StackOverflow',
    url: 'https://stackoverflow.com/u/16401056',
    icon: RiStackOverflowLine,
  },
];
