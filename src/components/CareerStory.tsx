import React from 'react';
import {
  Code2,
  Briefcase,
  Layers,
  ShieldCheck,
  Sparkles,
  Bot,
  Workflow,
  Zap,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { careerSteps } from '../data/portfolioData';

export const CareerStory: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Layers: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />,
    Bot: <Bot className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Workflow: <Workflow className="w-5 h-5 text-sky-600 dark:text-sky-300" />,
    Zap: <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  };

  return (
    <section id="career-story" className="py-20 bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Evolutionary Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            The Continuous Learning & Growth Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            "Continuing to learn, experiment, and build" — bridging enterprise Angular development with modern AI-assisted engineering and automation.
          </p>
        </div>

        {/* Step-by-Step Evolution Flow */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {careerSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-lg flex flex-col justify-between"
              >
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {iconMap[step.iconName] || <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                    0{idx + 1} • {step.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                {/* Arrow indicator for sequence */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{step.period || 'Continuous'}</span>
                  {idx < careerSteps.length - 1 && (
                    <span className="text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-bold">
                      Next <ArrowRight className="w-3 h-3 inline" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-md dark:shadow-xl">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Continuous Builder Mindset</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-3xl">
              Post-October 2024 represents a focused period of skill expansion — applying enterprise UI principles to new frontiers in workflow automation, CRM development, and AI-accelerated workflows.
            </p>
          </div>

          <a
            href="#ai-tech"
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm font-bold"
          >
            Explore AI Exploration
          </a>
        </div>
      </div>
    </section>
  );
};
