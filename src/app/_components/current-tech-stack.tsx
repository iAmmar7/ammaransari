'use client';

import Link from 'next/link';
import clsx from 'clsx';

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Section from './section';
import CURRENT_TECH_STACK from '@/data/currentTechStack';

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
    <Section id='skills' title='Current tech-stack' next='projects'>
      <ul className='grid grid-cols-3 sm:grid-cols-4 gap-4 px-2 md:px-0 mt-6 justify-center'>
        {CURRENT_TECH_STACK.map((tech) => (
          <Link
            key={tech.name}
            href={{
              pathname: '/projects',
              query: tech.name === 'TypeScript' ? undefined : { skill: tech.name },
            }}
            className='group relative bg-surface-muted cursor-pointer rounded-base shadow-md backdrop-blur-md transition-all ease-base duration-500 hover:-translate-y-1.5'
            title={`View ${tech.name} projects`}
          >
            <TechIcon
              src={tech.icon}
              className={clsx(
                'w-21.5 sm:w-28 sm:h-28 h-20 rounded-base p-2 sm:p-4 transition duration-500 ease-base group-hover:opacity-10',
                tech.hoverColor
              )}
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center transition duration-500 ease-base opacity-0 group-hover:opacity-100 font-bold text-sm sm:text-lg'>
              {tech.name}
            </p>
          </Link>
        ))}
      </ul>
      <Link href='/skills'>
        <Button
          type='default'
          size='sm'
          className='mt-4'
          endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
          title='Go to skills page'
        >
          Other skills
        </Button>
      </Link>
    </Section>
  );
}
