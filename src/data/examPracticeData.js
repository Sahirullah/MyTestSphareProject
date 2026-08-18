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
  
  //Islamabad police ASI Exam
  { id: 86, code: 'Police', title: 'Islamabad Police ASI mock test', category: 'police', image: '👮', questions: [
  {"question": "Which of the following is generally organized by direct approach and receives a favorable reaction?", "options": ["Business message", "Bad news message", "Good news message", "Routine message"], "correct": 2},
  {"question": "Which of the followings are real but unnamed readers?", "options": ["Phantom Readers", "Future Readers", "Complex Readers", "Technical Readers"], "correct": 0},
  {"question": "Choose the correct sentence.", "options": ["You may not enter Mr. Harris office without his permission.", "You may not enter Mr. Harrises office without his permission.", "You may not enter Mr. Harrises' office without his permission.", "You may not enter Mr. Harris's office without his permission."], "correct": 3},
  {"question": "Choose the sentence with the correct punctuation.", "options": ["The American flag has three colors: namely, red, white, and blue.", "The American flag has three colors, namely; red, white, and blue.", "The American flag has three colors; namely, red, white, and blue.", "The American flag has three colors namely, red, white, and blue."], "correct": 2},
  {"question": "Feasibility reports are used:", "options": ["To analyze problems and predict practical alternatives.", "To control problems, sell products and services.", "To monitor and control production, sales, shipping, etc.", "To solve problems and supply facts."], "correct": 0},
  {"question": "Which of the following should be avoided while writing business message?", "options": ["Pompous language", "Intimacy", "Preaching and bragging", "All of the above"], "correct": 3},
  {"question": "Which of the following is the process of drafting your message?", "options": ["Planning", "Composing", "Editing", "Revising"], "correct": 1},
  {"question": "Which of the following is achieved through a balance between precise language and familiar language?", "options": ["Clarity", "Correctness", "Concreteness", "Conciseness"], "correct": 0},
  {"question": "Which of the following is the first thing you must consider while writing a resume?", "options": ["Defining your objectives", "Planning your objectives", "Evaluating your objectives", "Revising your objectives"], "correct": 0},
  {"question": "Which of the following is associated with scholarly writing?", "options": ["Informal writing", "Formal writing", "Archaic writing", "Technical writing"], "correct": 1},
  {"question": "Which one of the following questions that produce specific information, save time, requires less effort to answer, and eliminate bias and prejudice in answer?", "options": ["Open-ended questions.", "Close-ended questions.", "Subjective questions.", "Objective questions."], "correct": 1},
  {"question": "Choose the correct sentence.", "options": ["I am asking if you would like to rollerblade together tomorrow?", "I am asking \"if you would like to rollerblade together tomorrow\"?", "I am asking \"if you would like to rollerblade together tomorrow.\"", "I am asking if you would like to rollerblade together tomorrow."], "correct": 3},
  {"question": "Choose the correct sentence.", "options": ["That is a problem who can't be solved without a calculator.", "That is a problem that can't be solved without a calculator.", "That is a problem whom can't be solved without a calculator.", "That is a problem which can't be solved without a calculator."], "correct": 1},
  {"question": "Which of the following proposal section is related to researcher’s investigation?", "options": ["Justification of the study", "Research question", "Definition of terms", "Purpose of the study"], "correct": 1},
  {"question": "Which method is a bottom-up or generative approach to research?", "options": ["Pattern method", "Hypothesis method", "Inductive method", "Deductive method"], "correct": 2},
  {"question": "What is the last thing you need to do before you get ready to distribute your document?", "options": ["Designing", "Revising", "Proofreading", "All of the above"], "correct": 2},
  {"question": "Which phrase is used during a presentation?", "options": ["Thanks for giving me a hand.", "Thank you very much for your time today.", "Thank you for your quick response.", "Thank you for your corporation."], "correct": 1},
  {"question": "Claim letter is also called:", "options": ["Transmittal letter", "Credit refusing letter", "Adjustment letter", "Complaint letter"], "correct": 3},
  {"question": "If your message is specific, definite and vivid; which of the following principle has been applied?", "options": ["Completeness", "Correctness", "Conciseness", "Concreteness"], "correct": 3},
  {"question": "Which of the following suggests the following statement? \"First group the ideas and then put them in sequence.\"", "options": ["Revising a message", "Editing a message", "Organizing a message", "Planning a message"], "correct": 2},
  {"question": "Which of the following significantly improves the interest of a presentation?", "options": ["Illustration", "Visual aids", "Image", "Reflection"], "correct": 1},
  {"question": "What is meant by task-facilitating roles?", "options": ["Suggesting decision-making procedures that will move the group towards the goal", "Drawing out other members by showing verbal support", "Offering to yield on a point in the interest of reaching mutually acceptable decision", "Drawing out other members by showing verbal and non verbal support, praise or agreement ."], "correct": 0},
  {"question": "How many elements are found in conventional superstructure for instructions?", "options": ["Three", "Four", "Five", "Two"], "correct": 2},
  {"question": "AIDS stands for:", "options": ["Attention Immunodeficiency Syndrome", "Acquired Implement System", "Acquired Immunodeficiency Syndrome", "Attention Implement System"], "correct": 2},
  {"question": "Choose the correct sentence.", "options": ["A friendly-little dog is all I need for company.", "A friendly little dog is all I need for company.", "A friendly, little dog is all I need for company.", "A friendly; little dog is all I need for company."], "correct": 1},
  {"question": "Choose the sentence with the correct comma placement.", "options": ["We will grant you immunity, if you decide to cooperate with us.", "We will grant you immunity, if you decide, to cooperate with us.", "We will grant you immunity if you decide, to cooperate with us.", "We will grant you immunity if you decide to cooperate with us."], "correct": 3},
  {"question": "Software functional specs usually contain:", "options": ["Assumptions, resources", "Cost target, Maintenance", "A & b – correct", "Orientation specs and Functional specs"], "correct": 2},
  {"question": "Which of the following messages aim to influence audiences who are inclined to resist, so they depend heavily on strategic planning", "options": ["Considerate messages", "Courteous messages", "Informative messages", "Persuasive messages"], "correct": 3},
  {"question": "Choose the sentence with the correct comma placement.", "options": ["You are I am sure, telling the truth.", "You are I am sure telling, the truth.", "You are, I am sure, telling the truth.", "You are, I am sure telling the truth."], "correct": 2},
  {"question": "Choose the correct sentence.", "options": ["He is a happily-married man.", "He is a happily married man.", "He is a happily, married man.", "He is a happily; married man"], "correct": 1},
  {"question": "Which of the following presents the main idea before the supporting data?", "options": ["Strategic plan", "Indirect plan", "Direct plan", "Business plan"], "correct": 2},
  {"question": "Which of the following is a nonverbal communication conveyed by posture and movement?", "options": ["Expressions", "Body language", "Nodding of head", "Smile"], "correct": 1},
  {"question": "Which is farthest in the past?", "options": ["couple of days", "last week", "a day before yesterday", "a month ago"], "correct": 3},
  {"question": "How can you make the following statement Concise? Which Three types of readers usually exist?", "options": ["Phantom Readers, Future Readers, Complicated Readers", "Future Readers, Complex Readers, Complicated Readers", "Future Readers, Complex Readers, Technical Readers", "Phantom Readers, Future Readers, Complex Readers"], "correct": 3},
  {"question": "Why important observations, suggestions, or objections should be written?", "options": ["To persuade the reader", "To create permanent records", "To make communication more effective", "To establish credibility"], "correct": 1},
  {"question": "What should be the purpose of visual aids?", "options": ["To make the document interesting", "To provide information", "To simplify the data", "All of the above"], "correct": 3},
  {"question": "How will you define building credibility?", "options": ["Try to earn confidence of strangers especially those predisposed to be skeptical or antagonistic.", "Giving your audience a preview what’s ahead add to your authority and more importantly, helps people understand your message.", "Arousing audience’s interest", "The relationship you have with your audience"], "correct": 0},
  {"question": "How can we hold audience’s attention?", "options": ["Plan to devote half of your time on audience’s behavior", "Present every point in light of audience’s needs and values", "By changing tone of voice", "None of them"], "correct": 1},
  {"question": "In which of the following bars are replaced by drawings that represent the thing described?", "options": ["Bar graphs", "Line Graphs", "Pictographs", "Photographs"], "correct": 2},
  {"question": "Something that stands for or represents something else, especially an object representing an abstraction is called:", "options": ["Pagination", "Symbol", "Equation", "Acronyms"], "correct": 1},
  {"question": "is used to enclose one or more entire sentences that add relevant but not essential detail to the main discussion.", "options": ["Ellipses", "Exclamation marks", "Parentheses", "Brackets"], "correct": 2},
  {"question": "Choose the correct sentence.", "options": ["Your award is richly-deserved.", "Your award is richly deserved.", "Your award is richly, deserved.", "Your award is richly; deserved."], "correct": 1},
  {"question": "Choose the correct sentence.", "options": ["The tomatoes whom grow in her garden are unlike those you buy in a store.", "The tomatoes who grow in her garden are unlike those you buy in a store.", "The tomatoes that grow in her garden are unlike those you buy in a store.", "The tomatoes which grow in her garden are unlike those you buy in a store."], "correct": 2},
  {"question": "How many a progress reports in a year is made?", "options": ["One", "Two", "Three", "Four"], "correct": 3},
  {"question": "What is meant by the term 'Denotative'?", "options": ["It refers to the literal meaning of a word.", "It refers to the surface meaning of the word.", "It refers to cognitive meaning of words.", "It refers simple meaning of words."], "correct": 0},
  {"question": "Choose the correct sentence.", "options": ["Carl worried about the hurricane; but tried to stay calm and help his family.", "Carl worried about the hurricane; but tried to stay calm, and help his family.", "Carl worried about the hurricane but tried to stay calm and help his family.", "Carl worried about the hurricane but tried to stay calm, and help his family."], "correct": 2},
  {"question": "Choose the correct sentence.", "options": ["That is a promise that cannot be broken.", "That is a promise who cannot be broken.", "That is a promise whom cannot be broken.", "That is a promise which cannot be broken."], "correct": 0},
  {"question": "Choose the correct sentence.", "options": ["The alarm clock went off at 4:00 o'clock.", "The alarm clock went off at four p.m. o'clock.", "The alarm clock went off at four o'clock.", "The alarm clock went off at four o'clock p.m."], "correct": 2},
  {"question": "Choose the correct sentence.", "options": ["She will go to her grave with some secrets said Wendy.", "\"She will go to her grave with some secrets,\" said Wendy.", "\"She will go to her grave with some secrets\" said Wendy.", "\"She will go to her grave with some secrets.\" said Wendy."], "correct": 1},
  {"question": "----------------- is a list of source materials on a particular subject.", "options": ["Index", "Bibliography", "Appendixes", "Glossary"], "correct": 1},
  {"question": "Which one of the following should be placed either immediately before or after the noun?", "options": ["Misplaced Modifiers", "Modifiers of Nouns", "Adverb Modifiers", "Dangling Modifiers"], "correct": 1},
  {"question": "Which of the following aspect denotes the necessary research and organizing ideas?", "options": ["Informal letter", "Report production", "Manuscript", "None of them"], "correct": 1},
  {"question": "Which of the following you consider while making the framework of your table?", "options": ["How to order the rows and columns", "How to align entries in the columns", "Where to place special notes", "All of them"], "correct": 3},
  {"question": "Complete the question tag: they worked for Kaufman's,", "options": ["Did they?", "Haven't they?", "Didn't they?", "Had they ?"], "correct": 2},
  {"question": "Biased language that might offend the audience is based on ---------------", "options": ["Cultural bias, gender bias", "Cultural bias, nationality bias", "Unity bias, nationality bias", "None of them"], "correct": 0},
  {"question": "What is meant by the term 'Connotative'?", "options": ["It refers to the literal meaning of words.", "It refers to the associations that are connected to a certain word.", "It refers to general meaning of words.", "It refers to cognitive meaning of words."], "correct": 1},
  {"question": "How can we increase the audience’s ability to absorb and remember information from a purely practical standpoint?", "options": ["Audience attention", "Presentation", "Speech", "The visual aids"], "correct": 3},
  {"question": "\"I am currently studying veterinary medicine, and I am working part-time at an animal clinic.\" This statement in the introduction of the speech could best be described as:", "options": ["Gaining attention", "Revealing the topic", "Establishing credibility", "Bragging"], "correct": 2},
  {"question": "Choose the sentence with the correct punctuation.", "options": ["We ask, therefore; that you keep this matter confidential.", "We ask, therefore, that you keep this matter confidential.", "We ask; therefore, that you keep this matter confidential.", "We ask: therefore, that you keep this matter confidential."], "correct": 1},
  {"question": "Choose the sentence with the correct punctuation.", "options": ["The order was requested six weeks ago, therefore I expected the shipment to arrive by now.", "The order was requested six weeks ago, therefore, I expected the shipment to arrive by now.", "The order was requested six weeks ago: therefore, I expected the shipment to arrive by now.", "The order was requested six weeks ago; therefore, I expected the shipment to arrive by now."], "correct": 3},
  {"question": "What is meant by intended reader?", "options": ["Simple reader", "Complex reader", "A member of a target audience", "Unplanned reader"], "correct": 2},
  {"question": "The act of considering or examining something in order to judge its value shows:", "options": ["Credibility", "Evaluation", "Conciseness", "All of them"], "correct": 1},
  {"question": "What are the best persuasive messages closely connected to?", "options": ["The indirect approach", "The positive aspects of your message", "The direct approach", "The desires and interests of the audience"], "correct": 3},
  {"question": "A good business letter is simple and straightforward without being harsh or ----------.", "options": ["patriotic", "paternal", "patronizing", "panoramic"], "correct": 2},
  {"question": "Which type of Visual aid is the most difficult to execute effectively?", "options": ["Graphics", "Projections", "Handouts", "Film and video"], "correct": 3},
  {"question": "What is the typical sequence of interviews?", "options": ["Screening stage and final stage.", "Screening stage, selection stage, and final stage.", "Selection stage and final stage.", "There is no typical sequence of interviews."], "correct": 1},
  {"question": "Pakistan won a gold medal for the first time in Olympics in _____ ?", "options": ["1960", "1970", "1980", "1990"], "correct": 0},
  {"question": "The computer process both analog and digital signal is ______?", "options": ["Hybrid", "Analogue", "Digital", "None of these"], "correct": 0},
  {"question": "The list of coded instructions is called?", "options": ["Flowchart", "Algorithm", "Computer program", "None of these"], "correct": 2},
  {"question": "Which view shows margins and the rulers?", "options": ["Page layout", "Normal", "Page setup", "None of these"], "correct": 0},
  {"question": "You can modify alignment, line spacing and paragraph in the _____?", "options": ["Layout menu", "Format tab", "Paragraph dialog box", "None of these"], "correct": 2},
  {"question": "What difference does the 5th generation computer have from other generation computers?", "options": ["Scientific code", "Object Oriented Programming", "Technological advancement", "None of these"], "correct": 2},
  {"question": "The atmospheric pressure at any place is measured by _____?", "options": ["Altimeter", "Pressure Meter", "Barometer", "None of these"], "correct": 2},
  {"question": "The depletion of ozone layer has been caused mainly by _____?", "options": ["The release of chlorofluorocarbons into the atmosphere", "The deforestation of large area land", "The release of industrial waste", "None of these"], "correct": 0},
  {"question": "غزل کے کس شعر میں شاعر اپنا تخلص بیان کرتا ہے؟", "options": ["بیت", "مقطع", "مطلع", "None of these"], "correct": 1},
  {"question": "جملہ کسے کہتے ہیں؟", "options": ["دو یا دو سے زیادہ الفاظ کا مجموعہ", "وہ جملہ جس میں فاعل نہ ہو", "حرفوں کا مجموعہ", "None of these"], "correct": 0},
  {"question": "حرف تہجی کی ترتیب سے کونسا لفظ لغت میں پہلے آئے گا؟", "options": ["حضرت", "ظالم", "ضمانت", "None of these"], "correct": 0},
  {"question": "درست جملے کی نشاندہی کریں؟", "options": ["یہ روایت بالکل صیح نہیں", "یہ روایت بالکل صحیح نہیں", "یہ روایت بلکل صیح نہیں", "None of these"], "correct": 1},
  {"question": "درج ذیل میں سے ضرب المثل کون سی ہے؟", "options": ["ہوائی قلعے تعمیر کرنا", "ہتھلی پر سرسوں جمانا", "الٹا چور کوتوال کو دانٹے", "None of these"], "correct": 2},
  {"question": "The Antonym of Capricious is?", "options": ["Unchanging", "Yielding", "Heavy", "None of these"], "correct": 0},
  {"question": "Complete the Idiom: Hell hath no fury like _____?", "options": ["A woman scorned", "A burned woman", "A woman forgotten", "A devil is advocate"], "correct": 0},
  {"question": "What do you understand by Intifada?", "options": ["Ethnicity", "Peace", "Uprising", "None of these"], "correct": 2},
  {"question": "I would have helped him if he _____ to me.", "options": ["Had come", "came", "come", "None of these"], "correct": 0},
  {"question": "What is the Synonym of EXEMPLIFY?", "options": ["Summary", "Answer", "Illustrate", "Over"], "correct": 2},
  {"question": "What Sine Die means?", "options": ["Without order", "Without fixing a date", "Fixing a date", "None of these"], "correct": 1},
  {"question": "She ______ English now.", "options": ["Is speaking", "Speak", "Speaks", "None of these"], "correct": 0},
  {"question": "Fill in the blanks: There is no reason ______ anyone should behave cruelly.", "options": ["Which", "That", "Why", "None of these"], "correct": 2},
  {"question": "William Shakespeare is the greatest playwright in European literature. In which category his plays fall?", "options": ["History", "Tragedies", "Comedies", "All of these"], "correct": 3},
  {"question": "The Antonym of Obscure is?", "options": ["Fool", "Wise", "Famous", "None of these"], "correct": 2},
  {"question": "The person who is looking for sympathy talks _____?", "options": ["Plaintively", "Politely", "Didactically", "None of these"], "correct": 0},
  {"question": "Choose the one which best expresses the meaning of the given word ASSIMILATE?", "options": ["Assemble", "Absorb", "Receive", "Arrange"], "correct": 1},
  {"question": "Mark used to resume a scattered subject is?", "options": ["Semicolon", "Inverted Commas", "Dash", "None of these"], "correct": 2},
  {"question": "In a group of 550 students, 42% go on a tour. How many students go on tour?", "options": ["231", "210", "117", "245"], "correct": 0},
  {"question": "Half of 1 percent written as a decimal is?", "options": ["0.005", "0.05", "0.02", "None of these"], "correct": 0},
  {"question": "The square of 35 is ____?", "options": ["1225", "117", "175", "None of these"], "correct": 0},
  {"question": "Mount Everest's height is 29,028 feet. What is it's height in meters?", "options": ["8748 m", "8948 m", "8848 m", "None of these"], "correct": 2},
  {"question": "Find the odd one out 13, 41, 43, 47, 53, 61, 71, 73, 81?", "options": ["81", "71", "61", "51"], "correct": 0},
  {"question": "The sum of two numbers is 25 and their difference is 13. Find their product.", "options": ["114", "124", "134", "144"], "correct": 0},
  {"question": "2, 1, 1/2, 1/4, _____ which number is next in the series?", "options": ["1/8", "1/6", "1/12", "None of these"], "correct": 0},
  {"question": "Complete the series: 3, 8, 6, 14, ______, 20?", "options": ["8", "9", "10", "11"], "correct": 1},
  {"question": "What is the angle between the minute hand and the hour hand of a clock when the time is 12:00?", "options": ["5°", "10°", "0°", "None of these"], "correct": 2},
  {"question": "A train 250 m long, running with a speed of 63 km/hr will pass a tree in ____?", "options": ["14.3", "10.8", "30", "None of these"], "correct": 0},
  {"question": "If Y = 3x + 12 and Y = 5 then what is X equal to?", "options": ["3/7", "7/3", "-7/3", "None of these"], "correct": 2},
  {"question": "When the State Bank wants to decrease money supply in the country, it?", "options": ["Buys government in stock market", "Lowers discount rate", "Sells government securities", "None of these"], "correct": 2},
  {"question": "Which is the largest landlocked country in the world?", "options": ["Uzbekistan", "Kazakhstan", "China", "Bhutan"], "correct": 1},
  {"question": "All of the following countries are permanent members of the Security Council except?", "options": ["France", "Germany", "Italy", "None of these"], "correct": 1}
]},
];

export const quizCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'police', name: 'Police - Islamabad Police' },
];