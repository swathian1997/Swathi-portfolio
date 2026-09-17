import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Code2,
  Layers,
  MapPin,
  Calendar
} from 'lucide-react';
import { certifications, education } from '../data/portfolioData';

export const CertificationsAndEducation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Salesforce', 'AI & Prompting', 'Full-Stack & Backend'];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            Verified Certifications & Formal Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal professional training across Angular, Full-Stack development, Salesforce, and Generative AI masterminds.
          </p>
        </div>

        {/* Filter Pills for Certs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                  Issued By: {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Placeholder Credential Verification space */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="text-[10px] uppercase font-bold tracking-wider">Credential Record</span>
                <span className="text-sky-600 dark:text-sky-400 flex items-center gap-1 hover:underline cursor-pointer text-[10px] font-bold uppercase tracking-wider">
                  <span>Details on file</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Formal Education Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-xl text-slate-900 dark:text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-mono uppercase tracking-wider font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Formal Academic Degree</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {education.degree} — {education.major}
              </h3>

              <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                {education.institution}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                  {education.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                  {education.location}
                </span>
              </div>

              <ul className="space-y-1.5 pt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {education.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-2 lg:w-64">
              <div className="w-12 h-12 mx-auto rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">Engineering Background</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Electronics & Communication (VTU)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
