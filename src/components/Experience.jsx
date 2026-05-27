import React, { useEffect, useRef, useState } from 'react';
import '../styles/Experience.css';
import { experience } from '../data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const expCardRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  // Live projects you developed
  const liveProjects = [
    {
      name: "Rejuvine Souls",
      description: "Tour & Travel Website",
      url: "https://rejuvinesouls.com",
      iconClass: "fas fa-umbrella-beach"
    },
   
    {
      name: "CKS Agencies",
      description: "Bharat Petroleum Station Website",
      url: "https://cksagencies.com",
      iconClass: "fas fa-oil-can"
    },
    
   
  ];

  // Additional Projects
  const additionalProjects = [
  
    {
      id: "erp-project",
      title: "ERP System",
      company: "Rejuvine Souls",
      location: "Vellore, Tamil Nadu",
      description: "Enterprise Resource Planning system for business management with comprehensive modules for Inventory, HR, Finance, and Purchase operations.",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "Material UI", "Tailwind CSS"],
      features: [
        "A complete ERP-style system with inventory, HR, finance, and purchase order management modules.",
        "It provides real-time tracking of stock, employees, and business operations.",
        "Role-based access control ensures secure and structured user permissions.",
        "Powerful dashboards support dynamic data grids, reporting, and analytics for large datasets.",
        "",
        "Dynamic data grids with 1000+ records",
        "Advanced reporting and analytics",
        "Responsive dashboard for all modules"
      ],
      role: "Frontend Lead Developer",
      icon: "fas fa-chart-line",
      achievement: "🏆 Best Employee of the Month — Rejuvine Souls (2025)"
    }
  ];

  const totalProjects = liveProjects.length;
  const visibleCount = 3;
  const maxIndex = totalProjects - visibleCount;

  // Auto-scroll function
  const startAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
  };

  // Stop auto-scroll on hover
  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Manual navigation
  const nextSlide = () => {
    stopAutoScroll();
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    setTimeout(startAutoScroll, 5000);
  };

  const prevSlide = () => {
    stopAutoScroll();
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    setTimeout(startAutoScroll, 5000);
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

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

  // Start auto-scroll when section becomes visible
  useEffect(() => {
    if (isVisible) {
      startAutoScroll();
    }
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section id="experience" ref={sectionRef} className="experience-section">
      <div className="container">
        <div className={`section-header-wrapper ${isVisible ? 'animate-section-header' : ''}`}>
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-underline"></div>
        </div>
        
        {/* Simplified Experience Card */}
        <div 
          ref={expCardRef}
          className={`exp-card-wrapper ${isVisible ? 'animate-exp-card' : ''}`}
        >
          <div className="exp-card-simple">
            <div className="exp-header-simple">
              <div className="exp-left">
                <h3 className="exp-title-simple">Frontend Developer</h3>
                <div className="exp-company-simple">
                  <i className="fas fa-building"></i> {experience.company} — {experience.location}
                </div>
              </div>
              <div className="exp-date-simple">
                <i className="far fa-calendar-alt"></i> {experience.period}
              </div>
            </div>
            <div className="exp-achievement-simple">
              <i className="fas fa-trophy"></i>
              <span>Best Employee of the Month — Rejuvine Souls (2025)</span>
            </div>
          </div>
        </div>

        {/* Additional Projects Section */}
        <div className={`additional-projects-section ${isVisible ? 'animate-projects-section' : ''}`}>
          <h3 className="projects-title">
            <i className="fas fa-folder-open"></i> Key Projects
          </h3>
          <div className="additional-projects-grid">
            {additionalProjects.map((project, idx) => (
              <div 
                key={project.id}
                className={`project-expandable-card ${expandedCard === project.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="project-card-header" onClick={() => toggleExpand(project.id)}>
                  <div className="project-header-left">
                    <div className="project-header-icon">
                      <i className={project.icon}></i>
                    </div>
                    <div className="project-header-info">
                      <h4 className="project-header-title">{project.title}</h4>
                      <div className="project-header-company">
                        <i className="fas fa-building"></i> {project.company} — {project.location}
                      </div>
                    </div>
                  </div>
                  <div className="project-expand-icon">
                    <i className={`fas ${expandedCard === project.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                </div>
                
                <div className={`project-card-content ${expandedCard === project.id ? 'expanded' : ''}`}>
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  
                  <div className="project-role">
                    <i className="fas fa-user-tie"></i>
                    <span>Role: {project.role}</span>
                  </div>
                  
                  <div className="project-tech-stack">
                    <i className="fas fa-code"></i>
                    <span>Technologies:</span>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-features">
                    <i className="fas fa-list-check"></i>
                    <span>Key Features:</span>
                    <ul className="features-list">
                      {project.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {project.achievement && (
                    <div className="project-achievement">
                      <i className="fas fa-trophy"></i>
                      <span>{project.achievement}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Projects Section with Auto-Scrolling Carousel */}
        <div 
          ref={projectsSectionRef}
          className={`live-projects-section ${isVisible ? 'animate-projects-section' : ''}`}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="carousel-header">
            <h3 className="projects-title">
              <i className="fas fa-globe"></i> Live Websites Developed
            </h3>
            <div className="carousel-controls">
              <button className="carousel-btn prev-btn" onClick={prevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      stopAutoScroll();
                      setCurrentIndex(idx);
                      setTimeout(startAutoScroll, 5000);
                    }}
                  />
                ))}
              </div>
              <button className="carousel-btn next-btn" onClick={nextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div className="carousel-container" ref={carouselRef}>
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {liveProjects.map((project, idx) => (
                <a 
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card carousel-item"
                  style={{ animationDelay: `${idx * 0.1}s`, width: `${100 / visibleCount}%` }}
                >
                  <div className="project-icon">
                    <i className={project.iconClass}></i>
                  </div>
                  <div className="project-info">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-desc">{project.description}</p>
                    <span className="project-link">
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="experience-bg-animation">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-line"></div>
        <div className="bg-line"></div>
      </div>
    </section>
  );
};

export default Experience;