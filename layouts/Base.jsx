import { Navbar, Footer } from '../components';

function Base(props) {
  const { children } = props;
  const {
    props: { tagline },
  } = children;

  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <Navbar />
      <main className='py-28 px-0 sm:py-20 overflow-hidden flex-auto'>
        <div className='text-base leading-8 text-muted relative z-10 h-full py-5 px-0'>
          <div className='my-0 mx-auto max-w-3xl py-0 px-5 relative'>
            <h1 className='text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>
              {tagline}
            </h1>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Base;
