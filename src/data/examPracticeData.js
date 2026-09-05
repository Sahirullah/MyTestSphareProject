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
  { "question": "Q.55: Murre is located in which mountain range____?", "options": ["Pir Pnjal", "Karakuram", "Himalya", "None of these"], "correct": 0 }
]},

//FIA ASI free mock test 02 with 50 questions
  { id: 9, code: 'FIA', title: 'FIA ASI free mock test 02', category: 'fia', image: '🕵️‍♂️', questions:[
  { "question": "Q.1: Ctrl + Y is used for ____?", "options": ["Redo", "Undo", "Paste", "Copy"], "correct": 0 },
  { "question": "Q.2: Facebook was launched in the year ?", "options": ["2002", "2003", "2004", "2005"], "correct": 2 },
  { "question": "Q.3: IBM stands for what?", "options": ["International Business Model", "Information Business Machines", "Integrated Business Machine", "International Business Machine"], "correct": 3 },
  { "question": "Q.4: F1 to F12 keys are called ____ ?", "options": ["Function keys", "Numeric Keys", "Fun Keys", "None of these"], "correct": 0 },
  { "question": "Q.5: Send an E-mail.", "options": ["An E-mail should be sent.", "An E-mail should be send.", "An E-mail be sent.", "None of these"], "correct": 0 },
  { "question": "Q.6: Synonym of Accolade", "options": ["Approval", "Award", "Both A and B", "None of these"], "correct": 2 },
  { "question": "Q.7: The Synonym of Analyse is?", "options": ["Examine", "Ignore", "Destroy", "None of these"], "correct": 0 },
  { "question": "Q.8: The Synonym of Solace is?", "options": ["Comfort", "Anger", "Frustration", "None of these"], "correct": 0 },
  { "question": "Q.9: Which surah of the Holy Quran has Bismillah twice?", "options": ["Al Naml", "Al Ra’d", "Al Nahl", "None of these"], "correct": 0 },
  { "question": "Q.10: How many Heads/Masarifs of Zakat?", "options": ["6", "8", "10", "12"], "correct": 1 },
  { "question": "Q.11: 5th pillar of Islam is?", "options": ["Namaz", "Roza", "Hajj", "Zakat"], "correct": 2 },
  { "question": "Q.12: Gazwa e Uhad occurred in which Hijri year?", "options": ["2 Hijri", "3 Hijri", "4 Hijri", "None of these"], "correct": 1 },
  { "question": "Q.13: Who was the first person in Pakistan who received Nishan-iHaider?", "options": ["Captain Sarwar Shaheed", "Major Aziz Bhatti Shaheed", "Major Muhammad Akram Shaheed", "None of these"], "correct": 0 },
  { "question": "Q.14: Which is the Smallest province of Pakistan by area?", "options": ["Sindh", "KPK", "Punjab", "None of these"], "correct": 1 },
  { "question": "Q.15: Lyallpur is the old name of _____?", "options": ["Faisalabad", "Lahore", "Karachi", "None of these"], "correct": 0 },
  { "question": "Q.16: First International Flight of PIA was taken on ____?", "options": ["1 February 1955", "25 May 1953", "7 June 1956", "None of these"], "correct": 0 },
  { "question": "Q.17: Gobi desert is located in?", "options": ["Australia and Europe", "Saudi Arabia and Yamen", "Iran and Iraq", "China and Mangolia"], "correct": 3 },
  { "question": "Q.18: PB stand for", "options": ["Petabyte", "Plumber", "Both A and B", "None of these"], "correct": 0 },
  { "question": "Q.19: \"Clash of Civilization\" was written by?", "options": ["Sir Syed Ahmed Khan", "Samuel P. Huntington", "Arnold Toynbee", "None of these"], "correct": 1 },
  { "question": "Q.20: GDP stands for _____?", "options": ["Gross Domestic Product", "Global Demand for Production", "Global Petroleum Corporation", "None of these"], "correct": 0 },
  { "question": "Q.21: The _________displays the name of every computer user on the computer", "options": ["wish list screen", "welcome screen", "command screen", "None of these"], "correct": 1 },
  { "question": "Q.22: What underline Tag used in HTML ?", "options": ["<u>", "<underline>", "<ins>", "None of these"], "correct": 3 },
  { "question": "Q.23: Which country has the worst internet speed?", "options": ["USA", "UK", "Yemen", "None of these"], "correct": 2 },
  { "question": "Q.24: How many Muscles are there in the human body?", "options": ["640", "639", "638", "637"], "correct": 1 },
  { "question": "Q.25: The boundary between the mantle and the core lies at a depth of approximately ________ .", "options": ["400 kilometers", "300 kilometers", "1000 kilometres", "3000 kilometers"], "correct": 3 },
  { "question": "Q.26: Which planet is known for its beautiful rings?", "options": ["Jupiter", "Saturn", "Uranus", "None of these"], "correct": 1 },
  { "question": "Q.27: Pedology is the study of ?", "options": ["Soils", "Languages", "Birds", "None of these"], "correct": 0 },
  { "question": "Q.28: Which gas is most commonly used in Neon Signs?", "options": ["Argon", "Neon", "Xenon", "None of these"], "correct": 1 },
  { "question": "Q.29: Drought antonym", "options": ["Surplus", "Thirst", "Dryness", "None of these"], "correct": 0 },
  { "question": "Q.30: The major part of the Holy Quran is revealed at------------- time?", "options": ["Day", "Night", "Both", "None of these"], "correct": 1 },
  { "question": "Q.31: Namaz-e-Traveh is ?", "options": ["Sunnat", "Wajib", "Farz", "None of these"], "correct": 0 },
  { "question": "Q.32: Doors of Hell are ----------------?", "options": ["4", "5", "6", "7"], "correct": 3 },
  { "question": "Q.33: How many surahs are with the name of Prophets?", "options": ["5", "6", "7", "8"], "correct": 1 },
  { "question": "Q.34: What is the length of border between Pakistan and China?", "options": ["599 km", "900 km", "800 km", "None of these"], "correct": 0 },
  { "question": "Q.35: Which Muslim leader had died at the time of second round table conference ?", "options": ["Muhammad Ali Johar", "Allam Iqbal", "Rehmat Ali", "None of these"], "correct": 0 },
  { "question": "Q.36: The National Anthem of Pakistan for the first time was played on?", "options": ["13th August 1954", "14th August 1954", "15th August 1954", "None of these"], "correct": 0 },
  { "question": "Q.37: Pakistan Aeronautical Complex at Kamra is located in ?", "options": ["Attock", "Sahiwal", "Karachi", "None of these"], "correct": 0 },
  { "question": "Q.38: Which country is the largest trading partner of Pakistan ?", "options": ["USA", "China", "Japan", "None of these"], "correct": 1 },
  { "question": "Q.39: What is the capital of Norway?", "options": ["London", "Oslo", "Madrid", "None of these"], "correct": 1 },
  { "question": "Q.40: Dasht-e-Lut desert is located in?", "options": ["Iraq", "Iran", "India", "None of these"], "correct": 1 },
  { "question": "Q.41: Marco Polo was a famous _____?", "options": ["Sportsman", "Scientist", "Traveler", "None of these"], "correct": 2 },
  { "question": "Q.42: Pakistan is the winner of Hockey World Cup in ________ ?", "options": ["1971", "1978", "1982", "All of the above"], "correct": 3 },
  { "question": "Q.43: How many times has Brazil won the World Cup Football Championship?", "options": ["3", "4", "5", "6"], "correct": 2 },
  { "question": "Q.44: Facebook was launched in the year ?", "options": ["2002", "2003", "2004", "2005"], "correct": 2 },
  { "question": "Q.45: Ctrl + Z used for _____?", "options": ["Undo", "Redo", "Paste", "None of these"], "correct": 0 },
  { "question": "Q.46: HTML is an abbreviation for _____?", "options": ["Hypertext Markup Link", "Hi Tech Meaningful Language", "Hypertext Markup Language", "None of these"], "correct": 2 },
  { "question": "Q.47: How columns are numbered in MS Excel?", "options": ["Alphabetic", "Numeric", "Roman", "None of these"], "correct": 0 },
  { "question": "Q.48: The four numbers in an IP address is called?", "options": ["Bytes", "Octets", "Octal", "None of these"], "correct": 1 },
  { "question": "Q.49: What is the first slide called in Microsoft PowerPoint?", "options": ["Title and Content slide", "Title slide", "Blank slide", "None of these"], "correct": 1 },
  { "question": "Q.50: 1 bit is equal to", "options": ["0.125", "0.150", "0.12", "None of these"], "correct": 0 },
  { "question": "Q.51: A computer’s memory is measured in bytes, the largest unit of memory is:", "options": ["Gigabyte", "megabyte", "Kilobyte", "None of these"], "correct": 0 },
  { "question": "Q.52: CD ROM compact disc__________", "options": ["read only memory", "read one memory", "read only money", "None of these"], "correct": 0 },
  { "question": "Q.53: The longest/largest cell in human body is?", "options": ["Nerve cell", "Muscle cell", "Liver cell", "None of these"], "correct": 0 },
  { "question": "Q.54: The most electronegative element of the periodic table is ______?", "options": ["Fluorine", "Nitrogen", "Chlorine", "None of these"], "correct": 0 },
  { "question": "Q.55: Growth hormone secreted by pituitary gland regulates the function of", "options": ["Nerve cells", "Most of Somatic Cells", "Both", "None of these"], "correct": 1 },
  { "question": "Q.56: the disease which spread in air ______?", "options": ["Measles", "TB", "Both A and B", "None of these"], "correct": 2 },
  { "question": "Q.57: Synonyms of indubitably?", "options": ["apparent", "controversial", "Doubtful", "None of these"], "correct": 3 },
  { "question": "Q.58: What is the number whose square and cube are the same?", "options": ["1", "2", "3", "4"], "correct": 0 },
  { "question": "Q.59: What is the Ratio of Zakat in grams on Gold?", "options": ["74.23 grams of gold", "92.62 grams of gold", "87.48 grams of gold", "None of these"], "correct": 2 },
  { "question": "Q.60: 5, 8, 14, 26, ?", "options": ["30", "48", "50", "None of these"], "correct": 2 }
]},
//FIA ASI free mock test 03 with 50 questions
  { id: 10, code: 'FIA', title: 'FIA ASI free mock test 03', category: 'fia', image: '🕵️‍♂️', questions:  [
  { "question": "Q.1: In which city first annual meeting of All India Muslim League was held?", "options": ["Karachi", "Lahore", "Islamabad", "None of these"], "correct": 0 },
  { "question": "Q.2: First time motorway was started in Pakistan in which year?", "options": ["1997", "1998", "1999", "1996"], "correct": 0 },
  { "question": "Q.3: Motor Way from Peshawar to Islamabad is:", "options": ["M1", "M2", "M3", "M4"], "correct": 0 },
  { "question": "Q.4: Who declared 4th Marshall Law in Pakistan_?", "options": ["Sikandar Ali Mirza", "Parvez Musharraf", "Ayoub Khan", "None of these"], "correct": 3 },
  { "question": "Q.5: What is the full form of ADBP", "options": ["Agriculture Development Book of Pakistan.", "Agriculture Development Bank of Punjab", "Agriculture Development Bank of Pakistan.", "None of these"], "correct": 2 },
  { "question": "Q.6: The Range of Ghari-1 is _____?", "options": ["1200-1400km", "1200-1300km", "1200-1500km", "None of these"], "correct": 2 },
  { "question": "Q.7: The Headquarters of NATO located in the city _____?", "options": ["Brussels", "New York", "London", "None of these"], "correct": 0 },
  { "question": "Q.8: GDP stands for _____?", "options": ["Gross Domestic Product", "Global Demand for Production", "Global Petroleum Corporation", "None of these"], "correct": 0 },
  { "question": "Q.9: Which is the hottest desert of the world?", "options": ["Sahara", "Thar", "Cholistan", "None of these"], "correct": 0 },
  { "question": "Q.10: Which is the highest mountain peak in Japan?", "options": ["Mount Tate", "Mount Fuji", "Mount Osaka", "None of these"], "correct": 1 },
  { "question": "Q.11: Total length of Victoria lake", "options": ["137 km", "237 km", "337 km", "None of these"], "correct": 2 },
  { "question": "Q.12: TCP stands for _________?", "options": ["Transmission control Prototype", "Transport capture protocol", "Transmission control Protocol", "None of these"], "correct": 2 },
  { "question": "Q.13: Christian population percentage in World Population", "options": ["31.11%", "37.11%", "39.11%", "None of these"], "correct": 0 },
  { "question": "Q.14: The tenure of US president is:", "options": ["4 years", "5 years", "6 years", "7 years"], "correct": 0 },
  { "question": "Q.15: Most of the coronavirus cases reported in which country_?", "options": ["USA", "China", "India", "None of these"], "correct": 0 },
  { "question": "Q.16: Which number in the series is incorrect? 15, 16, 20, 30, 45, 70", "options": ["30", "20", "70", "None of these"], "correct": 0 },
  { "question": "Q.17: What is the next term in the sequence: 2, 1, 3, 4, 7, 11?", "options": ["16", "18", "20", "None of these"], "correct": 1 },
  { "question": "Q.18: In which language Shah Wali Ullah translated the Holy Quran?", "options": ["Persian", "English", "Sindhi", "None of these"], "correct": 0 },
  { "question": "Q.19: The father name of the last Holy Prophet SAW is ________?", "options": ["Hashim", "Hazrat Abdullah", "Hazrat Abdul Mutalib", "None of these"], "correct": 1 },
  { "question": "Q.20: Name of the Prophet who is known by the title of Israel?", "options": ["Hazrat Yousuf (AS)", "Hazrat Musa (AS)", "Hazrat Yaqoob (AS)", "None of these"], "correct": 2 },
  { "question": "Q.21: How many prayers have no Azan ?", "options": ["2", "3", "4", "5"], "correct": 0 },
  { "question": "Q.22: How many Muhajireen were there at the time of Mawakhat?", "options": ["45", "46", "47", "48"], "correct": 0 },
  { "question": "Q.23: The Objective Resolution was passed on ______?", "options": ["12 March 1949", "12 March 1948", "12 March 1947", "None of these"], "correct": 0 },
  { "question": "Q.24: When did Pakistan join SEATO?", "options": ["1954", "1955", "1956", "1957"], "correct": 0 },
  { "question": "Q.25: Who was the first president of All India Muslim League?", "options": ["Nawab Saleem Ullah Khan", "Nawab Waqar-ul-Mulk", "Sir Agha Khan", "None of these"], "correct": 2 },
  { "question": "Q.26: Who becomes Acting President in the absence of President of Pakistan?", "options": ["Speaker NA", "Chairman Senate", "Chairman NAB", "None of these"], "correct": 1 },
  { "question": "Q.27: Nehru report was prepared in the chairmanship of", "options": ["Jawahar lal Nehru", "Gandhi", "Motilal Nehru", "None of these"], "correct": 2 },
  { "question": "Q.28: When was All India Muslim League founded?", "options": ["30 August 1947", "30 November 1906", "30 December 1906", "None of these"], "correct": 2 },
  { "question": "Q.29: WASA stands for ________?", "options": ["Water and Sanitation Agency", "Water Supply Agency", "Water and Social Agency", "None of these"], "correct": 0 },
  { "question": "Q.30: NADRA stands for ______?", "options": ["Nation Database and Registrar Authority", "National Database and Registrar Authority", "National Database and Registration Authority", "None of these"], "correct": 2 },
  { "question": "Q.31: The Largest export of Pakistan is _____?", "options": ["Taxtile", "Oil", "Gold", "None of these"], "correct": 0 },
  { "question": "Q.32: Kalabagh is famous for the mineral of ______?", "options": ["Iron", "Copper", "Gold", "None of these"], "correct": 0 },
  { "question": "Q.33: The Zakat and Ushr Ordinance was promulgated on _____?", "options": ["21st August 1979", "20th June 1980", "29th June 1981", "None of these"], "correct": 1 },
  { "question": "Q.34: In Pakistan, WAPDA stands for _______________?", "options": ["Wild And Plant Development Authority", "Water And Power Development Authority", "Water And Plant Development Authority", "None of these"], "correct": 1 },
  { "question": "Q.35: Sir Creek is located between ______?", "options": ["Pakistan & Iran", "Pakistan & Afghanistan", "Pakistan & India", "None of these"], "correct": 2 },
  { "question": "Q.36: Which of following places is the rainiest of Pakistan?", "options": ["Murre", "Quetta", "Karachi", "None of these"], "correct": 0 },
  { "question": "Q.37: Highest mountain of Hamalaya range in Pakistan?", "options": ["Nanga Parbat", "K3", "K2", "None of these"], "correct": 0 },
  { "question": "Q.38: Thar desert is also known as", "options": ["Great Indian Desert", "Cholistan desert", "Great Sindh Desert", "None of these"], "correct": 0 },
  { "question": "Q.39: What is the new name of East Pakistan ?", "options": ["Bangladesh", "India", "China", "None of these"], "correct": 0 },
  { "question": "Q.40: Sir Creek is important to Pakistan because:", "options": ["It is environmentally important to prevent coastal wetlands from degradation", "It is territorial part of Pakistan", "It separates Rajasthan from Sindh", "None of these"], "correct": 1 },
  { "question": "Q.41: In which month does the UN General Assembly usually meet every year?", "options": ["October", "September", "November", "None of these"], "correct": 1 },
  { "question": "Q.42: How many countries are the members of SAARC?", "options": ["6", "7", "8", "9"], "correct": 2 },
  { "question": "Q.43: GDP stands for _____?", "options": ["Gross Domestic Product", "Global Demand for Production", "Global Petroleum Corporation", "None of these"], "correct": 0 },
  { "question": "Q.44: Which is the largest crude oil producing country?", "options": ["USA", "UK", "UAE", "None of these"], "correct": 0 },
  { "question": "Q.45: Ariana is an airline of which country?", "options": ["Afghanistan", "Iran", "Iraq", "None of these"], "correct": 0 },
  { "question": "Q.46: TCP stands for _________?", "options": ["Transmission control Prototype", "Transport capture protocol", "Transmission control Protocol", "None of these"], "correct": 2 },
  { "question": "Q.47: Who was the longest serving president of Egypt?", "options": ["Hosni Mubarak", "Abdel Fattah el-Sisi", "Mostafa Madbouly", "None of these"], "correct": 0 },
  { "question": "Q.48: Christian population percentage in World Population", "options": ["31.11%", "37.11%", "39.11%", "None of these"], "correct": 0 },
  { "question": "Q.49: Which country complete covid-19 vaccine first?", "options": ["UK", "USA", "UAE", "None of these"], "correct": 3 },
  { "question": "Q.50: Han dynasty was founded after the collapse of Chin dynasty who was the founder of the Han dynasty", "options": ["Liu Bon", "Liu Han", "Liu Bang", "None of these"], "correct": 2 }
]},

//FIA ASSIStant free mock tests
  { id: 11, code: 'FIA', title: 'FIA Assistant free mock test 01', category: 'fia', image: '🕵️‍♂️', questions:[
  { "question": "Q.1: Which city hosted the 16th Asian Game 2010?", "options": ["Guangzhou in China", "Islamabad", "Istanbul", "None of these"], "correct": 0 },
  { "question": "Q.2: The Largest Continent (by Area and Population) of the World is _______?", "options": ["Asia", "Africa", "Australia", "None of these"], "correct": 0 },
  { "question": "Q.3: Seychellels is located in", "options": ["Indian ocean", "Pacific ocean", "Antarctic ocean", "None of these"], "correct": 0 },
  { "question": "Q.4: ALU stands for what?", "options": ["Arithmetic and legal unit", "Arithmetic Logic Unit", "Alternate Local Unit", "None of these"], "correct": 1 },
  { "question": "Q.5: AI stands for ______?", "options": ["Artificial Intelligence", "Artificial Information", "Actual Information", "None of these"], "correct": 0 },
  { "question": "Q.6: DOS stands for ______?", "options": ["Disk operating system", "Disk operation system", "Digital operating system", "None of these"], "correct": 0 },
  { "question": "Q.7: Which is the smallest unit of memory/data in computer?", "options": ["Mega bite", "Byte", "Bit", "None of these"], "correct": 2 },
  { "question": "Q.8: HTML is used for creating _____?", "options": ["Websites", "Webpages", "Web Server", "None of these"], "correct": 1 },
  { "question": "Q.9: Which of following is HTML tag", "options": ["< and >", "! and ?", "{ and }", "None of these"], "correct": 0 },
  { "question": "Q.10: Where is computer's BIOS stored?", "options": ["EEPROM", "SRAM", "Flash memory chip", "None of these"], "correct": 0 },
  { "question": "Q.11: Floppy disk drive, hard disk drive, optical disk drive, and teleprinter are called?", "options": ["Input device", "Output device", "Both A and B", "None of these"], "correct": 2 },
  { "question": "Q.12: Tik Tok is company of which country", "options": ["China", "Russia", "America", "None of these"], "correct": 0 },
  { "question": "Q.13: Snapchat is owned by", "options": ["Sanp lnc", "Facebook", "Yotube", "None of these"], "correct": 0 },
  { "question": "Q.14: A program written in a high level language is referred to as :", "options": ["Source code", "Assembly program", "Machine program", "None of these"], "correct": 0 },
  { "question": "Q.15: EDVAC Stand for", "options": ["electronic discrete valuable automaticcomputer", "electronic digital variable automaticcomputer", "electronic discrete variable automatic computer", "None of these"], "correct": 2 },
  { "question": "Q.16: Which one of the following is owned by Google", "options": ["Facebook", "Youtube", "Dailymotion", "None of these"], "correct": 1 },
  { "question": "Q.17: which printer is not a type of impact printer", "options": ["Laser printer", "Electronc printer", "Automatic printer", "None of these"], "correct": 0 },
  { "question": "Q.18: What enables a computer to work smoothly with printers", "options": ["Drivers", "Rom", "Ram", "None of these"], "correct": 0 },
  { "question": "Q.19: Earthquake waves ....... in velocity upon entering in the mantle.", "options": ["Remained unchanged", "Decreases", "Increase", "None of these"], "correct": 2 },
  { "question": "Q.20: The season changes because of the ____________?", "options": ["Planet Mars is attracting the sun", "Earth is revolving around the sun", "Earth is revolving round its axis", "None of these"], "correct": 1 },
  { "question": "Q.21: Lungs located in which cavity", "options": ["Thorat cavity", "Bacual cavity", "Both A and B", "None of these"], "correct": 3 },
  { "question": "Q.22: If volume of a sphere is v=4/3r3 the here the value of radius (r) will be", "options": ["r = ³√[3 * π / (4 * V)]", "r = ³√[4 * V / (3* π)]", "r = ³√[3 * V / (4 * π)]", "None of these"], "correct": 2 },
  { "question": "Q.23: The ab/c/cd/a is equal to", "options": ["ca/db", "a2b/c2d", "ab/dc", "None of these"], "correct": 1 },
  { "question": "Q.24: if the ratio of two numbers is 5:7 and if 5 subtracted from the sum of these two numbers, 79 obtained, then the numbers are?", "options": ["30:70", "40:80", "40:49", "35:49"], "correct": 3 },
  { "question": "Q.25: If sales tax is 3%, how much tax would you pay for an item that costs $2000", "options": ["$100", "$60", "$70", "None of these"], "correct": 1 },
  { "question": "Q.26: What is the LCM of 70 and 80?", "options": ["560", "650", "367", "876"], "correct": 0 },
  { "question": "Q.27: First quarter of 2021, inflation rate in Pakistan was", "options": ["5.9%", "4.4%", "8.85%", "None of these"], "correct": 3 },
  { "question": "Q.28: Who was considered as Father/Expert of Modern Optics?", "options": ["Ḥasan Ibn al-Haytham", "Jafar Ibn Hayyan", "Abū Mūsā Jābir ibn Ḥayyān", "None of these"], "correct": 0 },
  { "question": "Q.29: How many years did Umar bin Abdul Aziz ruled in Umayyad dynasty?", "options": ["20 months", "30 months", "40 months", "None of these"], "correct": 1 },
  { "question": "Q.30: In Islam every one is ____", "options": ["Not Cover", "Equal", "Not Equal", "None of these"], "correct": 1 },
  { "question": "Q.31: Gazwa e Khyber was occurred in which Hijri Year ?", "options": ["5 Hijri", "6 Hijri", "7 Hijri", "None of these"], "correct": 2 },
  { "question": "Q.32: The First Constituent Assembly of Pakistan was dissolved By Governor General Malik Ghulam Muhammad on ______?", "options": ["October 24, 1954", "October 24, 1956", "October 24, 1955", "None of these"], "correct": 0 },
  { "question": "Q.33: Who was the First woman Governor of State Bank of Pakistan?", "options": ["Dr. Shamshad Akhter", "Dr. Shama Khalid", "Dr. Farzana Raja", "None of these"], "correct": 0 },
  { "question": "Q.34: Under which amendment military courts were formed in Pakistan?", "options": ["21", "22", "23", "24"], "correct": 0 },
  { "question": "Q.35: Rani Kot in Jamshoro district is most easily approachable from:", "options": ["Sehwan", "Sann", "Thano Bula Khan", "None of these"], "correct": 1 },
  { "question": "Q.36: Indus River falls into Arabian Sea near____", "options": ["Karachi", "Chakwal", "Badin", "None of these"], "correct": 0 },
  { "question": "Q.37: Skardu is district of۔", "options": ["KPK", "Gilgit−Baltistan", "Punjab", "None of these"], "correct": 1 },
  { "question": "Q.38: What is the percentage of Balochistan area in Pakistan?", "options": ["32%", "46%", "52%", "42%"], "correct": 3 },
  { "question": "Q.39: MNA stands for _______?", "options": ["Medical Nurse Association", "Multi-National Architecture", "Media Networking Area", "Member of National Assembly"], "correct": 3 },
  { "question": "Q.40: Islamic banking started in Pakistan", "options": ["1980", "1970", "1960", "1950"], "correct": 0 },
  { "question": "Q.41: Sher e Bangal was the title of which personality", "options": ["Mohsin ul mulk", "Shakib ul Hassan", "Fazal ul Haq", "None of these"], "correct": 2 },
  { "question": "Q.42: 1956 constitution is promulgated in", "options": ["5 April 1956", "23 March 1956", "3 july 1956", "None of these"], "correct": 1 },
  { "question": "Q.43: Kharif crop sown in which month", "options": ["April", "October", "November", "None of these"], "correct": 0 },
  { "question": "Q.44: LDA stand for______", "options": ["London Development Agency", "Lahore Development Authority", "Both A and B", "None of these"], "correct": 2 },
  { "question": "Q.45: In Pakistan, most trades occur by which means?", "options": ["By Road", "By Air", "Cargo Ship", "None of these"], "correct": 2 },
  { "question": "Q.46: The first charter of 1973 constitution deals", "options": ["Directive Principles of State Policy", "law and order", "Fundamental rights", "None of these"], "correct": 2 },
  { "question": "Q.47: .The central section of the Sindh Sāgar Doāb is located in which desert?", "options": ["Thar", "Thal", "Cholistan", "None of these"], "correct": 1 },
  { "question": "Q.48: \"Myanmar\" is the new/old name of _____ ?", "options": ["Burma", "Niger", "Tibet", "None of these"], "correct": 0 },
  { "question": "Q.49: The highest waterfall of the world is?", "options": ["Victoria falls", "Angel falls", "Great fall", "None of these"], "correct": 1 },
  { "question": "Q.50: Ankara is the capital of which country?", "options": ["Turkey", "China", "India", "None of these"], "correct": 0 },
  { "question": "Q.51: SCO stands for _____?", "options": ["Shanghai Corporate Organisation", "Shanghai Cooperation Organize", "Shanghai Cooperation Organisation", "None of these"], "correct": 2 },
  { "question": "Q.52: In which country summer monsoon does not cause rain ?", "options": ["England", "China", "India", "None of these"], "correct": 0 },
  { "question": "Q.53: The Continent Antarctica covers the total area of world ?", "options": ["2.75 %", "1.9 %", "3.5 %", "None of these"], "correct": 0 },
  { "question": "Q.54: What was the old name of Sri Lanka_______?", "options": ["Ceylon", "Montgomery", "Sri Nagar", "None of these"], "correct": 0 },
  { "question": "Q.55: Greenland is discovered by", "options": ["Icelandic Vikings", "Ibn e Batuta", "Both A and B", "None of these"], "correct": 0 },
  { "question": "Q.56: Which of the following countries are covered by the Amazon rainforest?", "options": ["Canada, Mexico, USA", "Brazil, Colombia, Bolivia", "South Africa, Zambia, South Sudan", "None of these"], "correct": 1 },
  { "question": "Q.57: Mayanmar is the changed name of", "options": ["Maldives", "Burma", "Mexico", "Niger"], "correct": 1 },
  { "question": "Q.58: The largest country in the world by area is?", "options": ["Russia", "China", "India", "None of these"], "correct": 0 },
  { "question": "Q.59: Name the largest/longest mountain range in the world?", "options": ["Andes", "Karakuram", "Himalya", "None of these"], "correct": 0 },
  { "question": "Q.60: Which continent has no desert?", "options": ["Asia", "Africa", "Europe", "None of these"], "correct": 2 }
]},
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
