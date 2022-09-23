import clsx from 'clsx';
import { socialLinks } from '../../lib/socialMedia';
import { APP_URL } from '../../lib/constants';
import Icon from '../Icon/Icon';

function Footer(props) {
  const { className } = props;

  return (
    <footer
      className={clsx(
        'border-t border-white border-opacity-10 bg-grey bg-opacity-95 backdrop-blur backdrop-filter px-4',
        className
      )}
    >
      <div className='container mx-auto px-5'>
        <div className='flex flex-wrap items-center justify-between gap-y-5 gap-x-7 py-4 text-center md:flex-nowrap'>
          <div className='w-full md:w-auto'>
            <ul className='mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4'>
              {socialLinks.map(({ title, url, icon }) => {
                return (
                  <li key={title} className='inline-block align-middle'>
                    <a
                      href={url}
                      className='text-muted items-center flex text-sm border-0 ml-4 no-underline lowercase hover:text-primary transition duration-sm ease-base focus:text-primary opacity-100 first:m-0 cursor-pointer group'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <span className='hidden sm:block group-hover:text-secondary transition duration-sm ease-base'>
                        {title}
                      </span>
                      <Icon
                        icon={icon}
                        className='text-2xl sm:text-base group-hover:md:animate-pulse ml-[2px] sm:opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-sm group-hover:ease-base group-hover:text-secondary text-primary'
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className='mb-0 w-full md:w-auto text-muted text-sm'>
            &copy; {new Date().getFullYear()}, 🤙{' '}
            <a href={APP_URL} className='font-bold hover:text-secondary transition duration-sm ease-base'>
              AmmarAnsari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
