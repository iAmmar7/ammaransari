import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const relatedProjects = projects
    .filter(
      (p) => p.id !== project.id && p.technologies.some((t) => project.technologies.includes(t))
    )
    .slice(0, 3);

  return (
    <Section>
      <Container>
        <Link
          href='/projects'
          className='mb-6 inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent'
        >
          <svg
            className='h-4 w-4'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H5' />
            <path d='M12 19l-7-7 7-7' />
          </svg>
          All projects
        </Link>

        <h1 className='text-4xl sm:text-5xl'>{project.name}</h1>

        {project.company && <p className='mt-2 text-lg text-fg-muted'>{project.company}</p>}

        {project.description && (
          <p className='mt-6 max-w-2xl leading-relaxed text-fg-muted'>{project.description}</p>
        )}

        {/* Links */}
        <div className='mt-6 flex flex-wrap items-center gap-3'>
          {project.url && (
            <Button href={project.url} target='_blank' rel='noopener noreferrer'>
              Live site
            </Button>
          )}
          {project.code && (
            <Button
              href={project.code}
              target='_blank'
              rel='noopener noreferrer'
              variant='secondary'
            >
              Source code
            </Button>
          )}
          {project.apk && (
            <Button href={project.apk} target='_blank' rel='noopener noreferrer' variant='ghost'>
              Download APK
            </Button>
          )}
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className='mt-10'>
            <h2 className='text-2xl'>Features</h2>
            <ul className='mt-4 space-y-2'>
              {project.features.map((feature, i) => (
                <li key={i} className='flex items-start gap-3 text-sm text-fg-muted'>
                  <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent' />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contribution */}
        {project.contribution && (
          <div className='mt-10'>
            <h2 className='text-2xl'>Contribution</h2>
            {typeof project.contribution === 'string' ? (
              <p className='mt-4 text-sm text-fg-muted'>{project.contribution}</p>
            ) : (
              <ul className='mt-4 space-y-2'>
                {project.contribution.map((item, i) => (
                  <li key={i} className='flex items-start gap-3 text-sm text-fg-muted'>
                    <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent' />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className='mt-10'>
          <h2 className='text-2xl'>Technologies</h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <Link key={tech} href={`/projects?skill=${tech}`}>
                <Badge>{tech}</Badge>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className='mt-16 border-t border-border pt-10'>
            <h2 className='text-2xl'>Related projects</h2>
            <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {relatedProjects.map((rp) => (
                <Link key={rp.id} href={`/projects/${rp.id}`}>
                  <Card className='flex h-full flex-col'>
                    <h3 className='text-lg font-semibold text-fg'>{rp.name}</h3>
                    <p className='mt-1 flex-1 text-sm text-fg-muted'>{rp.summary}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
