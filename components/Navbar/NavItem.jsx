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
            className='text-muted cursor-pointer inline-block text-xs font-medium p-5 no-underline uppercase transition-colors duration-md ease-base hover:text-secondary'
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            css={
              pathname === path
                ? {
                    color: '$primary',
                    '&::after': { opacity: 1 },
                  }
                : undefined
            }
          >
            {isHovered && (
              <motion.span
                className='absolute top-[-13px] inset-x-0 bg-secondary p-5 rounded-base z-[-1]'
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
