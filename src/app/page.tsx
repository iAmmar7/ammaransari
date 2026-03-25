import { Fragment } from 'react';
import { generatePageMetadata } from '@/lib/metadata';
import { site } from '@/data/site';

import { SpeakableJsonLd } from '@/components/json-ld';
import HomeSection from './_components/home-section';
import CurrentEmployment from './_components/current-employment';
import CurrentTechStack from './_components/current-tech-stack';
import CurrentProject from './_components/current-project';
import ContactSection from './_components/contact-section';

export const metadata = generatePageMetadata({
  title: site.title,
  description: site.description,
  image: site.ogImage,
});

export default function HomePage() {
  return (
    <Fragment>
      <SpeakableJsonLd url='/' cssSelectors={['#hero-intro']} />
      <HomeSection />
      <CurrentEmployment />
      <CurrentTechStack />
      <CurrentProject />
      <ContactSection />
    </Fragment>
  );
}
