import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allMidtermData, midtermCategories } from '../data/pastPaper';
import { useTheme } from '../context/ThemeContext';
import './PastPaper.css';

const PastPaper = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = allMidtermData.map(item => ({
    ...item
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = midtermCategories;

  const filteredPapers = selectedCategory === 'all'
    ? papers
    : papers.filter(paper => paper.category === selectedCategory);

  return (
    <div className={`papers-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />

      <div className="papers-hero">
        <div className="hero-content">
          <div className="hero-icon">📄</div>
          <h1>Past Papers</h1>
          <p>Download past papers for all courses</p>
        </div>
      </div>

      <div className="papers-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {midtermCategories.map(cat => (
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

        <div className="papers-grid">
          {filteredPapers.map((paper, index) => (
            <div key={`${paper.code}-${index}`} className="paper-card">
              <div className="card-header">
                <div className="card-icon">{paper.image}</div>
                <h3>{paper.code}</h3>
              </div>

              <div className="card-body">
                <h4>{paper.title}</h4>
              </div>

              <div className="card-footer">
                {paper.links && paper.links.length > 0 ? (
                  <div className="download-buttons">
                    {paper.links.map((link, index) => (
                      link && (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-btn"
                        >
                          📥 Paper {index + 1}
                        </a>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="no-papers">
                    <p>No papers available</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PastPaper;
