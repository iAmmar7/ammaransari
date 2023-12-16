import { Fragment } from 'react';

import Skills from '../components/Skills';
import Meta from '../components/Meta';
import BaseLayout from '../layouts/BaseLayout';

function SkillsPage(props) {
  return (
    <Fragment>
      <Meta {...props} />
      <Skills />
    </Fragment>
  );
}

SkillsPage.Layout = BaseLayout;

export default SkillsPage;

export async function getStaticProps() {
  const meta = {
    title: 'Skills - Ammar Ansari',
    summary: 'Technologies I have used throughout my career',
    description:
      'Having worked with a diverse group of people, I have had the opportunity to collaborate on multiple projects and contribute using various tech stacks.',
    tagline: 'Skills',
    image: '/images/code-meta.jpeg',
    route: '/skills',
  };

  return { props: meta };
}
