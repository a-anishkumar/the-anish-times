export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: string;
  date: string;
  byline: string;
  excerpt: string;
  fullStory: string[];
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  imageAlt: string;
  imageCaption: string;
  columnSpan: 'full' | 'half' | 'third';
  stampText?: string;
}

export interface SkillItem {
  name: string;
  symbol: string;
  category: 'Frontend' | 'Backend' | 'Database & Tools' | 'Core & Security';
  level: number; // 0 - 100
  trend: 'UP' | 'STEADY';
  delta: string;
  price: string;
  status: 'BULLISH' | 'BLUE-CHIP' | 'HIGH YIELD';
  details: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  badgeCode: string;
  description: string;
  skillsVerified: string[];
  status: 'VERIFIED CREDENTIAL' | 'UPCOMING / IN-PROGRESS';
}

export interface EducationMilestone {
  year: string;
  institution: string;
  degree: string;
  scoreOrGrade: string;
  location: string;
  summary: string;
  achievements: string[];
}

export const PORTFOLIO_DATA = {
  meta: {
    paperName: 'The Anish Times',
    tagline: '“All the Code That’s Fit to Deploy”',
    established: 'Est. 2006 • Tamil Nadu Edition',
    volume: 'Vol. 2027',
    issueNo: 'Issue No. 1',
    edition: 'Morning Broadsheet',
    forecast: "Today's Forecast: Open to Work (High: Passion, Low: Latency)",
    price: 'FREE',
    todayDate: 'Sunday, November 23, 2026',
    circulation: 'Global Circulation: Unlimited Readers',
  },

  personal: {
    name: 'Anish Kumar A',
    role: 'Full-Stack Developer & Cybersecurity Enthusiast',
    headline: 'FULL-STACK DEVELOPER & CYBERSECURITY ENTHUSIAST BUILDS THE FUTURE',
    subhead:
      'Kongu Engineering College B.E. Computer Science & Design scholar (Class of 2027, CGPA 7.79) crafts resilient offline AI, high-availability web architectures, and knowledge intelligence systems.',
    college: 'Kongu Engineering College, Perundurai, Tamil Nadu',
    degree: 'B.E. Computer Science and Design (CSD)',
    gradYear: 'Class of 2027',
    cgpa: '7.79 CGPA',
    location: 'Tamil Nadu, India',
    email: 'anishkumar.a2006@gmail.com',
    linkedin: 'https://linkedin.com/in/anishkumar-a-b751b5337',
    github: 'https://github.com/a-anishkumar',
    editorBio: [
      'From the quiet coding sanctum of Tamil Nadu emerges a dedicated engineer with a dual passion: engineering seamless full-stack digital architectures while rigorously fortifying systems against modern threat vectors.',
      'Currently pursuing a Bachelor of Engineering in Computer Science and Design at Kongu Engineering College (CGPA 7.79), Anish combines deep algorithmic thinking with modern software craftsmanship. Whether building offline-first autonomous AI assistants or developing graph-powered research tools, every system is constructed with speed, privacy, and architectural elegance.',
      'Driven by curiosity, Anish treats code like a daily printing press: ink never dries on progress, and every commit is an editorial statement of reliability and quality.'
    ],
    pullQuote:
      '“A line of code is not just an instruction for silicon; it is a contract of trust between the creator, the machine, and the user.”',
    editorialSignature: '— Anish Kumar A, Editor-in-Chief & Lead Architect',
  },

  breakingTicker: [
    'BREAKING: Anish Kumar A currently seeking Summer 2025/2026 Internships and Full-Time Engineering roles!',
    'TECH DISPATCH: ResearchGap AI deploys hybrid RAG & Knowledge Graphs for instant scientific discovery',
    'SECURITY ALERT: Zero-compromise offline AI "Aura" proves privacy and speed can coexist locally',
    'CAMPUS BULLETIN: Hostel Room Allocation System eliminates campus queuing through automated algorithmic distribution',
    'INNOVATION WIRE: Snap2Code transforms hand-drawn whiteboard wireframes directly into functional React code',
    'HONOURS DESK: Oracle APEX (May 2025) & Java SE 17 (May 2026) verified on national registry',
  ],

  projects: [
    {
      id: 'proj-aura',
      title: 'Aura: The Autonomous Offline AI Companion',
      slug: 'aura-offline-ai-assistant',
      tagline: 'Private, Zero-Cloud Edge Assistant with Voice & Local LLM Execution',
      category: 'ARTIFICIAL INTELLIGENCE & PRIVACY',
      date: 'Special Report • 2024',
      byline: 'By A. Kumar, Chief Systems Correspondent',
      excerpt:
        'In an era where personal data is constantly routed through remote datacenters, Aura marks a milestone in edge computing: an entirely offline AI assistant delivering immediate natural voice interaction and task execution without sending a single byte over the public internet.',
      fullStory: [
        'Aura was born from a simple yet non-negotiable premise: true digital privacy requires zero internet dependencies. Operating entirely on consumer-grade hardware, Aura orchestrates local quantized large language models, fast offline speech-to-text engines, and low-latency text-to-speech synthesis.',
        'The architecture incorporates intelligent local system controls, context-aware memory caching, and modular tool-calling pipelines that can launch applications, organize files, and answer complex technical queries.',
        'Benchmark analysis revealed near-zero latency overhead compared to cloud equivalents, making Aura an indispensable companion for confidential research, air-gapped security operations, and developer workflows.'
      ],
      techStack: ['Python', 'Local LLM / Ollama', 'PyAudio', 'Whisper.cpp', 'TTS Engine', 'OS Automation'],
      highlights: [
        '100% offline edge processing with complete data sovereignty',
        'Sub-second speech recognition and conversational audio response',
        'Custom modular plugin system for OS management and dev utilities',
        'Air-gapped security model resilient against network sniffers'
      ],
      githubUrl: 'https://github.com/a-anishkumar',
      demoUrl: 'https://github.com/a-anishkumar',
      imageAlt: 'Aura Offline AI Architecture Diagram in Halftone Press Style',
      imageCaption: 'Fig 1.1 — The local neural audio pipeline operating strictly on edge RAM.',
      columnSpan: 'half',
      stampText: 'AIR-GAPPED',
    },
    {
      id: 'proj-researchgap',
      title: 'ResearchGap AI: Mapping Uncharted Scientific Frontiers',
      slug: 'researchgap-ai-knowledge-graph-rag',
      tagline: 'Autonomous Research Gap Discovery via Knowledge Graphs and RAG',
      category: 'DATA SCIENCE & KNOWLEDGE GRAPHS',
      date: 'Science & Discovery • 2024',
      byline: 'By The Anish Times Academic Bureau',
      excerpt:
        'Navigating thousands of academic preprints to locate true unexplored research territory is notoriously difficult. ResearchGap AI connects disparate literature through knowledge graphs and contextual retrieval-augmented generation to reveal what has not yet been answered.',
      fullStory: [
        'Academic investigators frequently spend months surveying related work only to discover their thesis overlaps with prior publications. ResearchGap AI addresses this bottleneck by ingesting research corpora, parsing semantic entities, and constructing dynamic multi-dimensional knowledge graphs.',
        'By performing graph-traversal clustering alongside dense vector embeddings, the system identifies missing topological edges—the very "gaps" representing promising doctoral hypotheses and patent opportunities.',
        'Users can query specific subfields to receive synthesized literature overviews paired with citation-backed justifications for novel inquiry.'
      ],
      techStack: ['Python', 'RAG Pipeline', 'Neo4j / NetworkX', 'LangChain', 'FastAPI', 'Vector Embeddings'],
      highlights: [
        'Automated semantic entity extraction from ArXiv and PubMed papers',
        'Graph-topological gap discovery pinpointing under-researched intersections',
        'Faithful citation-grounded RAG answering with zero hallucinated sources',
        'Exportable research roadmaps and visual graph exploratory maps'
      ],
      githubUrl: 'https://github.com/a-anishkumar',
      demoUrl: 'https://github.com/a-anishkumar',
      imageAlt: 'Knowledge graph entity relationships rendered in vintage stipple',
      imageCaption: 'Fig 1.2 — Multi-cluster graph nodes highlighting structural voids in biomedical literature.',
      columnSpan: 'half',
      stampText: 'PATENT-GRADE',
    },
    {
      id: 'proj-hostel',
      title: 'Automated Hostel Room Allocation System',
      slug: 'hostel-room-allocation-system',
      tagline: 'High-Availability Campus Housing Portal with Real-Time Fair Allocation',
      category: 'ENTERPRISE WEB SYSTEMS',
      date: 'Campus Gazette • 2024',
      byline: 'Staff Tech Reporter',
      excerpt:
        'A comprehensive full-stack platform built to dismantle collegiate administrative logjams. Engineered to replace manual paper ledgers with automated, merit-and-preference-based room assignment for thousands of student residents.',
      fullStory: [
        'Collegiate accommodation management historically suffered from server crashes, unfair queuing, and tedious manual paperwork. Anish engineered an end-to-end full-stack room allocation system designed to withstand heavy concurrent traffic during university enrollment rushes.',
        'Featuring role-based access control (students, wardens, accounts, and chief administration), the portal provides real-time room occupancy heatmaps, secure fee clearance validation, and instant automated assignment based on criteria weighting.',
        'The backend implements strict transaction locks to guarantee zero double-booking conditions even during millisecond race conditions.'
      ],
      techStack: ['React', 'Node.js', 'Express', 'MySQL / PostgreSQL', 'Tailwind CSS', 'JWT Auth'],
      highlights: [
        'ACID-compliant atomic room booking preventing concurrent over-allocation',
        'Multi-tiered role-based security: Student, Warden, and SuperAdmin dashboards',
        'Automated room occupancy visualization and automated allotment algorithm',
        'Over 90% reduction in administrative processing time recorded'
      ],
      githubUrl: 'https://github.com/a-anishkumar',
      demoUrl: 'https://github.com/a-anishkumar',
      imageAlt: 'Hostel architectural blueprint and room schema in newspaper halftone',
      imageCaption: 'Fig 1.3 — Real-time ledger records and concurrency-proof seat reservation.',
      columnSpan: 'half',
      stampText: 'FULL-STACK',
    },
    {
      id: 'proj-snap2code',
      title: 'Snap2Code: From Napkin Sketches to Production JSX',
      slug: 'snap2code-ocr-llm-pipeline',
      tagline: 'Computer Vision & Multimodal LLM Pipeline Converting UI Mockups to React',
      category: 'DEV TOOLS & MULTIMODAL AI',
      date: 'Engineering Dispatch • 2024',
      byline: 'By A. Kumar, Chief Innovator',
      excerpt:
        'Transforming hand-drawn paper wireframes into clean, responsive Tailwind CSS and React code in seconds. Snap2Code bridges the chasm between paper brainstorming and clean frontend scaffolding.',
      fullStory: [
        'Every great UI begins on a whiteboard or a paper napkin. Snap2Code harnesses advanced computer vision for layout boundary detection, optical character recognition for handwritten text labels, and fine-tuned multimodal LLM reasoning to synthesize production-ready JSX.',
        'Unlike basic layout generators that produce brittle absolute positioning, Snap2Code interprets structural hierarchy, auto-generates responsive flexboxes and grids, and suggests clean semantic variable names.',
        'Developers can preview live rendered HTML components side-by-side with their original ink drawings and copy clean modular code with one click.'
      ],
      techStack: ['React', 'TypeScript', 'Vision LLM API', 'Tesseract OCR', 'Tailwind CSS', 'Vite'],
      highlights: [
        'Instant translation from pen-and-paper drawings to responsive React components',
        'Semantic DOM hierarchy inference instead of brittle absolute coordinates',
        'Live interactive split-screen editor with real-time hot-reloading preview',
        'Export options for Tailwind, clean CSS, and modular React JSX files'
      ],
      githubUrl: 'https://github.com/a-anishkumar',
      demoUrl: 'https://github.com/a-anishkumar',
      imageAlt: 'Hand-drawn paper mockup transformed into sleek code editor preview',
      imageCaption: 'Fig 1.4 — Optical scan to JSX compilation pipeline.',
      columnSpan: 'half',
      stampText: 'INNOVATION',
    },
  ] as Project[],

  skillsMarket: [
    {
      name: 'Java',
      symbol: 'JAVA',
      category: 'Backend',
      level: 94,
      trend: 'UP',
      delta: '+6.8%',
      price: '94.20',
      status: 'BLUE-CHIP',
      details: 'Object-Oriented Architecture, Multi-threading, JVM internals, Collections Framework, Spring Boot foundation.',
    },
    {
      name: 'React.js',
      symbol: 'REACT',
      category: 'Frontend',
      level: 92,
      trend: 'UP',
      delta: '+8.4%',
      price: '92.50',
      status: 'BULLISH',
      details: 'Component Lifecycle, Hooks, State Management, Framer Motion, Tailwind Integration, Virtual DOM optimization.',
    },
    {
      name: 'Node.js & Express',
      symbol: 'NODE',
      category: 'Backend',
      level: 88,
      trend: 'UP',
      delta: '+5.1%',
      price: '88.00',
      status: 'HIGH YIELD',
      details: 'Event loop architecture, RESTful API development, JWT Authentication, Middleware pipelining, Microservices.',
    },
    {
      name: 'SQL & Relational DBs',
      symbol: 'SQL',
      category: 'Database & Tools',
      level: 90,
      trend: 'UP',
      delta: '+4.2%',
      price: '90.15',
      status: 'BLUE-CHIP',
      details: 'Complex Joins, Indexing, ACID compliance, PostgreSQL, MySQL schema normalization, Query Optimization.',
    },
    {
      name: 'Python',
      symbol: 'PYTN',
      category: 'Backend',
      level: 86,
      trend: 'UP',
      delta: '+9.3%',
      price: '86.40',
      status: 'BULLISH',
      details: 'AI/LLM pipelines, FastAPI, Scripting, Automation, RAG implementations, Data structures.',
    },
    {
      name: 'Tailwind CSS',
      symbol: 'TWND',
      category: 'Frontend',
      level: 95,
      trend: 'UP',
      delta: '+7.6%',
      price: '95.00',
      status: 'BLUE-CHIP',
      details: 'Custom design systems, responsive broadsheet typography, dark-mode tokenization, zero-runtime bloat.',
    },
    {
      name: 'Cybersecurity Fundamentals',
      symbol: 'SECX',
      category: 'Core & Security',
      level: 85,
      trend: 'UP',
      delta: '+11.2%',
      price: '85.75',
      status: 'HIGH YIELD',
      details: 'OWASP Top 10 mitigation, Network packet inspection, Cryptography, Defensive coding, Secure auth flows.',
    },
    {
      name: 'Git & Version Control',
      symbol: 'GITV',
      category: 'Database & Tools',
      level: 91,
      trend: 'UP',
      delta: '+3.5%',
      price: '91.30',
      status: 'BLUE-CHIP',
      details: 'Trunk-based workflows, rebasing, multi-repo CI/CD hooks, conflict resolution, open source collaboration.',
    },
    {
      name: 'C Programming',
      symbol: 'CPRG',
      category: 'Core & Security',
      level: 84,
      trend: 'STEADY',
      delta: '+1.9%',
      price: '84.00',
      status: 'BLUE-CHIP',
      details: 'Memory pointers, low-level OS interfaces, algorithmic complexity, hardware-close execution.',
    },
  ] as SkillItem[],

  certifications: [
    {
      id: 'cert-apex',
      title: 'Oracle APEX Cloud Developer Certified Associate',
      issuer: 'Oracle University',
      issueDate: 'May 2025',
      badgeCode: 'ORA-APX-2025-V7',
      description:
        'Certified expertise in rapid enterprise low-code development, relational database integration, custom PL/SQL business logic, and security-hardened enterprise application deployment.',
      skillsVerified: ['Oracle APEX', 'PL/SQL', 'Database Modeling', 'Enterprise Security', 'REST Services'],
      status: 'VERIFIED CREDENTIAL',
    },
    {
      id: 'cert-java',
      title: 'Java SE 17 Developer Certified Professional',
      issuer: 'Oracle / Java Certification Authority',
      issueDate: 'May 2026',
      badgeCode: 'JAV-SE17-2026-X1',
      description:
        'Recognized mastery of modern Java 17 LTS features, functional programming streams, sealed classes, pattern matching, concurrency utilities, and JVM memory performance tuning.',
      skillsVerified: ['Java SE 17', 'OOP & Concurrency', 'Streams & Lambdas', 'Modular Architecture', 'Garbage Collection'],
      status: 'VERIFIED CREDENTIAL',
    },
  ] as Certification[],

  education: [
    {
      year: '2023 — 2027 (Expected)',
      institution: 'Kongu Engineering College (Autonomous)',
      degree: 'Bachelor of Engineering in Computer Science & Design (CSD)',
      scoreOrGrade: 'Current CGPA: 7.79 / 10.0',
      location: 'Perundurai, Erode, Tamil Nadu',
      summary:
        'Specialized undergraduate curriculum blending rigorous core computer science fundamentals—algorithms, data structures, operating systems, and network security—with user-centric digital experience design and human-computer interaction.',
      achievements: [
        'Consistent academic performance maintaining 7.79 CGPA across technical coursework',
        'Active participant in collegiate coding hackathons, technical symposiums, and project expos',
        'Conducted research initiatives bridging RAG knowledge graphs and autonomous offline agent systems'
      ],
    },
    {
      year: '2021 — 2023',
      institution: 'Higher Secondary Certificate (HSC)',
      degree: 'State Board Higher Secondary Examination — Mathematics, Physics, Chemistry, Computer Science',
      scoreOrGrade: 'First Class with Distinction',
      location: 'Tamil Nadu, India',
      summary:
        'Intensive foundation in higher mathematics, analytical physics, and computer fundamentals that catalyzed an early transition into algorithmic programming and software engineering.',
      achievements: [
        'Excellence in mathematics and computational logic',
        'Built foundational programming scripts in C and Python during school lab projects'
      ],
    },
  ] as EducationMilestone[],

  classifieds: {
    wantedHeading: 'WANTED: INSPIRING CHALLENGES & HIGH-IMPACT ROLES',
    wantedNotice:
      'Immediate vacancy sought by proactive Full-Stack Engineer and Security Craftsman. Prepared to report for duty on frontend marvels, robust API backends, or local AI architectures. Full-time, summer internships, and high-velocity engineering contracts welcomed.',
    contacts: [
      {
        type: 'TELEGRAPH & ELECTRONIC DISPATCH (EMAIL)',
        value: 'anishkumar.a2006@gmail.com',
        href: 'mailto:anishkumar.a2006@gmail.com',
        label: 'Direct Line to Editor',
        copyable: true,
      },
      {
        type: 'BUSINESS & PROFESSIONAL GAZETTE (LINKEDIN)',
        value: 'linkedin.com/in/anishkumar-a-b751b5337',
        href: 'https://linkedin.com/in/anishkumar-a-b751b5337',
        label: 'Connect Professionally',
        copyable: false,
      },
      {
        type: 'PUBLIC CODE REPOSITORY & ARCHIVES (GITHUB)',
        value: 'github.com/a-anishkumar',
        href: 'https://github.com/a-anishkumar',
        label: 'Inspect Repositories',
        copyable: false,
      },
    ],
  },
};
