import { Fragment } from 'react';

import AboutMe from '../components/AboutMe';
import Meta from '../components/Meta';
import BaseLayout from '../layouts/BaseLayout';

function AboutPage(props) {
  return (
    <Fragment>
      <Meta {...props} />
      <AboutMe />
    </Fragment>
  );
}

AboutPage.Layout = BaseLayout;

export default AboutPage;

export async function getStaticProps() {
  const meta = {
    title: 'About - Ammar Ansari',
    description:
      'I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges.',
    tagline: 'About me',
    image: '/images/about-meta.jpeg',
    route: '/about',
  };

  return { props: meta };
}
