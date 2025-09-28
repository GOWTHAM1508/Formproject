import { FormTemplate, Application, PricingPlan } from '../types';

export const formTemplates: FormTemplate[] = [
  // Tamil Nadu Universities
  {
    id: 'anna-university',
    title: 'Anna University - UG/PG Admission',
    category: 'Tamil Nadu Universities',
    description: 'Undergraduate and Postgraduate admission application for Anna University, Chennai',
    difficulty: 'Medium',
    estimatedTime: '25-35 minutes',
    fees: 500,
    requirements: [
      {
        type: 'Class 12 Mark Sheet',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'HSC/12th standard mark sheet with minimum 50% marks'
      },
      {
        type: 'Transfer Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Original transfer certificate from previous institution'
      },
      {
        type: 'Community Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 2097152,
        mandatory: false,
        description: 'Caste/Community certificate for reservation benefits'
      },
      {
        type: 'Passport Photo',
        format: ['JPG', 'PNG'],
        maxSize: 1048576,
        dimensions: { width: 300, height: 400 },
        mandatory: true,
        description: 'Recent passport-sized photograph with white background'
      }
    ]
  },
  {
    id: 'madras-university',
    title: 'University of Madras - Admission',
    category: 'Tamil Nadu Universities',
    description: 'Application for various undergraduate and postgraduate courses',
    difficulty: 'Medium',
    estimatedTime: '30-40 minutes',
    fees: 600,
    requirements: [
      {
        type: 'Academic Certificates',
        format: ['PDF'],
        maxSize: 10485760,
        mandatory: true,
        description: 'All academic certificates from 10th standard onwards'
      },
      {
        type: 'Migration Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Migration certificate from previous university'
      },
      {
        type: 'Conduct Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 2097152,
        mandatory: true,
        description: 'Character and conduct certificate'
      }
    ]
  },
  {
    id: 'bharathiar-university',
    title: 'Bharathiar University - Distance Education',
    category: 'Tamil Nadu Universities',
    description: 'Distance education programs and correspondence courses',
    difficulty: 'Easy',
    estimatedTime: '20-30 minutes',
    fees: 400,
    requirements: [
      {
        type: 'Degree Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree certificate for PG courses'
      },
      {
        type: 'Work Experience Certificate',
        format: ['PDF'],
        maxSize: 3145728,
        mandatory: false,
        description: 'Work experience certificate if applicable'
      }
    ]
  },

  // IITs
  {
    id: 'iit-madras',
    title: 'IIT Madras - BTech/MTech Admission',
    category: 'IITs',
    description: 'Indian Institute of Technology Madras admission application',
    difficulty: 'Hard',
    estimatedTime: '45-60 minutes',
    fees: 2500,
    requirements: [
      {
        type: 'JEE Advanced Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'JEE Advanced scorecard with valid rank'
      },
      {
        type: 'Class 12 Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Class 12 board examination certificate'
      },
      {
        type: 'Category Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: false,
        description: 'SC/ST/OBC certificate for reservation'
      },
      {
        type: 'Medical Certificate',
        format: ['PDF'],
        maxSize: 2097152,
        mandatory: true,
        description: 'Medical fitness certificate'
      }
    ]
  },
  {
    id: 'iit-bombay',
    title: 'IIT Bombay - All Programs',
    category: 'IITs',
    description: 'Comprehensive application for all IIT Bombay programs',
    difficulty: 'Hard',
    estimatedTime: '50-70 minutes',
    fees: 2500,
    requirements: [
      {
        type: 'JEE Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'JEE Main/Advanced scorecard'
      },
      {
        type: 'Academic Transcripts',
        format: ['PDF'],
        maxSize: 10485760,
        mandatory: true,
        description: 'Complete academic transcripts'
      }
    ]
  },
  {
    id: 'iit-delhi',
    title: 'IIT Delhi - Engineering Programs',
    category: 'IITs',
    description: 'Application for undergraduate and postgraduate engineering programs',
    difficulty: 'Hard',
    estimatedTime: '45-65 minutes',
    fees: 2500,
    requirements: [
      {
        type: 'Entrance Exam Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Valid entrance examination scorecard'
      }
    ]
  },

  // NITs
  {
    id: 'nit-trichy',
    title: 'NIT Tiruchirappalli - BTech/MTech',
    category: 'NITs',
    description: 'National Institute of Technology Tiruchirappalli admission',
    difficulty: 'Medium',
    estimatedTime: '35-45 minutes',
    fees: 1500,
    requirements: [
      {
        type: 'JEE Main Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'JEE Main scorecard with percentile'
      },
      {
        type: 'Class 12 Marksheet',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Class 12 board examination marksheet'
      }
    ]
  },
  {
    id: 'nit-warangal',
    title: 'NIT Warangal - Engineering Admission',
    category: 'NITs',
    description: 'Application for engineering programs at NIT Warangal',
    difficulty: 'Medium',
    estimatedTime: '40-50 minutes',
    fees: 1500,
    requirements: [
      {
        type: 'JEE Main Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Valid JEE Main scorecard'
      }
    ]
  },

  // IIMs
  {
    id: 'iim-ahmedabad',
    title: 'IIM Ahmedabad - MBA Admission',
    category: 'IIMs',
    description: 'Master of Business Administration program application',
    difficulty: 'Hard',
    estimatedTime: '60-90 minutes',
    fees: 4000,
    requirements: [
      {
        type: 'CAT Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'CAT examination scorecard with percentile'
      },
      {
        type: 'Bachelor\'s Degree Certificate',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree with minimum 50% marks'
      },
      {
        type: 'Work Experience Certificate',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: false,
        description: 'Work experience certificates if applicable'
      },
      {
        type: 'Statement of Purpose',
        format: ['PDF'],
        maxSize: 2097152,
        mandatory: true,
        description: 'Personal statement and career goals'
      }
    ]
  },
  {
    id: 'iim-bangalore',
    title: 'IIM Bangalore - PGPM',
    category: 'IIMs',
    description: 'Post Graduate Programme in Management',
    difficulty: 'Hard',
    estimatedTime: '55-75 minutes',
    fees: 4000,
    requirements: [
      {
        type: 'CAT/GMAT Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'CAT or GMAT scorecard'
      }
    ]
  },

  // Medical Colleges
  {
    id: 'aiims-delhi',
    title: 'AIIMS Delhi - MBBS Admission',
    category: 'Medical Colleges',
    description: 'All India Institute of Medical Sciences MBBS program',
    difficulty: 'Hard',
    estimatedTime: '40-60 minutes',
    fees: 1500,
    requirements: [
      {
        type: 'NEET Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'NEET-UG scorecard with qualifying marks'
      },
      {
        type: 'Class 12 PCB Marksheet',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Physics, Chemistry, Biology marks in Class 12'
      },
      {
        type: 'Medical Fitness Certificate',
        format: ['PDF'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Medical fitness certificate from registered doctor'
      }
    ]
  },
  {
    id: 'jipmer',
    title: 'JIPMER - Medical Admission',
    category: 'Medical Colleges',
    description: 'Jawaharlal Institute of Postgraduate Medical Education',
    difficulty: 'Hard',
    estimatedTime: '45-55 minutes',
    fees: 1200,
    requirements: [
      {
        type: 'NEET Scorecard',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'NEET scorecard for medical admission'
      }
    ]
  },

  // Competitive Exams
  {
    id: 'upsc-cse',
    title: 'UPSC - Civil Services Examination',
    category: 'Competitive Exams',
    description: 'Union Public Service Commission Civil Services Exam',
    difficulty: 'Hard',
    estimatedTime: '60-90 minutes',
    fees: 100,
    requirements: [
      {
        type: 'Graduation Certificate',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree from recognized university'
      },
      {
        type: 'Age Proof Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Birth certificate or Class 10 certificate'
      },
      {
        type: 'Caste Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: false,
        description: 'SC/ST/OBC certificate for reservation'
      },
      {
        type: 'Photo & Signature',
        format: ['JPG', 'PNG'],
        maxSize: 1048576,
        mandatory: true,
        description: 'Recent photograph and signature scan'
      }
    ]
  },
  {
    id: 'ssc-cgl',
    title: 'SSC - Combined Graduate Level',
    category: 'Competitive Exams',
    description: 'Staff Selection Commission Combined Graduate Level Examination',
    difficulty: 'Medium',
    estimatedTime: '30-45 minutes',
    fees: 100,
    requirements: [
      {
        type: 'Graduation Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree certificate'
      },
      {
        type: 'Category Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: false,
        description: 'Caste/Category certificate if applicable'
      }
    ]
  },
  {
    id: 'ibps-po',
    title: 'IBPS - Probationary Officer',
    category: 'Competitive Exams',
    description: 'Institute of Banking Personnel Selection PO Exam',
    difficulty: 'Medium',
    estimatedTime: '25-40 minutes',
    fees: 850,
    requirements: [
      {
        type: 'Graduation Marksheet',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree with minimum 60% marks'
      }
    ]
  },
  {
    id: 'gate-exam',
    title: 'GATE - Graduate Aptitude Test',
    category: 'Competitive Exams',
    description: 'Graduate Aptitude Test in Engineering',
    difficulty: 'Hard',
    estimatedTime: '35-50 minutes',
    fees: 1500,
    requirements: [
      {
        type: 'Engineering Degree',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree in Engineering/Technology'
      }
    ]
  },

  // Tamil Nadu e-Sevai Applications
  {
    id: 'tn-income-certificate',
    title: 'Tamil Nadu - Income Certificate',
    category: 'TN e-Sevai',
    description: 'Apply for income certificate through Tamil Nadu e-Sevai portal',
    difficulty: 'Easy',
    estimatedTime: '15-25 minutes',
    fees: 15,
    requirements: [
      {
        type: 'Aadhaar Card',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Aadhaar card copy for identity verification'
      },
      {
        type: 'Salary Certificate',
        format: ['PDF'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Salary certificate from employer or income proof'
      },
      {
        type: 'Bank Statement',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: false,
        description: 'Last 6 months bank statement'
      }
    ]
  },
  {
    id: 'tn-community-certificate',
    title: 'Tamil Nadu - Community Certificate',
    category: 'TN e-Sevai',
    description: 'Apply for caste/community certificate online',
    difficulty: 'Easy',
    estimatedTime: '20-30 minutes',
    fees: 15,
    requirements: [
      {
        type: 'Birth Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Birth certificate as age and identity proof'
      },
      {
        type: 'Parent\'s Community Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Father\'s or mother\'s community certificate'
      },
      {
        type: 'Address Proof',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Ration card, voter ID, or utility bill'
      }
    ]
  },
  {
    id: 'tn-nativity-certificate',
    title: 'Tamil Nadu - Nativity Certificate',
    category: 'TN e-Sevai',
    description: 'Tamil Nadu nativity/domicile certificate application',
    difficulty: 'Easy',
    estimatedTime: '20-30 minutes',
    fees: 15,
    requirements: [
      {
        type: 'School Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'School leaving certificate or SSLC certificate'
      },
      {
        type: 'Parent\'s Nativity Proof',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Parent\'s nativity certificate or voter ID'
      }
    ]
  },
  {
    id: 'tn-marriage-certificate',
    title: 'Tamil Nadu - Marriage Registration',
    category: 'TN e-Sevai',
    description: 'Register marriage and obtain marriage certificate',
    difficulty: 'Medium',
    estimatedTime: '30-45 minutes',
    fees: 50,
    requirements: [
      {
        type: 'Marriage Invitation',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Wedding invitation card or marriage proof'
      },
      {
        type: 'Age Proof - Both',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Age proof documents for both bride and groom'
      },
      {
        type: 'Address Proof - Both',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Address proof for both parties'
      },
      {
        type: 'Witness Documents',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Identity proof of marriage witnesses'
      }
    ]
  },
  {
    id: 'tn-birth-certificate',
    title: 'Tamil Nadu - Birth Certificate',
    category: 'TN e-Sevai',
    description: 'Apply for birth certificate online',
    difficulty: 'Easy',
    estimatedTime: '15-25 minutes',
    fees: 15,
    requirements: [
      {
        type: 'Hospital Birth Record',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Hospital birth certificate or discharge summary'
      },
      {
        type: 'Parent\'s ID Proof',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Aadhaar card or voter ID of parents'
      }
    ]
  },
  {
    id: 'tn-death-certificate',
    title: 'Tamil Nadu - Death Certificate',
    category: 'TN e-Sevai',
    description: 'Apply for death certificate online',
    difficulty: 'Easy',
    estimatedTime: '20-30 minutes',
    fees: 15,
    requirements: [
      {
        type: 'Medical Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Medical certificate of cause of death'
      },
      {
        type: 'Applicant ID Proof',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'ID proof of person applying'
      }
    ]
  },
  {
    id: 'tn-land-patta',
    title: 'Tamil Nadu - Land Patta/Title',
    category: 'TN e-Sevai',
    description: 'Apply for land ownership documents',
    difficulty: 'Medium',
    estimatedTime: '40-60 minutes',
    fees: 100,
    requirements: [
      {
        type: 'Survey Settlement',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Survey settlement records'
      },
      {
        type: 'Previous Title Deeds',
        format: ['PDF', 'JPG'],
        maxSize: 10485760,
        mandatory: true,
        description: 'Previous ownership documents'
      },
      {
        type: 'Tax Payment Receipt',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Property tax payment receipts'
      }
    ]
  },
  {
    id: 'tn-ration-card',
    title: 'Tamil Nadu - Ration Card',
    category: 'TN e-Sevai',
    description: 'Apply for new ration card or modify existing',
    difficulty: 'Medium',
    estimatedTime: '35-50 minutes',
    fees: 25,
    requirements: [
      {
        type: 'Family Photo',
        format: ['JPG', 'PNG'],
        maxSize: 2097152,
        mandatory: true,
        description: 'Family photograph with all members'
      },
      {
        type: 'Address Proof',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'House ownership or rental agreement'
      },
      {
        type: 'Income Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 3145728,
        mandatory: true,
        description: 'Family income certificate'
      },
      {
        type: 'Aadhaar - All Members',
        format: ['PDF', 'JPG'],
        maxSize: 10485760,
        mandatory: true,
        description: 'Aadhaar cards of all family members'
      }
    ]
  },

  // Central Universities
  {
    id: 'du-admission',
    title: 'Delhi University - UG Admission',
    category: 'Central Universities',
    description: 'University of Delhi undergraduate admission',
    difficulty: 'Medium',
    estimatedTime: '30-45 minutes',
    fees: 750,
    requirements: [
      {
        type: 'Class 12 Marksheet',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Class 12 board examination marksheet'
      },
      {
        type: 'Character Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 2097152,
        mandatory: true,
        description: 'Character certificate from school'
      }
    ]
  },
  {
    id: 'jnu-admission',
    title: 'JNU - Entrance Examination',
    category: 'Central Universities',
    description: 'Jawaharlal Nehru University entrance exam',
    difficulty: 'Hard',
    estimatedTime: '45-60 minutes',
    fees: 1000,
    requirements: [
      {
        type: 'Graduation Certificate',
        format: ['PDF'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Bachelor\'s degree for PG courses'
      }
    ]
  },

  // State Universities (Other States)
  {
    id: 'mumbai-university',
    title: 'University of Mumbai - Admission',
    category: 'State Universities',
    description: 'Mumbai University various program admissions',
    difficulty: 'Medium',
    estimatedTime: '35-45 minutes',
    fees: 800,
    requirements: [
      {
        type: 'HSC Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Higher Secondary Certificate'
      }
    ]
  },
  {
    id: 'calcutta-university',
    title: 'University of Calcutta - Admission',
    category: 'State Universities',
    description: 'Calcutta University admission application',
    difficulty: 'Medium',
    estimatedTime: '30-40 minutes',
    fees: 600,
    requirements: [
      {
        type: 'Higher Secondary Certificate',
        format: ['PDF', 'JPG'],
        maxSize: 5242880,
        mandatory: true,
        description: 'Class 12 or equivalent certificate'
      }
    ]
  }
];

export const applications: Application[] = [
  {
    id: '1',
    formId: 'anna-university',
    title: 'Anna University - UG/PG Admission',
    status: 'processing',
    progress: 85,
    documents: [],
    createdAt: new Date('2024-12-15'),
    updatedAt: new Date('2024-12-20')
  },
  {
    id: '2',
    formId: 'tn-income-certificate',
    title: 'Tamil Nadu - Income Certificate',
    status: 'approved',
    progress: 100,
    documents: [],
    createdAt: new Date('2024-12-10'),
    updatedAt: new Date('2024-12-18')
  },
  {
    id: '3',
    formId: 'upsc-cse',
    title: 'UPSC - Civil Services Examination',
    status: 'draft',
    progress: 40,
    documents: [],
    createdAt: new Date('2024-12-18'),
    updatedAt: new Date('2024-12-18')
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Student Basic',
    price: 500,
    interval: 'month',
    maxApplications: 5,
    priority: 'standard',
    features: [
      '5 applications per month',
      'Basic document validation',
      'Email support',
      'Standard processing time',
      'Mobile app access',
      'Tamil Nadu e-Sevai forms',
      'University application templates'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 1200,
    interval: 'month',
    maxApplications: 20,
    priority: 'high',
    popular: true,
    features: [
      '20 applications per month',
      'Advanced document validation',
      'Priority email & chat support',
      'Faster processing time',
      'Document review service',
      'Custom templates',
      'Analytics dashboard',
      'All competitive exam forms',
      'Multi-state applications'
    ]
  },
  {
    id: 'enterprise',
    name: 'Institutional',
    price: 2500,
    interval: 'month',
    maxApplications: -1,
    priority: 'premium',
    features: [
      'Unlimited applications',
      'AI-powered document processing',
      '24/7 phone & chat support',
      'Priority processing',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solutions',
      'Advanced analytics',
      'Bulk application management',
      'Institution-specific templates'
    ]
  }
];