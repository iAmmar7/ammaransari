import {
  Meta,
  HomeSection,
  AboutSection,
  ExperienceSection,
  SkillSection,
  ProjectSection,
  ContactSection,
} from '../components';
import { HomeLayout } from '../layouts';

function HomePage(props) {
  return (
    <div>
      <Meta {...props} />
      <HomeSection {...props} />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

HomePage.Layout = HomeLayout;

export async function getStaticProps() {
  return {
    props: {
      title: 'Ammar Ansari',
      description: 'A constant learner striving for perfection',
      image: '/images/meta-bw.jpeg',
    },
  };
}

export default HomePage;
