import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiDjango, SiJavascript, SiCss3, SiHtml5, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skillList = [
    { icon: <SiHtml5 />, label: 'HTML5' },
    { icon: <SiCss3 />, label: 'CSS3' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <FaReact />, label: 'React.js' },
    { icon: <SiRedux />, label: 'Redux' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
    { icon: <SiDjango />, label: 'Django' },
    { icon: <FaServer />, label: 'REST API / JWT' },
    { icon: <FaDatabase />, label: 'SQLite3' },
    { icon: <FaGitAlt />, label: 'Git / GitHub' },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <div className="label">{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
