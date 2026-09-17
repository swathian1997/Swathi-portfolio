import { useState, useEffect, useRef } from 'react';
import { ChatMessageData, sendChatMessageStream } from '../../services/aiService';

const INITIAL_MESSAGE: ChatMessageData = {
  id: 'welcome-msg',
  sender: 'assistant',
  text: "Hi! 👋 I'm Swathi's AI Portfolio Assistant. Ask me about her experience, skills, projects, certifications, or technical background.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

export const DEFAULT_SUGGESTED_QUESTIONS = [
  'Tell me about Swathi',
  'What are her technical skills?',
  'What projects has she worked on?',
  'Tell me about her Angular experience',
  'What AI tools does she use?',
  'Does Swathi know Salesforce?',
  'What certifications does Swathi have?',
  'What is Swathi\'s educational background?',
  'How can I contact Swathi?',
];

export function useChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessageData = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const botMessageId = `bot-${Date.now() + 1}`;
    let accumulatedText = '';
    let hasCreatedBotMessage = false;

    try {
      await sendChatMessageStream(
        text,
        [...messages, userMessage],
        (chunk) => {
          accumulatedText += chunk;
          setIsLoading(false);

          if (!hasCreatedBotMessage) {
            hasCreatedBotMessage = true;
            const newBotMessage: ChatMessageData = {
              id: botMessageId,
              sender: 'assistant',
              text: accumulatedText,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, newBotMessage]);
          } else {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessageId
                  ? { ...msg, text: accumulatedText }
                  : msg
              )
            );
          }
        },
        (metadata) => {
          setIsLoading(false);
          const finalAction = metadata.sectionId && metadata.sectionLabel ? {
            sectionId: metadata.sectionId,
            label: metadata.sectionLabel,
          } : undefined;

          if (!hasCreatedBotMessage) {
            hasCreatedBotMessage = true;
            const finalBotMessage: ChatMessageData = {
              id: botMessageId,
              sender: 'assistant',
              text: accumulatedText || "I'm here to help with questions about Swathi's background and experience!",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              suggestedAction: finalAction,
            };
            setMessages((prev) => [...prev, finalBotMessage]);
          } else {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessageId
                  ? {
                      ...msg,
                      text: accumulatedText || msg.text,
                      suggestedAction: finalAction,
                    }
                  : msg
              )
            );
          }

          if (!isOpen || isMinimized) {
            setUnreadCount((c) => c + 1);
          }
        }
      );
    } catch (err) {
      console.error('Chat error:', err);
      setIsLoading(false);
      const errorMessage: ChatMessageData = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: "I encountered a brief connection issue. You can still explore Swathi's background directly on the page or email her at swathian1997@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleJumpToSection = (sectionId: string) => {
    if (sectionId === 'resume-trigger') {
      const resumeBtn = document.querySelector('button[aria-label="Open Resume"]') as HTMLButtonElement | null;
      if (resumeBtn) {
        resumeBtn.click();
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    isOpen,
    setIsOpen,
    isMinimized,
    setIsMinimized,
    messages,
    inputMessage,
    setInputMessage,
    isLoading,
    unreadCount,
    messagesEndRef,
    handleSendMessage,
    handleClearChat,
    handleJumpToSection,
    suggestedQuestions: DEFAULT_SUGGESTED_QUESTIONS,
  };
}
