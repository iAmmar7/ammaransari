import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { projects } from '@/data/projects';
import { ProjectFilters } from './ProjectFilters';

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

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className='flex h-full flex-col'>
                <h3 className='text-lg font-semibold text-fg'>{project.name}</h3>
                <p className='mt-1 flex-1 text-sm text-fg-muted'>{project.summary}</p>
                {project.company && (
                  <p className='mt-3 text-xs text-fg-faint'>{project.company}</p>
                )}
                <div className='mt-3 flex flex-wrap gap-1.5'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className='rounded-md bg-bg px-2 py-0.5 text-xs text-fg-faint'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='rounded-md bg-bg px-2 py-0.5 text-xs text-fg-faint'>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>

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
