'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { site } from '@/data/site';

interface NavItemProps {
  name: string;
  path: string;
}

export default function NavItem({ name, path }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const isActive = pathname.startsWith(path);

  const css = isActive
    ? "text-accent sm:text-muted cursor-pointer inline-block text-xs font-medium p-5 no-underline uppercase transition-colors duration-200 ease-base hover:text-accent after:hidden sm:after:inline after:content-[''] after:absolute after:my-0 after:mx-auto after:inset-x-0 after:top-5 after:h-[2px] after:w-5 after:bg-accent after:transition-opacity after:duration-200 after:ease-base after:opacity-100 hover:after:bg-accent"
    : "text-muted cursor-pointer inline-block text-xs font-medium p-5 no-underline uppercase transition-colors duration-200 ease-base hover:text-accent after:hidden md:after:inline after:content-[''] after:absolute after:my-0 after:mx-auto after:inset-x-0 after:top-5 after:h-[2px] after:w-5 after:bg-accent after:transition-opacity after:duration-200 after:ease-base after:opacity-0 hover:after:bg-accent";

  return (
    <li>
      <Link
        href={path}
        className='border-0 relative hover:opacity-100 focus:opacity-100'
        title={`${name} - ${site.name}`}
      >
        <motion.span
          className={css}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {isHovered && (
            <motion.span
              className='hidden sm:block absolute -top-3.25 inset-x-0 bg-surface-secondary p-5 rounded-base -z-1'
              layoutId='nav'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          {name}
        </motion.span>
      </Link>
    </li>
  );
}
