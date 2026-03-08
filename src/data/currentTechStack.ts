interface TechStackItem {
  name: string;
  domain: string;
  icon: string;
  hoverColor: string;
}

const CURRENT_TECH_STACK: TechStackItem[] = [
  {
    name: 'TypeScript',
    domain: 'web',
    icon: '/svg/typescript.svg',
    hoverColor: 'group-hover:text-typescript',
  },
  { name: 'Next JS', domain: 'web', icon: '/svg/next.svg', hoverColor: 'group-hover:text-next' },
  { name: 'React JS', domain: 'web', icon: '/svg/react.svg', hoverColor: 'group-hover:text-react' },
  {
    name: 'Tailwind',
    domain: 'web',
    icon: '/svg/tailwind.svg',
    hoverColor: 'group-hover:text-tailwind',
  },
  { name: 'WebRTC', domain: 'web', icon: '/svg/webrtc.svg', hoverColor: 'group-hover:text-webrtc' },
  { name: 'Node JS', domain: 'server', icon: '/svg/node.svg', hoverColor: 'group-hover:text-node' },
  {
    name: 'Firebase',
    domain: 'server',
    icon: '/svg/firebase.svg',
    hoverColor: 'group-hover:text-firebase',
  },
  {
    name: 'Playwright',
    domain: 'web',
    icon: '/svg/playwright.svg',
    hoverColor: 'group-hover:text-playwright',
  },
];

export default CURRENT_TECH_STACK;
