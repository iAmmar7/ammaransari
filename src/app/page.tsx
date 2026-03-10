import { generatePageMetadata } from '@/lib/metadata';
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

export default function HomePage() {
  return (
    <div className="h-dvh overflow-y-auto snap-y snap-mandatory">
      <HomeSection />
      <CurrentEmployment />
      <CurrentTechStack />
      <CurrentProject />
      <ContactSection />
    </div>
  );
}
