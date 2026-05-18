import { ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Crumb = { label: string; id?: string }

type Props = {
  crumbs?: Crumb[]
  title: string
  subtitle?: string
  onNavigate?: (id: string) => void
  repoHref?: string
  liveHref?: string
}

export function PageHeader({ crumbs, title, subtitle, onNavigate, repoHref, liveHref }: Props) {
  return (
    <header className="flex items-start justify-between gap-6 border-b border-border bg-bg/60 px-7 py-5 backdrop-blur-sm">
      <div className="min-w-0">
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-[11px] uppercase tracking-[0.08em] text-text-faint mb-1.5">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.id && onNavigate ? (
                  <button
                    onClick={() => onNavigate(c.id!)}
                    className="hover:text-text-dim transition-colors"
                  >
                    {c.label}
                  </button>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="size-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}
        <h2 className="text-[22px] font-semibold tracking-tight text-text leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 max-w-[760px] text-[13.5px] text-text-dim leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {repoHref && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-border bg-surface text-text-dim hover:bg-surface-elev hover:text-text"
          >
            <a href={repoHref} target="_blank" rel="noopener noreferrer">
              repo
              <ExternalLink className="size-3" />
            </a>
          </Button>
        )}
        {liveHref && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-border bg-surface text-text-dim hover:bg-surface-elev hover:text-text"
          >
            <a href={liveHref} target="_blank" rel="noopener noreferrer">
              live
              <ExternalLink className="size-3" />
            </a>
          </Button>
        )}
      </div>
    </header>
  )
}
