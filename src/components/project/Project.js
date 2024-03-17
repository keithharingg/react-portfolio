import React from 'react';
import './style.css';

const Project = ({ title, img, skills }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default Project;
