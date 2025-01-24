import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="horizontal-navbar">
      <div className="navbar-container">
        <div className="navbar-name">
          <Link to="/dash">Vote4All</Link>
        </div>

        <div className="navbar-links">
          <Link to="/create">Create Polls</Link>
          <Link to="/">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
