import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

function NavItem(props) {
  const { name, path } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => setHasMounted(true), []);

  return (
    <li>
      <Link href={path} passHref scroll={false}>
        <a className='border-0 relative hover:opacity-100 focus:opacity-100'>
          <motion.span
            className={clsx(
              "text-muted cursor-pointer inline-block text-xs font-medium p-5 no-underline uppercase transition-colors duration-sm ease-base hover:text-secondary after:hidden md:after:inline after:content-[''] after:absolute after:my-0 after:mx-auto after:inset-x-0 after:top-5 after:h-[2px] after:w-5 after:bg-text-secondary after:transition-opacity after:duration-sm after:ease-base after:opacity-0 hover:after:bg-text-primary",
              hasMounted && asPath === path && 'after:opacity-100 text-secondary md:text-muted'
            )}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {isHovered && (
              <motion.span
                className='absolute top-[-13px] inset-x-0 bg-secondary p-5 rounded-base -z-[1]'
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
