const skills = [
  // Domain: WEB
  // { id: 'html', name: 'HTML', domain: 'web', ratings: 4, major: false },
  // { id: 'css', name: 'CSS', domain: 'web', ratings: 4, major: false },
  { id: 'js', name: 'JavaScript', domain: 'web', ratings: 4, major: false },
  { id: 'ts', name: 'TypeScript', domain: 'web', ratings: 3.5, major: false },
  { id: 'react', name: 'React JS', domain: 'web', ratings: 4, major: true, priority: 1 },
  { id: 'next', name: 'Next JS', domain: 'web', ratings: 3.5, major: true, priority: 2 },
  { id: 'webrtc', name: 'WebRTC', domain: 'web', ratings: 3, major: true, priority: 7 },
  { id: 'redux', name: 'Redux', domain: 'web', ratings: 3, major: true, priority: 4 },
  { id: 'redux-saga', name: 'Redux Saga', domain: 'web', ratings: 3, major: true },
  { id: 'context-api', name: 'Context API', domain: 'web', ratings: 4, major: true },
  { id: 'react-query', name: 'React Query', domain: 'web', ratings: 3, major: true },
  { id: 'swr', name: 'SWR', domain: 'web', ratings: 2.5, major: true },
  { id: 'apollo', name: 'Apollo', domain: 'web', ratings: 3, major: true },
  { id: 'graphql', name: 'GraphQL', domain: 'web', ratings: 3, major: true, priority: 5 },
  { id: 'sass', name: 'Sass', domain: 'web', ratings: 3.5, major: false },
  { id: 'bootstrap', name: 'Bootstrap', domain: 'web', ratings: 3, major: false },
  { id: 'tailwind', name: 'Tailwind', domain: 'web', ratings: 4, major: true },
  { id: 'material-ui', name: 'Material-UI', domain: 'web', ratings: 3, major: true },
  { id: 'ant-design', name: 'Ant Design', domain: 'web', ratings: 3, major: true },
  { id: 'styled-components', name: 'Styled Components', domain: 'web', ratings: 3, major: false },
  { id: 'framer-motion', name: 'Framer Motion', domain: 'web', ratings: 2, major: true },
  { id: 'canvas', name: 'Canvas API', domain: 'web', ratings: 2, major: false },
  { id: 'jest', name: 'JEST', domain: 'web', ratings: 2, major: true },
  {
    id: 'react-testing-library',
    name: 'React Testing Library',
    domain: 'web',
    ratings: 2.5,
    major: true,
  },
  { id: 'playwright', name: 'Playwright', domain: 'web', ratings: 2.5, major: false },
  // { id: 'webpack', name: 'Webpack', domain: 'web', ratings: 2, major: false },
  // { id: 'vite', name: 'Vite', domain: 'web', ratings: 1.5, major: false },
  // { id: 'wordpress', name: 'Wordpress', domain: 'web', ratings: 2, major: false },
  // { id: 'gatsby', name: 'Gatsby JS', domain: 'web', ratings: 1, major: false },
  // { id: 'jamstack', name: 'JAMStack', domain: 'web', ratings: 1, major: false },

  // Domain: SERVER
  { id: 'node', name: 'Node JS', domain: 'server', ratings: 3, major: true, priority: 3 },
  { id: 'express', name: 'Express JS', domain: 'server', ratings: 3.5, major: false },
  { id: 'rest', name: 'RESTful API', domain: 'server', ratings: 4, major: false },
  {
    id: 'firebase-functions',
    name: 'Firebase Functions',
    domain: 'server',
    ratings: 4,
    major: false,
  },
  { id: 'mongoose', name: 'Mongoose ODM', domain: 'server', ratings: 3.5, major: false },
  { id: 'sequelize', name: 'Sequelize ORM', domain: 'server', ratings: 3, major: false },
  { id: 'graphql-server', name: 'GraphQL', domain: 'server', ratings: 3, major: false },
  // { id: 'oauth', name: 'Sessions and OAuth', domain: 'server', ratings: 3, major: false },
  // { id: 'apollo-server', name: 'Apollo Server', domain: 'server', ratings: 2, major: false },
  // { id: 'graphql-yoga', name: 'GraphQL Yoga', domain: 'server', ratings: 2.5, major: false },
  { id: 'cron-jobs', name: 'Cron Jobs', domain: 'server', ratings: 3, major: true },
  { id: 'nodemailer', name: 'Nodemailer', domain: 'server', ratings: 2, major: false },
  { id: 'stripe', name: 'Stripe APIs', domain: 'server', ratings: 2.5, major: true },
  // { id: 'yt-data-api', name: 'Youtube Data API', domain: 'server', ratings: 2, major: false },
  { id: 'socket-io', name: 'Socket IO', domain: 'server', ratings: 3, major: true },
  { id: 'swagger', name: 'Swagger', domain: 'server', ratings: 2, major: false },
  // { id: 'webhooks', name: 'Webhooks', domain: 'server', ratings: 1.5, major: false },

  // Domain: DATABASES
  { id: 'mysql', name: 'MySQL', domain: 'databases', ratings: 3, major: true },
  { id: 'mongodb', name: 'MongoDB', domain: 'databases', ratings: 2.5, major: true },
  { id: 'redis', name: 'Redis', domain: 'databases', ratings: 2, major: true },
  { id: 'firebase', name: 'Firebase', domain: 'databases', ratings: 3, major: true },

  // Domain: MOBILE
  { id: 'react-native', name: 'React Native', domain: 'mobile', ratings: 3, major: true },
  { id: 'expo', name: 'Expo', domain: 'mobile', ratings: 3, major: false },
  {
    id: 'react-native-paper',
    name: 'React Native Paper',
    domain: 'mobile',
    ratings: 3.5,
    major: false,
  },
  { id: 'task-manager', name: 'Task Manager', domain: 'mobile', ratings: 2, major: false },
  { id: 'open-weather-api', name: 'Open Weather API', domain: 'mobile', ratings: 2, major: false },
  // { id: 'google-maps', name: 'Google Maps API', domain: 'mobile',ratings: 1.5, major: false },

  // Domain: CLOUD
  // { id: 'ubuntu', name: 'Ubuntu', domain: 'cloud', ratings: 2, major: false },
  { id: 'ssh', name: 'SSH', domain: 'cloud', ratings: 1.5, major: false },
  { id: 'aws-ec2', name: 'AWS EC2', domain: 'cloud', ratings: 2.5, major: true },
  { id: 'digitalocean', name: 'DigitalOcean', domain: 'cloud', ratings: 2, major: true },
  { id: 'cloud-functions', name: 'Cloud Functions', domain: 'cloud', ratings: 3, major: true },
  { id: 'heroku', name: 'Heroku', domain: 'cloud', ratings: 2.5, major: true },
  { id: 'vercel', name: 'Vercel', domain: 'cloud', ratings: 2.5, major: true },
  { id: 'pm2', name: 'PM2', domain: 'cloud', ratings: 2.5, major: true },
  // { id: 'serverless', name: 'Serverless', domain: 'cloud', ratings: 0.5, major: false },

  // Domain: GENERAL
  { id: 'dsa', name: 'Data Structures', domain: 'general', ratings: 3.5, major: false },
  { id: 'oop', name: 'OOP', domain: 'general', ratings: 3, major: false },
  { id: 'algo', name: 'Algorithms', domain: 'general', ratings: 3, major: false },
  { id: 'git', name: 'Git', domain: 'general', ratings: 3, major: false },
  { id: 'github', name: 'GithHub', domain: 'general', ratings: 3, major: false },
  { id: 'bitbucket', name: 'BitBucket', domain: 'general', ratings: 2, major: false },
  { id: 'gitlab', name: 'GitLab', domain: 'general', ratings: 2.5, major: false },

  // Domain: LANGUAGES
  { id: 'js-lang', name: 'JavaScript', domain: 'languages', ratings: 4, major: false },
  { id: 'cplusplus', name: 'C++', domain: 'languages', ratings: 2, major: false },
  { id: 'python', name: 'Python', domain: 'languages', ratings: 1.5, major: false },

  // Domain: SOFTWARES
  // { id: 'vscode', name: 'VSCode', domain: 'softwares', ratings: 4, major: false },
  // { id: 'postman', name: 'Postman', domain: 'softwares', ratings: 3, major: false },
  // { id: 'jira', name: 'Jira', domain: 'softwares', ratings: 2, major: false },
  // { id: 'ms-office', name: 'Microsoft Office', domain: 'softwares', ratings: 2.5, major: false },
  // { id: 'google-docs', name: 'Google Docs', domain: 'softwares', ratings: 2, major: false },
  // { id: 'confluence', name: 'Confluence', domain: 'softwares', ratings: 1.5, major: false },
];

export default skills;
