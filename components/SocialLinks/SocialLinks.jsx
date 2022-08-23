import { socialLinks } from '../../lib/socialMedia';
import Icon from '../Icon/Icon';
import Badge from '../Badge/Badge';

function SocialLinks() {
  return (
    <div className='flex items-left gap-x-3 pb-2'>
      {socialLinks.map(({ title, url, icon }) => {
        return (
          <div key={title} className='transition duration-md ease-base group relative'>
            <a
              href={url}
              className='text-muted no-underline focus:text-primary cursor-pointer'
              target='_blank'
              rel='noreferrer'
            >
              <Icon
                icon={icon}
                className={`text-2xl text-primary group-hover:md:animate-pulse group-hover:text-secondary`}
              />
            </a>
            <span className='absolute top-9 right-1/2 translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-md ease-base'>
              <Badge type='secondary'>
                <p>{title}</p>
              </Badge>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
