'use client';

import Hero from './hero';
import Section from './section';

interface HomeSectionProps {
  title: string;
  description: string;
}

export default function HomeSection({ title, description }: HomeSectionProps) {
  return (
    <Section id='home' next='experience'>
      <Hero title={title} description={description} />
    </Section>
  );
}
