import HomeLayout from '../layouts/HomeLayout';
import Meta from '../components/Meta';
import HomeSection from '../components/Sections/HomeSection';
import CurrentEmployment from '../components/Sections/CurrentEmployment';
import CurrentTechStack from '../components/Sections/CurrentTechStack';
import CurrentProject from '../components/Sections/CurrentProject';
import ContactSection from '../components/Sections/ContactSection';

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
