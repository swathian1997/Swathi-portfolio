import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Zap,
  Bot,
  Workflow,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Code2,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';
import { aiExplorationTopics } from '../data/portfolioData';

export const AiExploration: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-300" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  const getBadgeColor = (id: string) => {
    switch (id) {
      case 'vibe-coding':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'generative-ai':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'agentic-ai':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'n8n-automation':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'salesforce':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'ai-assisted-dev':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      default:
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    }
  };

  const filteredTopics = selectedTech === 'all' 
    ? aiExplorationTopics 
    : aiExplorationTopics.filter(t => t.id === selectedTech);

  return (
    <section id="ai-tech" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-35">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Technology & AI Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            AI & Modern Technology Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Following enterprise software engineering at Digit Insurance (ended Oct 2024), actively exploring Generative AI, Agentic workflows, n8n automations, Salesforce, and AI-assisted software development.
          </p>
        </div>

        {/* Quick Tech Badge Filter / Navigator */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedTech('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              selectedTech === 'all'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-extrabold'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
            }`}
          >
            All 6 AI & Tech Pillars
          </button>
          {aiExplorationTopics.map((topic) => {
            const isSelected = selectedTech === topic.id;
            return (
              <button
                key={topic.id}
                id={`tech-filter-${topic.id}`}
                onClick={() => setSelectedTech(topic.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-extrabold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 flex flex-col justify-between p-6 shadow-md dark:shadow-xl relative overflow-hidden group ${
                topic.id === 'vibe-coding'
                  ? 'border-amber-400/60 dark:border-amber-500/40 hover:border-amber-500 bg-gradient-to-b from-amber-50/30 dark:from-slate-900 via-white dark:via-slate-900 to-amber-100/30 dark:to-amber-950/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-sky-500/50'
              }`}
            >
              {/* Subtle Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:bg-sky-500/10 transition-colors" />

              <div className="space-y-4">
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getIcon(topic.iconName)}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getBadgeColor(
                      topic.id
                    )}`}
                  >
                    {topic.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors flex items-center gap-2">
                    <span>{topic.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                    {topic.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    Practical Focus & Key Concepts:
                  </div>
                  <div className="space-y-1.5">
                    {topic.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Badges / Tools */}
              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Tools & Capabilities:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {topic.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Interactive Workflow Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-100 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
              <Terminal className="w-3 h-3" />
              <span>Continuous Builder Methodology</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Bridging Enterprise Frontend Rigor with Next-Gen AI Tooling
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Combining 3+ years of production Angular engineering with hands-on AI copilot iteration, n8n automations, and agentic workflows to deliver faster, reliable digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm inline-flex items-center gap-1.5 font-bold"
            >
              <span>View Featured Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
