import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Project = ({ title, img }) => {
  return (
    <li className="project">
      <Link to="/project">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </Link>
    </li>
  );
};

export default Project;
