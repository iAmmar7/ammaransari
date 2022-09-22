import clsx from 'clsx';

import { Navbar, Footer } from '../components';

function Base(props) {
  const { children } = props;
  const {
    props: { tagline, summary, route },
  } = children;

  const maxWidth = route === '/projects' ? 'max-w-6xl' : 'max-w-4xl';

  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <Navbar />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto'>
        <div className='text-sm sm:text-base relative z-10 h-full py-5 px-0'>
          <div className={clsx('my-0 mx-auto py-0 px-5 relative', maxWidth)}>
            <div className='mb-5'>
              <h1 className='text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-gradient-to-r from-secondary to-tertiary text-center sm:text-left'>
                {tagline}
              </h1>
              {summary && <p className='text-muted text-sm text-center sm:text-left'>{summary}</p>}
            </div>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Base;
