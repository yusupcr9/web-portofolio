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
];
