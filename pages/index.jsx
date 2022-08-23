import { Hero, Meta, Icon } from '../components';
import { Home as HomeLayout } from '../layouts';

function Home(props) {
  return (
    <div>
      <Meta {...props} />
      <section id='section-home' className='min-h-screen overflow-hidden flex flex-col justify-center'>
        <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
        <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative'>
          <Hero {...props} />
        </div>
        <div className='absolute inset-x-0 top-auto bottom-10 w-full justify-between text-center text-muted'>
          <p className='inline-flex flex-row-reverse gap-x-2'>
            <span>more</span>
            <Icon icon='ri-arrow-down-line' className='animate-bounce ml-1 mt-[2px] group-hover:text-secondary' />
          </p>
        </div>
      </section>
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
