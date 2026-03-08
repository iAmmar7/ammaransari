import { generatePageMetadata } from '@/lib/metadata';
import HomeSection from '@/components/Sections/HomeSection';
import CurrentEmployment from '@/components/Sections/CurrentEmployment';
import CurrentTechStack from '@/components/Sections/CurrentTechStack';
import CurrentProject from '@/components/Sections/CurrentProject';
import ContactSection from '@/components/Sections/ContactSection';

export const metadata = generatePageMetadata({
  title: 'Ammar Ansari',
  description: 'A constant learner striving for perfection',
  image: '/images/home-meta.jpeg',
});

export default function HomePage() {
  return (
    <div>
      <HomeSection title="Ammar Ansari" description="A constant learner striving for perfection" />
      <CurrentEmployment />
      <CurrentTechStack />
      <CurrentProject />
      <ContactSection />
    </div>
  );
}
