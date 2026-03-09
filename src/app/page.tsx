import { generatePageMetadata } from '@/lib/metadata';
import FullPageScroll from './_components/full-page-scroll';
import HomeSection from './_components/home-section';
import CurrentEmployment from './_components/current-employment';
import CurrentTechStack from './_components/current-tech-stack';
import CurrentProject from './_components/current-project';
import ContactSection from './_components/contact-section';

export const metadata = generatePageMetadata({
  title: 'Ammar Ansari',
  description: 'A constant learner striving for perfection',
  image: '/images/home-meta.jpeg',
});

const SECTION_IDS = ['home', 'experience', 'skills', 'projects', 'contact'];

export default function HomePage() {
  return (
    <FullPageScroll sectionIds={SECTION_IDS}>
      <HomeSection />
      <CurrentEmployment />
      <CurrentTechStack />
      <CurrentProject />
      <ContactSection />
    </FullPageScroll>
  );
}
