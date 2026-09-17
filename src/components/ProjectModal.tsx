import React from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Briefcase,
  AlertCircle,
  Building2,
  Image as ImageIcon
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl text-slate-800 dark:text-slate-200 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-slate-200 dark:border-slate-800 pb-4 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
              {project.categoryLabel}
            </span>
            {project.statusBadge && (
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {project.statusBadge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{project.title}</h2>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
            {project.organization && (
              <span className="text-slate-700 dark:text-slate-300 font-bold">{project.organization}</span>
            )}
            {project.role && (
              <>
                <span>•</span>
                <span>{project.role}</span>
              </>
            )}
            {project.timeframe && (
              <>
                <span>•</span>
                <span className="text-sky-600 dark:text-sky-400">{project.timeframe}</span>
              </>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 font-mono mb-2">
              Project Overview & Architecture Context
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Special Placeholder Banner for AI / Prototyping Projects */}
          {project.isPlaceholder && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Demo & Integration Placeholders</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                This project card represents an active development exploration. Structured slots are provisioned below for live demo deployment URLs, GitHub repository links, and workflow architecture diagrams / screenshots.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Live Demo Ready</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>GitHub Repo Ready</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Screenshot Gallery</span>
                </div>
              </div>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 font-mono mb-3">
              Key Contributions & Solution Deliverables
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Used (if applicable) */}
          {project.aiToolsUsed && project.aiToolsUsed.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 font-mono mb-2">
                AI Models & Tooling Integrated:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.aiToolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30 flex items-center gap-1.5 font-bold"
                  >
                    <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
              Technologies & Frameworks Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Portfolio Item ID: {project.id}
          </span>
        </div>
      </div>
    </div>
  );
};
