import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  Copy,
  CheckCircle2,
  Mail,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  FileText
} from 'lucide-react';
import { personalInfo, experiences, certifications, education, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-2xl text-slate-900 dark:text-slate-100 my-8 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              Resume Preview — {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans text-sm print:p-0 print:text-black">
          {/* Header Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                {personalInfo.name}
              </h1>
              <p className="text-base font-bold text-sky-600 dark:text-sky-400 print:text-gray-800 mt-0.5">
                {personalInfo.primaryTitle}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" /> {personalInfo.location}
                </span>
              </p>
            </div>

            <div className="text-xs font-mono space-y-1.5 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sky-600 dark:text-sky-400 hover:underline"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 no-print"
                  title="Copy email"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline"
                >
                  linkedin.com/in/swathi-a-n-33875a1a6
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Frontend / Angular Developer with 3+ Years Professional Experience designing and building scalable, responsive web applications using Angular (CLI, Material), TypeScript, RxJS, HTML5, CSS3, and Bootstrap. Strong background in enterprise REST API consumption, reusable component hierarchies, performance tuning, and cross-functional Agile/Scrum delivery. Continuously expanding technical expertise into Salesforce development, Generative AI, Agentic AI, n8n workflow automations, and AI-assisted engineering.
            </p>
          </div>

          {/* Core Technical Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Frontend: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Angular (2-18+), Angular CLI, TypeScript, JavaScript (ES6+), RxJS, HTML5, CSS3, Bootstrap, Angular Material, Responsive Design.
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">API & Tooling: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  RESTful APIs, Postman, Git, Bitbucket, Jenkins (Basics), VS Code, JIRA.
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">AI & Automation: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Generative AI, Prompt Engineering, ChatGPT, Gemini, GitHub Copilot, OpenAI API, Agentic AI concepts, n8n Automations, Vibe Coding workflows.
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Salesforce & Backend: </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Salesforce Admin & Developer (Certified), Salesforce Flows, Java, Node.js Basics, SQL, PostgreSQL Basics.
                </span>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Work Experience
            </h2>

            {/* Digit Insurance */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Software Engineer / UI Developer / Frontend Developer
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Digit Insurance • Bengaluru, Karnataka, India
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  February 2022 – October 2024
                </div>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-outside ml-4 leading-relaxed">
                <li>Developed and maintained enterprise HR and Agent Portals for group health insurance products including GMC, GPA, SME, and DCL.</li>
                <li>Engineered responsive user interfaces using Angular CLI, TypeScript, RxJS, HTML, CSS, and Bootstrap.</li>
                <li>Transformed legacy desktop-oriented insurance portals into fully mobile-responsive web applications.</li>
                <li>Integrated complex frontend modules with backend REST APIs; conducted comprehensive API testing via Postman.</li>
                <li>Engineered reusable, modular Angular components adhering to scalable, maintainable coding standards.</li>
                <li>Participated in sprint planning, UAT, unit testing, staging deployments, and Agile/Scrum delivery using JIRA, Git, and Bitbucket.</li>
              </ul>
            </div>

            {/* Nayak Developers */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Freelance / Project-Based Developer
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Nayak Developers • Remote / Client Work
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  2026
                </div>
              </div>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 list-disc list-outside ml-4 leading-relaxed">
                <li>Delivered approximately five practical business and digital tasks for investor information workflows and data operations.</li>
                <li>Configured Google Forms for investor intake and structured incoming data collections.</li>
                <li>Organized, cleaned, and maintained business Excel datasets based on operational requirements.</li>
                <li>Performed required website modifications, layout updates, and digital brand asset enhancements.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-1.5">
                  <span className="text-sky-600 dark:text-sky-400">•</span>
                  <span>
                    <strong>{cert.title}</strong> — {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">
                  {education.degree} — {education.major}
                </span>
                <div className="text-slate-500 dark:text-slate-400">
                  {education.institution}
                </div>
              </div>
              <div className="font-mono text-slate-500 dark:text-slate-400">
                {education.duration} • {education.location}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Candidate ID: Swathi AN • Bengaluru
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
