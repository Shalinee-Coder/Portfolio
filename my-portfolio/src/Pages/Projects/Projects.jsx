// Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Screen Monitoring System',
      subtitle: 'Full Stack App (React + Django)',
      desc: 'A responsive screen monitoring system built with React for the frontend and Django for the backend. Includes token-based authentication, real-time features, and secure role management.',
      link: 'https://github.com/', // Update with actual repo link
      img: '/src/Images/portfolio8.jpg', // Replace with actual image
    },
    {
      title: 'E-commerce Website',
      subtitle: 'Frontend + Backend (React + Django)',
      desc: 'A modern e-commerce platform with user authentication, product management, cart features, and secure payment integration using Razorpay.',
      link: 'https://github.com/', // Update with actual repo link
      img: '/src/Images/portfolio9.jpg', // Replace with actual image
    },
    {
      title: 'Lost and Found System',
      subtitle: 'Full Stack App (React + Django REST Framework)',
      desc: 'A platform for users to report lost or found items. Includes approval flow, item claim system, email notifications, and admin moderation tools.',
      link: 'https://github.com/', // Update with actual repo link
      img: '/src/Images/portfolio10.jpg', // Replace with actual image
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-heading"> Project Experiences</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <p className="project-subtitle">{project.subtitle}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
