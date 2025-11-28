export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  gradient: string;
  category: string;
  year: string;
  client?: string;
  role: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 'hris-platform',
    title: 'H.R.I.S',
    description: 'A modern Human Resource Information System for managing employees, attendance, and HR workflows.',
    fullDescription: 'A comprehensive Human Resource Information System (HRIS) built with modern web technologies to manage employee data, attendance, leave requests, payroll-related information, and performance reviews in one centralized platform. The system provides real-time insights for HR and management through dashboards, analytics, and automated workflows.',
    image: 'berdikari/hris_app.png?auto=compress&cs=tinysrgb&w=800',
    tags: ['HRIS', 'Odoo', 'Flutter', 'REST API'],
    gradient: 'from-emerald-500 to-cyan-500',
    category: 'Web & Mobile Application',
    year: '2022',
    client: 'Internal Project',
    role: 'Full Stack Developer',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Centralized employee data management',
      'Attendance & leave management with approval workflow',
      'Automatic payroll calculation based on attendance, overtime, and deductions',
      'Business trip request and reimbursement workflow',
      'Role-based access control for HR, finance, and managers',
      'Export reports to PDF and Excel'
    ],
    challenges: [
      'Designing flexible data models for complex HR policies',
      'Implementing secure role-based permissions and data privacy',
      'Optimizing queries for reporting and analytics dashboards'
    ],
    technologies: {
      frontend: ['Flutter'],
      backend: ['Odoo', 'REST API'],
      database: ['PostgreSQL'],
      tools: ['VS Code', 'Docker', 'Gitlab']
    },
    gallery: [
      'berdikari/hris_app.png?auto=compress&cs=tinysrgb&w=800',
      'berdikari/hris_dashboard.png?auto=compress&cs=tinysrgb&w=800',
      'berdikari/hris_web.png?auto=compress&cs=tinysrgb&w=800',
    ]
  },
  {
    id: 'asset-management-system',
    title: 'Asset Management System',
    description: 'A modern web-based system for managing company assets, tracking usage, and monitoring asset lifecycle.',
    fullDescription: 'A comprehensive Asset Management System designed to help organizations track, maintain, and optimize the lifecycle of physical and digital assets. The system allows real-time monitoring of asset availability, assignment, maintenance schedules, depreciation tracking, and audit trails. Built with modern frameworks to ensure fast, secure, and scalable asset operations.',
    image: 'berdikari/mail_app.png?auto=compress&cs=tinysrgb&w=800',
    tags: ['Asset', 'Odoo', 'Flutter', 'REST API'],
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Web & Mobile Application',
    year: '2024',
    role: 'Frontend Developer & System Integration',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Real-time asset tracking and monitoring',
      'Asset assignment to employees or departments',
      'QR Code / Barcode asset scanning',
      'Depreciation and asset value calculation',
      'Comprehensive asset history logs',
      'Interactive dashboard showing asset utilization and status'
    ],
    challenges: [
      'Ensuring accurate audit trails for compliance needs',
      'Designing flexible depreciation formulas',
      'Handling large-scale asset datasets efficiently',
    ],
    technologies: {
      frontend: ['Flutter'],
      backend: ['Odoo', 'REST API'],
      database: ['PostgreSQL'],
      tools: ['VS Code', 'Docker', 'Gitlab']
    },
    gallery: [
      'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      'berdikari/mail_data.png?auto=compress&cs=tinysrgb&w=800',
      'berdikari/mail_dashboard.png?auto=compress&cs=tinysrgb&w=800',
    ]
  },
  {
    id: 'poultry-farm-management-system',
    title: 'Poultry Farm Management System',
    description: 'A management system for poultry farms to monitor flock performance, feed intake, and operational efficiency.',
    fullDescription: 'A Poultry Farm Management System designed to help farm owners and supervisors track all operational activities within a poultry farm. The system records bird population per flock, daily mortality, feed intake, vaccination schedules, weight progress, and harvest results. It also provides performance insights such as FCR, mortality rate, production index (IP), and cost efficiency per cycle.',
    image: 'berdikari/fms_dashboard.png?auto=compress&cs=tinysrgb&w=800',
    tags: ['FMS', 'Poultry', 'Odoo'],
    gradient: 'from-green-500 to-emerald-500',
    category: 'Agriculture Application',
    year: '2023',
    role: 'Full Stack Developer',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Flock and poultry house management',
      'Daily feed intake tracking and FCR calculation',
      'Mortality monitoring and flock health tracking',
      'Vaccination schedules and health treatment records',
      'Average body weight monitoring and harvest reporting',
      'Dashboard with key farm performance indicators (FCR, mortality, IP, cost per kg)'
    ],
    challenges: [
      'Designing a flexible data model for different housing systems and production cycles',
      'Combining feed, mortality, and weight data to generate accurate performance indicators',
      'Creating dashboards that are easy to understand for field supervisors and farm technicians'
    ],
    technologies: {
      frontend: ['Odoo'],
      backend: ['Odoo'],
      database: ['PostgreSQL'],
      tools: ['VS Code', 'Docker', 'Gitlab']
    },
    gallery: [
      '',
      'berdikari/fms_excel.png?auto=compress&cs=tinysrgb&w=800',
      'berdikari/fms_data.png?auto=compress&cs=tinysrgb&w=800',
    ]
  },
  {
    id: 'music-visualizer',
    title: 'Music Visualizer',
    description: 'Interactive music visualizer with WebGL shaders and audio analysis.',
    fullDescription: 'An immersive audio-reactive visualization tool that transforms music into stunning visual experiences. Uses advanced audio analysis and custom WebGL shaders to create dynamic, real-time graphics.',
    image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['WebGL', 'Audio API', 'Canvas'],
    gradient: 'from-orange-500 to-red-500',
    category: 'Creative Coding',
    year: '2023',
    role: 'Creative Developer',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Real-time audio analysis',
      'Custom WebGL shaders',
      'Multiple visualization modes',
      'Audio file upload support',
      'Microphone input',
      'Recording and export'
    ],
    challenges: [
      'Achieving smooth 60fps performance',
      'Synchronizing audio and visuals',
      'Creating visually appealing shader effects'
    ],
    technologies: {
      frontend: ['JavaScript', 'WebGL', 'GLSL', 'Three.js'],
      backend: ['Web Audio API', 'Canvas API'],
      tools: ['Webpack', 'GLSL Optimizer']
    },
    gallery: [
      'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2123339/pexels-photo-2123339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'portfolio-3d',
    title: 'Portfolio 3D',
    description: 'Immersive 3D portfolio experience with smooth scroll animations.',
    fullDescription: 'A groundbreaking portfolio website that reimagines how personal work can be presented. Features scroll-triggered 3D animations, parallax effects, and an immersive journey through projects.',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Three.js', 'GSAP', 'React'],
    gradient: 'from-yellow-500 to-amber-500',
    category: 'Portfolio',
    year: '2023',
    role: 'Creative Developer',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Scroll-triggered 3D animations',
      'Custom 3D models and scenes',
      'Smooth parallax effects',
      'Interactive project showcases',
      'Mobile-optimized experience',
      'Performance optimized'
    ],
    challenges: [
      'Optimizing 3D performance for mobile',
      'Creating smooth scroll interactions',
      'Balancing aesthetics with usability'
    ],
    technologies: {
      frontend: ['React', 'Three.js', 'GSAP', 'React Three Fiber'],
      backend: ['React Router'],
      tools: ['Blender', 'Vite', 'Lighthouse']
    },
    gallery: [
      'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'social-platform',
    title: 'Social Platform',
    description: 'Modern social media platform with real-time messaging and stories.',
    fullDescription: 'A full-featured social media platform with all the modern features users expect. Real-time messaging, stories, feeds, notifications, and more, all built with scalability and performance in mind.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Firebase', 'Node.js'],
    gradient: 'from-pink-500 to-rose-500',
    category: 'Social Media',
    year: '2023',
    client: 'SocialCo',
    role: 'Lead Developer',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    features: [
      'Real-time messaging and notifications',
      'Stories with 24-hour expiry',
      'Image and video uploads',
      'User profiles and following',
      'Content moderation',
      'Advanced search and discovery'
    ],
    challenges: [
      'Scaling real-time features for thousands of users',
      'Implementing efficient content delivery',
      'Ensuring data privacy and security'
    ],
    technologies: {
      frontend: ['React', 'Redux', 'TypeScript', 'Material-UI'],
      backend: ['Node.js', 'Express', 'Socket.io', 'Firebase Functions'],
      database: ['Firebase Firestore', 'Firebase Storage'],
      tools: ['Firebase Hosting', 'GitHub Actions', 'Sentry']
    },
    gallery: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
];
