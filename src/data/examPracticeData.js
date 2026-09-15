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

// Convert CS201 question format from object options to array options
const convertCS201Questions = (rawQuestions) => {
  return rawQuestions.map(q => ({
    question: q.question,
    options: [q.options.a, q.options.b, q.options.c, q.options.d],
    correct: { a: 0, b: 1, c: 2, d: 3 }[q.answer]
  }));
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

//CS Subject mocktest start

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

//cs201 midterm mocktest 01
{id: 30, code: 'CS201', title:'CS201 introductioin to programming.cs201 midterm free mock test 01', category:'cs', image: '💻', questions: convertCS201Questions([
  {"question_number": 1, "question": "What is the other name of the variable?", "options": {"a": "Identifier", "b": "Visual", "c": "Static", "d": "Constant"}, "answer": "a"},
  {"question_number": 2, "question": "Which of the Following is true about streams?\nA. It is a sequence of bytes\nB. It is an ordered sequence\nC. All bytes can go trough the stream simultaneously\nD. Bytes that enters first into the stream will go out at last", "options": {"a": "A & D", "b": "A only", "c": "C only", "d": "A & B"}, "answer": "d"},
  {"question_number": 3, "question": "When No. of repetition is know then we use the ------ structure to perform repetition tasks.", "options": {"a": "While loop", "b": "For loop", "c": "Switch", "d": "Do while loop"}, "answer": "b"},
  {"question_number": 4, "question": "Shifting the binary number is similar to shifting the------ number.", "options": {"a": "Base 7", "b": "Decimal", "c": "Hexadecimal", "d": "octal"}, "answer": "b"},
  {"question_number": 5, "question": "We can read, write and manipulate the same file using ---------------.", "options": {"a": "Stdio.h", "b": "Fstream.h", "c": "Iomanp.h", "d": "Iostream.h"}, "answer": "b"},
  {"question_number": 6, "question": "In do while loop the , condition is checked ----------- one execution of loop.", "options": {"a": "Before", "b": "During", "c": "At Any time", "d": "After"}, "answer": "d"},
  {"question_number": 7, "question": "< , <=, >, >= are called ----- operators.", "options": {"a": "Arithmetic", "b": "Conditional", "c": "Logical", "d": "Relational"}, "answer": "d"},
  {"question_number": 8, "question": "For breaking complex problem into smaller pieces we use ------------.", "options": {"a": "Function", "b": "Loops", "c": "If/else", "d": "Break statement"}, "answer": "a"},
  {"question_number": 9, "question": "In three – dimensional array. We use------- ‘for loop(s)’ to populate the array.", "options": {"a": "3", "b": "2", "c": "1", "d": "4"}, "answer": "a"},
  {"question_number": 10, "question": "a = a + 1; can be written as ---------------", "options": {"a": "1 + a = a;", "b": "a+a+1", "c": "a+=1", "d": "a+1"}, "answer": "c"},
  {"question_number": 11, "question": "Continue statement usually force the immediate ------ iteration of the loop .", "options": {"a": "last", "b": "previous", "c": "first", "d": "next"}, "answer": "d"},
  {"question_number": 12, "question": "If a file is opened with ios::out mode, then -----------------.", "options": {"a": "We can write in this file", "b": "Content of file discarded", "c": "A new file is created", "d": "All of the given"}, "answer": "a"},
  {"question_number": 13, "question": "----------------------- operator is used to pass the address of variable in call by reference method.", "options": {"a": "&", "b": "@", "c": "%", "d": "+"}, "answer": "a"},
  {"question_number": 14, "question": "C++ is a -------------- language.", "options": {"a": "Machine", "b": "Low level", "c": "Assembly language", "d": "High level"}, "answer": "d"},
  {"question_number": 15, "question": "By writing a file seekg (15L, ios::cur) we are moving --------------.", "options": {"a": "15 bit in the backward direction starting from the pervious position.", "b": "15 bit in the backward direction starting from the current position.", "c": "15 bytes in the backward direction starting from the pervious position.", "d": "15 bytes in the forward direction starting from the current position."}, "answer": "d"},
  {"question_number": 16, "question": "Pointer points to a particular -------------.", "options": {"a": "Data types", "b": "Variable", "c": "Memory address", "d": "value"}, "answer": "c"},
  {"question_number": 17, "question": "If function has not been declared before it is a -------.", "options": {"a": "Run time error", "b": "Logical error", "c": "Syntax error", "d": "Late binding error"}, "answer": "c"},
  {"question_number": 18, "question": "---------------- statement is used to terminate the processing of a particular case and exit from switch structure.", "options": {"a": "Break", "b": "If", "c": "Goto", "d": "continue"}, "answer": "a"},
  {"question_number": 19, "question": "Which one of the following is used to perform bit-wise OR operation?", "options": {"a": "~", "b": "^", "c": "||", "d": "|"}, "answer": "d"},
  {"question_number": 20, "question": "In the following nested For Loop, which loop will run most number of times?", "options": {"a": "Inner loop", "b": "Depends upon the statements in the inner in the loop body", "c": "Outer loop", "d": "Both loop run equal number of time"}, "answer": "a"},
  {"question_number": 21, "question": "We can access a global variable ------------.", "options": {"a": "From anywhere in the program", "b": "From the main() function only", "c": "From the function only", "d": "From the loop only"}, "answer": "a"},
  {"question_number": 22, "question": "Structures are syntactically defined with the word------------.", "options": {"a": "Struct", "b": "Struc", "c": "Structure", "d": "None of the given"}, "answer": "a"},
  {"question_number": 23, "question": "If y= 20 and z = y++. Then the value of z will be --------------.", "options": {"a": "22", "b": "20", "c": "21", "d": "19"}, "answer": "b"},
  {"question_number": 24, "question": "The structure which can execute zero or more times is called ------------.", "options": {"a": "For structure", "b": "Do-while loop", "c": "While structure", "d": "None of the above"}, "answer": "c"},
  {"question_number": 25, "question": "Which of the following is the correct way to write a compound assignment operator?", "options": {"a": "X +  =  4;", "b": "X+=4;", "c": "X+==4;", "d": "None of the above"}, "answer": "b"},
  {"question_number": 26, "question": "Suppose we have a file with name “myfile.txt”. What will be the correct syntax of file opening for the input.", "options": {"a": "myFile.In(“myfile.txt”, ios::open);", "b": "myFile.open(“myfile.txt”, ios::in);", "c": "myFile.Input(“myfile.txt”, ios::open);", "d": "myFile.open(“myfile.txt”, ios::inpt);"}, "answer": "b"},
  {"question_number": 27, "question": "What will be the value of the variable output in the given piece of the code?\nDouble output = 0\nOutput = (2 + 2)*4+ 2 /(4- 2);", "options": {"a": "17", "b": "11", "c": "15", "d": "12"}, "answer": "a"},
  {"question_number": 28, "question": "Which one of the following languages has been used to write the compiler of “C” language?", "options": {"a": "Basic", "b": "Fortran", "c": "Java", "d": "C"}, "answer": "d"},
  {"question_number": 29, "question": "Char name []= “Hello world”;\nIn the above statement, A memory of ----------- characters will be allocated.", "options": {"a": "10", "b": "12", "c": "13", "d": "11"}, "answer": "b"},
  {"question_number": 30, "question": "What will be output of following code segment?\nFor (int i = 2; i < 10; i++){\n   If (i == 5)\n      Continue;\n   Cout << i << \".\";\n}", "options": {"a": "2, 3, 4", "b": "2.3.4.6.7.8.9.", "c": "4,6,7,8,9", "d": "2,3,7,8,9"}, "answer": "b"},
  {"question_number": 31, "question": "Identify the correct syntax for making a class friend of other class", "options": {"a": "class ClassOne { friend class OtherClass; };", "b": "friend ClassOne { OtherClass };", "c": "ClassOne { friend otherclass };", "d": "friend class ClassOne { friend otherclass };"}, "answer": "a"},
  {"question_number": 32, "question": "The function will be return a reference to the global variable that exits throughout the program and thus there will be no danger of--------.", "options": {"a": "Garbage collection", "b": "Dangling reference", "c": "Wastage of memory", "d": "System crash"}, "answer": "b"},
  {"question_number": 33, "question": "The friend function are --------------.", "options": {"a": "Not member of class", "b": "Member of class", "c": "Inline function", "d": "Void function"}, "answer": "a"},
  {"question_number": 34, "question": "The function of calloc takes two arguments, the first argument is the --------- and the second argument is the -------------.", "options": {"a": "Required space in terms of number, size of space", "b": "Size of space, number of bytes", "c": "Space in terms of string character, size of list", "d": "Size of array, number of bytes"}, "answer": "a"},
  {"question_number": 35, "question": "With the use of dynamic allocation of memory, the system resource can be-------------.", "options": {"a": "Wasted", "b": "Used efficiently", "c": "Used carelessly", "d": "All of the above"}, "answer": "b"},
  {"question_number": 36, "question": "An instance of a class is called -------.", "options": {"a": "Structure", "b": "Data type", "c": "Object", "d": "Member function"}, "answer": "c"},
  {"question_number": 37, "question": "Initializing the data member within the class is ---------.", "options": {"a": "A logical error", "b": "A run time error", "c": "A syntax error", "d": "Not an error"}, "answer": "c"},
  {"question_number": 38, "question": "A friend function of a class is a function defined -------------.", "options": {"a": "Inside that class and that has no access to the member of the class", "b": "Output that class that right to access public member of the class only", "c": "Outside that class and that has the right to access all member of class.", "d": "Outside that class and that has the right to access all member of the class"}, "answer": "c"},
  {"question_number": 39, "question": "This reference to variable can be obtained by preceding the identifier of a variable with------.", "options": {"a": "Dot operator", "b": "Ampersand sign &", "c": "^ sign", "d": "* operator"}, "answer": "b"},
  {"question_number": 40, "question": "In C language, the region of memory allocated at run time is called-----------.", "options": {"a": "Stack", "b": "Heap", "c": "Free store", "d": "Available memory"}, "answer": "b"},
  {"question_number": 41, "question": "Constructor has -------------.", "options": {"a": "No name", "b": "The same name as the class", "c": "The same name as data member", "d": "Return type"}, "answer": "b"},
  {"question_number": 42, "question": "Programmer should be very careful about the memory management because it can----------.", "options": {"a": "Cause problem of memory leakage and dangling pointers.", "b": "Creates problem of null pointer", "c": "Returns void pointers", "d": "Affects the logic of the program"}, "answer": "a"},
  {"question_number": 43, "question": "Sometimes after allocating memory we need additional space, for this purpose we use", "options": {"a": "Reallocation function", "b": "Calloc function", "c": "Realloc function", "d": "Void pointer"}, "answer": "c"},
  {"question_number": 44, "question": "The constructor contains------.", "options": {"a": "Return type", "b": "No return type", "c": "Objects", "d": "Classes"}, "answer": "b"},
  {"question_number": 45, "question": "Encapsulation means-----------------.", "options": {"a": "That the data of a class cannot be accessed from outside directly", "b": "That the data of a class can be accessed from outside", "c": "That data becomes public", "d": "That the data can be accessed anywhere within a main program"}, "answer": "a"},
  {"question_number": 46, "question": "Friend classes are used in cases where one class is ------------ to another class", "options": {"a": "Tightly coupled", "b": "Loosely coupled", "c": "Independent", "d": "Encapsulated"}, "answer": "a"},
  {"question_number": 47, "question": "#define CIRCUMFERENCE(X) (2*pi*R) is a", "options": {"a": "User defined function", "b": "Library function", "c": "Definition of a macro", "d": "Utility function"}, "answer": "c"},
  {"question_number": 48, "question": "Header files provide -------------- so the program running on one operating system can run without an error on the other system.", "options": {"a": "Accessibility", "b": "Reliability", "c": "Accuracy", "d": "Portability"}, "answer": "d"},
  {"question_number": 49, "question": "------ will return the number of bytes reserved for a variable or data type.", "options": {"a": "sizeof operator", "b": "Free operator", "c": "Void pointer", "d": "New operator"}, "answer": "a"},
  {"question_number": 50, "question": "Default constructor takes----------.", "options": {"a": "One parameter", "b": "Two parameter", "c": "No parameter", "d": "Character type parameter"}, "answer": "c"}
])},
//cs201 midterm mocktest 02
{id: 30, code: 'CS201', title:'CS201 introductioin to programming.cs201 midterm free mock test 02', category:'cs', image: '💻', questions: convertCS201Questions([
  { "question_number": 1, "question": "Void calloc(50,sizeof(int)) will return", "options": { "a": "Char pointer", "b": "A memory chunk of 50 integers from heap", "c": "A memory chunk of 50 integers from stack", "d": "A memory chunk with zero pointer" }, "answer": "b" },
  { "question_number": 2, "question": "We cannot increment -------.", "options": { "a": "Pointer", "b": "Arrays", "c": "References", "d": "variables" }, "answer": "b" },
  { "question_number": 3, "question": "Symbolic constant PI can be defined as:", "options": { "a": "#define PI 3.14;", "b": "#define PI 3.14", "c": "#define PI =3.14", "d": "#include PI= 3.14" }, "answer": "b" },
  { "question_number": 4, "question": "Special name which is substituted in code by its definition and as a result we get an expanded code is called", "options": { "a": "Union", "b": "Directive", "c": "Array", "d": "Macro" }, "answer": "d" },
  { "question_number": 5, "question": "In a class we can have ------ constructor(s).", "options": { "a": "Only one", "b": "No", "c": "Two", "d": "Many" }, "answer": "d" },
  { "question_number": 6, "question": "C++ offers ----------- levels of data access control inside a class.", "options": { "a": "Three", "b": "Four", "c": "Two", "d": "five" }, "answer": "a" },
  { "question_number": 7, "question": "For accessing data members we use ------- operator", "options": { "a": "plus+", "b": "multiplication*", "c": "dot.", "d": "Division/" }, "answer": "c" },
  { "question_number": 8, "question": "The memory allocation in C++ is carried out with the help of ---------------.", "options": { "a": "NULL Pointer", "b": "New operator", "c": "Dot operator", "d": "+operator" }, "answer": "b" },
  { "question_number": 9, "question": "The object code of our program is combined with the --------------.", "options": { "a": "Source program", "b": "Machine code of the operating system", "c": "Object code of the library functions", "d": "With header files" }, "answer": "c" },
  { "question_number": 10, "question": "Initializing the data member within the class is --------------.", "options": { "a": "A logical error", "b": "A run time error", "c": "A syntax error", "d": "Not an error" }, "answer": "c" },
  { "question_number": 11, "question": "What will be the values of x and y after executing: Inline int max(int a, int b) { if(a>b) return a; return b; } main() { int I, x, y; x=23; y=45; I=max(x++, y++); }", "options": { "a": "X 23 y 45", "b": "X 24 y 46", "c": "X 22 y 46", "d": "X 23 y 47" }, "answer": "d" },
  { "question_number": 12, "question": "We should not use such variable names that are starting with ----------- because in C++, there are lots of internal constant and symbolic names that start with it.", "options": { "a": "Upper case alphabets", "b": "Lower case alphabets", "c": "Double underscore", "d": "None of the given option" }, "answer": "c" },
  { "question_number": 13, "question": "For console input and output we use ---------------.", "options": { "a": "Conio.h header file", "b": "Stdlib.h header file", "c": "Process.h header file", "d": "Getch.h header file" }, "answer": "a" },
  { "question_number": 14, "question": "The difference b/w pointer and references is that-------.", "options": { "a": "We cannot do arithmetic with pointers", "b": "We can do arithmetic with pointers", "c": "We cannot reassign pointers", "d": "We can assign references" }, "answer": "b" },
  { "question_number": 15, "question": "If you create a header file of your own and you save it in the \"Header file\" folder which is located on the current working directory then you must enclose your header file within-----------------.", "options": { "a": "Braces", "b": "Quotation marks", "c": "#sign", "d": "Angle brackets" }, "answer": "b" },
  { "question_number": 16, "question": "Reference Variables must--------------------.", "options": { "a": "Not be initialized after they are declared", "b": "Be initialized after they are declared", "c": "Contain integer value", "d": "Contain zero value" }, "answer": "a" },
  { "question_number": 17, "question": "To prevent dangling reference the function returning reference should be used with-----------.", "options": { "a": "Local variables", "b": "Global variables only", "c": "Arrays", "d": "Static and global variables" }, "answer": "d" },
  { "question_number": 18, "question": "The function will return a reference to the global variable that exists throughout the program and thus there will be no danger of ---------------.", "options": { "a": "Garbage collection", "b": "Dangling reference", "c": "Wastage of memory", "d": "System crash" }, "answer": "b" },
  { "question_number": 19, "question": "= operator is used for -------------.", "options": { "a": "Checking equality", "b": "Decision making", "c": "Comparison", "d": "Assigning values to variables" }, "answer": "d" },
  { "question_number": 20, "question": "aFile.seekg(-10L, ios::cur) moves in -------------.", "options": { "a": "Both direction", "b": "None of the given", "c": "Backward direction", "d": "Forward direction" }, "answer": "c" },
  { "question_number": 21, "question": "In C/C++, a variable's name can start with the symbol------------.", "options": { "a": "_ Underscore", "b": "+ Plus", "c": ": Colon", "d": "; Semicolon" }, "answer": "a" },
  { "question_number": 22, "question": "Which is the correct syntax to define a structure named \"student\"?", "options": { "a": "struct student ( //variable );", "b": "struct student { //variable };", "c": "structure student ( //variable );", "d": "structure student { //variable };" }, "answer": "b" },
  { "question_number": 23, "question": "The exclusive OR operator returns 1 if --------------.", "options": { "a": "Both input are 1", "b": "None of the given", "c": "One is 1 and other is zero", "d": "Both input are 0" }, "answer": "c" },
  { "question_number": 24, "question": "If int a = 50; then the value of a/=3; will be", "options": { "a": "18", "b": "15", "c": "17", "d": "16" }, "answer": "d" },
  { "question_number": 25, "question": "Identify the logical error in the following if condition: if ((i<5) && (i>5))", "options": { "a": "& will be used instead of &&", "b": "&& cannot be used with if condition", "c": "Condition is always true", "d": "Condition is always false" }, "answer": "d" },
  { "question_number": 26, "question": "Operating system is a type --------- software.", "options": { "a": "Utility", "b": "Device driver", "c": "Application", "d": "System" }, "answer": "d" },
  { "question_number": 27, "question": "MS word is type of ------- software.", "options": { "a": "Application", "b": "Device Driver", "c": "Operating system", "d": "utility" }, "answer": "a" },
  { "question_number": 28, "question": "What will be result of the expression K=++m; If initially K=0 and m=5?", "options": { "a": "6", "b": "4", "c": "0", "d": "5" }, "answer": "a" },
  { "question_number": 29, "question": "Individual characters in a string stored in an array can be accessed directly using array--------.", "options": { "a": "Subscript", "b": "Script", "c": "Value", "d": "Superscript" }, "answer": "a" },
  { "question_number": 30, "question": "Structure use ---- for memory allocation", "options": { "a": "Cache", "b": "Stack", "c": "Heap", "d": "Queue" }, "answer": "b" },
  { "question_number": 31, "question": "a ^= b; can be written as", "options": { "a": "a = b^a;", "b": "a^=a+b", "c": "a=a^+b;", "d": "a=a^b;" }, "answer": "d" },
  { "question_number": 32, "question": "There is a pointer variable named ptr of type float. Which type of variable address can be stored by ptr?", "options": { "a": "Int", "b": "Char", "c": "Float", "d": "double" }, "answer": "c" },
  { "question_number": 33, "question": "Compiler translates high language program into------ language code.", "options": { "a": "Java", "b": "Machine", "c": "C", "d": "C++" }, "answer": "b" },
  { "question_number": 34, "question": "From the following; which one is the correct syntax of an array declaration; array size is 5 and it is of float data type?", "options": { "a": "[5] float name;", "b": "float name [5];", "c": "Name[5]float;", "d": "float[5] name;" }, "answer": "b" },
  { "question_number": 35, "question": "The expression ((a + b) == 10) && ((X + Y) == 20) is true only if-----------.", "options": { "a": "((a + b) == 10) is true", "b": "Both ((a + b) == 10) and ((x + Y) == 20) are true", "c": "Either ((a + b) == 10) or ((X + Y) == 20) is true", "d": "((X + Y) == 20) is true" }, "answer": "b" },
  { "question_number": 36, "question": "In do while loop the condition is checked --------- one execution of loop.", "options": { "a": "During", "b": "Before", "c": "At any time", "d": "After" }, "answer": "d" },
  { "question_number": 37, "question": "To get the value stored at a memory address, we use the--------------.", "options": { "a": "Referencing operator", "b": "Binary operator", "c": "dereferencing operator", "d": "AND(&&) operator" }, "answer": "c" },
  { "question_number": 38, "question": "Following is the declaration of a ---------- array: int arr[2][2][2]", "options": { "a": "2-Dimensional", "b": "3-Dimensional", "c": "1-Dimensional", "d": "None of the given" }, "answer": "b" },
  { "question_number": 39, "question": "ofstream is used for __________.", "options": { "a": "Input file stream", "b": "Output file stream", "c": "Input and output file stream", "d": "All of the given" }, "answer": "b" },
  { "question_number": 40, "question": "Base address is the memory address of __________ element of an array.", "options": { "a": "1st", "b": "2nd", "c": "3rd", "d": "4th" }, "answer": "a" },
  { "question_number": 41, "question": "All elements of an array must be of __________ data type(s).", "options": { "a": "char and int", "b": "Same", "c": "Different", "d": "float and double" }, "answer": "b" },
  { "question_number": 42, "question": "eof is used to check for the __________ of file when a file is being read.", "options": { "a": "Start", "b": "End", "c": "Middle", "d": "Name" }, "answer": "b" },
  { "question_number": 43, "question": "While handling files, one can have __________ options.", "options": { "a": "read the file", "b": "write in some file", "c": "read and write in the same file", "d": "All of the given" }, "answer": "d" },
  { "question_number": 44, "question": "Which of the following is true about streams?\nA. It is a sequence of bytes\nB. It is an ordered sequence\nC. All bytes can go through the stream simultaneously\nD. Bytes that enters first into the stream will go out at last", "options": { "a": "A only", "b": "C only", "c": "A and B", "d": "A and D" }, "answer": "c" },
  { "question_number": 45, "question": "we have opened a file stream myfile for reading(getting), myfile.tellg() gives us the current get position of the file pointer. It returns a whole number of type __________.", "options": { "a": "long", "b": "int", "c": "short", "d": "double" }, "answer": "a" },
  { "question_number": 46, "question": "Null Character is represented by __________ in C++.", "options": { "a": "/0", "b": "\\0", "c": "\\n", "d": "\\t" }, "answer": "b" },
  { "question_number": 47, "question": "suppose we have int y[10]; To access the 4th element of the array we write.", "options": { "a": "y[4];", "b": "y[3];", "c": "y[2];", "d": "None of given" }, "answer": "b" },
  { "question_number": 48, "question": "What will be the size of the array declared as int array[1000];", "options": { "a": "999", "b": "1000", "c": "1001", "d": "1002" }, "answer": "b" },
  { "question_number": 49, "question": "__________ Returns true if c is a letter and false otherwise.", "options": { "a": "int isalpha(int c)", "b": "int isalnum(int c)", "c": "int isxdigit(int c)", "d": "int isdigit(int c)" }, "answer": "a" },
  { "question_number": 50, "question": "What will be the correct syntax of declaration of the following statement? \"ptr is a pointer to const int\"", "options": { "a": "int const* ptr", "b": "int * const ptr", "c": "const int * ptr", "d": "const * int ptr" }, "answer": "c" },
  { "question_number": 51, "question": "What will be the size of following array? int arr[29];", "options": { "a": "0", "b": "30", "c": "29", "d": "28" }, "answer": "c" },
  { "question_number": 52, "question": "Individual characters in a string stored in an array can be accessed directly using array __________.", "options": { "a": "superscript", "b": "script", "c": "subscript", "d": "value" }, "answer": "c" },
  { "question_number": 53, "question": "char **argv can be read as __________.", "options": { "a": "pointer to pointer", "b": "pointer to char", "c": "pointer to pointer to char", "d": "None of the given" }, "answer": "c" },
  { "question_number": 54, "question": "By default, the starting index of an array in C++ is __________ .", "options": { "a": "2", "b": "-1", "c": "0", "d": "1" }, "answer": "c" },
  { "question_number": 55, "question": "The ASCII code of null character is __________.", "options": { "a": "000", "b": "010", "c": "111", "d": "110" }, "answer": "a" },
  { "question_number": 56, "question": "To manipulate n-dimensional array __________ nested loops are required.", "options": { "a": "n-2", "b": "n-1", "c": "n+1", "d": "n" }, "answer": "d" },
  { "question_number": 57, "question": "dereferencing operator is represented by __________.", "options": { "a": "*", "b": "+", "c": "_", "d": "None of the given" }, "answer": "a" },
  { "question_number": 58, "question": "Given a two dimensional array of integers, what would be the correct way of assigning the value 6 to the element at third row and fourth column?", "options": { "a": "array[3][4]=6", "b": "array[2][4]=6", "c": "array[4][3]=6", "d": "array[2][3]=6" }, "answer": "d" },
  { "question_number": 59, "question": "Which of the following is true about streams?\nA. It is a sequence of bytes\nB. It is an ordered sequence\nC. All bytes can go through the stream simultaneously\nD. Bytes that enters first into the stream will go out at last", "options": { "a": "A only", "b": "C only", "c": "A and B", "d": "A and D" }, "answer": "c" }
])},

//cs201 midterm mocktest 03
{id: 30, code: 'CS201', title:'CS201 introductioin to programming.cs201 midterm free mock test 03', category:'cs', image: '💻', questions: convertCS201Questions([
  { "question_number": 1, "question": "Void calloc(50,sizeof(int)) will return", "options": { "a": "Char pointer", "b": "A memory chunk of 50 integers from heap", "c": "A memory chunk of 50 integers from stack", "d": "A memory chunk with zero pointer" }, "answer": "b" },
  { "question_number": 2, "question": "We cannot increment -------.", "options": { "a": "Pointer", "b": "Arrays", "c": "References", "d": "variables" }, "answer": "b" },
  { "question_number": 3, "question": "Symbolic constant PI can be defined as:", "options": { "a": "#define PI 3.14;", "b": "#define PI 3.14", "c": "#define PI =3.14", "d": "#include PI= 3.14" }, "answer": "b" },
  { "question_number": 4, "question": "Special name which is substituted in code by its definition and as a result we get an expanded code is called", "options": { "a": "Union", "b": "Directive", "c": "Array", "d": "Macro" }, "answer": "d" },
  { "question_number": 5, "question": "In a class we can have ------ constructor(s).", "options": { "a": "Only one", "b": "No", "c": "Two", "d": "Many" }, "answer": "d" },
  { "question_number": 6, "question": "C++ offers ----------- levels of data access control inside a class.", "options": { "a": "Three", "b": "Four", "c": "Two", "d": "five" }, "answer": "a" },
  { "question_number": 7, "question": "For accessing data members we use ------- operator", "options": { "a": "plus+", "b": "multiplication*", "c": "dot.", "d": "Division/" }, "answer": "c" },
  { "question_number": 8, "question": "The memory allocation in C++ is carried out with the help of ---------------.", "options": { "a": "NULL Pointer", "b": "New operator", "c": "Dot operator", "d": "+operator" }, "answer": "b" },
  { "question_number": 9, "question": "The object code of our program is combined with the --------------.", "options": { "a": "Source program", "b": "Machine code of the operating system", "c": "Object code of the library functions", "d": "With header files" }, "answer": "c" },
  { "question_number": 10, "question": "Initializing the data member within the class is --------------.", "options": { "a": "A logical error", "b": "A run time error", "c": "A syntax error", "d": "Not an error" }, "answer": "c" },
  { "question_number": 11, "question": "What will be the values of x and y after executing: Inline int max(int a, int b) { if(a>b) return a; return b; } main() { int I, x, y; x=23; y=45; I=max(x++, y++); }", "options": { "a": "X 23 y 45", "b": "X 24 y 46", "c": "X 22 y 46", "d": "X 23 y 47" }, "answer": "d" },
  { "question_number": 12, "question": "We should not use such variable names that are starting with ----------- because in C++, there are lots of internal constant and symbolic names that start with it.", "options": { "a": "Upper case alphabets", "b": "Lower case alphabets", "c": "Double underscore", "d": "None of the given option" }, "answer": "c" },
  { "question_number": 13, "question": "For console input and output we use ---------------.", "options": { "a": "Conio.h header file", "b": "Stdlib.h header file", "c": "Process.h header file", "d": "Getch.h header file" }, "answer": "a" },
  { "question_number": 14, "question": "The difference b/w pointer and references is that-------.", "options": { "a": "We cannot do arithmetic with pointers", "b": "We can do arithmetic with pointers", "c": "We cannot reassign pointers", "d": "We can assign references" }, "answer": "b" },
  { "question_number": 15, "question": "If you create a header file of your own and you save it in the \"Header file\" folder which is located on the current working directory then you must enclose your header file within-----------------.", "options": { "a": "Braces", "b": "Quotation marks", "c": "#sign", "d": "Angle brackets" }, "answer": "b" },
  { "question_number": 16, "question": "Reference Variables must--------------------.", "options": { "a": "Not be initialized after they are declared", "b": "Be initialized after they are declared", "c": "Contain integer value", "d": "Contain zero value" }, "answer": "a" },
  { "question_number": 17, "question": "To prevent dangling reference the function returning reference should be used with-----------.", "options": { "a": "Local variables", "b": "Global variables only", "c": "Arrays", "d": "Static and global variables" }, "answer": "d" },
  { "question_number": 18, "question": "The function will return a reference to the global variable that exists throughout the program and thus there will be no danger of ---------------.", "options": { "a": "Garbage collection", "b": "Dangling reference", "c": "Wastage of memory", "d": "System crash" }, "answer": "b" },
  { "question_number": 19, "question": "= operator is used for -------------.", "options": { "a": "Checking equality", "b": "Decision making", "c": "Comparison", "d": "Assigning values to variables" }, "answer": "d" },
  { "question_number": 20, "question": "aFile.seekg(-10L, ios::cur) moves in -------------.", "options": { "a": "Both direction", "b": "None of the given", "c": "Backward direction", "d": "Forward direction" }, "answer": "c" },
  { "question_number": 21, "question": "In C/C++, a variable's name can start with the symbol------------.", "options": { "a": "_ Underscore", "b": "+ Plus", "c": ": Colon", "d": "; Semicolon" }, "answer": "a" },
  { "question_number": 22, "question": "Which is the correct syntax to define a structure named \"student\"?", "options": { "a": "struct student ( //variable );", "b": "struct student { //variable };", "c": "structure student ( //variable );", "d": "structure student { //variable };" }, "answer": "b" },
  { "question_number": 23, "question": "The exclusive OR operator returns 1 if --------------.", "options": { "a": "Both input are 1", "b": "None of the given", "c": "One is 1 and other is zero", "d": "Both input are 0" }, "answer": "c" },
  { "question_number": 24, "question": "If int a = 50; then the value of a/=3; will be", "options": { "a": "18", "b": "15", "c": "17", "d": "16" }, "answer": "d" },
  { "question_number": 25, "question": "Identify the logical error in the following if condition: if ((i<5) && (i>5))", "options": { "a": "& will be used instead of &&", "b": "&& cannot be used with if condition", "c": "Condition is always true", "d": "Condition is always false" }, "answer": "d" },
  { "question_number": 26, "question": "Operating system is a type --------- software.", "options": { "a": "Utility", "b": "Device driver", "c": "Application", "d": "System" }, "answer": "d" },
  { "question_number": 27, "question": "MS word is type of ------- software.", "options": { "a": "Application", "b": "Device Driver", "c": "Operating system", "d": "utility" }, "answer": "a" },
  { "question_number": 28, "question": "What will be result of the expression K=++m; If initially K=0 and m=5?", "options": { "a": "6", "b": "4", "c": "0", "d": "5" }, "answer": "a" },
  { "question_number": 29, "question": "Individual characters in a string stored in an array can be accessed directly using array--------.", "options": { "a": "Subscript", "b": "Script", "c": "Value", "d": "Superscript" }, "answer": "a" },
  { "question_number": 30, "question": "Structure use ---- for memory allocation", "options": { "a": "Cache", "b": "Stack", "c": "Heap", "d": "Queue" }, "answer": "b" },
  { "question_number": 31, "question": "a ^= b; can be written as", "options": { "a": "a = b^a;", "b": "a^=a+b", "c": "a=a^+b;", "d": "a=a^b;" }, "answer": "d" },
  { "question_number": 32, "question": "There is a pointer variable named ptr of type float. Which type of variable address can be stored by ptr?", "options": { "a": "Int", "b": "Char", "c": "Float", "d": "double" }, "answer": "c" },
  { "question_number": 33, "question": "Compiler translates high language program into------ language code.", "options": { "a": "Java", "b": "Machine", "c": "C", "d": "C++" }, "answer": "b" },
  { "question_number": 34, "question": "From the following; which one is the correct syntax of an array declaration; array size is 5 and it is of float data type?", "options": { "a": "[5] float name;", "b": "float name [5];", "c": "Name[5]float;", "d": "float[5] name;" }, "answer": "b" },
  { "question_number": 35, "question": "The expression ((a + b) == 10) && ((X + Y) == 20) is true only if-----------.", "options": { "a": "((a + b) == 10) is true", "b": "Both ((a + b) == 10) and ((x + Y) == 20) are true", "c": "Either ((a + b) == 10) or ((X + Y) == 20) is true", "d": "((X + Y) == 20) is true" }, "answer": "b" },
  { "question_number": 36, "question": "In do while loop the condition is checked --------- one execution of loop.", "options": { "a": "During", "b": "Before", "c": "At any time", "d": "After" }, "answer": "d" },
  { "question_number": 37, "question": "To get the value stored at a memory address, we use the--------------.", "options": { "a": "Referencing operator", "b": "Binary operator", "c": "dereferencing operator", "d": "AND(&&) operator" }, "answer": "c" },
  { "question_number": 38, "question": "Following is the declaration of a ---------- array: int arr[2][2][2]", "options": { "a": "2-Dimensional", "b": "3-Dimensional", "c": "1-Dimensional", "d": "None of the given" }, "answer": "b" },
  { "question_number": 39, "question": "ofstream is used for __________.", "options": { "a": "Input file stream", "b": "Output file stream", "c": "Input and output file stream", "d": "All of the given" }, "answer": "b" },
  { "question_number": 40, "question": "Base address is the memory address of __________ element of an array.", "options": { "a": "1st", "b": "2nd", "c": "3rd", "d": "4th" }, "answer": "a" },
  { "question_number": 41, "question": "All elements of an array must be of __________ data type(s).", "options": { "a": "char and int", "b": "Same", "c": "Different", "d": "float and double" }, "answer": "b" },
  { "question_number": 42, "question": "eof is used to check for the __________ of file when a file is being read.", "options": { "a": "Start", "b": "End", "c": "Middle", "d": "Name" }, "answer": "b" },
  { "question_number": 43, "question": "While handling files, one can have __________ options.", "options": { "a": "read the file", "b": "write in some file", "c": "read and write in the same file", "d": "All of the given" }, "answer": "d" },
  { "question_number": 44, "question": "Which of the following is true about streams?\nA. It is a sequence of bytes\nB. It is an ordered sequence\nC. All bytes can go through the stream simultaneously\nD. Bytes that enters first into the stream will go out at last", "options": { "a": "A only", "b": "C only", "c": "A and B", "d": "A and D" }, "answer": "c" },
  { "question_number": 45, "question": "we have opened a file stream myfile for reading(getting), myfile.tellg() gives us the current get position of the file pointer. It returns a whole number of type __________.", "options": { "a": "long", "b": "int", "c": "short", "d": "double" }, "answer": "a" },
  { "question_number": 46, "question": "Null Character is represented by __________ in C++.", "options": { "a": "/0", "b": "\\0", "c": "\\n", "d": "\\t" }, "answer": "b" },
  { "question_number": 47, "question": "suppose we have int y[10]; To access the 4th element of the array we write.", "options": { "a": "y[4];", "b": "y[3];", "c": "y[2];", "d": "None of given" }, "answer": "b" },
  { "question_number": 48, "question": "What will be the size of the array declared as int array[1000];", "options": { "a": "999", "b": "1000", "c": "1001", "d": "1002" }, "answer": "b" },
  { "question_number": 49, "question": "__________ Returns true if c is a letter and false otherwise.", "options": { "a": "int isalpha(int c)", "b": "int isalnum(int c)", "c": "int isxdigit(int c)", "d": "int isdigit(int c)" }, "answer": "a" },
  { "question_number": 50, "question": "What will be the correct syntax of declaration of the following statement? \"ptr is a pointer to const int\"", "options": { "a": "int const* ptr", "b": "int * const ptr", "c": "const int * ptr", "d": "const * int ptr" }, "answer": "c" },
  { "question_number": 51, "question": "What will be the size of following array? int arr[29];", "options": { "a": "0", "b": "30", "c": "29", "d": "28" }, "answer": "c" },
  { "question_number": 52, "question": "Individual characters in a string stored in an array can be accessed directly using array __________.", "options": { "a": "superscript", "b": "script", "c": "subscript", "d": "value" }, "answer": "c" },
  { "question_number": 53, "question": "char **argv can be read as __________.", "options": { "a": "pointer to pointer", "b": "pointer to char", "c": "pointer to pointer to char", "d": "None of the given" }, "answer": "c" },
  { "question_number": 54, "question": "By default, the starting index of an array in C++ is __________ .", "options": { "a": "2", "b": "-1", "c": "0", "d": "1" }, "answer": "c" },
  { "question_number": 55, "question": "The ASCII code of null character is __________.", "options": { "a": "000", "b": "010", "c": "111", "d": "110" }, "answer": "a" },
  { "question_number": 56, "question": "To manipulate n-dimensional array __________ nested loops are required.", "options": { "a": "n-2", "b": "n-1", "c": "n+1", "d": "n" }, "answer": "d" },
  { "question_number": 57, "question": "dereferencing operator is represented by __________.", "options": { "a": "*", "b": "+", "c": "_", "d": "None of the given" }, "answer": "a" },
  { "question_number": 58, "question": "Given a two dimensional array of integers, what would be the correct way of assigning the value 6 to the element at third row and fourth column?", "options": { "a": "array[3][4]=6", "b": "array[2][4]=6", "c": "array[4][3]=6", "d": "array[2][3]=6" }, "answer": "d" },
  { "question_number": 59, "question": "Which of the following is true about streams?\nA. It is a sequence of bytes\nB. It is an ordered sequence\nC. All bytes can go through the stream simultaneously\nD. Bytes that enters first into the stream will go out at last", "options": { "a": "A only", "b": "C only", "c": "A and B", "d": "A and D" }, "answer": "c" }
])},

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
