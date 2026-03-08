'use client';

import Hero from '../Hero';
import Section from './Section';

interface HomeSectionProps {
  title: string;
  description: string;
}

export default function HomeSection({ title, description }: HomeSectionProps) {
  return (
    <Section id="home" next="experience">
      <Hero title={title} description={description} />
    </Section>
  );
}
