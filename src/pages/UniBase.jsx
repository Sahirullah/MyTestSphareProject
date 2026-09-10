import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allUniBaseData, uniBaseCategories } from '../data/uniBaseData';
import { useTheme } from '../context/ThemeContext';
import SubjectCard from './SubjectCard';
import './ExamPractice.css';

const UniBase = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = allUniBaseData.map(item => ({
    ...item
  })).sort((a, b) => a.code.localeCompare(b.code));

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>Uni Base</h1>
          <p>Access comprehensive university resources and study materials</p>
        </div>
      </div>

      <div className="exam-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {uniBaseCategories.map(cat => (
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

        <div className="exams-grid">
          {filteredCourses.map((course, index) => (
            <SubjectCard key={`${course.code}-${index}`} exam={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No courses found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default UniBase;
