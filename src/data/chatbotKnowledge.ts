export interface KnowledgeEntry {
  category: string;
  keywords: string[];
  summary: string;
  details: string;
  recommendedSection?: string;
}

export const SWATHI_KNOWLEDGE_BASE = {
  personal: {
    name: "Swathi A N",
    titles: [
      "Software Engineer",
      "Angular Developer",
      "Frontend Engineer",
      "UI Developer"
    ],
    experienceSummary: "Frontend / Angular Developer with 3+ Years of Professional Experience building scalable and responsive web applications.",
    location: "Bengaluru, Karnataka, India",
    email: "swathian1997@gmail.com",
    linkedin: "https://www.linkedin.com/in/swathi-a-n-33875a1a6",
    summary: "Experienced Frontend Engineer specializing in Angular (2-18+), TypeScript, RxJS, REST API integration, and responsive UI design. Actively exploring Generative AI, Agentic AI, n8n workflow automations, Salesforce, and AI-assisted development."
  },
  professionalExperience: [
    {
      company: "Go Digit Insurance (Digit Insurance)",
      role: "UI Developer / Software Engineer",
      duration: "February 2022 – October 2024 (2 yrs 9 mos)",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Developed and maintained mission-critical enterprise HR and Agent Portals for group health insurance products (GMC, GPA, SME, and DCL).",
        "Built responsive, user-friendly interfaces using Angular CLI, TypeScript, RxJS, HTML5, CSS3, and Bootstrap.",
        "Transformed legacy desktop-oriented portals into fully mobile-responsive web applications.",
        "Engineered reusable Angular components following scalable architecture principles.",
        "Integrated complex frontend modules with backend RESTful APIs and performed thorough Postman testing.",
        "Collaborated closely with HR business teams, UI/UX designers, and backend engineering in Agile/Scrum sprints.",
        "Conducted bug fixes, UI performance tuning, unit testing, UAT support, and staging deployments.",
        "Utilized Git, Bitbucket, and JIRA for version control and sprint tracking."
      ]
    },
    {
      company: "Nayak Developers",
      role: "Freelance / Project-Based Developer",
      duration: "2026",
      location: "Remote / Project-Based",
      highlights: [
        "Delivered 5 practical business and digital tasks tailored to operational needs.",
        "Google Forms creation and management for investor and business intake workflows.",
        "Investor information management and structured communication tracking.",
        "Excel modification, data structuring, and cleanup for business datasets.",
        "Website layout modifications, content updates, and styling adjustments.",
        "Logo and digital brand asset creation for business identity and collateral."
      ]
    }
  ],
  technicalSkills: {
    frontend: [
      "Angular (2-18+)",
      "Angular CLI",
      "Angular Material",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "RxJS (Reactive Streams & Observables)",
      "Responsive Web Design",
      "Cross-Browser Compatibility"
    ],
    apiAndTooling: [
      "REST APIs",
      "API Integration",
      "Postman",
      "Git",
      "Bitbucket",
      "Jenkins basics",
      "VS Code",
      "JIRA"
    ],
    testingAndDelivery: [
      "Unit Testing",
      "UAT Support",
      "Staging Deployment",
      "Agile",
      "Scrum",
      "Code Reviews"
    ],
    backendAndDatabase: [
      "SQL",
      "PostgreSQL",
      "Java",
      "Node.js basics",
      "Spring Boot basics"
    ],
    aiAndAutomation: [
      "GitHub Copilot",
      "ChatGPT",
      "Gemini Models",
      "OpenAI API Integration",
      "Generative AI & Prompt Engineering",
      "Agentic AI concepts & tool usage",
      "n8n Workflow Automation",
      "Salesforce Admin & Developer",
      "AI-Assisted Development / Vibe Coding"
    ]
  },
  projects: [
    {
      title: "Insurance HR and Agent Portals",
      organization: "Go Digit Insurance",
      timeframe: "Feb 2022 – Oct 2024",
      description: "Angular-based frontend web applications supporting internal HR and agent-facing insurance workflows for group health insurance (GMC, GPA, SME, DCL).",
      technologies: ["Angular", "TypeScript", "RxJS", "HTML5", "CSS3", "Bootstrap", "REST APIs", "Postman", "Git", "JIRA"],
      keyDeliverables: [
        "Responsive UI development transforming desktop portals to mobile-ready web apps",
        "Modular, reusable Angular components",
        "REST API integration and RxJS state pipelines",
        "Testing, defect resolution, and sprint delivery"
      ]
    },
    {
      title: "Nayak Developers — Business Solutions",
      organization: "Nayak Developers",
      timeframe: "2026 (Freelance)",
      description: "Delivered 5 practical client deliverables including Google Forms automation, investor tracking, Excel data processing, website styling updates, and digital branding assets.",
      technologies: ["Google Forms", "Investor Data Workflows", "Excel Data Management", "Website Modifications", "Logo & Digital Assets"]
    },
    {
      title: "AI Website / Vibe Coding Projects",
      timeframe: "Hands-on Exploration",
      description: "Rapid web prototyping and iterative application development utilizing AI copilots (Gemini, ChatGPT, Copilot) for code generation, refactoring, and UI design.",
      technologies: ["TypeScript", "React / Angular", "Tailwind CSS", "Gemini", "OpenAI API"]
    },
    {
      title: "n8n AI Automation Workflows",
      timeframe: "Hands-on Exploration",
      description: "Visual workflow automation pipelines connecting business applications, webhooks, REST endpoints, and LLM prompt nodes for automated data routing and processing.",
      technologies: ["n8n", "Webhook Triggers", "REST APIs", "LLM Prompt Nodes", "JSON"]
    },
    {
      title: "Agentic AI Experiments",
      timeframe: "Hands-on Exploration",
      description: "Exploration of autonomous AI agents, tool-calling schemas, multi-step planning loops, and API orchestration.",
      technologies: ["Agent Architectures", "Tool Calling", "TypeScript", "Prompt Engineering"]
    }
  ],
  certifications: [
    {
      name: "Advanced Angular Certification",
      issuer: "Udemy",
      focus: "Angular architecture, RxJS reactive patterns, modular components, routing"
    },
    {
      name: "Salesforce Admin and Developer Certification Course",
      issuer: "Udemy",
      focus: "Salesforce administration, data modeling, Flows, security, and developer fundamentals"
    },
    {
      name: "Full-Stack Web Development Certification",
      issuer: "Udemy",
      focus: "Frontend & backend integration, RESTful APIs, database connectivity"
    },
    {
      name: "Java Programming Certification",
      issuer: "Professional Training",
      focus: "Object-oriented programming, data structures, core Java development"
    },
    {
      name: "Prompt Engineering Basics & Practical Workflows",
      issuer: "Specialized Training",
      focus: "System instructions, context windows, few-shot prompting, and LLM output consistency"
    }
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Electronics and Communication Engineering",
    institution: "M S Engineering College / Visvesvaraya Technological University (VTU)",
    duration: "2015 – 2020",
    location: "Bengaluru, Karnataka, India"
  }
};

export const CHATBOT_SYSTEM_INSTRUCTION = `You are the official AI Portfolio Assistant for Swathi A N (Frontend & Angular Developer with 3+ Years of Professional Experience).

Your role is to answer questions from recruiters, hiring managers, and visitors about Swathi's professional background, skills, experience, projects, certifications, education, and AI expertise.

KNOWLEDGE BASE:
- Name: Swathi A N
- Title: Software Engineer | Angular Developer | Frontend Engineer | UI Developer
- Location: Bengaluru, Karnataka, India
- Email: swathian1997@gmail.com
- LinkedIn: https://www.linkedin.com/in/swathi-a-n-33875a1a6
- Total Professional Experience: 3+ Years of Professional Experience building scalable and responsive web applications.
- Enterprise Experience: Go Digit Insurance (Digit Insurance), Bangalore (Feb 2022 – Oct 2024). Role: UI Developer / Software Engineer.
  * Built and maintained enterprise HR and Agent Portals for Group Health Insurance (GMC, GPA, SME, DCL).
  * Tech stack: Angular (2-18+), TypeScript, RxJS, HTML5, CSS3, Bootstrap, REST APIs, Postman, Git, Bitbucket, JIRA.
  * Transformed desktop portals into fully responsive mobile web applications.
  * Developed reusable component hierarchies and integrated RESTful endpoints.
- Freelance Experience: Nayak Developers (2026) - Delivered 5 practical business tasks (Google Forms, Investor data management, Excel data structuring, website modifications, logo & digital assets).
- AI & Modern Tech: Generative AI, Agentic AI architectures, n8n workflow automations, Salesforce Admin & Developer, AI-assisted development / Vibe Coding, GitHub Copilot, ChatGPT, Gemini, OpenAI API.
- Technical Skills:
  * Frontend: Angular (2-18+), Angular CLI, Angular Material, TypeScript, JavaScript (ES6+), HTML5, CSS3, Bootstrap, RxJS, Responsive Design.
  * APIs & Tools: REST APIs, API Integration, Postman, Git, Bitbucket, Jenkins basics, VS Code, JIRA.
  * Testing & Agile: Unit Testing, UAT Support, Staging Deployment, Agile/Scrum.
  * Backend & DB: SQL, PostgreSQL, Java, Node.js basics, Spring Boot basics.
  * AI & CRM: GitHub Copilot, ChatGPT, Gemini, OpenAI API, n8n, Salesforce.
- Main Projects:
  1. Insurance HR and Agent Portals (Digit Insurance - Angular, RxJS, Bootstrap, REST APIs)
  2. Nayak Developers Business Solutions (Freelance - 5 business deliverables)
  3. AI Website / Vibe Coding Projects (AI-assisted web prototyping)
  4. n8n AI Automation Workflows (Workflow graphs connecting webhooks, APIs & LLMs)
  5. Agentic AI Projects (Autonomous loops, tool calling)
- Certifications:
  * Full-Stack Certification – Udemy
  * Advanced Angular Certification – Udemy
  * Java Certification
  * Salesforce Admin and Developer Certification – Udemy
  * Prompt Engineering Basics
- Education:
  * Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (2015 – 2020), VTU / M S Engineering College, Bengaluru.

STRICT BEHAVIOR RULES:
1. Answer questions specifically about Swathi's professional profile using ONLY the knowledge base above.
2. NEVER invent companies, job titles, projects, technologies, certifications, or achievements.
3. If information is unavailable or outside Swathi's portfolio, clearly and politely respond:
   "I don't have that information in Swathi's portfolio yet."
4. Keep answers concise, highly readable, and structured. Begin answering immediately with direct answers and clear bullet points.
5. Use bold formatting (e.g. **Angular (2-18+)**, **RxJS**, **Go Digit Insurance**) for key technologies, companies, and roles.
6. Tone: Helpful, polished, engineering-focused, and direct.
7. When relevant, suggest checking out the corresponding section on the page (e.g., #experience, #skills, #projects, #contact, #certifications).
`;
