import React from 'react';
import {
  CheckCircle2,
  Briefcase,
  Zap,
  Bot,
  Workflow,
  ShieldCheck,
  Award,
  GraduationCap,
  ExternalLink,
  X,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo, recruiterHighlights, education } from '../data/portfolioData';

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenChat?: () => void;
}

export const RecruiterQuickBar: React.FC<{ onOpenModal: () => void; onOpenChat?: () => void }> = ({ onOpenModal, onOpenChat }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16">
      <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md dark:shadow-xl relative overflow-hidden transition-colors duration-300">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-sky-500/5 to-transparent pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span className="w-1 h-4 bg-sky-500 rounded-full inline-block" />
                Recruiter 30-Second Summary & Core Expertise
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified background snapshot for hiring managers and technical recruiters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {onOpenChat && (
              <button
                id="recruiter-bar-ai-chat-btn"
                onClick={onOpenChat}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-gradient-to-r dark:from-sky-500/20 dark:via-indigo-500/20 dark:to-purple-500/20 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-500/40 hover:bg-sky-100 dark:hover:bg-sky-500/30 transition-all shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>Ask AI</span>
              </button>
            )}

            <button
              id="open-full-recruiter-modal-btn"
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-xs"
            >
              <span>Full 30s Briefing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4-Box Grid for Quick Scan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recruiterHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-colors"
            >
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 font-mono">
                {item.label}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                {item.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RecruiterSnapshotModal: React.FC<RecruiterSnapshotModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenChat,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="recruiter-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="recruiter-modal-content"
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-slate-800 dark:text-slate-200 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-recruiter-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Recruiter 30-Second Snapshot</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Candidate: {personalInfo.name} • Location: {personalInfo.location}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm">
          {/* Executive Pitch */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-sky-600 dark:text-sky-400 text-xs uppercase tracking-wider font-mono mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
              Candidate Profile at a Glance
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Swathi is a frontend/Angular specialist with <strong>3+ years of professional enterprise experience</strong> (Digit Insurance, ended Oct 2024), experienced in reactive RxJS architecture, responsive UI, and REST API integration. Post-2024, she has actively expanded into <strong>Salesforce, Generative AI, Agentic AI, n8n workflow automations, and AI-assisted "vibe coding"</strong>, delivering practical client solutions for Nayak Developers.
            </p>
          </div>

          {/* Key Recruiter Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1: Core Angular & Frontend */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>1. Angular & Frontend Stack</span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li>3+ Years Professional Experience building scalable SPAs with Angular 2-18+</li>
                <li>TypeScript, RxJS Observables, Reactive Forms, State flows</li>
                <li>Bootstrap, HTML5, CSS3, Responsive Desktop-to-Mobile UI</li>
                <li>REST API integration & rigorous Postman validation</li>
              </ul>
            </div>

            {/* Box 2: Enterprise Employment */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                <Briefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>2. Enterprise Background (Digit Insurance)</span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Role:</strong> Software Engineer / UI Developer (Feb 2022 – Oct 2024)</li>
                <li><strong>Scope:</strong> HR & Agent Portals for GMC, GPA, SME & DCL</li>
                <li><strong>Deliverables:</strong> Mobile transformation, reusable UI modules, UAT, Agile/Scrum</li>
                <li><strong>Tools:</strong> Git, Bitbucket, JIRA, Postman</li>
              </ul>
            </div>

            {/* Box 3: Client / Freelance Work */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                <Workflow className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>3. Client Work (Nayak Developers)</span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Role:</strong> Freelance / Project Developer (2026)</li>
                <li>~5 Practical business tasks: Investor information workflows</li>
                <li>Google Forms data collection, Excel operations, site styling</li>
                <li>Digital brand assets & logos</li>
              </ul>
            </div>

            {/* Box 4: AI & Modern Capabilities */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>4. AI, Automation & Salesforce Learning</span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Salesforce:</strong> Admin & Dev certified (Udemy)</li>
                <li><strong>GenAI:</strong> Prompt engineering, Copilot, ChatGPT, Gemini API</li>
                <li><strong>Agentic AI:</strong> Multi-step autonomous concepts & tool use</li>
                <li><strong>Automation:</strong> n8n workflows linking APIs and LLM nodes</li>
                <li><strong>Vibe Coding:</strong> Fast prototyping via AI-assisted flows</li>
              </ul>
            </div>
          </div>

          {/* Education & Verified Certifications */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider font-mono text-sky-600 dark:text-sky-400">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Verification</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                B.E. in Electronics & Communication Engineering • M S Engineering College / VTU (2015 – 2020)
              </p>
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full Certifications Verified</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-mono transition-colors"
          >
            Direct: {personalInfo.email}
          </a>

          <div className="flex items-center gap-3">
            {onOpenChat && (
              <button
                id="recruiter-modal-ai-chat-btn"
                onClick={() => {
                  onClose();
                  onOpenChat();
                }}
                className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-500/30 transition-colors shadow-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>Ask AI Assistant</span>
              </button>
            )}

            <button
              id="recruiter-modal-resume-btn"
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-xs"
            >
              Open Full ATS Resume
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
