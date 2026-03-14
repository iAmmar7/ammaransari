import Link from 'next/link';
import { site } from '@/data/site';

export default function Logo() {
  return (
    <Link
      href='/'
      className='btn-header font-bold text-2xl no-underline ml-1 sm:ml-3 leading-10 -mt-1 hover:text-accent z-20'
      title={site.name}
    >
      A.
    </Link>
  );
}
