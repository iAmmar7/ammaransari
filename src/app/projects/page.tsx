import { Suspense } from 'react';

import { generatePageMetadata } from '@/lib/metadata';
import PageLayout from '@/components/page-layout';
import Projects from './_components/projects';

export const metadata = generatePageMetadata({
  title: 'Projects',
  description:
    'Projects based on various tech-stack including front-end, back-end, server-side development and a few mobile apps.',
  image: '/images/code-meta.jpeg',
  route: '/projects',
});

export default function ProjectsPage() {
  return (
    <PageLayout
      tagline='Projects'
      summary='Filter and discover projects I have worked on by technology stack.'
      maxWidth='max-w-6xl'
    >
      <Suspense>
        <Projects />
      </Suspense>
    </PageLayout>
  );
}
