import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Nav.css";

const NavLink = ({ to, activeSection, label, onClick }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={`nav-link ${activeSection === to ? "active" : ""}`}
      activeClass="active"
      spy={true}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`inconsolata nav-links ${isOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            activeSection={activeSection}
            label={item.label}
            onClick={closeMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
