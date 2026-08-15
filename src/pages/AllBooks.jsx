import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allBooksData, allBooksCategories } from '../data/allBooksData';
import './AllBooks.css';

const AllBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handouts = allBooksData.map(item => ({
    ...item,
    description: `Download complete VU updated handouts for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Updated Handouts',
    hasLecture: true
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = allBooksCategories;

  const filteredHandouts = selectedCategory === 'all' 
    ? handouts 
    : handouts.filter(h => h.category === selectedCategory);

  return (
    <div className="vu-handout-page">
      <Header />
      
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>Download All Books For Free</h1>
          <p>World Complete Study Materials.This is online books library you can access anytime anywhere.</p>
          <p>Download your study materials in PDF,Doc for free.</p>
          <p>5000000+ free books available.</p>
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
            <div key={handout.id} className="handout-card">
              <div className="card-header">
                <div className="card-icon">{handout.image}</div>
                <span className="status-badge">{handout.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{handout.code}</h3>
                <h4>{handout.title}</h4>
                <p>{handout.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {handout.hasLecture && (
                    <span className="feature-tag">📝 Lecture-wise</span>
                  )}
                </div>
                {handout.link ? (
                  <a href={handout.link} target="_blank" rel="noopener noreferrer" className="download-btn">
                    📥 Download PDF
                  </a>
                ) : (
                  <button className="download-btn" disabled>
                    📥 Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredHandouts.length === 0 && (
          <div className="no-results">
            <p>No handouts found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllBooks;
