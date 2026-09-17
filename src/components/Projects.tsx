import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Layers,
  Sparkles,
  Workflow,
  Zap,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Eye,
  Building2,
  Code2,
  Bot,
  Image as ImageIcon
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'enterprise' | 'freelance' | 'ai' | 'automation'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All 5 Featured Projects' },
    { id: 'enterprise', label: 'Enterprise (Digit Insurance)' },
    { id: 'freelance', label: 'Freelance (Nayak Developers)' },
    { id: 'ai', label: 'AI & Agentic Experiments' },
    { id: 'automation', label: 'n8n Automations' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'enterprise':
        return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'freelance':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'automation':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2.5 text-slate-900 dark:text-white">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            Featured Projects & Engineering Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive showcase spanning enterprise insurance platforms, practical client business solutions, AI-assisted development, and intelligent workflow automation experiments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                id={`project-filter-${filter.id}`}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Major Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 shadow-sm dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Category & Status Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 truncate max-w-[170px]">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {project.statusBadge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                {/* Title & Metadata */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.organization && (
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{project.organization}</span>
                    )}
                    {project.timeframe && (
                      <>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <span>{project.timeframe}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    Key Features & Deliverables:
                  </div>
                  <div className="space-y-1.5">
                    {project.keyHighlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    Core Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Placeholder / Links notification if applicable */}
                {project.isPlaceholder && (
                  <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-300 text-[11px] flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Includes placeholders for Live Demo, GitHub & Screenshots</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  id={`view-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Details</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.category === 'enterprise' ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
                      Production Portals
                    </span>
                  ) : project.category === 'freelance' ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-1 rounded border border-indigo-200 dark:border-indigo-800/40">
                      5 Business Tasks
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-1 rounded border border-amber-200 dark:border-amber-800/40">
                      AI Workflow
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
