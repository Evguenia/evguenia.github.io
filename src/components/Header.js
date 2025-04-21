import React from 'react';
import Navbar from './Navbar';

const Header = ({ activeSection, isScrolled }) => {
  return (
    <header>
      <Navbar activeSection={activeSection} isScrolled={isScrolled} /> {/* Pass isScrolled to Navbar */}
    </header>
  );
};

export default Header;
