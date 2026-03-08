'use client';

import Link from 'next/link';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Section from './Section';
import projects from '@/data/projects';
import { ProjectList } from '@/components/Projects';
import { useBreakpoints } from '@/hooks';

const CURRENT_PROJECTS = projects.filter((project) => project.spotlight);

export default function CurrentProject() {
  const { xs, sm } = useBreakpoints();

  return (
    <Section id='projects' title='Current project(s)' next='contact'>
      <ProjectList
        projects={CURRENT_PROJECTS}
        count={sm || xs ? 1 : 2}
        className='mt-0 lg:grid-cols-4'
      />
      <Link href='/projects'>
        <Button
          type='default'
          size='sm'
          className='mt-4'
          endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
          title='Go to projects page'
        >
          Past projects
        </Button>
      </Link>
    </Section>
  );
}
