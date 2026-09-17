import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Briefcase,
  Terminal,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: 'Angular & Reactive UI Architecture',
      description:
        '3+ years of production experience architecting responsive web applications with Angular CLI, TypeScript, RxJS streams, and modular reusable component libraries.',
      badge: 'Core Expertise',
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    },
    {
      icon: Layers,
      title: 'Enterprise REST Integration & Delivery',
      description:
        'Proven expertise in RESTful API consumption, state synchronization, Postman testing, performance optimization, and cross-functional Agile/Scrum sprint delivery.',
      badge: 'Enterprise Experience',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      icon: Sparkles,
      title: 'AI, Automation & Modern Workflows',
      description:
        'Active, hands-on exploration of Generative AI, prompt engineering, Agentic AI systems, n8n workflow automation, and AI-assisted "vibe coding" paradigms.',
      badge: 'Active Exploration',
      color: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Salesforce Ecosystem & Best Practices',
      description:
        'Broadened enterprise software foundations through dedicated Salesforce Admin and Developer coursework, certifications, and process automation flows.',
      badge: 'Certified Knowledge',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            Engineering Precision Meets AI Exploration
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A developer journey rooted in enterprise frontend engineering, expanding continuously into intelligent automations and next-generation developer tooling.
          </p>
        </div>

        {/* Two-Column About Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a <strong>Frontend & Angular Developer</strong> with over <strong>3+ years of professional engineering experience</strong> building robust, mobile-responsive web applications. My foundation is built upon Angular, TypeScript, RxJS, HTML5, CSS3, Bootstrap, and scalable REST API integration.
            </p>
            <p>
              During my tenure at <strong>Digit Insurance</strong>, I contributed to enterprise-grade HR and Agent Portals for group health insurance lines (GMC, GPA, SME, and DCL). I specialized in transforming complex desktop interfaces into intuitive mobile experiences, crafting reusable component hierarchies, resolving critical performance bottlenecks, and collaborating with cross-functional teams in fast-paced Agile sprint cycles.
            </p>
            <p>
              Following my enterprise role, I have channeled my passion for continuous learning into expanding my technical scope into <strong>Salesforce development, Generative AI, Agentic AI architectures, n8n workflow automations</strong>, and practical freelance client solutions with <strong>Nayak Developers</strong>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                3+ Years Professional Experience in Angular & TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Enterprise Insurance Portals
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                AI-Assisted Vibe Coding
              </span>
            </div>
          </div>

          {/* Key Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl relative text-slate-900 dark:text-white space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>Developer Identity</span>
                </h3>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-500/20">
                  swathi.config
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Primary Discipline:</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold">Angular / Frontend</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Enterprise Tenure:</span>
                  <span className="text-red-500 dark:text-red-400 font-semibold">Digit Insurance (2022-2024)</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Current Focus:</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">AI, n8n, Vibe Coding</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Base Location:</span>
                  <span className="text-slate-900 dark:text-slate-200">Bengaluru, India</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">Education:</span>
                  <span className="text-slate-900 dark:text-slate-200">B.E. (ECE), VTU (2015-2020)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Philosophy:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">"Learn, Experiment, Build"</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <p>
                  Committed to clean code quality, responsive component standards, and leveraging AI tooling for 10x developer velocity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
