import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <a className='btn-header font-bold text-3xl no-underline ml-3 hover:opacity-80'>A</a>
    </Link>
  );
}

export default Logo;
