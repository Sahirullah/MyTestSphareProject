import React from 'react';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 2,
      name: 'Waqas Ahmad',
      role: 'Mathematics Student',
      company: 'Virtual University',
      avatar: user2,
      rating: 5,
      review: 'The mathematics solved papers are absolutely amazing. Clear solutions and step-by-step explanations. Perfect for exam preparation!',
      theme: 'Mathematics Solved Papers',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Fatima Khan',
      role: 'Physics Student',
      company: 'Virtual University',
      avatar: user3,
      rating: 4,
      review: 'Great collection of physics materials. The lab reports and practical guides are very helpful. Saved me a lot of time during semester.',
      theme: 'Physics Lab Reports',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Malik',
      role: 'Islamic Studies Student',
      company: 'Virtual University',
      avatar: user4,
      rating: 5,
      review: 'As an Islamic student,All Types Of Careers hub provides authentic and well-researched materials. The Quran and Hadith notes are excellent.',
      theme: 'Islamic Studies Notes',
      date: '1 week ago'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">What Our Students Say</h2>
          <p className="reviews-subtitle">
            Join thousands of students who trustAll Types Of Careers Hub for their academic success
          </p>
        </div>



        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <p className="reviewer-role">{review.role}</p>
                    <p className="reviewer-company">{review.company}</p>
                  </div>
                </div>
                <div className="review-meta">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>

              <div className="review-content">
                <p className="review-text">"{review.review}"</p>
              </div>

              <div className="review-theme">
                <span className="theme-label">Material downloaded:</span>
                <span className="theme-name">{review.theme}</span>
              </div>

              <div className="review-footer">
                <button className="helpful-btn">
                  👍 Helpful
                </button>
                <span className="verified-badge">
                  ✅ Verified Student
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Reviews;