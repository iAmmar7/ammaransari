import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { socialLinks } from '../../lib/socialMedia';
import Icon from '../Icon';
import Badge from '../Badge';

function SocialLinks(props) {
  const { className } = props;
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className={clsx('flex items-center gap-x-3 pb-2', className)}>
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
              title={`${title} - Ammar Ansari`}
            >
              <Icon
                icon={icon}
                className={`text-2xl text-primary group-hover:md:animate-pulse group-hover:text-secondary`}
              />
            </motion.a>
            <AnimatePresence>
              {hoveredLink === title && (
                <motion.span
                  layoutId={title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='absolute top-9 right-1/2 translate-x-1/2 text-sm'
                >
                  <Badge type='secondary'>{title}</Badge>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
