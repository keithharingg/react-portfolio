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
            <SocialIconLink link="https://www.instagram.com/myhalych/" img={instagram} />
            <SocialIconLink link="#!" img={twitter} />
            <SocialIconLink link="https://github.com/keithharingg" img={github} />
            <SocialIconLink
              link="https://www.linkedin.com/in/taras-nesterenko-207081236/"
              img={linkedin}
            />
          </ul>
          <div className="copyright">
            <p>© 2023 keithharingg</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialIconLink = ({ link, img }) => {
  return (
    <>
      <li className="social__item">
        <a target="_blank" rel="noreferrer" href={link}>
          <img src={img} alt="Link" />
        </a>
      </li>
    </>
  );
};
