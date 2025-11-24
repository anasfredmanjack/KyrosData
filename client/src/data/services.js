import { FaGlobe, FaFileContract, FaPassport, FaPlane, FaUserTie, FaGavel, FaUsers, FaLaptopCode, FaHandshake } from 'react-icons/fa';

export const services = [
    {
        id: 1,
        title: 'International Recruitment',
        icon: FaGlobe,
        shortDesc: 'Matching candidates with verified employers in Ireland & Europe.',
        fullDesc: 'We connect qualified candidates with verified employers in Ireland and Europe, matching their skills to genuine job opportunities across healthcare, logistics, hospitality, IT, and general labour sectors. Our recruitment process is thorough, ensuring that both the employer and the candidate are a perfect fit.',
        features: ['Healthcare (Nurses & HCAs)', 'Warehouse & Logistics', 'Hospitality', 'IT & Tech', 'General Labour']
    },
    {
        id: 2,
        title: 'Employer-Led Work Permit Support',
        icon: FaFileContract,
        shortDesc: 'Guidance on required documents and employer submissions.',
        fullDesc: 'We guide clients through the work permit process by advising on required documents, coordinating with employers, and ensuring accurate submissions for faster approvals. We understand the intricacies of work permit regulations in various European countries.',
        features: ['Document Verification', 'Employer Coordination', 'Submission Support', 'Follow-up & Advisory']
    },
    {
        id: 3,
        title: 'Visa Advisory & Application Guidance',
        icon: FaPassport,
        shortDesc: 'Step-by-step visa guidance and embassy preparation.',
        fullDesc: 'We provide step-by-step visa guidance, from document preparation to understanding embassy requirements, ensuring clients submit strong and compliant visa applications. We help minimize the risk of rejection by ensuring all criteria are met.',
        features: ['Visa Checklist', 'Embassy Requirements', 'Interview Preparation', 'Application Review']
    },
    {
        id: 4,
        title: 'Relocation & Pre-Departure Support',
        icon: FaPlane,
        shortDesc: 'Travel guidance, accommodation info, and arrival preparation.',
        fullDesc: 'We help clients prepare for travel, understand accommodation options, manage arrival expectations, and settle smoothly into their new country. Moving to a new country can be daunting; we make it easier.',
        features: ['Travel Planning', 'Accommodation Assistance', 'Arrival Guidance', 'Cultural Orientation']
    },
    {
        id: 5,
        title: 'Career & Document Advisory',
        icon: FaUserTie,
        shortDesc: 'International-standard CV writing and cover letters.',
        fullDesc: 'We create professional, international-standard CVs and cover letters, and offer tailored advice on job readiness and career advancement abroad. Your CV is your first impression; we make it count.',
        features: ['CV Rewriting', 'Cover Letter Drafting', 'LinkedIn Optimization', 'Job Search Strategy']
    },
    {
        id: 6,
        title: 'Immigration & Compliance Advisory',
        icon: FaGavel,
        shortDesc: 'Advice on immigration rules, work rights, and TRC.',
        fullDesc: 'We educate clients on immigration rules, work rights, employer obligations, TRC processes, and post-arrival legal compliance to avoid violations. Staying compliant is crucial for your long-term stay.',
        features: ['Immigration Rules', 'Work Rights', 'TRC Guidance', 'Legal Compliance']
    },
    {
        id: 7,
        title: 'Family Relocation Assistance',
        icon: FaUsers,
        shortDesc: 'Support for dependents joining the main applicant.',
        fullDesc: 'We support clients planning to move with their families by explaining dependent visa requirements, necessary documents, and settlement processes. We believe in keeping families together.',
        features: ['Dependent Visas', 'Family Documentation', 'Settlement Advice', 'Schooling Information']
    },
    {
        id: 8,
        title: 'IT & Skilled Worker Support',
        icon: FaLaptopCode,
        shortDesc: 'Specialized support for tech and skilled professionals.',
        fullDesc: 'We assist tech and skilled professionals with portfolio preparation, employer expectations, and navigating specialized relocation pathways to Ireland and Europe. We understand the specific needs of the tech industry.',
        features: ['Portfolio Review', 'Tech Interview Prep', 'Skill Assessment', 'Specialized Pathways']
    },
    {
        id: 9,
        title: 'Post-Arrival Orientation',
        icon: FaHandshake,
        shortDesc: 'Settling-in advice, taxes, and local services.',
        fullDesc: 'We help clients adjust after arrival by explaining local systems, taxes, workplace culture, and essential services to ensure a smooth transition. Our support doesn\'t end when you land.',
        features: ['Local Systems', 'Tax Registration', 'Workplace Culture', 'Essential Services']
    }
];
