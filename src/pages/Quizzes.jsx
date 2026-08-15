import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allQuizzesData, quizzesCategories } from '../data/quizzesData';
import './Quizzes.css';

const Quizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const quizzes = allQuizzesData.map(item => ({
    ...item,
    description: `Download Quizzes for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Quizzes',
    hasLecture: true
  }));

  const categories = quizzesCategories;

  const filteredQuizzes = selectedCategory === 'all' 
    ? quizzes 
    : quizzes.filter(q => q.category === selectedCategory);

  return (
    <div className="quizzes-page">
      <Header />
      
      <div className="quizzes-hero">
        <div className="hero-content">
          <div className="hero-icon">❓</div>
          <h1>Quizzes</h1>
          <p>Test your knowledge with our comprehensive quiz collection</p>
        </div>
      </div>
      
      <div className="quizzes-container">
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

        <div className="quizzes-grid">
          {filteredQuizzes.map(quiz => (
            <div key={quiz.id} className="quiz-card">
              <div className="card-header">
                <div className="card-icon">{quiz.image}</div>
                <span className="status-badge">{quiz.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{quiz.code}</h3>
                <h4>{quiz.title}</h4>
                <p>{quiz.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {quiz.hasLecture && (
                    <span className="feature-tag">📄 Quizzes</span>
                  )}
                </div>
                <button className="download-btn">
                  📥 Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="no-results">
            <p>No quizzes found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Quizzes;
