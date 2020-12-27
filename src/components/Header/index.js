import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/logo.png';

// Styling
import './styles.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/registration">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
