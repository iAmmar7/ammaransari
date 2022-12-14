import { Fragment } from 'react';

import BaseLayout from '../layouts/BaseLayout';
import Meta from '../components/Meta';
import WorkExperience from '../components/WorkExperience';

function ExperiencePage(props) {
  return (
    <Fragment>
      <Meta {...props} />
      <WorkExperience />
    </Fragment>
  );
}

ExperiencePage.Layout = BaseLayout;

export default ExperiencePage;

export async function getStaticProps() {
  const meta = {
    title: 'Experience - Ammar Ansari',
    description:
      'From small-scale startups to well-established teams, I have been fortunate enough to have experience working in both.',
    tagline: 'Work Experience',
    image: '/images/code-meta.jpeg',
    route: '/experience',
  };

  return { props: meta };
}
