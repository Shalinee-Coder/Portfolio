import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaServer, FaLaptopCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiDjango, SiJavascript, SiCss3, SiHtml5, SiFigma, SiFirebase, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-main">
      {/* <div className="skills-profile">
        <img src="your-image.png" alt="Profile" className="profile-img" />
        <h2>Shalinee Choudhary</h2>
        <p>Full Stack Web Developer</p>
        <div className="location">📍 India</div>
        <div className="email">📧 shalineechoudhary272@gmail.com</div>
      </div> */}

      <div className="skills-section-container">
        {/* <h3 className="skills-heading">My Skills</h3> */}

        <div className="skills-card">
          <h2>Frontend Development</h2>
          <ul>
            <li><SiHtml5 /> HTML5</li>
            <li><SiCss3 /> CSS </li>
            <li><SiJavascript /> JavaScript (ES6+)</li>
            <li><FaReact /> React.js, Context API, Hooks</li>
            {/* <li><SiNextdotjs /> Next.js</li>
            <li><SiFigma /> UI/UX – Figma, Adobe XD</li> */}
          </ul>
        </div>

        <div className="skills-card">
          <h2>Backend Development</h2>
          <ul>
            {/* <li><FaNodeJs /> Node.js, Express.js</li> */}
            <li><SiDjango />  Python / Django  </li>
            <li><FaServer /> REST APIs, Auth (JWT)</li>
          </ul>
        </div>

        <div className="skills-card">
          <h2>Database & Storage</h2>
          <ul>
            {/* <li><SiMongodb /> MongoDB, Mongoose</li> */}
            <li><SiPostgresql /> SQLlite / MySQL</li>
            {/* <li><SiFirebase /> Firebase / Firestore</li> */}
          </ul>
        </div>

        {/* <div className="skills-card">
          <h2>DevOps & Deployment</h2>
          <ul>
            <li><FaGitAlt /> Git, GitHub, GitLab</li>
            <li><FaServer /> CI/CD – GitHub Actions, Netlify, Vercel</li>
            <li><FaServer /> Docker, Nginx, Linux</li>
          </ul>
        </div> */}

        {/* <div className="skills-card">
          <h2>Testing & Debugging</h2>
          <ul>
            <li><FaLaptopCode /> Jest, Mocha, Pytest, Cypress</li>
            <li><FaLaptopCode /> Dev Tools, ESLint, Prettier</li>
          </ul>
        </div> */}

        {/* <div className="skills-card">
          <h2>Soft Skills</h2>
          <ul>
            <li>Agile/Scrum, Git Workflows</li>
            <li>Communication & Collaboration</li>
            <li>Problem Solving, Time Management</li>
            <li>Continuous Learning</li>
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
