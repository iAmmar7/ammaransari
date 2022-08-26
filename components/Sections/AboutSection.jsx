import React from 'react';

import AboutMe from '../AboutMe/AboutMe';
import Section from './Section';

function AboutSection() {
  return (
    <Section id='about' navViewAmount={0.6}>
      <AboutMe />
    </Section>
  );
}

export default AboutSection;
