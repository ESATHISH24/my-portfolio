import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';
import { skills } from '../data';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

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

  const skillCategories = [
    { 
      title: "Frontend Development", 
      icon: "fas fa-code", 
      iconColor: "#2563eb",
      items: skills.frontend || ["React.js", "JavaScript (ES6+)","Redux Toolkit", "React Router"],
      description: "Modern React ecosystem",
      gradient: "linear-gradient(135deg, #2563eb, #3b82f6)"
    },
    { 
      title: "Frameworks & Libraries", 
      icon: "fas fa-cube", 
      iconColor: "#7c3aed",
      items: skills.frameworks || ["React.js", "Redux", "Axios", "React Testing Library"],
      description: "State management & tools",
      gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)"
    },
    { 
      title: "Styling & UI", 
      icon: "fas fa-palette", 
      iconColor: "#ec489a",
      items: skills.styling || ["Tailwind CSS", "Bootstrap", "Material UI", "Ant Design", "CSS Flexbox", "CSS Grid", "SASS/SCSS"],
      description: "Responsive & modern design",
      gradient: "linear-gradient(135deg, #ec489a, #f472b6)"
    },
    { 
      title: "API & Integration", 
      icon: "fas fa-plug", 
      iconColor: "#06b6d4",
      items: skills.api || ["REST API", "GraphQL", "Axios", "Fetch API", "Postman", "Swagger"],
      description: "REST, GraphQL, data fetching",
      gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)"
    },
    { 
      title: "Tools & Workflow", 
      icon: "fas fa-tools", 
      iconColor: "#f97316",
      items: skills.tools || ["Git", "GitHub", "VS Code", "Webpack", "Vite", "Figma", "Jira", "npm/yarn"],
      description: "Dev tools & productivity",
      gradient: "linear-gradient(135deg, #f97316, #fb923c)"
    },
    {
      title: "Backend Knowledge", 
      icon: "fas fa-server", 
      iconColor: "#10b981",
      items: skills.backend || ["Node.js", "Express.js", "MongoDB", "Firebase", "SQL", "Python"],
      description: "Full-stack understanding",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    }
  ];

  // Auto-rotate categories and skills
  useEffect(() => {
    if (isVisible) {
      let categoryIndex = 0;
      let skillIndex = 0;
      
      const rotateSkills = () => {
        const currentItems = skillCategories[categoryIndex].items;
        skillIndex = (skillIndex + 1) % currentItems.length;
        setCurrentSkillIndex(skillIndex);
        
        // After showing all skills in current category, move to next category
        if (skillIndex === 0) {
          categoryIndex = (categoryIndex + 1) % skillCategories.length;
          setActiveCategory(categoryIndex);
        }
      };
      
      timerRef.current = setInterval(rotateSkills, 2000);
      
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [isVisible, skillCategories]);

  const currentCategory = skillCategories[activeCategory];
  const currentSkill = currentCategory?.items[currentSkillIndex] || "";

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate-header' : ''}`}>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-layout">
          {/* Left Side - Category Navigation */}
          <div className={`skills-sidebar ${isVisible ? 'animate-sidebar' : ''}`}>
            <div className="sidebar-header">
              <i className="fas fa-layer-group"></i>
              <h3>Skill Categories</h3>
            </div>
            <div className="category-list">
              {skillCategories.map((category, idx) => (
                <button
                  key={idx}
                  className={`category-btn ${activeCategory === idx ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(idx);
                    setCurrentSkillIndex(0);
                  }}
                  style={{
                    '--gradient': category.gradient
                  }}
                >
                  <div className="category-icon" style={{ background: `${category.iconColor}15` }}>
                    <i className={category.icon} style={{ color: category.iconColor }}></i>
                  </div>
                  <div className="category-info">
                    <span className="category-name">{category.title}</span>
                    <span className="category-count">{category.items.length} skills</span>
                  </div>
                  {activeCategory === idx && <div className="active-indicator"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - News Channel Style Animation */}
          <div className={`skills-news-ticker ${isVisible ? 'animate-ticker' : ''}`}>
            <div className="news-header">
              <div className="news-badge">
                <i className="fas fa-newspaper"></i> LIVE SKILLS FEED
              </div>
              <div className="news-glow"></div>
            </div>
            
            <div className="news-content">
              <div className="category-display" style={{ background: currentCategory?.gradient }}>
                <div className="category-icon-large">
                  <i className={currentCategory?.icon}></i>
                </div>
                <h2 className="category-title-display">{currentCategory?.title}</h2>
                <p className="category-desc-display">{currentCategory?.description}</p>
              </div>
              
              <div className="ticker-container">
                <div className="ticker-label">
                  <i className="fas fa-broadcast-tower"></i>
                  <span>NOW PLAYING</span>
                  <i className="fas fa-circle live-dot"></i>
                </div>
                <div className="skill-marquee">
                  <div className="marquee-content">
                    <span className="current-skill">{currentSkill}</span>
                    <span className="skill-separator">✦</span>
                    <span className="next-skill-preview">
                      {currentCategory?.items[(currentSkillIndex + 1) % currentCategory?.items?.length]}
                    </span>
                  </div>
                  <div className="marquee-progress">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
              
              <div className="skills-grid-preview">
                <div className="preview-title">
                  <i className="fas fa-code-branch"></i> All Skills in {currentCategory?.title}
                </div>
                <div className="preview-tags">
                  {currentCategory?.items.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className={`preview-tag ${idx === currentSkillIndex ? 'active-skill' : ''}`}
                      onClick={() => setCurrentSkillIndex(idx)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      
      {/* Background Animation */}
      <div className="skills-bg-animation">
        <div className="bg-wave"></div>
        <div className="bg-wave"></div>
        <div className="bg-wave"></div>
      </div>
    </section>
  );
};

export default Skills;