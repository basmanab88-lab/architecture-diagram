import { Search, Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { navGroups, categoryDotColor, type Category } from '@/data/portfolio'

type Props = {
  activeRoute: string
  onNavigate: (id: string) => void
  search: string
  onSearchChange: (s: string) => void
}

export function AppSidebar({ activeRoute, onNavigate, search, onSearchChange }: Props) {
  return (
    <aside className="flex h-full w-[268px] flex-col border-r border-border bg-[#080b10]">
      {/* Brand */}
      <div className="px-5 pt-6 pb-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-md border border-border-strong bg-surface-elev">
            <Boxes className="size-3.5 text-accent" />
          </div>
          <div>
            <h1 className="text-[14px] font-semibold tracking-tight text-text leading-tight">
              Product Factory
            </h1>
            <p className="text-[10.5px] text-text-faint leading-tight mt-0.5">
              Basman · architecture map
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 pt-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-text-faint" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search…"
            className="h-9 bg-surface border-border pl-8 text-[13px] text-text placeholder:text-text-faint focus-visible:ring-1 focus-visible:ring-accent"
          />
        </div>
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1">
        <nav className="px-2 py-3">
          {navGroups.map((group) => (
            <div key={group.title} className="mb-3">
              <div className="px-3 pt-2 pb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-text-faint">
                {group.title}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = activeRoute === item.id
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                          'group flex w-full items-center gap-2.5 rounded-md px-3 py-[7px] text-[13px] transition-all duration-100',
                          item.sub && 'pl-7',
                          active
                            ? 'bg-accent/12 text-accent border border-accent/30 shadow-[inset_0_0_0_1px_rgba(122,162,255,0.04)]'
                            : 'text-text-dim hover:bg-white/[0.04] hover:text-text border border-transparent hover:border-border'
                        )}
                      >
                        <span
                          className={cn(
                            'size-2 shrink-0 rounded-full ring-1 ring-inset ring-black/30',
                            categoryDotColor[item.category as Category]
                          )}
                        />
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
