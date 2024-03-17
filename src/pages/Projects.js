import React from 'react';
import { projects } from '../helpers/projectsList';
import Project from '../components/project/Project';

const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((pr, index) => (
              <Project key={index} title={pr.title} img={pr.image} skills={pr.skills} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
