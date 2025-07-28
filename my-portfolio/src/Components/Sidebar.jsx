// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleDrawer}>
        {isOpen ? '✖' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#about" onClick={toggleDrawer}>About</a></li>
          <li><a href="#education" onClick={toggleDrawer}>Education</a></li>
          <li><a href="#projects" onClick={toggleDrawer}>Projects</a></li>
          <li><a href="#skills" onClick={toggleDrawer}>Skills</a></li>
          <li><a href="#internship" onClick={toggleDrawer}>Internship</a></li>
          <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
        </ul>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default Sidebar;
