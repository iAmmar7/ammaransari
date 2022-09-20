import Timeline from '../Timeline/Timeline';
import ExternalLink from '../ExternalLink/ExternalLink';
import EXPERIENCE from '../../data/experience';
import { isObject, isString } from '../../lib/utils';

function WorkExperience() {
  return (
    <div className='text-primary'>
      {EXPERIENCE.map((exp) => {
        return (
          <Timeline
            key={exp.id}
            date={`${exp.startDate} - ${exp.endDate ?? 'Present'}`}
            title={exp.title}
            subHeading={
              <ExternalLink underline href={exp.companyUrl} color={exp.companyTag} showIcon>
                {exp.company}
              </ExternalLink>
            }
          >
            <ul className='list-circle'>
              {exp.summary.map((sum) => {
                if (isString(sum)) return <li key={sum}>{sum}</li>;
                if (isObject(sum))
                  return (
                    <div className='mt-2' key={sum.clientId}>
                      <span className='flex items-center gap-x-1 flex-wrap'>
                        <p>Client</p>
                        <ExternalLink underline href={sum.clientUrl} color={sum.clientTag} showIcon>
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
        );
      })}
    </div>
  );
}

export default WorkExperience;
