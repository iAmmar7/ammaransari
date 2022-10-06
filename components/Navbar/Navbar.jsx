import { motion, LayoutGroup } from 'framer-motion';

import Logo from '../Logo';
import NavItem from './NavItem';
import Icon from '../Icon';
import { PAGES } from './constants';

function Navbar() {
  return (
    <LayoutGroup className='relative'>
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='flex items-center justify-center text-xs min-h-[60px] w-full flex-wrap absolute top-0 z-20 mt-2 sm:mt-0'
      >
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
            className='appearance-none bg-transparent rounded-base text-sm outline-0 py-2 px-3 no-underline cursor-pointer transition-all duration-md ease-base hover:bg-muted hover:opacity-100 inline-flex items-center justify-center gap-x-1 group overflow-hidden'
            download
            role='button'
            href='/doc/AmmarAnsari_Resume.pdf'
            title='Download resume'
          >
            <div className='w-fit grid'>
              <div className='[grid-area:1/1] flex items-center justify-center transition ease-in-out translate-y-0 duration-300 group-hover:translate-y-10'>
                <Icon
                  icon='ri-download-line'
                  className='text-muted group-hover:text-primary transition-all duration-md ease-base'
                />
              </div>
              <div className='[grid-area:1/1] flex items-center justify-center transition ease-in-out -translate-y-10 duration-300 group-hover:translate-y-0'>
                <Icon
                  icon='ri-download-line'
                  className='text-muted group-hover:text-primary transition-all duration-md ease-base'
                />
              </div>
            </div>
            <span className='text-muted group-hover:text-primary transition-all duration-md ease-base'>Resume</span>
          </a>
        </div>
      </motion.header>
    </LayoutGroup>
  );
}

export default Navbar;
