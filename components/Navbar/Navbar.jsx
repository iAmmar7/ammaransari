import { useEffect, useState } from 'react';
import { LayoutGroup, motion, useScroll } from 'framer-motion';

import Logo from '../Logo/Logo';
import NavItem from './NavItem';
import { pages } from './constants';

function Navbar() {
  const { scrollY } = useScroll();
  const [scroll, setscroll] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 110) setscroll(latest);
    });
  }, [scrollY]);

  return (
    <LayoutGroup className='relative'>
      <header className='flex items-center text-xs min-h-[60px] w-full flex-wrap fixed top-0 z-20 mt-2 sm:mt-0'>
        <motion.div
          initial={{ height: '0px' }}
          animate={{ height: scroll }}
          viewport={{ once: false }}
          className='fixed bg-primary w-full -top-12'
        />
        <Logo />
        <nav className='text-center flex-1 order-2 basis-full sm:order-0 sm:basis-auto overflow-x-scroll overflow-y-hidden lg:overflow-hidden'>
          <ul className='inline-flex relative md:justify-around'>
            {pages.map((page) => (
              <NavItem key={page.name} {...page} />
            ))}
          </ul>
        </nav>
      </header>
    </LayoutGroup>
  );
}

export default Navbar;
