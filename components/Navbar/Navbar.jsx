import { LayoutGroup } from 'framer-motion';

import Logo from '../Logo/Logo';
import NavItem from './NavItem';
import { pages } from './constants';

function Navbar() {
  return (
    <LayoutGroup>
      <header className='flex items-center text-xs min-h-[60px] w-full flex-wrap absolute top-0 z-10 mt-3 lg:mt-0'>
        <Logo />
        <nav className='text-center flex-1 order-2 basis-full lg:order-0 lg:basis-auto overflow-x-scroll overflow-y-hidden lg:overflow-hidden'>
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
