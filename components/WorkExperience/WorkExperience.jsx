import Timeline from '../Timeline/Timeline';
import EXPERIENCE from '../../data/experience';
import { isObject, isString } from '../../lib/utils';
import CompanyLink from './CompanyLink';

function WorkExperience() {
  return (
    <div>
      {EXPERIENCE.map((exp) => {
        return (
          <Timeline
            key={exp.id}
            date={`${exp.startDate} - ${exp.endDate ?? 'Present'}`}
            title={exp.title}
            subHeading={<CompanyLink name={exp.company} url={exp.companyUrl} tag={exp.companyTag} />}
          >
            <ul className='list-circle'>
              {exp.summary.map((sum) => {
                if (isString(sum)) return <li key={sum}>{sum}</li>;
                if (isObject(sum))
                  return (
                    <div className='mt-2' key={sum.clientId}>
                      <span className='flex items-center gap-x-1 flex-wrap'>
                        <p>Client</p>
                        <CompanyLink name={<span>{sum.client}</span>} url={sum.clientUrl} tag={sum.clientTag} />
                        {sum.clientSubsidiary && (
                          <>
                            <span>,</span>
                            <span className='flex gap-x-1'>
                              a subsidiary of
                              <CompanyLink
                                name={sum.clientSubsidiary}
                                url={sum.clientSubsidiaryUrl}
                                tag={sum.clientSubsidiaryTag}
                              />
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
