export const personalInfo = {
  name: "Matta Sravya",
  shortName: "Sravya",
  logoText: "SRAVYA.",
  greeting: "HELLO, I'M",
  title: "Full-Stack Developer",
  animatedRoles: [
    "Full-Stack Developer",
    "Java Developer",
    "Software Developer",
    "AI/ML Enthusiast"
  ],
  bio: "I'm a passionate Computer Science and Engineering student who enjoys developing practical applications, solving real-world problems, and exploring modern software technologies. My interests include Java development, full-stack applications, and AI/ML.",
  aboutParagraphs: [
    "I'm a Computer Science and Engineering student at Sri Venkateswara College of Engineering, Tirupati, with a strong foundation in Java, Python, database management, and full-stack development.",
    "Through academic projects and internships, I've gained practical exposure to application development, REST APIs, database connectivity, and AI-powered solutions.",
    "I enjoy solving problems, exploring new technologies, and continuously improving my software development skills."
  ],
  stats: [
    { value: 9.20, label: "CGPA", suffix: "", decimals: 2 },
    { value: 2, label: "Featured Projects", suffix: "+", decimals: 0, prefix: "0" },
    { value: 2, label: "Internship Experiences", suffix: "", decimals: 0, prefix: "0" }
  ],
  contact: {
    email: "mattasravya2106@gmail.com",
    phone: "+91 9381509488",
    location: "Cuddapah, Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/matta-sravya/",
    github: "https://github.com/mattasravya/",
  },
  resumeUrl: "/resume.pdf"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export const skillCategories = [
  {
    category: "Programming",
    description: "Core languages used for system logic, algorithms, and applications",
    skills: [
      { name: "Java", type: "Core Skill", icon: "Code2", level: "Primary Language" },
      { name: "Python", type: "Core Skill", icon: "Terminal", level: "Primary Language" },
      { name: "JavaScript", type: "Core Skill", icon: "FileCode", level: "Web & Runtime" }
    ]
  },
  {
    category: "Frontend",
    description: "Modern web user interface development and styling",
    skills: [
      { name: "HTML", type: "Core Skill", icon: "Globe", level: "Semantic Markup" },
      { name: "CSS", type: "Core Skill", icon: "Palette", level: "Responsive Styling" },
      { name: "React.js", type: "Core Skill", icon: "Layers", level: "Component Framework" }
    ]
  },
  {
    category: "Backend & Frameworks",
    description: "Server-side logic, enterprise architectures, and API endpoints",
    skills: [
      { name: "JDBC", type: "Core Skill", icon: "Database", level: "Database Connectivity" },
      { name: "Spring Boot", type: "Core Skill", icon: "Server", level: "Enterprise Backend" },
      { name: "Hibernate", type: "Core Skill", icon: "Boxes", level: "ORM Architecture" },
      { name: "REST APIs", type: "Core Skill", icon: "Workflow", level: "API Architecture" },
      { name: "Node.js", type: "Internship Exposure", icon: "Cpu", level: "Server Runtime" },
      { name: "Express.js", type: "Internship Exposure", icon: "Network", level: "Backend Web Service" }
    ]
  },
  {
    category: "Databases",
    description: "Structured and unstructured data storage and querying",
    skills: [
      { name: "MySQL", type: "Core Skill", icon: "Database", level: "Relational / SQL" },
      { name: "MongoDB", type: "Internship Exposure", icon: "HardDrive", level: "Document / NoSQL" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Developer tooling, workflow automation, and environments",
    skills: [
      { name: "Git", type: "Core Skill", icon: "GitBranch", level: "Version Control" },
      { name: "GitHub", type: "Core Skill", icon: "Github", level: "Collaboration & CI" },
      { name: "Postman", type: "Core Skill", icon: "Send", level: "API Testing" },
      { name: "GitHub Copilot", type: "Core Skill", icon: "Sparkles", level: "AI Assistance" },
      { name: "Streamlit", type: "Core Skill", icon: "MonitorPlay", level: "Data Web Apps" },
      { name: "ServiceNow", type: "Internship Exposure", icon: "CloudCog", level: "Enterprise ITSM" }
    ]
  }
];

export const projects = [
  {
    id: "ai-resume-analyzer",
    number: "01",
    title: "AI Resume Analyzer",
    subtitle: "AI-Powered Career Intelligence Application",
    category: "Machine Learning & NLP",
    description: "An AI-powered application that analyzes resumes against job descriptions and provides matching scores, keyword insights, skill gap identification, and improvement recommendations.",
    technologies: ["Python", "NLP", "Machine Learning", "TF-IDF", "Streamlit"],
    features: [
      "Resume parsing from multiple document structures",
      "Job description semantic comparison & alignment",
      "TF-IDF vector matching for contextual similarity",
      "Automatic keyword & entity extraction",
      "Detailed skill gap identification & diagnostics",
      "Interactive Streamlit web interface with real-time feedback",
      "Visual matching-score breakdown and metrics dashboard"
    ],
    github: "https://github.com/mattasravya",
    demo: null, // No live URL to invent
    highlights: ["NLP Pipeline", "TF-IDF Vectorizer", "Streamlit UI", "Skill Gap Diagnostics"]
  },
  {
    id: "student-database-management-system",
    number: "02",
    title: "Student Database Management System",
    subtitle: "Robust Java & Relational Database Application",
    category: "Enterprise Java & SQL",
    description: "A student management application that supports student profile management, enrollment information, academic records, and database CRUD operations.",
    technologies: ["Java", "MySQL", "JDBC"],
    features: [
      "Comprehensive student record management",
      "Full CRUD operations (Create, Read, Update, Delete)",
      "Secure JDBC integration with prepared statements",
      "Normalized relational database schema design",
      "Optimized SQL queries for search and batch reports"
    ],
    github: "https://github.com/mattasravya",
    demo: null,
    highlights: ["Java SE Architecture", "JDBC Connection Pool", "Relational Schema", "CRUD Management"]
  }
];

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Full Stack Developer Virtual Internship",
    type: "Virtual Internship",
    duration: "June 2026 – August 2026",
    period: "Upcoming / Scheduled",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlights: [
      "MERN stack full-lifecycle web development and modular component design",
      "Building and testing robust REST APIs for high-performance communication",
      "Seamless frontend-backend integration with state synchronization",
      "Database connectivity, aggregation pipelines, and CRUD operations",
      "Adopting clean component-based development and modern JavaScript standards"
    ]
  },
  {
    role: "ServiceNow Developer Intern",
    company: "ServiceNow Virtual Internship",
    type: "Virtual Internship",
    duration: "January 2026 – March 2026",
    period: "Completed",
    technologies: ["ServiceNow Platform", "JavaScript"],
    highlights: [
      "Engineered Client Scripts and UI Policies for dynamic, responsive form behavior",
      "Customized ServiceNow instances according to enterprise business requirements",
      "Configured Incident Management and Service Catalog item fulfillment flows",
      "Implemented Workflow Automation to streamline ticket handling and service requests",
      "Applied core IT Service Management (ITSM) principles across service lifecycles"
    ]
  }
];

export const educationList = [
  {
    institution: "Sri Venkateswara College of Engineering, Tirupati",
    degree: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 9.20",
    scoreType: "CGPA",
    scoreValue: "9.20 / 10.0",
    duration: "2023 – 2027",
    status: "Currently Pursuing (3rd Year)",
    highlights: [
      "Consistently maintaining an exceptional academic record of 9.20 CGPA",
      "Specializing in Object-Oriented Programming (Java), Data Structures, Algorithms, and Database Management Systems",
      "Active participant in technical symposiums, coding challenges, and collaborative engineering projects"
    ]
  },
  {
    institution: "Sri Chaitanya Junior College, Tirupati",
    degree: "Intermediate (MPC)",
    score: "93.1%",
    scoreType: "Percentage",
    scoreValue: "93.1%",
    duration: "2021 – 2023",
    status: "Completed with Distinction",
    highlights: [
      "Graduated with 93.1% aggregate with high honors in Mathematics, Physics, and Chemistry",
      "Built a solid foundation in analytical reasoning, quantitative problem-solving, and algorithmic thinking"
    ]
  }
];

export const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "APSSDC Training",
    badge: "Cloud Computing",
    description: "Foundational training covering AWS Cloud architectural principles, core services (EC2, S3, IAM, VPC), security best practices, and cloud economics.",
    icon: "Cloud"
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Networking Academy",
    badge: "Networking",
    description: "Comprehensive networking curriculum including IP addressing, subnetting, routing & switching protocols, network security fundamentals, and OSI layer architecture.",
    icon: "Network"
  }
];
