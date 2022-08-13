import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

function NavItem(props) {
  const { name, path } = props;
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useRouter();

  return (
    <li>
      <Link href={path} passHref>
        <a className='border-0 relative hover:opacity-100 focus:opacity-100'>
          <motion.span
            // className="text-secondary cursor-pointer inline-block text-xs font-medium tracking-base p-5 no-underline uppercase transition-colors duration-md ease-base hover:text-primary after:content-[''] after:absolute after:my-0 after:mx-auto after:top-[18px] after:inset-x-0 after:h-px after:w-5 after:bg-white after:opacity-0 after:transition-opacity after:duration-md after:ease-base"
            className='text-secondary cursor-pointer inline-block text-xs font-medium p-5 no-underline uppercase transition-colors duration-md ease-base hover:text-primary'
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            css={
              pathname === path && {
                color: '$primary',
                '&::after': { opacity: 1 },
              }
            }
          >
            {isHovered && (
              <motion.span
                className='absolute top-[-13px] inset-x-0 bg-hover p-5 rounded-base z-[-1]'
                layoutId='nav'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            {name}
          </motion.span>
        </a>
      </Link>
    </li>
  );
}

export default NavItem;
