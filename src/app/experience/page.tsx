import { generatePageMetadata } from '@/lib/metadata';
import PageLayout from '@/components/page-layout';
import WorkExperience from './_components/work-experience';

export const metadata = generatePageMetadata({
  title: 'Experience',
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
