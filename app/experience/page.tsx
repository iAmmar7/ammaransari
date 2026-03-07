import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { ExternalLink } from '@/components/ExternalLink';
import { Badge } from '@/components/Badge';
import { experience } from '@/data/experience';
import type { ClientEntry } from '@/types';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work experience and professional background of Ammar Ansari',
};

function isClientEntry(item: string | ClientEntry): item is ClientEntry {
  return typeof item !== 'string' && 'client' in item;
}

export default function ExperiencePage() {
  return (
    <Section>
      <Container>
        <p className='mb-2 text-xs font-semibold uppercase tracking-widest text-accent'>
          Career
        </p>
        <h1 className='text-4xl sm:text-5xl'>Experience</h1>

        <div className='mt-12 space-y-6'>
          {experience.map((entry) => (
            <Card key={entry.id} hover={false}>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <h2 className='text-xl font-semibold text-fg'>{entry.title}</h2>
                  <p className='mt-1 text-fg-muted'>
                    {entry.companyUrl ? (
                      <ExternalLink href={entry.companyUrl}>{entry.company}</ExternalLink>
                    ) : (
                      <span className='text-accent'>{entry.company}</span>
                    )}
                  </p>
                </div>
                <div className='flex flex-wrap items-center gap-2 text-sm text-fg-faint sm:flex-col sm:items-end sm:gap-1'>
                  <span>
                    {entry.startDate} — {entry.endDate ?? 'Present'}
                  </span>
                  <span>{entry.location}</span>
                  <Badge>{entry.type}</Badge>
                </div>
              </div>

              {/* Summary items (strings) */}
              <ul className='mt-5 space-y-2'>
                {entry.summary.map((item, i) => {
                  if (isClientEntry(item)) return null;
                  return (
                    <li key={i} className='flex items-start gap-3 text-sm text-fg-muted'>
                      <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent' />
                      {item}
                    </li>
                  );
                })}
              </ul>

              {/* Client entries */}
              {entry.summary.some(isClientEntry) && (
                <div className='mt-6 space-y-4 border-t border-border pt-5'>
                  {entry.summary.filter(isClientEntry).map((client) => (
                    <div key={client.clientId} className='rounded-lg bg-bg p-4'>
                      <div className='flex items-center gap-2'>
                        <span
                          className='h-2.5 w-2.5 rounded-full'
                          style={{ backgroundColor: client.clientTheme }}
                        />
                        <h3 className='font-semibold text-fg'>
                          {client.clientUrl ? (
                            <ExternalLink href={client.clientUrl}>{client.client}</ExternalLink>
                          ) : (
                            client.client
                          )}
                        </h3>
                        {client.clientSubsidiary && (
                          <span className='text-sm text-fg-faint'>
                            /{' '}
                            {client.clientSubsidiaryUrl ? (
                              <ExternalLink href={client.clientSubsidiaryUrl}>
                                {client.clientSubsidiary}
                              </ExternalLink>
                            ) : (
                              client.clientSubsidiary
                            )}
                          </span>
                        )}
                      </div>
                      <ul className='mt-3 space-y-1.5'>
                        {client.clientSummary.map((point, j) => (
                          <li key={j} className='flex items-start gap-3 text-sm text-fg-muted'>
                            <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-faint' />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
