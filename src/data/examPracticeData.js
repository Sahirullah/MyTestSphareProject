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

  //POLICE

  // Police - Islamabad Police
  // Police - Islamabad Police ASI mock test 01 with 50 questions
  { id: 2, code: 'Police', title: 'Islamabad Police ASI mock test 01', category: 'police', image: '👮', questions: [
  { "question": "Q.1: Pakistan won a gold medal for the first time in Olympics in _____ ?", "options": ["1960", "1970", "1980", "1990"], "correct": 0 },
  { "question": "Q.2: The computer process both analog and digital signal is ______?", "options": ["Hybrid", "Analogue", "Digital", "None of these"], "correct": 0 },
  { "question": "Q.3: The list of coded instructions is called?", "options": ["Flowchart", "Algorithm", "Computer program", "None of these"], "correct": 2 },
  { "question": "Q.4: Which view shows margins and the rulers?", "options": ["Page layout", "Normal", "Page setup", "None of these"], "correct": 0 },
  { "question": "Q.5: You can modify alignment, line spacing and paragraph in the _____?", "options": ["Layout menu", "Format tab", "Paragraph dialog box", "None of these"], "correct": 2 },
  { "question": "Q.6: What difference does the 5th generation computer have from other generation computers?", "options": ["Scientific code", "Object Oriented Programming", "Technological advancement", "None of these"], "correct": 2 },
  { "question": "Q.7: The atmospheric pressure at any place is measured by _____?", "options": ["Altimeter", "Pressure Meter", "Barometer", "None of these"], "correct": 2 },
  { "question": "Q.8: The depletion of ozone layer has been caused mainly by _____?", "options": ["The release of chlorofluorocarbons into the atmosphere", "The deforestation of large area land", "The release of industrial waste", "None of these"], "correct": 0 },
  { "question": "Q.9: غزل کے کس شعر میں شاعر اپنا تخلص بیان کرتا ہے؟", "options": ["بیت", "مقطع", "مطلع", "None of these"], "correct": 1 },
  { "question": "Q.10: جملہ کسے کہتے ہیں؟", "options": ["دو یا دو سے زیادہ الفاظ کا مجموعہ", "وہ جملہ جس میں فاعل نہ ہو", "حرفوں کا مجموعہ", "None of these"], "correct": 0 },
  { "question": "Q.11: حروفِ تہجی کی ترتیب سے کونسا لفظ لغت میں پہلے آئے گا؟", "options": ["حضرت", "ظالم", "ضمانت", "None of these"], "correct": 0 },
  { "question": "Q.12: درست جملے کی نشان دہی کریں؟", "options": ["یہ روایت بالکل صحیح نہیں ہے", "یہ روایت بالکل صحیح نہیں ہے", "یہ روایت با لکل صحیح نہیں ہے", "None of these"], "correct": 1 },
  { "question": "Q.13: درج ذیل میں سے ضرب المثل کونسی ہے؟", "options": ["ہوائی قلعے تعمیر کرنا", "ہتھیلی پر سرسوں جمانا", "الٹا چور کوتوال کو ڈانٹے", "None of these"], "correct": 2 },
  { "question": "Q.14: The Antonym of Capricious is?", "options": ["Unchanging", "Yielding", "Heavy", "None of these"], "correct": 0 },
  { "question": "Q.15: Complete the Idiom: Hell hath no fury like _____?", "options": ["A woman scorned", "A burned woman", "A woman forgotten", "A devil is advocate"], "correct": 0 },
  { "question": "Q.16: What do you understand by Intifada?", "options": ["Ethnicity", "Peace", "Uprising", "None of these"], "correct": 2 },
  { "question": "Q.17: I would have helped him if he _____ to me.", "options": ["Had come", "came", "come", "None of these"], "correct": 0 },
  { "question": "Q.18: What is the Synonym of EXEMPLIFY?", "options": ["Summary", "Answer", "Illustrate", "Over"], "correct": 2 },
  { "question": "Q.19: What Sine Die means?", "options": ["Without order", "Without fixing a date", "Fixing a date", "None of these"], "correct": 1 },
  { "question": "Q.20: She ______ English now.", "options": ["Is speaking", "Speak", "Speaks", "None of these"], "correct": 0 },
  { "question": "Q.21: Fill in the blanks: There is no reason ______ anyone should behave cruelly.", "options": ["Which", "That", "Why", "None of these"], "correct": 2 },
  { "question": "Q.22: William Shakespeare is the greatest playwright in European literature. In which category his plays fall?", "options": ["History", "Tragedies", "Comedies", "All of these"], "correct": 3 },
  { "question": "Q.23: The Antonym of Obscure is?", "options": ["Fool", "Wise", "Famous", "None of these"], "correct": 2 },
  { "question": "Q.24: The person who is looking for sympathy talks _____?", "options": ["Plaintively", "Politely", "Didactically", "None of these"], "correct": 0 },
  { "question": "Q.25: Choose the one which best expresses the meaning of the given word ASSIMILATE?", "options": ["Assemble", "Absorb", "Receive", "Arrange"], "correct": 1 },
  { "question": "Q.26: Mark used to resume a scattered subject is?", "options": ["Semicolon", "Inverted Commas", "Dash", "None of these"], "correct": 2 },
  { "question": "Q.27: In a group of 550 students, 42% go on a tour. How many students go on tour?", "options": ["231", "210", "117", "245"], "correct": 0 },
  { "question": "Q.28: Half of 1 percent written as a decimal is?", "options": ["0.005", "0.05", "0.02", "None of these"], "correct": 0 },
  { "question": "Q.29: The square of 35 is ____?", "options": ["1225", "117", "175", "None of these"], "correct": 0 },
  { "question": "Q.30: Mount Everest's height is 29,028 feet. What is it's height in meters?", "options": ["8748 m", "8948 m", "8848 m", "None of these"], "correct": 2 },
  { "question": "Q.31: Find the odd one out 13, 41,43, 47, 53, 61, 71, 73, 81?", "options": ["81", "71", "61", "51"], "correct": 0 },
  { "question": "Q.32: The sum of two numbers is 25 and their difference is 13. Find their product.", "options": ["114", "124", "134", "144"], "correct": 0 },
  { "question": "Q.33: 2, 1, 1/2, 1/4, _____ which number is next in the series?", "options": ["1/8", "1/6", "1/12", "None of these"], "correct": 0 },
  { "question": "Q.34: Complete the series: 3, 8, 6, 14, ______, 20?", "options": ["8", "9", "10", "11"], "correct": 1 },
  { "question": "Q.35: What is the angle between the minute hand and the hour hand of a clock when the time is 12:00?", "options": ["5°", "10°", "0°", "None of these"], "correct": 2 },
  { "question": "Q.36: A train 250 m long, running with a speed of 63 km/hr will pass a tree in ____?", "options": ["14.3", "10.8", "30", "None of these"], "correct": 0 },
  { "question": "Q.37: If Y = 3x + 12 and Y = 5 then what is X equal to?", "options": ["3/7", "7/3", "-7/3", "None of these"], "correct": 2 },
  { "question": "Q.38: When the State Bank wants to decrease money supply in the country, it?", "options": ["Buys government in stock market", "Lowers discount rate", "Sells government securities", "None of these"], "correct": 2 },
  { "question": "Q.39: Which is the largest landlocked country in the world?", "options": ["Uzbekistan", "Kazakhstan", "China", "Bhutan"], "correct": 1 },
  { "question": "Q.40: All of the following countries are permanent members of the Security Council except?", "options": ["France", "Germany", "Italy", "None of these"], "correct": 1 },
  { "question": "Q.41: Mount Everest's height is 29,028 feet. What is it's height in meters?", "options": ["8748 m", "8948 m", "8848 m", "None of these"], "correct": 2 },
  { "question": "Q.42: Find the odd one out 13, 41,43, 47, 53, 61, 71, 73, 81?", "options": ["81", "71", "61", "51"], "correct": 0 },
  { "question": "Q.43: The sum of two numbers is 25 and their difference is 13. Find their product.", "options": ["114", "124", "134", "144"], "correct": 0 },
  { "question": "Q.44: 2, 1, 1/2, 1/4, _____ which number is next in the series?", "options": ["1/8", "1/6", "1/12", "None of these"], "correct": 0 },
  { "question": "Q.45: Complete the series: 3, 8, 6, 14, ______, 20?", "options": ["8", "9", "10", "11"], "correct": 1 },
  { "question": "Q.46: What is the angle between the minute hand and the hour hand of a clock when the time is 12:00?", "options": ["5°", "10°", "0°", "None of these"], "correct": 2 },
  { "question": "Q.47: A train 250 m long, running with a speed of 63 km/hr will pass a tree in ____?", "options": ["14.3", "10.8", "30", "None of these"], "correct": 0 },
  { "question": "Q.48: If Y = 3x + 12 and Y = 5 then what is X equal to?", "options": ["3/7", "7/3", "-7/3", "None of these"], "correct": 2 },
  { "question": "Q.49: When the State Bank wants to decrease money supply in the country, it?", "options": ["Buys government in stock market", "Lowers discount rate", "Sells government securities", "None of these"], "correct": 2 },
  { "question": "Q.50: Which is the largest landlocked country in the world?", "options": ["Uzbekistan", "Kazakhstan", "China", "Bhutan"], "correct": 1 },
  { "question": "Q.51: All of the following countries are permanent members of the Security Council except?", "options": ["France", "Germany", "Italy", "None of these"], "correct": 1 }
]},

  //CS610 - Computer Science 610
  { id: 28, code: 'CS610', title: 'Computer Science 610 midterm free mock test practice 01', category: 'cs', image: '💻', questions: [
  {"question": "In Cyclic Redundancy Checking, CRC is __________.", "options": ["Divisor", "Quotient", "Remainder", "Dividend"], "correct": 2},
  {"question": "The satellite or radio topology in which all computers are connected to each other via satellite or radio wave is a kind of:", "options": ["Broadcast network", "Point-to-Point network", "Mesh network", "Ring network"], "correct": 0},
  {"question": "What is the advantage of the mesh topology?", "options": ["It requires less amount of cables", "It provides dedicated link", "It is cheap to install and expand", "All of the above"], "correct": 1},
  {"question": "How much is the maximum length of twisted-pair cable is for LAN?", "options": ["50 meter", "100 meter", "150 meter", "200 meter"], "correct": 1},
  {"question": "A ____________ is a device that work in the physical layer.", "options": ["Router", "Switch", "Repeater", "None of these"], "correct": 2},
  {"question": "Which of the following device is used to switch frames?", "options": ["Hub", "Repeater", "Bridge", "Router"], "correct": 2},
  {"question": "A switch operates in which of the following layer?", "options": ["Physical layer", "Data Link layer", "Network layer", "Transport layer"], "correct": 1},
  {"question": "Which addressing is used by the switch to forward frames?", "options": ["Physical addressing", "Logical addressing", "Port addressing", "All of the above"], "correct": 0},
  {"question": "Which of the following is a Layer-3 device?", "options": ["Bridge", "Switch", "Router", "Hub"], "correct": 2},
  {"question": "A ____________ is most intelligent device.", "options": ["Hub", "Repeater", "Switch", "Router"], "correct": 3},
  {"question": "HDLC stand for:", "options": ["High-level Data Link Control", "High Data Link Control", "Higher-level Data Link Control", "Highest Data Link Control"], "correct": 0},
  {"question": "Which topology requires the central hub?", "options": ["Bus", "Ring", "Star", "Mesh"], "correct": 2},
  {"question": "Which topology has the significant advantage of isolation of each station set of links to the central hub?", "options": ["Bus topology", "Ring topology", "Star topology", "Mesh topology"], "correct": 2},
  {"question": "In the ____________ topology one end is a transmitter and other end is receiver.", "options": ["Bus", "Ring", "Star", "Point-to-point"], "correct": 3},
  {"question": "The alternative name of half-duplex is:", "options": ["Two-way alternate communication", "Two-way simultaneous communication", "One way communication", "None of these"], "correct": 0},
  {"question": "The term _______ means communication is possible in one direction.", "options": ["Half-Duplex", "Duplex", "Simplex", "Multiplex"], "correct": 2},
  {"question": "Which service is not guaranteed in datagram?", "options": ["Delivery", "Order", "Both", "None of these"], "correct": 2},
  {"question": "The services provided by network layer are:", "options": ["Connection oriented", "Connection less", "Both A and B", "None of these"], "correct": 2},
  {"question": "In _______ switching a direct physical path must exist between the sender and receiver.", "options": ["Packet", "Circuit", "Message", "Virtual"], "correct": 1},
  {"question": "Which one is not a switching technique?", "options": ["Circuit switching", "Packet switching", "Message switching", "Hub switching"], "correct": 3},
  {"question": "The minimum number of wires needed for communication between two computer is:", "options": ["One", "Two", "Three", "Four"], "correct": 1},
  {"question": "Which one is a unguided transmission media?", "options": ["Twisted pair", "Coaxial cable", "Optical fiber", "Radio waves"], "correct": 3},
  {"question": "Which one is a guided transmission media?", "options": ["Microwave", "Radio waves", "Satellite", "Twisted pair"], "correct": 3},
  {"question": "The speed of light is ____________ meter per second.", "options": ["2 × 10^8", "3 × 10^8", "4 × 10^8", "5 × 10^8"], "correct": 1},
  {"question": "Which transmission media has the fastest speed?", "options": ["Twisted pair", "Coaxial cable", "Optical fiber", "Microwave"], "correct": 2},
  {"question": "Which transmission media has maximum bandwidth?", "options": ["Twisted pair", "Coaxial cable", "Optical fiber", "Wireless"], "correct": 2},
  {"question": "The band width of Twisted pair is:", "options": ["1 Mbps", "10 Mbps", "100 Mbps", "1000 Mbps"], "correct": 1},
  {"question": "The band width of Coaxial cable is:", "options": ["10 Mbps", "100 Mbps", "1000 Mbps", "10 Gbps"], "correct": 2},
  {"question": "The band width of Optical fiber is:", "options": ["100 Mbps", "1000 Mbps", "10000 Mbps", "None of these"], "correct": 2},
  {"question": "While computing shortest path in a graph, next hop information is inserted into _________.", "options": ["Routing table", "Trailer", "Header", "Register"], "correct": 0},
  {"question": "LAN interface uses _________ to copy frame data directly from main memory.", "options": ["DMA", "FDDI", "Hard disk", "Flash"], "correct": 0}
]},

  { id: 29, code: 'CS610', title: 'Computer Science 610 midterm free mock test practice 02', category: 'cs', image: '💻', questions: [
  {"question": "The Gigabit Ethernet hardware operates at a rate of ___________.", "options": ["10 Mbps", "100 Mbps", "1000 Mbps", "1000 Gbps"], "correct": 2},
  {"question": "In the early resource sharing era, which resources were shared among users?", "options": ["Computation", "Floppy Drives", "Hard Disk", "Printers"], "correct": 0},
  {"question": "If two buildings are located far from each other then bridge, and ________ can be used to connect two LAN.", "options": ["Optical fiber", "Ethernet modem", "Switch", "NIC"], "correct": 0},
  {"question": "Which type of network consists of wireless connection of laptops in a university classroom?", "options": ["WAN", "MAN", "Fog", "LAN"], "correct": 3},
  {"question": "A typical bridge has _______________.", "options": ["One NIC, a CPU a memory and a ROM.", "Two NICs, a CPU a memory and a ROM.", "RAM, ROM and CPU.", "A cache memory, ROM and CPU."], "correct": 1},
  {"question": "Which of the following is a benefit of point to point communication?", "options": ["Quick to configure", "Security implementation", "Cost", "Less availability"], "correct": 1},
  {"question": "_________ is not used to extend LAN.", "options": ["Hub", "Fiber modem", "Repeater", "Bridge"], "correct": 1},
  {"question": "Which types of VPNs are used for corporate connectivity across companies residing in different geographical locations?", "options": ["Remote access VPNs", "Peer-to-peer VPNs", "Country-to-country VPNs", "Site-to-site VPNs"], "correct": 3},
  {"question": "Star topology is the kind of", "options": ["Tree topology", "Point-to-point topology", "Broadcast topology", "Ring topology"], "correct": 1},
  {"question": "In a __________ state, a bridge allows simultaneous use of each segment.", "options": ["Ready", "Steady", "Final", "Startup"], "correct": 1},
  {"question": "The network occupies larger areas like cities & countries is called", "options": ["LAN", "WAN", "MAN", "All of the above"], "correct": 1},
  {"question": "In link state routing __________ send link-state information about local connections.", "options": ["Bridges", "Switches", "Routers", "Hubs"], "correct": 2},
  {"question": "Transmission media are usually categorized as _______.", "options": ["Guided or unguided", "Fixed or unfixed", "Determinate or indeterminate", "Metallic or nonmetallic"], "correct": 0},
  {"question": "Even parity can be used to check for ________ bit/ bits of errors.", "options": ["1", "2", "3", "0"], "correct": 0},
  {"question": "Routing table entries can be ________ with a default route.", "options": ["Collapsed", "Redirected", "Emerged", "Guaranteed"], "correct": 0},
  {"question": "The system administrator must coordinate to avoid the conflict in _________ hardware addressing scheme.", "options": ["Static", "Dynamic", "Configurable", "Fixed"], "correct": 2},
  {"question": "____________ network does not depend on CSMA/CD.", "options": ["Ethernet", "Fast Ethernet", "Gigabit Ethernet", "Wireless"], "correct": 3},
  {"question": "Which of the following technologies can extend the diameter of LAN medium?", "options": ["Fiber optic", "Repeater", "Diameter of LAN medium is not extendable", "Both Fiber optic and Repeaters"], "correct": 3},
  {"question": "Connections are formed in Asynchronous transfer mode by starting values in________ in ATM switches, as opposed to making actual electrical connections.", "options": ["Heap", "Stack", "Virtual Circuit", "Memory locations"], "correct": 3},
  {"question": "A typical port on an ATM switch operates at __________ or higher.", "options": ["OC-2 speed (155Gbps)", "OC-2 speed (1000Mbps)", "OC-3 speed (155Mbps)", "OC-3 speed (100Gbps)"], "correct": 2},
  {"question": "Ethernet uses a __________ bit static addressing scheme in which each device is assigned a unique address by the manufacturer.", "options": ["64", "48", "32", "8"], "correct": 1},
  {"question": "Which one is incorrect statement?", "options": ["Hub wiring centralizes electronics and connections. It makes management easier.", "No Transceiver allows computer to be powered off or disconnected from network without distracting other communication.", "Transceiver may be located in an inconvenient place in any situation", "None of these"], "correct": 1},
  {"question": "ATM is also called __________.", "options": ["Label rewriting", "Label switching system", "label rewriting and label switching system", "All of above"], "correct": 3},
  {"question": "The most important task a bridge performs is __________.", "options": ["Packet switching", "Line controlling", "Noise controlling", "Frame filtering"], "correct": 3},
  {"question": "Which of the following statement is true regarding Jitter?", "options": ["Jitter is used for variance in transmission delays.", "Jitter can occur when a packet is delayed.", "Jitter is significance for voice, video and data", "All of the obove"], "correct": 3},
  {"question": "Which of the following is a benifit of source independence?", "options": ["It allows fast and efficient routing", "Packet switch do not need to have complete information about all destinations", "Network functions even if topology changes", "All of the above"], "correct": 3},
  {"question": "The term signaling is used to describe __________.", "options": ["Communication about the internet", "Communication about the extranet", "Communication about the network", "None of above"], "correct": 2},
  {"question": "No error detection scheme is perfect because transmission errors can affect the additional information as well as the data.", "options": ["True", "False"], "correct": 0},
  {"question": "------ Program sends a message to a remote computer and reports whether the computer responds.", "options": ["Ping", "Traceroute", "ICMP", "Non of the given"], "correct": 0},
  {"question": "---------- was especially concerned about the lack of high powered computers.", "options": ["ARPA", "IEEE", "EIA", "Non of the given"], "correct": 0},
  {"question": "The term --------- is used to denote the definition of a packet used with a specific type of network.", "options": ["Packet", "Frame", "Data", "None of the given"], "correct": 1}
]},
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
  { id: 'cs', name: 'CS - Computer Science subjects mock tests' }
];
