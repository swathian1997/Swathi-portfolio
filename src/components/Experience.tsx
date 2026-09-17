import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Terminal,
  ShieldCheck,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { experiences, careerTimeline } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('digit-insurance');

  const selectedExp = experiences.find((e) => e.id === selectedExpId) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Timeline & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2.5 text-slate-900 dark:text-white">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            Professional Experience & Career Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A clear timeline of enterprise software engineering, tailored freelance client deliverables, and focused AI/technology skill expansion.
          </p>
        </div>

        {/* 1. VISUAL CAREER TIMELINE (Requirement 6) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-sky-500 dark:text-sky-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-900 dark:text-white">
              Verified Career Milestones & Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            {careerTimeline.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 p-6 shadow-sm dark:shadow-xl relative flex flex-col justify-between transition-all group"
              >
                {/* Milestone Step Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                      0{idx + 1} • {item.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {item.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {item.keyPoints.slice(0, 3).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-sky-500 dark:text-sky-400 mt-0.5 font-bold">•</span>
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.skills.slice(0, 4).map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DETAILED EXPERIENCE EXPLORER (Requirement 4 & 7) */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-500 dark:text-sky-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-900 dark:text-white">
                Deep Dive: Work Experience & Client Deliverables
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Click tabs to switch context
            </span>
          </div>

          {/* Experience Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {experiences.map((exp) => {
              const isSelected = selectedExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  id={`exp-tab-${exp.id}`}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-slate-950' : 'bg-sky-500 dark:bg-sky-400'
                    }`}
                  />
                  <span>{exp.company}</span>
                  <span className="text-[10px] font-mono opacity-85">({exp.type})</span>
                </button>
              );
            })}
          </div>

          {/* Active Experience Card */}
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-xl"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedExp.role}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                    {selectedExp.type}
                  </span>
                </div>
                <div className="text-base font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>{selectedExp.company}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                  <span>{selectedExp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                  <span>{selectedExp.location}</span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedExp.summary}
            </div>

            {/* Tasks / Responsibilities List */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>
                  {selectedExp.id === 'nayak-developers'
                    ? 'Five Practical Client / Business Deliverables'
                    : 'Key Responsibilities & Deliverables'}
                </span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedExp.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono mb-3">
                Technologies & Tools Utilized:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
