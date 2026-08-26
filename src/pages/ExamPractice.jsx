import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { examPracticeData, quizCategories, getQuestionSet } from '../data/examPracticeData';
import { useTheme } from '../context/ThemeContext';
import './ExamPractice.css';

const ExamPractice = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentExam, setCurrentExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [savedAnswers, setSavedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isSaved, setIsSaved] = useState(true);
  const [showSummary, setShowSummary] = useState(false);

  const allExamData = examPracticeData;
  const currentCategories = quizCategories;

  const filteredExams = selectedCategory === 'all'
    ? allExamData
    : allExamData.filter(exam => {
        const matches = exam.category === selectedCategory;
        return matches;
      });

  // Timer effect
  useEffect(() => {
    if (!currentExam || showScore) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentExam, showScore]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = (exam) => {
    const questions = getQuestionSet(exam.questions);
    setCurrentExam({
      ...exam,
      questions: questions
    });
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSavedAnswers({});
    setFlaggedQuestions(new Set());
    setShowScore(false);
    setTimeLeft(1500); // 25 minutes
    setIsSaved(true);
  };

  const handleAnswerChange = (index) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: index
    });
    setIsSaved(false);
  };

  const handleSave = () => {
    setSavedAnswers({
      ...savedAnswers,
      [currentQuestionIndex]: answers[currentQuestionIndex]
    });
    setIsSaved(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFirst = () => {
    setCurrentQuestionIndex(0);
  };

  const handleLast = () => {
    setCurrentQuestionIndex(currentExam.questions.length - 1);
  };

  const handleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex);
    } else {
      newFlagged.add(currentQuestionIndex);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleFinish = () => {
    let correctCount = 0;
    currentExam.questions.forEach((question, index) => {
      // Only count answers that were saved
      if (savedAnswers[index] && answers[index] === question.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowScore(true);
  };

  const handleRestart = () => {
    setCurrentExam(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSavedAnswers({});
    setFlaggedQuestions(new Set());
    setShowScore(false);
    setTimeLeft(1500);
    setIsSaved(true);
  };

  if (!currentExam) {
    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-hero">
          <div className="hero-content">
            <div className="hero-icon">📝</div>
            <h1>EXAM PRACTICE</h1>
            <p>Secure,free,fast and fully digital exam practice platform for all students around the world.</p>
            <p>Practice for any exam get results instantly.Get your selected wrongAnswers and its correct answers.</p>
            <p>Mock test , NMDCAT test practice,ETEA test online practice,ILET test practice,SAT test practice. scroll down for more exam practice.</p>
          </div>
        </div>

        <div className="exam-container">
          <div className="exam-type-filter">
            <h2>Select Exam Type</h2>
          </div>

          <div className="category-filter">
            <h2>Select Category</h2>
            <div className="filter-buttons">
              {currentCategories.map(cat => (
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
            {filteredExams.sort((a, b) => a.code.localeCompare(b.code)).map(exam => (
              <div key={`${exam.id}-${exam.code}`} className="exam-card">
                <div className="card-header">
                  <div className="card-icon">{exam.image}</div>
                  <span className="status-badge">Exam Practice</span>
                </div>
                
                <div className="card-body">
                  <h3>{exam.code}</h3>
                  <h4>{exam.title}</h4>
                  <p>Take practice exam for {exam.title} with 50 randomly selected questions</p>
                </div>

                <div className="card-footer">
                  <div className="card-features">
                    <span className="feature-tag">❓ 50 Questions</span>
                  </div>
                  <button
                    className="start-exam-btn"
                    onClick={() => startExam(exam)}
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="no-results">
              <p>No exams found in this category.</p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }

  if (showScore) {
    const savedCount = Object.keys(savedAnswers).length;
    const percentage = savedCount > 0 ? Math.round((score / savedCount) * 100) : 0;
    const wrongCount = savedCount - score;

    // Get details of correct and wrong answers
    const results = currentExam.questions
      .map((question, index) => {
        if (savedAnswers[index] === undefined) return null;
        
        const isCorrect = savedAnswers[index] === question.correct;
        return {
          index,
          question,
          userAnswer: savedAnswers[index],
          isCorrect,
          correctAnswer: question.correct
        };
      })
      .filter(Boolean);

    const correctAnswers = results.filter(r => r.isCorrect);
    const wrongAnswers = results.filter(r => !r.isCorrect);

    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-page">
          <div className="exam-header-bar">
            <div className="exam-title">{currentExam.title}</div>
            <div className="user-section">
              <span className="login-time">✓ Exam Completed</span>
            </div>
          </div>

          <div className="exam-info-bar">
            <div className="question-no">Results</div>
            <div className="right-section">
              <span className="marks">Total: {savedCount} Questions</span>
            </div>
          </div>

          <div className="results-container">
            <div className="results-header-section">
              <h2>Exam Results</h2>
              <p className="results-subtitle">Congratulations! You've completed the exam</p>
            </div>

            <div className="results-wrapper-main">
              <div className="results-detailed-section">
                <div className="results-tabs">
                  <div className="results-group">
                    {correctAnswers.length > 0 && (
                      <div className="results-group-section correct-group">
                        <div className="results-group-header">
                          <h3>Result Details ({correctAnswers.length})</h3>
                        </div>
                        <div className="results-list">
                          {correctAnswers.map((result, idx) => (
                            <div key={idx} className="result-item correct">
                              <div className="result-header">
                                <span className="result-number">Q{result.index + 1}</span>
                                <span className="result-badge">✓ Correct</span>
                              </div>
                              <div className="result-question">{result.question.question}</div>
                              <div className="result-answer">
                                <span className="answer-label">Your Answer:</span>
                                <span className="answer-text">{result.question.options[result.userAnswer]}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {wrongAnswers.length > 0 && (
                      <div className="results-group-section wrong-group">
                        <div className="results-group-header">
                          <h3>✗ Incorrect Answers ({wrongAnswers.length})</h3>
                        </div>
                        <div className="results-list">
                          {wrongAnswers.map((result, idx) => (
                            <div key={idx} className="result-item wrong">
                              <div className="result-header">
                                <span className="result-number">Q{result.index + 1}</span>
                                <span className="result-badge">✗ Incorrect</span>
                              </div>
                              <div className="result-question">{result.question.question}</div>
                              <div className="result-answers-comparison">
                                <div className="result-answer your-answer">
                                  <span className="answer-label">Your Answer:</span>
                                  <span className="answer-text incorrect">{result.question.options[result.userAnswer]}</span>
                                </div>
                                <div className="result-answer correct-answer">
                                  <span className="answer-label">Correct Answer:</span>
                                  <span className="answer-text correct-highlight">{result.question.options[result.correctAnswer]}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="results-score-sidebar">
                <div className="score-card-main">
                  <h3 className="score-title">Your Score</h3>
                  
                  <div className="score-circle-container">
                    <svg className="score-circle-border" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="90" className="circle-border" />
                    </svg>
                    <div className="score-percentage">{percentage}%</div>
                  </div>

                  <p className="score-summary">
                    You got <strong>{score} out of {savedCount}</strong> questions correct
                  </p>

                  <div className="score-breakdown-visual">
                    <div className="breakdown-display">
                      <div className="breakdown-item-circle correct">
                        <svg className="checkmark" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                        </svg>
                      </div>
                      <span className="breakdown-number">{String(score).padStart(2, '0')}</span>
                      <span className="breakdown-label">Correct</span>
                    </div>
                    
                    <div className="breakdown-display">
                      <div className="breakdown-item-circle wrong">
                        <svg className="cross-mark" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="white" />
                        </svg>
                      </div>
                      <span className="breakdown-number">{String(wrongCount).padStart(2, '0')}</span>
                      <span className="breakdown-label">Incorrect</span>
                    </div>
                  </div>

                  <button
                    className="restart-btn-new"
                    onClick={handleRestart}
                  >
                    Take Another Exam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const currentQuestion = currentExam.questions[currentQuestionIndex];
  const answered = answers[currentQuestionIndex] !== undefined;
  const savedCount = Object.keys(savedAnswers).length;
  const isFlagged = flaggedQuestions.has(currentQuestionIndex);

  // Summary Modal
  if (showSummary) {
    return (
      <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        <div className="exam-page">
          <div className="exam-header-bar">
            <div className="exam-title">{currentExam.title}</div>
            <div className="timer-section">
              <div className={`timer-circle ${timeLeft < 300 ? 'critical' : ''}`}>
                <span className="timer-icon">⏱️</span>
                <span className="timer-value">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="user-section">
              <span className="login-time">📊 In Progress</span>
            </div>
          </div>

          <div className="summary-modal">
            <div className="summary-header">
              <h2>Exam Summary</h2>
              <button 
                className="summary-close-btn"
                onClick={() => setShowSummary(false)}
              >
                ✕
              </button>
            </div>

            <div className="summary-content">
              <div className="summary-stats">
                <div className="stat-box">
                  <span className="stat-label">Total Questions</span>
                  <span className="stat-value">{currentExam.questions.length}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Saved Answers</span>
                  <span className="stat-value saved">{savedCount}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Flagged</span>
                  <span className="stat-value flagged">{flaggedQuestions.size}</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Not Visited</span>
                  <span className="stat-value not-visited">{currentExam.questions.length - savedCount}</span>
                </div>
              </div>

              <div className="summary-questions">
                <h3>Question Navigator</h3>
                <div className="question-summary-grid">
                  {currentExam.questions.map((_, index) => (
                    <button
                      key={index}
                      className={`summary-question-btn ${
                        index === currentQuestionIndex ? 'active' : ''
                      } ${savedAnswers[index] !== undefined ? 'answered' : ''} ${
                        flaggedQuestions.has(index) ? 'flagged' : ''
                      }`}
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        setShowSummary(false);
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="summary-legend">
                <div className="legend-item">
                  <span className="legend-color answered"></span>
                  <span>Answered</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color flagged"></span>
                  <span>Flagged</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color active"></span>
                  <span>Current</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color not-answered"></span>
                  <span>Not Answered</span>
                </div>
              </div>
            </div>

            <button 
              className="summary-continue-btn"
              onClick={() => setShowSummary(false)}
            >
              Continue Exam
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className={`exam-practice-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      
      <div className="exam-page">
        <div className="exam-header-bar">
          <div className="exam-title">{currentExam.title}</div>
          <div className="timer-section">
            <div className={`timer-circle ${timeLeft < 300 ? 'critical' : ''}`}>
              <span className="timer-icon">⏱️</span>
              <span className="timer-value">{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="user-section">
            <span className="login-time">📊 In Progress</span>
          </div>
        </div>

        <div className="exam-info-bar">
          <div className="question-no">
            Question {currentQuestionIndex + 1} of {currentExam.questions.length}
          </div>
          <div className="right-section">
            <span className="marks">Marks: 1</span>
            <button className="summary-btn" onClick={() => setShowSummary(true)}>Summary</button>
          </div>
        </div>

        <div className="exam-wrapper">
          <div className="exam-main">
            <div className="question-box">
              <p className="question">{currentQuestion.question}</p>
            </div>

            <div className="answer-section">
              <h3>Select your answer:</h3>
              <div className="options">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="option-label">
                    <input
                      type="radio"
                      name="answer"
                      checked={answers[currentQuestionIndex] === index}
                      onChange={() => handleAnswerChange(index)}
                    />
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {!isSaved && answered && (
              <div className="unsaved-warning">
                ⚠️ Click Save to confirm your answer
              </div>
            )}
          </div>

          <div className="exam-sidebar">
            <div className="summary-panel">
              <h4>Questions ({savedCount}/{currentExam.questions.length})</h4>
              <div className="question-grid">
                {currentExam.questions.map((_, index) => (
                  <button
                    key={index}
                    className={`question-btn ${
                      index === currentQuestionIndex ? 'active' : ''
                    } ${savedAnswers[index] !== undefined ? 'answered' : ''} ${
                      flaggedQuestions.has(index) ? 'flagged' : ''
                    }`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="stats">
                <div className="stat-row">
                  <span>Saved:</span>
                  <span>{savedCount}</span>
                </div>
                <div className="stat-row">
                  <span>Flagged:</span>
                  <span>{flaggedQuestions.size}</span>
                </div>
                <div className="stat-row">
                  <span>Not Visited:</span>
                  <span>{currentExam.questions.length - savedCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="exam-footer">
          <button
            className="first-btn"
            onClick={handleFirst}
            disabled={currentQuestionIndex === 0}
          >
            ⏮️ First
          </button>
          <button
            className="prev-btn"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ◀️ Previous
          </button>
          <button
            className={`flag-btn ${isFlagged ? 'active' : ''}`}
            onClick={handleFlag}
          >
            🚩 {isFlagged ? 'Unflag' : 'Flag'}
          </button>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={currentQuestionIndex === currentExam.questions.length - 1}
          >
            Next ▶️
          </button>
          <button
            className="last-btn"
            onClick={handleLast}
            disabled={currentQuestionIndex === currentExam.questions.length - 1}
          >
            Last ⏭️
          </button>
          <button
            className={`save-btn ${!isSaved ? 'highlight' : ''}`}
            onClick={handleSave}
            disabled={!answered}
          >
            💾 Save
          </button>
          <button
            className="finish-btn"
            onClick={handleFinish}
          >
            ✓ Finish
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExamPractice;
