import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="./AllTrainsPage.js">All Trains</Link>
      </nav>
    </header>
  );
};

export default Header;
