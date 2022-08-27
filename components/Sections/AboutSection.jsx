import AboutMe from '../AboutMe/AboutMe';
import Section from './Section';
import { useBreakpoints } from '../../hooks';

function AboutSection() {
  const { sm } = useBreakpoints();

  return (
    <Section id='about' navViewAmount={!sm ? 0.8 : 0.4}>
      <AboutMe />
    </Section>
  );
}

export default AboutSection;
