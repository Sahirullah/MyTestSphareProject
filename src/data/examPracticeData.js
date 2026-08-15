// Helper function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get 50 questions
export const getQuestionSet = (allQuestions, attemptNumber = 0) => {
  const questionsPerExam = 50;
  const windowStart = attemptNumber * 10;
  const windowEnd = Math.min(windowStart + questionsPerExam, allQuestions.length);
  
  let selectedQuestions = allQuestions.slice(windowStart, windowEnd);
  
  if (selectedQuestions.length < questionsPerExam) {
    const remaining = questionsPerExam - selectedQuestions.length;
    selectedQuestions = selectedQuestions.concat(allQuestions.slice(0, remaining));
  }
  
  return shuffleArray(selectedQuestions);
};

// Generate 100 questions for a course
const generateCourseQuestions = (courseName) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the fundamental concept of ${courseName}?`, opts: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 1 },
    { q: `Which principle applies to ${courseName}?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'Principle 4'], correct: 2 },
    { q: `Define the key term in ${courseName}:`, opts: ['Definition A', 'Definition B', 'Definition C', 'Definition D'], correct: 1 },
    { q: `How is ${courseName} applied in practice?`, opts: ['Method A', 'Method B', 'Method C', 'Method D'], correct: 2 },
    { q: `What is important in ${courseName}?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'Aspect 4'], correct: 0 },
  ];

  for (let i = 0; i < 100; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: `${base.q} (Q${i + 1})`,
      options: base.opts,
      correct: base.correct,
    });
  }
  return questions;
};

//CS Subjects

// CS606 Compiler Construction Questions - MOVED BEFORE ARRAY
const generateCS606Questions = () => {
  return [ 
    { question: "When encountering an empty cell during LL(1) parsing, it typically indicates a parsing ________.", options: ["Dead", "Error", "End", 'Start'], correct: 1 },
    { question: "LR parsing reduces a string to the ______ symbol by inverting productions. ", options: ["End", "Last", "First", 'Start'], correct: 3 },
  ];
};


//cs001
const generateCS001Questions = () => {
  return [
    { question: "cs for ___________.", options: ['chemistry practical', 'computer science', 'construction payroll', 'common plate'], correct: 1 },
    { question: "cs101 ___________.", options: ['chemistry practical', 'computer science', 'introduction to computing', 'common plate'], correct: 2 },
    { question: "cs202 for ___________.", options: ['chemistry practical', 'computer science', 'construction payroll', 'front end development'], correct: 1 }
  ];
};

export const examPracticeData = [
  // ACC - Accounting
  { id: 1, code: 'ACC311', title: 'Fundamentals of Auditing', category: 'acc', image: '📊', questions: generateCourseQuestions('Auditing'), totalQuestions: 50 },
  { id: 2, code: 'ACC501', title: 'Business Finance', category: 'acc', image: '📊', questions: generateCourseQuestions('Business Finance'), totalQuestions: 50 },
  
  // BIO - Biology
  { id: 10, code: 'BIO101', title: 'Basic Biology I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology I'), totalQuestions: 50 },
  { id: 11, code: 'BIO102', title: 'Basic Biology II', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology II'), totalQuestions: 50 },
  { id: 12, code: 'BIO201', title: 'Cell Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  { id: 13, code: 'BIO202', title: 'Biochemistry I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry I'), totalQuestions: 50 },
  { id: 14, code: 'BIO203', title: 'Methods in Molecular Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Molecular Biology'), totalQuestions: 50 },
  { id: 15, code: 'BIO204', title: 'Principles of Biochemical Engineering', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemical Engineering'), totalQuestions: 50 },
  { id: 16, code: 'BIO301', title: 'Essentials of Genetics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetics'), totalQuestions: 50 },
  { id: 17, code: 'BIO302', title: 'Molecular Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Molecular Biology'), totalQuestions: 50 },
  { id: 18, code: 'BIO303', title: 'Biochemistry II', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry II'), totalQuestions: 50 },
  { id: 19, code: 'BIO401', title: 'Biostatistics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biostatistics'), totalQuestions: 50 },
  { id: 20, code: 'BIO502', title: 'Genomics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genomics'), totalQuestions: 50 },
  { id: 21, code: 'BIO503', title: 'Biological Physics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biological Physics'), totalQuestions: 50 },
  { id: 22, code: 'BIO504', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry'), totalQuestions: 50 },
  { id: 23, code: 'BIO505', title: 'Essentials of Genetics (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetics'), totalQuestions: 50 },
  { id: 24, code: 'BIO506', title: 'Biochemistry II (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry'), totalQuestions: 50 },
  { id: 25, code: 'BIO732', title: 'Gene Manipulation & Genetic Engineering', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetic Engineering'), totalQuestions: 50 },
  { id: 26, code: 'BIO734', title: 'Advance Cell Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  
  // CS - Computer Science
  { id: 50, code: 'CS001', title: 'Computer Proficiency License', category: 'cs', image: '💻', questions: generateCS001Questions(), totalQuestions: 50 },
  { id: 51, code: 'CS101', title: 'Introduction to Computing', category: 'cs', image: '💻', questions: generateCourseQuestions('Computing'), totalQuestions: 50 },
  { id: 52, code: 'CS201', title: 'Introduction to Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('Programming'), totalQuestions: 50 },
  { id: 53, code: 'CS202', title: 'Fundamentals of Front End Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Front End'), totalQuestions: 50 },
  { id: 54, code: 'CS204', title: 'Cyber Law', category: 'cs', image: '💻', questions: generateCourseQuestions('Cyber Law'), totalQuestions: 50 },
  { id: 55, code: 'CS205', title: 'Information Security', category: 'cs', image: '💻', questions: generateCourseQuestions('Security'), totalQuestions: 50 },
  { id: 56, code: 'CS206', title: 'Introduction to Network Design & Analysis', category: 'cs', image: '💻', questions: generateCourseQuestions('Network Design'), totalQuestions: 50 },
  { id: 57, code: 'CS301', title: 'Data Structures', category: 'cs', image: '💻', questions: generateCourseQuestions('Data Structures'), totalQuestions: 50 },
  { id: 58, code: 'CS302', title: 'Digital Logic and Design', category: 'cs', image: '💻', questions: generateCourseQuestions('Digital Logic'), totalQuestions: 50 },
  { id: 59, code: 'CS304', title: 'Object Oriented Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('OOP'), totalQuestions: 50 },
  { id: 60, code: 'CS310', title: 'Open Source Web Application Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Development'), totalQuestions: 50 },
  { id: 61, code: 'CS311', title: 'Introduction to Web Services Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Services'), totalQuestions: 50 },
  { id: 62, code: 'CS312', title: 'Database Modeling and Design', category: 'cs', image: '💻', questions: generateCourseQuestions('Database'), totalQuestions: 50 },
  { id: 63, code: 'CS401', title: 'Computer Architecture & Assembly Language', category: 'cs', image: '💻', questions: generateCourseQuestions('Architecture'), totalQuestions: 50 },
  { id: 64, code: 'CS402', title: 'Theory of Automata', category: 'cs', image: '💻', questions: generateCourseQuestions('Automata'), totalQuestions: 50 },
  { id: 65, code: 'CS403', title: 'Database Management System', category: 'cs', image: '💻', questions: generateCourseQuestions('DBMS'), totalQuestions: 50 },
  { id: 66, code: 'CS407', title: 'Routing and Switching', category: 'cs', image: '💻', questions: generateCourseQuestions('Networking'), totalQuestions: 50 },
  { id: 67, code: 'CS408', title: 'Human Computer Interaction', category: 'cs', image: '💻', questions: generateCourseQuestions('HCI'), totalQuestions: 50 },
  { id: 68, code: 'CS411', title: 'Visual Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('Visual Programming'), totalQuestions: 50 },
  { id: 69, code: 'CS432', title: 'Network Modeling and Simulation', category: 'cs', image: '💻', questions: generateCourseQuestions('Network Simulation'), totalQuestions: 50 },
  { id: 70, code: 'CS435', title: 'Cloud Computing', category: 'cs', image: '💻', questions: generateCourseQuestions('Cloud'), totalQuestions: 50 },
  { id: 71, code: 'CS501', title: 'Advanced Computer Architecture', category: 'cs', image: '💻', questions: generateCourseQuestions('Architecture'), totalQuestions: 50 },
  { id: 72, code: 'CS502', title: 'Fundamentals of Algorithms', category: 'cs', image: '💻', questions: generateCourseQuestions('Algorithms'), totalQuestions: 50 },
  { id: 73, code: 'CS504', title: 'Software Engineering I', category: 'cs', image: '💻', questions: generateCourseQuestions('Software Engineering'), totalQuestions: 50 },
  { id: 74, code: 'CS506', title: 'Web Design and Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Design'), totalQuestions: 50 },
  { id: 75, code: 'CS507', title: 'Information Systems', category: 'cs', image: '💻', questions: generateCourseQuestions('Information Systems'), totalQuestions: 50 },
  { id: 76, code: 'CS508', title: 'Modern Programming Languages', category: 'cs', image: '💻', questions: generateCourseQuestions('Languages'), totalQuestions: 50 },
  { id: 77, code: 'CS601', title: 'Data Communication', category: 'cs', image: '💻', questions: generateCourseQuestions('Communication'), totalQuestions: 50 },
  { id: 78, code: 'CS602', title: 'Computer Graphics', category: 'cs', image: '💻', questions: generateCourseQuestions('Graphics'), totalQuestions: 50 },
  { id: 79, code: 'CS604', title: 'Operating Systems', category: 'cs', image: '💻', questions: generateCourseQuestions('OS'), totalQuestions: 50 },
  { id: 80, code: 'CS605', title: 'Software Engineering II', category: 'cs', image: '💻', questions: generateCourseQuestions('Software Engineering'), totalQuestions: 50 },
  { id: 81, code: 'CS606', title: 'Compiler Construction', category: 'cs', image: '💻', questions: generateCS606Questions(), totalQuestions: 50 },
  { id: 82, code: 'CS607', title: 'Artificial Intelligence', category: 'cs', image: '💻', questions: generateCourseQuestions('AI'), totalQuestions: 50 },
  { id: 83, code: 'CS609', title: 'System Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('System Programming'), totalQuestions: 50 },
  { id: 84, code: 'CS610', title: 'Computer Networks', category: 'cs', image: '💻', questions: generateCourseQuestions('Networks'), totalQuestions: 50 },
  { id: 85, code: 'CS611', title: 'Software Quality Engineering', category: 'cs', image: '💻', questions: generateCourseQuestions('QA'), totalQuestions: 50 },
  { id: 86, code: 'CS614', title: 'Data Warehousing', category: 'cs', image: '💻', questions: generateCourseQuestions('Data Warehousing'), totalQuestions: 50 },
];

export const quizCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'cs', name: 'CS - Computer Science' },
];