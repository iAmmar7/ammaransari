import Hero from '../Hero/Hero';
import Section from './Section';

function HomeSection(props) {
  return (
    <Section id='home'>
      <Hero {...props} />
    </Section>
  );
}

export default HomeSection;
