import React from 'react';
import github from './gitHub-black.svg';

const GitHubBtn = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={github} alt="" />
      GitHub repo
    </a>
  );
};

export default GitHubBtn;
