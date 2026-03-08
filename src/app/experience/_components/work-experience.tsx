import Timeline from '@/components/timeline';
import ExternalLink from '@/components/ui/external-link';
import experience from '@/data/experience';
import type { ClientSummary, SummaryItem } from '@/types/experience';

function isClientSummary(item: SummaryItem): item is ClientSummary {
  return typeof item === 'object' && 'clientId' in item;
}

export default function WorkExperience() {
  return (
    <div className='text-foreground'>
      {experience.map((exp) => {
        const date = `${exp.startDate} - ${exp.endDate ?? 'Present'}`;
        return (
          <Timeline
            key={exp.id}
            date={date}
            title={exp.title}
            subHeading={
              <ExternalLink
                underline
                href={exp.companyUrl ?? '#'}
                color={exp.companyTag as Parameters<typeof ExternalLink>[0]['color']}
                showIcon
                title={exp.company}
              >
                {exp.company}
              </ExternalLink>
            }
          >
            <ul className='list-circle'>
              {exp.summary.map((sum) => {
                if (typeof sum === 'string') return <li key={sum}>{sum}</li>;
                if (isClientSummary(sum))
                  return (
                    <div className='mt-2' key={sum.clientId}>
                      <span className='flex items-center gap-x-1 flex-wrap'>
                        <p>Client</p>
                        <ExternalLink
                          underline
                          href={sum.clientUrl}
                          color={sum.clientTag as Parameters<typeof ExternalLink>[0]['color']}
                          showIcon
                          title={sum.client}
                        >
                          {sum.client}
                        </ExternalLink>
                        {sum.clientSubsidiary && (
                          <>
                            <span>,</span>
                            <span className='flex gap-x-1'>
                              a subsidiary of
                              <ExternalLink
                                underline
                                href={sum.clientSubsidiaryUrl ?? '#'}
                                color={
                                  sum.clientSubsidiaryTag as Parameters<
                                    typeof ExternalLink
                                  >[0]['color']
                                }
                                showIcon
                                title={sum.clientSubsidiary}
                              >
                                {sum.clientSubsidiary}
                              </ExternalLink>
                            </span>
                          </>
                        )}
                      </span>
                      <ul className='list-circle'>
                        {sum.clientSummary.map((cSum) => (
                          <li key={cSum}>{cSum}</li>
                        ))}
                      </ul>
                    </div>
                  );
                return null;
              })}
            </ul>
          </Timeline>
        );
      })}
    </div>
  );
}
