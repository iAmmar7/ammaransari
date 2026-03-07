import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects and work by Ammar Ansari',
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const skillFilter = typeof params.skill === 'string' ? params.skill : undefined;

  const filtered = skillFilter
    ? projects.filter((p) => p.technologies.includes(skillFilter))
    : projects;

  return (
    <Section>
      <Container>
        <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
          Work
        </p>
        <h1 className='text-4xl sm:text-5xl'>Projects</h1>

        <ProjectFilters activeSkill={skillFilter} />

        <ProjectGrid projects={filtered} />

        {filtered.length === 0 && (
          <p className='mt-12 text-center text-fg-muted'>
            No projects found for this skill.{' '}
            <Link href='/projects' className='text-accent hover:text-accent-hover'>
              View all projects
            </Link>
          </p>
        )}
      </Container>
    </Section>
  );
}
