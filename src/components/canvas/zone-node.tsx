import type { NodeProps } from '@xyflow/react'
import { cn } from '@/lib/utils'
import type { Category } from '@/data/overview-graph'

const zoneByCategory: Record<Category, string> = {
  user: 'bg-accent/[0.04] border-accent/15',
  core: 'bg-core/[0.04] border-core/15',
  shared: 'bg-shared/[0.04] border-shared/15',
  product: 'bg-product/[0.025] border-product/12',
  cloud: 'bg-good/[0.04] border-good/15',
  ext: 'bg-ext/[0.035] border-ext/15',
  enduser: 'bg-bad/[0.035] border-bad/15',
}

export function ZoneNode({ data }: NodeProps) {
  const d = data as unknown as { category: Category; width: number; height: number }
  return (
    <div
      style={{ width: d.width, height: d.height }}
      className={cn(
        'rounded-[18px] border',
        zoneByCategory[d.category]
      )}
    />
  )
}
