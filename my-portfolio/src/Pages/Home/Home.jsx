// Home.jsx
import React from 'react';
import './Home.css';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Internship from '../Internship/Internship';
import Contact from '../Contact/Contact';
import Navbar from '../../Components/Sidebar';
import  Profile from "../../Images/profile.jpg"

const Home = () => (
  <>
    <Navbar />

    {/* Top Right Name */}
    <div className="top-right-name">Shalinee Choudhary</div>

    <section id="home" className="home">
      <div className="content">

        {/* Profile Image */}
        {/* <img
          src={Profile} // 🔁 Replace with your actual image path
          alt="Shalinee Choudhary"
          className="profile-image"
        /> */}

        <h1 className='h1'>
          Hi, I am <span>Shalinee Choudhary</span>
        </h1>

        <p className="tagline">
          Full Stack Web Developer | HTML | CSS | JavaScript | React | Python | Django |
        </p>

        <p className="description">
          I am a passionate and detail-oriented full stack developer with a strong foundation in both frontend and backend technologies. I build scalable, responsive, and user-friendly web applications using modern frameworks and tools. Whether it's creating seamless user interfaces or designing robust server-side logic, I love turning ideas into reality through clean and efficient code.
        </p>

        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>
    </section>

    <section id="about">
      <About />
    </section>

    <section id="education">
      <Education />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="internship">
      <Internship />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </>
);

export default Home;
