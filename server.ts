import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { CHATBOT_SYSTEM_INSTRUCTION } from './src/data/chatbotKnowledge';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
});

// Fast Chatbot Streaming endpoint (SSE) for ultra-low latency & immediate response
app.post('/api/chat/stream', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string' });
  }

  // Set SSE Headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const ai = getGeminiClient();

  if (!ai) {
    const fallbackText = generateServerRuleResponse(message);
    const sectionHint = detectSectionLink(message + ' ' + fallbackText);
    res.write(`data: ${JSON.stringify({ chunk: fallbackText, done: true, sectionId: sectionHint.id, sectionLabel: sectionHint.label })}\n\n`);
    return res.end();
  }

  try {
    const formattedContents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-4)) {
        if (item.text) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.7-flash',
      contents: formattedContents,
      config: {
        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
        temperature: 0.1,
        maxOutputTokens: 500,
      },
    });

    let fullText = '';
    for await (const chunk of responseStream) {
      const textChunk = chunk.text;
      if (textChunk) {
        fullText += textChunk;
        res.write(`data: ${JSON.stringify({ chunk: textChunk, done: false })}\n\n`);
      }
    }

    const sectionHint = detectSectionLink(message + ' ' + fullText);
    res.write(`data: ${JSON.stringify({ done: true, sectionId: sectionHint.id, sectionLabel: sectionHint.label })}\n\n`);
    res.end();
  } catch (error: any) {
    console.error('Error in streaming Gemini chat:', error?.message || error);
    const fallbackText = generateServerRuleResponse(message);
    const sectionHint = detectSectionLink(message + ' ' + fallbackText);
    res.write(`data: ${JSON.stringify({ chunk: fallbackText, done: true, sectionId: sectionHint.id, sectionLabel: sectionHint.label })}\n\n`);
    res.end();
  }
});

// Non-streaming fallback endpoint with Low-Latency configuration
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string' });
  }

  const ai = getGeminiClient();

  if (!ai) {
    return res.json({
      fallback: true,
      text: generateServerRuleResponse(message),
    });
  }

  try {
    const formattedContents = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-4)) {
        if (item.text) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: formattedContents,
      config: {
        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
        temperature: 0.1,
        maxOutputTokens: 500,
      },
    });

    const replyText = response.text || "I'm here to help with questions about Swathi's professional background and skills.";
    const sectionHint = detectSectionLink(message + ' ' + replyText);

    return res.json({
      text: replyText,
      sectionId: sectionHint.id,
      sectionLabel: sectionHint.label,
    });
  } catch (error: any) {
    console.error('Error querying Gemini API:', error?.message || error);
    return res.json({
      fallback: true,
      text: generateServerRuleResponse(message),
    });
  }
});

function detectSectionLink(text: string): { id?: string; label?: string } {
  const lower = text.toLowerCase();
  if (lower.includes('project') || lower.includes('portal') || lower.includes('case study')) {
    return { id: 'projects', label: 'View Featured Projects' };
  }
  if (lower.includes('skill') || lower.includes('angular material') || lower.includes('stack')) {
    return { id: 'skills', label: 'Explore Skills Matrix' };
  }
  if (lower.includes('experience') || lower.includes('digit') || lower.includes('career') || lower.includes('work')) {
    return { id: 'experience', label: 'View Experience Timeline' };
  }
  if (lower.includes('ai') || lower.includes('n8n') || lower.includes('agent') || lower.includes('vibe')) {
    return { id: 'ai-exploration', label: 'View AI & Technology Hub' };
  }
  if (lower.includes('certif') || lower.includes('education') || lower.includes('degree')) {
    return { id: 'certifications', label: 'View Certifications & Education' };
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('linkedin')) {
    return { id: 'contact', label: 'Go to Contact Section' };
  }
  return {};
}

function generateServerRuleResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('who') || q.includes('about') || q.includes('summary')) {
    return "Swathi A N is a Software Engineer & Frontend Developer with 3+ Years of Professional Experience specializing in Angular, TypeScript, RxJS, and modern web application development.";
  }
  if (q.includes('skill') || q.includes('stack')) {
    return "Swathi's core skills include Angular (2-18+), TypeScript, RxJS, HTML5, CSS3, Bootstrap, REST APIs, Postman, Git, JIRA, SQL, Java, and modern AI tools like Copilot, Gemini, OpenAI API, and n8n.";
  }
  if (q.includes('project')) {
    return "Swathi has engineered enterprise Insurance HR & Agent Portals (Go Digit Insurance), delivered business solutions for Nayak Developers, and built AI/n8n automation workflows.";
  }
  return "I am Swathi's AI Portfolio Assistant. Ask me about her 3+ years of Angular experience, Digit Insurance projects, technical skills, certifications, or AI exploration.";
}

// Start Server with Vite Middleware or Static files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
