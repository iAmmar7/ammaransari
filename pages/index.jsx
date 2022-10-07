import dynamic from 'next/dynamic';

import HomeLayout from '../layouts/HomeLayout';
import Meta from '../components/Meta';
import HomeSection from '../components/Sections/HomeSection';

const CurrentEmployment = dynamic(import('../components/Sections/CurrentEmployment'));
const CurrentTechStack = dynamic(import('../components/Sections/CurrentTechStack'));
const CurrentProject = dynamic(import('../components/Sections/CurrentProject'));
const ContactSection = dynamic(import('../components/Sections/ContactSection'));

function HomePage(props) {
  return (
    <div>
      <Meta {...props} />
      <HomeSection {...props} />
      <CurrentEmployment />
      <CurrentTechStack />
      <CurrentProject />
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
      image: '/images/home-meta.jpeg',
    },
  };
}

export default HomePage;
