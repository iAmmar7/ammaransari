import { generatePageMetadata } from '@/lib/metadata';
import PageLayout from '@/components/page-layout';
import { FaqJsonLd } from '@/components/json-ld';
import AboutMe from './_components/about-me';

export const metadata = generatePageMetadata({
  title: 'About - Software Engineer & Consultant',
  description:
    'I am proud to have a unique background that combines system engineering, computer networking, and software development. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges.',
  image: '/images/about-meta.jpeg',
  route: '/about',
});

export default function AboutPage() {
  return (
    <PageLayout tagline='About me' maxWidth='max-w-4xl'>
      <FaqJsonLd />
      <AboutMe />
    </PageLayout>
  );
}
