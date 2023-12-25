import Link from 'next/link';

import Button from '../Button';
import Icon from '../Icon';
import Section from './Section';
import PROJECTS from '../../data/projects';
import ProjectList from '../Projects/List';
import { useBreakpoints } from '../../hooks';

const CURRENT_PROJECTS = PROJECTS.filter((project) => project.current);

function CurrentProject() {
  const { xs, sm } = useBreakpoints();

  return (
    <Section id='projects' title='Current project(s)' next='contact'>
      <ProjectList
        projects={CURRENT_PROJECTS}
        count={sm || xs ? 1 : 2}
        className='mt-0 lg:grid-cols-4'
      />
      <Link href='/projects' passHref>
        <Button
          as='a'
          type='default'
          size='sm'
          className='mt-4'
          endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
          title='Go to skills page'
        >
          Past projects
        </Button>
      </Link>
    </Section>
  );
}

export default CurrentProject;
