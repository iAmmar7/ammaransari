import { socialLinks } from '../../lib/socialMedia';
import Icon from '../Icon/Icon';

function SocialLinks() {
  return (
    <div className='flex items-left gap-x-3 mt-2'>
      {socialLinks.map(({ title, url, icon }) => {
        return (
          <a
            key={title}
            href={url}
            className='text-muted no-underline transition-colors duration-md ease-base focus:text-primary cursor-pointer group'
            target='_blank'
            rel='noreferrer'
          >
            <Icon
              icon={icon}
              className={`text-2xl text-primary group-hover:md:animate-pulse group-hover:text-secondary`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
