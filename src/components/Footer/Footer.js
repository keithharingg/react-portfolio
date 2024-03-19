import React from 'react';

import instagram from '../../img/icons/instagram.svg';
import twitter from '../../img/icons/twitter.svg';
import github from '../../img/icons/gitHub.svg';
import linkedin from '../../img/icons/linkedIn.svg';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/myhalych/">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://github.com/keithharingg">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/taras-nesterenko-207081236/">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
