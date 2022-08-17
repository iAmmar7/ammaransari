import Head from 'next/head';

import { Navbar, Hero, Footer } from '../components';
import { APP_URL } from '../utils/constants';

export default function Home(props) {
  const { title, description, image } = props;

  return (
    <div className='flex flex-col relative min-h-screen z-0'>
      <Head>
        <title>{title}</title>
        <meta content={title} property='og:title' />
        <meta content={description} name='description' />
        <meta content={description} property='og:description' />
        <meta content={APP_URL} property='og:url' />
        <meta content={`${APP_URL}${image}`} property='og:image' />
      </Head>
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
