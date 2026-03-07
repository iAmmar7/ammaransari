import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { ExternalLink } from '@/components/ExternalLink';
import { ContactForm } from '@/components/ContactForm';
import { heroContent, siteConfig } from '@/data/content';
import { socialLinks } from '@/lib/socialMedia';
import { currentTechStack } from '@/data/currentTechStack';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';

export default function Home() {
  const currentRole = experience[0];
  const spotlightProjects = projects.filter((p) => p.spotlight);

  return (
    <>
      {/* Hero */}
      <Section className='flex items-center'>
        <Container>
          <p className='mb-3 text-sm font-medium text-accent'>{heroContent.greeting}</p>
          <h1 className='text-5xl font-bold sm:text-7xl'>{heroContent.name}</h1>
          <p className='mt-2 text-xl text-fg-muted sm:text-2xl'>{heroContent.role}</p>
          <p className='mt-6 max-w-xl text-base leading-relaxed text-fg-muted'>
            {heroContent.tagline}
          </p>

          {/* Social links */}
          <div className='mt-8 flex items-center gap-4'>
            {socialLinks.map(({ name, url }) => (
              <ExternalLink
                key={name}
                href={url}
                className='text-sm text-fg-muted hover:text-accent'
              >
                {name}
              </ExternalLink>
            ))}
          </div>

          <div className='mt-8 flex items-center gap-3'>
            <Button href='/about'>About me</Button>
            <Button href='/projects' variant='secondary'>
              View projects
            </Button>
          </div>
        </Container>
      </Section>

      {/* Current Role */}
      {currentRole && (
        <Section className='border-t border-border/50'>
          <Container>
            <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
              Currently
            </p>
            <h2 className='text-3xl sm:text-4xl'>
              {currentRole.title} at{' '}
              {currentRole.companyUrl ? (
                <ExternalLink href={currentRole.companyUrl} className='text-fg hover:text-accent'>
                  {currentRole.company}
                </ExternalLink>
              ) : (
                currentRole.company
              )}
            </h2>
            <ul className='mt-6 space-y-2'>
              {currentRole.summary.map((item) => {
                if (typeof item !== 'string') return null;
                return (
                  <li key={item} className='flex items-start gap-3 text-fg-muted'>
                    <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-accent' />
                    {item}
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* Current Tech Stack */}
      <Section className='border-t border-border/50'>
        <Container>
          <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
            Tech Stack
          </p>
          <h2 className='text-3xl sm:text-4xl'>What I work with</h2>
          <div className='mt-8 flex flex-wrap gap-3'>
            {currentTechStack.map((tech) => (
              <Badge key={tech.name} className='text-sm'>
                {tech.name}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      {/* Spotlight Projects */}
      {spotlightProjects.length > 0 && (
        <Section className='border-t border-border/50'>
          <Container>
            <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
              Featured
            </p>
            <h2 className='text-3xl sm:text-4xl'>Spotlight projects</h2>
            <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {spotlightProjects.map((project) => (
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
            <div className='mt-8'>
              <Button href='/projects' variant='secondary'>
                View all projects
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Contact */}
      <Section id='contact' className='border-t border-border/50'>
        <Container>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
                Contact
              </p>
              <h2 className='text-3xl sm:text-4xl'>Get in touch</h2>
              <p className='mt-4 text-fg-muted'>
                Have a question or want to work together? Fill out the form or reach out directly at{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='text-accent hover:text-accent-hover'
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <Card hover={false}>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
