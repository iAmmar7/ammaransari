import type { Metadata } from 'next';

import projects from '@/data/projects';
import { generatePageMetadata } from '@/lib/metadata';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectDetails from '@/components/Projects/Details';
import ProjectHero from './ProjectHero';
import DetailsWrapper from './DetailsWrapper';

export function generateStaticParams() {
  return projects.map((proj) => ({ id: proj.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((proj) => proj.id === id);
  if (!project) return {};
  return generatePageMetadata({
    title: `${project.name} - Ammar Ansari`,
    description: project.summary,
    image: project.thumbnail ?? '',
    route: `/projects/${project.id}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) return null;

  const { name, summary, domain, technologies, code, url, thumbnail } = project;

  const relatedProjects = projects
    .reduce<(typeof projects[number] & { count: number })[]>((acc, proj) => {
      if (proj.id === id) return acc;
      const techCount = technologies.filter((tech) => proj.technologies.includes(tech)).length;
      if (techCount > 0) acc.push({ ...proj, count: techCount });
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col min-h-screen relative z-0 text-sm md:text-base">
      <div className="absolute inset-0 -z-10 bg-home-gradient opacity-40" />
      <Navbar />
      <main className="px-0 pt-28 pb-12 sm:pt-20 sm:pb-14 overflow-hidden flex-auto">
        <ProjectHero
          name={name}
          summary={summary}
          domain={domain}
          technologies={technologies}
          code={code}
          url={url}
          thumbnail={thumbnail}
        />

        <DetailsWrapper>
          <ProjectDetails {...project} relatedProjects={relatedProjects} />
        </DetailsWrapper>
      </main>
      <Footer />
    </div>
  );
}
