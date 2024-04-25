import React from 'react';
import { projects } from '../helpers/projectsList';
import Project from '../components/project/Project';
import ContentLayout from '../components/ContentLayout/ContentLayout';

const Projects = () => {
  return (
    <>
      <ContentLayout>
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((pr, index) => (
            <Project id={index} key={index} title={pr.title} img={pr.image} skills={pr.skills} />
          ))}
        </ul>
      </ContentLayout>
    </>
  );
};

export default Projects;
