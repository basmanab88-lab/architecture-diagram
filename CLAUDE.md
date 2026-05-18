# architecture-diagram — Project Instructions

Interactive architecture diagram of Basman's product factory. Live at https://basmanab88-lab.github.io/architecture-diagram/

## Frontend & Design Rules

1. Use shadcn/ui components only. Never write custom Tailwind for anything that exists in shadcn. If a component doesn't exist, install it via shadcn CLI before building from scratch.
2. After every UI change, use the Playwright MCP to open the page, take a screenshot, and critique it before declaring the task done. List what's wrong, then fix the top 3 issues.
3. One component at a time. Never build a full page in one shot. Build, screenshot, critique, fix, next.
4. Before writing any JSX, write a short design spec: palette (hex codes), typography scale, spacing scale, hover/focus/disabled states. Show it to the user before coding.
5. Taste defaults: No gradient backgrounds. No generic emoji icons (use lucide-react). Monospace numerals in tables. 4px/8px spacing grid. Subtle borders over heavy shadows.
6. When the user provides a screenshot reference, match it precisely - colors, spacing, typography. Don't "interpret".
7. No AI-looking defaults: no purple-to-pink gradients, no sparkle icons, no generic "hero + 3 feature cards" layouts unless explicitly asked.
