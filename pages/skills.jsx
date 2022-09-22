import { Fragment } from 'react';
import { Meta, Skills } from '../components';
import { BaseLayout } from '../layouts';

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
      'Having worked in diverse group of people, I have had a chance to collaborate on multiple projects where I contributed using various tech-stack.',
    tagline: 'Skills',
    image: '/images/meta-bw.jpeg',
    route: '/skills',
  };

  return { props: meta };
}
