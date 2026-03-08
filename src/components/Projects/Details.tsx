'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { isArray, isEmpty, take } from '@/lib/utils';
import Badge from '@/components/Badge';
import { getSkillNameBySkillId } from '@/lib/helpers';
import type { Project } from '@/types/project';
import ProjectListSkeleton from './Skeletons/List';

const List = dynamic(() => import('./List'), { loading: ProjectListSkeleton });

function Title({ text }: { text: string }) {
  return (
    <h2 className="text-2xl sm:text-4xl font-bold text-transparent tracking-wide bg-clip-text bg-linear-to-r from-highlight to-accent">
      {text}
    </h2>
  );
}

interface ProjectDetailsProps extends Project {
  relatedProjects: Project[];
}

export default function ProjectDetails({
  features,
  technologies,
  description,
  contribution,
  relatedProjects,
}: ProjectDetailsProps) {
  return (
    <div className="mt-8 flex flex-col gap-y-5">
      {description && (
        <section>
          <Title text="Description" />
          <div className="leading-8 mt-2" dangerouslySetInnerHTML={{ __html: description }} />
        </section>
      )}
      {features && (
        <section>
          <Title text="Features" />
          <ul className="list-circle ml-4">
            {features.map((feat) => (
              <li key={feat} dangerouslySetInnerHTML={{ __html: feat }} className="my-2" />
            ))}
          </ul>
        </section>
      )}
      {contribution && (
        <section>
          <Title text="Contribution" />
          {isArray(contribution) ? (
            <ul className="list-circle ml-4">
              {(contribution as string[]).map((cont) => (
                <li key={cont} dangerouslySetInnerHTML={{ __html: cont }} className="my-2" />
              ))}
            </ul>
          ) : (
            <div
              className="leading-8 mt-2"
              dangerouslySetInnerHTML={{ __html: contribution as string }}
            />
          )}
        </section>
      )}
      {technologies && (
        <section>
          <Title text="Tech-Stack" />
          <div className="flex flex-wrap mt-4 gap-2">
            {technologies.map((techId) => {
              const tech = getSkillNameBySkillId(techId);
              return (
                <Link key={techId} href={`/projects?skill=${techId}`}>
                  <Badge
                    type="tertiary"
                    className="text-white cursor-pointer"
                    title={`View more ${tech} projects`}
                  >
                    {tech}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </section>
      )}
      {!isEmpty(relatedProjects) && (
        <section className="border-t-[0.5px] border-muted mt-10 pt-10">
          <Title text="Related projects" />
          <List projects={take(relatedProjects, 3)} count={3} className="mt-4" />
        </section>
      )}
    </div>
  );
}
