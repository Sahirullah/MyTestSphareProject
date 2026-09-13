import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Free University Past Papers, Study Notes & Exam Preparation Materials
          </h1>
          <p className="hero-subtitle">
            Access thousands of high-quality past papers, lecture notes, and downloadable PDF study materials. Practice online mock tests and prepare effectively for your university exams.
          </p>

          <form className="hero-search" onSubmit={handleSearch} role="search">
            <input 
              type="search" 
              placeholder="Search past papers, assignments, handouts..."
              className="search-input"
              aria-label="Search study materials"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label"><i className="fas fa-book" aria-hidden="true"></i> Study Materials</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label"><i className="fas fa-smile" aria-hidden="true"></i> Active Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label"><i className="fas fa-download" aria-hidden="true"></i> Downloads</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-graphic">
            <button 
              className="floating-card card-1" 
              onClick={() => navigate('/exam-practice')}
              aria-label="Explore Free Mock Exams"
            >
              <img src={card1} alt="Interactive online test preview for university mock exams" className="card-image" />
              <div className="card-label">
                <div className="card-title">Free Mock Exams</div>
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
              aria-label="Access University Past Papers"
            >
              <img src={card2} alt="University past exam papers and solution guides" className="card-image" />
              <div className="card-label">
                <div className="card-title">Past Papers</div>
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
              aria-label="Browse Books and Handouts Library"
            >
              <img src={card3} alt="Digital library of student handouts, books, and lecture notes" className="card-image" />
              <div className="card-label">
                <div className="card-title">Books Library</div>
                <div className="card-features">
                  <div className="card-feature">• Handouts & Notes</div>
                  <div className="card-feature">• Short Notes</div>
                  <div className="card-feature">• Current Papers</div>
                  <div className="card-feature">• Reference Books</div>
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