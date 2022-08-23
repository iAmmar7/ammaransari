import { Meta, HomeSection } from '../components';
import { Home as HomeLayout } from '../layouts';

function Home(props) {
  return (
    <div>
      <Meta {...props} />
      <HomeSection {...props} />
    </div>
  );
}

Home.Layout = HomeLayout;

export async function getStaticProps() {
  return {
    props: {
      title: 'Ammar Ansari',
      description: 'A constant learner striving for perfection',
      image: '/images/meta-bw.jpeg',
    },
  };
}

export default Home;
