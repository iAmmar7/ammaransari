import { generatePageMetadata } from '@/lib/metadata';
import HomeSection from '@/components/Sections/HomeSection';
import CurrentEmployment from '@/components/Sections/CurrentEmployment';

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
    </div>
  );
}
