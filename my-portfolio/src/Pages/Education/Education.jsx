import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <div className="hero1-section">
        <div className="overlay">
          <h1 className="hero-heading">My Education Journey</h1>
          <p className="hero-subheading">Learning and growing through the years</p>
        </div>
      </div>

      <div className="education-cards-container">
        <div className="education-card">
          <h3>2018 - 2020</h3>
          <h2>High School</h2>
          <p>NVM School, Raipur</p>
          <p>Completed Higher Secondary Education with Science and Mathematics.</p>
        </div>

        <div className="education-card">
          <h3>2020 - 2023</h3>
          <h2>Bachelor's Degree</h2>
          <p>Pt.Ravishankar Sukla University, Raipur</p>
          <p>B.Sc. in Mathematics</p>
        </div>

        <div className="education-card">
          <h3>2023 - 2025</h3>
          <h2>Master's Degree</h2>
          <p>Pt.Ravishankar Sukla University, Raipur</p>
          <p>M.sc in Information Technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
