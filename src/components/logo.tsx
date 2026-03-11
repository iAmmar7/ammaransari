import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href='/#home'
      className='btn-header font-bold text-2xl no-underline ml-1 sm:ml-3 leading-10 -mt-1 hover:text-accent z-20'
      title='Ammar Ansari'
    >
      A.
    </Link>
  );
}
