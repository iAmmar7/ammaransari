import { generatePageMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import WorkExperience from '@/components/WorkExperience';

export const metadata = generatePageMetadata({
  title: 'Experience - Ammar Ansari',
  description:
    'From small-scale startups to well-established teams, I have been fortunate enough to have experience working in both.',
  image: '/images/code-meta.jpeg',
  route: '/experience',
});

export default function ExperiencePage() {
  return (
    <PageLayout tagline='Work Experience'>
      <WorkExperience />
    </PageLayout>
  );
}
