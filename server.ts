import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy-initialize Gemini client
  let genaiClient: GoogleGenAI | null = null;
  function getGenAI(): GoogleGenAI {
    if (!genaiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is missing');
      }
      genaiClient = new GoogleGenAI({ apiKey });
    }
    return genaiClient;
  }

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Strategy Advisor API endpoint
  app.post('/api/strategy-advisor', async (req: Request, res: Response): Promise<void> => {
    try {
      const { prompt, context } = req.body;
      if (!prompt) {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.json({
          text: `**Strategic Executive Advisory (Offline Blueprint Mode)**\n\n*Note: GEMINI_API_KEY is not configured in runtime environment. Providing structured executive reference:* \n\n1. **Executive RACI Alignment**: Ensure CDO immediately assumes sole ownership of the 30 UN Agency pipeline, while COO sets up the 50-state PEO and 60% healthcare benefit escrow account.\n2. **60% Health Care Revenue Match**: Subsidizing 60% of team health premiums requires $585/mo/employee. At Phase 1 (12 team members), this is $7,020/mo total — 100% covered by 1,755 of our active $4/mo IAI Survival Guide subscriptions or a combination with $32/mo Business Manager!\n3. **POC Acquisition Hack**: When engaging UN and state agencies, lead with synthetic data sandboxes to sign paid pilots in 3 weeks instead of 18-month security audits.`
        });
        return;
      }

      const ai = getGenAI();
      const systemInstruction = `You are the Principal Startup Strategist and Executive Advisor for Identity AI (IAI-101).
Company Profile:
- Identity AI has 9 products (8 live) built on the VouchKey cryptographic tokenization hub (Zero raw SSNs stored, per-org keys, need-to-know access, VAWA-safe sealing).
- Raising a $10M Seed/Scale round ($40M pre-money / $50M post-money, 20% dilution) with a 27-month runway crossing into profitability in Dec 2027 ($25.89M ARR by Dec 2028).
- Capital allocation: 60% ($6.0M) Paid Marketing & Acquisition ($0.18 CAC scaling), 20% ($2.0M) Team Build (2 to 55 headcount), 9% ($900k) AWS Multi-Region, 6% ($600k) Compliance/Audits, 5% ($500k) Reserves.
- Financial Engineering: Refuse to burn equity on OPEX; use SaaS ARR factoring and ARR-backed venture debt against UN and Government pipelines to cover payroll/OPEX.
- Benefits Policy: 60% of employee healthcare, dental, and vision premiums are funded directly from application subscription cash flows (IAI Survival Guide at $4/mo, IAI Business Manager at $32/mo, DineKey, and Command Suites at $3,526/yr).
- Executive Roles: Current = CEO & COO. Priority Hires = CDO (Chief Development Officer - UN & Gov sales), CTO (Chief Technology Officer - VouchKey, AWS, SOC 2), CMO (Chief Marketing Officer - $6M ad spend, $0.18 CAC, conversion staircase).
- Pre-Cleared Moats: U.S. Federal Approved Vendor (SAM.gov / CAGE), 30 UN Agencies Approved Vendor (UNGM Level 2), and Instant Synthetic Data POC Hack (UNICEF UNITE model).

Provide authoritative, concise, pragmatic executive advice tailored directly to Identity AI's exact numbers, roles (CEO, COO, CDO, CTO, CMO), and regulatory moats. Use bullet points and bold key terms.`;

      const fullPrompt = context 
        ? `Context: ${context}\n\nExecutive Question/Task: ${prompt}`
        : prompt;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
          systemInstruction,
          temperature: 0.6,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Error generating advice:', error);
      res.status(500).json({ 
        error: error?.message || 'Failed to generate strategic advisory response' 
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Identity AI Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

