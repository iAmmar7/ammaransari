'use client';

import Link from 'next/link';
import { RiArrowRightLine } from '@remixicon/react';

import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Section from './section';
import projects from '@/data/projects';
import ProjectList from '@/components/projects/list';
import useBreakpoints from '@/hooks/useBreakpoints';

const CURRENT_PROJECTS = projects.filter((project) => project.spotlight);

export default function CurrentProject() {
  const { xs, sm } = useBreakpoints();

  return (
    <Section id='projects' title='Current projects'>
      <ProjectList
        projects={CURRENT_PROJECTS}
        count={sm || xs ? 1 : 2}
        className='mt-0 lg:grid-cols-4'
      />
      <Link href='/projects'>
        <Button
          variant='default'
          size='sm'
          className='mt-4'
          endEnhancer={<Icon icon={RiArrowRightLine} className='ml-1' />}
          title='Go to projects page'
        >
          Past projects
        </Button>
      </Link>
    </Section>
  );
}
