import { Link, Links } from "react-router-dom";

export const finalTermData = [
  // ACC - Accounting
  { id: 1, code: 'ACC311', title: 'Fundamentals of Auditing', category: 'acc', image: '📘',links :[
    'https://drive.google.com/file/d/1pniKI0Zn2RUI2m1cROG5QV9TtzUnQF3t/view?usp=sharing'
  ]},
  { id: 2, code: 'ACC501', title: 'Business Finance', category: 'acc', image: '📘',links :[
    'https://drive.google.com/file/d/1Z9kO5hXTrXFBPaYD_jclvji7lNspbt7p/view?usp=sharing',
    'https://drive.google.com/file/d/1oVx3694iCnM-u5ZPHfG-nJfQkd09AEKd/view?usp=sharing'
  ] },
  
  // BIF - Bioinformatics
  { id: 3, code: 'BIF101', title: 'Cell Biology', category: 'bif', image: '🧬' ,Link:''},
  { id: 4, code: 'BIF401', title: 'Bioinformatics-I', category: 'bif', image: '🧬' ,links :[
    'https://docs.google.com/document/d/1hjLw6Jzw3rOb5vpVxlU4YO3coPrnpt1a/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1RAuP9xX8XrXutkqq0C3r6TouTYlBQ8dy/view?usp=sharing'
  ]},
  { id: 5, code: 'BIF402', title: 'Ethical & Legal Issues in Bioinformatics', category: 'bif', image: '🧬',links:[
    'https://docs.google.com/document/d/1CD44mp3vjH6Et-2Rd2ewGyBoY-o7FS-i/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 6, code: 'BIF501', title: 'Bioinformatics-II', category: 'bif', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1VKoZSH_UwsavKZVGm893QxJcpz0uuYsG/view?usp=sharing',
    'https://docs.google.com/presentation/d/1oO28hfGrotVyLTr6_d8JWMyGyJkG9Bmf/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 7, code: 'BIF601', title: 'Bioinformatics Computing I', category: 'bif', image: '🧬',Link:'' },
  { id: 8, code: 'BIF602', title: 'Bioinformatics Computing II', category: 'bif', image: '🧬' ,Link:''},
  { id: 9, code: 'BIF731', title: 'Advanced Bioinformatics', category: 'bif', image: '🧬' ,links:[
    'https://docs.google.com/document/d/1GLLCaKTGEW4klk1PCFYOM1_mYB4n7Y4r/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1dpq9bGslQ68sGAl4kBE5liyxL7YApqMa/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 10, code: 'BIF732', title: 'Bioinformatics', category: 'bif', image: '🧬' ,links:[
      ' https://docs.google.com/document/d/1KnAZ0USkVxuTFeYZbr2rxdDprK5FEu19/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 11, code: 'BIF733', title: 'Bioinformatics', category: 'bif', image: '🧬' ,links:''},

  // BIO - Biology
  //Biology chp1 to chp8
  { id: 12, code: 'BIO101', title: 'Biology chp1 to chp8', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1-t6SwkfkLeNcIjGfOPAMwYl-NfamtXln/view?usp=sharing',
    'https://drive.google.com/file/d/1V5sttbsmPZ-m5eEYTxBUXNQZkcTlRXTE/view?usp=sharing',
    'https://drive.google.com/file/d/18M0wvWPryTLtmFOdYgWbLMG_uUwYCGZA/view?usp=sharing',
    'https://drive.google.com/file/d/1UdVRSw6zcWrbYMOuJDw-8fDrYXchuz_Q/view?usp=sharing',
    'https://drive.google.com/file/d/15HMJU0wRvnDmbOh_px6a6fe9l3Tnjhy0/view?usp=sharing',
    'https://drive.google.com/file/d/1ts_6hv4JVh4U2_WimAdKD05CA4r5WuYZ/view?usp=sharing',
    'https://drive.google.com/file/d/1OWtHX7SIB5QBlzKAGsh75uBtQH0nKDCJ/view?usp=sharing',
    'https://drive.google.com/file/d/1MprySxsw9F8_UU9rRgES9lmELlDrgjKG/view?usp=sharing'
  ]},
  //Biology chp9 to chp13
  { id: 13, code: 'BIO102', title: 'Biology chp9 to chp13', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1Pt5YPVMl2Dru5zANk4-rdQXuSeYBmmQp/view?usp=sharing',
    'https://drive.google.com/file/d/1_UVwI9mnj-Vk4UR1DRuwSmgc0LOtByZs/view?usp=sharing',
    'https://drive.google.com/file/d/143LjV3udNk0nDipgmJTNEK-w0cXP6yMJ/view?usp=sharing',
    'https://drive.google.com/file/d/1FC6bt9I7VZJvF3SZsQRjlrN7cjEiyKAy/view?usp=sharing',
    'https://drive.google.com/file/d/1W7JC2dgsHJ4e_rGtG7zm5t7x2xwDdYxP/view?usp=sharing'
  ]},
  { id: 14, code: 'BIO201', title: 'Cell Biology', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/1xCO3RVOjj6RCMm14SpQeanGUWLcNqD-E/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1SLNrM24LyzekBLMoLNMfCjVoLSbhdNry/view?usp=sharing',
    'https://docs.google.com/document/d/1MeTZB1RawaHHzUewQ5OyQWIkXiZwPl0D/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/18KMBuxL47LVSO0PEgLFDoE3jKrhbjrhI/view?usp=sharing',
    'https://drive.google.com/file/d/1AaOhNEhFieTX34D4OAIRW1NCpFCTqScF/view?usp=sharing'
  ]},
  { id: 15, code: 'BIO202', title: 'Biochemistry I', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/14x9MGGHgewEptDXUKt19o3ydjy0OkiM_/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1dx_TVfoeMgelHqA47czYfq2bhg_c-GuZ/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1AE_B2HmRvdHV_aG4PXGaT2D-Zuje9odQ/view?usp=sharing',
    'https://drive.google.com/file/d/17NdI1ZWKEQSLGhYPb6tqwekzcN1wAxue/view?usp=sharing'
  ]},
  { id: 16, code: 'BIO203', title: 'Methods in Molecular Biology', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1P9rQQrWoKo3eUQ-g4ITulXooeoEVANL1/view?usp=sharing',
    'https://docs.google.com/document/d/1cSWU9VZ84HcT8iIM-SJW8e7v86un7Xmw/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 17, code: 'BIO204', title: 'Principles of Biochemical Engineering', category: 'bio', image: '🧪',links:[
    'https://drive.google.com/file/d/1lFKHcrxsmAIlhMIaD-LAUByfR7R8xbsc/view?usp=sharing',
    'https://docs.google.com/document/d/1eaeHDz4ZidOuZLEk_cURVs1T6Lt5wOQS/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1KJjN5eHPTFxlxGpC_ErV76h4QX32Ta1m/view?usp=sharing',
    'https://drive.google.com/file/d/1eJdDEqSntXKL9Tu00ArAHMevZafFFD4q/view?usp=sharing'
  ] },
  { id: 18, code: 'BIO301', title: 'Essentials of Genetics', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1up3qgSgedP2g9QlTd8hO6_eOYk-jLjG0/view?usp=sharing',
    'https://drive.google.com/file/d/1li4-9YgkSCwAHrIbh9_AwlcqrJAhiHjw/view?usp=sharing',
    'https://drive.google.com/file/d/1MAigI5ny3fbneV3l6ksJKoRsMTzBL-D2/view?usp=sharing',
    'https://docs.google.com/document/d/1pGsa3BNN-5ZhflOzl6kraOZAOUx_yFO3/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1Db_8kEbdiPC0BkKKlXiVqyH8FUD92zyQ/view?usp=sharing',
    'https://drive.google.com/file/d/1XRpeHXt-AezS_2rcohKZiWw17ItKrWLW/view?usp=sharing',
    'https://docs.google.com/document/d/1x4F-xYUsh545Y4Ngq-dDmtRbXqGZPaGI/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/15N7fJMAUpkXEMJQebqDPBVHSKNLzipsf/view?usp=sharing',
    'https://drive.google.com/file/d/15N7fJMAUpkXEMJQebqDPBVHSKNLzipsf/view?usp=sharing',
    'https://drive.google.com/file/d/17tbHAlL6HOlwwFUQ-h1tE7D5CXNl_ejb/view?usp=sharing'
  ]},
  { id: 19, code: 'BIO302', title: 'Molecular Biology', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/1iJ6zdYoRQnXtknL69cg_M23QX-N60XGA/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1whMlynILuztxI8VRwpYa7TwLg0a472os/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1W__cErmKaYn9_aZwKl0onB4ZVx6dcHrI/view?usp=sharing',
    'https://docs.google.com/document/d/1wQhplbCy7CMc7WF9ImP7mCqpOeTILbZM/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 20, code: 'BIO303', title: 'Biochemistry II', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/1fOTlC9erem_4rmuHTXdpoiyiZyBdeBpa/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1vYhZki3iG3dJFBg1mjkqxjPzKkW-zcTI/view?usp=sharing'
  ]},
  { id: 21, code: 'BIO401', title: 'Biostatistics', category: 'bio', image: '🧪' ,Link:''},
  { id: 22, code: 'BIO502', title: 'Genomics', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1KMHWW3P4BadPCiCWcCgXHyPVbBgx6IdZ/view?usp=sharing'
  ]},
  { id: 23, code: 'BIO503', title: 'Biological Physics', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1PpQPPbxRFM60MjHXx1dKA2gfanLYbVHB/view?usp=sharing'
  ]},
  { id: 24, code: 'BIO505', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,links:[
    'https://drive.google.com/file/d/1fhDYz-EXOLCPcjDXYVoEIuuI6VmcDeGG/view?usp=sharing'
  ]},
  { id: 47, code: 'BIO731', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/1rCjjAOkz870xnDz8wl_VW8SngaKtYMiA/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 48, code: 'BIO732', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,links:[
    'https://docs.google.com/document/d/1afNGUluvwRAwF8qN1QjPDSF97WQhNl8b/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 49, code: 'BIO733', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,links:[]},
  { id: 50, code: 'BIO734', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,links:[]},
  { id: 51, code: 'BIO504T', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧪' ,Link:''},
  { id: 25, code: 'BIO505T', title: 'Essentials of Genetics (Theory)', category: 'bio', image: '🧪' ,Link:''},
  { id: 26, code: 'BIO506T', title: 'Biochemistry II (Theory)', category: 'bio', image: '🧪' ,Link:''},
  { id: 52, code: 'BIO732', title: 'Gene Manipulation & Genetic Engineering', category: 'bio', image: '🧪' ,Link:''},
  { id: 53, code: 'BIO734', title: 'Advance Cell Biology', category: 'bio', image: '🧪' ,Link:''},
  
  // BNK - Banking
  { id: 27, code: 'BNK601', title: 'Banking Laws & Practices', category: 'bnk', image: '💼' ,links:[
    'https://drive.google.com/file/d/1x45CHnrvVHDJwE67vncd7xq3iHw0AC3O/view?usp=sharing',
    'https://drive.google.com/file/d/1-nIQXbgoAh93Wxm8Ptx4fZs6oBwSMijh/view?usp=sharing'
  ]},
  { id: 28, code: 'BNK603', title: 'Consumer Banking', category: 'bnk', image: '💼' ,links:[
    'https://docs.google.com/document/d/1bgmLt_ydqejLQJN_YzJa1SaohPQNiEPl/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1bGuWD2OH_LdxrJ4sBZH3e84hgPZhCdEu/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1BSTUoBvOXP_aXiAu8Ct4DOBVc2ds_M1g/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1PrePiIb2Y4JjdjzUE6R4iSR_8SIQLPzG/view?usp=sharing',
    'https://drive.google.com/file/d/1COdeN_rTLeL0AJ5j5gYf3OEyUK55UaCc/view?usp=sharing'
  ]},
  { id: 29, code: 'BNK604', title: 'Management of Financial Institutions', category: 'bnk', image: '💼' ,links:[
    'https://docs.google.com/document/d/1bgYNC-kbJX-E_A0ADMH6ZlX57MvOekf2/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 30, code: 'BNK610', title: 'Islamic Banking Practices', category: 'bnk', image: '💼' ,links:[]},
  { id: 31, code: 'BNK611', title: 'Islamic Banking Practices', category: 'bnk', image: '💼' ,links:[]},
  { id: 32, code: 'BNK612', title: 'Islamic Banking Practices', category: 'bnk', image: '💼' ,links:[]},
  { id: 33, code: 'BNK613', title: 'Islamic Banking Practices', category: 'bnk', image: '💼' ,links:[]},
  
  // BT - Biotechnology
  { id: 31, code: 'BT101', title: 'Ecology, Biodiversity & Evolution-I', category: 'bt', image: '🧬',links: [
    'https://drive.google.com/file/d/1QnBikvPiyxZGNoj7FwHEEM2ous0GiBjL/view?usp=sharing',
    'https://drive.google.com/file/d/1aR0Vau3vGN-XfGPIXp_XR8LHSWGT6B8G/view?usp=sharing',
    'https://drive.google.com/file/d/1i_A0Olr-5jW3iRrJ25jJi338C6YJIBgi/view?usp=sharing',
    'https://drive.google.com/file/d/1Q-WeZuIFANhtg8zgeVdaAWEpDwOeYZma/view?usp=sharing',
    'https://drive.google.com/file/d/1E7dfvnAzyvzMw0ziJlzUR7a5DgqfgqpU/view?usp=sharing',
    'https://drive.google.com/file/d/1uPtEkDXQxXUjB-73EDbu4Wl8BZm7phGP/view?usp=sharing',
    'https://drive.google.com/file/d/1gXtxV9RT12SPPyBA9JjpQCx8P16Q20bH/view?usp=sharing',
    'https://drive.google.com/file/d/1xyma7VSdrpHUqGKFLxHWs9j56MlPixVc/view?usp=sharing'
  ] },
  { id: 32, code: 'BT102', title: 'Microbiology', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/10L8ieTfTBA_4VugzwN9b7Arp4FOrGozz/view?usp=sharing',
    'https://drive.google.com/file/d/1xMalR1YARdAZpl6mp4uBTB8JsnfkYsqg/view?usp=sharing',
    'https://drive.google.com/file/d/1vUMq4CjHcFedUTSfCOtMcZlJolvB7g4U/view?usp=sharing',
    'https://drive.google.com/file/d/1jd_sbNK5yrrFCNMv96Uzz-ewbJSMwGZm/view?usp=sharing'
  ]},
  { id: 33, code: 'BT201', title: 'Ecology, Biodiversity & Evolution-II', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1zB6U15GEaME53TfoL8g5fIguZe8o-vJw/view?usp=sharing',
    'https://drive.google.com/file/d/1D6vpNCagSORsGoTzsXCk3g7dujDUnltN/view?usp=sharing'
  ]},
  { id: 34, code: 'BT302', title: 'Immunology', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1WzPGj1IAee7u7RdXGFOSnb3UuP1UolMu/view?usp=sharing',
    'https://drive.google.com/file/d/1mbG0ci5zqfYmFSWMa0zXpUF1GxVOdS5E/view?usp=sharing'
  ]},
  { id: 35, code: 'BT401', title: 'Genetic Resources & Conservation', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1jfSESiNUAAJLxq_MxIVKOWKxPRXmZ2JS/view?usp=sharing'
  ]},
  { id: 36, code: 'BT402', title: 'Microbial Biotechnology', category: 'bt', image: '🧬' ,links:[
    'https://docs.google.com/document/d/1_1GEhFugLi13B2bSE89cwDBu-A807T2d/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1JwWgh0srfZAuPtLVX78LhLCsFN1oqkjh/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1FjFqC8sRTDw_I6IQj0X6JOY34cNn8KDe/view?usp=sharing'
  ]},
  { id: 37, code: 'BT403', title: 'Agriculture Biotechnology', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1xA1F3O0LepUUe3dZbTqqv0GncGQAqStm/view?usp=sharing'
  ]},
  { id: 37, code: 'BT404', title: 'Food Biotechnology', category: 'bt', image: '🧬' ,Link:''},
  { id: 38, code: 'BT405', title: 'Nano Biotechnology', category: 'bt', image: '🧬' ,links:[
    'https://docs.google.com/document/d/1lZB-LBrxmy63uXSNm3yqkSEwYMHKe2o0/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1_fwR4kIefS8mezDgLV7s9zmu4BpnHM2s/view?usp=sharing'
  ]},
  { id: 39, code: 'BT406', title: 'Research Methodology & Skill Enhancement', category: 'bt', image: '🧬' ,links:[
    
  ]},
  { id: 40, code: 'BT501', title: 'Health Biotechnology', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1uUBhe5EVEg_ZgyNuuBc2MoVC5egpg9VF/view?usp=sharing'
  ]},
  { id: 41, code: 'BT503', title: 'Environment Biotechnology', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1S52PDBmY6-IU29gAA5h5zud_GWxyG51p/view?usp=sharing'
  ]},
  { id: 42, code: 'BT504', title: 'Genomics and Proteomics', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/10S9ln2_FUdwI0w2E8X4xzIqAEgsOh1Gy/view?usp=sharing'
  ]},
  { id: 43, code: 'BT505', title: 'Biosensors', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/1eJBMd_jJwuvKRwt2jTIC_O2WX91gocX0/view?usp=sharing'
  ]},
  { id: 44, code: 'BT511T', title: 'Introduction to Biotechnology (Theory)', category: 'bt', image: '🧬' ,Link:''},
  { id: 45, code: 'BT601', title: 'Virology', category: 'bt', image: '🧬' ,Link:''},
  { id: 46, code: 'BT603', title: 'Fermentation Technology', category: 'bt', image: '🧬' ,Link:''},
  { id: 47, code: 'BT605', title: 'Biosafety & Bioethics', category: 'bt', image: '🧬' ,links:[
    'https://drive.google.com/file/d/199CeOAppny_lcqsOtZwuqu_sEU3XJlOn/view?usp=sharing',
    'https://drive.google.com/file/d/1baKinBFmI13_98p1VksvtXqrm3Of7hdc/view?usp=sharing',
    'https://drive.google.com/file/d/1e90KzLHn5eqqmQVu2JXYmiSFzjnn2CJB/view?usp=sharing',
    'https://drive.google.com/file/d/1ZwgOmisfeJp28E4Bbj1oVi89R-BqVXeC/view?usp=sharing',
    'https://drive.google.com/file/d/1tQWmqHChPOxF6Rhe5qT8uM_jiAIlwdwi/view?usp=sharing',
    'https://drive.google.com/file/d/16JajwE_JiLnifHXcDqVxwYRqQE0ANNd3/view?usp=sharing'
  ]},
];

// Continuing with more courses...
export const finalTermDataPart2 = [
  // CHE - Chemistry
  { id: 48, code: 'CHE201', title: 'Thermodynamics', category: 'che', image: '⚗️' ,links:[
    'https://drive.google.com/file/d/1mfSzltqBeo3Se_t-iaICY1v_09V7bAWn/view?usp=sharing',
    'https://drive.google.com/file/d/1D5iBqKBQjr1fU9mrVaz6WHx6hUPZwa88/view?usp=sharing',
    'https://drive.google.com/file/d/1wwBZ4ZfO0p4jnXl7xIvgl4H7Lww8LQZ2/view?usp=sharing',
    'https://drive.google.com/file/d/1DFXoPo029CA99CiSTHLZ_m9BrcXsA-Xr/view?usp=sharing',
    'https://drive.google.com/file/d/19YVOBbb4w59TENmHz0ZYt_UD8Nwwyp_i/view?usp=sharing',
    'https://docs.google.com/document/d/1NHo2-cUBQvi4F5XN3oQcUpVwIzqWbUpz/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 49, code: 'CHE301', title: 'Analytical Chemistry & Instrumentation', category: 'che', image: '⚗️',links:[
    'https://drive.google.com/file/d/1wGwtlnGShdARiwbAtUDXhEdyUZ3kZEt-/view?usp=sharing'
  ] },
  
  // CS - Computer Science (50-102)
  { id: 50, code: 'CS001', title: 'Computer Proficiency License', category: 'cs', image: '💻', links: [
    'https://drive.google.com/file/d/1hRt8XjkOfywYEcLWciO2YYDm8LSGYPmb/view?usp=sharing',
    'https://docs.google.com/document/d/1nNBBQh_uvlvVjcsV5pvxDI7MNnyFc5V6/edit?usp=sharing&ouid=114723537748519377381&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1KTY1_6hGQ1-w_2BbMeTKcctl6dh9WojY/edit?usp=sharing&ouid=114723537748519377381&rtpof=true&sd=true',
    'https://docs.google.com/document/d/15HibZLvLLQK-yto8X50LIdOgIQAcI4Bw/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/16tda5MPUrMwOEM-mxduRfeBswZ1fZ9sr/view?usp=sharing',
    'https://docs.google.com/document/d/1WoZBtx_rxGS0rK5a1zmkXWHl7nwSPS7x/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1AEOwfnl-GDqYrL1Jjzd1j0HCQ-KiLB8N/view?usp=sharing',
    'https://drive.google.com/file/d/1xlXLJE8HV4loRnZySLzGhJO-r4J6BaXf/view?usp=sharing',
    'https://drive.google.com/file/d/1jsf5716yWN2AzmTtVgi8gLc6JNxQmRv3/view?usp=sharing',
    'https://drive.google.com/file/d/1Te4ApesLRLFwx5MFIlDgWlJRqVlGdQVi/view?usp=sharing',
    'https://drive.google.com/file/d/1xMFlQmJ18K9mNYYHBQ3zQ1Kdqqi8RLdk/view?usp=sharing',
    'https://drive.google.com/file/d/1thXCDOms37F8yZA_DUBX4s5S_mf_N5lg/view?usp=sharing',
    'https://drive.google.com/file/d/1-0mp1wtj1f9IO_e1_wZymRBnas_U8jwA/view?usp=sharing'
  ] },
  { id: 51, code: 'CS101', title: 'Introduction to Computing', category: 'cs', image: '💻', links: [
    'https://drive.google.com/file/d/1QhLkLGyvlGSLSILus0DX1gDehTbaodVH/view?usp=sharing',
    'https://drive.google.com/file/d/1PPfYdhmfITQ16zVWhdFxrNABoOxlLMEM/view?usp=sharing',
    'https://drive.google.com/file/d/1upxqYF1Y6xuMXaJja2hWn5ZcDGfaYY7M/view?usp=sharing',
    'https://drive.google.com/file/d/1hl0q95-11uQoRYm9djcQz4HlP7LWNe4-/view?usp=sharing',
    'https://drive.google.com/file/d/1nXgqXEpAjr9QVVoJs9fsJo8pPXt4qSjl/view?usp=sharing',
    'https://drive.google.com/file/d/1djlkgsfsf8QcTcYqIFDXVZaCpvz4du_N/view?usp=sharing',
    'https://drive.google.com/file/d/1PuXH5LtcdNIBZwyRk7mE23x6nS4utGqb/view?usp=sharing',
    'https://drive.google.com/file/d/1H_o5RUZHJy5F71Z8C6muAn5Mo2_1VDEx/view?usp=sharing',
    'https://drive.google.com/file/d/1p9KoHv-iMZeoNbUpmZFD59AEznWjgfWl/view?usp=sharing',
    'https://drive.google.com/file/d/1cc4okGkyZymkAzZoNphoWc1Um2kCQNao/view?usp=sharing',
    'https://drive.google.com/file/d/1KqmfX_qOqUOer614dhM0ejgEqVaAfoEa/view?usp=sharing',
    'https://drive.google.com/file/d/1otYjopSQdqk-vRbsFPknWhVXDOWqHY-x/view?usp=sharing',
    'https://docs.google.com/document/d/1V18TgD1Uj3HRfvxatKfLfJZ8vY1zChFX/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1ZaDqYBTgMZfdLajDCo7BfQcJSR2k53Vj/view?usp=sharing',
    'https://drive.google.com/file/d/1fDypUdIhkQ6YN66BD2_o56QiELyjcV6j/view?usp=sharing',
    'https://drive.google.com/file/d/1P643MdSfJ-wdJD5WAZjWdrKlPiWgW1Qi/view?usp=sharing',
    'https://drive.google.com/file/d/1GvU9VXdauqgNxjMEHR--Youps_TVPAbx/view?usp=sharing',
    'https://drive.google.com/file/d/1F-0itkRxMzVQsx6c3V7xFAAxVyVU-HFR/view?usp=sharing',
    'https://drive.google.com/file/d/1djzgiF4m-4o1vxarwT3ouiSjIY_2PQzk/view?usp=sharing'
  ] },
  { id: 52, code: 'CS201', title: 'Introduction to Programming', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1NgEf8O1VgaKYZ70NWZ3nuwrYp3bTkJzl/view?usp=sharing',
    'https://drive.google.com/file/d/1A8wMjGBSHMsMTXdKxFUJxHDczORjIodZ/view?usp=sharing',
    'https://drive.google.com/file/d/1zrgK9YL9QeSwFLP3AVSWM3PVx4G-onpC/view?usp=sharing',
    'https://drive.google.com/file/d/1cxHmI9xESJZJcojN4c-rO4JFvVOtDxHo/view?usp=sharing',
    'https://drive.google.com/file/d/1J_21SA_8369hOw4lxYo8wzkm-2tcogyi/view?usp=sharing',
    'https://drive.google.com/file/d/1LFExHqqIhlVR32Iqs3bhDcqBo3xvaZcN/view?usp=sharing',
    'https://drive.google.com/file/d/17t5odzdmAYQURvQtPrCHhX6csqpN5mrh/view?usp=sharing',
    'https://drive.google.com/file/d/1hvrfMXA11m5ekR-b-VBMJ-7khSXU4WDr/view?usp=sharing',
    'https://drive.google.com/file/d/1ECLR06EE2pl78s7TJcw4O0xS-mLqBtiH/view?usp=sharing',
    'https://drive.google.com/file/d/1v-kI-4V3v4FQ5BZsrWAF8rrnBDncugkd/view?usp=sharing',
    'https://drive.google.com/file/d/1KGXMIKjTh-aGz7R0R29SEx4Te0zLLvmB/view?usp=sharing',
    'https://drive.google.com/file/d/1G3kqCf-31YE5Mx8OcquYLo_3CK-a-28z/view?usp=sharing',
    'https://drive.google.com/file/d/1nKo_rziSUcGZAcsFIN8I5rEb-qyXPlNK/view?usp=sharing',
    'https://drive.google.com/file/d/1FRSvB2lIlwopMwX6j8l5XbYkw5sK1pX1/view?usp=sharing',
    'https://drive.google.com/file/d/1d100JUaCZTVZrKwhms6e3s9HYnrfubFh/view?usp=sharing',
    'https://drive.google.com/file/d/1QKVNc1AqE46umWp4H82b98sob82Y6x1S/view?usp=sharing',
    'https://drive.google.com/file/d/1U3_u0OOCbaPSHtILPFt3v9ThAuBmSyQq/view?usp=sharing',
    'https://drive.google.com/file/d/11gq6Nosk0xW0ovzGGtpt1N_fsbPAKDVx/view?usp=sharing',
    'https://drive.google.com/file/d/1sFPkXkPbOxEGlsyxlFAgi8cBmLnLL0O2/view?usp=sharing',
    'https://drive.google.com/file/d/1o5Ux64onMpS5l3fC-g1gdKpoQL9SadSi/view?usp=sharing',
    'https://drive.google.com/file/d/18jcG9v4ykvuNUmtPgPLdfiJ7YeCP69jS/view?usp=sharing',
    'https://drive.google.com/file/d/1XJsDQbRzyeDj1rfZvyAhzNnJ10hsz1U4/view?usp=sharing',
    'https://drive.google.com/file/d/1ZdJri9f8XFqr6aDDjtXEUoddDKNMCfiQ/view?usp=sharing',
    'https://drive.google.com/file/d/1B9WVqD8WdoCoNpyqO9hAnLkAXzH1ksm1/view?usp=sharing',
    'https://drive.google.com/file/d/1NnqKskRDFxbPImJORWk8OI5eWemYLObX/view?usp=sharing'
  ]},
  { id: 53, code: 'CS201p', title: 'Introduction to Programming practical', category: 'cs', image: '💻', links:[
    'https://drive.google.com/file/d/1gSRqOmhaIlNhXPnkwBQde2PZazpbTxSb/view?usp=sharing',
    'https://drive.google.com/file/d/1HzimU837zDYdKZGpadwxhSz0t3D4XkUv/view?usp=sharing'
  ] },
  { id: 53, code: 'CS202', title: 'Fundamentals of Front End Development', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1KCh5sdlQrtGXduKljCn3QxHlPGAZRNAa/view?usp=sharing',
    'https://drive.google.com/file/d/1kYm8Dh-mah5n-3gV1ivTy5bcPSuYUtyU/view?usp=sharing'
  ] },
  { id: 54, code: 'CS204', title: 'Cyber Law', category: 'cs', image: '💻' ,links:[
    ''
]},
  { id: 55, code: 'CS205', title: 'Information Security', category: 'cs', image: '💻',Link:'' },
  { id: 56, code: 'CS206', title: 'Introduction to Network Design & Analysis', category: 'cs', image: '💻' ,Link:''},
  { id: 57, code: 'CS301', title: 'Data Structures', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1JTLVCG99X0S1uKMXVvWMGj7O5WGlWRFg/view?usp=sharing',
    'https://drive.google.com/file/d/1jBHbk3YBmtZDDP7jH3POf8bXYVv_0U4c/view?usp=sharing',
    'https://drive.google.com/file/d/1vhT9Esj92G6iQ3CTcdcL5_gwXt9meU9b/view?usp=sharing',
    'https://drive.google.com/file/d/1keMaFKurozPbVa3WrGTtlA0V43Pz0hLg/view?usp=sharing',
    'https://drive.google.com/file/d/1xN29VBtalb6evtwbZHOvOqbP3XBjDYZ4/view?usp=sharing',
    'https://drive.google.com/file/d/1zX84o0RdWccH9pHe4Zt8mhQ__Yfc95Pn/view?usp=sharing',
    'https://drive.google.com/file/d/1tXpYZniyj_o24o3qTFAm4i5FnXRRh5wQ/view?usp=sharing',
    'https://drive.google.com/file/d/1jSfNe15Vu3iuX9hV0iLJ1dLHq05wi5iI/view?usp=sharing',
    'https://drive.google.com/file/d/1WRDLPNmA97LS7j_GdWvx7uHQ4urB81YW/view?usp=sharing',
    'https://docs.google.com/document/d/1kGM1ZjxcqmJgit30eRC1In1lP6hSFYtM/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1HFMBqF5udYnf6110eYZZ1f8qQF_7SE3B/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1bVtwAp350INLUt0YsHcqnFcoJv5XsfOg/view?usp=sharing',
    'https://drive.google.com/file/d/1dBmhleJRhvbGN_v_ohBtsI2HE-s_DaZ1/view?usp=sharing',
    'https://docs.google.com/document/d/1cwMGNoUl0Ol92LZJ-W76hWjDNfaKdKBe/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 58, code: 'CS302', title: 'Digital Logic and Design', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1G-wy5rHB4GcOccOb1ITiMNmQWUvPF2Sw/view?usp=sharing',
    'https://drive.google.com/file/d/1sso4PZKP2FV3xQdA4czmuwTgm9olOEXv/view?usp=sharing',
    'https://docs.google.com/document/d/1dhLRGaolaXon5t84oBx2ameAz9eLrT1C/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 59, code: 'CS304', title: 'Object Oriented Programming', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1HWIyPDqN1rKznMhQQG1e1unAul_8-yrH/view?usp=sharing',
    'https://drive.google.com/file/d/1aqx4wH0y6M3gOkUZ8KYm4t6dtWkJIZW4/view?usp=sharing',
    'https://drive.google.com/file/d/1H-guMJvqOZCRRi75QwSBi_BmB32JefSV/view?usp=sharing',
    'https://docs.google.com/document/d/100eroDOBSFdZRBdu1UItHkf_joTo5_r-/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1YFblAs9eIkVMY2lj4FzRM3th6wEujJFl/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1QNE9wnT4GlzS4ddSNVm5bzjRFI9EnvsG/view?usp=sharing',
    'https://drive.google.com/file/d/1NiLdFv48wbPMBLmcJ-d45CgnKB6GU0Jq/view?usp=sharing',
    'https://drive.google.com/file/d/1zXKpDIzNZrK6WP8VMRaFV4lRBUDUN3gs/view?usp=sharing',
    'https://drive.google.com/file/d/1l5nxJhW720ZhiKMrTWpXEkwZlsLkK2lR/view?usp=sharing',
    'https://drive.google.com/file/d/15xBPARN8D9sYxMoFPMYbl7gFTWIP2xDf/view?usp=sharing',
    'https://drive.google.com/file/d/1Pbps5u3Ofw0YQ-Q0goi36YTZNXQw9WZt/view?usp=sharing',
    'https://drive.google.com/file/d/1GcMq8bO2R8Qc8lFftXeRRVfjZgd6GioE/view?usp=sharing',
    'https://drive.google.com/file/d/1E9XUZn3T6eEzchGyUGUGacfO5vNevOSZ/view?usp=sharing',
    'https://docs.google.com/document/d/1STFK_4uuwPgryn9GrUyNLFWgJOdBz1L1/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1jBWGPHPifd2qEDQpSeh5M0z1cFAvFL_t/view?usp=sharing',
    'https://drive.google.com/file/d/1lAz6LLjTtc6UMBFjpU-Ojbounscwxrmv/view?usp=sharing',
    'https://drive.google.com/file/d/1gKk40p92GXzYsarRWOJoh25glQrzQCYW/view?usp=sharing',
    'https://drive.google.com/file/d/1FGfULh8RMyITUx7Q-yaSg5cGehY_FabB/view?usp=sharing'
  ]},
  { id: 60, code: 'CS310', title: 'Open Source Web Application Development', category: 'cs', image: '💻',Link:'' },
  { id: 61, code: 'CS311', title: 'Introduction to Web Services Development', category: 'cs', image: '💻' ,Link:''},
  { id: 62, code: 'CS312', title: 'Database Modeling and Design', category: 'cs', image: '💻',Link:'' },
  { id: 63, code: 'CS401', title: 'Computer Architecture & Assembly Language Programming', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1yZ4ZDnnsLlH3pb515c6L2tuo38oUabgH/view?usp=sharing',
    'https://drive.google.com/file/d/10hCla20kykNwfyRPUyTPMXAj4wm9KcTw/view?usp=sharing'
  ] },
  { id: 64, code: 'CS402', title: 'Theory of Automata', category: 'cs', image: '💻',links:[
    'https://docs.google.com/document/d/1fu4-_rrAVsvXUml3qAugTgPWRS33PQPu/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1e2KOA-zsNhGMZahqrD4LtdObXfLo7ZYm/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1WleO-ZssN9HMnxa6EWoq2Hh_-65Aj3eN/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1SRPXNQJwsGy5hAW3WKOiW6qwKgacjK3p/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1Wsi-q6vVYEg0A9R0rwLzws-lfFBSHkNB/view?usp=sharing',
    'https://drive.google.com/file/d/19oLhpkb5RH4-0SBrNevm8zz0GbjMM6du/view?usp=sharing',
    'https://drive.google.com/file/d/1jxroyyjLopgBODQWSavfnmuQKMzv2gH_/view?usp=sharing',
    'https://drive.google.com/file/d/1a-ojHpChHoBwpwDMGiWdSr2yi1Hwlx43/view?usp=sharing',
    'https://drive.google.com/file/d/106lG49FBr-_CL1CzCeiZeODvnD2hdxGq/view?usp=sharing'
  ] },
  { id: 65, code: 'CS403', title: 'Database Management System', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1R48Aeq2BKjkAxEIjsz-abFua4VUXL4Wb/view?usp=sharing',
    'https://drive.google.com/file/d/1L5qR1MLlDwwwwCTj1P0Sk3Bso4_zljFW/view?usp=sharing',
    'https://drive.google.com/file/d/18-ULuoSEH6BF-d4uUSC-NLUGjdYTmQST/view?usp=sharing',
    'https://drive.google.com/file/d/1wQ0REKsTnW4-tD5bHmy8tNR606IjI16d/view?usp=sharing',
    'https://docs.google.com/document/d/19KQAPJX2nwVBvULcQsNbGkJTh8_Bf2lGTb0Wy--Ee90/edit?usp=sharing',
    'https://drive.google.com/file/d/1JFhCTdOheAOssUEQ_yvQJcMi-DeLWBHb/view?usp=sharing',
    'https://drive.google.com/file/d/1FIboOT2FixoBfg91zUuYyFE988aOrJ46/view?usp=sharing'
  ] },
  { id: 66, code: 'CS405', title: ' Database Programming using Oracle 11g', category: 'cs', image: '💻',Link:'' },
  { id: 66, code: 'CS407', title: 'Routing and Switching', category: 'cs', image: '💻',Link:'' },
  { id: 67, code: 'CS408', title: 'Human Computer Interaction', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1EQLAulKe0vjKtlOldnoVUGeQHqu9WSyL/view?usp=sharing',
    'https://drive.google.com/file/d/1_LXAwgC3eNQl1N1rv40OH1ERZslxOunW/view?usp=sharing',
    'https://drive.google.com/file/d/17mcfKvHFHW7Vp6h6dqXMwIhGiDuLq3mE/view?usp=sharing',
    'https://drive.google.com/file/d/16WkohFC8qCS0-ni8DVW9wyGtJtC5SCde/view?usp=sharing',
    'https://drive.google.com/file/d/1ojQ-Zt3MTcb-Oj-HGZJ4U-qRVAyqT-SO/view?usp=sharing',
    'https://drive.google.com/file/d/1d7ek_ToKOuwVFf762la-9vMrhvpzv464/view?usp=sharing',
    'https://drive.google.com/file/d/1GG2i-hCkEs0DZGxpff3wVkpgrz-OK7hu/view?usp=sharing',
    'https://drive.google.com/file/d/1eqalW-osa2cdjbe164g8mo5GQ8cTp2Y8/view?usp=sharing',
    'https://drive.google.com/file/d/1WHd8LGF3WPhTTpJaLGNYYFnTbWKTXgt4/view?usp=sharing',
    'https://drive.google.com/file/d/1mvEk_hGcz14V8U2JEA9_hSsDNBSyr7qi/view?usp=sharing',
    'https://drive.google.com/file/d/1qb_aZOHry5t-kTSkupciK5Qrie2emJb-/view?usp=sharing'
  ] },
  { id: 68, code: 'CS410', title: 'Visual Programming', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1BX1AV9ojiKCfIseL5uoo1DdYnTWVFgl1/view?usp=sharing',
    'https://drive.google.com/file/d/1NOlVKRH-8JDTurXoUlppeDrELfcxaopo/view?usp=sharing',
    'https://drive.google.com/file/d/14pNCP2zI8kjOj_nDVLwMmr_tbrgUmNii/view?usp=sharing',
    'https://drive.google.com/file/d/1mmqSDIJHWaOCdZmkf3laJYIFFLILKcQK/view?usp=sharing',
    'https://docs.google.com/document/d/1czSWuV5tto8vj39kZ0QFsGn0ioMtjx7Y/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1QHrwa5BbgZ3JXVmrsYX4BGU6fDW9Ym2w/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 68, code: 'CS411', title: 'Visual Programming', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1hYc90QcuHsZhnUr6i8JdaogJDBImULHn/view?usp=sharing',
    'https://drive.google.com/file/d/1QzPl9m64e3lmABxOd4iTx9zdmGu4KpoO/view?usp=sharing',
    'https://drive.google.com/file/d/1WSGz2bSkzqvXFDPZoV65W_5Iv3jun8iD/view?usp=sharing',
    'https://drive.google.com/file/d/1VYVa-NjDacKWytYmUoVCL6kaT_i1VRyU/view?usp=sharing'
  ] },
  { id: 69, code: 'CS432', title: 'Network Modeling and Simulation', category: 'cs', image: '💻',links:'' },
  { id: 70, code: 'CS435', title: 'Cloud Computing', category: 'cs', image: '💻',links:'' },
  { id: 71, code: 'CS501', title: 'Advanced Computer Architecture', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/11LHqu9MpfQAJPJpb66Rr4PrAD7pl4mZD/view?usp=sharing',
    'https://drive.google.com/file/d/1YGg57m_OpQyJU_Ts8Gr_TV4eT0cU3D3Z/view?usp=sharing',
    'https://drive.google.com/file/d/1ZdGN7_Be0Pa709E0mHqfYGgfmZVx-G2a/view?usp=sharing',
    'https://drive.google.com/file/d/1xNjhLxuEB4X2moxHNq39i7KzV16h3208/view?usp=sharing',
    'https://drive.google.com/file/d/1u33ID8gVC3T8mJAlQYXU63rv2Le6airv/view?usp=sharing',
    'https://drive.google.com/file/d/1zC8EYuKLU7zjM35WXNQPOICmcvsalT23/view?usp=sharing',
    'https://docs.google.com/document/d/1ltRLcs_jhFnEofmfIIZ8EUikkUOvZYTa/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1wNrSS8uKJPHfE62yeOOHxkKt2a-qxDSZ/view?usp=sharing',
    'https://drive.google.com/file/d/1sdPM5Ki3ICruuDxygv2EPjc2wmvusssx/view?usp=sharing',
    'https://drive.google.com/file/d/1oLEwgPHdsXJucxEmadqKaL-oZ09S-F30/view?usp=sharing'
  ] },
  { id: 72, code: 'CS502', title: 'Fundamentals of Algorithms', category: 'cs', image: '💻',links:[
    'https://docs.google.com/document/d/1-j9ede3ijd7xGM2ZmwBgMLUq5JaQ3TMl/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1_4hFVu599nSpKAoyCxS2l54bPxS7FJ5t/view?usp=sharing',
    'https://docs.google.com/document/d/1ppbNBtFCwjKnzO6sVU70dX0_r139Gv6-/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1bxX4MFT08qxR65hL-UorY6sr61G1RFwt/view?usp=sharing',
    'https://docs.google.com/document/d/1Kvsomkte-A6ONIOBVsCTAnQP14jErdXq/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1EJEmyUpW96pJcq5A9uh2eDL-A9jWA82R/view?usp=sharing'
  ] },
  { id: 73, code: 'CS504', title: 'Software Engineering I', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/14VhyJ7iDsFh7XUE6xrRJ5F7FzSFX2o0G/view?usp=sharing',
    'https://drive.google.com/file/d/114CRaF4ui925VclXxhnO1LUZFBqJ0lWk/view?usp=sharing',
    'https://drive.google.com/file/d/1BanEgy_qzXWst3Lf97jytt9T8hhOJdeN/view?usp=sharing',
    'https://drive.google.com/file/d/1zjCpFIBEMOXah_xnFlPBXf0VDGAsCsfx/view?usp=sharing'
  ] },
  { id: 74, code: 'CS506', title: 'Web Design and Development', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1hE0ufqMmpw-lW3Lw2VhDr4Hy4n4ukPsS/view?usp=sharing',
    'https://drive.google.com/file/d/13KtPGogcNJP3pSEbaqtJicdrsJ9EzOuB/view?usp=sharing',
    'https://drive.google.com/file/d/1qp2ZXFgR-hMaGemHpoJy6-IiyKvP9ZDV/view?usp=sharing'
  ] },
  { id: 75, code: 'CS507', title: 'Information Systems', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1vv8tXRu64234fPCQqLpz8QSAdblWBPOi/view?usp=sharing',
    'https://drive.google.com/file/d/1UuG5eVpmrKiH0nkKRAhCUtff1CG47sdh/view?usp=sharing',
    'https://drive.google.com/file/d/1W9E7qNuNPRjBISVUVXLyHebNF-ELGnvp/view?usp=sharing',
    'https://drive.google.com/file/d/1PcaTlh1GkwONBasXhuJ5iqRwI6YzDW2X/view?usp=sharing',
    'https://drive.google.com/file/d/1KaRdQyZM1HkwEf6-Qz6PCjtNm_jH4oB1/view?usp=sharing'
  ] },
  { id: 76, code: 'CS508', title: 'Modern Programming Languages', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1E-I6lHZw6GUTxzsKC4EpSUjz2SPi7Jbt/view?usp=sharing',
    'https://drive.google.com/file/d/1v_F_3IQvzhUNxc-qMQOAUUSjtpi6jYA3/view?usp=sharing',
    'https://drive.google.com/file/d/1IlAARSxQpLOJ25Kvbr3aszRTd4uiNIBc/view?usp=sharing'
  ] },
  { id: 77, code: 'CS510', title: 'Software Requirement & Specification', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1-3QnS-qvmZ9FqVs6642AlOpR66Ju1uFJ/view?usp=sharing'
  ]},
  { id: 77, code: 'CS601', title: 'Data Communication', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1-3QnS-qvmZ9FqVs6642AlOpR66Ju1uFJ/view?usp=sharing',
    'https://drive.google.com/file/d/1KVq-vNaixJbWRffrfmUPZmOVuAJzj7U6/view?usp=sharing',
    'https://drive.google.com/file/d/1f8JOYRO9vd5Zjrw_uwL0vBeRHrxR82s1/view?usp=sharing'
  ]},
  { id: 78, code: 'CS602', title: 'Computer Graphics', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/12yckahNpTsuXJacdYaTMPtY89bH35wSO/view?usp=sharing',
    'https://drive.google.com/file/d/1J_anrYBcFky-XLhfSV-UBuFesacBIKSm/view?usp=sharing',
    'https://drive.google.com/file/d/1hC_aLh290oGT86-AGoLErJzQq_C-6O9N/view?usp=sharing',
    'https://drive.google.com/file/d/1vor8Eyr1r03BZTTE5rg2KaX7QGiBnd6B/view?usp=sharing',
    'https://docs.google.com/document/d/1qfaMo07A8oc3QtzdE6rg7TU62H58yWms/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/19O2ncpKDcy9Jke15cP0zSrzeEOTZ6tvA/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 79, code: 'CS603', title: '----------------', category: 'cs', image: '💻' ,links:[]},
  { id: 79, code: 'CS604', title: 'Operating Systems', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1TmGgFTrkgCnMTehjgrr13MJmPyAq4ZDD/view?usp=sharing',
    'https://docs.google.com/document/d/1o72BKzXHfTXcEY3XKq_hLta0wU3C4OrG/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/19mp3u0OZBSnbLa_hLAzwM0cm1VdKvSZk/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1ajwhNE6KBSVWlVFxM0jIiez65Gw-9pRi/view?usp=sharing',
    'https://docs.google.com/document/d/1KDhrYZrpHYGxa_M_fWrKpBiVWvauyyDT/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1BsBDJE9Luq77wO450BqSTdTEU_3Mn_KS/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1DjgCKJD9BFaAFfsSzM1mtZ4WqCZ8cmC5/view?usp=sharing'
  ]},
  { id: 80, code: 'CS605', title: 'Software Engineering II', category: 'cs', image: '💻' ,links:[
    'https://docs.google.com/document/d/1HIynUweSpHdoDSJZeeOWmd74cw6Fcnj_/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1gmZ_eBObDZVKtMuSPdiw30I1j_IaG-Kj/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1qsc-C6Hr4V2PU2rUvnr32dntQkOZRYMQ/view?usp=sharing',
    'https://docs.google.com/document/d/1L5L7C0H4DD6m6gfwdHpa4i5t4-aDIBDd/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/12PlU8w3drzhZm7RUCSUXKsiOqqgR6Rfd/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/11hXFwwckVxsdfwUOlJcDOFZiOkZ8Bi7S/view?usp=sharing',
    'https://docs.google.com/document/d/1sgkskBdMzSY93ldn-Idz4L9L4N3wZJXD/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1QS-8M9K0UcEcoCQJA_w6RED0sY7p-8mL/view?usp=sharing',
    'https://drive.google.com/file/d/1jOcqyrBK779mUgP9hhBVmvK6f-qqFhgK/view?usp=sharing',
    'https://drive.google.com/file/d/1bvP7IGgAqPXVkKwKwE_Te59BPYQ5l9if/view?usp=sharing',
    'https://drive.google.com/file/d/1xRf2DhtBjJdkfK7Fz9oGUGGx-bkT0HGm/view?usp=sharing',
    'https://drive.google.com/file/d/1bvP7IGgAqPXVkKwKwE_Te59BPYQ5l9if/view?usp=sharing',
    'https://drive.google.com/file/d/1nikwHeEZcI5_W1sTBHLFtXR1ucvsrPeM/view?usp=sharing',
    'https://drive.google.com/file/d/15Q7XSuGhK4ZY1IyNMse1Ajs_2Vcac-u9/view?usp=sharing'
  ]},
  { id: 81, code: 'CS606', title: 'Compiler Construction', category: 'cs', image: '💻' ,links:[
    'https://docs.google.com/document/d/1Z0zdMyrLDtsKcvvtnk0L86RBKBWh9kcp/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1h7orxAXrmg8O9pAEjZIBgP-KHXbrADag/view?usp=sharing',
    'https://drive.google.com/file/d/1sQd9h8jo5DGd2B37WlVzIkl3AJWVne1M/view?usp=sharing',
    'https://drive.google.com/file/d/1Af18OPee4TFXQ9pl8RFF2uz9EKtx9dqQ/view?usp=sharing',
    'https://drive.google.com/file/d/1QP9QvxPFqS23RDVgyfcXCtgCAaiT-4yk/view?usp=sharing',
    'https://drive.google.com/file/d/1tDcOV7Q9_HMpoZgBIX-Pgg9ejFuixWeH/view?usp=sharing',
    'https://drive.google.com/file/d/1Dj8_bSjgCfTXAxf-rj4puEqWyRVfNHjF/view?usp=sharing',
    'https://drive.google.com/file/d/10QuZQq2yH4DPV4IDlG-FNL2vGjL4S4Qg/view?usp=sharing',
    'https://drive.google.com/file/d/1vTneuAU8Ie-wNy8gXrbhxdbyj6edme9H/view?usp=sharing'
  ]},
  { id: 82, code: 'CS607', title: 'Artificial Intelligence', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1SsiwYIDICrTc87PKF7hdx1RHDwgyPSQp/view?usp=sharing',
    'https://drive.google.com/file/d/1Lcy8ydcP9upNCi0dOPOG4aMQCxVId-sL/view?usp=sharing',
    'https://drive.google.com/file/d/1XwstosJuDqUqL6mxAsgApN4De18QUbZG/view?usp=sharing',
    'https://docs.google.com/document/d/1PKP6-90DAkOBTObSV-YG_d7AeJcuUy0c/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1mHIA6vk0ciKd5peLiaWxAclZMr55Rp5d/view?usp=sharing',
    'https://docs.google.com/document/d/17jDe8bm4oc49UQd_44WEvZ_dZnBussGe/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1Qm-oYItlx5_GWAXr7fR7waV1uq4X4j0U/view?usp=sharing',
    'https://drive.google.com/file/d/17qN3nbKx7jN5vQQwA9NgxIVzwJB7-awe/view?usp=sharing',
    'https://drive.google.com/file/d/1SYHmVbxLhwJ0vI86BNvrB5InkiaSXhsE/view?usp=sharing'
  ]},
  { id: 83, code: 'CS609', title: 'System Programming', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1BgZwTTCb0g_fUt8d4s0jwZcP6XpntdW4/view?usp=sharing',
    'https://drive.google.com/file/d/12VdPlJg6ckkEWyAPWREcEA3-gy6VSbz1/view?usp=sharing',
    'https://drive.google.com/file/d/1gATrgUFhxVXnC28VBBDz7Cu_zIUsN6W7/view?usp=sharing',
    'https://drive.google.com/file/d/1L3t_jcflNHRg507N29-m73-qSh9LwklQ/view?usp=sharing',
    'https://drive.google.com/file/d/16vv-YBdxWtSdsMNOXWz8dAOMS6jRRJ0p/view?usp=sharing',
    'https://drive.google.com/file/d/1yXaFkURcKlfvxntV8Gh5fFQInvTmV3If/view?usp=sharing',
    'https://drive.google.com/file/d/1JueriOGusA52Scpt6brFoglK-r1114RO/view?usp=sharing',
    'https://drive.google.com/file/d/18iW2FMlmIcUQHg-arrMNFHuEIWN1pMdY/view?usp=sharing',
    'https://drive.google.com/file/d/1hoEZ1jKhBsFLwMfL3I5VpDVyV8LaJX3u/view?usp=sharing',
    'https://drive.google.com/file/d/1gVSlp_-LY9532bzPIfJLdi3IfgKRnEMJ/view?usp=sharing',
    'https://docs.google.com/document/d/1mBsYd9AQrZFkTfIaFo2zXeI42FsC-mB3/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1_26FyVfzQQuJPvD05Fnnli5ZKMWJhyNu/view?usp=sharing',
    'https://docs.google.com/document/d/1UF8qdO7xDWTZy_nIy5n_ePntfnHFMPns/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1HXS6jh93cr8rE1yUbh0vZjN0Mt06dI5w/view?usp=sharing',
    'https://docs.google.com/document/d/1HvTL2XtouVmyER5YE0ONQGy-dPzMkjYe/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 84, code: 'CS610', title: 'Computer Networks', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1at6oxB2qHcyiheaHmH5y6aHUG6KcwwiG/view?usp=sharing',
    'https://drive.google.com/file/d/1Iz-XEauU6dw_sixsmz25xXP6zH_O6tFi/view?usp=sharing'
  ]},
  { id: 85, code: 'CS611', title: 'Software Quality Engineering', category: 'cs', image: '💻',links:'' },
  { id: 86, code: 'CS614', title: 'Data Warehousing', category: 'cs', image: '💻' ,links:[
    'https://drive.google.com/file/d/1lpFLE0RKayuB3D_muAGpkGYJzwSOGB4V/view?usp=sharing',
    'https://drive.google.com/file/d/1p2AaYRJ2vo6fQR_H1oNOdDIPKsNfaQYI/view?usp=sharing',
    'https://drive.google.com/file/d/1vAZmWei3uMTQUe5TQ0MfCyQDEagxfmOp/view?usp=sharing',
    'https://drive.google.com/file/d/1Hb_380aSKm0UYX0Ez5GNms2oG28DE2m1/view?usp=sharing',
    'https://drive.google.com/file/d/12uzNQfLWi9f9ZTMGKe6X875ErMVRm-oE/view?usp=sharing',
    'https://drive.google.com/file/d/1xrsE5faYBKYQrbO6_t7GFeOAIBrBYaCR/view?usp=sharing',
    'https://drive.google.com/file/d/1bbr2osKLBbKgCqkCPOa9uq2YvW5bGB6b/view?usp=sharing',
    'https://drive.google.com/file/d/1cXHGga2qpMHERxHzGbuOdNMb2BQX3Pou/view?usp=sharing',
    'https://drive.google.com/file/d/1nd71_KfgWeZ7jggbb15hayqas_C37rJb/view?usp=sharing',
    'https://drive.google.com/file/d/1T4fSfhgl-x_2xwnXHMSPlxGFcTEgOoHW/view?usp=sharing',
    'https://docs.google.com/document/d/1WPAtqj4PrrfFDMWWuu_e350BrShqrtnj/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 87, code: 'CS615', title: 'Software Project Management', category: 'cs', image: '💻',links:[
    'https://drive.google.com/file/d/1A6RpizOaG2kD2DJlwFZsGRwPu3sSl_jI/view?usp=sharing',
    'https://drive.google.com/file/d/1-t9AJ0eq7tFSLJvrpj5U0OVi9ccmqPEl/view?usp=sharing',
    'https://drive.google.com/file/d/1v7iayhanVHsgnvcs8sqyG1Nw3cPWwqx0/view?usp=sharing',
    'https://drive.google.com/file/d/1CcG_7-4_elxcYHrIg2GRlHi2Tsu1kna2/view?usp=sharing',
    'https://drive.google.com/file/d/171E6n2GhxuXO6Ufif6AjaRgXcQgLrxIX/view?usp=sharing',
    'https://drive.google.com/file/d/1gAC80Q2qIlcR8gMX0JUb3bW7ScnsDf3O/view?usp=sharing'
  ] },
  //619
  { id: 88, code: 'CS619', title: 'Final Project (Helping Material)', category: 'cs', image: '💻',links:[] },
  //620
  { id: 88, code: 'CS620', title: '-------------------------------', category: 'cs', image: '💻',links:[] },
  //625
  { id: 89, code: 'CS625', title: 'Professional Practices', category: 'cs', image: '💻',Link:'' },
  { id: 90, code: 'CS701', title: 'Theory of Computation', category: 'cs', image: '💻',links:[
    'https://docs.google.com/document/d/1qSAffsjclAd59ikvNeeAxXY-7sI4_z9K/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  //CS702
  { id: 91, code: 'CS702', title: 'Advanced Algorithms Analysis & Design', category: 'cs', image: '💻',Link:'' },
  //CS703
  { id: 92, code: 'CS703', title: 'Advanced Operating Systems', category: 'cs', image: '💻',Link:'' },
  //CS704
  { id: 93, code: 'CS704', title: 'Advanced Computer Architecture II', category: 'cs', image: '💻',Link:'' },
  //CS706
  { id: 94, code: 'CS706', title: 'Software Quality Assurance', category: 'cs', image: '💻',Link:'' },
  //CS707
  { id: 95, code: 'CS707', title: 'Network Security', category: 'cs', image: '💻',Link:'' },
  //CS708
  { id: 96, code: 'CS708', title: 'Software Requirement Engineering', category: 'cs', image: '💻',Link:'' },
  //CS710
  { id: 97, code: 'CS710', title: 'Mobile & Pervasive Computing', category: 'cs', image: '💻',Link:'' },
  //CS711
  { id: 98, code: 'CS711', title: 'Software Design', category: 'cs', image: '💻',Link:'' },
  //CS712
  { id: 99, code: 'CS712', title: 'Distributed DBMS', category: 'cs', image: '💻',Link:'' },
  //CS718
  { id: 100, code: 'CS718', title: 'Wireless Networks', category: 'cs', image: '💻',Link:'' },
  //CS724
  { id: 101, code: 'CS724', title: 'Software Process Improvement', category: 'cs', image: '💻',Link:'' },
  //cs726
  { id: 102, code: 'CS726', title: 'Information Retrieval Techniques', category: 'cs', image: '💻',Link:'' },
 
  //css portion start here

  //CSS - Central Superior Services
  { id: 103, code: 'CSS', title: 'CSS pdf files. international law download free pdf.international law by MalcolmShaw’s. international law sixth edition', category: 'css', image: '📊',links:[
    'https://drive.google.com/file/d/1OFi1K1cm8IdZgKjZN-MNlN4jVAUN1LeA/view?usp=sharing',
    'https://drive.google.com/file/d/1ROXp5QdGo2r7JOmt2sZbi_OPw2merhLQ/view?usp=sharing',
    'https://drive.google.com/file/d/1nlfP65OIlDKNE-zSZNM9Fo8ekw8re8oc/view?usp=sharing',
    'https://drive.google.com/file/d/1J2JObDHttrJVh67NQuOFe5p4HrrwRW72/view?usp=sharing',
    'https://drive.google.com/file/d/1xE5rEosKiAXe0Q1UuzAqWxXoVd97m_qS/view?usp=sharing',
    'https://drive.google.com/file/d/19OeAtv2rBIEQFNRkHbuvPkvR4K938Eov/view?usp=sharing',
    'https://drive.google.com/file/d/1HrWOZ4EBIG067afbDnOuKcdpOX0H7Z6F/view?usp=sharing',
    'https://drive.google.com/file/d/1e6fzmOAIkbwk4Ajg0ErWtT9ci2RIf5z_/view?usp=sharing'
  ]},

//Current Affaire
  { id: 103, code: 'CSS', title: 'CSS pdf files. Current affairs download free pdf.Current affairs all files.', category: 'css', image: '📊',links:[
   'https://drive.google.com/file/d/11emcl2IqYxkQvazJebaIumZClL4RI_Rb/view?usp=sharing',
   'https://drive.google.com/file/d/1sjYGocculINrRPujcw-kxnTaEnN9Nj4Q/view?usp=sharing',
   'https://drive.google.com/file/d/1fZ838Q5nx26JfILDjabHMz3xblZLi86y/view?usp=sharing',
   'https://drive.google.com/file/d/1nQOJ6uB3iCnMFZcNnKRJwHHf_gNF-lLF/view?usp=sharing',
   'https://drive.google.com/file/d/1_oziXzz6JTA3ACcYuulEtlmc2prn_ZQt/view?usp=sharing',
   'https://drive.google.com/file/d/1ajmujv42DCchURTMOOVIaKX4naYj9Y3A/view?usp=sharing',
   'https://drive.google.com/file/d/1WsJPXX95eBB0LDa5_nXkR-pqpiyUSf4b/view?usp=sharing',
   'https://drive.google.com/file/d/1SCPXZb25kmpakmF0atTQ_7VWPeE3KyUH/view?usp=sharing'
  ]},
//Current Affaire
  { id: 103, code: 'CSS', title: 'CSS pdf files. Current affairs download free pdf.Current affairs all files.', category: 'css', image: '📊',links:[
   'https://drive.google.com/file/d/1Lb_X2_YF5xIfOELpJ-xWUy0yWI-HdY1X/view?usp=sharing',
   'https://drive.google.com/file/d/1CzVzyI3i8-_ShnDisf3lXyVUP_99OOMj/view?usp=sharing'
  ]},
];


export const finalTermDataPart3 = [
  // ECO - Economics
  { id: 103, code: 'ECO401', title: 'Economics', category: 'eco', image: '📊',links:[
    'https://drive.google.com/file/d/1InO_adTD8P-U9yv_ALjwnbuLnNoG02sP/view?usp=sharing',
    'https://drive.google.com/file/d/1mAHPoIXWk15J9a7Qw3Lxa_dHj93tH8di/view?usp=sharing',
    'https://drive.google.com/file/d/1XLDu_UztcFzihMMX_Sh9NKuG9474iQo8/view?usp=sharing',
    'https://drive.google.com/file/d/1HXr6fBHvYJG7o73PWPNR1xQQaekf2ZYd/view?usp=sharing',
    'https://drive.google.com/file/d/1LvcHhy3QSZ-Z42V5J_3umzcuNniEqyXS/view?usp=sharing',
    'https://drive.google.com/file/d/1cFSS_3eNL0jziZnn0BxZQF7kkNd1OABt/view?usp=sharing',
    'https://drive.google.com/file/d/1Ivsn_eNi5OLXiUAO0J9c_HO3s2jdByu5/view?usp=sharing',
    'https://drive.google.com/file/d/1PPWu0D7A22qUBguKkzkM9979H5ofC3Fl/view?usp=sharing',
    'https://drive.google.com/file/d/1k4vV8PnXyNdx1Kh80ZeeZd0mrERK5iNp/view?usp=sharing'
  ] },
  //ECO402 files
  { id: 104, code: 'ECO402', title: 'Microeconomics', category: 'eco', image: '📊',links:[
    'https://drive.google.com/file/d/16x6cmxhVlDY0T9xOihef-4Fc9gsa4atd/view?usp=sharing',
    'https://drive.google.com/file/d/1ZXQk5eQnIzX4xQzhoCopUnQd67YNUgjT/view?usp=sharing',
    'https://drive.google.com/file/d/1pVViIA1sVNFPbwIk7OE6Znl-dWrzQYkA/view?usp=sharing',
    'https://drive.google.com/file/d/1zg_MgrZ4woPX2q6u87MeJWFtGohDyYuo/view?usp=sharing',
    'https://drive.google.com/file/d/1naV9V3VHcVVQHWI-VU-ydi7mkOi6bqIm/view?usp=sharing',
    'https://drive.google.com/file/d/15P3mPKsoUq1biag5weC52nL1jfeMtRX8/view?usp=sharing',
    'https://drive.google.com/file/d/1gapdUZn-WM18n-E3oF6T-CzaR6k4nYwX/view?usp=sharing',
    'https://drive.google.com/file/d/1d0wLqy0_V-TBRyJQtzgcbXHwP6LM8y65/view?usp=sharing',
    'https://drive.google.com/file/d/13PbXB_kjFM9VJZUxd9EQzhUS5nrHKdkK/view?usp=sharing'
  ] },
  //ECO403
  { id: 105, code: 'ECO403', title: 'Macroeconomics', category: 'eco', image: '📊',links:[
    'https://drive.google.com/file/d/17fabzfaKqx7gc6pvT3yCZmnAG0tnhdOc/view?usp=sharing',
    'https://drive.google.com/file/d/1ZbLQhnC38tXLP9aj_o-EtoIuieQZ2WGH/view?usp=sharing',
    'https://drive.google.com/file/d/1pNEmzYkUtG9YsRkeplXzKxp4LTJxlGgy/view?usp=sharing',
    'https://drive.google.com/file/d/1J92DUBAWev6zUvhrjFnHw-FaFJpqyVhm/view?usp=sharing',
    'https://drive.google.com/file/d/1-MGEcKYOd62cjiGBFP192Mj9rHnH6AGq/view?usp=sharing',
    'https://drive.google.com/file/d/1x_pIZZjNsx20omDahE9nP84OrxX088WG/view?usp=sharing'
  ] },
  //ECO404
  { id: 106, code: 'ECO404', title: 'Managerial Economics', category: 'eco', image: '📊',links:[
    'https://drive.google.com/file/d/1KP5X6AGkkNL1BtIb5O_JwMMWljobZTLD/view?usp=sharing',
    'https://drive.google.com/file/d/1pR6fqdZDb3bJSyfDRAIPXoiIoNbY8T3R/view?usp=sharing',
    'https://drive.google.com/file/d/1bryh5lclDYfEeoRcL0Nv15U2EJ0ybo1o/view?usp=sharing',
    'https://drive.google.com/file/d/1QZE2--kMBr3YmrFQV0dNxvS2YXoIajhZ/view?usp=sharing'
  ] },
//ECO406
  { id: 107, code: 'ECO406', title: '------------------', category: 'eco', image: '📊',links:[
    'https://docs.google.com/document/d/1u-6ytUdfcU3lQnm8HgIPPQO0ErJ6ZuY4/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
//ECO501
  { id: 107, code: 'ECO501', title: 'Development Economics', category: 'eco', image: '📊',links:[] },
//ECO601
  { id: 108, code: 'ECO601', title: 'Business Econometrics', category: 'eco', image: '📊' },
//ECO606
  { id: 109, code: 'ECO606', title: 'Mathematical Economics I', category: 'eco', image: '📊' },
//ECO607
  { id: 110, code: 'ECO607', title: 'Mathematical Economics II', category: 'eco', image: '📊' },
  
  { id: 111, code: 'ECO612', title: 'Population Economics', category: 'eco', image: '📊' },
  
  // EDU - Education
  { id: 112, code: 'EDU101', title: 'Education Course', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1mIKkVNGHgUhTXREtQ1FMRpVO_mx5gqFw/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 113, code: 'EDU201', title: 'Education Course', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/165rfy7_tx4-U83zEuDl7ye8JlEjcAyZh/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 114, code: 'EDU301', title: 'Education Course', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1TKIh3vJIXcKfYUefsEbNDR6AZ6rqzUiu/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1Bc0rjg-FRLZB1GEFC3aenjhhM3qXnB8d/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 114, code: 'EDU303', title: '----------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU304', title: 'student guidance & counselling', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/194oX4ab_Z1JsqY60e11OxPOjL-935rbV/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU305', title: '---------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1GdE1DO5wfSbo-QJ9uIJ11LQiMVKBZ5a4/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU401', title: 'Contemporary Issues and Trends in Education', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU402', title: 'Curriculum Development', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1MCY94I67kNh8yQNK1ZoLr7kkj4sOysRZ/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1iUn2C_-aSbMBTFplVd_2napA1vNsFknd/view?usp=sharing',
    'https://docs.google.com/document/d/1SJ9ApHn2NucM4XBvgNTFOzjsAiKKtIKj/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1zbuznHpgW9jwIhVHjst3nrFnYwUSivU7/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU403', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU404', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU405', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1WmwhkuV2IXGUckoZtsGF3msQgR1tW8bo/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU406', title: 'Critical Thinking and reflective Practice', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1LKLeDCkAy2zT24VtYQKIGwtNBNii4KZV/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU410', title: 'Teaching of Literacy Skills', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1pbXex5Ok3c8s6ovbswfH7DmKaH7gXYR1/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU411', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU430', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1ke-A5j5PgySKudRVCw2Ozt3RjKhEKixL/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU431', title: 'Test Development and Assessment', category: 'edu', image: '🎓', links: [
    'https://drive.google.com/file/d/1gox7babwm-OxUWjCFioeX8KbUq8quoBg/view?usp=sharing'
  ]},
  { id: 114, code: 'EDU501', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1l33_FyBBSOSmdKJ6vuDyI041FOrsk00v/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU505', title: 'Education Development in Pakistan', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1l33_FyBBSOSmdKJ6vuDyI041FOrsk00v/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'ED510', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1NKOXc5oi2GO7ZtzwIz_jmXY6ytTs-Bp2/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU512', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1luOKjmCNFm8z9vXjJ1ULB35KCO4egwUl/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU515', title: 'Teaching Of Geography', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1jJT9JyFqF1YrC_UwhzKpEIWNVpjEel5m/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU516', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1IyclStZgcL8ah8-U_Ey6YM_Yi_AV9GSZ/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
  ]},
  { id: 114, code: 'EDU601', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1wKlSrBFbCn1GWQsZmZgw7d2VzYjzgp5k/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/17D00Z1aSzdhcbs6tLFE3BmPq3iYESQmk/view?usp=sharing',
    'https://docs.google.com/document/d/1CXmqGOcps8icxvqcKRwBLRpZ4LIf9vUE/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU602', title: '-------------------', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1gXlqaPa0basoTpKDyAZMiXDlp4bs7-BI/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU603', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU604', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU619', title: 'Class Observation Form', category: 'edu', image: '🎓', links: [
    'https://docs.google.com/document/d/1fOkzsdUZzXgE2n1QMM4CikoL56aUCP4N/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 114, code: 'EDU654', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU705', title: '-------------------', category: 'edu', image: '🎓', links: []},
  { id: 114, code: 'EDU712', title: '-------------------', category: 'edu', image: '🎓', links: []},

  // ENG - English
  { id: 115, code: 'ENG001', title: 'English Course', category: 'eng', image: '📚' , links: [
    'https://drive.google.com/file/d/1HB6dprQyzSHbDb84FuSfePs3uAjFE1gZ/view?usp=sharing',
    'https://drive.google.com/file/d/1RsPFSsZ7qWJC9RlsTIxryI29WT0HOdKm/view?usp=sharing',
    'https://drive.google.com/file/d/1VlSY_Ees9R-TDbrvcvQdSeQNbSHyhlYy/view?usp=sharing',
    'https://drive.google.com/file/d/16WigVw7ZKuroyhRFZUaqCTdwU9PZRKIc/view?usp=sharing',
    'https://drive.google.com/file/d/1NVuTa7U8_cx88LIrEc_6HoWjX66WKEE8/view?usp=sharing',
    'https://drive.google.com/file/d/1AkNNQu27ZOiWjOPExnDUYyEGIspRYxDA/view?usp=sharing'
  ]},
  { id: 116, code: 'ENG101', title: 'English Course', category: 'eng', image: '📚', links:[
    'https://drive.google.com/file/d/1eieTxOdtorKsYj4LMFiZ0Gb4g5PXHfT5/view?usp=sharing',
    'https://drive.google.com/file/d/1DDIgAqym3y2XU8kuRQuGJm6eR7rfdCvi/view?usp=sharing',
    'https://drive.google.com/file/d/1rCCPruhM_5vXkDWrf0PP7lySpQfyoc15/view?usp=sharing',
    'https://drive.google.com/file/d/15DtMZ0qiZu6Tca6huVfszilgeyAg2OVr/view?usp=sharing',
    'https://drive.google.com/file/d/1v2ljfV000IVZyF4n7khNluQRw_gkVQbY/view?usp=sharing'
  ] },
  { id: 108, code: 'ENG201', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1IFmPMkDa63X9sZ3norebcSiZWmQoguL_/view?usp=sharing',
    'https://docs.google.com/document/d/1WSDtCE2scqOehTG-85CMT2p32fFA_-nF/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1h0xVysj3qnS5ziFlDBLabjXvtPahu35y/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1j7glH2tgkxPXnF18PM-0oiHenoG-QR5x/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/14Uym7Bsgb-SfmbciTP1zP04sn4-sKdqc/view?usp=sharing',
    'https://drive.google.com/file/d/1PRHCYeiX1tiOablIWzeRGs-0fthUkyUH/view?usp=sharing',
    'https://drive.google.com/file/d/1riiDFmVu-lvGchrKS52L4rPmh4ro4-ww/view?usp=sharing',
    'https://docs.google.com/document/d/1uGGQ-bVdJM_8F2npJ51iFI2o5OB0UP5p/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1QkaCtwxfw0MxWHsoJXzA3Axruwy9hPw9/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1L04tdMFHIzgSozxsjCVNoQEtG5Hr2B2J/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 109, code: 'ENG301', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/10JG4gu2XvFR_a1mIIM1_1HwXu9dS8xfa/view?usp=sharing',
    'https://drive.google.com/file/d/1uMLc2OvnazJqoLcWTIYmP8hqbRKjzBA5/view?usp=sharing',
    'https://drive.google.com/file/d/1DkDvoRW0XyvjqBB-0C5bgegjSNxXOr9H/view?usp=sharing',
    'https://drive.google.com/file/d/1rJgYO3fEEHneGBgHzdFa2EHTbe4vHCyk/view?usp=sharing',
    'https://drive.google.com/file/d/1NZ3qHSZoGNnCFjdkuOnWt9pFeQK_EW5X/view?usp=sharing',
    'https://drive.google.com/file/d/1kEsrBMsJM8wDI_cBsGjIiy2frsEwdneH/view?usp=sharing',
    'https://drive.google.com/file/d/1UkOPUnx8ei2PQfrzYV9AoH3uzT2GAxQM/view?usp=sharing'
  ] },
  { id: 110, code: 'ENG501', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1_YDXthVJjOAuoWaOTvoWbkE569Q1v3Bf/view?usp=sharing',
    'https://drive.google.com/file/d/1N91Yzn0WRwlzN64AhjOsQIpnu9s3MJKA/view?usp=sharing',
    'https://drive.google.com/file/d/1UizZuWO3b1FkOeYtGUUwwD_7r5WjXS_O/view?usp=sharing'
  ] },
  { id: 111, code: 'ENG502', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1BakeEpfshtCA4p9EnH8sf0zHNX3eE_yZ/view?usp=sharing',
    'https://drive.google.com/file/d/1KVpvbepRMmuT7su7T4wEViIISX_g5CKh/view?usp=sharing'
  ] },
  { id: 112, code: 'ENG503', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/122DOZuLVWKptN32NB2-UVM7e4LmFNANp/view?usp=sharing',
    'https://drive.google.com/file/d/1dFLNFgQjLlGXYVKziPNeNxmpFNiMbQGu/view?usp=sharing'
  ] },
  { id: 113, code: 'ENG504', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1dFLNFgQjLlGXYVKziPNeNxmpFNiMbQGu/view?usp=sharing',
    'https://drive.google.com/file/d/1r0aMV5RRASWr_QkyOsumC6rQYfXJemrt/view?usp=sharing',
    'https://drive.google.com/file/d/1f5XUhDEXNLGs2smxktNcedQWCXCIK2Q9/view?usp=sharing'
  ] },
  { id: 114, code: 'ENG505', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1Z1dB21wZB0X6KgAQ8s6CHw16uCDy9wDd/view?usp=sharing',
    'https://drive.google.com/file/d/1BN7DypGLXgaA7w-TbVUUuIZJtY2zZPjZ/view?usp=sharing'
  ] },
  { id: 115, code: 'ENG506', title: 'English Course', category: 'eng', image: '📚',links:[
    'https://drive.google.com/file/d/1AX2HjkiFtmJ916vCVNlxdaFQfah3ngfQ/view?usp=sharing',
    'https://drive.google.com/file/d/1c7at7lFi3Htkpf6d7hXuvjOixF0Un8WJ/view?usp=sharing'
  ] },
  { id: 116, code: 'ENG507', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 117, code: 'ENG507B', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 118, code: 'ENG509', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 119, code: 'ENG510', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 120, code: 'ENG511', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 121, code: 'ENG512', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 122, code: 'ENG513', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 123, code: 'ENG515', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 124, code: 'ENG516', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 125, code: 'ENG518', title: 'English Course', category: 'eng', image: '📚',links:[] },
  { id: 126, code: 'ENG519', title: 'English Course', category: 'eng', image: '📚',links:[] },

  
  // ETH - Ethics
  { id: 127, code: 'ETH201', title: 'Ethics (For Non-Muslims)', category: 'eth', image: '🧠' },
  { id: 119, code: 'ETH202', title: 'Ethics (For Non-Muslims)', category: 'eth', image: '🧠' },

  // FIA - Fedral Investigatoin Agency
  // FIA - ASI
  { id: 128, code: 'FIA', title: 'FIA ASI all important pdf files download free', category: 'fia', image: '🕵️‍♂️', links: [
    'https://drive.google.com/file/d/1FQeLJRFZRbAHDzT9PmConrBDtvg_KPgj/view?usp=sharing',
    'https://drive.google.com/file/d/1ErTN-8r8zs2ym8TrI9ioXbDHaU39lMl7/view?usp=sharing',
    'https://drive.google.com/file/d/1LMDCa-IMolTEP13O1uyBR9JeDSR9xuJS/view?usp=sharing'
  ]},

  // FIA - Assistant sub inspector
  { id: 128, code: 'FIA', title: 'FIA ASI all important pdf files download free', category: 'fia', image: '🕵️‍♂️', links: [
    'https://drive.google.com/file/d/1XF558pwLryrm0WVLQhgPtocQbbubVEO-/view?usp=sharing',
    'https://drive.google.com/file/d/1Ae3b9aslI_pWnPFMkVl1FlrEi3XCrkOm/view?usp=sharing',
    'https://drive.google.com/file/d/1RTCIMserPWWH_eki5Kn7ptwsgKMEmxD6/view?usp=sharing'
  ]},

  // FIA - LDC
  { id: 128, code: 'FIA', title: 'FIA ASI all important pdf files download free', category: 'fia', image: '🕵️‍♂️', links: [
    'https://drive.google.com/file/d/1RHkklaJcQ4J4hZQQYHysWT-RNt6fRy9T/view?usp=sharing',
    'https://drive.google.com/file/d/1RHkklaJcQ4J4hZQQYHysWT-RNt6fRy9T/view?usp=sharing'
  ]},

    // FIN - Finance
  { id: 120, code: 'FIN611', title: 'Finance Course', category: 'fin', image: '💰',links:[
    'https://drive.google.com/file/d/1g5okRbSkGjD66iNSw9tdoemBkwxXyoUb/view?usp=sharing',
    'https://drive.google.com/file/d/1fe6dgGcPDqvE6tUfxfPMLJrKWwo33xwV/view?usp=sharing',
    'https://drive.google.com/file/d/1kr5JbalTrJXnzaur7S7-_MFT2qmgZhqw/view?usp=sharing',
    'https://drive.google.com/file/d/1m4phhEWUcaygDKXfEMLpUhn5YAXy7-1j/view?usp=sharing',
    'https://drive.google.com/file/d/1ZzZqrO4kMinSg_E3MHdqD5jWW83ZNsLr/view?usp=sharing'
  ]},

  //FIN - finance 
  { id: 121, code: 'FIN621', title: 'Finance Course', category: 'fin', image: '💰', links:[
    'https://drive.google.com/file/d/1tBjbP1P0rLsd-oPn6_b5OWADvuyKym8h/view?usp=sharing',
    'https://drive.google.com/file/d/1HdfJ0FfTYzfece3cYN5cgjv8go7mWtir/view?usp=sharing',
    'https://drive.google.com/file/d/1EYJaBJisB4p8NV7M7fL0JCeAkGmbCtvx/view?usp=sharing',
    'https://drive.google.com/file/d/1-hcQ-1HlQJ-x6InuZcdTMUqRdnsBOzCt/view?usp=sharing',
    'https://drive.google.com/file/d/1cHe31_m7CpimER9tCC5t9BtsN5i7Qv2b/view?usp=sharing',
    'https://drive.google.com/file/d/1xZ6Njfumblbyw1v1B0onxcXfxzibQbnY/view?usp=sharing',
    'https://drive.google.com/file/d/1QKyUpkY5EnU61Z6ADrb0oTK-0FLQ3vp5/view?usp=sharing'
  ] },
  { id: 122, code: 'FIN622', title: 'Finance Course', category: 'fin', image: '💰', links: [
    'https://drive.google.com/file/d/1mKhx6t1-tU1X4ybE5WrChrjvYLNNpzVg/view?usp=sharing',
    'https://drive.google.com/file/d/1uaJWcmhS6ACCPWtIexnIgMn5fVWUO5W-/view?usp=sharing',
    'https://drive.google.com/file/d/1-E1eG8ihchuOb88HOpCzt1nhxmjTLkf0/view?usp=sharing',
    'https://drive.google.com/file/d/1qdUd-aYd4djSPJFKLy8fgZLscClkwwbU/view?usp=sharing',
    'https://drive.google.com/file/d/1AoxWbT0548MS2c3V5KDHnXhO6CTEnQQM/view?usp=sharing',
    'https://drive.google.com/file/d/1wCEBtEjJn9ami36p4iscThfCRX0GLGJC/view?usp=sharing',
    'https://drive.google.com/file/d/1C3bz-2GAU_JzyvXU70H60WWpytu84ixg/view?usp=sharing',
    'https://drive.google.com/file/d/18gRA7NJiq_fXA9pfL7lU_fuaB0F_3j8R/view?usp=sharing',
    'https://drive.google.com/file/d/11JokFy3P-a4wnje8O9eIVYel8Xvniljh/view?usp=sharing',
    'https://drive.google.com/file/d/1FUokME_eM1I3fUbIQBqCCicGlsZ3gNDF/view?usp=sharing',
    'https://drive.google.com/file/d/1qseOIA98bB-mHNTVw8TLd_vO6xx3TQJG/view?usp=sharing'
  ] },
  { id: 123, code: 'FIN623', title: 'Finance Course', category: 'fin', image: '💰', links:[
    'https://drive.google.com/file/d/11ufFYiaZ8gO-J5pN-Sgim6qpDxL5abEY/view?usp=sharing',
    'https://drive.google.com/file/d/1sKP4dTO6BhD1_mfOIiBB10_RKaHKiXHK/view?usp=sharing',
    'https://drive.google.com/file/d/1WAAvikEovlb0H9Ogu6K6f-np5giEYebT/view?usp=sharing',
    'https://drive.google.com/file/d/1cmlaJSbpL6jOi9GvLTVTEkj40GNlu81Y/view?usp=sharing',
    'https://drive.google.com/file/d/1taN0fpQd_Gz_LhhQQJ9-AgqWgiNA2lle/view?usp=sharing',
    'https://drive.google.com/file/d/18i-vVFxeFBChyehfTMW3yDqjD2yV7ct3/view?usp=sharing',
    'https://drive.google.com/file/d/1TZmxczjsLzZkdgDBYPJu3h0e0p0KDAdO/view?usp=sharing'
  ]},
  { id: 124, code: 'FIN624', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 125, code: 'FIN625', title: 'Finance Course', category: 'fin', image: '💰' },
  { id: 125, code: 'FIN630', title: 'Finance Course', category: 'fin', image: '💰', links:[
    'https://docs.google.com/document/d/1O2bHRIAXHJEAJaceXBMIAZlp5E7d1R_Z/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/17xWJTtDholyI_W9qEJPRrW64W_koTySS/view?usp=sharing',
    'https://drive.google.com/file/d/1_c1pmMeOek2EcWoNNvStPw3bMtTvHjpg/view?usp=sharing'
  ] },
  { id: 125, code: 'FIN730', title: 'Finance Course', category: 'fin', image: '💰' },

  
  // GSC - General Science
  { id: 126, code: 'GSC101', title: 'General Science', category: 'gsc', image: '🌍' },
  { id: 127, code: 'GSC201', title: 'Teaching of General Science', category: 'gsc', image: '🌍' },
  
  // HRM - Human Resource Management
  { id: 128, code: 'HRM613', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 129, code: 'HRM617', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 130, code: 'HRM623', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 131, code: 'HRM624', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  { id: 132, code: 'HRM628', title: 'HRM Course', category: 'hrm', image: '👩‍💼' },
  
  // ISL - Islamic Studies
  { id: 133, code: 'ISL201', title: 'Islamic Studies', category: 'isl', image: '📿',links:[
    'https://drive.google.com/file/d/1pDs_zuX2d81_7yfwgfb9oC2QpGmfu-w6/view?usp=sharing',
    'https://drive.google.com/file/d/16qC4ZNQzJtwVaa-BmJTZ955revXGbLG1/view?usp=sharing',
    'https://drive.google.com/file/d/1tfWubaNkAWiD2-p6rEWsRv_mICPAT1zt/view?usp=sharing',
    'https://drive.google.com/file/d/10nrjhM4CfiT12rEfHs3JqncCrpj170vS/view?usp=sharing',
    'https://drive.google.com/file/d/1xIBHP0JmtlIOz8AFfzLTwbc3Bbsk1rcp/view?usp=sharing',
    'https://drive.google.com/file/d/1cSrhXBwkfrbxqFdgrrqg15Nlac5jyuHu/view?usp=sharing',
    'https://drive.google.com/file/d/1IOAuF15wF1q2qX4PT38QXUESZbmV1aFT/view?usp=sharing',
    'https://drive.google.com/file/d/1bpvSHNTxyZcWTvd7XLcv86Kn5byTDlYa/view?usp=sharing',
    'https://drive.google.com/file/d/1INQFd1WhCImLST7Peb-8tcAxoGQ_RoP2/view?usp=sharing',
    'https://drive.google.com/file/d/1VWGcpSYJz6OcQRMSFM0-6kbFX04alVmH/view?usp=sharing'
  ] },
  { id: 134, code: 'ISL202', title: 'Islamic Studies', category: 'isl', image: '📿', links: [] },
  
  // IT - Information Technology
  { id: 135, code: 'IT430', title: 'E-Commerce', category: 'it', image: '🌐', links:[
    'https://drive.google.com/file/d/1UnVKDdkP-7UAc8C9DFVq2mYpRgozB-GA/view?usp=sharing',
    'https://drive.google.com/file/d/1RNNSd3fbga8I13pvRKhVRHxZAWQBinox/view?usp=sharing',
    'https://drive.google.com/file/d/1xr-pthhRRYzrS0aZczp5ZOZkqJv2STiN/view?usp=sharing'
  ] },
  
  // MCM - Mass Communication
  { id: 136, code: 'MCM101', title: 'Mass Communication Course', category: 'mcm', image: '📰', links:[
    'https://drive.google.com/file/d/1hzy-ZUSJKaixd88V31MCQmE_G2pr8qa_/view?usp=sharing',
    'https://drive.google.com/file/d/1RN9uV9YrhIjsZVm8koL6BK1MtS_yr_yS/view?usp=sharing',
    'https://drive.google.com/file/d/1ygXdcg4ubm1X1uoAHLF1oy6foVkUSSct/view?usp=sharing',
    'https://drive.google.com/file/d/12Nj03148jRU6WjxhrjdOxHctVb2SxTP3/view?usp=sharing'
  ] },
  { id: 137, code: 'MCM301', title: 'Mass Communication Course', category: 'mcm', image: '📰', links:[
    'https://drive.google.com/file/d/1djd0iiG5FEyvUywap3aHgjaIJXL9dFBj/view?usp=sharing',
    'https://drive.google.com/file/d/1XtMTD7b93jyP13KYvLilZLF5avTHlYMQ/view?usp=sharing',
    'https://drive.google.com/file/d/1gD70mVmMgkqa_WLaKOz3qdqvegx5qE17/view?usp=sharing',
    'https://drive.google.com/file/d/1zLVsTLU-cIgtofveqaF-F7KUjFuS-xDa/view?usp=sharing',
    'https://drive.google.com/file/d/1uBgex-EB3EfsFfjNNsBF3hf__zO4jrMg/view?usp=sharing',
    'https://drive.google.com/file/d/1DrJ9lLh0GdXXxlZ3y_j9m1G2bznzzlu-/view?usp=sharing',
    'https://drive.google.com/file/d/1u14GIkBAe_cHWZXGt_VBoGo729i_9Z9H/view?usp=sharing',
    'https://drive.google.com/file/d/1__FXyfX0gzPYZW2MYtCNa_67H5zXCT7v/view?usp=sharing',
    'https://drive.google.com/file/d/1WAePrU-YtVf9UsTfHFExcUwP-9gNVPY0/view?usp=sharing',
    'https://drive.google.com/file/d/1pJZezAVpTL5NkIN2aj45ygc5jcepNeOC/view?usp=sharing',
    'https://drive.google.com/file/d/1oVfgxonFaO69JhWHC-9UksJDB18yefvt/view?usp=sharing',
    'https://drive.google.com/file/d/1MA56cRJr8wOq7-bcI53p-k5xj_WEupgS/view?usp=sharing'
  ] },
  { id: 138, code: 'MCM304', title: 'Mass Communication Course', category: 'mcm', image: '📰', links:[
    'https://docs.google.com/document/d/1kTss8WkIJQuxZMMnk72vXgnDfJYQwini/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1Gne6J-ARDGNtI4_39m3SBKjf9EtH8IvV/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1m09NY3yLBppZFcOpV_YwZOTA8MRf49gi/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 139, code: 'MCM310', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 140, code: 'MCM311', title: 'Mass Communication Course', category: 'mcm', image: '📰', links:[
    'https://docs.google.com/document/d/1iZ8Md5mA4l3ValRJosQPyvT3pRcc-G5J/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 141, code: 'MCM401', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 142, code: 'MCM404', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 143, code: 'MCM411', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1z-Si8-H8hHyEL1P11HL-RwMWI67zgCNo/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/10BTiTOIb34mNKOoVhBEzS3r4mMf3aMt2/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1j2AIiE7QEOiieTxXO2HZmJHczJ-Un8t0/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 144, code: 'MCM431', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1hEbipyz3QUmPctapVCv4qPkMYBVqQR7c/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 145, code: 'MCM501', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[] },
  { id: 145, code: 'MCM511', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1wmGjew8e-jQdVr3_OzEP6hM3Mufoq6xZ/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1ovsWRMAcpk9nJvoTS9P8YgXoHf0iweI_/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 145, code: 'MCM514', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1B0nXzIKnJf_hXy-R2bYVZah8qxEyU91Z/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 146, code: 'MCM515', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1rZh0pmaI1_6sVmPWHGr9A_1auCEVpw1e/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1I1Ixz9P35z8E9rqrd3A4ox0vnQH4uwW8/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/13e5PNw2wsXiCnNZKOCU3RXy-DW7XfEth/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 146, code: 'MCM516', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/1vgg9F5vaZfX72M8UQZU1SZ681C9F6tmQ/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 147, code: 'MCM517', title: 'Mass Communication Course', category: 'mcm', image: '📰',links:[
    'https://docs.google.com/document/d/12CTF3OKUieNLUEj9hDbYnj5yMGNhmPKc/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 148, code: 'MCM520', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 149, code: 'MCM531', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 150, code: 'MCM601', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 151, code: 'MCM604', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  { id: 152, code: 'MCM610', title: 'Mass Communication Course', category: 'mcm', image: '📰' },
  
  // MGMT - Management
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

export const finalTermDataPart4 = [
  // MGT - Business & Management
  { id: 162, code: 'MGT101', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1KQ0EAND4GX6lPOTW7lEl_sKphtZVLiMD/view?usp=sharing',
    'https://drive.google.com/file/d/17V_oM36cJz5psMH0GAHmyqrCQD12FmNP/view?usp=sharing',
    'https://drive.google.com/file/d/1JjZ9YruCRBI97IPFpazAthDZKl8XxUR4/view?usp=sharing',
    'https://drive.google.com/file/d/1b9k_tXyY9kjDsxChjlMcBwiYu_QXc-TX/view?usp=sharing',
    'https://drive.google.com/file/d/1TEK_tGPHm5bLVjx1O3Iq5vouD1-d_Rlk/view?usp=sharing',
    'https://drive.google.com/file/d/1JKSPSRgbSjWrFuofxVpqS0hFBDRslw9x/view?usp=sharing',
    'https://drive.google.com/file/d/1rA4dqBlYpiK5hrLSeG46FEQ8i6-myrA4/view?usp=sharing',
    'https://drive.google.com/file/d/1mTC8QLwIZuvUO1g1oiKS8eqfCCDWPbTP/view?usp=sharing',
    'https://drive.google.com/file/d/1COmMiS9YPRJ1YP0KFJxHt9_F1CDRFTx4/view?usp=sharing'
  ] },
  { id: 163, code: 'MGT111', title: 'Business & Management Course', category: 'mgt', image: '📊' },
  { id: 164, code: 'MGT201', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1fhbcsU8zu6JhwF6JwiTH9vMQ3L3wlpbZ/view?usp=sharing',
    'https://drive.google.com/file/d/1rJjGFnTYwGNmLU0R4dZ57vcUFwqyjUuQ/view?usp=sharing',
    'https://drive.google.com/file/d/12YiokVT6wzloBPA8YyJRZi0eVpXFDxFr/view?usp=sharing',
    'https://drive.google.com/file/d/1ZCm__2A-Go1r84Unv5X_xMUEXxVE0yTD/view?usp=sharing',
    'https://drive.google.com/file/d/1OllAaRWMtOX24UsNnlajCIVRlISCNrcI/view?usp=sharing',
    'https://drive.google.com/file/d/150b1_bEJeVLrumrtwMv6Uc885ppCIz5u/view?usp=sharing',
    'https://drive.google.com/file/d/1OQr8Tnfw6Ley5fRCPMDEn7gs1dUbEr6B/view?usp=sharing',
    'https://drive.google.com/file/d/1IWOZ9rCmZ2Yi9HVqc7PV92JoEN9D5Rhw/view?usp=sharing'
  ] },
  { id: 165, code: 'MGT211', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/18aLovQyI8xqypMdtzHTzFphEFzKnVW3X/view?usp=sharing',
    'https://drive.google.com/file/d/1BL9SVNRpVSF13ANaQPfn9SlxVEyez5wT/view?usp=sharing',
    'https://drive.google.com/file/d/1f2Db9-J6vcVWMMU9Jmu52BrxNycGKtgO/view?usp=sharing',
    'https://drive.google.com/file/d/1Tph_TECFgEO09bNOkf_k-IZDItD1j8Ji/view?usp=sharing',
    'https://drive.google.com/file/d/11_02llx7vglecqmfC9gwqWL9Vro96P-h/view?usp=sharing',
    'https://drive.google.com/file/d/1da0--R1FhWqjVQk6nWlk7ezptUZYCpGk/view?usp=sharing'
  ] },
  { id: 166, code: 'MGT301', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1gyCyATKYD4CQW6jUYzIlBCH-03raVB6o/view?usp=sharing',
    'https://drive.google.com/file/d/1mF3TcMV8TUrNuw-O11gCgxUNhlGwpd4e/view?usp=sharing',
    'https://drive.google.com/file/d/1RFkjONAqqsqykj1h2EdpQ1kCjTL0MJDA/view?usp=sharing',
    'https://drive.google.com/file/d/12ZCt3YSqQJHO-eMqQo4a6cBJ8z9JHAzh/view?usp=sharing',
    'https://drive.google.com/file/d/1B4OOKU8urdjQ7dH-vQvdh_GXR4h3P-Qx/view?usp=sharing',
    'https://drive.google.com/file/d/1IMpXY6bWJ8fFOmxi33qty-bX3lNbngxk/view?usp=sharing',
    'https://drive.google.com/file/d/1iU73jKWoNED0QEeplSYGM6KXnG6TDPE_/view?usp=sharing',
    'https://drive.google.com/file/d/1FgZ1-1--4pFz4D7_C_mAu5kTl53D7Y7s/view?usp=sharing',
    'https://drive.google.com/file/d/1BjYnq3GkfhZAZOzTJ6mil7n4LHN_Ek0R/view?usp=sharing',
    'https://drive.google.com/file/d/10A3ShYSxRDvJ24lkapzL8ydQa1K5fcAi/view?usp=sharing',
    'https://drive.google.com/file/d/1a3jt6RgwvENWkpuTwe5MrqNG3sxsLBVH/view?usp=sharing',
    'https://drive.google.com/file/d/13c7M9WUXB2JZTtpxeRyntVlqgRcZ5BpJ/view?usp=sharing'
  ] },
  { id: 167, code: 'MGT401', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1MHFXF9Kar7_KV6TsK9847qUt_jDNxuoe/view?usp=sharing',
    'https://drive.google.com/file/d/1I2zMJLNH4gM0lKJF5YnlPS3mp-iAv2Z6/view?usp=sharing',
    'https://drive.google.com/file/d/1Co3U0_HOxAEhu8wvDV5TDMcbjiIMAJoY/view?usp=sharing',
    'https://drive.google.com/file/d/1bkSa9KNqvFCToQlwxAJPPM7DKF0wcQGW/view?usp=sharing',
    'https://drive.google.com/file/d/1006DpkryJ7-Fx0tzR2m3AJTb_WTsL5rj/view?usp=sharing',
    'https://drive.google.com/file/d/1kLKnuC1YsEQdASuz0q5I6iaj6BXQC1zL/view?usp=sharing',
    'https://drive.google.com/file/d/1kLKnuC1YsEQdASuz0q5I6iaj6BXQC1zL/view?usp=sharing',
    'https://drive.google.com/file/d/1X0TkvlXsrt-w1cT4S9OWV3RSzG200N1W/view?usp=sharing'
  ] },
  { id: 168, code: 'MGT402', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1-n6sCMNOfSxV9Q_PD8IJVak-Dw2sls6j/view?usp=sharing',
    'https://drive.google.com/file/d/1KsVd257svKneUqboi-hHc1kx0RcuqKUO/view?usp=sharing',
    'https://drive.google.com/file/d/1Km9AZBXZtaGo2PxiU9urP0GiTVhBDt3-/view?usp=sharing',
    'https://drive.google.com/file/d/15jqyOK4taSjWIeGCKnxtZ0XhccB5YQV9/view?usp=sharing',
    'https://drive.google.com/file/d/1fbWI6bhOanTMOck_NPU_7ngFWSX24JCR/view?usp=sharing',
    'https://drive.google.com/file/d/1fbWI6bhOanTMOck_NPU_7ngFWSX24JCR/view?usp=sharing',
    'https://drive.google.com/file/d/1yuFh_5mSK1aekfgdUeZ3PE5Y8gore9Il/view?usp=sharing'
    
  ] },
  { id: 168, code: 'MGT404', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1i_ha5XN1LzMgNvAw880FJ44J1PL3GAiJ/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT411', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1xCZxN1QeSZm1CCJdv_0eNxqhHWz6wCdy/view?usp=sharing',
    'https://drive.google.com/file/d/1LTdBNOxfrHxhS_99RZoa9LCicbkYUcvp/view?usp=sharing',
    'https://drive.google.com/file/d/1hN_mTYJH-zIMCv6dgE1pqz2skZH1ekti/view?usp=sharing',
    'https://drive.google.com/file/d/1cSB-aMvODqYGhnFBamj55fYj1eWSD6wT/view?usp=sharing',
    'https://drive.google.com/file/d/1e5ajy5P-xAT99BdC_Ni-9cKccsg7gnDR/view?usp=sharing',
    'https://drive.google.com/file/d/1dDOQaM4GUdxS8-b0JGnhx3i5cibL81Xl/view?usp=sharing',
    'https://drive.google.com/file/d/1atMUHloi2bnkw8fNh3arORoREK3vK13A/view?usp=sharing',
    'https://drive.google.com/file/d/1apSL1aBrNFRQBsLaKC8NdUB-5zeDx9Op/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT501', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://docs.google.com/document/d/1QCfhz5sfjJ2dz_ULAbG8bbVXVJzeacrC/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/177kJNh191LlhQWOQ3iE05pmQVMwvn9cc/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1fkZqjgSDQujpvIQWlpAuMCuP1ztinFmw/view?usp=sharing',
    'https://drive.google.com/file/d/1_v8RhPbWpLqiC6BFmnpmu9XHBJQVcSO1/view?usp=sharing',
    'https://drive.google.com/file/d/1PVaTGPAqqdI3Kvf7q-4_2iYP4Aa-H2em/view?usp=sharing',
    'https://drive.google.com/file/d/1LM835dpd0rMOGjp5mOg8e_T2EuRNImye/view?usp=sharing',
    'https://drive.google.com/file/d/1LM835dpd0rMOGjp5mOg8e_T2EuRNImye/view?usp=sharing',
    'https://drive.google.com/file/d/1R_vfEybwXYHSrtHhsrCRP9toC2iRfOEe/view?usp=sharing',
    'https://drive.google.com/file/d/1sL9n92EAJPCASuzrn50FomW3dDhawCuy/view?usp=sharing',
    'https://docs.google.com/document/d/1xHkjCtcIO8R8WuWawaRe_pv7YF2TeMQM/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1xHkjCtcIO8R8WuWawaRe_pv7YF2TeMQM/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/15pTV3ACjTx7-4pU4nL8NcNsthlXIjefq/view?usp=sharing',
    'https://drive.google.com/file/d/1fkZqjgSDQujpvIQWlpAuMCuP1ztinFmw/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT502', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/16HD_Zr8JqOVusji1AG9LasNfIbKPYcDp/view?usp=sharing',
    'https://drive.google.com/file/d/1mqS348CcAGhnrQi4RZGn9SDI4J5RZzQX/view?usp=sharing',
    'https://drive.google.com/file/d/1wfCS3eu-hUusELmIczE5eTAC9D7iuo7J/view?usp=sharing',
    'https://drive.google.com/file/d/1Rp9PI3PSKLDM_Cjw9pfqGqqIGNQNw_BF/view?usp=sharing',
    'https://drive.google.com/file/d/1uZULw6lBGeb6YOERR1_F9BEiIR9rBJnS/view?usp=sharing',
    'https://drive.google.com/file/d/1I78AO53b9n5sWLiawO9ZkYWyCzY2WCq8/view?usp=sharing',
    'https://drive.google.com/file/d/1FGKj2HKdOCd7a79UC8jj7vOff_sQvXXG/view?usp=sharing',
    'https://drive.google.com/file/d/1i5Y49Aq-kM2IixhjdvZ-JlCwa3wtUfUk/view?usp=sharing',
    'https://drive.google.com/file/d/1zFAWxUbqX7r3bLv3cHnnttBPpjZuzYA5/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT503', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/11SGapCqrdpKsXkS-CUJrONREVR1eOJZM/view?usp=sharing',
    'https://drive.google.com/file/d/1n2TagVtazmVpljzjJcWXEisd_uNo84Lq/view?usp=sharing',
    'https://drive.google.com/file/d/18AV2NZnffxGnOxveWIKd2snwy7ejYJY-/view?usp=sharing',
    'https://drive.google.com/file/d/1nN_7KZOV96VKSYygXL2IVB1XprtBh0PR/view?usp=sharing',
    'https://drive.google.com/file/d/1p5jL2tvQ7dQFX4YTBOtLoZlxbSDckxJF/view?usp=sharing',
    'https://drive.google.com/file/d/1yH8W0IBIOGiQ4VrT_Ucst6ff4Set5kjm/view?usp=sharing',
    'https://drive.google.com/file/d/1fpZE1uU993J2TXYoNwl_OvAdzuW0Q05m/view?usp=sharing',
    'https://drive.google.com/file/d/1BntoAISXU217cxMDp9bnMEe2u-Xc23El/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT504', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1_XbYEMlVosjsv_t8Y-f-aFYhQHE_HJfW/view?usp=sharing',
    'https://drive.google.com/file/d/1Gf-7g-0PkNLUNLZx9ESAcN8HgSjy3SLX/view?usp=sharing',
    'https://drive.google.com/file/d/1TJGweTecYf2aus8w_LTmA3GTFxODvWqh/view?usp=sharing',
    'https://drive.google.com/file/d/19NK3VoYJIAHR8rUljtidMTBvBe-HbJSC/view?usp=sharing',
    'https://drive.google.com/file/d/1-odGotxDRbW5b2DQWEJo3x7IL0RyF1pZ/view?usp=sharing',
    'https://drive.google.com/file/d/1sObJr4TNP79A_bX4PkOUHZOaLzijda4H/view?usp=sharing',
    'https://drive.google.com/file/d/159ZHEazRzvjRTLBNdlCXN-_eu-wlVY5S/view?usp=sharing',
    'https://drive.google.com/file/d/1OacLlVNehb4lb3s46jq2RLdB5WzynHHq/view?usp=sharing',
    'https://drive.google.com/file/d/1182a4f1gNqanDbSO8wrwV7wXVp3ecn-3/view?usp=sharing',
    'https://drive.google.com/file/d/15i61dX--wy6d6CxSCWmlTW30xBer9VYX/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT510', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1zsBpMDxZ0T_A7oAKGgUp8PrkPTMjAU2K/view?usp=sharing',
    'https://drive.google.com/file/d/1gN_KIQLBxrYfuTH8DcYxVs4WADGDWMju/view?usp=sharing',
    'https://drive.google.com/file/d/1MfXKqINz-BG4p_FlFwxOq0XhhgiauXom/view?usp=sharing',
    'https://drive.google.com/file/d/1FpMBRpmkbCDvSicZY4NH4ihsOpxWcKIv/view?usp=sharing',
    'https://drive.google.com/file/d/1UnIx0VRaRT9Z8Xxg3qsi6jFTuAuZsTFP/view?usp=sharing',
    'https://drive.google.com/file/d/1UnIx0VRaRT9Z8Xxg3qsi6jFTuAuZsTFP/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT513', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT520', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT522', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT601', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1SjkbH7a5JLqd0HfcujNh2Gmqcb8zOXs-/view?usp=sharing',
    'https://drive.google.com/file/d/1df_NvB2BKa5dHLhCz3i7bMZRI26FjGzT/view?usp=sharing',
    'https://drive.google.com/file/d/1xTsh4fE6VFE4JWr393Um8Dv6vFzad0Ih/view?usp=sharing',
    'https://drive.google.com/file/d/1WrImiiIn5UzxzsnbzpRR3rjx15e8nuWm/view?usp=sharing',
    'https://drive.google.com/file/d/1EHvHa2yNXlvS_96bcUIwjiwEEyJxCBjK/view?usp=sharing',
    'https://drive.google.com/file/d/1ic_ba0W5IqTaaHrJiXm9uXchPOgwXY-T/view?usp=sharing',
    'https://drive.google.com/file/d/1j9taqXkzW6ofzZk3wGlzeBV_vcsLsYjS/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT602', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1WbZ_3P1_9xb-g9svcuBjZUenWSnrj93q/view?usp=sharing',
    'https://drive.google.com/file/d/1HwXLDpXiYQy4ZJA7MkXIKgF04fKgkpc6/view?usp=sharing',
    'https://drive.google.com/file/d/1ZW9NcSG_Jj48IkY7J0Q007xMKb-iOeQY/view?usp=sharing',
    'https://drive.google.com/file/d/1EfeHx5kqiYwQmNUNuazL__NiymkuwwhK/view?usp=sharing',
    'https://drive.google.com/file/d/1xiAN7xYJzjE7fnZVsHk4tfoeNAOmZUFB/view?usp=sharing',
    'https://drive.google.com/file/d/1FDFEREpv3dTqvqAOHve-4D4uODT0yvyt/view?usp=sharing',
    'https://drive.google.com/file/d/1gdwmsPNWyXSbmA7MBSgzv_6aadFU6qCr/view?usp=sharing',
    'https://drive.google.com/file/d/18Kg4Gb81mwM8FvpqsQ4ziQM74DvTs2kf/view?usp=sharing',
    'https://drive.google.com/file/d/1puNCSbGhndwADJ-BJnwEaaF_vqnFeiXq/view?usp=sharing',
    'https://drive.google.com/file/d/1CBK11os9YNiC-aZAitwFPRJbhv7XYXj0/view?usp=sharing',
    'https://drive.google.com/file/d/1mcMRR-xmsdNDO3Th1aNQJyducfZtqrVQ/view?usp=sharing',
    'https://drive.google.com/file/d/1h-nlB63d0mia757q6Jwbu6BzGODngezC/view?usp=sharing',
    'https://drive.google.com/file/d/1yH1ZHw9W832lswI59eXUiYaGRBrG4AWQ/view?usp=sharing',
    'https://drive.google.com/file/d/1WtqFCH-9YfFXeBspC6YOgHUCGKoNWyO0/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT603', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1yQEAwO0XHbkjWC12N6J1jkYdHoUonL-H/view?usp=sharing',
    'https://drive.google.com/file/d/1f0A9xMeu7bT3682sOWDcp8cMJOUBKhLC/view?usp=sharing',
    'https://drive.google.com/file/d/1NH9akaTRaOU3Pto5_zclpnSpj-J5Ohir/view?usp=sharing',
    'https://drive.google.com/file/d/1TXXGehuGT52opP8OVlqWz_p_FH5aTZjK/view?usp=sharing',
    'https://drive.google.com/file/d/1c0-fRPN3cx5cHaf-j3KzerCloiw5ufB8/view?usp=sharing',
    'https://drive.google.com/file/d/1RxUyK8Tn5nAApNvj8KLVDKcVv--Owg9c/view?usp=sharing',
    'https://drive.google.com/file/d/1ToueJ02gTav6ySERby-nVeXe6frKpSnX/view?usp=sharing',
    'https://drive.google.com/file/d/154TseG_rw5qJ4VTBOii42M0fVPJaAtZU/view?usp=sharing',
    'https://drive.google.com/file/d/10fIvKDbkhyTSSHbJzdZ4RwAaj5psELVL/view?usp=sharing',
    'https://drive.google.com/file/d/1W4tbEqGvD8qgaTX5GmCM0t0CmK10HL0c/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT604', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://docs.google.com/document/d/1fmUqel_tyWCfryFEeb-yLrunlh1-cCG6/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 168, code: 'MGT610', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1OfXrDSxADhKEIHmlU4ZIviOMJVDIAHGs/view?usp=sharing',
    'https://drive.google.com/file/d/1WuS7XZdptRTYAMMWgDM-rBRwhA6qM6TU/view?usp=sharing',
    'https://drive.google.com/file/d/1KzUld9T4SPxJG2Eo7_pZLy905fHo-wTl/view?usp=sharing',
    'https://drive.google.com/file/d/1IFnSnLkt_B74ORtPEqL-A3Nqo3LXIx-7/view?usp=sharing',
    'https://drive.google.com/file/d/1H-V_Ao7Ekrz0V6TdwG3hbDobdtGhD0NV/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT611', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/1vtcQxkgwLbF0uE65PcJofHkwIgP9351T/view?usp=sharing',
    'https://drive.google.com/file/d/1Lg6LqRmNMXnYJWvnz37J2rwsGvsb5eRv/view?usp=sharing',
    'https://drive.google.com/file/d/15OIo7pvoMUTzVgE6JIIKLRE1SiQSUdD9/view?usp=sharing',
    'https://drive.google.com/file/d/1mZ2dlP83-WB96BCSEsJIVfuFkM4--K8i/view?usp=sharing',
    'https://drive.google.com/file/d/18ZPS9i-frQLRbuwIYVoN87JdMMTVRHfK/view?usp=sharing',
    'https://drive.google.com/file/d/1YkTz9RZk-zBhadhYtPsjq6OrKZhe9tcR/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT612', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT613', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[
    'https://drive.google.com/file/d/149pgIYOaL79_jAevMiQCAWlyFSS8fYkc/view?usp=sharing',
    'https://drive.google.com/file/d/1uQ42YS-EbYBBel4yA3Sg2P2PX2eip7xF/view?usp=sharing',
    'https://drive.google.com/file/d/1bq_-MOXGAi9gnRYqVs1maTAwjBPWzjmy/view?usp=sharing',
    'https://drive.google.com/file/d/1_etKUiMyYkPXRH9fLg3tm87pGOx_f7qY/view?usp=sharing',
    'https://drive.google.com/file/d/1nbgtYE-GDpOcWbjKwlj0eW9Dv0JQaM4q/view?usp=sharing',
    'https://drive.google.com/file/d/1nbgtYE-GDpOcWbjKwlj0eW9Dv0JQaM4q/view?usp=sharing',
    'https://drive.google.com/file/d/1Zkh8ScLbhEC5Y2Zezm-NkbAAROnJ9Dvb/view?usp=sharing',
    'https://drive.google.com/file/d/1vhcNgz7TQbavQgglTQCYHi9WQG7ZZTIE/view?usp=sharing',
    'https://drive.google.com/file/d/1qwnjZr5b8jFBqvVIvt-7dviov7nkwZD6/view?usp=sharing',
    'https://drive.google.com/file/d/1sEoDYWqvUiQNjU6ohOiUh-wvDKlQ7T3m/view?usp=sharing',
    'https://drive.google.com/file/d/1_PbMJYcxCGDTyeHNqlArNWdFp9J-YOUa/view?usp=sharing',
    'https://drive.google.com/file/d/19rV9dfjXoXRfVGR48BFm3IYA4H71tET5/view?usp=sharing',
    'https://drive.google.com/file/d/1BqDDW-TxdynzFflFlTNF5ddDbxoffN6N/view?usp=sharing'
  ]},
  { id: 168, code: 'MGT621', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT703', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  { id: 168, code: 'MGT705', title: 'Business & Management Course', category: 'mgt', image: '📊',links:[]},
  
  // MKT - Marketing
  { id: 169, code: 'MKT501', title: 'Marketing Course', category: 'mkt', image: '📈',links:[
    'https://drive.google.com/file/d/1Y9g8cK7dSdaPDk7y6LY5ROib7b2JYvvk/view?usp=sharing',
    'https://drive.google.com/file/d/1nPdeIFFDKvIvHaYJULX77rQjE6CRmj_b/view?usp=sharing',
    'https://drive.google.com/file/d/1O7uu3JCS4sbPFdLeSb5dAQDHb1ZCJE9I/view?usp=sharing',
    'https://drive.google.com/file/d/11bUIWggvWogLH0bma7VATENeLYvAx_rq/view?usp=sharing',
    'https://drive.google.com/file/d/1ud4s62M7oE3Cn_AVXwgcBrFPqRHgRVdG/view?usp=sharing',
    'https://drive.google.com/file/d/1nNsX-JYTgdv_zdHuWqNJCQcx0dUh2nFr/view?usp=sharing',
    'https://drive.google.com/file/d/1V4uCA-OctldbtdSmlC6n_YXJZzOPrM4G/view?usp=sharing',
    'https://drive.google.com/file/d/1FzYpFGI_UKYNJMa6AQyhzb9T19M_qBZE/view?usp=sharing',
    'https://drive.google.com/file/d/1XeVzIScOJPQNVM68hVlw3Q_fD2slQw-4/view?usp=sharing'
  ] },
  { id: 170, code: 'MKT529', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 170, code: 'MKT530', title: 'Marketing Course', category: 'mkt', image: '📈' },
  { id: 171, code: 'MKT603', title: 'Marketing Course', category: 'mkt', image: '📈' , links:[]},
  { id: 171, code: 'MKT610', title: 'Marketing Course', category: 'mkt', image: '📈' , links:[
    'https://drive.google.com/file/d/1DzAjsb9C_RcriQ8xmVv0qv4UtWNzbvPf/view?usp=sharing'
  ]},
  { id: 172, code: 'MKT611', title: 'Marketing Course', category: 'mkt', image: '📈', links:[

  ] },
  { id: 173, code: 'MKT621', title: 'Marketing Course', category: 'mkt', image: '📈',links:[
    'https://drive.google.com/file/d/1taU7UNIs1Umv7whn9woUsi3Y_ayUSUPa/view?usp=sharing'
  ] },
  { id: 174, code: 'MKT624', title: 'Marketing Course', category: 'mkt', image: '📈', links:[
    'https://drive.google.com/file/d/1ffbOMFcAo5L6qUeBmKEUvW64iSYn0C1Z/view?usp=sharing'
  ] },
  { id: 175, code: 'MKT625', title: 'Marketing Course', category: 'mkt', image: '📈', links :[]},
  { id: 175, code: 'MKT626', title: 'Marketing Course', category: 'mkt', image: '📈', links :[]},
  { id: 175, code: 'MKT627', title: 'Marketing Course', category: 'mkt', image: '📈', links :[]},
  { id: 175, code: 'MKT630', title: 'Marketing Course', category: 'mkt', image: '📈', links :[
    'https://drive.google.com/file/d/1sT7fwB2kznIP1gV1fMvVJxiU3_K718xg/view?usp=sharing',
    'https://drive.google.com/file/d/1GcZJA8OrY5vYqcsjehnFPsJcEo02KzR_/view?usp=sharing',
    'https://drive.google.com/file/d/1RxZy7PVXJGG_Q6vXNT5siMShdkjjDzCM/view?usp=sharing'
  ]},
  { id: 175, code: 'MKT703', title: 'Marketing Course', category: 'mkt', image: '📈', links :[
    'https://drive.google.com/file/d/1GeaPj9v_hppQTq580r_Fkr_HdGdG7i71/view?usp=sharing',
    'https://drive.google.com/file/d/1YobMQVoqrO8GvGrZj4EcZRd2ihBI4jrs/view?usp=sharing',
    'https://drive.google.com/file/d/1oTdWZJ5PJwhCE8I0Q12OnH_EydLP29cx/view?usp=sharing'
  ]},
  { id: 175, code: 'MKT711', title: 'Marketing Course', category: 'mkt', image: '📈', links :[
    'https://drive.google.com/file/d/1igoLVt3jPvWsDSqWJ6tYCA1e3ywV-la8/view?usp=sharing',
    'https://drive.google.com/file/d/1zIRwTplaqhcsxyFdBXRwx1_oK-MA0e_t/view?usp=sharing',
    'https://drive.google.com/file/d/1DPNK6T9LTXhsYHHmj00p09fsQqLb2PGh/view?usp=sharing',
    'https://drive.google.com/file/d/15R37wBpPubtyeeuME3NoZCDs9HPQzk_8/view?usp=sharing',
    'https://drive.google.com/file/d/197YJpb3aYKSvq9t-B2QRzIhT-3XHMYSR/view?usp=sharing'
  ]},
  
  // MTH - Mathematics
  { id: 176, code: 'MTH001', title: 'Mathematics Course', category: 'mth', image: '📐',links:[
    'https://drive.google.com/file/d/1atRyubTepwHKcwz9r7zMUNsShby5ACWp/view?usp=sharing',
    'https://drive.google.com/file/d/1hfSmo58ctQp_1PmbP3ZB_DSq15MQVXa3/view?usp=sharing',
    'https://drive.google.com/file/d/1prZ8gZkxhlqoSiiHJGQVSmp4IoH4FJgE/view?usp=sharing'
  ] },
  { id: 189, code: 'MTH100', title: 'Mathematics Course', category: 'mth', image: '📐',links:[
    'https://drive.google.com/file/d/1VVr_Kq9m01FQhWyRM6reTvVDxli08Xo4/view?usp=sharing',
    'https://drive.google.com/file/d/1uORazKDS6SFkOB4LLS3RAgMT428zXCor/view?usp=sharing',
    'https://drive.google.com/file/d/1aGMV6aVFUXWxZ6QqVlNglnV8-woFLE-d/view?usp=sharing',
    'https://drive.google.com/file/d/1m66YvU0lckLqd4wgIUH2m1yBAnaxfY0s/view?usp=sharing'
  ]},

  { id: 177, code: 'MTH101', title: 'Calculus and Analytical Geometry', category: 'mth', image: '📐', links:[
    'https://drive.google.com/file/d/1JIcsuEW5KRnNdbrag4LaIF00z9psuEWz/view?usp=sharing',
    'https://drive.google.com/file/d/158jKEKtewZW0W6JxScDGJxIqXyvQ4Wiu/view?usp=sharing',
    'https://drive.google.com/file/d/1dxT90Ib6JYoA-wUTgxhuV9NC4fcZMaNJ/view?usp=sharing',
    'https://drive.google.com/file/d/13Sc9QGncWz60HrqjBgE_ui1HtvA-7eNF/view?usp=sharing',
    'https://drive.google.com/file/d/1QAs0NCGlPn_JVPZSXZYxcW2wYCAoQCng/view?usp=sharing',
    'https://drive.google.com/file/d/1KdIxa_nm9LGnE7X18tuWDIOEfbnbNfen/view?usp=sharing',
    'https://drive.google.com/file/d/1ElTlrVXKRn7QG7dJA_9mIPX91CqHIhAR/view?usp=sharing',
    'https://drive.google.com/file/d/1YZsthJj8jXlwJytSzH5luXn8WBS3dnR0/view?usp=sharing',
    'https://drive.google.com/file/d/12gAcONklzAeU-PQ7dr3tp7xqNMy5JryQ/view?usp=sharing'
  ] },
  { id: 178, code: 'MTH102', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 178, code: 'MTH201', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 179, code: 'MTH104', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 180, code: 'MTH202', title: 'Mathematics Course', category: 'mth', image: '📐', links:[
    'https://drive.google.com/file/d/1rUFvqt4JnftlO3MR2J2vVCpGJpHYZoa7/view?usp=sharing',
    'https://drive.google.com/file/d/11VbSY4gZpoaASHAK9o-af53UdOnfFwYK/view?usp=sharing',
  ] },
  { id: 181, code: 'MTH301', title: 'Mathematics Course', category: 'mth', image: '📐', links:[
    'https://drive.google.com/file/d/1kYIrtUZZ4rKKrjXnMk6UuZDfKrzFRCwW/view?usp=sharing',
    'https://drive.google.com/file/d/17Jb-ErCFXp4Sm_vfV19CN5R9nTtxed6h/view?usp=sharing',
    'https://drive.google.com/file/d/1lKSaskMB2zKFTID_6E7YfOsxqXt5YmgZ/view?usp=sharing',
    'https://drive.google.com/file/d/1yeSiUuuaNOLdFLCklh62g2TiWzWXXUja/view?usp=sharing'
  ] },
  { id: 182, code: 'MTH302', title: 'Mathematics Course', category: 'mth', image: '📐', links:[
    'https://drive.google.com/file/d/1quxGk7lR-OAY_YvOex-JFKkCf0LDHMe7/view?usp=sharing',
    'https://drive.google.com/file/d/18L3swQO0L8gwOdVmT4TXwCW-9W13XlxM/view?usp=sharing',
    'https://drive.google.com/file/d/1FdLdmByNT1HfItwprHu9gRO8c-FzkNsw/view?usp=sharing'
  ] },
  { id: 183, code: 'MTH401', title: 'Mathematics Course', category: 'mth', image: '📐', links:[
    'https://drive.google.com/file/d/1ijg8X1bcV9HpKBegQwZyNbLw08tty1TX/view?usp=sharing',
    'https://drive.google.com/file/d/1bRZwOOiJRD9o6AhQd-jI4Xt2w7IU5Slp/view?usp=sharing',
    'https://drive.google.com/file/d/15-ZbdMVjj_r6yRII9kw-oVnWj51E0UZ_/view?usp=sharing',
    'https://drive.google.com/file/d/1VYAoQnt2xyiEzQMtfRuOeMkSWqf2pm8_/view?usp=sharing',
    'https://drive.google.com/file/d/1GvACpIApTGQaMFtx5M-OUEz8fb5vi-xw/view?usp=sharing',
    'https://drive.google.com/file/d/17n9OOmU8as5Jim8cGxb9P16MHbg3jYSM/view?usp=sharing',
    'https://drive.google.com/file/d/1fDzOCp86PA5LIDhVRxjwK4QGlC40T-Ng/view?usp=sharing',
    'https://drive.google.com/file/d/1HDmIzc4nZUxIv4VxWWK10w2MT6O2JXRN/view?usp=sharing'
  ] },
  { id: 183, code: 'MTH501', title: 'Mathematics Course', category: 'mth', image: '📐',links:[
    'https://drive.google.com/file/d/1YGRbgYP57IafNqtCoXn6WvR7_OmVPCw_/view?usp=sharing',
    'https://drive.google.com/file/d/1xsme7nqlTalJZexIucwy2pes9VNu-oYu/view?usp=sharing',
    'https://drive.google.com/file/d/1lkG_JEaMXbHGEahCVY3leEDC5Z0T2JEk/view?usp=sharing',
    'https://drive.google.com/file/d/11qTIoEPAAGwuEEuPkyTq5ZQvkI98BXAE/view?usp=sharing',
    'https://drive.google.com/file/d/1JD3q0sbIyoykRxXpPOkJzDyhudAwUvrW/view?usp=sharing'
  ] },
  { id: 183, code: 'MTH601', title: 'Mathematics Course', category: 'mth', image: '📐',links:[
    'https://drive.google.com/file/d/19eH3JVQsYsmllZY8Q9c5oAS5LyO-L0Yu/view?usp=sharing',
    'https://drive.google.com/file/d/1Krouf8Qbs5uUS3P4uMGW2gNxwZSknJN7/view?usp=sharing',
    'https://drive.google.com/file/d/1BVBJQq6NOXtHHOliICUmF0W-ZRWrk-bY/view?usp=sharing',
    'https://drive.google.com/file/d/1odUKR9O84PBKr-qbjFEiHyun_n3g5B1d/view?usp=sharing',
    'https://drive.google.com/file/d/1igkBQHytGC6_CbRZJRiuptbv2vr-p7gU/view?usp=sharing',
    'https://drive.google.com/file/d/1SXnxrwfZcNaA6I95paQY3boBlR0BOgAu/view?usp=sharing'
  ] },
  { id: 183, code: 'MTH603', title: 'Mathematics Course', category: 'mth', image: '📐',links:[
    'https://docs.google.com/document/d/1XChgTJMt7XYE3Ol4AetJ-oqTgCwKi0TM/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1iD2-knj_mCz1poYzqtmSTVKnMdAyf5vW/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1CQMMQmAjf-xtffhsiHcedDY1thgNdmDo/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1_3Jbleiz4Bbw6FaQHNEvhvPFoxdSx7sb/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1QJ9SPk93GPiOgAmpcjNyld5Lckhg9MFE/view?usp=sharing',
    'https://drive.google.com/file/d/1gH5dV6_e2UuoZArXgSx8IOBo4NNRoI0r/view?usp=sharing',
    'https://docs.google.com/document/d/13wWppa6bN_VDC5KkXmJ0HLUsDCxuis8c/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1zIfBW5QBtnjHn_3HAJHwrPYmC0rUPDci/view?usp=sharing',
    'https://drive.google.com/file/d/18vKW8CCkvZgsd4u_QE8X4hcjDVCeobBl/view?usp=sharing'
  ] },
  { id: 183, code: 'MTH501', title: 'Mathematics Course', category: 'mth', image: '📐',links:[] },
  { id: 183, code: 'MTH501', title: 'Mathematics Course', category: 'mth', image: '📐',links:[] },
  { id: 183, code: 'MTH641', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 184, code: 'MTH642', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 185, code: 'MTH643', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 186, code: 'MTH645', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 187, code: 'MTH646', title: 'Mathematics Course', category: 'mth', image: '📐' },
  { id: 188, code: 'MTH647', title: 'Mathematics Course', category: 'mth', image: '📐' },

  // PAD - Public Administration
  { id: 189, code: 'PAD603', title: 'Governance, Democracy & Society', category: 'pad', image: '📜' },
  
  // PAK - Pakistan Studies
  { id: 190, code: 'PAK301', title: 'Pakistan Studies', category: 'pak', image: '🇵🇰', links : [
    'https://drive.google.com/file/d/10JxZNLQyiVO-rgNoIeLyi9K0ubpCByCY/view?usp=sharing',
    'https://drive.google.com/file/d/10JxZNLQyiVO-rgNoIeLyi9K0ubpCByCY/view?usp=sharing',
    'https://docs.google.com/document/d/1I7_QgNSBrZz1HaSJIlBJ983igkiYIast/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://drive.google.com/file/d/1EwkeHJlrWSzNcXMZNCVWysLmZz02CmfZ/view?usp=sharing',
    'https://drive.google.com/file/d/1hY-MyixDWBtvCvVWluWpMHW-N7RZJsVS/view?usp=sharing',
    'https://docs.google.com/document/d/1EgnaPztf57k50me810o7qGDtxUeJv2oX/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 191, code: 'PAK302', title: 'Pakistan Studies', category: 'pak', image: '🇵🇰' },
  
  // PHY - Physics
  { id: 192, code: 'PHY101', title: 'Physics', category: 'phy', image: '⚛️', links: [
    'https://drive.google.com/file/d/1vgRAsY44UXY1CJa4BkDslvzX6jjNiDul/view?usp=sharing',
    'https://drive.google.com/file/d/1LTAQgakLtnkQClOX9lCB0TKVQ3csJE4l/view?usp=sharing',
    'https://drive.google.com/file/d/1fw5CQwCpoe5wSL2hR0i44XYZyJXzAdGa/view?usp=sharing',
    'https://docs.google.com/document/d/1MTi4YaBlYAylhbw9RNoGuQ-rQMAAtfzaK-HDZOOZovQ/edit?usp=sharing',
    'https://docs.google.com/document/d/1Q6lMQimP05_vKa6zsY3J47AuV5IwCokuwuGC557t__E/edit?usp=sharing',
    'https://drive.google.com/file/d/1rueqr17C8pN-zWZHawC-q5fKjfUdp-Mq/view?usp=sharing',
    'https://drive.google.com/file/d/1jR7v-ybNteHPj8b-uhouAw108f0WyhVb/view?usp=sharing',
    'https://drive.google.com/file/d/1SqkSfwbEz6SmykkXQzFFVXp624P3hs0Z/view?usp=sharing',
    'https://drive.google.com/file/d/1RaKzLPnBj96_i5gTEn62ATTB-w1X_sC-/view?usp=sharing'
  ] },

  // physics Chp01 to Chp08
  { id: 193, code: 'PHY301', title: 'physics Chp01 to Chp08', category: 'phy', image: '⚛️',links:[
     'https://drive.google.com/file/d/1mVlZfqbKM1IBMJoKsAuw3VAaCUiuQyOk/view?usp=sharing',
     'https://drive.google.com/file/d/1BgHRZOoswmHPO1y6IOyHHe9RxYNrmNSJ/view?usp=sharing',
     'https://drive.google.com/file/d/12LeOKxyfq8kSizewRWsnXkSsB8Wm6YOe/view?usp=sharing',
     'https://drive.google.com/file/d/1WP-SdMJIIabQAG3gMVsFm1k0Z07QIqQw/view?usp=sharing',
     'https://drive.google.com/file/d/1Js9SeSgynFIaVFvBXK2PRgwHqOE_t7Dd/view?usp=sharing',
     'https://drive.google.com/file/d/1_C4QPd6NtxsMoU0dTJtCuBre6tw5buG3/view?usp=sharing',
     'https://drive.google.com/file/d/1aI_xBY5NIfSPM18_1kBHJXJlxHLY_o4Y/view?usp=sharing',
     'https://drive.google.com/file/d/1g9AAhl0aFq7GwROUR6TH9srXoxG3zuqf/view?usp=sharing'
  ] },
// physics Chp09 to Chp16
 { id: 193, code: 'PHY301', title: 'physics Chp01 to Chp08', category: 'phy', image: '⚛️',links:[
      'https://drive.google.com/file/d/1EXp-Mu-H6JUwWJ_F_nPE555cqeoa7RH4/view?usp=sharing',
      'https://drive.google.com/file/d/1K3WBeugEU72SgyjfKytr7l1PXxEErQtr/view?usp=sharing',
      'https://drive.google.com/file/d/1LRNIXmW7CF5iS_p8ykXNMbRJ4UdTlner/view?usp=sharing',
      'https://drive.google.com/file/d/12ScqDVPqAoLm9omijIOBL0djQbeizB_2/view?usp=sharing',
      'https://drive.google.com/file/d/1--xbso7q4k31s0UTExoGDzXcydzNnIC0/view?usp=sharing',
      'https://drive.google.com/file/d/15Doqp7MWvQPLSgFqOJyK15KViMy58KWW/view?usp=sharing',
      'https://drive.google.com/file/d/1ZIcba7ull8ORWavkNTii2UtUxH7BpwZb/view?usp=sharing',
      'https://drive.google.com/file/d/16hA2MxZ1EEVfPVwY23fsNTGlJPyzuRY1/view?usp=sharing'
  ] },
// Police Exams Preparation Books
// Police Exams Preparation ASI Books
 { id: 193, code: 'Police', title: 'Islamabad police ASI test Preparation pdf.', category: 'police', image: '⚛️',links:[
      'https://drive.google.com/file/d/1CxqIz9z1AlPlnGO9D5FQKG1IYEGZgdVE/view?usp=sharing',
      'https://drive.google.com/file/d/1pcQRclDF11v6rnO1F2PCJHUDmAk-b120/view?usp=sharing'
  ]},

// Police Exams Preparation Constable Books
 { id: 193, code: 'Islamabad Police', title: 'Islamabad police constable test Preparation pdf.', category: 'police', image: '⚛️',links:[
   'https://drive.google.com/file/d/1uzyC7M_3JoaaMS07vZanjsVukrCqwaUP/view?usp=sharing',
   'https://drive.google.com/file/d/1utciQ1kJw42kr2Bz4prwnlIxTQMwem3m/view?usp=sharing',
   'https://drive.google.com/file/d/1b4I5OeJ8Mi33nLgHWcpUCdzt7I0jhWmu/view?usp=sharing',
   'https://drive.google.com/file/d/1zDyJjnCn2ZXWmh2kALJ4ensZdSswxXf4/view?usp=sharing'
  ]},

// Police Exams Preparation Stenotypist Books
 { id: 193, code: 'Islamabad Police', title: 'Islamabad police stenotypist test Preparation pdf.', category: 'police', image: '⚛️',links:[

  ]},

// Police Exams Preparation UDC Books
 { id: 193, code: 'Islamabad Police', title: 'Islamabad police UDC test Preparation pdf.', category: 'police', image: '⚛️',links:[
   'https://drive.google.com/file/d/1zdlFuDe_bNqd5EggrnHgP69541E-SCht/view?usp=sharing'
  ]},

// Police Exams Preparation LDC Books
 { id: 193, code: 'Islamabad Police', title: 'Islamabad police LDC test Preparation pdf.', category: 'police', image: '⚛️',links:[
'https://drive.google.com/file/d/15KJU4-9ByLVRa6-zy8MP6KATtH68L9Ch/view?usp=sharing'
  ]},

// Police Exams Preparation Assistant Books
 { id: 193, code: 'Islamabad Police', title: 'Islamabad police Assistant test Preparation pdf.', category: 'police', image: '⚛️',links:[

  ]},

  // PSC - Political Science
  { id: 194, code: 'PSC201', title: 'Political Science Course', category: 'psc', image: '🗳️' },
  { id: 195, code: 'PSC401', title: 'Political Science Course', category: 'psc', image: '🗳️' },
  
  // PSY - Psychology
  { id: 196, code: 'PSY101', title: 'Psychology Course', category: 'psy', image: '🧠',links:[
    'https://drive.google.com/file/d/1ppkZ0nTbR7ROfDgX6RecqJRfJ0PHk4YH/view?usp=sharing',
    'https://drive.google.com/file/d/1jvFO5xYnDdzWFlkElMFExIkcJuzGQCvU/view?usp=sharing',
    'https://drive.google.com/file/d/1u3d-k0_00ND_tJ7k26jEC2Qo_bUoFI_G/view?usp=sharing'
  ] },
  { id: 197, code: 'PSY401', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 198, code: 'PSY404', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 199, code: 'PSY405', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 199, code: 'PSY406', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 199, code: 'PSY408', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 199, code: 'PSY409', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 200, code: 'PSY502', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 201, code: 'PSY504', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 201, code: 'PSY504', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 201, code: 'PSY504', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 202, code: 'PSY510', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 202, code: 'PSY511', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 203, code: 'PSY512', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 204, code: 'PSY513', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 205, code: 'PSY514', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 206, code: 'PSY515', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 207, code: 'PSY610', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 208, code: 'PSY631', title: 'Psychology Course', category: 'psy', image: '🧠' },
  { id: 209, code: 'PSY632', title: 'Psychology Course', category: 'psy', image: '🧠' },
  
 // PPSC - Punjab Public Service Commission Accountant
  { id: 196, code: 'PPSC', title: 'PPSC Punjab Public Service Commission Accountant past papers', category: 'ppsc', image: '🧠',links:[
    'https://drive.google.com/file/d/1LdPPHVi8Omg-dCG5XOTx7Kldn8QU5r3G/view?usp=sharing',
    'https://drive.google.com/file/d/1ropVv9wOUTqJbGB1YSZwrLqibwi-Qw_o/view?usp=sharing',
    'https://drive.google.com/file/d/1q_MaMAjhqjg8VPue8b8vXQWJSIt-Ok1k/view?usp=sharing',
    'https://drive.google.com/file/d/11bIEFgcS41X4DeXHn2k2T-KBO0GfoDOx/view?usp=sharing',
    'https://drive.google.com/file/d/1GOclBSB8YqDKka2vl3C2ulFWHgUqCSh3/view?usp=sharing',
    'https://drive.google.com/file/d/1aAqzHAi_3w8rTRw5dlVrqyXE1gsV379n/view?usp=sharing'
  ] },

 // PPSC - Punjab Public Service Commission Assistant
  { id: 196, code: 'PPSC', title: 'PPSC - Punjab Public Service Commission Assistant past papers', category: 'ppsc', image: '🧠',links:[
    'https://drive.google.com/file/d/1jYkfAjFWPw_edshU_wCAPupgAVXAoGx8/view?usp=sharing',
    'https://drive.google.com/file/d/1JZhGur7NpYtK6-ucMzfNeVeMJYJvtRNV/view?usp=sharing',
    'https://drive.google.com/file/d/1BgtzjQBITsZgdNrmu5BSsSlpfwwbo_r1/view?usp=sharing',
    'https://drive.google.com/file/d/1y3vcm_Qf3NDODnrcTmFoCp1lmsdX09iP/view?usp=sharing',
    'https://drive.google.com/file/d/1W_OxEFNO2OPU8q_lJwmPlqlHqNav8FYr/view?usp=sharing',
    'https://drive.google.com/file/d/1aAqzHAi_3w8rTRw5dlVrqyXE1gsV379n/view?usp=sharing',
    'https://drive.google.com/file/d/1GOclBSB8YqDKka2vl3C2ulFWHgUqCSh3/view?usp=sharing',
    'https://drive.google.com/file/d/1GOclBSB8YqDKka2vl3C2ulFWHgUqCSh3/view?usp=sharing'
  ] },

  // SOC - Sociology
  { id: 210, code: 'SOC101', title: 'Sociology Course', category: 'soc', image: '👥', links: [
    'https://drive.google.com/file/d/1kHRdJgtZJiI66CkXcbtxhnQMovsVpcLv/view?usp=sharing',
    'https://drive.google.com/file/d/13yKXFEYzMrs7LrYbJSjkAfXFDFV_kygm/view?usp=sharing',
    'https://drive.google.com/file/d/1YiIwsX3J2KuEjvMnd6-P8gyHVe9dO80h/view?usp=sharing',
    'https://drive.google.com/file/d/1K-Fwi5ZeW7BA_pDdNyekEYez89a71Zm-/view?usp=sharing',
    'https://drive.google.com/file/d/1o_1vSs2aLqpwx7Yr88n-KEsxcmqpjc78/view?usp=sharing',
    'https://drive.google.com/file/d/1O1UG7oA4EP5Twl1ceK_NoWPrKcD5wJgu/view?usp=sharing'
  ] },
  { id: 211, code: 'SOC301', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 212, code: 'SOC302', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 213, code: 'SOC401', title: 'Sociology Course', category: 'soc', image: '👥', links :[
    'https://drive.google.com/file/d/1dS2qr-spq3SslkmhLIf3CSsoNai5VHXy/view?usp=sharing',
    'https://drive.google.com/file/d/1VFeWFKDBZxhxayljvqLEkb9BhJMxi1lX/view?usp=sharing'
  ] },
  { id: 214, code: 'SOC402', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 215, code: 'SOC403', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 216, code: 'SOC404', title: 'Sociology Course', category: 'soc', image: '👥' },
  { id: 217, code: 'SOC602', title: 'Sociology Course', category: 'soc', image: '👥' },
  
  // STA - Statistics
  { id: 218, code: 'STA301', title: 'Statistics Course', category: 'sta', image: '📊', links: [
    'https://drive.google.com/file/d/1rDuTUdMrQI3-GjfC3w_f6ZW_xKbzaPyw/view?usp=sharing'
  ] },
  { id: 219, code: 'STA404', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 220, code: 'STA406', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 221, code: 'STA630', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 222, code: 'STA641', title: 'Statistics Course', category: 'sta', image: '📊' },
  { id: 223, code: 'STA642', title: 'Statistics Course', category: 'sta', image: '📊' },
  
  // URD - Urdu
  { id: 224, code: 'URD101', title: 'Urdu', category: 'urd', image: '📜' },
  
  // ZOO - Zoology
  { id: 225, code: 'ZOO101', title: 'Biological Techniques', category: 'zoo', image: '🐾' },
  { id: 226, code: 'ZOO201', title: 'Animal Diversity', category: 'zoo', image: '🐾' },
  { id: 227, code: 'ZOO202', title: 'Animal Diversity: Chordates', category: 'zoo', image: '🐾' },
  { id: 228, code: 'ZOO301', title: 'Animal Form & Function-I', category: 'zoo', image: '🐾' },
  { id: 229, code: 'ZOO302', title: 'Animal Form & Function-II', category: 'zoo', image: '🐾' },
  { id: 230, code: 'ZOO303', title: 'Animal Physiology', category: 'zoo', image: '🐾' },
  { id: 231, code: 'ZOO304', title: 'Animal Behavior', category: 'zoo', image: '🐾' },
  { id: 232, code: 'ZOO305', title: 'Field Ecology', category: 'zoo', image: '🐾' },
  { id: 233, code: 'ZOO306', title: 'Bioinformatics in Zoology', category: 'zoo', image: '🐾' },
  { id: 234, code: 'ZOO401', title: 'Endocrine Physiology', category: 'zoo', image: '🐾' ,links :[
    'https://drive.google.com/file/d/1QERAv80gRpxXF409zrBSa0_25R8bLDAV/view?usp=sharing',
    'https://docs.google.com/document/d/1k-PiO3MSpUknhDA3WjMCnc4hyuiVUJa-/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ]},
  { id: 235, code: 'ZOO501', title: 'Molecular Endocrinology', category: 'zoo', image: '🐾' , links : [
    'https://drive.google.com/file/d/1GKig488j_BdChthXGebHdTDDFbg3dIHq/view?usp=sharing',
    'https://drive.google.com/file/d/1Sq0hP9wtfcmeR6mQB93-uMhw-I4-xW62/view?usp=sharing',
    'https://drive.google.com/file/d/1Ya11DZr9mweZ53cSzd7Tnroud373trbp/view?usp=sharing',
    'https://drive.google.com/file/d/1LCzMTC-O_pPTtnI7B1-BaM8FKuXPnlgz/view?usp=sharing'
  ]},
  { id: 236, code: 'ZOO502', title: 'Evolutionary Biology', category: 'zoo', image: '🐾', links : [
    'https://drive.google.com/file/d/1OS4di3Ajy96DzhXeIlJspnl3TjZvMq9d/view?usp=sharing',
    'https://drive.google.com/file/d/100f82GIUoqS_C3xetpTWD6hvb-OnS8KA/view?usp=sharing',
    'https://drive.google.com/file/d/1r_DT8gCZLA9Q-bhLa4L88meDWQVfEb6l/view?usp=sharing',
    'https://drive.google.com/file/d/1vIp1VuZhMWqPq_Tug9mA-N-7tmHkkD3n/view?usp=sharing',
    'https://drive.google.com/file/d/1RkoRUJL3ddiK_b6EcTsGvpq0MsPdXwx-/view?usp=sharing',
    'https://drive.google.com/file/d/15FN-htRT3d_lz0dmmoysIymiW-CEMRDv/view?usp=sharing',
    'https://drive.google.com/file/d/14QfXQhiHVT4hmgsLlX4fU1rGR7C4NUpW/view?usp=sharing',
    'https://drive.google.com/file/d/17-vj7Aiwfs9iP_MgaASJD4Vy_Wq7Q-8T/view?usp=sharing',
    'https://drive.google.com/file/d/1rvXvv7XBBMxW1g94WEXuZbJkeyUAgDbD/view?usp=sharing',
    'https://drive.google.com/file/d/1i_6Y2V8QGVVGP9LzTSK4m0OcgDh2I0BD/view?usp=sharing',
    'https://drive.google.com/file/d/1JZXDPYZBvePE9NPbfUtIKCnWf2vpyN02/view?usp=sharing',
    'https://drive.google.com/file/d/11_yFiZkBMlSmnQojBwNCrfjco7PPTYpw/view?usp=sharing'
  ]},
  { id: 237, code: 'ZOO511', title: 'Genetic Techniques', category: 'zoo', image: '🐾' },
  { id: 238, code: 'ZOO503', title: 'Paleontology & Zoology', category: 'zoo', image: '🐾', links: [
    'https://drive.google.com/file/d/1WyqoOxHixHT4iWTrpJO0JXhC4x82S_ik/view?usp=sharing',
    'https://drive.google.com/file/d/1CMOMY3HCfXW7F7xOC4uaZQ6m9PEzIHKT/view?usp=sharing'
  ] },
  { id: 239, code: 'ZOO504', title: '---------------------', category: 'zoo', image: '🐾', links : [
    'https://drive.google.com/file/d/1Vu3AXYHyAeBj_yvQj0zhXs54uNHlBDiX/view?usp=sharing',
    'https://drive.google.com/file/d/1Yol0mhZvPoHtcrZ-PiPjd0WI-emZdWSP/view?usp=sharing',
    'https://drive.google.com/file/d/1XviaD4JDX0JKkbyZw_3JONOLGhmeC5nX/view?usp=sharing',
    'https://drive.google.com/file/d/10LNWwiKPzqfalurxjPyunnHXu0jBhvlN/view?usp=sharing',
    'https://docs.google.com/document/d/1E9xXzllgQlgIdtvfd0PxzMPmO7VpfL5y/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1XT-r8lLAB75-jLpfHOk1WsyN_gzOAQ1k/edit?usp=sharing&ouid=114958120571553419825&rtpof=true&sd=true'
  ] },
  { id: 240, code: 'ZOO505', title: '---------------------', category: 'zoo', image: '🐾', links : [
    'https://drive.google.com/file/d/1E0kd8XxzBua3K9EFPmihh1yEvCUyQh-x/view?usp=sharing',
    'https://drive.google.com/file/d/1ixCFYP9uXHHyKaBT2jdYSkztD02HRsET/view?usp=sharing',
    'https://drive.google.com/file/d/1f_rieM_3tMm7gMCe9HFAF0AZeHTfgchZ/view?usp=sharing'
  ] },
  { id: 241, code: 'ZOO506', title: 'Applied Entomology and pest Management', category: 'zoo', image: '🐾', links : [
    'https://drive.google.com/file/d/1mEifZlmkY2OPMrE55rqi7i1gKVir3_wi/view?usp=sharing',
    'https://drive.google.com/file/d/1JbBiysqhcj1yK2QIpX4HGAKk9eozbIDB/view?usp=sharing',
    'https://drive.google.com/file/d/1o-kAqM395BY9zFeU3k3fsNJ2lqdk2Ebk/view?usp=sharing'
  ]},
  { id: 242, code: 'ZOO507', title: '------------------------', category: 'zoo', image: '🐾', links : [
    'https://drive.google.com/file/d/1WUqYvpQJ-qgRaSf4Rd8Ql6WGXGy2XQQI/view?usp=sharing'
  ] },
  { id: 243, code: 'ZOO510', title: 'Economic Zoology', category: 'zoo', image: '🐾', links:[
    'https://drive.google.com/file/d/1UIg84e6a7K5BhCib6EkgN5EZs302YBSP/view?usp=sharing'
  ] },
  { id: 244, code: 'ZOO630', title: 'Animal Diversity: Invertebrates', category: 'zoo', image: '🐾', links:[
    'https://drive.google.com/file/d/1LchdYXuVe0asMUbtwp5r13Iceo9v73YY/view?usp=sharing',
    'https://drive.google.com/file/d/1yX831CUtuJOFyhmI11XLyx7H6JPGZ0nZ/view?usp=sharing'
  ] },
];

// International Exams Data
export const internationalExamsData = [
  { id: 245, code: 'NMDCAT', title: 'NMDCAT Past Papers', category: 'nmdcat', image: '🩺', links: [] },
  { id: 246, code: 'ETEA', title: 'ETEA Past Papers', category: 'etea', image: '⚙️', links: [] },
  { id: 247, code: 'IELTS', title: 'IELTS Practice Tests', category: 'ielts', image: '🌍', links: [] },
  { id: 248, code: 'TOEFL', title: 'TOEFL Preparation', category: 'toefl', image: '📖', links: [] },
  { id: 249, code: 'GRE', title: 'GRE Practice Tests', category: 'gre', image: '📚', links: [] },
  { id: 250, code: 'GMAT', title: 'GMAT Preparation', category: 'gmat', image: '💼', links: [] },
  { id: 251, code: 'MCAT', title: 'MCAT Practice Materials', category: 'mcat', image: '🏥', links: [] },
  { id: 252, code: 'ACT', title: 'ACT Preparation', category: 'act', image: '🎓', links: [] },
  { id: 253, code: 'UCAT', title: 'UCAT Practice Tests', category: 'ucat', image: '👨‍⚕️', links: [] },
  { id: 254, code: 'JEE', title: 'JEE Practice Materials', category: 'jee', image: '🔬', links: [] },
  { id: 255, code: 'NEET', title: 'NEET Preparation', category: 'neet', image: '🩺', links: [] },
  { id: 256, code: 'GATE', title: 'GATE Practice Tests', category: 'gate', image: '🏗️', links: [] },
];

// Merge all parts into one array
export const allFinalTermData = [
  ...finalTermData,
  ...finalTermDataPart2,
  ...finalTermDataPart3,
  ...finalTermDataPart4,
  ...internationalExamsData,
];

export const finalTermCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'act', name: 'ACT - American College Test' },
  { id: 'bif', name: 'BIF - Bioinformatics' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'bnk', name: 'BNK - Banking' },
  { id: 'bt', name: 'BT - Biotechnology' },
  { id: 'che', name: 'CHE - Chemistry' },
  { id: 'cs', name: 'CS - Computer Science' },
  { id: 'css', name: 'CSS - Central Superior Services' },
  { id: 'eco', name: 'ECO - Economics' },
  { id: 'edu', name: 'EDU - Education' },
  { id: 'eng', name: 'ENG - English' },
  { id: 'etea', name: 'ETEA - Entry Test Engineering & Technology' },
  { id: 'eth', name: 'ETH - Ethics' },
  { id: 'fin', name: 'FIN - Finance' },
  { id: 'fia', name: 'FIA - Financial Information Analysis' },
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
  { id: 'police', name: 'POLICE - Exams Preparation books' },
  { id: 'psc', name: 'PSC - Political Science' },
  { id: 'psy', name: 'PSY - Psychology' },
  { id: 'ppsc', name: 'PPSC - Punjab Public Service Commission' },
  { id: 'soc', name: 'SOC - Sociology' },
  { id: 'sta', name: 'STA - Statistics' },
  { id: 'toefl', name: 'TOEFL - Test of English as a Foreign Language' },
  { id: 'ucat', name: 'UCAT - University Clinical Aptitude Test' },
  { id: 'urd', name: 'URD - Urdu' },
  { id: 'zoo', name: 'ZOO - Zoology' },
];