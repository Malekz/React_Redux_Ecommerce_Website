import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Logo from './../../assets/logo.png';
import { auth } from './../../firebase/utils';

// Styling
import './styles.scss';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {currentUser && (
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                onClick={() => auth.signOut()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {!currentUser && (
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/registration">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
