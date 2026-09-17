import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Layers,
  Bot,
  Workflow,
  Zap,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiterSnapshot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenRecruiterSnapshot }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'angular' | 'ai'>('angular');

  const angularCode = `// Illustrative Angular Development
// Technologies used in my professional work

// 1. Angular & TypeScript Architecture
@Component({
  selector: 'app-reusable-card-view',
  templateUrl: './reusable-card-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReusableCardViewComponent implements OnInit {
  private http = inject(HttpClient);

  // 2. RxJS & REST API Integration
  readonly items$ = this.http.get<DataItem[]>('/api/v1/items').pipe(
    map(data => data.filter(item => item.isActive)),
    catchError(error => of([]))
  );

  // 3. Reusable Components & Responsive UI
  isMobileLayout = signal<boolean>(false);

  ngOnInit(): void {
    // Component lifecycle initialization
  }
}`;

  const aiWorkflowCode = `// Illustrative AI & Automation Architecture
// Experiments connecting APIs, Webhooks & Models

{
  "workflow": "Generic Automation Pipeline",
  "triggers": ["Webhook / API Trigger"],
  "pipeline": [
    { "step": "Data Ingestion", "type": "HTTP Payload" },
    { "step": "AI Reasoning", "model": "Gemini / OpenAI API" },
    { "step": "Transform", "format": "Structured_JSON" },
    { "step": "Dispatch", "target": "Destination Service" }
  ],
  "status": "Experimental & Functional"
}`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Background Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] opacity-70" />
        
        {/* Gradient light orbs */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-red-500/10 dark:bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Branding, Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Live Availability & Location Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full shadow-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800">
                <MapPin className="w-3 h-3 text-sky-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 font-mono">
                  &lt;developer&gt;
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 font-mono">
                  Hi, I'm
                </span>
                <span className="text-xs font-bold text-sky-500 font-mono">
                  /&gt;
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                <span className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-700 dark:from-white dark:via-slate-50 dark:to-sky-200 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500 dark:from-sky-400 dark:via-indigo-400 dark:to-sky-300 bg-clip-text text-transparent pt-1">
                {personalInfo.primaryTitle}
              </h2>
            </div>

            {/* Supporting Headline Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroTagline}
            </p>

            {/* Core Stats Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Experience</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">3+ Years Professional Experience</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Core Stack</div>
                <div className="text-sm sm:text-base font-extrabold text-sky-600 dark:text-sky-400 mt-0.5">Angular / TypeScript</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm col-span-2 sm:col-span-1">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Focus</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5">AI & Automation</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all hover:-translate-y-0.5 shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>Quick Contact</span>
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>Resume PDF</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code / Tech Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Terminal Window Card */}
            <div className="rounded-2xl bg-slate-900/95 dark:bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    swathi-workspace ~ {activeCodeTab === 'angular' ? 'illustrative-angular-showcase' : 'ai-workflow-showcase'}
                  </span>
                </div>
                
                {/* Code Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    id="code-tab-angular"
                    onClick={() => setActiveCodeTab('angular')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeCodeTab === 'angular'
                        ? 'bg-sky-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Angular
                  </button>
                  <button
                    id="code-tab-ai"
                    onClick={() => setActiveCodeTab('ai')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeCodeTab === 'ai'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI & n8n
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 overflow-x-auto text-[12px] sm:text-[13px] font-mono leading-relaxed text-slate-200">
                <pre className="text-slate-300">
                  <code>{activeCodeTab === 'angular' ? angularCode : aiWorkflowCode}</code>
                </pre>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  <span>{activeCodeTab === 'angular' ? 'Angular • TypeScript • RxJS • REST APIs' : 'n8n • Webhooks • LLM APIs'}</span>
                </div>
                <span className="text-slate-500">UTF-8</span>
              </div>
            </div>

            {/* Floating Tech Badges around Terminal */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs">
                A
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">Angular & TypeScript</p>
                <p className="text-[9px] uppercase tracking-wider text-slate-400">3+ Years Professional Experience</p>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white">Vibe Coding & AI</p>
                <p className="text-[9px] uppercase tracking-wider text-slate-500">AI-assisted Workflows</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
