import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2.5 text-slate-900 dark:text-white">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
            Have a Project, Opportunity or Idea?
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400">
            Let's connect.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Open to frontend engineering roles, Angular development positions, AI-assisted development projects, and workflow automation opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-6 shadow-sm dark:shadow-xl">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <MessageSquare className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    Email Address
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-sky-600 dark:text-sky-400 hover:text-sky-500 flex items-center gap-1 font-bold"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <Linkedin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    Professional LinkedIn
                  </span>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1.5"
                >
                  <span>linkedin.com/in/swathi-a-n-33875a1a6</span>
                  <ArrowRight className="w-3.5 h-3.5 inline" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  Primary Location
                </span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-slate-500">
                  Open to on-site, hybrid, and remote roles
                </p>
              </div>

              {/* Note on Privacy Compliance */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                🔒 Official candidate profile. Inquiries routed directly to Swathi AN's verified inbox.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below to initiate direct email correspondence.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your message has been pre-formatted for direct transmission to <strong>{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                        Your Name <span className="text-sky-500 dark:text-sky-400">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="e.g. Jane Doe / Tech Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                        Your Email <span className="text-sky-500 dark:text-sky-400">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                      Subject / Opportunity Type
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      placeholder="e.g. Frontend Engineer Role / Angular Project / General Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                      Message <span className="text-sky-500 dark:text-sky-400">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={5}
                      required
                      placeholder="Share details about the role, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
