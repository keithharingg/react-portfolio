import React from 'react';
import './style.css';

import { Link, NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normLink = 'nav-list__link';
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </Link>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normLink)}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? activeLink : normLink)}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? activeLink : normLink)}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
