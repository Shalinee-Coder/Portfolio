import React from 'react';
import './About.css';
import { FaCode, FaRocket, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-transparent-container">
      <div className="glass-box">
        <div className="about-title-section">
          <h2 className="about-title"> About Me</h2>
        </div>

        <p className="about-intro">
          I’m <strong>Shalinee Choudhary</strong>, a passionate <strong>Full Stack Web Developer</strong> with a love for creating clean, scalable, and intuitive digital experiences.
        </p>

        <div className="about-card">
          <h2><FaCode /> My Background</h2>
          <p>
            With experience in <strong> HTML, CSS, Javascript, React, Python and Django.</strong>, I enjoy building full-stack applications from scratch and delivering impactful user solutions.
          </p>
        </div>

        <div className="about-card">
          <h2><FaLaptopCode /> What I Do</h2>
          <ul>
            <li>🔧 Build full-stack web apps</li>
            <li>🎨 Design responsive UIs</li>
            <li>🧠 Develop REST APIs & backend systems</li>
          </ul>
        </div>

        <div className="about-card">
          <h2><FaRocket /> Passion & Goals</h2>
          <p>
            I’m driven by curiosity, collaboration, and creating tools that help people. I thrive in both solo and team environments and constantly explore new technologies.
          </p>
        </div>

        <div className="about-card">
          <h2><FaUserGraduate /> Learning Journey</h2>
          <p>
            I believe in lifelong learning. I continuously upgrade my skills through real-world projects, certifications, and developer communities.
          </p>
        </div>

        <div className="about-footer">
          <p>📫 Let’s connect — <a href="/contact">Contact Me</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
