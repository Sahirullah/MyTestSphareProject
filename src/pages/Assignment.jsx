import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { allAssignmentData, assignmentCategories } from '../data/assignmentData';
import './Assignment.css';

const Assignment = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const assignments = allAssignmentData.map(item => ({
    ...item,
    description: `Download Assignments for ${item.title} in PDF Format.`,
    status: `Class ${item.class}`,
    hasLecture: true
  }));

  const categories = assignmentCategories;

  const filteredAssignments = selectedCategory === 'all' 
    ? assignments 
    : assignments.filter(a => a.category === selectedCategory);

  return (
    <div className={`assignment-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="assignment-hero">
        <div className="hero-content">
          <div className="hero-icon">📝</div>
          <h1>ASSIGNMENTS</h1>
          <p>Class 9-10 Assignment Study Materials</p>
        </div>
      </div>
      
      <div className="assignment-container">
        <div className="category-filter">
          <h2>Select Subject</h2>
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

        <div className="assignment-grid">
          {filteredAssignments.map(assignment => (
            <div key={assignment.id} className="assignment-card">
              <div className="card-header">
                <div className="card-icon">{assignment.image}</div>
                <span className="status-badge">{assignment.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{assignment.code}</h3>
                <h4>{assignment.title}</h4>
                <p>{assignment.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {assignment.hasLecture && (
                    <span className="feature-tag">📄 Assignments</span>
                  )}
                </div>
                <button className="download-btn">
                  📥 Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAssignments.length === 0 && (
          <div className="no-results">
            <p>No assignments found in this subject.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Assignment;
