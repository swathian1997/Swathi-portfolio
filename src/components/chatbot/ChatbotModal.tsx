import React, { useState } from 'react';
import {
  Bot,
  Send,
  Trash2,
  Minimize2,
  Maximize2,
  X,
  Sparkles,
  HelpCircle,
  Code2,
  ChevronDown,
  RefreshCw,
} from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { useChatbot } from './useChatbot';
import { AngularIntegrationGuide } from './AngularIntegrationGuide';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const {
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    messagesEndRef,
    handleSendMessage,
    handleClearChat,
    handleJumpToSection,
    suggestedQuestions,
  } = useChatbot();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      {/* Chat Window Container */}
      <div
        id="ai-chatbot-modal"
        className={`fixed z-50 transition-all duration-300 flex flex-col shadow-2xl border border-slate-300 dark:border-slate-700/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl ${
          isExpanded
            ? 'inset-3 sm:inset-6 sm:max-w-4xl sm:mx-auto rounded-2xl'
            : 'bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] rounded-2xl'
        }`}
      >
        {/* Header */}
        <div className="px-4 py-3.5 bg-gradient-to-r from-slate-100 via-white to-sky-100 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 border border-sky-400/30">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900 shadow-sm" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  Swathi's AI Assistant
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                  Gemini AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span>Frontend & Angular Knowledge Hub</span>
              </p>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-1">
            {/* Angular / Arch Guide */}
            <button
              type="button"
              onClick={() => setIsGuideOpen(true)}
              title="View Architecture & Integration Guide"
              aria-label="View Architecture Guide"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </button>

            {/* Clear Chat */}
            <button
              type="button"
              onClick={handleClearChat}
              title="Clear conversation"
              aria-label="Clear conversation"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Expand / Shrink */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Restore size' : 'Expand window'}
              aria-label={isExpanded ? 'Restore size' : 'Expand window'}
              className="hidden sm:block p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              title="Close chat"
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth focus:outline-none custom-scrollbar bg-slate-50/50 dark:bg-transparent">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              onJumpToSection={(secId) => {
                handleJumpToSection(secId);
                // On mobile, close or shrink to view target
                if (window.innerWidth < 640) {
                  onClose();
                }
              }}
            />
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs py-2 px-1 animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-sky-500/30 flex items-center justify-center text-sky-500 dark:text-sky-400 shadow-sm">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="text-[12px] font-medium text-slate-700 dark:text-slate-300 mr-1">Consulting knowledge base</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-3 py-2 bg-slate-100/90 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5 mb-1.5 px-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
            <span>Suggested questions:</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            {suggestedQuestions.map((question, qIdx) => (
              <button
                key={qIdx}
                type="button"
                onClick={() => handleSendMessage(question)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800/90 hover:bg-sky-50 dark:hover:bg-sky-500/20 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500/40 text-[11px] font-medium transition-all flex-shrink-0 disabled:opacity-50 shadow-sm dark:shadow-none"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/90 flex items-end gap-2 rounded-b-2xl"
        >
          <div className="relative flex-1">
            <textarea
              id="ai-chatbot-input"
              rows={1}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Swathi's skills, projects, Digit Insurance, AI..."
              className="w-full resize-none py-2.5 pl-3.5 pr-10 text-xs sm:text-sm bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl border border-slate-300 dark:border-slate-700/80 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all max-h-24 shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            aria-label="Send message"
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-md shadow-sky-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Integration Guide Modal */}
      <AngularIntegrationGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};
