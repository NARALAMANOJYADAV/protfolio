export interface Project {
  slug: string;
  title: string;
  category: 'AI & Computer Vision' | 'Full Stack' | 'Web Development' | 'Machine Learning';
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  account: 'NARALAMANOJYADAV' | 'naralamanoj';
  date: string;
}

export const projectsData: Project[] = [
  {
    slug: 'counseling-platform',
    title: 'Student Counselling Platform',
    category: 'Full Stack',
    summary: 'A comprehensive full-stack counselling and advisory platform developed by Narala Manoj Yadav to streamline academic counseling sessions and student scheduling.',
    problem: 'Academic counseling in universities often faces administrative friction, scheduling delays, and fragmented student records, making tracking and feedback difficult for mentors.',
    solution: 'Engineered a unified student counselling portal using Python Flask and relational databases. The system automates session booking, tracks counseling histories, and provides an intuitive dashboard for faculty advisors and students.',
    keyFeatures: [
      'Automated appointment scheduling and conflict avoidance',
      'Secure student authentication and confidential record management',
      'Faculty advisor dashboard with student session histories',
      'Real-time status updates and automated email notifications',
      'Responsive interface optimized for desktop and mobile devices'
    ],
    techStack: ['Python', 'Flask', 'SQL / Relational Database', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/NARALAMANOJYADAV/counseling',
    liveUrl: 'https://counseling-1.onrender.com',
    account: 'NARALAMANOJYADAV',
    date: '2025'
  },
  {
    slug: 'uniform-detection-yolov8',
    title: 'Uniform Detection with YOLOv8',
    category: 'AI & Computer Vision',
    summary: 'An intelligent computer vision system trained on the YOLOv8 architecture to perform real-time student uniform compliance detection on surveillance streams.',
    problem: 'Manual inspection of dress codes and uniform adherence in educational institutions is time-consuming, inconsistent, and prone to human oversight.',
    solution: 'Designed and trained a deep learning computer vision pipeline utilizing Ultralytics YOLOv8. The model accurately detects individuals, segments attire, and validates uniform compliance with low latency across diverse lighting conditions.',
    keyFeatures: [
      'Real-time object detection and classification using YOLOv8',
      'Custom annotated image dataset for academic dress code standards',
      'High inference FPS supporting video streams and surveillance cameras',
      'Automated violation flagging and audit logging',
      'Exportable reporting for campus administration'
    ],
    techStack: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Computer Vision', 'NumPy'],
    githubUrl: 'https://github.com/NARALAMANOJYADAV/complete-uniform-detection-YOLOv8',
    account: 'NARALAMANOJYADAV',
    date: '2025'
  },
  {
    slug: 'student-library-portal',
    title: 'Student Library Portal',
    category: 'Web Development',
    summary: 'An academic year-based library management and book discovery system built by Narala Manoj Yadav to simplify campus book searches and inventory browsing.',
    problem: 'Traditional campus library software is often clunky, difficult to navigate on mobile devices, and organizes resources without consideration for year-specific curricula.',
    solution: 'Created an accessible, modern digital library portal with category filtering tailored to engineering semesters, fast search indexing, and intuitive book reservation interfaces.',
    keyFeatures: [
      'Academic year and department-based resource curation',
      'Instant search and filter across hundreds of reference titles',
      'Clean book detail modals with availability indicators',
      'Mobile-first responsive layout with fast client-side rendering',
      'Zero dependency static deployment on GitHub Pages'
    ],
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX Design', 'GitHub Pages'],
    githubUrl: 'https://github.com/NARALAMANOJYADAV/mainproject',
    liveUrl: 'https://naralamanojyadav.github.io/mainproject/',
    account: 'NARALAMANOJYADAV',
    date: '2024'
  },
  {
    slug: 'plant-disease-detection',
    title: 'Face Mask & Plant Disease Classifier',
    category: 'Machine Learning',
    summary: 'A dual-model artificial intelligence application providing public safety mask detection alongside convolutional neural network (CNN) plant foliage disease diagnostic tooling.',
    problem: 'Small-scale farmers and agriculturalists lack accessible real-time tools to identify crop leaf infections before disease spreads across harvests.',
    solution: 'Developed an integrated web application leveraging computer vision models to classify plant leaf diseases accurately and alert users with recommended countermeasures.',
    keyFeatures: [
      'Multi-class disease classification across diverse crop foliage',
      'Image upload and instantaneous diagnostic inference',
      'Confidence score computation and healthy vs infected differentiation',
      'Lightweight web interface for edge or mobile field diagnostics',
      'Dual utility module supporting safety face-mask validation'
    ],
    techStack: ['Python', 'TensorFlow / Keras', 'Convolutional Neural Networks', 'OpenCV', 'HTML5', 'Flask'],
    githubUrl: 'https://github.com/NARALAMANOJYADAV/face-mask-and-plant-disease-detection',
    account: 'NARALAMANOJYADAV',
    date: '2025'
  },
  {
    slug: 'restaurant-website',
    title: 'Modern Restaurant Web Application',
    category: 'Web Development',
    summary: 'An interactive, responsive restaurant website highlighting modern frontend architecture, smooth micro-interactions, and an intuitive dining menu experience.',
    problem: 'Local restaurants often lack fast, visually captivating web presences that convey ambiance and make digital menu browsing effortless.',
    solution: 'Built a sleek web application with custom animations, categorized digital menu cards, reservation contact flows, and high performance on all viewport sizes.',
    keyFeatures: [
      'Interactive culinary menu with dietary and course filters',
      'Fluid CSS animations and micro-interactions',
      'Location, operating hours, and direct contact integration',
      'Optimized asset loading achieving high mobile Lighthouse scores',
      'Accessible semantic HTML structure'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'Web Animations'],
    githubUrl: 'https://github.com/NARALAMANOJYADAV/project1',
    liveUrl: 'https://naralamanojyadav.github.io/project1/',
    account: 'NARALAMANOJYADAV',
    date: '2024'
  },
  {
    slug: 'ai-community',
    title: 'AI Community Platform',
    category: 'Full Stack',
    summary: 'A collaborative web platform created by Narala Manoj Yadav for AI enthusiasts, researchers, and student developers to share open-source tools and discoveries.',
    problem: 'Early-stage AI practitioners lack specialized student-friendly communities to exchange code snippets, model weights, and research breakthroughs.',
    solution: 'Engineered a modern web hub where members can showcase AI experiments, participate in discussions, and discover vetted tutorials across machine learning topics.',
    keyFeatures: [
      'User post creation and technical thread discussions',
      'Categorized feeds for computer vision, NLP, and full-stack tools',
      'Modern dark-themed interface built with TypeScript',
      'Production deployment on Vercel with high uptime',
      'Integration with GitHub profile authentication'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'Next.js Patterns'],
    githubUrl: 'https://github.com/naralamanoj/ai-community',
    liveUrl: 'https://ai-community-omega.vercel.app',
    account: 'naralamanoj',
    date: '2025'
  }
];
