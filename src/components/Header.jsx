import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ scrollToSection }) => {
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoAnimate, setLogoAnimate] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home', icon: 'fas fa-home' },
    { label: 'Skills', id: 'skills', icon: 'fas fa-code' },
    { label: 'Experience', id: 'experience', icon: 'fas fa-briefcase' },
    { label: 'Education', id: 'education', icon: 'fas fa-graduation-cap' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Animate logo on load
  useEffect(() => {
    setTimeout(() => setLogoAnimate(true), 100);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          {/* Animated Logo */}
          <div 
            className={`logo ${logoAnimate ? 'logo-animate' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <div className="logo-icon-wrapper">
              <i className="fas fa-code"></i>
              <div className="logo-pulse"></div>
            </div>
            <div className="logo-text">
              <span className="logo-first">SATHISHKUMAR .</span>
              <span className="logo-last"> E</span>
              <div className="logo-cursor"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
            {navItems.map(item => (
              <a
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ 
                  color: hovered === item.id ? '#2563eb' : (activeSection === item.id ? '#2563eb' : '#334155')
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span className="nav-icon">
                  <i className={item.icon}></i>
                </span>
                <span className="nav-label">{item.label}</span>
                <span className="nav-indicator"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <i className="fas fa-code"></i>
                <span>SathishKumar.E</span>
              </div>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mobile-nav-items">
              {navItems.map(item => (
                <a
                  key={item.id}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <div className="mobile-nav-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="mobile-nav-content">
                    <span className="mobile-nav-label">{item.label}</span>
                    <span className="mobile-nav-desc">
                      {item.id === 'home' && 'Welcome to my portfolio'}
                      {item.id === 'skills' && 'Technologies I master'}
                      {item.id === 'experience' && 'Work & projects'}
                      {item.id === 'education' && 'Academic background'}
                    </span>
                  </div>
                  <i className="fas fa-arrow-right mobile-nav-arrow"></i>
                </a>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <div className="mobile-contact-info">
                <a href="tel:8667545743" className="mobile-contact-link">
                  <i className="fas fa-phone"></i>
                  <span>8667545743</span>
                </a>
                <a href="mailto:sathishe.elumalaiv@gmail.com" className="mobile-contact-link">
                  <i className="fas fa-envelope"></i>
                  <span>sathishe.elumalaiv@gmail.com</span>
                </a>
              </div>
              <div className="mobile-social-links">
                <a href="http://linkedin.com/in/sathishkumar-e-625465367" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/ESATHISH24" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>
    </>
  );
};

export default Header;