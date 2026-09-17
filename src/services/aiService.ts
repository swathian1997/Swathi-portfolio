import { SWATHI_KNOWLEDGE_BASE } from '../data/chatbotKnowledge';

export interface ChatMessageData {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    sectionId: string;
  };
}

/**
 * High-performance streaming chat request with Server-Sent Events (SSE)
 * Delivers instant initial token delivery (<300ms) and live text generation
 */
export async function sendChatMessageStream(
  message: string,
  history: ChatMessageData[],
  onChunk: (chunk: string) => void,
  onComplete: (metadata: { sectionId?: string; sectionLabel?: string }) => void
): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch('/api/chat/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        message,
        history: history.slice(-4).map((h) => ({
          role: h.sender === 'user' ? 'user' : 'model',
          text: h.text,
        })),
      }),
    });

    clearTimeout(timeoutId);

    if (response.ok && response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let receivedAny = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            try {
              const data = JSON.parse(trimmed.slice(6));
              if (data.chunk) {
                receivedAny = true;
                onChunk(data.chunk);
              }
              if (data.done) {
                onComplete({
                  sectionId: data.sectionId,
                  sectionLabel: data.sectionLabel,
                });
                return;
              }
            } catch {
              // Ignore partial JSON parse errors
            }
          }
        }
      }

      if (receivedAny) {
        onComplete({});
        return;
      }
    }
  } catch (err) {
    console.warn('Streaming chat API error or timeout, switching to fast client-side engine:', err);
  } finally {
    clearTimeout(timeoutId);
  }

  // Graceful client-side fallback knowledge engine with ultra-fast progressive streaming
  const fallback = generateClientFallbackResponse(message);
  const words = fallback.text.split(/(\s+)/);
  for (const word of words) {
    onChunk(word);
    await new Promise((r) => setTimeout(r, 6));
  }
  onComplete({
    sectionId: fallback.sectionId,
    sectionLabel: fallback.sectionLabel,
  });
}

export async function sendChatMessage(
  message: string,
  history: ChatMessageData[]
): Promise<{ text: string; sectionId?: string; sectionLabel?: string }> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: history.slice(-4).map((h) => ({
          role: h.sender === 'user' ? 'user' : 'model',
          text: h.text,
        })),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.text) {
        return {
          text: data.text,
          sectionId: data.sectionId,
          sectionLabel: data.sectionLabel,
        };
      }
    }
  } catch (err) {
    console.warn('Backend chat API unavailable or offline, using fallback knowledge engine:', err);
  }

  // Graceful client-side fallback knowledge engine
  return generateClientFallbackResponse(message);
}

/**
 * Robust fallback matching Swathi's exact knowledge base if backend LLM is unreachable
 */
function generateClientFallbackResponse(input: string): { text: string; sectionId?: string; sectionLabel?: string } {
  const query = input.toLowerCase().trim();

  // 1. Who is Swathi / About
  if (
    query.includes('who is') ||
    query.includes('about') ||
    query.includes('tell me about swathi') ||
    query.includes('introduction') ||
    query.includes('summary') ||
    query.includes('background')
  ) {
    return {
      text: `**Swathi A N** is a **Software Engineer & Frontend/Angular Developer with 3+ Years of Professional Experience** based in Bengaluru, India.\n\nShe has a strong track record of engineering scalable, responsive web portals using **Angular (2-18+), TypeScript, RxJS, HTML5, CSS3, and Bootstrap**, and is actively expanding into **Generative AI, Agentic AI, n8n workflow automations, and Salesforce**.`,
      sectionId: 'about',
      sectionLabel: 'View About Section',
    };
  }

  // 2. Angular Experience / Details
  if (query.includes('angular') || query.includes('rxjs') || query.includes('typescript') || query.includes('frontend')) {
    return {
      text: `Swathi has **3+ years of hands-on enterprise experience with Angular**:\n\n• **Core Stack**: Angular CLI, Angular Material, TypeScript, RxJS (Observables & reactive data pipelines), HTML5, CSS3, Bootstrap.\n• **Key Achievements**: Developed and maintained enterprise HR and Agent Portals at **Go Digit Insurance**, transformed desktop layouts into responsive mobile-first UIs, engineered reusable component hierarchies, and integrated high-throughput REST APIs.`,
      sectionId: 'experience',
      sectionLabel: 'View Angular Experience',
    };
  }

  // 3. Technical Skills
  if (query.includes('skill') || query.includes('technolog') || query.includes('stack') || query.includes('tools')) {
    return {
      text: `Here is a summary of Swathi's technical skills:\n\n• **Frontend**: Angular, TypeScript, JavaScript (ES6+), RxJS, Angular Material, HTML5, CSS3, Bootstrap, Responsive UI\n• **APIs & Tooling**: REST APIs, Postman, Git, Bitbucket, Jenkins basics, VS Code, JIRA\n• **Testing & Delivery**: Unit Testing, UAT Support, Staging Deployments, Agile/Scrum\n• **Databases & Backend**: SQL, PostgreSQL, Java, Node.js & Spring Boot basics\n• **AI & Automation**: GitHub Copilot, ChatGPT, Gemini, OpenAI API, n8n, Salesforce`,
      sectionId: 'skills',
      sectionLabel: 'View Full Skills Matrix',
    };
  }

  // 4. Company / Work Experience / Digit Insurance
  if (
    query.includes('company') ||
    query.includes('digit') ||
    query.includes('insurance') ||
    query.includes('work') ||
    query.includes('employer') ||
    query.includes('experience') ||
    query.includes('nayak')
  ) {
    return {
      text: `Swathi's professional career includes:\n\n1. **Go Digit Insurance (Bangalore)** — *UI Developer / Software Engineer (Feb 2022 – Oct 2024)*:\n   Built mission-critical HR & Agent Portals for group health insurance (GMC, GPA, SME, DCL), transformed desktop portals to mobile-ready apps, and engineered reusable Angular components.\n\n2. **Nayak Developers** — *Freelance Developer (2026)*:\n   Delivered 5 business solutions including Google Forms automation, investor tracking, Excel data processing, website styling updates, and digital branding assets.`,
      sectionId: 'experience',
      sectionLabel: 'View Experience Timeline',
    };
  }

  // 5. Projects
  if (query.includes('project') || query.includes('portfolio') || query.includes('app') || query.includes('portal')) {
    return {
      text: `Swathi's key featured projects include:\n\n1. **Insurance HR and Agent Portals** (*Go Digit Insurance*): Large-scale Angular frontend applications managing insurance workflows, policy enrollments, and agent tools with RxJS and REST APIs.\n2. **Nayak Developers Business Solutions** (*Freelance*): 5 client deliverables for intake, investor records, and data workflows.\n3. **AI Website / Vibe Coding Prototypes**: Rapid full-stack prototyping using AI tools.\n4. **n8n AI Automation Pipelines**: Automated visual workflows connecting webhooks, APIs, and LLMs.\n5. **Agentic AI Experiments**: Autonomous tool-calling workflows and agent loops.`,
      sectionId: 'projects',
      sectionLabel: 'Explore Featured Projects',
    };
  }

  // 6. AI Tools & Automation
  if (
    query.includes('ai') ||
    query.includes('n8n') ||
    query.includes('copilot') ||
    query.includes('chatgpt') ||
    query.includes('gemini') ||
    query.includes('vibe') ||
    query.includes('agent') ||
    query.includes('automation')
  ) {
    return {
      text: `Swathi is actively skilled and experienced in modern AI & automation workflows:\n\n• **AI Tools**: GitHub Copilot, ChatGPT, Gemini, OpenAI API integration\n• **Workflows**: n8n visual automation pipelines connecting webhooks, APIs, and AI nodes\n• **Agentic AI**: Multi-step autonomous execution, tool calling, and prompt engineering\n• **AI-Assisted Development**: High-velocity frontend generation and architecture refactoring ("Vibe Coding")`,
      sectionId: 'ai-exploration',
      sectionLabel: 'View AI & Technology Hub',
    };
  }

  // 7. Salesforce
  if (query.includes('salesforce') || query.includes('crm') || query.includes('admin') || query.includes('flow')) {
    return {
      text: `Yes! Swathi has completed comprehensive **Salesforce Admin and Developer** coursework (Udemy) covering:\n\n• Data modeling, custom objects, relationships, and validation rules\n• Salesforce Flows & process automations\n• Security, permission sets, and developer fundamentals`,
      sectionId: 'skills',
      sectionLabel: 'View Salesforce Skills',
    };
  }

  // 8. APIs
  if (query.includes('api') || query.includes('rest') || query.includes('postman') || query.includes('endpoint')) {
    return {
      text: `Yes, Swathi has extensive experience with **REST APIs & API Integration**:\n\n• Consuming enterprise backend endpoints in Angular using RxJS Observables and \`HttpClient\`\n• Managing asynchronous data flows, error interceptors, and response caching\n• API payload validation and testing using **Postman**\n• OpenAI API & Gemini API integration for AI-powered features`,
      sectionId: 'skills',
      sectionLabel: 'View API & Tooling Stack',
    };
  }

  // 9. Certifications
  if (query.includes('certif') || query.includes('course') || query.includes('udemy') || query.includes('credential')) {
    return {
      text: `Swathi holds the following certifications and specialized training:\n\n• **Full-Stack Certification** – Udemy\n• **Advanced Angular Certification** – Udemy\n• **Salesforce Admin and Developer Certification Course** – Udemy\n• **Java Programming Certification**\n• **Prompt Engineering Basics & Practical Workflows**`,
      sectionId: 'certifications',
      sectionLabel: 'View Certifications',
    };
  }

  // 10. Education
  if (query.includes('education') || query.includes('degree') || query.includes('college') || query.includes('university') || query.includes('b.e') || query.includes('engineering')) {
    return {
      text: `Swathi holds a **Bachelor of Engineering (B.E.) in Electronics and Communication Engineering** (2015 – 2020) from Visvesvaraya Technological University (VTU) / M S Engineering College, Bengaluru.`,
      sectionId: 'education',
      sectionLabel: 'View Education Details',
    };
  }

  // 11. Contact / Email / LinkedIn
  if (query.includes('contact') || query.includes('email') || query.includes('reach') || query.includes('hire') || query.includes('linkedin') || query.includes('phone') || query.includes('location')) {
    return {
      text: `You can easily connect with Swathi directly:\n\n• **Email**: [swathian1997@gmail.com](mailto:swathian1997@gmail.com)\n• **LinkedIn**: [linkedin.com/in/swathi-a-n-33875a1a6](https://www.linkedin.com/in/swathi-a-n-33875a1a6)\n• **Location**: Bengaluru, Karnataka, India\n\nFeel free to send a message through the contact form or email directly!`,
      sectionId: 'contact',
      sectionLabel: 'Jump to Contact Form',
    };
  }

  // 12. Resume
  if (query.includes('resume') || query.includes('cv') || query.includes('download')) {
    return {
      text: `You can view or print Swathi's full ATS-friendly resume directly using the **"Resume"** button in the navigation bar or hero section.`,
      sectionId: 'resume-trigger',
      sectionLabel: 'Open Resume Viewer',
    };
  }

  // 13. Default fallback for unmatched queries
  return {
    text: `I don't have that information in Swathi's portfolio yet.\n\nI can answer questions about Swathi's **experience at Digit Insurance**, **Angular & frontend skills**, **featured projects**, **certifications**, **education**, **AI & n8n automations**, or **contact details**.`,
  };
}
