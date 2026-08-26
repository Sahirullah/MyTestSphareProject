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

export const examPracticeData = [
  // FIN - Finance
  { id: 1, code: 'FIN', title: 'Finance mock test', category: 'fin', image: '💰', questions: generateCourseQuestions('Finance'), totalQuestions: 50 },

  // Police - Islamabad Police
  { id: 2, code: 'Police', title: 'Islamabad Police ASI mock test', category: 'police', image: '👮', questions: generateCourseQuestions('Police'), totalQuestions: 50 },
  { id: 3, code: 'Police', title: 'Islamabad Police constable mock test', category: 'police', image: '👮', questions: generateCourseQuestions('Police'), totalQuestions: 50 },
  { id: 4, code: 'Police', title: 'Islamabad Police UDC mock test', category: 'police', image: '👮', questions: generateCourseQuestions('Police'), totalQuestions: 50 },
  { id: 5, code: 'Police', title: 'Islamabad Police Head constable mock test', category: 'police', image: '👮', questions: generateCourseQuestions('Police'), totalQuestions: 50 },

  // ARMY - Pakistan Army
  { id: 6, code: 'Army', title: 'GD in Pakistan army free mock test', category: 'army', image: '🎖️', questions: generateCourseQuestions('Army'), totalQuestions: 50 },
  { id: 7, code: 'Army', title: 'PMA in Pakistan army free mock test', category: 'army', image: '🎖️', questions: generateCourseQuestions('Army'), totalQuestions: 50 },
  
  // FIA - Federal Investigation Agency
  { id: 8, code: 'FIA', title: 'FIA ASI free mock test 01', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },
  { id: 9, code: 'FIA', title: 'FIA ASI free mock test 02', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },
  { id: 10, code: 'FIA', title: 'FIA ASI free mock test 03', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },
  { id: 11, code: 'FIA', title: 'FIA Assistant free mock test 01', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },
  { id: 12, code: 'FIA', title: 'FIA Assistant free mock test 02', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },
  { id: 13, code: 'FIA', title: 'FIA LDC free mock test 01', category: 'fia', image: '🕵️‍♂️', questions: generateCourseQuestions('FIA'), totalQuestions: 50 },

  // PPSC - Punjab Public Service Commission
  { id: 14, code: 'PPSC', title: 'PPSC deputy accountant free mock test 01', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },
  { id: 15, code: 'PPSC', title: 'PPSC deputy accountant free mock test 02', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },
  { id: 16, code: 'PPSC', title: 'PPSC Assistant free mock test 03', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },
  { id: 17, code: 'PPSC', title: 'PPSC Assistant free mock test 04', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },
  { id: 18, code: 'PPSC', title: 'PPSC Assistant free mock test 05', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },
  { id: 19, code: 'PPSC', title: 'PPSC Assistant free mock test 06', category: 'ppsc', image: '📝', questions: generateCourseQuestions('PPSC'), totalQuestions: 50 },

  // AIR FORCE - Pakistan Air Force
  { id: 20, code: 'PAF', title: 'Pakistan Air Force GDP free mock test', category: 'airforce', image: '✈️', questions: generateCourseQuestions('Air Force'), totalQuestions: 50 },
  { id: 21, code: 'PAF', title: 'Pakistan Air Force Arotrades free mock test', category: 'airforce', image: '✈️', questions: generateCourseQuestions('Air Force'), totalQuestions: 50 },
  { id: 22, code: 'PAF', title: 'Pakistan Air Force Airman free mock test', category: 'airforce', image: '✈️', questions: generateCourseQuestions('Air Force'), totalQuestions: 50 },
  { id: 23, code: 'PAF', title: 'Pakistan Air Force Air defence free mock test', category: 'airforce', image: '✈️', questions: generateCourseQuestions('Air Force'), totalQuestions: 50 },

  // IELTS
  { id: 24, code: 'IELTS', title: 'IELTS free mock test', category: 'ielts', image: '📝', questions: generateCourseQuestions('IELTS'), totalQuestions: 50 },

  // Class 9th & 10th
  { id: 25, code: '9th10th', title: 'Class 9th free mock physics test practice', category: '9th10th', image: '🎓', questions: generateCourseQuestions('Physics'), totalQuestions: 50 },

  //International law
  { id: 26, code: 'intlaw', title: 'International law free mock test practice', category: 'intlaw', image: '🎓', questions: generateCourseQuestions('Physics'), totalQuestions: 50 },


];

export const quizCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'army', name: 'ARMY - Pakistan Army' },
  { id: 'intlaw', name: 'INTLAW - International Law' },
  { id: 'fin', name: 'FIN - Finance' },
  { id: 'police', name: 'Police - Islamabad Police' },
  { id: 'fia', name: 'FIA - Federal Investigation Agency' },
  { id: 'ppsc', name: 'PPSC - Punjab Public Service Commission' },
  { id: 'airforce', name: 'AIR FORCE - Pakistan Air Force' },
  { id: 'ielts', name: 'IELTS - English Language Test' },
  { id: '9th10th', name: 'CLASS 9th & 10th - free mock tests' },
];
