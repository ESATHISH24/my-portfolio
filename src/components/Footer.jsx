import React, { useState } from 'react';
import '../styles/Footer.css';
import { personalData } from '../data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailHovered, setEmailHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="site-footer">
      {/* Animated Wave Background */}
      <div className="site-footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(37, 99, 235, 0.03)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="site-footer-container">
        <div className="site-footer-main">
          {/* Left Section - Brand Info */}
          <div className="site-footer-brand">
            <div className="site-footer-logo">
              <div className="site-footer-logo-icon">
                <i className="fas fa-code"></i>
                <div className="site-footer-logo-glow"></div>
              </div>
              <div className="site-footer-logo-text">
                <span>{personalData.name}</span>
                <span className="site-footer-logo-subtitle">Frontend Developer</span>
              </div>
            </div>
            <p className="site-footer-description">
              Building responsive, scalable, and user-friendly web applications with modern technologies.
            </p>
            <div className="site-footer-stats">
              <div className="site-footer-stat-item">
                <span className="site-footer-stat-number">1+</span>
                <span className="site-footer-stat-label">Years Exp</span>
              </div>
              <div className="site-footer-stat-item">
                <span className="site-footer-stat-number">5+</span>
                <span className="site-footer-stat-label">Projects</span>
              </div>
              <div className="site-footer-stat-item">
                <span className="site-footer-stat-number">100%</span>
                <span className="site-footer-stat-label">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="site-footer-links">
            <h3 className="site-footer-heading">
              <i className="fas fa-link"></i>
              Quick Links
            </h3>
            <ul className="site-footer-links-list">
              <li>
                <a href="#home" className="site-footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="site-footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="site-footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#education" className="site-footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Education</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Right Section - Contact Info */}
          <div className="site-footer-contact">
            <h3 className="site-footer-heading">
              <i className="fas fa-address-card"></i>
              Get in Touch
            </h3>
            <div className="site-footer-contact-details">
              <div className="site-footer-contact-group">
                <div className="site-footer-contact-item">
                  <div className="site-footer-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="site-footer-contact-info">
                    <span className="site-footer-contact-label">Phone</span>
                    <a href={`tel:${personalData.phone}`} className="site-footer-contact-value">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                <div 
                  className={`site-footer-contact-item site-footer-email-item ${emailHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setEmailHovered(true)}
                  onMouseLeave={() => setEmailHovered(false)}
                >
                  <div className="site-footer-contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="site-footer-contact-info">
                    <span className="site-footer-contact-label">Email</span>
                    <div className="site-footer-email-wrapper">
                      <span className="site-footer-contact-value">{personalData.email}</span>
                      <button 
                        className="site-footer-copy-btn"
                        onClick={handleCopyEmail}
                        title="Copy email"
                      >
                        <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                      </button>
                    </div>
                  </div>
                  {copied && <div className="site-footer-copy-tooltip">Copied!</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Social Links */}
          <div className="site-footer-social">
            <h3 className="site-footer-heading">
              <i className="fas fa-share-alt"></i>
              Connect With Me
            </h3>
            <div className="site-footer-social-links">
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="site-footer-social-card site-footer-social-linkedin"
              >
                <div className="site-footer-social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <span>LinkedIn</span>
                <div className="site-footer-social-hover-bg"></div>
              </a>
              <a 
                href={`mailto:${personalData.email}`} 
                className="site-footer-social-card site-footer-social-email"
              >
                <div className="site-footer-social-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>Email</span>
                <div className="site-footer-social-hover-bg"></div>
              </a>
              <a 
                href="https://github.com/ESATHISH24" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="site-footer-social-card site-footer-social-github"
              >
                <div className="site-footer-social-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>GitHub</span>
                <div className="site-footer-social-hover-bg"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="site-footer-bottom">
          <div className="site-footer-divider"></div>
          <div className="site-footer-bottom-content">
            <div className="site-footer-copyright">
              <i className="far fa-copyright"></i>
              <span>{currentYear} {personalData.name}. All rights reserved.</span>
            </div>
            <div className="site-footer-credits">
              <span>Built with</span>
              <i className="fas fa-heart"></i>
              <span>using React</span>
            </div>
            <a href="#" className="site-footer-back-to-top" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <i className="fas fa-arrow-up"></i>
              <span>Back to Top</span>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="site-footer-particles">
        <div className="site-footer-particle"></div>
        <div className="site-footer-particle"></div>
        <div className="site-footer-particle"></div>
        <div className="site-footer-particle"></div>
        <div className="site-footer-particle"></div>
        <div className="site-footer-particle"></div>
      </div>
    </footer>
  );
};

export default Footer;