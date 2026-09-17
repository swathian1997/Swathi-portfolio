import React from 'react';
import { Bot, MessageSquare, Sparkles, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  unreadCount: number;
  onClick: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, unreadCount, onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip on hover when closed */}
      {!isOpen && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 text-slate-200 border border-sky-500/30 text-xs shadow-xl backdrop-blur-md animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-medium text-slate-300">Ask Swathi's AI Assistant</span>
        </div>
      )}

      {/* Launcher Button */}
      <button
        id="ai-chatbot-launcher"
        aria-label={isOpen ? 'Close AI Portfolio Chatbot' : 'Open AI Portfolio Chatbot'}
        onClick={onClick}
        className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-sky-300/30 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        {/* Glowing Radar Halo */}
        <span className="absolute inset-0 rounded-2xl bg-sky-400/20 animate-ping pointer-events-none opacity-75 group-hover:opacity-100" />

        {/* Dynamic Icon */}
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
          ) : (
            <div className="relative">
              <Bot className="w-6 h-6 transition-transform group-hover:scale-110" />
              <Sparkles className="w-3 h-3 text-amber-300 absolute -top-1.5 -right-1.5 animate-bounce" />
            </div>
          )}
        </div>

        {/* Unread Counter Badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-slate-950 shadow-sm animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
