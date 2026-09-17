import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterQuickBar, RecruiterSnapshotModal } from './components/RecruiterSnapshot';
import { About } from './components/About';
import { CareerStory } from './components/CareerStory';
import { Experience } from './components/Experience';
import { AiExploration } from './components/AiExploration';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CertificationsAndEducation } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ChatButton, ChatbotModal } from './components/chatbot';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-sky-500 selection:text-slate-950">
        {/* Navigation Header */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiterSnapshot={() => setIsRecruiterModalOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        <main id="main-content" className="relative">
          {/* Hero Section */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenRecruiterSnapshot={() => setIsRecruiterModalOpen(true)}
          />

          {/* 30-Second Recruiter Fast Scan Bar */}
          <RecruiterQuickBar
            onOpenModal={() => setIsRecruiterModalOpen(true)}
            onOpenChat={() => setIsChatOpen(true)}
          />

          {/* About Section */}
          <About />

          {/* Continuous Evolution Career Story */}
          <CareerStory />

          {/* Professional Experience & Client Work Timeline */}
          <Experience />

          {/* Dedicated AI & Technology Exploration (Vibe Coding, n8n, Agents, Salesforce) */}
          <AiExploration />

          {/* Featured Projects Showcase */}
          <Projects />

          {/* Technical Skills & Categorized Stack */}
          <Skills />

          {/* Certifications & Education */}
          <CertificationsAndEducation />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiterSnapshot={() => setIsRecruiterModalOpen(true)}
        />

        {/* Floating AI Chatbot Button */}
        <ChatButton
          isOpen={isChatOpen}
          unreadCount={0}
          onClick={() => setIsChatOpen(!isChatOpen)}
        />

        {/* AI Portfolio Assistant Chatbot Modal */}
        <ChatbotModal
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />

        {/* Recruiter 30-Second Snapshot Modal */}
        <RecruiterSnapshotModal
          isOpen={isRecruiterModalOpen}
          onClose={() => setIsRecruiterModalOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />

        {/* Printable ATS Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
