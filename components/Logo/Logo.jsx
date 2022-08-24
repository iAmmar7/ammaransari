import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <a className='btn-header font-bold text-2xl no-underline ml-3 hover:opacity-80 leading-10 -mt-1 hover:scale-150 hover:text-secondary hover:skew-y-6 z-20'>
        A
      </a>
    </Link>
  );
}

export default Logo;
