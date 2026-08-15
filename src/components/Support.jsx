import React from 'react';
import './Support.css';

const Support = () => {
  const supportOptions = [
    {
      id: 1,
      title: 'Free Study Materials',
      description: 'Access thousands of handouts, assignments, past papers, and notes from top Pakistani universities - completely free.',
      icon: '📚',
      features: [
        'Handouts & Notes',
        'Short Notes',
        'Current Papers',
        'Past Papers'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 2,
      title: 'Online Exams',
      description: 'Practice with our comprehensive online exam system. Test your knowledge with past papers and mock exams.',
      icon: '📝',
      features: [
        'Mock Exams',
        'Past Papers',
        'Timed Tests',
        'Instant Results'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 3,
      title: 'Free Help',
      description: 'Join our community of 5,000+ students for instant help, study tips, and peer support - all completely free.',
      icon: '🤝',
      features: [
        'Community Support',
        'Study Groups',
        'Peer Help',
        'Academic Guidance'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    }
  ];

  return (
    <section className="support">
      <div className="support-container">
        <div className="support-header">
          <h2 className="support-title">Why Choose Test Spare?</h2>
          <p className="support-subtitle">
            Everything you need for academic success, all in one place
          </p>
        </div>
        
        <div className="support-grid">
          {supportOptions.map((option) => (
            <div key={option.id} className="support-card" style={{'--support-color': option.color}}>
              <div className="support-background" style={{background: option.bgGradient}}></div>
              
              <div className="support-content">
                <div className="support-icon-wrapper">
                  <div className="support-icon">{option.icon}</div>
                </div>
                
                <h3 className="support-title-card">{option.title}</h3>
                <p className="support-description">{option.description}</p>
                
                <div className="support-features">
                  {option.features.map((feature, index) => (
                    <div key={index} className="support-feature">
                      <span className="feature-dot">•</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                

              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Support;