import { Fragment } from 'react';

import Meta from '../../components/Meta';
import Projects from '../../components/Projects';
import BaseLayout from '../../layouts/BaseLayout';

function ProjectsPage(props) {
  return (
    <Fragment>
      <Meta {...props} />
      <Projects />
    </Fragment>
  );
}

ProjectsPage.Layout = BaseLayout;

export default ProjectsPage;

export async function getStaticProps() {
  const meta = {
    title: 'Projects - Ammar Ansari',
    summary: 'Technologies I have used throughout my career',
    description:
      'Projects based on various tech-stack including front-end, back-end, server-side development and a few mobile apps.',
    tagline: 'Projects',
    image: '/images/code-meta.jpeg',
    route: '/projects',
  };

  return { props: meta };
}
