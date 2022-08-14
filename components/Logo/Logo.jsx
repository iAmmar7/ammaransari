import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <a className='btn-header font-bold text-2xl no-underline ml-3 hover:opacity-80 leading-10 -mt-1'>A</a>
    </Link>
  );
}

export default Logo;
