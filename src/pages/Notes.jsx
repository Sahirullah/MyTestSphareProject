import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import './Blogs.css';

const Notes = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Notes' },
    { id: 'cs', name: 'Computer Science' },
    { id: 'math', name: 'Mathematics' },
    { id: 'physics', name: 'Physics' },
    { id: 'biology', name: 'Biology' },
  ];

  const notes = [
    { id: 1, title: 'Introduction to Programming', category: 'cs', image: '💻', author: 'Admin', date: '2024-01-15', description: 'Learn the basics of programming' },
    { id: 2, title: 'Calculus I Notes', category: 'math', image: '📐', author: 'Admin', date: '2024-01-16', description: 'Comprehensive calculus notes' },
    { id: 3, title: 'Physics Fundamentals', category: 'physics', image: '⚡', author: 'Admin', date: '2024-01-17', description: 'Basic physics concepts' },
  ];

  const filteredNotes = selectedCategory === 'all'
    ? notes
    : notes.filter(note => note.category === selectedCategory);

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>Study Notes</h1>
          <p>Access comprehensive study notes for all courses</p>
        </div>
      </div>

      <div className="exam-container">
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

        <div className="exams-grid">
          {filteredNotes.map(note => (
            <div key={note.id} className="exam-card">
              <div className="card-header">
                <div className="card-icon">{note.image}</div>
              </div>
              
              <div className="card-body">
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>

              <div className="card-footer">
                <p style={{ fontSize: '12px', color: '#999' }}>By {note.author} • {note.date}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="no-results">
            <p>No notes found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Notes;
