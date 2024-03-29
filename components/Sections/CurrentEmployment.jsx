import Link from 'next/link';

import Timeline from '../Timeline/Timeline';
import ExternalLink from '../ExternalLink';
import Button from '../Button';
import Icon from '../Icon';
import EXPERIENCE from '../../data/experience';
import { isObject, isString } from '../../lib/utils';
import Section from './Section';

const CURRENT_EMPLOYEMT = EXPERIENCE.find((exp) => !exp.endDate);

function ExperienceSection() {
  return (
    <Section id='experience' title='Current employment' next='skills'>
      <Timeline
        date={`${CURRENT_EMPLOYEMT.startDate} - ${CURRENT_EMPLOYEMT.endDate ?? 'Present'}`}
        title={CURRENT_EMPLOYEMT.title}
        subHeading={
          <ExternalLink
            underline
            href={CURRENT_EMPLOYEMT.companyUrl}
            color={CURRENT_EMPLOYEMT.companyTag}
            showIcon
            title={CURRENT_EMPLOYEMT.company}
          >
            {CURRENT_EMPLOYEMT.company}
          </ExternalLink>
        }
      >
        <ul className='list-circle'>
          {CURRENT_EMPLOYEMT.summary.map((sum) => {
            if (isString(sum)) return <li key={sum}>{sum}</li>;
            if (isObject(sum))
              return (
                <div className='mt-2' key={sum.clientId}>
                  <span className='flex items-center gap-x-1 flex-wrap'>
                    <p>Client</p>
                    <ExternalLink
                      underline
                      href={sum.clientUrl}
                      color={sum.clientTag}
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
                            href={sum.clientSubsidiaryUrl}
                            color={sum.clientSubsidiaryTag}
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
              title='Got to experience page'
            >
              Employment history
            </Button>
          </Link>
        }
      />
    </Section>
  );
}

export default ExperienceSection;
