import React, { useEffect, useRef, useState } from 'react';
import '../styles/Education.css';
import { education, languages } from '../data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Education data with additional details
  const educationDetails = education.map((edu, idx) => ({
    ...edu,
    details: idx === 0 
      ? [" Web Technologies", "Advanced JavaScript", "React Development", "Database Management", "Project Development"]
      : ["Computer Science", "Programming ", "Web Design Basics", "Database Concepts"],
    grade: idx === 0 ? "First Class with Distinction" : "First Class",
    icon: idx === 0 ? "fas fa-graduation-cap" : "fas fa-graduation-cap",
    color: idx === 0 ? "#667eea" : "#764ba2"
  }));

  // Language proficiency data
  const languageDetails = {
    Tamil: { 
      level: "Native", 
      proficiency: 100, 
      flag: "🇮🇳", 
      description: "Fluent in reading, writing, and speaking",
      color: "#f59e0b"
    },
    English: { 
      level: "Professional", 
      proficiency: 85, 
      flag: "🇬🇧", 
      description: "Professional working proficiency",
      color: "#10b981"
    }
  };

  return (
    <section id="education" ref={sectionRef} className="education-section-modern">
      <div className="container-modern">
        
        {/* Modern Header */}
        <div className={`modern-header ${isVisible ? 'visible' : ''}`}>
          <div className="header-chip">
            <i className="fas fa-graduation-cap"></i>
            <span>My Journey</span>
          </div>
          <h2 className="modern-title">
            <span className="title-gradient">Education</span>
            <span className="title-accent">&</span>
            <span className="title-gradient-alt">Languages</span>
          </h2>
          <p className="modern-subtitle">The foundation of my professional expertise</p>
        </div>

        {/* Education Timeline Style Cards */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {educationDetails.map((edu, idx) => (
            <div
              key={idx}
              className={`timeline-item ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="timeline-marker">
                <div className="marker-inner" style={{ background: edu.color }}>
                  <i className={edu.icon}></i>
                </div>
              </div>
              
              <div className={`timeline-card ${hoveredCard === idx ? 'hovered' : ''}`}>
                <div className="card-header" style={{ borderBottomColor: edu.color }}>
                  <div className="card-year">
                    <i className="far fa-calendar-alt"></i>
                    <span>{edu.period}</span>
                  </div>
                  <div className="card-badge" style={{ background: edu.color }}>
                    {edu.grade}
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-degree">{edu.degree}</h3>
                  <div className="card-institution">
                    <i className="fas fa-university"></i>
                    <span>{edu.institution}</span>
                  </div>
                  
                  <div className="card-details">
                    {edu.details.map((detail, i) => (
                      <div key={i} className="detail-chip">
                        <i className="fas fa-check" style={{ color: edu.color }}></i>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="footer-glow" style={{ background: edu.color }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Languages Section */}
        <div className={`languages-modern ${isVisible ? 'visible' : ''}`}>
          <div className="languages-header-modern">
            <div className="header-chip-alt">
              <i className="fas fa-language"></i>
              <span>Communication</span>
            </div>
            <h3 className="languages-title-modern">
              Languages I Speak
            </h3>
          </div>

          <div className="languages-grid-modern">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className={`language-card-modern ${isVisible ? 'animate' : ''}`}
                style={{ 
                  animationDelay: `${idx * 0.15}s`,
                  borderColor: languageDetails[lang]?.color 
                }}
              >
                <div className="language-glow" style={{ background: languageDetails[lang]?.color }}></div>
                
                <div className="language-header">
                  <div className="language-flag-wrapper">
                    <span className="language-flag">{languageDetails[lang]?.flag || "🌐"}</span>
                  </div>
                  <div className="language-info-header">
                    <h4 className="language-name-modern">{lang}</h4>
                    <span className="language-level-modern" style={{ background: languageDetails[lang]?.color }}>
                      {languageDetails[lang]?.level || "Fluent"}
                    </span>
                  </div>
                </div>

                <div className="language-progress-modern">
                  <div className="progress-info">
                    <span className="progress-label">Proficiency</span>
                    <span className="progress-value">{languageDetails[lang]?.proficiency || 90}%</span>
                  </div>
                  <div className="progress-bar-modern">
                    <div 
                      className="progress-fill-modern"
                      style={{ 
                        width: `${languageDetails[lang]?.proficiency || 90}%`,
                        background: languageDetails[lang]?.color
                      }}
                    >
                      <div className="progress-shine"></div>
                    </div>
                  </div>
                </div>

                <p className="language-description-modern">
                  <i className="fas fa-quote-left"></i>
                  {languageDetails[lang]?.description || "Fluent in communication"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Stats Section */}
        <div className={`stats-modern ${isVisible ? 'visible' : ''}`}>
          <div className="stats-grid">
            <div className="stat-card-modern">
              <div className="stat-icon-wrapper">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of learning</div>
              </div>
              <div className="stat-bg-shape"></div>
            </div>

        

            <div className="stat-card-modern">
              <div className="stat-icon-wrapper">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-bg-shape"></div>
            </div>

            <div className="stat-card-modern">
              <div className="stat-icon-wrapper">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">8+</div>
                <div className="stat-label"> Team Collaborations</div>
              </div>
              <div className="stat-bg-shape"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="modern-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>
    </section>
  );
};

export default Education;