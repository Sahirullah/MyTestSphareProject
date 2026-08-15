import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo (3).png';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVUMenuOpen, setIsVUMenuOpen] = useState(false);
  const [isVUFilesOpen, setIsVUFilesOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsVUMenuOpen(false);
        setIsVUFilesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVUMenu = (e) => {
    e.stopPropagation();
    setIsVUMenuOpen(!isVUMenuOpen);
  };



  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="Test Spare Logo" className="logo-image" />
              <div>
                <h1 className="logo">Test Spare</h1>
                <div className="logo-subtitle">Educational Resources</div>
              </div>
            </Link>
          </div>
          
          <div className="header-right">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <span className="contact-label">Call Us for help!</span>
                  <span className="contact-value">+923191954292</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <span className="contact-label">Mail Us</span>
                  <span className="contact-value">info.testsphare@gmail.com</span>
                </div>
              </div>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-container">
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>



      {/* Test Spare Navigation */}
      <div className="vu-nav">
        <div className="vu-nav-container">
          <ul className={`vu-nav-links ${isVUMenuOpen ? 'vu-open' : ''}`}>
            <li className="vu-dropdown"
              onMouseEnter={() => setIsVUFilesOpen(true)}
              onMouseLeave={() => setIsVUFilesOpen(false)}
            >
              <button 
                className="vu-dropdown-toggle"
                onClick={() => setIsVUFilesOpen(!isVUFilesOpen)}
              >
                Library
              </button>
              <ul className={`vu-dropdown-menu ${isVUFilesOpen ? 'vu-dropdown-open' : ''}`}>
                <li><Link to="/vu-handout" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>All Books</Link></li>
                <li><Link to="/highlighted-handout" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Highlighted Handout</Link></li>
                <li><Link to="/midterm" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Past Papers</Link></li>
                <li><Link to="/final-term" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Files Hub</Link></li>
                <li><Link to="/quizzes" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Quizzes</Link></li>
                <li><Link to="/assignment" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Assignments</Link></li>
                <li><a href="#gdbs" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>GDBs</a></li>
                <li><Link to="/midterm-reviews" onClick={() => { setIsVUMenuOpen(false); setIsVUFilesOpen(false); }}>Exam Reviews</Link></li>
              </ul>
            </li>
            <li><Link to="/blogs" onClick={() => setIsVUMenuOpen(false)}>Blogs</Link></li>
            <li><Link to="/softwares" onClick={() => setIsVUMenuOpen(false)}>VIP Softwares</Link></li>
            <li><Link to="/exam-practice" onClick={() => setIsVUMenuOpen(false)}>Exam Practice</Link></li>
           </ul>
          <button 
            className={`vu-menu-toggle ${isVUMenuOpen ? 'active' : ''}`}
            onClick={toggleVUMenu}
            aria-label="Toggle VU menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;