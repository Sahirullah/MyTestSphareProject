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
  //FIA ASI free mock test 01 with 70 questions
  { id: 8, code: 'FIA', title: 'FIA ASI free mock test 01', category: 'fia', image: '🕵️‍♂️', questions:  [
  { "question": "Q.1: Which edition of ICC Men's T20 World Cup held in 2021?", "options": ["6th", "7th", "8th", "9th"], "correct": 1 },
  { "question": "Q.2: Facebook was launched in the year ?", "options": ["2003", "2004", "2005", "2006"], "correct": 1 },
  { "question": "Q.3: HTML is an abbreviation for _____?", "options": ["Hi Tech Meaningful Language", "Hypertext Markup Language", "Hypertext Mark Language", "None of these"], "correct": 1 },
  { "question": "Q.4: The four numbers in an IP address is called?", "options": ["Octets", "Octal", "Bytes", "None of these"], "correct": 0 },
  { "question": "Q.5: CD ROM compact disc__________", "options": ["read only memory", "read one memory", "read only money", "None of these"], "correct": 0 },
  { "question": "Q.6: Total senses of a human being is?", "options": ["4", "5", "6", "7"], "correct": 1 },
  { "question": "Q.7: The disease which spread in air ______?", "options": ["TB", "Measles", "Both A and B", "None of these"], "correct": 2 },
  { "question": "Q.8: Never laugh ______ the old persons.", "options": ["at", "on", "in", "with"], "correct": 0 },
  { "question": "Q.9: I told the tailor to put red buttons _____ the dress he is making for me.", "options": ["on", "at", "in", "with"], "correct": 0 },
  { "question": "Q.10: Check the weather condition _____ travelling.", "options": ["Initial", "Previous", "Earlier", "None of these"], "correct": 3 },
  { "question": "Q.11: Synonyms of indubitably?", "options": ["doubtful", "controversial", "apparent", "None of these"], "correct": 3 },
  { "question": "Q.12: The antonym of EXONERATE is", "options": ["Charge", "Free", "Absolve", "None of these"], "correct": 0 },
  { "question": "Q.13: Saif's father suffered a major stroke but he managed to pull _____?", "options": ["Through", "Out", "Over", "None of these"], "correct": 0 },
  { "question": "Q.14: Synonym of massacre?", "options": ["Saving", "Homage", "Slaughter", "None of these"], "correct": 2 },
  { "question": "Q.15: The business ______ was looking for an oppurtunity to destroy him.", "options": ["Rival", "Scenery", "Beautiful", "None of these"], "correct": 0 },
  { "question": "Q.16: The land was parched during the _____.", "options": ["Attention", "Famine", "Attack", "None of these"], "correct": 1 },
  { "question": "Q.17: The new government was replaced by a _____?", "options": ["Coup de grace", "coup d'état", "Coup d'man", "None of these"], "correct": 1 },
  { "question": "Q.18: The opponent ran him __________ in public.", "options": ["Over", "Off", "For", "None of these"], "correct": 3 },
  { "question": "Q.19: The operation was ____ the patient survived despite slim chances.", "options": ["Successful", "Effective", "Calculated", "None of these"], "correct": 0 },
  { "question": "Q.20: The secretary was ______ because of her outstanding performance.", "options": ["Promoted", "Raised", "Progressed", "None of these"], "correct": 0 },
  { "question": "Q.21: The sounds of the footsteps died _____ when the man moved away towards woods.", "options": ["With", "For", "Away", "None of these"], "correct": 2 },
  { "question": "Q.22: The superior thought _____ the most suitable person to the job.", "options": ["On", "At", "Out", "None of these"], "correct": 3 },
  { "question": "Q.23: The waiter gets a ___________ from the cosumers.", "options": ["Bonus", "Fee", "Tip", "None of these"], "correct": 2 },
  { "question": "Q.24: The _______ was served before the dinner.", "options": ["Horse De Combat", "Hors d'oeuvres", "Horse de saison", "None of these"], "correct": 1 },
  { "question": "Q.25: The ______ maintained even after the change of government.", "options": ["De Facto", "Status Quo", "Virtouso", "None of these"], "correct": 1 },
  { "question": "Q.26: The philanthropic organization ____ the treats among the orphans.", "options": ["Distributes", "Distributing", "Distribute", "None of these"], "correct": 0 },
  { "question": "Q.27: The ______ in the county are looked at with supicion.", "options": ["Stranger", "Foreigner", "Outsider", "None of these"], "correct": 0 },
  { "question": "Q.28: The military coup imposed a ____________ regime.", "options": ["Anarchy", "Almighty", "Dictorial", "None of these"], "correct": 2 },
  { "question": "Q.29: _______ between India and Pakistan is required.", "options": ["Detente", "Entente", "Impasse", "None of these"], "correct": 0 },
  { "question": "Q.30: The Synonym of Analyse is?", "options": ["Examine", "Destroy", "Ignore", "None of these"], "correct": 0 },
  { "question": "Q.31: The Synonym of Alleviate is?", "options": ["Ignore", "Reduce", "Wrong", "None of these"], "correct": 1 },
  { "question": "Q.32: The Synonym of Solace is?", "options": ["Comfort", "Frustration", "Anger", "None of these"], "correct": 0 },
  { "question": "Q.33: The Synonym of Conspicuous is?", "options": ["Discernible", "Concealed", "Unclear", "None of these"], "correct": 0 },
  { "question": "Q.34: Who is the current Chief of Naval Staff of Pakistan?", "options": ["Admiral Mujahid Anwar Khan", "Admiral Naveed Ashraf", "Admiral Waseem Akram", "None of these"], "correct": 1 },
  { "question": "Q.35: How many seats of Senate (Upper House) are there in Pakistan?", "options": ["98", "96", "94", "100"], "correct": 1 },
  { "question": "Q.36: How many general seats are there in the National Assembly of Pakistan?", "options": ["266", "267", "268", "269"], "correct": 0 },
  { "question": "Q.37: Which country complete covid-19 vaccine first?", "options": ["UK", "China", "India", "None of these"], "correct": 3 },
  { "question": "Q.38: The father name of the last Holy Prophet SAW is ________?", "options": ["Hashim", "Hazrat Abdullah", "Hazrat Abdul Mutalib", "None of these"], "correct": 1 },
  { "question": "Q.39: The real name of Hazrat Laal Shahbaz Qalandar was ______?", "options": ["Hazrat Zubair", "Hazrat Ahmed Sindhi", "Hazrat Usman Marvandi", "None of these"], "correct": 2 },
  { "question": "Q.40: Dr. Abdul Qadeer Khan obtained his physics degree from___?", "options": ["Karachi", "Belgium", "Lahore", "None of these"], "correct": 0 },
  { "question": "Q.41: The government of Benazir Bhutto was dismissed for the second time on November 1996 by _____?", "options": ["National Speaker of Pakistan Gohar Ayub Khan", "Chief Justice of Pakistan Sajjad Ali Shah", "President of Pakistan Farooq Leghari", "None of these"], "correct": 2 },
  { "question": "Q.42: Total amendments in the 1973 constitution of Pakistan?", "options": ["22", "25", "26", "27"], "correct": 2 },
  { "question": "Q.43: When was All India Muslim League founded?", "options": ["30 August 1947", "30 November 1906", "30 December 1906", "None of these"], "correct": 2 },
  { "question": "Q.44: WASA stands for ________?", "options": ["Water and Sanitation Agency", "Water Supply Agency", "Water and Social Agency", "None of these"], "correct": 0 },
  { "question": "Q.45: When the second Martial Law was imposed in Pakistan?", "options": ["March 23, 1970", "December 25, 1970", "March 25, 1969", "None of these"], "correct": 2 },
  { "question": "Q.46: NADRA stands for ______?", "options": ["Nation Database and Registrar AuthorityNation Database and Registrar Authority", "National Database and Registrar Authority", "National Database and Registration Authority", "None of these"], "correct": 2 },
  { "question": "Q.47: When Muhammad Ali Jinnah gave 14 points?", "options": ["1929", "1930", "1931", "1932"], "correct": 0 },
  { "question": "Q.48: In Pakistan, WAPDA stands for _______________?", "options": ["Wild And Plant Development Authority", "Water And Power Development Authority", "Water And Plant Development Authority", "None of these"], "correct": 1 },
  { "question": "Q.49: Who was the prime minister at the time of first Martial Law in Pakistan?", "options": ["Muhammad Ali Bogra", "Liaqat Ali Khan", "Feroz Khan Nuun", "None of these"], "correct": 2 },
  { "question": "Q.50: What is the total length of Thal desert", "options": ["approximately 190 miles", "approximately 390 miles", "approximately 290 miles", "None of these"], "correct": 0 },
  { "question": "Q.51: In Pakistan's federal system residuary powers are exercised by?", "options": ["Judiciary", "Provinces", "Centre", "None of these"], "correct": 1 },
  { "question": "Q.52: Total number of districts in Khyber Pakhtoonthwa.", "options": ["32", "33", "34", "35"], "correct": 3 },
  { "question": "Q.53: General seats in KPK assembly after merger of FATA are:", "options": ["145", "144", "143", "142"], "correct": 1 },
  { "question": "Q.54: Who dismissed the government of Khawaja Nazim ud Din:", "options": ["Sikandar Ali Mirza", "M. Ali Bogra", "Malik Ghulam Muhammad", "None of these"], "correct": 2 },
  { "question": "Q.55: Murre is located in which mountain range____?", "options": ["Pir Pnjal", "Karakuram", "Himalya", "None of these"], "correct": 0 },
  { "question": "Q.56: In which city first annual meeting of All India Muslim League was held?", "options": ["Karachi", "Lahore", "Islamabad", "None of these"], "correct": 0 },
  { "question": "Q.57: First time motorway was started in Pakistan in which year?", "options": ["1997", "1998", "1999", "1996"], "correct": 0 },
  { "question": "Q.58: Motor Way from Peshawar to Islamabad is:", "options": ["M1", "M2", "M3", "M4"], "correct": 0 },
  { "question": "Q.59: Who declared 4th Marshall Law in Pakistan_?", "options": ["Sikandar Ali Mirza", "Parvez Musharraf", "Ayoub Khan", "None of these"], "correct": 3 },
  { "question": "Q.60: What is the full form of ADBP", "options": ["Agriculture Development Book of Pakistan.", "Agriculture Development Bank of Punjab", "Agriculture Development Bank of Pakistan.", "None of these"], "correct": 2 },
  { "question": "Q.61: The Range of Ghari-1 is _____?", "options": ["1200-1400km", "1200-1300km", "1200-1500km", "None of these"], "correct": 2 },
  { "question": "Q.62: The Headquarters of NATO located in the city _____?", "options": ["Brussels", "New York", "London", "None of these"], "correct": 0 },
  { "question": "Q.63: GDP stands for _____?", "options": ["Gross Domestic Product", "Global Demand for Production", "Global Petroleum Corporation", "None of these"], "correct": 0 },
  { "question": "Q.64: Which is the hottest desert of the world?", "options": ["Sahara", "Thar", "Cholistan", "None of these"], "correct": 0 },
  { "question": "Q.65: Which is the highest mountain peak in Japan?", "options": ["Mount Tate", "Mount Fuji", "Mount Osaka", "None of these"], "correct": 1 },
  { "question": "Q.66: Total length of Victoria lake", "options": ["137 km", "237 km", "337 km", "None of these"], "correct": 2 },
  { "question": "Q.67: TCP stands for _________?", "options": ["Transmission control Prototype", "Transport capture protocol", "Transmission control Protocol", "None of these"], "correct": 2 },
  { "question": "Q.68: Christian population percentage in World Population", "options": ["31.11%", "37.11%", "39.11%", "None of these"], "correct": 0 },
  { "question": "Q.69: The tenure of US president is:", "options": ["4 years", "5 years", "6 years", "7 years"], "correct": 0 },
  { "question": "Q.70: Most of the coronavirus cases reported in which country_?", "options": ["USA", "China", "India", "None of these"], "correct": 0 }
]},

//FIA ASI free mock test 02 with 50 questions
  { id: 9, code: 'FIA', title: 'FIA ASI free mock test 02', category: 'fia', image: '🕵️‍♂️', questions: [
  { "question": "Q.1: Who bowled super over for England in Cricket World Cup 2019?", "options": ["Chris Noakes", "Jofra Archar", "Ben Stokes", "None of these"], "correct": 1 },
  { "question": "Q.2: The largest lake of salt water in the world is?", "options": ["Caspian sea", "Kariba", "Chad", "None of these"], "correct": 0 },
  { "question": "Q.3: How many Countries are there Landlocked in the World?", "options": ["45", "44", "43", "None of these"], "correct": 1 },
  { "question": "Q.4: Abacus was the first___?", "options": ["electronic calculator", "Electronic computer", "mechanical calculator", "None of these"], "correct": 2 },
  { "question": "Q.5: Who invented the World Wide Web (WWW) with Robert Cailliau?", "options": ["Fred Zuckerberg", "Tim Burner Lee", "Tom Burne", "None of these"], "correct": 1 },
  { "question": "Q.6: First truly electronic computer", "options": ["ENIAC", "IBM", "Apple", "None of these"], "correct": 0 },
  { "question": "Q.7: What was the first electronic computer called?", "options": ["ENIAC", "MAC", "IBM", "None of these"], "correct": 0 },
  { "question": "Q.8: What is the function of control + N in MS word", "options": ["Open a new document", "Open a new slide", "Open a new presentation", "None of these"], "correct": 0 },
  { "question": "Q.9: Internet Explorer is used for :", "options": ["Listning Music", "Viewing Movie", "Viewing Web Pages", "None of these"], "correct": 2 },
  { "question": "Q.10: Who is the founder of twitter", "options": ["Biz Stone and Evan Williams", "Noah Glass", "Jack Dorsey", "All of the above"], "correct": 3 },
  { "question": "Q.11: Which of the following is a top-level domain?", "options": [".com", "Http", "HTML", "None of these"], "correct": 0 },
  { "question": "Q.12: How many bones in each hand?", "options": ["25", "26", "27", "28"], "correct": 2 },
  { "question": "Q.13: What is the inner most part of an eye -----?", "options": ["Retina", "Pupil", "Irish", "None of these"], "correct": 0 },
  { "question": "Q.14: Synonym of Misanthrope", "options": ["idealist", "positivist", "pessimist", "None of these"], "correct": 2 },
  { "question": "Q.15: The Synonym of Solace is?", "options": ["Comfort", "Frustration", "Anger", "None of these"], "correct": 0 },
  { "question": "Q.16: What is the GDP growth of Pakistan in 2021 ?", "options": ["3.9", "4.9", "5.0", "6"], "correct": 0 },
  { "question": "Q.17: On 19 March 2008, the National Assembly elected its first woman speaker _____?", "options": ["Fahameeda Mirza", "Shireen Mazari", "Hina Rubbani", "None of these"], "correct": 0 },
  { "question": "Q.18: Who collected the Quran in the form of book?", "options": ["Hazrat Zaid bin Sabit (R.A)", "Hazrat Abdullah Bin Abbas (R.A)", "Hazrat Umar (R.A)", "None of these"], "correct": 0 },
  { "question": "Q.19: Where is the grave of Hazrat Dawood (علیہ)?", "options": ["Israel", "Jordan", "Lebonan", "None of these"], "correct": 0 },
  { "question": "Q.20: What is the literal meaning of Salawt?", "options": ["Communication", "Contract", "Pray", "All of these"], "correct": 2 },
  { "question": "Q.21: The first treaty made by Prophet Muhammad (PBUH) with a non-Muslim community was with the people of?", "options": ["Abyssinia", "Madina", "Makkah", "None of these"], "correct": 1 },
  { "question": "Q.22: Who suggested that the youngsters of all tribe should have killed the Holy Prophet (S.A.W) by attacking at once?", "options": ["Abu Alaswad", "Abu Jahel", "Abu Safyan", "None of these"], "correct": 1 },
  { "question": "Q.23: What is Istelam?", "options": ["Kissing Hajre Aswad", "Salam to Kaaba", "Salam to Hajre Aswad", "None of these"], "correct": 0 },
  { "question": "Q.24: Gazwa e Badar was occurred in which Hijri year?", "options": ["2 Hijri", "3 Hijri", "4 Hijri", "None of these"], "correct": 0 },
  { "question": "Q.25: Rohtas Fort near Jehlum built by _______?", "options": ["Shah Jahan", "Sher Shah Suri", "Akbar", "None of these"], "correct": 1 },
  { "question": "Q.26: Tarbela Dam is located in ____ district of Khyber Pakhtuankhwah.", "options": ["Peshawar", "Abbotabad", "Haripur", "None of these"], "correct": 2 },
  { "question": "Q.27: Who Mughal emperor built Shalimar garden?", "options": ["Aurangzaib", "Shah Jehan", "Akbar", "None of these"], "correct": 1 },
  { "question": "Q.28: Which of the following is a Rabi Crop?", "options": ["Mustard", "Maize", "Cotton", "None of these"], "correct": 0 },
  { "question": "Q.29: The oldest mountains of the world are present in India and youngest mountain of the world are present in?", "options": ["Pakistan", "China", "India", "None of these"], "correct": 0 },
  { "question": "Q.30: In which agreement the ceasefire line in Kashmir was named Line of Control?", "options": ["2003 agreement", "Ceasefire agreement", "Simla Agreement", "None of these"], "correct": 2 },
  { "question": "Q.31: The star in the Pakistani flag represents ____?", "options": ["Promoting education", "Light and knowledge", "Both", "None of these"], "correct": 1 },
  { "question": "Q.32: Silk road connects which two countries?", "options": ["Pakistan and China", "Pakistan and Iran", "china and India", "None of these"], "correct": 0 },
  { "question": "Q.33: Changa Manga Forest covers area about:", "options": ["44.6 sq km (08,000 acres)", "46.6 sq km (10,000 acres)", "46.9 sq km (10,000 acres)", "48.6 sq km (12,000 acres)"], "correct": 3 },
  { "question": "Q.34: Who wrote the book \"Making of Pakistan?", "options": ["K K Aziz", "Ahmad fraz", "Naseem hizaji", "None of these"], "correct": 0 },
  { "question": "Q.35: The First satellite in the World was?", "options": ["Sputnik 1", "Sputnik 2", "Sputnik 3", "None of these"], "correct": 0 },
  { "question": "Q.36: When US President Jimmy Carter administration cut off the military and economic aid to Pakistan?", "options": ["Nov 1977", "Sep 1976", "Nov 1974", "None of these"], "correct": 3 },
  { "question": "Q.37: Which of the following women scientist twice won the Nobel Prize:", "options": ["Barbara Maclintock", "Marie Curie", "Dorothy Hodgkis", "None of these"], "correct": 1 },
  { "question": "Q.38: CBR stands for __________?", "options": ["Central Bank of The Russia", "California bearing Ratio", "Control Board of Revenue", "Central Board of Revenue"], "correct": 3 },
  { "question": "Q.39: Population of Christians in the world", "options": ["41.11%", "21.11%", "31.11%", "None of these"], "correct": 2 },
  { "question": "Q.40: When Persia become Iran?", "options": ["1935", "1936", "1937", "1938"], "correct": 0 },
  { "question": "Q.41: Bhasha Dam has a storage capacity of ____ MAF.", "options": ["3.2 MAF", "8.1 MAF", "6.2 MAF", "None of these"], "correct": 2 },
  { "question": "Q.42: How can you access the font size tool on formatting toolbar", "options": ["Ctrl+ Shift +P", "Ctrl+ Shift +S", "Ctrl+ S", "None of these"], "correct": 0 },
  { "question": "Q.43: CSS stands for _________", "options": ["cascading style sheet", "cascade style sheet", "cascading stylish sheet", "None of these"], "correct": 0 },
  { "question": "Q.44: Which one is used to divide Email into two parts?", "options": ["@", "#", "$", ":"], "correct": 0 },
  { "question": "Q.45: Ms office provides help in many ways, which of these is one of them ?", "options": ["Help menu", "Office assistant", "What is this?", "All of them"], "correct": 3 },
  { "question": "Q.46: قلعہ اٹک کس مغل بادشاہ نے تعمیر کروایا تھا؟", "options": ["اکبر", "بابر", "شاہ جہاں", "جہانگیر"], "correct": 0 },
  { "question": "Q.47: The word opposite of: embezzle", "options": ["misappropiate", "compensate", "Clear", "None of these"], "correct": 1 },
  { "question": "Q.48: What is the meaning of the word \"Quran\"?", "options": ["Frequently Recited", "Rarely Recited", "Recited Once", "None of these"], "correct": 0 },
  { "question": "Q.49: Name of the camel on which Prophet travel", "options": ["Shabba", "Khums", "Qaswa", "None of these"], "correct": 2 },
  { "question": "Q.50: Al-Muwatta is written by?", "options": ["Imam Malik", "Imam Hambal", "Imam Abu Hanifa", "None of these"], "correct": 0 },
  { "question": "Q.51: Which Muslim scientist is considered to be the founder of chemistry___?", "options": ["Yaqoob Alkandi", "Al Beroni", "Jabir bin Hayan", "None of these"], "correct": 2 },
  { "question": "Q.52: What is opposite to Toheed", "options": ["Shirk", "Kalma", "Both", "None of these"], "correct": 0 },
  { "question": "Q.53: Which outcome best reflects the Quran as a source of moral clarity rather than ritual identity?", "options": ["Ethical decisions guided by Quranic values", "Increased recitation with unchangedbehavior", "Memorization for recognition", "None of these"], "correct": 0 },
  { "question": "Q.54: Islam is based on?", "options": ["Political laws", "Customs and traditions", "Quran and Sunnah", "None of these"], "correct": 2 },
  { "question": "Q.55: How many basic pillars of Islam are there?", "options": ["4", "5", "6", "7"], "correct": 1 },
  { "question": "Q.56: Who was the first Prime Minister of Azad Kashmir?", "options": ["Moulana Muhammad Yousaf", "Sardar Sikandar Hayat Khan", "Khan Abdul Hameed Khan", "None of these"], "correct": 2 },
  { "question": "Q.57: According to the 1973 constitution, what is the term of the office of President?", "options": ["3 years", "4 years", "5 years", "6 years"], "correct": 2 },
  { "question": "Q.58: In which desert is the Derawar fort is located?", "options": ["Cholistan", "Thar", "Thal", "None of these"], "correct": 0 },
  { "question": "Q.59: Which is the highest peak of salt range?", "options": ["K-2", "Nanga parbat", "Soan Sakaser", "None of these"], "correct": 2 },
  { "question": "Q.50: Hub Dam is located on ____ River.", "options": ["Indus", "Hub", "Ravi", "None of these"], "correct": 1 },
  { "question": "Q.51: On which date the AntiTerrorism (Amendment) Bill, 2020 was passed by the National Assembly?", "options": ["July 29, 2020", "July 28, 2020", "July 27, 2020", "None of these"], "correct": 0 },
  { "question": "Q.52: “Colorado river” is located in ______ ?", "options": ["USA", "Canada", "UK", "None of these"], "correct": 0 },
  { "question": "Q.53: Who was the First Secretary General of UNO?", "options": ["Trygve Lie", "Dag Hammarskjold", "Kurt Walheim", "None of these"], "correct": 0 },
  { "question": "Q.54: Barack Obama was _____ President of USA?", "options": ["43rd", "44th", "45th", "46th"], "correct": 1 },
  { "question": "Q.55: When did Barack Obama win the Nobel Peace Prize?", "options": ["2009", "2008", "2007", "2006"], "correct": 0 }
]},
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
