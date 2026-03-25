import { generatePageMetadata } from '@/lib/metadata';
import PageLayout from '@/components/page-layout';
import Skills from './_components/skills';

export const metadata = generatePageMetadata({
  title: 'Skills - TypeScript, React, Node.js & More',
  description:
    'Having worked with a diverse group of people, I have had the opportunity to collaborate on multiple projects and contribute using various tech stacks.',
  image: '/images/code-meta.jpeg',
  route: '/skills',
});

export default function SkillsPage() {
  return (
    <PageLayout tagline='Skills' summary='Technologies I have used throughout my career' lastUpdated='March 2026'>
      <Skills />
    </PageLayout>
  );
}
