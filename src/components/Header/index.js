import React from 'react';
import './styles.scss';

import Logo from './../../assets/logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {' '}
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {' '}
              Search
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
