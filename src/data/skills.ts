import type { Skill } from '@/types/skill';

const skills: Skill[] = [
  // Domain: WEB
  { id: 'js', name: 'JavaScript', domain: 'web', ratings: 4 },
  { id: 'ts', name: 'TypeScript', domain: 'web', ratings: 4 },
  { id: 'react', name: 'React JS', domain: 'web', ratings: 4 },
  { id: 'next', name: 'Next JS', domain: 'web', ratings: 3.5 },
  { id: 'webrtc', name: 'WebRTC', domain: 'web', ratings: 3 },
  { id: 'redux', name: 'Redux', domain: 'web', ratings: 3 },
  { id: 'redux-saga', name: 'Redux Saga', domain: 'web', ratings: 3 },
  { id: 'context-api', name: 'Context API', domain: 'web', ratings: 4 },
  { id: 'react-query', name: 'React Query', domain: 'web', ratings: 3 },
  { id: 'swr', name: 'SWR', domain: 'web', ratings: 2.5 },
  { id: 'apollo', name: 'Apollo', domain: 'web', ratings: 3 },
  { id: 'graphql', name: 'GraphQL', domain: 'web', ratings: 3 },
  { id: 'websocket', name: 'WebSocket', domain: 'web', ratings: 3.5 },
  { id: 'sass', name: 'Sass', domain: 'web', ratings: 3.5 },
  { id: 'bootstrap', name: 'Bootstrap', domain: 'web', ratings: 3 },
  { id: 'tailwind', name: 'Tailwind', domain: 'web', ratings: 4 },
  { id: 'material-ui', name: 'Material-UI', domain: 'web', ratings: 3 },
  { id: 'ant-design', name: 'Ant Design', domain: 'web', ratings: 3 },
  { id: 'framer-motion', name: 'Framer Motion', domain: 'web', ratings: 2 },
  { id: 'canvas', name: 'Canvas API', domain: 'web', ratings: 2 },
  { id: 'jest', name: 'JEST', domain: 'web', ratings: 2 },
  {
    id: 'react-testing-library',
    name: 'React Testing Library',
    domain: 'web',
    ratings: 2.5,
  },
  { id: 'playwright', name: 'Playwright', domain: 'web', ratings: 3 },
  { id: 'vite', name: 'Vite', domain: 'web', ratings: 3 },
  { id: 'vitest', name: 'Vitest', domain: 'web', ratings: 3 },

  // Domain: SERVER
  { id: 'node', name: 'Node JS', domain: 'server', ratings: 3 },
  { id: 'express', name: 'Express JS', domain: 'server', ratings: 3.5 },
  { id: 'rest', name: 'RESTful API', domain: 'server', ratings: 4 },
  {
    id: 'firebase-functions',
    name: 'Firebase Functions',
    domain: 'server',
    ratings: 4,
  },
  { id: 'mongoose', name: 'Mongoose ODM', domain: 'server', ratings: 3.5 },
  { id: 'sequelize', name: 'Sequelize ORM', domain: 'server', ratings: 3 },
  { id: 'prisma', name: 'Prisma', domain: 'server', ratings: 3 },
  { id: 'cron-jobs', name: 'Cron Jobs', domain: 'server', ratings: 3 },
  { id: 'nodemailer', name: 'Nodemailer', domain: 'server', ratings: 2 },
  { id: 'stripe', name: 'Stripe APIs', domain: 'server', ratings: 2.5 },
  { id: 'socket-io', name: 'Socket IO', domain: 'server', ratings: 3 },
  { id: 'swagger', name: 'Swagger', domain: 'server', ratings: 2 },
  { id: 'rails', name: 'Ruby on Rails', domain: 'server', ratings: 2 },

  // Domain: DATABASES
  { id: 'mysql', name: 'MySQL', domain: 'databases', ratings: 3 },
  { id: 'mongodb', name: 'MongoDB', domain: 'databases', ratings: 2.5 },
  { id: 'redis', name: 'Redis', domain: 'databases', ratings: 2 },
  { id: 'firebase', name: 'Firebase', domain: 'databases', ratings: 3 },
  { id: 'postgresql', name: 'PostgreSQL', domain: 'databases', ratings: 3 },

  // Domain: MOBILE
  { id: 'react-native', name: 'React Native', domain: 'mobile', ratings: 3 },
  { id: 'expo', name: 'Expo', domain: 'mobile', ratings: 3 },
  {
    id: 'react-native-paper',
    name: 'React Native Paper',
    domain: 'mobile',
    ratings: 3.5,
  },
  { id: 'task-manager', name: 'Task Manager', domain: 'mobile', ratings: 2 },
  {
    id: 'open-weather-api',
    name: 'Open Weather API',
    domain: 'mobile',
    ratings: 2,
  },

  // Domain: DESKTOP
  { id: 'electron', name: 'Electron', domain: 'desktop', ratings: 2.5 },

  // Domain: CLOUD
  { id: 'aws', name: 'AWS', domain: 'cloud', ratings: 2.5 },
  { id: 'digitalocean', name: 'DigitalOcean', domain: 'cloud', ratings: 2 },
  { id: 'cloud-functions', name: 'Cloud Functions', domain: 'cloud', ratings: 3 },
  { id: 'heroku', name: 'Heroku', domain: 'cloud', ratings: 2.5 },
  { id: 'vercel', name: 'Vercel', domain: 'cloud', ratings: 2.5 },
  { id: 'pm2', name: 'PM2', domain: 'cloud', ratings: 2.5 },
  { id: 'docker', name: 'Docker', domain: 'cloud', ratings: 2.5 },
  { id: 'nginx', name: 'NGINX', domain: 'cloud', ratings: 2 },
  { id: 'sentry', name: 'Sentry', domain: 'cloud', ratings: 2 },

  // Domain: GENERAL
  { id: 'dsa', name: 'Data Structures', domain: 'general', ratings: 3.5 },
  { id: 'oop', name: 'OOP', domain: 'general', ratings: 3 },
  { id: 'algo', name: 'Algorithms', domain: 'general', ratings: 3 },
  { id: 'git', name: 'Git', domain: 'general', ratings: 3 },
  { id: 'github', name: 'GitHub', domain: 'general', ratings: 3 },
  { id: 'bitbucket', name: 'BitBucket', domain: 'general', ratings: 2 },
  { id: 'gitlab', name: 'GitLab', domain: 'general', ratings: 2.5 },

  // Domain: LANGUAGES
  { id: 'js-lang', name: 'JavaScript', domain: 'languages', ratings: 4 },
  { id: 'ts-lang', name: 'TypeScript', domain: 'languages', ratings: 4 },
  { id: 'cplusplus', name: 'C++', domain: 'languages', ratings: 2 },
  { id: 'ruby', name: 'Ruby', domain: 'languages', ratings: 2 },
  { id: 'python', name: 'Python', domain: 'languages', ratings: 2 },
];

export default skills;
