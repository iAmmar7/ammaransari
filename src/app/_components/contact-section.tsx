import Section from './section';
import Contact from './contact';
import Footer from '@/components/footer';

export default function ContactSection() {
  return (
    <Section
      id='contact'
      title='Connect with me'
      showNext={false}
      footer={<Footer />}
    >
      <Contact />
    </Section>
  );
}
