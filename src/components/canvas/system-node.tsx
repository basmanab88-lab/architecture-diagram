import { Handle, Position, type NodeProps } from '@xyflow/react'
import { cn } from '@/lib/utils'
import type { SystemNodeData, Category } from '@/data/overview-graph'

const borderByCategory: Record<Category, string> = {
  user: 'border-accent',
  core: 'border-core',
  shared: 'border-shared',
  product: 'border-product',
  cloud: 'border-cloud',
  ext: 'border-ext',
  enduser: 'border-enduser',
}

const fillByCategory: Record<Category, string> = {
  user: 'bg-[#141d31]',
  core: 'bg-[#1c1730]',
  shared: 'bg-[#221a14]',
  product: 'bg-[#141a2a]',
  cloud: 'bg-[#142019]',
  ext: 'bg-[#1c1525]',
  enduser: 'bg-[#1f151a]',
}

export function SystemNode({ data }: NodeProps) {
  const d = data as unknown as SystemNodeData
  return (
    <div
      title={d.tooltip}
      className={cn(
        'group relative w-[240px] h-[88px] rounded-[10px] border-2 px-4 py-2.5 flex flex-col justify-center cursor-pointer',
        'transition-all duration-150 ease-out',
        'hover:scale-[1.025] hover:shadow-[0_8px_22px_-4px_rgba(122,162,255,0.35)] hover:z-20',
        borderByCategory[d.category],
        fillByCategory[d.category]
      )}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0 !pointer-events-none" />
      <Handle type="source" position={Position.Bottom} className="!opacity-0 !pointer-events-none" />
      <Handle type="target" position={Position.Left} className="!opacity-0 !pointer-events-none" />
      <Handle type="source" position={Position.Right} className="!opacity-0 !pointer-events-none" />

      <div className="text-[15.5px] font-semibold tracking-[-0.005em] text-text leading-[1.15]">
        {d.label}
      </div>
      <div className="text-[12px] text-text-dim leading-tight mt-[5px]">
        {d.sub}
      </div>
    </div>
  )
}
