import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Using card images from assets folder
import card1 from '../assets/card1.js';
import card2 from '../assets/card2.js';
import card3 from '../assets/card3.js';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Educational Resources & Study Materials
          </h1>
          <p className="hero-subtitle">
            Discover thousands of high-quality handouts, pastpapers, and study materials 
            important PDF, files study meterials.We also provide free online test or practice for all types of exams..
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search for handouts, assignments, past papers..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label"><i className="fas fa-book"></i> Study Materials</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label"><i className="fas fa-smile"></i> Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label"><i className="fas fa-download"></i> Downloads</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <button 
              className="floating-card card-1" 
              onClick={() => navigate('/exam-practice')}
            >
              <img src={card1} alt="Online Test" className="card-image" />
              <div className="card-label">
                <div className="card-title">Online Test</div>
                <div className="card-features">
                  <div className="card-feature">• Mock Exams</div>
                  <div className="card-feature">• Past Papers</div>
                  <div className="card-feature">• Timed Tests</div>
                  <div className="card-feature">• Instant Results</div>
                </div>
              </div>
            </button>
            <button 
              className="floating-card card-2" 
              onClick={() => navigate('/past-paper')}
            >
              <img src={card2} alt="Past Paper" className="card-image" />
              <div className="card-label">
                <div className="card-title">Past Paper</div>
                <div className="card-features">
                  <div className="card-feature">• Previous Papers</div>
                  <div className="card-feature">• Sample Questions</div>
                  <div className="card-feature">• Solutions</div>
                  <div className="card-feature">• Year-wise Papers</div>
                </div>
              </div>
            </button>
            <button 
              className="floating-card card-3" 
              onClick={() => navigate('/all-books')}
            >
              <img src={card3} alt="Books Library" className="card-image" />
              <div className="card-label">
                <div className="card-title">Books Library</div>
                <div className="card-features">
                  <div className="card-feature">• Handouts & Notes</div>
                  <div className="card-feature">• Short Notes</div>
                  <div className="card-feature">• Current Papers</div>
                  <div className="card-feature">• Past Papers</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
