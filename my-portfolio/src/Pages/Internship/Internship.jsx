import React from 'react';
import './Internship.css';

const skills = [
  { name: 'HTML', logo: '/src/Images/HTML.jpg' },
  { name: 'CSS', logo: '/src/Images/CSS.jpg' },
  { name: 'JavaScript', logo: '/src/Images/javascript.jpg' },
  { name: 'React.js', logo: '/src/Images/React.jpg' },
  { name: 'Python', logo: '/src/Images/Python.jpg' },
  { name: 'Django', logo: '/src/Images/Django.jpg' },
  { name: 'Redux', logo: '/src/Images/Redux.jpg' },
  { name: 'SQLite3', logo: '/src/Images/Sqlite3.jpg' },
];

const Internship = () => {
  return (
    <div className="internship-wrapper">
      <h1 className="internship-main-heading">Internship Experience</h1>
      <div className="internship-card">
        <img
          src="/src/Images/portfolio4.jpg"
          alt="YashviTech"
          className="internship-logo"
        />
        <h2 className="internship-title">YashviTech Pvt. Ltd.</h2>
        <h3 className="internship-role">Full Stack Web Developer Intern</h3>
        <p className="internship-desc">
          Internship in Full Stack Development at YashviTech Pvt. Ltd., Raipur (Chhattisgarh). Built full stack applications using React, Django, REST APIs, and integrated secure authentication.
        </p>

        <div className="intern-section">
          <h3 className="section-heading">Skills Acquired</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.logo} alt={skill.name} className="skill-icon" />
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="intern-section">
          <h3 className="section-heading">What I Worked On</h3>
          <ul className="intern-list">
            {[
              'Developed Full Stack Projects',
              'Built Responsive UI with React',
              'Created REST APIs in Django',
              'Integrated Frontend & Backend',
              'Used Token-Based Authentication',
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Internship;
