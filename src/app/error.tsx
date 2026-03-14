'use client';

import Link from 'next/link';

import Footer from '@/components/footer';
import Button from '@/components/ui/button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex flex-col min-h-screen relative z-0'>
      <div className='absolute inset-0 -z-10 bg-home-gradient opacity-40' />
      <main className='px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto grid'>
        <div className='flex flex-col gap-y-2 items-center sm:justify-center mt-10 md:mt-0 px-4'>
          <div className='flex flex-col gap-y-2 items-center'>
            <h1 className='text-7xl sm:text-9xl font-bold text-accent'>!</h1>
            <p className='text-muted text-base md:text-md mb-6 text-center'>
              Something went wrong. Please try again.
            </p>
            <div className='flex gap-2'>
              <Button onClick={reset}>Try again</Button>
              <Link href='/' title='View home page'>
                <Button variant='secondary' className='border border-accent'>
                  Go to home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
