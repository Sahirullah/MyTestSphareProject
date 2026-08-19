import { Links } from "react-router-dom";

export const midtermData = [
  // ACC - Accounting
  { id: 1, code: 'ACC311', title: 'Fundamentals of Auditing', category: 'acc', image: '📘' },
  { id: 2, code: 'ACC501', title: 'Business Finance', category: 'acc', image: '📘' },
  

  // BIF - Bioinformatics
  { id: 3, code: 'BIF101', title: 'Cell Biology', category: 'bif', image: '🧬' },
  { id: 4, code: 'BIF401', title: 'Bioinformatics-I', category: 'bif', image: '🧬' },
  { id: 5, code: 'BIF402', title: 'Ethical & Legal Issues in Bioinformatics', category: 'bif', image: '🧬' },
  { id: 6, code: 'BIF501', title: 'Bioinformatics-II', category: 'bif', image: '🧬' },
  { id: 7, code: 'BIF601', title: 'Bioinformatics Computing I', category: 'bif', image: '🧬' },
  { id: 8, code: 'BIF602', title: 'Bioinformatics Computing II', category: 'bif', image: '🧬' },
  { id: 9, code: 'BIF731', title: 'Advanced Bioinformatics', category: 'bif', image: '🧬' },
  
  // BIO - Biology
  { id: 10, code: 'BIO101', title: 'Basic Biology I', category: 'bio', image: '🧪' },
  { id: 11, code: 'BIO102', title: 'Basic Biology II', category: 'bio', image: '🧪' },
  { id: 12, code: 'BIO201', title: 'Cell Biology', category: 'bio', image: '🧪' },
  { id: 13, code: 'BIO202', title: 'Biochemistry I', category: 'bio', image: '🧪' },
  { id: 14, code: 'BIO203', title: 'Methods in Molecular Biology', category: 'bio', image: '🧪' },
  { id: 15, code: 'BIO204', title: 'Principles of Biochemical Engineering', category: 'bio', image: '🧪' },
  { id: 16, code: 'BIO301', title: 'Essentials of Genetics', category: 'bio', image: '🧪' },
  { id: 17, code: 'BIO302', title: 'Molecular Biology', category: 'bio', image: '🧪' },
  { id: 18, code: 'BIO303', title: 'Biochemistry II', category: 'bio', image: '🧪' },
  { id: 19, code: 'BIO401', title: 'Biostatistics', category: 'bio', image: '🧪' },
  { id: 20, code: 'BIO502', title: 'Genomics', category: 'bio', image: '🧪' },
  { id: 21, code: 'BIO503', title: 'Biological Physics', category: 'bio', image: '🧪' },
  { id: 22, code: 'BIO504T', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' },
  { id: 23, code: 'BIO505T', title: 'Essentials of Genetics (Theory)', category: 'bio', image: '🧪' },
  { id: 24, code: 'BIO506T', title: 'Biochemistry II (Theory)', category: 'bio', image: '🧪' },
  { id: 25, code: 'BIO732', title: 'Gene Manipulation & Genetic Engineering', category: 'bio', image: '🧪' },
  { id: 26, code: 'BIO734', title: 'Advance Cell Biology', category: 'bio', image: '🧪' },
  
  // BNK - Banking
  { id: 27, code: 'BNK601', title: 'Banking Laws & Practices', category: 'bnk', image: '💼' },
  { id: 28, code: 'BNK603', title: 'Consumer Banking', category: 'bnk', image: '💼' },
  { id: 29, code: 'BNK604', title: 'Management of Financial Institutions', category: 'bnk', image: '💼' },
  { id: 30, code: 'BNK610', title: 'Islamic Banking Practices', category: 'bnk', image: '💼' },
  
  // BT - Biotechnology
  { id: 31, code: 'BT101', title: 'Ecology, Biodiversity & Evolution-I', category: 'bt', image: '🧬' },
  { id: 32, code: 'BT102', title: 'Microbiology', category: 'bt', image: '🧬' },
  { id: 33, code: 'BT201', title: 'Ecology, Biodiversity & Evolution-II', category: 'bt', image: '🧬' },
  { id: 34, code: 'BT302', title: 'Immunology', category: 'bt', image: '🧬' },
  { id: 35, code: 'BT401', title: 'Genetic Resources & Conservation', category: 'bt', image: '🧬' },
  { id: 36, code: 'BT402', title: 'Microbial Biotechnology', category: 'bt', image: '🧬' },
  { id: 37, code: 'BT404', title: 'Food Biotechnology', category: 'bt', image: '🧬' },
  { id: 38, code: 'BT405', title: 'Nano Biotechnology', category: 'bt', image: '🧬' },
  { id: 39, code: 'BT406', title: 'Research Methodology & Skill Enhancement', category: 'bt', image: '🧬' },
  { id: 40, code: 'BT501', title: 'Health Biotechnology', category: 'bt', image: '🧬' },
  { id: 41, code: 'BT503', title: 'Environment Biotechnology', category: 'bt', image: '🧬' },
  { id: 42, code: 'BT504', title: 'Genomics and Proteomics', category: 'bt', image: '🧬' },
  { id: 43, code: 'BT505', title: 'Biosensors', category: 'bt', image: '🧬' },
  { id: 44, code: 'BT511T', title: 'Introduction to Biotechnology (Theory)', category: 'bt', image: '🧬' },
  { id: 45, code: 'BT601', title: 'Virology', category: 'bt', image: '🧬' },
  { id: 46, code: 'BT603', title: 'Fermentation Technology', category: 'bt', image: '🧬' },
  { id: 47, code: 'BT605', title: 'Biosafety & Bioethics', category: 'bt', image: '🧬' },
  
  // CHE - Chemistry
  { id: 48, code: 'CHE201', title: 'Thermodynamics', category: 'che', image: '⚗️' },
  { id: 49, code: 'CHE301', title: 'Analytical Chemistry & Instrumentation', category: 'che', image: '⚗️' },
];

export const midtermDataPart2 = [
  // CS - Computer Science (50-102)
  { id: 50, code: 'CS001', title: 'Computer Proficiency License', category: 'cs', image: '💻' },
  { id: 51, code: 'CS101', title: 'Introduction to Computing', category: 'cs', image: '💻' },
  { id: 52, code: 'CS201', title: 'Introduction to Programming', category: 'cs', image: '💻' },
  { id: 53, code: 'CS202', title: 'Fundamentals of Front End Development', category: 'cs', image: '💻' },
  { id: 54, code: 'CS204', title: 'Cyber Law', category: 'cs', image: '💻' },
  { id: 55, code: 'CS205', title: 'Information Security', category: 'cs', image: '💻' },
  { id: 56, code: 'CS206', title: 'Introduction to Network Design & Analysis', category: 'cs', image: '💻' },
  { id: 57, code: 'CS301', title: 'Data Structures', category: 'cs', image: '💻' },
  { id: 58, code: 'CS302', title: 'Digital Logic and Design', category: 'cs', image: '💻' },
  { id: 59, code: 'CS304', title: 'Object Oriented Programming', category: 'cs', image: '💻' },
  { id: 60, code: 'CS310', title: 'Open Source Web Application Development', category: 'cs', image: '💻' },
  { id: 61, code: 'CS311', title: 'Introduction to Web Services Development', category: 'cs', image: '💻' },
  { id: 62, code: 'CS312', title: 'Database Modeling and Design', category: 'cs', image: '💻' },
  { id: 63, code: 'CS401', title: 'Computer Architecture & Assembly Language Programming', category: 'cs', image: '💻' },
  { id: 64, code: 'CS402', title: 'Theory of Automata', category: 'cs', image: '💻' },
  { id: 65, code: 'CS403', title: 'Database Management System', category: 'cs', image: '💻' },
  { id: 66, code: 'CS407', title: 'Routing and Switching', category: 'cs', image: '💻' },
  { id: 67, code: 'CS408', title: 'Human Computer Interaction', category: 'cs', image: '💻' },
  { id: 68, code: 'CS411', title: 'Visual Programming', category: 'cs', image: '💻' },
  { id: 69, code: 'CS432', title: 'Network Modeling and Simulation', category: 'cs', image: '💻' },
  { id: 70, code: 'CS435', title: 'Cloud Computing', category: 'cs', image: '💻' },
  { id: 71, code: 'CS501', title: 'Advanced Computer Architecture', category: 'cs', image: '💻' },
  { id: 72, code: 'CS502', title: 'Fundamentals of Algorithms', category: 'cs', image: '💻' },
  { id: 73, code: 'CS504', title: 'Software Engineering I', category: 'cs', image: '💻' },
  { id: 74, code: 'CS506', title: 'Web Design and Development', category: 'cs', image: '💻' },
  { id: 75, code: 'CS507', title: 'Information Systems', category: 'cs', image: '💻' },
  { id: 76, code: 'CS508', title: 'Modern Programming Languages', category: 'cs', image: '💻' },
  { id: 77, code: 'CS601', title: 'Data Communication', category: 'cs', image: '💻' },
  { id: 78, code: 'CS602', title: 'Computer Graphics', category: 'cs', image: '💻' },
  { id: 79, code: 'CS604', title: 'Operating Systems', category: 'cs', image: '💻' },
  { id: 80, code: 'CS605', title: 'Software Engineering II', category: 'cs', image: '💻' },
  { id: 81, code: 'CS606', title: 'Compiler Construction', category: 'cs', image: '💻' },
  { id: 82, code: 'CS607', title: 'Artificial Intelligence', category: 'cs', image: '💻' },
  { id: 83, code: 'CS609', title: 'System Programming', category: 'cs', image: '💻' },
  { id: 84, code: 'CS610', title: 'Computer Networks', category: 'cs', image: '💻' },
  { id: 85, code: 'CS611', title: 'Software Quality Engineering', category: 'cs', image: '💻' },
  { id: 86, code: 'CS614', title: 'Data Warehousing', category: 'cs', image: '💻' },
  { id: 87, code: 'CS615', title: 'Software Project Management', category: 'cs', image: '💻' },
  { id: 88, code: 'CS619', title: 'Final Project (Helping Material)', category: 'cs', image: '💻' },
  { id: 89, code: 'CS625', title: 'Professional Practices', category: 'cs', image: '💻' },
  { id: 90, code: 'CS701', title: 'Theory of Computation', category: 'cs', image: '💻' },
  { id: 91, code: 'CS702', title: 'Advanced Algorithms Analysis & Design', category: 'cs', image: '💻' },
  { id: 92, code: 'CS703', title: 'Advanced Operating Systems', category: 'cs', image: '💻' },
  { id: 93, code: 'CS704', title: 'Advanced Computer Architecture II', category: 'cs', image: '💻' },
  { id: 94, code: 'CS706', title: 'Software Quality Assurance', category: 'cs', image: '💻' },
  { id: 95, code: 'CS707', title: 'Network Security', category: 'cs', image: '💻' },
  { id: 96, code: 'CS708', title: 'Software Requirement Engineering', category: 'cs', image: '💻' },
  { id: 97, code: 'CS710', title: 'Mobile & Pervasive Computing', category: 'cs', image: '💻' },
  { id: 98, code: 'CS711', title: 'Software Design', category: 'cs', image: '💻' },
  { id: 99, code: 'CS712', title: 'Distributed DBMS', category: 'cs', image: '💻' },
  { id: 100, code: 'CS718', title: 'Wireless Networks', category: 'cs', image: '💻' },
  { id: 101, code: 'CS724', title: 'Software Process Improvement', category: 'cs', image: '💻' },
  { id: 102, code: 'CS726', title: 'Information Retrieval Techniques', category: 'cs', image: '💻' },
];

export const midtermDataPart3 = [
  // ECO - Economics
  { id: 103, code: 'ECO401', title: 'Economics', category: 'eco', image: '📊' },
  { id: 104, code: 'ECO402', title: 'Microeconomics', category: 'eco', image: '📊' },
  { id: 105, code: 'ECO403', title: 'Macroeconomics', category: 'eco', image: '📊' },
  { id: 106, code: 'ECO404', title: 'Managerial Economics', category: 'eco', image: '📊' },
  { id: 107, code: 'ECO501', title: 'Development Economics', category: 'eco', image: '📊' },
  { id: 108, code: 'ECO601', title: 'Business Econometrics', category: 'eco', image: '📊' },
  { id: 109, code: 'ECO606', title: 'Mathematical Economics I', category: 'eco', image: '📊' },
  { id: 110, code: 'ECO607', title: 'Mathematical Economics II', category: 'eco', image: '📊' },
  { id: 111, code: 'ECO612', title: 'Population Economics', category: 'eco', image: '📊' },
  { id: 112, code: 'EDU101', title: 'Education Course', category: 'edu', image: '🎓' },
  { id: 113, code: 'EDU201', title: 'Education Course', category: 'edu', image: '🎓' },
  { id: 114, code: 'EDU301', title: 'Education Course', category: 'edu', image: '🎓' },
  { id: 115, code: 'ENG001', title: 'English Course', category: 'eng', image: '📚' },
  { id: 116, code: 'ENG101', title: 'English Course', category: 'eng', image: '📚' },
  { id: 117, code: 'ENG201', title: 'English Course', category: 'eng', image: '📚' },
  { id: 118, code: 'ETH201', title: 'Ethics (For Non-Muslims)', category: 'eth', image: '🧠' },
  { id: 119, code: 'ETH202', title: 'Ethics (For Non-Muslims)', category: 'eth', image: '🧠' },
  { id: 120, code: 'FIN611', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 121, code: 'FIN621', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 122, code: 'FIN622', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 123, code: 'FIN623', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 124, code: 'FIN624', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 125, code: 'FIN625', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 126, code: 'GSC101', title: 'General Science', category: 'gsc', image: '🌍' },
  { id: 127, code: 'GSC201', title: 'Teaching of General Science', category: 'gsc', image: '🌍' },
  { id: 128, code: 'HRM613', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 129, code: 'HRM617', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 130, code: 'HRM623', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 131, code: 'HRM624', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 132, code: 'HRM628', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 133, code: 'ISL201', title: 'Islamic Studies', category: 'isl', image: '📿' },
  { id: 134, code: 'ISL202', title: 'Islamic Studies', category: 'isl', image: '📿' },
  { id: 135, code: 'IT430', title: 'E-Commerce', category: 'it', image: '🌐' },
  { id: 136, code: 'MCM101', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 137, code: 'MCM301', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 138, code: 'MCM304', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 139, code: 'MCM310', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 140, code: 'MCM311', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 141, code: 'MCM401', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 142, code: 'MCM404', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 143, code: 'MCM411', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 144, code: 'MCM431', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 145, code: 'MCM511', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 146, code: 'MCM516', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 147, code: 'MCM517', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 148, code: 'MCM520', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 149, code: 'MCM531', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 150, code: 'MCM601', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 151, code: 'MCM604', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 152, code: 'MCM610', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 153, code: 'MGMT611', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 154, code: 'MGMT614', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 155, code: 'MGMT622', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 156, code: 'MGMT623', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 157, code: 'MGMT625', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 158, code: 'MGMT627', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 159, code: 'MGMT628', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 160, code: 'MGMT629', title: 'Management Course', category: 'mgmt', image: '📋' },
  { id: 161, code: 'MGMT630', title: 'Management Course', category: 'mgmt', image: '📋' },
];

export const midtermDataPart4 = [
  // MGT - Business & Management
  { id: 162, code: 'MGT101', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 163, code: 'MGT111', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 164, code: 'MGT201', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 165, code: 'MGT211', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 166, code: 'MGT301', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 167, code: 'MGT401', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 168, code: 'MGT402', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 169, code: 'MKT501', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 170, code: 'MKT530', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 171, code: 'MKT610', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 172, code: 'MKT611', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 173, code: 'MKT621', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 174, code: 'MKT624', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 175, code: 'MKT625', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 176, code: 'MTH001', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 177, code: 'MTH101', title: 'Calculus and Analytical Geometry', category: 'mth', image: '📐' },
  { id: 178, code: 'MTH102', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 179, code: 'MTH104', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 180, code: 'MTH202', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 181, code: 'MTH301', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 182, code: 'MTH302', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 183, code: 'MTH641', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 184, code: 'MTH642', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 185, code: 'MTH643', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 186, code: 'MTH645', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 187, code: 'MTH646', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 188, code: 'MTH647', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 189, code: 'PAD603', title: 'Governance, Democracy & Society', category: 'pad', image: '📜' },
  { id: 190, code: 'PAK301', title: 'Pakistan Studies', category: 'pak', image: '🇵🇰' },
  { id: 191, code: 'PAK302', title: 'Pakistan Studies', category: 'pak', image: '🇵🇰' },
  { id: 192, code: 'PHY101', title: 'Physics', category: 'phy', image: '⚛️' },
  { id: 193, code: 'PHY301', title: 'Circuit Theory', category: 'phy', image: '⚛️' },
  { id: 194, code: 'PSC201', title: 'Political Science Course', category: 'psc', image: '🗳️' },
  { id: 195, code: 'PSC401', title: 'Political Science Course', category: 'psc', image: '🗳️' },
  { id: 196, code: 'PSY101', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 197, code: 'PSY401', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 198, code: 'PSY404', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 199, code: 'PSY405', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 200, code: 'PSY502', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 201, code: 'PSY504', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 202, code: 'PSY510', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 203, code: 'PSY512', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 204, code: 'PSY513', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 205, code: 'PSY514', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 206, code: 'PSY515', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 207, code: 'PSY610', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 208, code: 'PSY631', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 209, code: 'PSY632', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 210, code: 'SOC101', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 211, code: 'SOC301', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 212, code: 'SOC302', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 213, code: 'SOC401', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 214, code: 'SOC402', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 215, code: 'SOC403', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 216, code: 'SOC404', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 217, code: 'SOC602', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 218, code: 'STA301', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 219, code: 'STA404', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 220, code: 'STA406', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 221, code: 'STA630', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 222, code: 'STA641', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 223, code: 'STA642', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 224, code: 'URD101', title: 'Urdu', category: 'urd', image: '📜' },
  { id: 225, code: 'ZOO101', title: 'Biological Techniques', category: 'zoo', image: '🐾' },
  { id: 226, code: 'ZOO201', title: 'Animal Diversity', category: 'zoo', image: '🐾' },
  { id: 227, code: 'ZOO202', title: 'Animal Diversity: Chordates', category: 'zoo', image: '🐾' },
  { id: 228, code: 'ZOO301', title: 'Animal Form & Function-I', category: 'zoo', image: '🐾' },
  { id: 229, code: 'ZOO302', title: 'Animal Form & Function-II', category: 'zoo', image: '🐾' },
  { id: 230, code: 'ZOO303', title: 'Animal Physiology', category: 'zoo', image: '🐾' },
  { id: 231, code: 'ZOO304', title: 'Animal Behavior', category: 'zoo', image: '🐾' },
  { id: 232, code: 'ZOO305', title: 'Field Ecology', category: 'zoo', image: '🐾' },
  { id: 233, code: 'ZOO306', title: 'Bioinformatics in Zoology', category: 'zoo', image: '🐾' },
  { id: 234, code: 'ZOO401', title: 'Endocrine Physiology', category: 'zoo', image: '🐾' },
  { id: 235, code: 'ZOO501', title: 'Molecular Endocrinology', category: 'zoo', image: '🐾' },
  { id: 236, code: 'ZOO502', title: 'Evolutionary Biology', category: 'zoo', image: '🐾' },
  { id: 237, code: 'ZOO511', title: 'Genetic Techniques', category: 'zoo', image: '🐾' },
  { id: 238, code: 'ZOO512', title: 'Animal Diversity: Invertebrates', category: 'zoo', image: '🐾' },
];

export const nmdcatpastpaper = [
  // NMDCAT - National Medical & Dental College Admission Test
  { id: 1, code: 'NMDCAT', title: 'NMDCAT past paper 2018', category: 'nmdcat', image: '🩺' },
  { id: 2, code: 'NMDCAT', title: 'NMDCAT Preparation', category: 'nmdcat', image: '🩺' },
  
  // ETEA - Entry Test Engineering & Technology
  { id: 3, code: 'ETEA', title: 'ETEA Past Papers', category: 'etea', image: '⚙️' },
  
  // IELTS - International English Language Testing System
  { id: 4, code: 'IELTS', title: 'IELTS Practice Tests', category: 'ielts', image: '🌍' },
  
  // TOEFL - Test of English as a Foreign Language
  { id: 5, code: 'TOEFL', title: 'TOEFL Preparation', category: 'toefl', image: '📖' },
  
  // GRE - Graduate Record Examination
  { id: 6, code: 'GRE', title: 'GRE Practice Tests', category: 'gre', image: '📚' },
  
  // GMAT - Graduate Management Admission Test
  { id: 7, code: 'GMAT', title: 'GMAT Preparation', category: 'gmat', image: '💼' },
  
  // MCAT - Medical College Admission Test
  { id: 8, code: 'MCAT', title: 'MCAT Practice Materials', category: 'mcat', image: '🏥' },
  
  // ACT - American College Test
  { id: 9, code: 'ACT', title: 'ACT Preparation', category: 'act', image: '🎓' },
  
  // UCAT - University Clinical Aptitude Test
  { id: 10, code: 'UCAT', title: 'UCAT Practice Tests', category: 'ucat', image: '👨‍⚕️' },
  
  // JEE - Joint Entrance Examination
  { id: 11, code: 'JEE', title: 'JEE Practice Materials', category: 'jee', image: '🔬' },
  
  // NEET - National Eligibility cum Entrance Test
  { id: 12, code: 'NEET', title: 'NEET Preparation', category: 'neet', image: '🩺' },
  
  // GATE - Graduate Aptitude Test in Engineering
  { id: 13, code: 'GATE', title: 'GATE Practice Tests', category: 'gate', image: '🏗️' },

  //Islamabad Police 
  //Islamabad Police ASI 
  {id: 14, code: 'ISLAMABAD_POLICE', title: 'Islamabad Police ASI Past Papers', category: 'police', image: '👮',links:[
    'https://drive.google.com/file/d/1CxqIz9z1AlPlnGO9D5FQKG1IYEGZgdVE/view?usp=sharing',
    'https://drive.google.com/file/d/1pcQRclDF11v6rnO1F2PCJHUDmAk-b120/view?usp=sharing'
  ]},

  //Islamabad Police constable
  {id: 14, code: 'ISLAMABAD_POLICE', title: 'Islamabad Police constable Past Papers', category: 'police', image: '👮',links:[
    'https://drive.google.com/file/d/1uzyC7M_3JoaaMS07vZanjsVukrCqwaUP/view?usp=sharing',
    'https://drive.google.com/file/d/1utciQ1kJw42kr2Bz4prwnlIxTQMwem3m/view?usp=sharing',
    'https://drive.google.com/file/d/1b4I5OeJ8Mi33nLgHWcpUCdzt7I0jhWmu/view?usp=sharing',
    'https://drive.google.com/file/d/1zDyJjnCn2ZXWmh2kALJ4ensZdSswxXf4/view?usp=sharing'
  ]},

  //Islamabad Police LDC
  {id: 14, code: 'ISLAMABAD_POLICE', title: 'Islamabad Police LDC Past Papers', category: 'police', image: '👮',links:[
    'https://drive.google.com/file/d/15KJU4-9ByLVRa6-zy8MP6KATtH68L9Ch/view?usp=sharing'
  ]},

  //Islamabad Police UDC
  {id: 14, code: 'ISLAMABAD_POLICE', title: 'Islamabad Police LDC Past Papers', category: 'police', image: '👮',links:[
    'https://drive.google.com/file/d/1zdlFuDe_bNqd5EggrnHgP69541E-SCht/view?usp=sharing'
  ]},
];

export const allMidtermData = [
  ...midtermData,
  ...midtermDataPart2,
  ...midtermDataPart3,
  ...midtermDataPart4,
  ...nmdcatpastpaper,
];

export const midtermCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'act', name: 'ACT - American College Test' },
  { id: 'bif', name: 'BIF - Bioinformatics' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'bnk', name: 'BNK - Banking' },
  { id: 'bt', name: 'BT - Biotechnology' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'eco', name: 'ECO - Economics' },
  { id: 'edu', name: 'EDU - Education' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'etea', name: 'ETEA - Entry Test Engineering & Technology' },
  { id: 'eth', name: 'ETH - Ethics' },
  { id: 'fin', name: 'FIN - Finance' },
  { id: 'gate', name: 'GATE - Graduate Aptitude Test in Engineering' },
  { id: 'gmat', name: 'GMAT - Graduate Management Admission Test' },
  { id: 'gre', name: 'GRE - Graduate Record Examination' },
  { id: 'gsc', name: 'GSC - General Science' },
  { id: 'hrm', name: 'HRM - Human Resource Management' },
  { id: 'ielts', name: 'IELTS - International English Language Testing System' },
  { id: 'isl', name: 'ISL - Islamic Studies' },
  { id: 'it', name: 'IT - Information Technology' },
  { id: 'jee', name: 'JEE - Joint Entrance Examination' },
  { id: 'mcat', name: 'MCAT - Medical College Admission Test' },
  { id: 'mcm', name: 'MCM - Mass Communication' },
  { id: 'mgmt', name: 'MGMT - Management' },
  { id: 'mgt', name: 'MGT - Business & Management' },
  { id: 'mkt', name: 'MKT - Marketing' },
  { id: 'mth', name: 'MTH - Mathematics' },
  { id: 'neet', name: 'NEET - National Eligibility cum Entrance Test' },
  { id: 'nmdcat', name: 'NMDCAT - National Medical & Dental College Admission Test' },
  { id: 'pad', name: 'PAD - Public Administration' },
  { id: 'pak', name: 'PAK - Pakistan Studies' },
  { id: 'phy', name: 'PHY - Physics' },
  { id: 'police', name: 'POLICE - Islamabad police past papers'},
  { id: 'psc', name: 'PSC - Political Science' },
  { id: 'psy', name: 'PSY - Psychology' },
  { id: 'soc', name: 'SOC - Sociology' },
  { id: 'sta', name: 'STA - Statistics' },
  { id: 'toefl', name: 'TOEFL - Test of English as a Foreign Language' },
  { id: 'ucat', name: 'UCAT - University Clinical Aptitude Test' },
  { id: 'urd', name: 'URD - Urdu' },
  { id: 'zoo', name: 'ZOO - Zoology' },
];