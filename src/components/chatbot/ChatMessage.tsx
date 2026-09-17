import React from 'react';
import { Bot, User, ArrowUpRight, Sparkles } from 'lucide-react';
import { ChatMessageData } from '../../services/aiService';

interface ChatMessageProps {
  message: ChatMessageData;
  onJumpToSection?: (sectionId: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onJumpToSection }) => {
  const isUser = message.sender === 'user';

  // Format simple markdown into clean structured paragraphs and list items
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, lineIndex) => {
      // Empty lines
      if (!line.trim()) {
        return <div key={lineIndex} className="h-2" />;
      }

      // Bullet points
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*');
      const cleanLine = isBullet ? line.replace(/^[\s•\-\*]+/, '').trim() : line;

      // Parse bold **text** and markdown links [text](url)
      const parseInline = (text: string) => {
        // Regex to match bold **text** and [link](url)
        const parts = [];
        let remaining = text;
        let keyCounter = 0;

        while (remaining.length > 0) {
          const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
          const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);

          // Find the earliest match
          const boldIndex = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;
          const linkIndex = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;

          if (boldIndex === -1 && linkIndex === -1) {
            parts.push(<span key={keyCounter++}>{remaining}</span>);
            break;
          }

          if (boldIndex !== -1 && (linkIndex === -1 || boldIndex < linkIndex)) {
            if (boldIndex > 0) {
              parts.push(<span key={keyCounter++}>{remaining.substring(0, boldIndex)}</span>);
            }
            parts.push(
              <strong
                key={keyCounter++}
                className={`font-bold ${isUser ? 'text-white' : 'text-slate-950 dark:text-white'}`}
              >
                {boldMatch![1]}
              </strong>
            );
            remaining = remaining.substring(boldIndex + boldMatch![0].length);
          } else if (linkMatch && linkIndex !== -1) {
            if (linkIndex > 0) {
              parts.push(<span key={keyCounter++}>{remaining.substring(0, linkIndex)}</span>);
            }
            parts.push(
              <a
                key={keyCounter++}
                href={linkMatch[2]}
                target="_blank"
                rel="noreferrer"
                className={`${
                  isUser
                    ? 'text-sky-100 hover:text-white'
                    : 'text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300'
                } underline font-semibold underline-offset-2 transition-colors`}
              >
                {linkMatch[1]}
              </a>
            );
            remaining = remaining.substring(linkIndex + linkMatch![0].length);
          }
        }

        return parts;
      };

      if (isBullet) {
        return (
          <div
            key={lineIndex}
            className={`flex items-start gap-2 my-1 ${
              isUser ? 'text-white' : 'text-slate-800 dark:text-slate-200'
            }`}
          >
            <span
              className={`${
                isUser ? 'text-sky-200' : 'text-sky-600 dark:text-sky-400'
              } font-bold select-none leading-relaxed`}
            >
              •
            </span>
            <span className="flex-1 leading-relaxed">{parseInline(cleanLine)}</span>
          </div>
        );
      }

      // Check if line is a numbered item e.g. "1. "
      const numMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        return (
          <div
            key={lineIndex}
            className={`flex items-start gap-2 my-1 ${
              isUser ? 'text-white' : 'text-slate-800 dark:text-slate-200'
            }`}
          >
            <span
              className={`${
                isUser
                  ? 'text-white bg-sky-700/80 border-sky-400/40'
                  : 'text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950/80 border-sky-300 dark:border-sky-800/60'
              } font-mono text-xs font-bold px-1.5 py-0.5 rounded border select-none shrink-0 mt-0.5`}
            >
              {numMatch[1]}
            </span>
            <span className="flex-1 leading-relaxed">{parseInline(numMatch[2])}</span>
          </div>
        );
      }

      return (
        <p
          key={lineIndex}
          className={`leading-relaxed my-0.5 ${
            isUser ? 'text-white' : 'text-slate-800 dark:text-slate-200'
          }`}
        >
          {parseInline(line)}
        </p>
      );
    });
  };

  return (
    <div className={`flex gap-3 text-sm ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start group`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border shadow-sm ${
          isUser
            ? 'bg-sky-600 border-sky-400/30 text-white'
            : 'bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 border-slate-200 dark:border-sky-500/40 text-sky-600 dark:text-sky-400'
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      {/* Bubble Container */}
      <div className={`flex flex-col max-w-[82%] ${isUser ? 'items-end' : 'items-start'}`}>
        {/* Sender Name & Timestamp */}
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            {isUser ? 'You' : "Swathi's AI Assistant"}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{message.timestamp}</span>
        </div>

        {/* Bubble */}
        <div
          className={`p-3.5 rounded-2xl shadow-sm transition-all ${
            isUser
              ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-tr-none border border-sky-400/20 shadow-sky-500/10'
              : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700/80 shadow-slate-200/50 dark:shadow-black/40 backdrop-blur-sm'
          }`}
        >
          <div className="text-[13px] leading-relaxed break-words">
            {message.text ? (
              renderFormattedText(message.text)
            ) : (
              <div className="flex items-center gap-1.5 py-1 text-sky-500">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
          </div>

          {/* Interactive Section Recommendation Button */}
          {!isUser && message.suggestedAction && onJumpToSection && (
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onJumpToSection(message.suggestedAction!.sectionId)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400 transition-all group/btn font-semibold"
              >
                <Sparkles className="w-3 h-3 text-sky-500 dark:text-sky-400" />
                <span>{message.suggestedAction.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
