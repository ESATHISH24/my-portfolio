import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { personalData } from '../data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const [displayName, setDisplayName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const fullName = personalData.name;

  const techStack = [
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "JSON", icon: "fas fa-code", color: "#5E5E5E" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Express", icon: "fas fa-bolt", color: "#000000" },
    { name: "My SQL", icon: "fas fa-database", color: "#47A248" }
  ];

  // Start animations on mount
  useEffect(() => {
    setAnimationsStarted(true);
  }, []);

  // Word-by-word animation for name
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayName(prev => prev + fullName[nameIndex]);
        setNameIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [nameIndex, fullName]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${animationsStarted ? 'animate-text' : ''}`}>
            <div className={`badge ${animationsStarted ? 'animate-badge' : ''}`}>
              <i className="fas fa-code"></i> Frontend Developer
            </div>
            <h1 className={`hero-title ${animationsStarted ? 'animate-title' : ''}`}>
              Hi, I'm <span className="highlight typing-name">{displayName}</span>
              <span className="cursor-blink">{nameIndex === fullName.length ? '' : '|'}</span>
            </h1>
            <p className={`hero-description ${animationsStarted ? 'animate-description' : ''}`}>
              {personalData.summary}
            </p>
            <div className={`contact-bar ${animationsStarted ? 'animate-contact' : ''}`}>
              <a href={`tel:${personalData.phone}`} className="contact-item">
                <i className="fas fa-phone-alt"></i> 
                <span>{personalData.phone}</span>
              </a>
              <a href={`mailto:${personalData.email}`} className="contact-item">
                <i className="fas fa-envelope"></i> 
                <span>{personalData.email}</span>
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-linkedin"></i> 
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-container">
              {/* Static Avatar - Doesn't Move */}
              <div className="avatar-circle">
                <i className="fas fa-user-astronaut"></i>
              </div>
              
              {/* Floating Tech Circles - These Move Around */}
              <div className="tech-circles-wrapper">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-circle"
                    style={{
                      '--tech-color': tech.color,
                      '--index': index,
                      '--total': techStack.length
                    }}
                  >
                    <div className="tech-circle-inner">
                      <i className={tech.icon} style={{ color: tech.color }}></i>
                      <span className="tech-tooltip">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </section>
  );
};

export default Hero;