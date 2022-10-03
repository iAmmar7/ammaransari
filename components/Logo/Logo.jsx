import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <a
        className='btn-header font-bold text-2xl no-underline ml-1 sm:ml-3 leading-10 -mt-1 hover:text-secondary z-20'
        title='Ammar Ansari'
      >
        A.
      </a>
    </Link>
  );
}

export default Logo;
