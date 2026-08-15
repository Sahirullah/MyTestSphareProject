import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import './ImportantSoftwares.css';

const ImportantSoftwares = () => {
  const { isDarkMode } = useTheme();

  const softwares = [
    {
      id: 1,
      name: 'Visual Studio Code',
      category: 'Code Editor',
      icon: '💻',
      description: 'A powerful, lightweight code editor perfect for web development with excellent extensions.',
      download: 'https://code.visualstudio.com/',
    },
    {
      id: 2,
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: '🔀',
      description: 'Essential version control system for managing code and collaborating with others.',
      download: 'https://git-scm.com/',
    },
    {
      id: 3,
      name: 'Node.js',
      category: 'Runtime',
      icon: '⚡',
      description: 'JavaScript runtime for building server-side applications and tools.',
      download: 'https://nodejs.org/',
    },
    {
      id: 4,
      name: 'Postman',
      category: 'API Testing',
      icon: '🚀',
      description: 'Complete API development environment for testing and debugging APIs.',
      download: 'https://www.postman.com/',
    },
    {
      id: 5,
      name: 'Docker',
      category: 'Containerization',
      icon: '📦',
      description: 'Containerize your applications for consistent deployment across environments.',
      download: 'https://www.docker.com/',
    },
    {
      id: 6,
      name: 'MongoDB Compass',
      category: 'Database',
      icon: '🗄️',
      description: 'GUI for MongoDB to manage databases visually and efficiently.',
      download: 'https://www.mongodb.com/products/compass',
    },
    {
      id: 7,
      name: 'Figma',
      category: 'Design',
      icon: '🎨',
      description: 'Collaborative UI/UX design tool for creating beautiful interfaces.',
      download: 'https://www.figma.com/',
    },
    {
      id: 8,
      name: 'Slack',
      category: 'Communication',
      icon: '💬',
      description: 'Team communication platform for seamless collaboration.',
      download: 'https://slack.com/',
    },
  ];

  return (
    <div className={`softwares-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      <div className="softwares-header">
        <h1>Important Softwares</h1>
        <p>Essential tools and applications for learning and development</p>
      </div>

      <div className="softwares-container">
        <div className="softwares-grid">
          {softwares.map((software) => (
            <div key={software.id} className="software-card">
              <div className="software-icon">{software.icon}</div>
              <div className="software-category">{software.category}</div>
              <h2>{software.name}</h2>
              <p className="software-description">{software.description}</p>
              <a href={software.download} target="_blank" rel="noopener noreferrer" className="download-btn">
                Download / Visit →
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImportantSoftwares;
