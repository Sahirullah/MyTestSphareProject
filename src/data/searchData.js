// Centralized search data for all resources
export const searchData = [
  // VU Handouts
  { id: 1, title: 'VU Handouts', category: 'Handouts', path: '/vu-handout', keywords: ['handout', 'vu', 'notes', 'lecture', 'material'] },
  { id: 2, title: 'Highlighted Handout', category: 'Handouts', path: '/highlighted-handout', keywords: ['highlighted', 'handout', 'notes', 'important'] },
  
  // Exams & Tests
  { id: 3, title: 'Midterm Files', category: 'Exams', path: '/midterm', keywords: ['midterm', 'exam', 'papers', 'test', 'past papers'] },
  { id: 4, title: 'Final Term Files', category: 'Exams', path: '/final-term', keywords: ['final', 'term', 'exam', 'papers', 'test'] },
  { id: 5, title: 'Midterm Reviews', category: 'Reviews', path: '/midterm-reviews', keywords: ['midterm', 'reviews', 'preparation'] },
  { id: 6, title: 'Exam Practice', category: 'Exams', path: '/exam-practice', keywords: ['exam', 'practice', 'questions', 'quiz'] },
  
  // Assignments & Quizzes
  { id: 7, title: 'Assignment', category: 'Assignments', path: '/assignment', keywords: ['assignment', 'homework', 'task'] },
  { id: 8, title: 'Quizzes', category: 'Quizzes', path: '/quizzes', keywords: ['quiz', 'quizzes', 'test', 'questions'] },
  
  // Other Resources
  { id: 9, title: 'Notes', category: 'Notes', path: '/notes', keywords: ['notes', 'study', 'lecture'] },
  { id: 10, title: 'Blogs', category: 'Blog', path: '/blogs', keywords: ['blog', 'articles', 'posts'] },
  { id: 11, title: 'Important Softwares', category: 'Software', path: '/softwares', keywords: ['software', 'tools', 'programs', 'applications'] },
  
  // Info Pages
  { id: 12, title: 'About', category: 'Info', path: '/about', keywords: ['about', 'information', 'details'] },
  { id: 13, title: 'Contact', category: 'Info', path: '/contact', keywords: ['contact', 'support', 'help'] },
];

// Search function
export const performSearch = (query) => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  
  return searchData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const categoryMatch = item.category.toLowerCase().includes(lowerQuery);
    const keywordMatch = item.keywords.some(keyword => keyword.includes(lowerQuery));
    
    return titleMatch || categoryMatch || keywordMatch;
  });
};
