import { Meta, AboutMe } from '../components';
import { BaseLayout } from '../layouts';

function About(props) {
  return (
    <div>
      <Meta {...props} />
      <AboutMe />
    </div>
  );
}

About.Layout = BaseLayout;

export default About;

export async function getStaticProps() {
  const meta = {
    title: 'About - Ammar Ansari',
    description:
      'I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges.',
    tagline: 'About me',
    image: '/images/meta-bw.jpeg',
    route: '/about',
  };

  return { props: meta };
}
