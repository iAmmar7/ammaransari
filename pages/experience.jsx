import { Fragment } from 'react';
import { Meta, WorkExperience } from '../components';
import { BaseLayout } from '../layouts';

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
    image: '/images/meta-bw.jpeg',
    route: '/about',
  };

  return { props: meta };
}
