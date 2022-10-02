import { Fragment } from 'react';

import { Meta, ProjectDetails } from '../../components';
import { ProjectLayout } from '../../layouts';
import PROJECTS from '../../data/projects';

function ProjectPage(props) {
  return (
    <Fragment>
      <Meta {...props} />
      <ProjectDetails {...props.project} />
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
    image: '/images/meta-bw.jpeg',
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
