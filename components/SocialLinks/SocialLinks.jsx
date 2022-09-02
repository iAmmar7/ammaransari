import { useState } from 'react';
import { motion } from 'framer-motion';

import { socialLinks } from '../../lib/socialMedia';
import Icon from '../Icon/Icon';
import Badge from '../Badge/Badge';

function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className='flex items-left gap-x-3 pb-2'>
      {socialLinks.map(({ title, url, icon }) => {
        return (
          <div key={title} className='relative'>
            <motion.a
              href={url}
              className='transition duration-sm ease-base relative text-muted no-underline focus:text-primary cursor-pointer group'
              target='_blank'
              rel='noreferrer'
              onHoverStart={() => setHoveredLink(title)}
              onHoverEnd={() => setHoveredLink(null)}
            >
              <Icon
                icon={icon}
                className={`text-2xl text-primary group-hover:md:animate-pulse group-hover:text-secondary`}
              />
            </motion.a>
            {hoveredLink === title && (
              <motion.span
                layoutId={title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='absolute top-9 right-1/2 translate-x-1/2 text-sm'
              >
                <Badge type='secondary'>
                  <p>{title}</p>
                </Badge>
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
