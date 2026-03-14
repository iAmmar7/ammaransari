'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { RiArrowRightLine } from '@remixicon/react';

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Section from './section';
import CURRENT_TECH_STACK from '@/data/currentTechStack';
import { hasProjectBySkillId } from '@/lib/helpers';

function TechIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span className={clsx('flex items-center justify-center', className)}>
      <span
        className='block w-full h-full'
        style={{
          maskImage: `url(${src})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          backgroundColor: 'currentColor',
        }}
      />
    </span>
  );
}

export default function CurrentTechStack() {
  return (
    <Section id='skills' title='Current tech-stack'>
      <div className='w-fit mx-auto'>
        <ul className='grid grid-cols-[repeat(3,auto)] sm:grid-cols-[repeat(4,auto)] gap-4 px-2 md:px-0'>
          {CURRENT_TECH_STACK.map((tech, index) => (
            <Link
              key={tech.name}
              href={{
                pathname: '/projects',
                query: hasProjectBySkillId(tech.id) ? { skill: tech.id } : undefined,
              }}
              className={clsx(
                'group relative bg-surface-muted cursor-pointer rounded-base shadow-md backdrop-blur-md transition-all ease-base duration-500 hover:-translate-y-1.5',
                index === 8 && 'sm:hidden'
              )}
              title={`View ${tech.name} projects`}
            >
            <TechIcon
              src={tech.icon}
              className={clsx(
                'w-21.5 h-20 sm:w-32 sm:h-32 rounded-base p-2 sm:p-4 transition duration-500 ease-base',
                'md:group-hover:opacity-10',
                tech.color,
                `md:text-current ${tech.hoverColor}`
              )}
            />
            <p className='pb-2.5 text-center text-xs font-bold md:hidden'>{tech.name}</p>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full hidden md:flex justify-center transition duration-500 ease-base opacity-0 group-hover:opacity-100 font-bold text-lg'>
              {tech.name}
            </p>
          </Link>
        ))}
        </ul>
        <Link href='/skills'>
          <Button
            variant='default'
            size='sm'
            className='mt-4'
            endEnhancer={<Icon icon={RiArrowRightLine} className='ml-1' />}
            title='Go to skills page'
          >
            Other skills
          </Button>
        </Link>
      </div>
    </Section>
  );
}
