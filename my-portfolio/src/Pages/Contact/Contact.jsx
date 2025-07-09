import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title"> Contact</h1>

        <div className="contact-main">
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out if you have any questions or opportunities.</p>
            <p><FaEnvelope /> <a href="mailto:shalineechoudhary272@gmail.com">shalineechoudhary272@gmail.com</a></p>
            <p><FaPhoneAlt /> <a href="tel:+919589474289">+91 9589474289</a></p>
            <p><FaMapMarkerAlt /> Raipur, India</p>
            {/* <p><FaLinkedin /> <a href="https://linkedin.com/in/shalinee" target="_blank" rel="noreferrer">LinkedIn</a></p> */}
            <p><FaGithub /> <a href="https://github.com/shalinee" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
        </div>

        <div className="contact-images">
          <img src="/src/Images/portfolio4.jpg" alt="Gallery 1" />
          <img src="/src/Images/portfolio2.jpg" alt="Gallery 2" />
          <img src="/src/Images/portfolio5.jpg" alt="Gallery 3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
