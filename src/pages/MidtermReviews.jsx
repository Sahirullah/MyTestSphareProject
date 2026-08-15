import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { midtermReviewsData } from '../data/midtermReviewsData';
import './StudentReviews.css';

const MidtermReviews = () => {
  const [sortBy, setSortBy] = useState('recent');
  const [filterRating, setFilterRating] = useState('all');

  const sortedReviews = [...midtermReviewsData].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const filteredReviews = filterRating === 'all' 
    ? sortedReviews 
    : sortedReviews.filter(review => review.rating >= parseInt(filterRating));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="star">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="reviews-page">
      <Header />
      
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>Student Reviews ({filteredReviews.length})</h2>
          <div className="sort-filter">
            <button 
              className={`sort-btn ${sortBy === 'recent' ? 'active' : ''}`}
              onClick={() => setSortBy('recent')}
            >
              Most Recent
            </button>
            <button 
              className={`sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
              onClick={() => setSortBy('rating')}
            >
              Highest Rated
            </button>
            <button 
              className={`filter-btn ${filterRating === 'all' ? 'active' : ''}`}
              onClick={() => setFilterRating('all')}
            >
              All Ratings
            </button>
            <button 
              className={`filter-btn ${filterRating === '4' ? 'active' : ''}`}
              onClick={() => setFilterRating('4')}
            >
              4+ Stars
            </button>
            <button 
              className={`filter-btn ${filterRating === '5' ? 'active' : ''}`}
              onClick={() => setFilterRating('5')}
            >
              5 Stars
            </button>
          </div>
        </div>

        <div className="reviews-grid">
          {filteredReviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-author-info">
                  <div className="review-author">{review.author}</div>
                  <div className="review-course">{review.course}</div>
                  <div className="review-date">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              <div className="review-rating">
                {renderStars(review.rating)}
              </div>

              <h3 className="review-title">{review.title}</h3>
              <p className="review-content">{review.content}</p>

              <div className="review-footer">
                <div className="review-helpful">
                  <button className="helpful-btn">👍 Helpful</button>
                  <button className="helpful-btn">👎 Not Helpful</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="no-reviews">
            <p>No reviews found with the selected filters.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MidtermReviews;
