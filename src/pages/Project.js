import React from 'react';
import GitHubBtn from '../components/gitHubBtn/GitHubBtn';

const Project = ({ title, img, skills }) => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{title}</h1>

          <img src={img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {skills}</p>
          </div>
          <GitHubBtn link={'https://github.com/'} />
        </div>
      </div>
    </main>
  );
};

export default Project;
