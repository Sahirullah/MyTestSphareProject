import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import './Blogs.css';

const Blogs = () => {
  const { isDarkMode } = useTheme();

  const blogs = [
    {
      id: 1,
      title: 'Getting Started withAll Types Of Careers',
      author: 'Ahmed Khan',
      date: 'November 15, 2024',
      category: 'Guides',
      excerpt: 'Learn how to navigateAll Types Of Careers and make the most of our educational resources.',
      image: '📚',
    },
    {
      id: 2,
      title: 'Study Tips for Success',
      author: 'Fatima Ali',
      date: 'November 10, 2024',
      category: 'Study Tips',
      excerpt: 'Discover effective study techniques that can help you ace your exams.',
      image: '📖',
    },
    {
      id: 3,
      title: 'Mastering Time Management',
      author: 'Hassan Ahmed',
      date: 'November 5, 2024',
      category: 'Productivity',
      excerpt: 'Balance your studies with other responsibilities using these proven time management strategies.',
      image: '⏰',
    },
    {
      id: 4,
      title: 'Understanding Virtual Exams',
      author: 'Zainab Malik',
      date: 'October 30, 2024',
      category: 'Exams',
      excerpt: 'Everything you need to know about taking exams in a virtual environment.',
      image: '✍️',
    },
    {
      id: 5,
      title: 'Note-Taking Strategies',
      author: 'Ali Raza',
      date: 'October 25, 2024',
      category: 'Guides',
      excerpt: 'Effective note-taking methods to help you retain information better.',
      image: '📝',
    },
    {
      id: 6,
      title: 'Collaboration Tools Overview',
      author: 'Sara Khan',
      date: 'October 20, 2024',
      category: 'Technology',
      excerpt: 'A comprehensive guide to using collaborative learning tools.',
      image: '🤝',
    },
  ];

  return (
    <div className={`blogs-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      <div className="blogs-header">
        <h1>Educational Blogs</h1>
        <p>Insights, tips, and guides to enhance your learning journey</p>
      </div>

      <div className="blogs-container">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image">{blog.image}</div>
              <div className="blog-content">
                <div className="blog-category">{blog.category}</div>
                <h2>{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-author">{blog.author}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <button className="read-more-btn">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
