const skills = [
  // { name: 'HTML', ratings: 4, domain: 'web' },
  // { name: 'CSS', ratings: 4, domain: 'web' },
  { name: 'JavaScript', ratings: 4, domain: 'web' },
  { name: 'TypeScript', ratings: 2.5, domain: 'web' },
  { name: 'React JS', ratings: 4, major: true, priority: 1, domain: 'web' },
  { name: 'Next JS', ratings: 3, major: true, priority: 2, domain: 'web' },
  { name: 'Redux', ratings: 3, major: true, priority: 4, domain: 'web' },
  { name: 'Context API', ratings: 4, major: true, domain: 'web' },
  { name: 'React Query', ratings: 3, major: true, domain: 'web' },
  { name: 'SWR', ratings: 2.5, major: true, domain: 'web' },
  { name: 'Apollo', ratings: 3, major: true, domain: 'web' },
  { name: 'GraphQL', ratings: 3, major: true, priority: 5, domain: 'web' },
  { name: 'Sass', ratings: 3.5, domain: 'web' },
  { name: 'Bootstrap', ratings: 3, domain: 'web' },
  { name: 'Tailwind', ratings: 4, major: true, domain: 'web' },
  { name: 'Material-UI', ratings: 3, major: true, domain: 'web' },
  { name: 'Ant Design', ratings: 3, major: true, domain: 'web' },
  { name: 'Styled Components', ratings: 3, domain: 'web' },
  { name: 'Framer Motion', ratings: 2, major: true, domain: 'web' },
  { name: 'JEST', ratings: 2, major: true, domain: 'web' },
  { name: 'React Testing Library', ratings: 2.5, major: true, domain: 'web' },
  // { name: 'Webpack', ratings: 2, domain: 'web' },
  // { name: 'Vite', ratings: 1.5, domain: 'web' },
  // { name: 'Wordpress', ratings: 2, domain: 'web' },
  // { name: 'Gatsby JS', ratings: 1, domain: 'web' },
  // { name: 'JAMStack', ratings: 1, domain: 'web' },
  { name: 'Node JS', ratings: 3, major: true, priority: 3, domain: 'server' },
  { name: 'Express JS', ratings: 3.5, domain: 'server' },
  { name: 'RESTful API', ratings: 4, domain: 'server' },
  // { name: 'Firebase Functions', ratings: 4, domain: 'server' },
  { name: 'Mongoose ODM', ratings: 3.5, domain: 'server' },
  { name: 'Sequelize ORM', ratings: 3, domain: 'server' },
  { name: 'GraphQL', ratings: 3, domain: 'server' },
  // { name: 'Sessions and OAuth', ratings: 3, domain: 'server' },
  // { name: 'Apollo Server', ratings: 2, domain: 'server' },
  // { name: 'GraphQL Yoga', ratings: 2.5, domain: 'server' },
  { name: 'Cron Jobs', ratings: 3, major: true, domain: 'server' },
  { name: 'Nodemailer', ratings: 2, domain: 'server' },
  { name: 'Stripe APIs', ratings: 2.5, major: true, domain: 'server' },
  // { name: 'Youtube Data API', ratings: 2, domain: 'server' },
  { name: 'Socket IO', ratings: 3, major: true, domain: 'server' },
  { name: 'Swagger', ratings: 2, domain: 'server' },
  // { name: 'Webhooks', ratings: 1.5, domain: 'server' },
  { name: 'MySQL', ratings: 3, major: true, domain: 'databases' },
  { name: 'MongoDB', ratings: 2.5, major: true, domain: 'databases' },
  { name: 'Redis', ratings: 2, major: true, domain: 'databases' },
  { name: 'Firebase', ratings: 3, major: true, domain: 'databases' },
  { name: 'React Native', ratings: 3, major: true, domain: 'mobile' },
  { name: 'Expo', ratings: 3, domain: 'mobile' },
  { name: 'React Native Paper', ratings: 3.5, domain: 'mobile' },
  { name: 'Task Manager', ratings: 2, domain: 'mobile' },
  { name: 'Open Weather API', ratings: 2, domain: 'mobile' },
  // { name: 'Google Maps API', ratings: 1.5, domain: 'mobile' },
  // { name: 'Ubuntu', ratings: 2, domain: 'cloud' },
  { name: 'SSH', ratings: 1.5, domain: 'cloud' },
  { name: 'AWS EC2', ratings: 2.5, major: true, domain: 'cloud' },
  { name: 'DigitalOcean', ratings: 2, major: true, domain: 'cloud' },
  { name: 'Cloud Functions', ratings: 3, major: true, domain: 'cloud' },
  { name: 'Heroku', ratings: 2.5, major: true, domain: 'cloud' },
  { name: 'Vercel', ratings: 2.5, major: true, domain: 'cloud' },
  // { name: 'Serverless', ratings: 0.5, domain: 'cloud' },
  { name: 'Data Structures', ratings: 3.5, domain: 'general' },
  { name: 'OOP', ratings: 3, domain: 'general' },
  { name: 'Algorithms', ratings: 3, domain: 'general' },
  { name: 'Git', ratings: 3, domain: 'general' },
  { name: 'GithHub/BitBucket/GitLab', ratings: 2.5, domain: 'general' },
  { name: 'JavaScript', ratings: 4, domain: 'languages' },
  { name: 'C++', ratings: 2, domain: 'languages' },
  { name: 'Python', ratings: 1.5, domain: 'languages' },
  // { name: 'VSCode', ratings: 4, domain: 'softwares' },
  // { name: 'Postman', ratings: 3, domain: 'softwares' },
  // { name: 'Jira', ratings: 2, domain: 'softwares' },
  // { name: 'Microsoft Office', ratings: 2.5, domain: 'softwares' },
  // { name: 'Google Docs', ratings: 2, domain: 'softwares' },
  // { name: 'Confluence', ratings: 1.5, domain: 'softwares' },
];

export default skills;
