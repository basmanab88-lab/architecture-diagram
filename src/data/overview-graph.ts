import type { Node, Edge } from '@xyflow/react'

export type Category = 'user' | 'core' | 'shared' | 'product' | 'cloud' | 'ext' | 'enduser'

export type SystemNodeData = {
  label: string
  sub: string
  category: Category
  tooltip: string
  href?: string
  icon?: string
} & Record<string, unknown>

export type LabelNodeData = {
  label: string
  caption?: string
  align?: 'left' | 'center'
} & Record<string, unknown>

const NODE_W = 240
const NODE_H = 88
const COL_GAP = 32

// Center x of the canvas (in flow coordinates)
const CX = 900

function centeredRow<T extends { id: string }>(items: T[], y: number, w = NODE_W, gap = COL_GAP) {
  const total = items.length * w + (items.length - 1) * gap
  const startX = CX - total / 2
  return items.map((it, i) => ({ ...it, x: startX + i * (w + gap), y }))
}

// === ROWS (top to bottom) ===
// y = 40   : YOU section label
// y = 70   : Basman card (row center)
// y = 220  : WORKSTATION section label
// y = 250  : Claude Code CLI + ~/.claude hooks
// y = 400  : GITHUB section label
// y = 430  : Core/Brain row label
// y = 460  : basman-brain + claude-config
// y = 580  : Shared row label
// y = 610  : calendar-skills
// y = 730  : Product repos row label
// y = 760  : t-800 + handyman + career-muse-os + money-machine
// y = 910  : CLOUD HOSTING section label
// y = 940  : Vercel + Supabase shared + Supabase career-muse
// y = 1090 : EXTERNAL APIs section label
// y = 1120 : 6 API cards
// y = 1270 : END USERS section label
// y = 1300 : browser users + WhatsApp users

const cards = [
  // YOU
  ...centeredRow(
    [{
      id: 'basman', label: '👤 Basman', sub: 'writes prompts in VS Code',
      category: 'user' as Category, href: '#/operation',
      tooltip: 'You. Writes prompts in VS Code; Claude Code does the typing.',
    }],
    70
  ),
  // WORKSTATION
  ...centeredRow(
    [
      {
        id: 'cc', label: 'Claude Code CLI', sub: 'the AI that writes code for you',
        category: 'core' as Category, href: '#/operation',
        tooltip: 'Claude Code CLI — the AI agent running in your terminal. Writes code, edits files, runs commands. Reads memory + skills + hooks.',
      },
      {
        id: 'hooks', label: '~/.claude hooks', sub: 'inject · sync · detect',
        category: 'core' as Category, href: '#/claude-config',
        tooltip: 'Local automations: auto-loads cross-product principles, syncs ~/.claude to GitHub on session end, scans transcripts for learnings.',
      },
    ],
    250
  ),
  // GITHUB - Core
  ...centeredRow(
    [
      {
        id: 'bb', label: 'basman-brain', sub: 'your career knowledge',
        category: 'core' as Category, href: '#/basman-brain',
        tooltip: 'basman-brain — Personal/career knowledge. Markdown files every Claude session reads at start of any career conversation.',
      },
      {
        id: 'cfg', label: 'claude-config', sub: "Claude's operational state",
        category: 'core' as Category, href: '#/claude-config',
        tooltip: "claude-config — GitHub backup of Claude's hooks, skills, memory, settings. Auto-synced from ~/.claude.",
      },
    ],
    460
  ),
  // GITHUB - Shared
  ...centeredRow(
    [
      {
        id: 'cs', label: 'calendar-skills', sub: 'used by T-800 + HandyMan',
        category: 'shared' as Category, href: '#/calendar-skills',
        tooltip: 'calendar-skills — Shared TS module for Google Calendar + Hebrew/English time parsing. Used by T-800 + HandyMan via raw URL import.',
      },
    ],
    610
  ),
  // GITHUB - Products
  ...centeredRow(
    [
      {
        id: 't800', label: 't-800', sub: 'personal assistant bot',
        category: 'product' as Category, href: '#/t-800',
        tooltip: 'T-800 — Personal assistant bot. Calendar, scheduling, WhatsApp-first. React frontend + Supabase Edge Function backend.',
      },
      {
        id: 'hm', label: 'handyman', sub: 'handyman business bot',
        category: 'product' as Category, href: '#/handyman',
        tooltip: 'HandyMan — WhatsApp bot for a handyman business. Reads/writes a canonical Google Sheet via Claude + Sheets API.',
      },
      {
        id: 'cmos', label: 'career-muse-os', sub: 'your job-hunting OS',
        category: 'product' as Category, href: '#/career-muse-os',
        tooltip: 'Career Muse OS — Tracks applications, enriches leads, drafts outreach. Long-term: autonomous career agent.',
      },
      {
        id: 'mmt', label: 'money-machine', sub: 'trading + content',
        category: 'product' as Category, href: '#/money-machine',
        tooltip: 'Money Machine — Crypto trading bot (built, deposit blocked) + multi-language content site generator.',
      },
    ],
    760
  ),
  // CLOUD
  ...centeredRow(
    [
      {
        id: 'vercel', label: 'Vercel', sub: 'web frontends',
        category: 'cloud' as Category, href: '#/vercel',
        tooltip: 'Vercel — Hosts your React frontends. Auto-deploys on every git push (except HandyMan web/, which needs manual `vercel --prod`).',
      },
      {
        id: 'supshared', label: 'Supabase shared', sub: '22 tables · 21 Edge Functions',
        category: 'cloud' as Category, href: '#/supabase-shared',
        tooltip: 'Shared Supabase project — Postgres database + serverless Edge Functions. Powers T-800 + HandyMan from one place.',
      },
      {
        id: 'supcm', label: 'Supabase career-muse', sub: '27 tables · 22 Edge Functions',
        category: 'cloud' as Category, href: '#/supabase-career-muse',
        tooltip: 'Career Muse Supabase — Fully separate project. Free tier, auto-pauses after ~7d idle.',
      },
    ],
    940
  ),
  // EXTERNAL
  ...centeredRow(
    [
      {
        id: 'claude', label: 'Anthropic Claude', sub: 'primary LLM (Sonnet 4.6)',
        category: 'ext' as Category, href: '#/anthropic',
        tooltip: 'Anthropic Claude API — Primary LLM. Sonnet 4.6 used by T-800, HandyMan, Career Muse.',
      },
      {
        id: 'cer', label: 'Cerebras', sub: 'fallback / content engine',
        category: 'ext' as Category, href: '#/cerebras',
        tooltip: 'Cerebras — Fast/cheap inference (qwen-3-235b). T-800 fallback; content-machine primary.',
      },
      {
        id: 'goog', label: 'Google APIs', sub: 'Calendar · Sheets · Gmail',
        category: 'ext' as Category, href: '#/google',
        tooltip: 'Google APIs — Calendar (T-800), Sheets (HandyMan), Gmail (Career Muse). Three separate GCP projects.',
      },
      {
        id: 'wa', label: 'WhatsApp Cloud', sub: 'one number, two products',
        category: 'ext' as Category, href: '#/whatsapp',
        tooltip: 'WhatsApp Cloud API (Meta) — One business number, routed by phone via users_wa to T-800 or HandyMan.',
      },
      {
        id: 'prx', label: 'Proxycurl', sub: 'LinkedIn enrichment',
        category: 'ext' as Category, href: '#/google',
        tooltip: 'Proxycurl — LinkedIn profile enrichment for Career Muse outreach.',
      },
      {
        id: 'bn', label: 'Binance', sub: 'crypto exchange (blocked)',
        category: 'ext' as Category, href: '#/binance',
        tooltip: 'Binance — Crypto exchange. Money Machine trading bot would execute here. Currently blocked at deposit.',
      },
    ],
    1120,
    200, // narrower for 6 cards
    20
  ),
  // END USERS
  ...centeredRow(
    [
      {
        id: 'web', label: 'browser users', sub: 'via Vercel frontends',
        category: 'enduser' as Category, href: '#/vercel',
        tooltip: 'Browser users — anyone who opens your Vercel-hosted web apps.',
      },
      {
        id: 'waapp', label: 'WhatsApp users', sub: 'customers + tradesmen',
        category: 'enduser' as Category, href: '#/whatsapp',
        tooltip: 'WhatsApp users — anyone messaging your business number. Routed by phone to T-800 or HandyMan.',
      },
    ],
    1300
  ),
]

const labels: Array<{
  id: string
  x: number
  y: number
  label: string
  caption?: string
}> = [
  { id: 'lbl-you', x: CX - 720, y: 36, label: 'YOU', caption: 'the one writing prompts' },
  { id: 'lbl-ws', x: CX - 720, y: 216, label: 'WORKSTATION', caption: 'your laptop' },
  { id: 'lbl-gh', x: CX - 720, y: 396, label: 'GITHUB', caption: 'basmanab88-lab · source of truth' },
  { id: 'lbl-gh-core', x: CX - 720, y: 432, label: 'Core / Brain', caption: 'knowledge, not products' },
  { id: 'lbl-gh-shared', x: CX - 720, y: 582, label: 'Shared module', caption: 'consumed at runtime' },
  { id: 'lbl-gh-prod', x: CX - 720, y: 732, label: 'Product repos' },
  { id: 'lbl-cloud', x: CX - 720, y: 906, label: 'CLOUD HOSTING', caption: 'where products actually run' },
  { id: 'lbl-ext', x: CX - 720, y: 1086, label: 'EXTERNAL APIs', caption: 'what the products call' },
  { id: 'lbl-users', x: CX - 720, y: 1266, label: 'END USERS', caption: 'who talks to your products' },
]

// Zone backgrounds (rendered as huge "group" nodes behind everything)
const zones: Array<{
  id: string
  x: number
  y: number
  width: number
  height: number
  category: Category
}> = [
  { id: 'zone-you',   x: CX - 760, y: 24,   width: 1520, height: 140, category: 'user' },
  { id: 'zone-ws',    x: CX - 760, y: 204,  width: 1520, height: 140, category: 'core' },
  { id: 'zone-gh',    x: CX - 760, y: 384,  width: 1520, height: 480, category: 'product' },
  { id: 'zone-cloud', x: CX - 760, y: 894,  width: 1520, height: 160, category: 'cloud' },
  { id: 'zone-ext',   x: CX - 760, y: 1074, width: 1520, height: 160, category: 'ext' },
  { id: 'zone-users', x: CX - 760, y: 1254, width: 1520, height: 140, category: 'enduser' },
]

export const overviewNodes: Node[] = [
  // Zones (background) first, so they render below
  ...zones.map(
    (z): Node => ({
      id: z.id,
      type: 'zone',
      position: { x: z.x, y: z.y },
      data: { category: z.category, width: z.width, height: z.height } as unknown as SystemNodeData,
      draggable: false,
      selectable: false,
      style: { width: z.width, height: z.height, pointerEvents: 'none' },
      zIndex: 0,
    })
  ),
  // Section + row labels
  ...labels.map(
    (l): Node => ({
      id: l.id,
      type: 'sectionLabel',
      position: { x: l.x, y: l.y },
      data: { label: l.label, caption: l.caption } as LabelNodeData,
      draggable: false,
      selectable: false,
      style: { pointerEvents: 'none' },
      zIndex: 1,
    })
  ),
  // Cards
  ...cards.map(
    (c): Node => ({
      id: c.id,
      type: 'system',
      position: { x: c.x, y: c.y },
      data: {
        label: c.label,
        sub: c.sub,
        category: c.category,
        tooltip: c.tooltip,
        href: c.href,
      } as SystemNodeData,
      draggable: false,
      zIndex: 10,
    })
  ),
]

// Edges: focused, labeled only on the meaningful inter-zone hops.
export const overviewEdges: Edge[] = [
  // Layer 1: Basman → workstation
  { id: 'e1', source: 'basman', target: 'cc', label: 'types prompts', type: 'smoothstep' },

  // Layer 2: workstation → GitHub (just two main lines: code + sync)
  { id: 'e2-code', source: 'cc', target: 't800', label: 'git push', type: 'smoothstep' },
  { id: 'e2-sync', source: 'hooks', target: 'cfg', label: 'auto-sync', type: 'smoothstep' },

  // Layer 3: products → cloud (one consolidated label)
  { id: 'e3-deploy', source: 't800', target: 'supshared', label: 'auto-deploy on push', type: 'smoothstep' },
  { id: 'e3-cmos', source: 'cmos', target: 'supcm', type: 'smoothstep' },
  { id: 'e3-vercel', source: 't800', target: 'vercel', type: 'smoothstep' },

  // Layer 4: cloud → external (representative lines, not exhaustive)
  { id: 'e4-claude', source: 'supshared', target: 'claude', label: 'calls', type: 'smoothstep' },
  { id: 'e4-wa', source: 'supshared', target: 'wa', type: 'smoothstep' },
  { id: 'e4-mmt', source: 'mmt', target: 'bn', type: 'smoothstep' },

  // Layer 5: external/cloud → users
  { id: 'e5-wa', source: 'wa', target: 'waapp', label: 'serves users', type: 'smoothstep' },
  { id: 'e5-web', source: 'vercel', target: 'web', type: 'smoothstep' },

  // calendar-skills consumed (dashed)
  {
    id: 'e-cs-t800', source: 'cs', target: 't800',
    type: 'smoothstep', animated: true,
    style: { strokeDasharray: '4 4', opacity: 0.55, stroke: '#f0b86e' },
    label: 'imported at runtime',
  },
  {
    id: 'e-cs-hm', source: 'cs', target: 'hm',
    type: 'smoothstep', animated: true,
    style: { strokeDasharray: '4 4', opacity: 0.55, stroke: '#f0b86e' },
  },
]

export { NODE_W, NODE_H }
