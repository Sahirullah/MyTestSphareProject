import { useNavigate } from 'react-router-dom';
import './Support.css';

const Support = () => {
  const navigate = useNavigate();

  const supportOptions = [
    {
      id: 1,
      title: 'Online Test',
      description: 'Practice with our comprehensive online exam system. Test your knowledge with past papers and mock exams.',
      icon: '📝',
      features: [
        'Mock Exams',
        'Past Papers',
        'Timed Tests',
        'Instant Results'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)',
      link: '/exam-practice'
    },
    {
      id: 2,
      title: 'Past Paper',
      description: 'Access comprehensive past papers and previous exam questions to prepare effectively for your tests.',
      icon: '📄',
      features: [
        'Previous Papers',
        'Sample Questions',
        'Solutions',
        'Year-wise Papers'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)',
      link: '/past-paper'
    },
    {
      id: 3,
      title: 'Books Library',
      description: 'Access thousands of handouts, assignments, past papers, and notes from top Pakistani universities - completely free.',
      icon: '📚',
      features: [
        'Handouts & Notes',
        'Short Notes',
        'Current Papers',
        'Past Papers'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)',
      link: '/all-books'
    }
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

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

                <button 
                  className="support-btn" 
                  onClick={() => handleCardClick(option.link)}
                >
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Support;