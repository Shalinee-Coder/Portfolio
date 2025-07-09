// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Education from '../src/Pages/Education/Education';
import Projects from '../src/Pages/Projects/Projects';
import Contact from '../src/Pages/Contact/Contact';
import Navbar from '../src/Components/Navbar';
import Skills from '../src/Pages/Skills/Skills';
import Internship from '../src/Pages/Internship/Internship';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
