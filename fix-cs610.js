const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/examPracticeData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Map to convert letter-based answers to array indices
const answerMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };

// Find and fix CS610 practice 02 (id: 29)
// Replace all questions with object-based options to array-based options

// Define the fixed questions array for CS610 practice 02
const fixedCS610Questions = [
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
  {"question": "Which of the following statement is true regarding Jitter?", "options": ["Jitter is used for variance in transmission delays.", "Jitter can occur when a packet is delayed.", "Jitter is significance for voice, video and data", "All of the above"], "correct": 3},
  {"question": "Which of the following is a benefit of source independence?", "options": ["It allows fast and efficient routing", "Packet switch do not need to have complete information about all destinations", "Network functions even if topology changes", "All of the above"], "correct": 3},
  {"question": "The term signaling is used to describe __________.", "options": ["Communication about the internet", "Communication about the extranet", "Communication about the network", "None of above"], "correct": 2},
  {"question": "No error detection scheme is perfect because transmission errors can affect the additional information as well as the data.", "options": ["True", "False"], "correct": 0},
  {"question": "------ Program sends a message to a remote computer and reports whether the computer responds.", "options": ["Ping", "Traceroute", "ICMP", "Non of the given"], "correct": 0},
  {"question": "---------- was especially concerned about the lack of high powered computers.", "options": ["ARPA", "IEEE", "EIA", "Non of the given"], "correct": 0},
  {"question": "The term --------- is used to denote the definition of a packet used with a specific type of network.", "options": ["Packet", "Frame", "Data", "None of the given"], "correct": 1},
  {"question": "Computer networks are often called --------------- because they use packet technology.", "options": ["Ethernet", "Switch networks", "Packet networks", "None of the given"], "correct": 2},
  {"question": "-------------- have advantages arisen from the size and ease of computation.", "options": ["CRC", "Parity", "Checksums", "None of given"], "correct": 1},
  {"question": "Most LANs that employ ring topology use an access mechanism known as-------", "options": ["CSMA/CD", "CSMA/CA", "TOKEN PASSING", "None of the given"], "correct": 2},
  {"question": "IEEE LLC/SNAP header is -------- , which is used to specify the type of data.", "options": ["8 octets", "8 bytes", "8 bits", "None of the given"], "correct": 0},
  {"question": "Formally named informally known as the twisted pair Ethernet or TP Ethernet.", "options": ["10 Base 2", "10 Base 5", "10 Base T", "None of the given"], "correct": 2},
  {"question": "An interface for twisted pair Ethernet must have an connector , and must generate signals according to the specification.", "options": ["RJ-45, 10 Base T", "RJ-45, 10 Base 5", "BNC, 10 Base 2", "BNC, 10 Base T"], "correct": 0},
  {"question": "A bridges function in the layers(s).", "options": ["Physical (MAC)", "Data link", "Network", "Physical (MAC) and Data link"], "correct": 3},
  {"question": "A Bridge can", "options": ["Filter a frame", "Forward a frame", "Extend a LAN", "Do all the above"], "correct": 3},
  {"question": "A Bridge forwards or filters a frame by comparing the information in its address table to the frame's", "options": ["Layer 2 source address", "Source node's physical address", "Layer 2 destination address", "Layer 3 destination address"], "correct": 2},
  {"question": "computes shortest paths in a graph by using weights on edges as a measure of distance.", "options": ["Greedy algorithm", "Distance vector algorithm", "Dijksta's algorithm", "Non of the given"], "correct": 2},
  {"question": "is used for audio and video, since these have predefined maximum data rates", "options": ["Constant Bit Rate (CBR) service", "Variable Bit Rate (VBR) service", "Available Bit Rate (ABR) service", "None of the given"], "correct": 0},
  {"question": "Unlike Frame Relay and ATM, SMDS (Switched multi-megabit Data service) offers .", "options": ["Connectionless service paradigm", "Connection oriented service paradigm", "Both Connectionless and Connection-oriented service paradigm", "None of the given"], "correct": 0},
  {"question": "A network with throughput T and delay D has a total of bit in transit at any time.", "options": ["T / D", "T x D", "T + D", "None of the given"], "correct": 1},
  {"question": "ATM is designed to work on .", "options": ["Twisted Pair", "Coaxial", "Radio Frequency", "Fiber"], "correct": 3},
  {"question": "Computers attached to an Ethernet use ------ in which a computer waits for the ether to be idle before transmitting a frame.", "options": ["CSMA/CD", "CSMA/CA", "TOKEN PASSING", "None of the given"], "correct": 0},
  {"question": "FDDI can transmits data at a rate of ----------", "options": ["100 million bits per second", "10 million bits per second", "1000 million bits per second", "None of the given"], "correct": 0},
  {"question": "In Point-to-Point topology there are two topologies.", "options": ["Star and Tree", "Tree and Ring", "Star and Ring", "Star and Tree (Page 5)"], "correct": 0},
  {"question": "------ Program sends a message to a remote computer and reports whether the computer responds.", "options": ["Ping", "Traceroute", "ICMP", "Non of the given"], "correct": 0},
  {"question": "------ has no way to determine the cause of the problem.", "options": ["ICMP", "Ping", "Trace route", "Non of the given"], "correct": 1},
  {"question": "The term ------------- refers to the general concept of a small block of data", "options": ["Packet", "Frame", "Data", "None of the given"], "correct": 0},
  {"question": "---------- scheme, which is designed to help detect transmissions errors, send one extra bit of information with each character", "options": ["Parity", "Checksums", "CRC", "None of given"], "correct": 0},
  {"question": "Local Talk is a LAN technology that employs -------------", "options": ["Bus topology", "Ring topology", "Star topology", "None of the given"], "correct": 0},
  {"question": "Most LANs that employ ring topology use an access mechanism known as-------", "options": ["CSMA/CD", "CSMA/CA", "TOKEN PASSING", "None of the given"], "correct": 2},
  {"question": "Ethernet uses a ------- bit static addressing scheme in which each device is assigned a unique address by the manufacturer.", "options": ["64", "48", "32", "8"], "correct": 1},
  {"question": "Formally named informally known as the thick wire Ethernet or Thick net.", "options": ["10 Base 2", "10 Base 5", "10 Base T", "None of the given"], "correct": 1},
  {"question": "Formally named informally known as the twisted pair Ethernet or TP Ethernet.", "options": ["10 Base 2", "10 Base 5", "10 Base T", "None of the given"], "correct": 2},
  {"question": "The maximum size of an Ethernet segment is", "options": ["250 meters", "500 meters", "700 meters", "None of the given"], "correct": 1},
  {"question": "A Bridge can", "options": ["Filter a frame", "Forward a frame", "Extend a LAN", "Do all the above"], "correct": 3},
  {"question": "computes shortest paths in a graph by using weights on edges as a measure of distance.", "options": ["Greedy algorithm", "Distance vector algorithm", "Dijksta's algorithm", "None of the given"], "correct": 2},
  {"question": "is used for compressed audio and video where the data rate depends on the level of compression that can be achieved.", "options": ["Constant Bit Rate (CBR) service", "Variable Bit Rate (VBR) service", "Available Bit Rate (ABR) service", "None of the given"], "correct": 1},
  {"question": "Basic LAN technologies such as Ethernet, Token Ring, and FDDI use a .", "options": ["Connectionless service paradigm", "Connection-oriented service paradigm", "Both Connectionless and Connection-oriented service paradigm", "None of the given"], "correct": 0},
  {"question": "The product of delay and throughput measures the of data that can be present on the network.", "options": ["Area", "Volume", "Length", "None of the given"], "correct": 1},
  {"question": "A network with throughput T and delay D has a total of bit in transit at any time.", "options": ["T / D", "T x D", "T + D", "None of the given"], "correct": 1},
  {"question": "One repeater two repeaters the maximum cable length limitation.", "options": ["doubles, triple", "square roots, cude roots", "and, triple", "doubles, cancel"], "correct": 0},
  {"question": "A network uses a------- if all computers attach to a central point", "options": ["Star Topology", "Ring Topology", "Bus Topology", "None of the given"], "correct": 0},
  {"question": "Computers attached to an Ethernet use ------- in which a computer waits for the other to be idle before transmitting a frame.", "options": ["CSMA/CD", "CSMA/CA", "TOKEN PASSING", "None of the given"], "correct": 0}
];

// Find the CS610 practice 02 entry and replace it
const startMarker = '{ id: 29, code: \'CS610\', title: \'Computer Science 610 midterm free mock test practice 02\'';
const startIdx = content.indexOf(startMarker);

if (startIdx !== -1) {
  // Find the end of this object (next entry with id: 30 or the closing ])
  const endMarkerIdx = content.indexOf('{ id: 30,', startIdx);
  const closingBracketIdx = content.indexOf('];', startIdx);
  
  let endIdx = endMarkerIdx !== -1 ? endMarkerIdx : closingBracketIdx;
  
  // Back up to find the },  before the next object
  endIdx = content.lastIndexOf('},', endIdx) + 2;
  
  // Create the replacement entry
  const replacement = `{ id: 29, code: 'CS610', title: 'Computer Science 610 midterm free mock test practice 02', category: 'cs', image: '💻', questions: ${JSON.stringify(fixedCS610Questions, null, 2)}},`;
  
  // Replace the broken entry
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ Fixed CS610 practice 02 test data');
} else {
  console.error('✗ Could not find CS610 practice 02 entry');
}
