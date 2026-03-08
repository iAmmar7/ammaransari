import Link from 'next/link';

import Timeline from '@/components/Timeline/Timeline';
import ExternalLink from '@/components/ExternalLink';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import EXPERIENCE from '@/data/experience';
import type { ClientSummary } from '@/types/experience';
import Section from './Section';

const CURRENT_EMPLOYMENT = EXPERIENCE.find((exp) => !exp.endDate)!;

function isClientSummary(item: unknown): item is ClientSummary {
  return typeof item === 'object' && item !== null && 'clientId' in item;
}

export default function CurrentEmployment() {
  return (
    <Section id='experience' title='Current employment' next='skills'>
      <Timeline
        date={`${CURRENT_EMPLOYMENT.startDate} - ${CURRENT_EMPLOYMENT.endDate ?? 'Present'}`}
        title={CURRENT_EMPLOYMENT.title}
        subHeading={
          <ExternalLink
            underline
            href={CURRENT_EMPLOYMENT.companyUrl!}
            color={CURRENT_EMPLOYMENT.companyTag as 'signalwire'}
            showIcon
            title={CURRENT_EMPLOYMENT.company}
          >
            {CURRENT_EMPLOYMENT.company}
          </ExternalLink>
        }
      >
        <ul className='list-circle'>
          {CURRENT_EMPLOYMENT.summary.map((sum) => {
            if (typeof sum === 'string') return <li key={sum}>{sum}</li>;
            if (isClientSummary(sum))
              return (
                <div className='mt-2' key={sum.clientId}>
                  <span className='flex items-center gap-x-1 flex-wrap'>
                    <p>Client</p>
                    <ExternalLink
                      underline
                      href={sum.clientUrl}
                      color={sum.clientTag as 'careem'}
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
                            href={sum.clientSubsidiaryUrl!}
                            color={sum.clientSubsidiaryTag as 'uber'}
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
          })}
        </ul>
      </Timeline>
      <Timeline
        title={
          <Link href='/experience'>
            <Button
              type='default'
              size='sm'
              className='-ml-4'
              endEnhancer={<Icon icon='ri-arrow-right-line' className='ml-1' />}
              title='Go to experience page'
            >
              Employment history
            </Button>
          </Link>
        }
      />
    </Section>
  );
}
