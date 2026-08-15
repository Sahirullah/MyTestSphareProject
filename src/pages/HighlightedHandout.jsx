import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { allBooksData, allBooksCategories } from '../data/allBooksData';
import './HighlightedHandout.css';

const HighlightedHandout = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handouts = allBooksData.map(item => ({
    ...item,
    description: `Highlighted and annotated VU handouts for ${item.title} (${item.code}) in PDF Format. Key points emphasized for better understanding.`,
    status: 'Highlighted Notes',
    hasLecture: true,
    isHighlighted: true
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = allBooksCategories;

  const filteredHandouts = selectedCategory === 'all' 
    ? handouts 
    : handouts.filter(h => h.category === selectedCategory);

  return (
    <div className={`highlighted-handout-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">⭐</div>
          <h1>HIGHLIGHTED HANDOUT</h1>
          <p>VU Handouts with Key Points Emphasized and Annotated</p>
        </div>
      </div>

      <div className="handout-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="handouts-grid">
          {filteredHandouts.map(handout => (
            <div key={handout.id} className="handout-card highlighted">
              <div className="card-header">
                <div className="card-icon">{handout.image}</div>
                <span className="status-badge highlighted-badge">✨ {handout.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{handout.code}</h3>
                <h4>{handout.title}</h4>
                <p>{handout.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {handout.hasLecture && (
                    <span className="feature-tag highlighted-tag">📝 Lecture-wise</span>
                  )}
                  <span className="feature-tag highlighted-tag">✏️ Annotated</span>
                </div>
                {handout.link ? (
                  <a href={handout.link} target="_blank" rel="noopener noreferrer" className="download-btn highlighted-btn">
                    📥 Download PDF
                  </a>
                ) : (
                  <button className="download-btn highlighted-btn" disabled>
                    📥 Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredHandouts.length === 0 && (
          <div className="no-results">
            <p>No highlighted handouts found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HighlightedHandout;
