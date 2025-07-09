// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => (
  <section className="home">
    <div className="content">
      <h1>
        Hi, I am <span>Shalinee Choudhary</span>
      </h1>
      <p className="tagline">
        Full Stack Web Developer |   HTML  |  CSS  |  JavaScript |  React  |  Python  |  Django  |
      </p>
      <p className="description">
        I am a passionate and detail-oriented full stack developer with a strong foundation in both frontend and backend technologies. I build scalable, responsive, and user-friendly web applications using modern frameworks and tools. Whether it's creating seamless user interfaces or designing robust server-side logic, I love turning ideas into reality through clean and efficient code.
      </p>
      <a href="/resume.pdf" download className="btn">
        Download Resume
      </a>
    </div>
  </section>
);

export default Home;
