import { Fragment, useMemo } from 'react';

import ProjectDetails from '../../components/Projects/Details';
import Meta from '../../components/Meta';
import ProjectLayout from '../../layouts/ProjectLayout';
import PROJECTS from '../../data/projects';

function ProjectPage(props) {
  const {
    project: { id, technologies },
  } = props;

  const relatedProjects = useMemo(() => {
    const projects = PROJECTS.reduce((acc, proj) => {
      if (proj.id === id) return acc;
      const techCount = technologies.filter((tech) => proj.technologies.includes(tech)).length;
      if (techCount > 0) acc.push({ ...proj, count: techCount });
      return acc;
    }, []);
    return projects.sort((a, b) => b.count - a.count);
  }, [id, technologies]);

  return (
    <Fragment>
      <Meta {...props} />
      <ProjectDetails {...props.project} relatedProjects={relatedProjects} />
    </Fragment>
  );
}

ProjectPage.Layout = ProjectLayout;

export default ProjectPage;

export function getStaticProps(props) {
  const project = PROJECTS.find((proj) => proj.id === props.params.id);

  const meta = {
    title: `${project.name} - Ammar Ansari`,
    description: project.summary,
    project,
    image: project.thumbnail,
    route: `/projects/${project.id}`,
  };

  return {
    props: meta,
    revalidate: 60,
  };
}

export function getStaticPaths() {
  return {
    paths: PROJECTS.map((proj) => ({
      params: {
        id: proj.id,
      },
    })),
    fallback: 'blocking',
  };
}
