import React from 'react';
import {
  Code2,
  Mail,
  Linkedin,
  Github,
  ArrowUp,
  Heart,
  FileText,
  UserCheck,
  Zap,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenRecruiterSnapshot: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onOpenRecruiterSnapshot,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-900">
          {/* Column 1: Brand & Profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-mono font-extrabold text-xs text-slate-950 shadow-md shadow-sky-500/20">
                SA
              </div>
              <div>
                <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-mono">
                  Angular Developer | Frontend Engineer
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {personalInfo.supportingLine}
            </p>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  About Me & Pillars
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Experience (Digit Insurance & Freelance)
                </a>
              </li>
              <li>
                <a href="#ai-tech" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  AI & Tech Exploration (Vibe Coding)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Featured Projects & Solutions
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Technical Stack & Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  Certifications & Education
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect & Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider text-xs">
              Recruiter & Contact
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenRecruiterSnapshot}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all text-left shadow-sm dark:shadow-none"
              >
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>30-Second Recruiter Brief</span>
                </span>
                <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400">View →</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all text-left shadow-sm dark:shadow-none"
              >
                <span className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Printable ATS Resume</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">PDF →</span>
              </button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-sky-500/40 transition-colors"
                  title="Email Swathi"
                >
                  <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-sky-500/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Swathi AN. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
