import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Web
  { id: 'js', name: 'JavaScript', domain: 'web', major: false },
  { id: 'ts', name: 'TypeScript', domain: 'web', major: false },
  { id: 'react', name: 'React JS', domain: 'web', major: true, priority: 1 },
  { id: 'next', name: 'Next JS', domain: 'web', major: true, priority: 2 },
  { id: 'webrtc', name: 'WebRTC', domain: 'web', major: true, priority: 7 },
  { id: 'redux', name: 'Redux', domain: 'web', major: true, priority: 4 },
  { id: 'redux-saga', name: 'Redux Saga', domain: 'web', major: true },
  { id: 'context-api', name: 'Context API', domain: 'web', major: true },
  { id: 'react-query', name: 'React Query', domain: 'web', major: true },
  { id: 'swr', name: 'SWR', domain: 'web', major: true },
  { id: 'apollo', name: 'Apollo', domain: 'web', major: true },
  { id: 'graphql', name: 'GraphQL', domain: 'web', major: true, priority: 5 },
  { id: 'websocket', name: 'WebSocket', domain: 'web', major: true },
  { id: 'sass', name: 'Sass', domain: 'web', major: false },
  { id: 'bootstrap', name: 'Bootstrap', domain: 'web', major: false },
  { id: 'tailwind', name: 'Tailwind', domain: 'web', major: true },
  { id: 'material-ui', name: 'Material-UI', domain: 'web', major: true },
  { id: 'ant-design', name: 'Ant Design', domain: 'web', major: true },
  { id: 'framer-motion', name: 'Framer Motion', domain: 'web', major: true },
  { id: 'canvas', name: 'Canvas API', domain: 'web', major: false },
  { id: 'jest', name: 'JEST', domain: 'web', major: true },
  { id: 'react-testing-library', name: 'React Testing Library', domain: 'web', major: true },
  { id: 'playwright', name: 'Playwright', domain: 'web', major: false },

  // Server
  { id: 'node', name: 'Node JS', domain: 'server', major: true, priority: 3 },
  { id: 'express', name: 'Express JS', domain: 'server', major: false },
  { id: 'rest', name: 'RESTful API', domain: 'server', major: false },
  { id: 'firebase-functions', name: 'Firebase Functions', domain: 'server', major: false },
  { id: 'mongoose', name: 'Mongoose ODM', domain: 'server', major: false },
  { id: 'sequelize', name: 'Sequelize ORM', domain: 'server', major: false },
  { id: 'cron-jobs', name: 'Cron Jobs', domain: 'server', major: true },
  { id: 'nodemailer', name: 'Nodemailer', domain: 'server', major: false },
  { id: 'stripe', name: 'Stripe APIs', domain: 'server', major: true },
  { id: 'socket-io', name: 'Socket IO', domain: 'server', major: true },
  { id: 'swagger', name: 'Swagger', domain: 'server', major: false },

  // Databases
  { id: 'mysql', name: 'MySQL', domain: 'databases', major: true },
  { id: 'mongodb', name: 'MongoDB', domain: 'databases', major: true },
  { id: 'redis', name: 'Redis', domain: 'databases', major: true },
  { id: 'firebase', name: 'Firebase', domain: 'databases', major: true },

  // Mobile
  { id: 'react-native', name: 'React Native', domain: 'mobile', major: true },
  { id: 'expo', name: 'Expo', domain: 'mobile', major: false },
  { id: 'react-native-paper', name: 'React Native Paper', domain: 'mobile', major: false },
  { id: 'task-manager', name: 'Task Manager', domain: 'mobile', major: false },
  { id: 'open-weather-api', name: 'Open Weather API', domain: 'mobile', major: false },

  // Cloud
  { id: 'aws-ec2', name: 'AWS EC2', domain: 'cloud', major: true },
  { id: 'digitalocean', name: 'DigitalOcean', domain: 'cloud', major: true },
  { id: 'cloud-functions', name: 'Cloud Functions', domain: 'cloud', major: true },
  { id: 'heroku', name: 'Heroku', domain: 'cloud', major: true },
  { id: 'vercel', name: 'Vercel', domain: 'cloud', major: true },
  { id: 'pm2', name: 'PM2', domain: 'cloud', major: true },

  // General
  { id: 'dsa', name: 'Data Structures', domain: 'general', major: false },
  { id: 'oop', name: 'OOP', domain: 'general', major: false },
  { id: 'algo', name: 'Algorithms', domain: 'general', major: false },
  { id: 'git', name: 'Git', domain: 'general', major: false },
  { id: 'github', name: 'GitHub', domain: 'general', major: false },
  { id: 'bitbucket', name: 'BitBucket', domain: 'general', major: false },
  { id: 'gitlab', name: 'GitLab', domain: 'general', major: false },

  // Languages
  { id: 'js-lang', name: 'JavaScript', domain: 'languages', major: false },
  { id: 'cplusplus', name: 'C++', domain: 'languages', major: false },
  { id: 'python', name: 'Python', domain: 'languages', major: false },
];
