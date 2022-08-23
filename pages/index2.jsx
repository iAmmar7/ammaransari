import { Navbar, Hero, Footer, Meta } from '../components';

export default function Home(props) {
  return (
    <div className='flex flex-col relative min-h-screen z-0'>
      <Meta {...props} />
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <Navbar />
      <Hero {...props} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Ammar Ansari',
      description: 'A constant learner striving for perfection',
      image: '/images/meta-bw.jpeg',
    },
  };
}
