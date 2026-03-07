import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { skills } from '@/data/skills';
import type { SkillDomain } from '@/types';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and expertise of Ammar Ansari',
};

const domainLabels: Record<SkillDomain, string> = {
  web: 'Web',
  server: 'Server',
  databases: 'Databases',
  mobile: 'Mobile',
  cloud: 'Cloud',
  general: 'General',
  languages: 'Languages',
  softwares: 'Softwares',
};

const domainOrder: SkillDomain[] = [
  'web',
  'server',
  'databases',
  'mobile',
  'cloud',
  'general',
  'languages',
];

export default function SkillsPage() {
  const grouped = domainOrder
    .map((domain) => ({
      domain,
      label: domainLabels[domain],
      items: skills.filter((s) => s.domain === domain),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <Section>
      <Container>
        <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
          Expertise
        </p>
        <h1 className='text-4xl sm:text-5xl'>Skills</h1>

        <div className='mt-12 space-y-10'>
          {grouped.map(({ domain, label, items }) => (
            <div key={domain}>
              <h2 className='mb-4 text-lg font-semibold text-fg'>{label}</h2>
              <div className='flex flex-wrap gap-2'>
                {items.map((skill) => (
                  <Link key={skill.id} href={`/projects?skill=${skill.id}`}>
                    <Badge
                      className={
                        skill.major
                          ? 'border-accent/30 bg-accent-muted text-accent hover:border-accent hover:text-accent'
                          : ''
                      }
                    >
                      {skill.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
