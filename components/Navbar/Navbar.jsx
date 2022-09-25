import { useRef } from 'react';
import { LayoutGroup } from 'framer-motion';
import Lottie from 'lottie-react';

import Logo from '../Logo/Logo';
import NavItem from './NavItem';
import { PAGES } from './constants';
import downloadIcon from '../../public/icons/download.json';

function Navbar() {
  const resumeRef = useRef();

  return (
    <LayoutGroup className='relative'>
      <header className='flex items-center justify-center text-xs min-h-[60px] w-full flex-wrap absolute top-0 z-20 mt-2 sm:mt-0'>
        <Logo />
        <nav className='text-center flex-1 order-2 basis-full sm:basis-auto overflow-x-scroll overflow-y-hidden lg:overflow-hidden'>
          <ul className='inline-flex relative md:justify-around'>
            {PAGES.map((page) => (
              <NavItem key={page.name} {...page} />
            ))}
          </ul>
        </nav>
        <div className='flex item-center ml-auto mr-1 sm:mr-3 sm:order-3'>
          <a
            className='appearance-none bg-transparent rounded-base text-muted text-sm outline-0 py-2 px-3 no-underline cursor-pointer transition-all duration-md ease-base hover:bg-muted hover:text-primary hover:opacity-100 inline-flex items-center justify-center'
            download
            role='button'
            href='/doc/AmmarAnsari_Resume.pdf'
            onMouseEnter={() => resumeRef.current?.play()}
            onMouseLeave={() => resumeRef.current?.stop()}
          >
            <Lottie
              lottieRef={resumeRef}
              className='w-5 h-5 mr-2'
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
            />
            Resume
          </a>
        </div>
      </header>
    </LayoutGroup>
  );
}

export default Navbar;
