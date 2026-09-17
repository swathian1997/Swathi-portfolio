import React from 'react';
import { X, Code2, Terminal, Layers, ShieldCheck, CheckCircle2, Copy } from 'lucide-react';

interface AngularIntegrationGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AngularIntegrationGuide: React.FC<AngularIntegrationGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const angularServiceCode = `// 1. Angular Service: ai-assistant.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Injectable({ providedIn: 'root' })
export class AiAssistantService {
  private http = inject(HttpClient);
  private apiUrl = '/api/chat'; // Proxied to Express / Cloud Run backend

  sendMessage(message: string, history: ChatMessage[]): Observable<any> {
    return this.http.post(this.apiUrl, { message, history });
  }
}`;

  const angularComponentCode = `// 2. Angular Component: ai-chatbot.component.ts
@Component({
  selector: 'app-ai-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chatbot.component.html',
  styleUrls: ['./ai-chatbot.component.scss']
})
export class AiChatbotComponent {
  private aiService = inject(AiAssistantService);
  isOpen = signal(false);
  messages = signal<ChatMessage[]>([]);
  userInput = '';

  onSend(): void {
    if (!this.userInput.trim()) return;
    // Call aiService.sendMessage(...)
  }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 dark:text-red-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Angular & Full-Stack Integration Architecture
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Modular separation: UI Component, Service, Serverless Proxy & Secure API Keys
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close architecture guide"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Architecture Separation Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> 1. Modular Architectural Separation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">1. Frontend UI Component</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Floating button, message bubble streams, quick chips, and auto-scrolling viewport.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">2. Angular / HTTP Service</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  RxJS <code className="text-sky-600 dark:text-sky-300">HttpClient</code> proxying requests to <code className="text-sky-600 dark:text-sky-300">/api/chat</code>.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">3. Server-Side Gemini API</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Secure Node/Express backend holding <code className="text-sky-600 dark:text-sky-300">GEMINI_API_KEY</code> safely out of browser scope.
                </p>
              </div>
            </div>
          </div>

          {/* Running Locally & Environment Variables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> 2. Running Locally & Adding API Key
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950/90 border border-slate-800 font-mono text-xs space-y-2 text-slate-200">
              <div className="text-slate-400"># 1. Create your local .env file</div>
              <div className="text-emerald-400">GEMINI_API_KEY=your_gemini_api_key_here</div>
              <div className="pt-2 text-slate-400"># 2. Run development full-stack server</div>
              <div className="text-sky-300">npm run dev</div>
              <div className="pt-2 text-slate-400"># 3. Compile for production build</div>
              <div className="text-indigo-300">npm run build && npm start</div>
            </div>
          </div>

          {/* Security Best Practice */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-amber-800 dark:text-amber-300 block mb-0.5">Secure Key Management:</strong>
              The Gemini API key is configured server-side in <code className="text-amber-900 dark:text-amber-100 font-mono">.env</code> and <code className="text-amber-900 dark:text-amber-100 font-mono">server.ts</code>. The frontend never makes direct client-side calls to the AI model, ensuring zero credential exposure.
            </div>
          </div>

          {/* Angular Service Snippet */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> 3. Angular RxJS Service Implementation
            </h4>
            <pre className="p-3.5 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-200 overflow-x-auto">
              <code>{angularServiceCode}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md transition-colors"
          >
            Got it, Close
          </button>
        </div>
      </div>
    </div>
  );
};
