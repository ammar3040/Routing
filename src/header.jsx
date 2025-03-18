import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>

        <Link to="/">Home</Link> ||<Link to="/display">Display Data</Link>
    </nav>
  );
};

export default Header;
