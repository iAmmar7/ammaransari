import { LayoutGroup } from 'framer-motion';

import Logo from '../Logo/Logo';
import NavItem from './NavItem';
import { PAGES } from './constants';

function Navbar() {
  return (
    <LayoutGroup className='relative'>
      <header className='flex items-center text-xs min-h-[60px] w-full flex-wrap absolute top-0 z-20 mt-2 sm:mt-0'>
        <Logo />
        <nav className='text-center flex-1 order-2 basis-full sm:order-0 sm:basis-auto overflow-x-scroll overflow-y-hidden lg:overflow-hidden'>
          <ul className='inline-flex relative md:justify-around'>
            {PAGES.map((page) => (
              <NavItem key={page.name} {...page} />
            ))}
          </ul>
        </nav>
      </header>
    </LayoutGroup>
  );
}

export default Navbar;
