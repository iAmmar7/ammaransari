import { links } from './constants';
import { Icon } from '../Icon';

function Footer() {
  return (
    <footer className='flex items-center justify-center py-5 px-0'>
      {links.map(({ title, url, icon }) => {
        return (
          <a
            key={title}
            href={url}
            className='text-secondary items-center flex text-sm border-0 ml-4 no-underline lowercase transition-colors duration-md ease-base hover:text-primary focus:text-primary opacity-100 first:m-0 cursor-pointer group'
            target='_blank'
            rel='noreferrer'
          >
            <span className='hidden sm:block'>{title}</span>
            <Icon
              icon={icon}
              className={`text-2xl sm:text-base group-hover:md:animate-pulse ml-[2px] sm:opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-md group-hover:ease-base`}
            />
          </a>
        );
      })}
    </footer>
  );
}

export default Footer;
