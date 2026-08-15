import React from 'react';
import logoImage from '../assets/logo (3).png';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="Test Spare Logo" className="footer-logo-image" />
              <div>
                <h3 className="footer-logo-text">Test Spare</h3>
                <p className="footer-logo-subtitle">Educational Resources</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted platform for educational resources and study materials. 
              Access high-quality handouts, assignments, and academic content for All types of careers.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/virtuallibrary" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/virtuallibrary" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/virtuallibrary" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/virtuallibrary" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Marketplace</h4>
            <ul className="footer-links">
              <li><a href="#materials">All Materials</a></li>
              <li><a href="#handouts">Handouts</a></li>
              <li><a href="#assignments">Assignments</a></li>
              <li><a href="#past-papers">Past Papers</a></li>
              <li><a href="#notes">Study Notes</a></li>
              <li><a href="#new">New Arrivals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="#computer-science">Computer Science</a></li>
              <li><a href="#mathematics">Mathematics</a></li>
              <li><a href="#physics">Physics</a></li>
              <li><a href="#chemistry">Chemistry</a></li>
              <li><a href="#islamic-studies">Islamic Studies</a></li>
              <li><a href="#mcm">MCM</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#how-to-download">How to Download</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#request-material">Request Material</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Stay updated with our latest themes and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe
              </button>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info.testsphare@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+92 3191954292</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2024 Test Spare. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#academic-integrity">Academic Integrity</a>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="payment-methods">
              <span className="payment-text">We Accept:</span>
              <div className="payment-icons">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">🏦</span>
                <span className="payment-icon">💰</span>
                <span className="payment-icon">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;