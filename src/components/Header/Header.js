import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Taras</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and coding.</p>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Y4tCQGHm12ofwDRo_q_uCWKaLLPGvCfl/view?usp=sharing"
          className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
