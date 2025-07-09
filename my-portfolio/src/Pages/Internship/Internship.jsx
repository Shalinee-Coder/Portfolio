import React from 'react';
import './Internship.css';

const Internship = () => {
  return (
    <>
      <div className="hero-section">
        <h1 className="hero-title">My Internship Journey</h1>
        <p className="hero-subtitle">
          Full Stack Web Development Internship at YashviTech Pvt. Ltd., Raipur, Chhattisgarh
        </p>
      </div>

      <div className="card-container">
        <div className="profile-card">
          <img src="/src/Images/portfolio4.jpg" alt="YashviTech" className="profile-img" />
          <div className="profile-name">YashviTech Pvt. Ltd.</div>
          <div className="profile-role">Full Stack Web Developer Intern</div>
        </div>
      </div>

      <div className="category-section">
        <h2 className="category-title">Skills Acquired</h2>
        <div className="category-grid">
          <div className="category-box">HTML</div>
          <div className="category-box">CSS</div>
          <div className="category-box">JavaScript</div>
          <div className="category-box">React.js</div>
          <div className="category-box">Python</div>
          <div className="category-box">Django</div>
        </div>
      </div>

      <div className="category-section">
        <h2 className="category-title">What I Worked On</h2>
        <div className="category-grid">
          <div className="category-box">Developed Full Stack Projects</div>
          <div className="category-box">Built Responsive UI with React</div>
          <div className="category-box">Created REST APIs in Django</div>
          <div className="category-box">Integrated Frontend & Backend</div>
          <div className="category-box">Used Token-Based Authentication</div>
          {/* <div className="category-box">Collaborated on Git & GitHub</div> */}
        </div>
      </div>
    </>
  );
};

export default Internship;
