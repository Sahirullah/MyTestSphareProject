import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Softwares.css';

const Softwares = () => {
  const { isDarkMode } = useTheme();

  const softwares = [
    {
      id: 1,
      name: 'Microsoft Office 365',
      category: 'Productivity',
      description: 'Essential office suite for document creation, spreadsheets, and presentations.',
      icon: '📄',
      features: ['Word', 'Excel', 'PowerPoint', 'OneNote'],
    },
    {
      id: 2,
      name: 'Visual Studio Code',
      category: 'Development',
      description: 'Powerful code editor for programming and web development.',
      icon: '💻',
      features: ['Code Editing', 'Debugging', 'Extensions', 'Git Integration'],
    },
    {
      id: 3,
      name: 'Zoom',
      category: 'Communication',
      description: 'Video conferencing platform for online classes and meetings.',
      icon: '📹',
      features: ['Video Calls', 'Screen Sharing', 'Recording', 'Chat'],
    },
    {
      id: 4,
      name: 'Notepad++',
      category: 'Development',
      description: 'Lightweight text editor for coding and note-taking.',
      icon: '📝',
      features: ['Syntax Highlighting', 'Multiple Languages', 'Fast Performance'],
    },
    {
      id: 5,
      name: 'Adobe Acrobat Reader',
      category: 'Utilities',
      description: 'PDF reader and editor for viewing and annotating documents.',
      icon: '📕',
      features: ['PDF Viewing', 'Annotation', 'Form Filling', 'Signature'],
    },
    {
      id: 6,
      name: 'Python',
      category: 'Programming',
      description: 'Programming language essential for data science and automation.',
      icon: '🐍',
      features: ['Data Analysis', 'Machine Learning', 'Web Development'],
    },
    {
      id: 7,
      name: 'Git',
      category: 'Version Control',
      description: 'Version control system for managing code repositories.',
      icon: '⚙️',
      features: ['Repository Management', 'Branching', 'Merging', 'Collaboration'],
    },
    {
      id: 8,
      name: 'VLC Media Player',
      category: 'Media',
      description: 'Versatile media player supporting various video and audio formats.',
      icon: '🎬',
      features: ['Multiple Formats', 'Streaming', 'Plugins', 'Lightweight'],
    },
  ];

  return (
    <div className={`softwares-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="softwares-header">
        <h1>Important Softwares</h1>
        <p>Essential tools and applications for your academic success</p>
      </div>

      <div className="softwares-container">
        <div className="softwares-grid">
          {softwares.map((software) => (
            <div key={software.id} className="software-card">
              <div className="software-icon">{software.icon}</div>
              <div className="software-content">
                <h3>{software.name}</h3>
                <span className="software-category">{software.category}</span>
                <p className="software-description">{software.description}</p>
                <div className="software-features">
                  {software.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="download-btn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Softwares;
