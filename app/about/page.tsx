import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { aboutContent, siteConfig } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>About</p>
        <h1 className='text-4xl sm:text-5xl'>
          {siteConfig.name}
        </h1>
        <p className='mt-2 text-lg text-fg-muted'>{siteConfig.title}</p>

        <div className='mt-10 max-w-2xl space-y-5'>
          {aboutContent.bio.map((paragraph, i) => (
            <p key={i} className='leading-relaxed text-fg-muted'>
              {paragraph}
            </p>
          ))}
        </div>

        <div className='mt-10'>
          <Button href='/doc/AmmarAnsari_Resume.pdf' variant='secondary' download>
            <svg
              className='h-4 w-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' />
              <polyline points='7 10 12 15 17 10' />
              <line x1='12' y1='15' x2='12' y2='3' />
            </svg>
            Download Resume
          </Button>
        </div>
      </Container>
    </Section>
  );
}
