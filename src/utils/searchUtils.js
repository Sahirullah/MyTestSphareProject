import { assignmentData, assignmentDataClass10, allAssignmentData } from '../data/assignmentData';
import { midtermData, allMidtermData } from '../data/pastPaper';
import { finalTermData, allFinalTermData } from '../data/fileHub';
import { quizzesData, allQuizzesData } from '../data/quizzesData';
import { allBooksData } from '../data/allBooksData';
import { examPracticeData } from '../data/examPracticeData';

// Combine all searchable data from all sources
export const getAllSearchableData = () => {
  const allData = [];
  
  // Add assignment data (use allAssignmentData if available)
  if (allAssignmentData) {
    allData.push(...allAssignmentData);
  } else if (assignmentData) {
    allData.push(...assignmentData);
    if (assignmentDataClass10) allData.push(...assignmentDataClass10);
  }
  
  // Add midterm data (use allMidtermData if available)
  if (allMidtermData) {
    allData.push(...allMidtermData);
  } else if (midtermData) {
    allData.push(...midtermData);
  }
  
  // Add final term data (use allFinalTermData if available)
  if (allFinalTermData) {
    allData.push(...allFinalTermData);
  } else if (finalTermData) {
    allData.push(...finalTermData);
  }
  
  // Add quizzes data (use allQuizzesData if available)
  if (allQuizzesData) {
    allData.push(...allQuizzesData);
  } else if (quizzesData) {
    allData.push(...quizzesData);
  }
  
  // Add exam practice data
  if (examPracticeData) allData.push(...examPracticeData);
  
  // Add All Books data
  if (allBooksData) allData.push(...allBooksData);
  
  return allData;
};

// Search function - case insensitive partial matching
export const searchData = (query) => {
  if (!query || !query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  const allData = getAllSearchableData();
  
  if (!allData || allData.length === 0) {
    console.warn('No data available to search');
    return [];
  }
  
  const results = allData.filter(item => {
    if (!item) return false;
    
    const title = (item.title || '').toLowerCase();
    const code = (item.code || '').toLowerCase();
    const category = (item.category || '').toLowerCase();
    const subject = (item.subject || '').toLowerCase();
    const type = (item.type || '').toLowerCase();
    
    return (
      title.includes(searchTerm) ||
      code.includes(searchTerm) ||
      category.includes(searchTerm) ||
      subject.includes(searchTerm) ||
      type.includes(searchTerm)
    );
  });
  
  // Sort results to prioritize those with links/files
  const resultsWithFiles = results.filter(item => item.link || item.links);
  const resultsWithQuestions = results.filter(item => item.questions && !(item.link || item.links));
  const resultsWithoutFiles = results.filter(item => !item.link && !item.links && !item.questions);
  
  return [...resultsWithFiles, ...resultsWithQuestions, ...resultsWithoutFiles];
};
