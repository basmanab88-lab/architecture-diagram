export type Category = 'meta' | 'core' | 'shared' | 'product' | 'tool' | 'infra'

export type NavItem = {
  id: string
  label: string
  category: Category
  sub?: boolean
}

export const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: 'Map',
    items: [
      { id: 'overview', label: 'Overview', category: 'meta' },
      { id: 'operation', label: 'The Operation', category: 'meta' },
    ],
  },
  {
    title: 'Core / Brain',
    items: [
      { id: 'basman-brain', label: 'basman-brain', category: 'core' },
      { id: 'claude-config', label: 'claude-config', category: 'core' },
    ],
  },
  {
    title: 'Shared',
    items: [{ id: 'calendar-skills', label: 'calendar-skills', category: 'shared' }],
  },
  {
    title: 'Products',
    items: [
      { id: 't-800', label: 'T-800', category: 'product' },
      { id: 'handyman', label: 'HandyMan', category: 'product' },
      { id: 'career-muse-os', label: 'Career Muse OS', category: 'product' },
      { id: 'money-machine', label: 'Money Machine', category: 'product' },
    ],
  },
  {
    title: 'Tools',
    items: [{ id: 'tools', label: 'Remotion + yt-helper', category: 'tool' }],
  },
  {
    title: 'Infrastructure',
    items: [
      { id: 'supabase', label: 'Supabase', category: 'infra' },
      { id: 'supabase-shared', label: 'shared (T-800 + HandyMan)', category: 'infra', sub: true },
      { id: 'supabase-career-muse', label: 'career-muse project', category: 'infra', sub: true },
      { id: 'vercel', label: 'Vercel', category: 'infra' },
      { id: 'whatsapp', label: 'WhatsApp Cloud', category: 'infra' },
      { id: 'google', label: 'Google APIs', category: 'infra' },
      { id: 'anthropic', label: 'Anthropic Claude', category: 'infra' },
      { id: 'cerebras', label: 'Cerebras', category: 'infra' },
      { id: 'binance', label: 'Binance', category: 'infra' },
    ],
  },
]

export const categoryDotColor: Record<Category, string> = {
  meta: 'bg-text-faint',
  core: 'bg-core',
  shared: 'bg-shared',
  product: 'bg-product',
  tool: 'bg-good',
  infra: 'bg-ext',
}
