export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  currentCompany: string;
  currentRole: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  avatarUrl: string;
  experienceYears: string;
  languages: string[];
}

export interface NavItem {
  id: string;
  label: string;
  index: string;
}

export interface SkillItem {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Security & Auth';
  level: 'Expert' | 'Advanced' | 'Proficient';
  experience: string;
  description: string;
  highlightIn: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  description: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: 'collaborative' | 'enterprise-hrms' | 'erp-microservices' | 'api-gateway';
}

export interface ExperienceItem {
  id: string;
  index: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  type: 'work' | 'education';
  highlights: string[];
  tech: string[];
}

export const PROFILE: Profile = {
  name: "Sandip Maity",
  firstName: "Sandip",
  lastName: "Maity",
  role: "Full Stack Software Engineer",
  tagline: "Architecting resilient full-stack systems, enterprise ERPs, and real-time collaboration engines.",
  bio: "Software Engineer with a focus on high-throughput backend services, modern Next.js/React frontends, microservices architecture, and enterprise-grade RBAC security. Currently engineering scalable ERP, HRMS, and CRM platforms at Tedekstra Limited (UK).",
  email: "sandipmaity21052003@gmail.com",
  phone: "+917908729570",
  phoneDisplay: "+91 7908729570",
  location: "West Bengal, India",
  currentCompany: "Tedekstra Limited (UK)",
  currentRole: "Software Engineer (Remote)",
  github: "https://github.com/San-Dip-Maity",
  linkedin: "https://linkedin.com/in/sandip-maity",
  resumePdf: "/Sandip_Resume.pdf",
  avatarUrl: "/sandip.jpg",
  experienceYears: "2+ Years",
  languages: ["English", "Hindi", "Bengali"],
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Overview", index: "00" },
  { id: "about", label: "Philosophy", index: "01" },
  { id: "projects", label: "Systems & Work", index: "02" },
  { id: "skills", label: "Stack & Matrix", index: "03" },
  { id: "experience", label: "Journey", index: "04" },
  { id: "terminal", label: "Console", index: "05" },
  { id: "contact", label: "Connect", index: "06" },
];

export const SKILL_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Security & Auth",
] as const;

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    atomicNumber: 1,
    symbol: "Nx",
    name: "Next.js",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "App Router, SSR, Server Components, static generation, dynamic routing, and caching architecture.",
    highlightIn: "SyncSpace, PeopleOS, Tedekstra ERP",
  },
  {
    atomicNumber: 2,
    symbol: "Re",
    name: "React.js",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "React 19 hooks, concurrent rendering, state management, synthetic events, and custom hook primitives.",
    highlightIn: "SyncSpace, PeopleOS",
  },
  {
    atomicNumber: 3,
    symbol: "Ts",
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "Strict typing, generics, branded types, discriminated unions, and compile-time contract enforcement.",
    highlightIn: "All Core Repositories",
  },
  {
    atomicNumber: 4,
    symbol: "Js",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "Event loop, closures, asynchronous streams, web workers, and modern ECMAScript specifications.",
    highlightIn: "All Core Systems",
  },
  {
    atomicNumber: 5,
    symbol: "Tw",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "Tailwind CSS v4, custom utility scales, fluid typography, dark mode CSS variables, and design tokens.",
    highlightIn: "SyncSpace, Enterprise Portals",
  },
  {
    atomicNumber: 6,
    symbol: "Ht",
    name: "HTML5 & CSS3",
    category: "Frontend",
    level: "Expert",
    experience: "Production",
    description: "Semantic layouts, accessibility (WCAG 2.1), responsive viewport ergonomics, and CSS grid / flexbox.",
    highlightIn: "All Frontend Surfaces",
  },
  {
    atomicNumber: 7,
    symbol: "Bs",
    name: "Bootstrap",
    category: "Frontend",
    level: "Proficient",
    experience: "Production",
    description: "Responsive layouts, rapid prototype drafting, grid system customization, and legacy UI migration.",
    highlightIn: "Client Legacy Portals",
  },
  {
    atomicNumber: 8,
    symbol: "Ws",
    name: "WebSockets Client",
    category: "Frontend",
    level: "Advanced",
    experience: "Production",
    description: "Live state synchronization, reconnection backoff strategies, binary message payloads, and presence queues.",
    highlightIn: "SyncSpace Collaborative UI",
  },

  // Backend
  {
    atomicNumber: 9,
    symbol: "Nd",
    name: "Node.js",
    category: "Backend",
    level: "Expert",
    experience: "Production",
    description: "High-concurrency event-driven architecture, streaming I/O, child processes, and cluster optimization.",
    highlightIn: "Tedekstra ERP, SyncSpace Backend",
  },
  {
    atomicNumber: 10,
    symbol: "Ex",
    name: "Express.js",
    category: "Backend",
    level: "Expert",
    experience: "Production",
    description: "Middleware pipelines, RESTful routing, input validation sanitizers, rate limiting, and error boundaries.",
    highlightIn: "PeopleOS API, Tangent Tech Services",
  },
  {
    atomicNumber: 11,
    symbol: "Ns",
    name: "NestJS",
    category: "Backend",
    level: "Advanced",
    experience: "Production",
    description: "Dependency injection, modular architectures, microservice transports, guards, and interceptors.",
    highlightIn: "Tedekstra ERP & HRMS Microservices",
  },
  {
    atomicNumber: 12,
    symbol: "Rt",
    name: "REST APIs",
    category: "Backend",
    level: "Expert",
    experience: "Production",
    description: "OpenAPI specification, idempotent mutations, status code discipline, and paginated payload streaming.",
    highlightIn: "Enterprise CRM & HRMS APIs",
  },
  {
    atomicNumber: 13,
    symbol: "Wb",
    name: "WebSockets (Server)",
    category: "Backend",
    level: "Advanced",
    experience: "Production",
    description: "Bidirectional multiplexing, room broadcasting, heartbeat pings, and heartbeat-loss self-recovery.",
    highlightIn: "SyncSpace Real-Time Server",
  },
  {
    atomicNumber: 14,
    symbol: "Fb",
    name: "Firebase",
    category: "Backend",
    level: "Proficient",
    experience: "Production",
    description: "Cloud Firestore, Cloud Functions, real-time listeners, serverless integrations, and Firebase Auth.",
    highlightIn: "Rapid Cloud Prototypes",
  },

  // Database
  {
    atomicNumber: 15,
    symbol: "Mg",
    name: "MongoDB",
    category: "Database",
    level: "Expert",
    experience: "Production",
    description: "Aggregation pipelines, complex indexing, multi-tenant database partitioning, and document optimization.",
    highlightIn: "PeopleOS, Tedekstra ERP",
  },
  {
    atomicNumber: 16,
    symbol: "Sq",
    name: "MySQL",
    category: "Database",
    level: "Advanced",
    experience: "Production",
    description: "Relational modeling, ACID transactions, foreign key constraints, indexing strategies, and query profiling.",
    highlightIn: "Enterprise Billing & HRMS",
  },
  {
    atomicNumber: 17,
    symbol: "Pr",
    name: "Prisma ORM",
    category: "Database",
    level: "Advanced",
    experience: "Production",
    description: "Type-safe database client generation, automated schema migrations, relation queries, and connection pools.",
    highlightIn: "PeopleOS Schema Pipeline",
  },

  // Cloud & DevOps
  {
    atomicNumber: 18,
    symbol: "Dk",
    name: "Docker",
    category: "Cloud & DevOps",
    level: "Advanced",
    experience: "Production",
    description: "Multi-stage production builds, container optimization, docker-compose orchestration, and isolated networks.",
    highlightIn: "Tedekstra Microservices & CI",
  },
  {
    atomicNumber: 19,
    symbol: "Ng",
    name: "Nginx",
    category: "Cloud & DevOps",
    level: "Advanced",
    experience: "Production",
    description: "Reverse proxying, SSL/TLS termination, upstream load balancing, gzip compression, and caching headers.",
    highlightIn: "Production Server Gateway",
  },
  {
    atomicNumber: 20,
    symbol: "Lx",
    name: "Linux",
    category: "Cloud & DevOps",
    level: "Advanced",
    experience: "Production",
    description: "Ubuntu/Debian server administration, systemd service units, cron automation, SSH hardening, and bash scripting.",
    highlightIn: "All Production Deployments",
  },
  {
    atomicNumber: 21,
    symbol: "Gt",
    name: "Git & GitHub",
    category: "Cloud & DevOps",
    level: "Expert",
    experience: "Production",
    description: "Git flow, semantic commits, PR reviews, merge conflict resolution, and automated GitHub Actions CI/CD.",
    highlightIn: "All Engineering Repositories",
  },

  // Security & Auth
  {
    atomicNumber: 22,
    symbol: "Rb",
    name: "RBAC Architecture",
    category: "Security & Auth",
    level: "Expert",
    experience: "Production",
    description: "Role-based access control models, hierarchical permission matrices, granular resource-level guards.",
    highlightIn: "PeopleOS & Tedekstra HRMS",
  },
  {
    atomicNumber: 23,
    symbol: "Me",
    name: "Microsoft Entra ID",
    category: "Security & Auth",
    level: "Advanced",
    experience: "Production",
    description: "Enterprise Azure AD identity federation, OAuth2 / OIDC token claims, SSO integration, and tenant isolation.",
    highlightIn: "Enterprise Corporate Security",
  },
  {
    atomicNumber: 24,
    symbol: "Jw",
    name: "JWT & Auth",
    category: "Security & Auth",
    level: "Expert",
    experience: "Production",
    description: "HMAC/RSA token signing, refresh token rotation, httpOnly cookie sessions, and CSRF mitigation.",
    highlightIn: "Tangent Tech & SyncSpace",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "syncspace",
    index: "01",
    title: "SyncSpace",
    kicker: "Real-Time Collaborative Workspace",
    category: "Full Stack & WebSockets",
    period: "2025",
    role: "Lead Full Stack Architect",
    summary: "High-performance collaborative workspace enabling real-time document editing, synchronized canvases, and presence tracking across distributed teams.",
    description: "Architected and built an end-to-end real-time collaboration ecosystem. SyncSpace pairs Next.js 15 and React with a low-latency Node.js WebSocket engine, enabling concurrent multi-user document authoring, conflict-free synchronizations, instant cursor broadcasting, and low-overhead message batching.",
    architectureHighlights: [
      "Sub-40ms WebSocket synchronization pipeline with automatic reconnection backoff.",
      "Optimistic UI updates with conflict resolution for concurrent multi-client edits.",
      "Live active presence indicator showing real-time remote user focus and cursors.",
      "Modular state machine isolating document changes from audio/message streaming channels."
    ],
    metrics: [
      { label: "Sync Latency", value: "< 40ms" },
      { label: "Concurrency", value: "Multi-user" },
      { label: "Architecture", value: "Event-Driven" }
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/San-Dip-Maity",
    liveUrl: "https://github.com/San-Dip-Maity",
    featured: true,
    type: "collaborative",
  },
  {
    id: "peopleos",
    index: "02",
    title: "PeopleOS",
    kicker: "HR & Workforce Management Platform",
    category: "Enterprise System & RBAC",
    period: "2024 – 2025",
    role: "Systems Architect & Developer",
    summary: "Enterprise workforce operations engine featuring multi-tier RBAC, automated leave/payroll analytics, and tenant-isolated data architectures.",
    description: "Engineered an end-to-end workforce management and employee operations system. Built with Next.js, Node.js, Express, MongoDB, and Prisma ORM, PeopleOS solves complex enterprise personnel scheduling, hierarchical role permissions, departmental dashboards, and automated audit trails.",
    architectureHighlights: [
      "Dynamic Role-Based Access Control (RBAC) supporting Super Admin, HR Manager, and Staff tiers.",
      "High-performance MongoDB aggregation pipelines computing real-time organizational KPIs.",
      "Type-safe data persistence layer leveraging Prisma ORM and automated schema migrations.",
      "Secure enterprise session management with token rotation and audit trail logging."
    ],
    metrics: [
      { label: "Role Tiers", value: "Granular RBAC" },
      { label: "Data Safety", value: "Tenant-Isolated" },
      { label: "Stack", value: "Prisma + Mongo" }
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Prisma"],
    githubUrl: "https://github.com/San-Dip-Maity",
    liveUrl: "https://github.com/San-Dip-Maity",
    featured: true,
    type: "enterprise-hrms",
  },
  {
    id: "tedekstra-erp",
    index: "03",
    title: "Enterprise ERP & CRM Core",
    kicker: "UK Enterprise Platform",
    category: "Distributed Architecture",
    period: "May 2025 – Present",
    role: "Software Engineer",
    summary: "Mission-critical enterprise resource planning and customer relationship management systems for Tedekstra Limited (Liverpool, UK).",
    description: "Core contributor to Tedekstra's high-scale ERP, HRMS, and CRM software infrastructure. Implemented modular NestJS backend services and Next.js frontends within Agile sprint cadences. Spearheaded automated containerized deployment pipelines, code review standards, and comprehensive integration testing.",
    architectureHighlights: [
      "Engineered microservices in NestJS and Node.js decoupling customer relationship and ERP workflows.",
      "Optimized complex database queries across MongoDB collections, reducing report generation times.",
      "Integrated CI/CD workflows and Docker/Nginx containerization for zero-downtime releases.",
      "Implemented enterprise identity policies and secure REST endpoints compliant with strict UK data standards."
    ],
    metrics: [
      { label: "Availability", value: "99.9% Uptime" },
      { label: "Deployments", value: "Automated CI/CD" },
      { label: "Scope", value: "ERP + HRMS + CRM" }
    ],
    techStack: ["Next.js", "React", "NestJS", "Node.js", "MongoDB", "Docker", "Nginx"],
    githubUrl: "https://github.com/San-Dip-Maity",
    featured: true,
    type: "erp-microservices",
  },
  {
    id: "tangent-microservices",
    index: "04",
    title: "Secure Microservices & REST Engine",
    kicker: "Cloud & LLM Integration",
    category: "Backend & Microservices",
    period: "Aug 2024 – Apr 2025",
    role: "Jr. Software Engineer",
    summary: "Full-stack application services with secure JWT authentication, LLM prompt orchestration, and microservice architectures.",
    description: "Developed and maintained full-stack production services at Tangent Tech Solutions. Designed modular RESTful microservices featuring hardened JWT authentication, stateless session validation, and intelligent LLM integration pipelines that automated customer data processing.",
    architectureHighlights: [
      "Architected RESTful microservices with strict separation between authentication and data ingestion.",
      "Integrated LLM pipelines to streamline automated document parsing and smart data classification.",
      "Configured secure JWT signing routines and rate limiters to defend against API abuse.",
      "Collaborated on agile cross-functional sprints delivering customer-facing portals on schedule."
    ],
    metrics: [
      { label: "Security", value: "JWT + Rate Limit" },
      { label: "AI Feature", value: "LLM Pipeline" },
      { label: "Latency", value: "Sub-100ms API" }
    ],
    techStack: ["Next.js", "React", "NestJS", "Node.js", "MongoDB", "REST APIs", "LLM Integration"],
    githubUrl: "https://github.com/San-Dip-Maity",
    featured: false,
    type: "api-gateway",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "tedekstra",
    index: "01",
    role: "Software Engineer (Remote)",
    company: "Tedekstra Limited",
    location: "Liverpool, United Kingdom",
    period: "May 2025 – Present",
    badge: "Current Role",
    type: "work",
    highlights: [
      "Developed and maintained complex ERP, HRMS, and CRM systems using Next.js, React, NestJS, Node.js, and MongoDB within Agile workflows.",
      "Engaged in rigorous code reviews, automated unit/integration testing, and CI/CD pipelines to guarantee high-performance, fault-tolerant deliveries.",
      "Collaborated remotely with international engineering teams across Liverpool and India, aligning architectural standards across microservices.",
      "Enhanced database query performance and multi-tenant data isolation for enterprise business clients."
    ],
    tech: ["Next.js", "React", "NestJS", "Node.js", "MongoDB", "Docker", "Nginx", "Git"],
  },
  {
    id: "tangent",
    index: "02",
    role: "Jr. Software Engineer (Remote)",
    company: "Tangent Tech Solutions",
    location: "New Town, Kolkata, India",
    period: "Aug 2024 – April 2025",
    badge: "Full-Stack Experience",
    type: "work",
    highlights: [
      "Engineered full-stack applications with Next.js, React, NestJS, Node.js, and MongoDB from design through deployment.",
      "Architected scalable microservices and RESTful APIs featuring secure JWT authentication and LLM integration.",
      "Implemented responsive, accessible frontend interfaces with Tailwind CSS and modular React state components.",
      "Participated in daily standups, sprint reviews, and technical documentation adhering to production engineering standards."
    ],
    tech: ["Next.js", "React", "NestJS", "Node.js", "MongoDB", "REST APIs", "JWT", "LLM Integration"],
  },
  {
    id: "btech-makaut",
    index: "03",
    role: "Bachelor of Technology — Computer Science & Engineering",
    company: "Gargi Memorial Institute of Technology (MAKAUT)",
    location: "Kolkata, West Bengal, India",
    period: "2021 – 2025",
    badge: "Degree",
    type: "education",
    highlights: [
      "Graduated with in-depth coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems, Distributed Computing, and Computer Networks.",
      "Built multiple real-world full-stack web applications and led engineering peer workshops on modern JavaScript and React.",
      "Applied computer science theory to production development through hands-on internships and open-source contributions."
    ],
    tech: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Networking", "Distributed Systems"],
  },
  {
    id: "school-wbchs",
    index: "04",
    role: "Senior Secondary (HS)",
    company: "Haldia Govt. Sponsored X Class Secondary School",
    location: "West Bengal, India (WBCHS)",
    period: "2019 – 2021",
    badge: "High School",
    type: "education",
    highlights: [
      "Completed Higher Secondary Education with focus on Mathematics, Physics, Chemistry, and Computer Science.",
      "Formed foundation in logical problem-solving and algorithmic thinking."
    ],
    tech: ["Mathematics", "Physics", "Computer Science"],
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: "Available commands:\n  • about       - Read engineering philosophy & bio\n  • skills      - View full technical stack breakdown\n  • projects    - View flagship enterprise & real-time projects\n  • exp         - View career timeline & companies\n  • contact     - Display direct contact channels\n  • resume      - Download official PDF resume\n  • clear       - Clear terminal output\n  • status      - Check engineer status & availability",
  about: `Sandip Maity — Full Stack Software Engineer\nLocation: West Bengal, India\nCurrent: Software Engineer (Remote) @ Tedekstra Limited (Liverpool, UK)\nFocus: High-concurrency systems, Next.js, React, NestJS, Node.js, MongoDB, WebSockets, RBAC.`,
  skills: `FRONTEND: Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, HTML5, CSS3, WebSockets.\nBACKEND:  Node.js, Express.js, NestJS, REST APIs, WebSockets, Firebase.\nDATABASE: MongoDB, MySQL, Prisma ORM.\nDEVOPS:   Docker, Nginx, Linux, Git, GitHub Actions, CI/CD.\nSECURITY: RBAC, Microsoft Entra ID (Azure AD), JWT Authentication.`,
  projects: `1. SyncSpace       - Real-time collaborative workspace with WebSockets & Next.js.\n2. PeopleOS        - HR & workforce management engine with granular RBAC & MongoDB.\n3. Tedekstra ERP   - Enterprise ERP/HRMS microservices deployed in the UK.\n4. Tangent APIs    - Secure REST microservices & LLM integration pipeline.`,
  exp: `[2025 - Present] Software Engineer @ Tedekstra Limited (Liverpool, UK - Remote)\n[2024 - 2025]    Jr. Software Engineer @ Tangent Tech Solutions (Kolkata - Remote)\n[2021 - 2025]    B.Tech in CSE @ Gargi Memorial Institute of Technology (MAKAUT)`,
  contact: `Email:    sandipmaity21052003@gmail.com\nPhone:    +91 7908729570\nGitHub:   https://github.com/San-Dip-Maity\nLinkedIn: https://linkedin.com/in/sandip-maity`,
  status: `STATUS: ONLINE & ACTIVE\nAVAILABILITY: Open for senior engineering opportunities & contract consulting.\nLOCAL TIME: IST (UTC+5:30) / Liverpool Sync (UTC+0)`,
};
