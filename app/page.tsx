import { SITE_NAME } from '@/lib/constants';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <h1 className='text-4xl font-bold'>{SITE_NAME}</h1>
    </div>
  );
}
