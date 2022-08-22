import { Navbar, Footer } from '../components';

function Base(props) {
  const { children } = props;
  const {
    props: { tagline },
  } = children;

  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <Navbar />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto'>
        <div className='text-base leading-8 text-muted relative z-10 h-full py-5 px-0'>
          <div className='my-0 mx-auto max-w-4xl py-0 px-5 relative'>
            <h1 className='text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-secondary to-tertiary mb-5 text-center sm:text-left'>
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
