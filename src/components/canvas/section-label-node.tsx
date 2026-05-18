import type { NodeProps } from '@xyflow/react'
import type { LabelNodeData } from '@/data/overview-graph'

export function SectionLabelNode({ data }: NodeProps) {
  const d = data as unknown as LabelNodeData
  return (
    <div className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-text-faint">
        {d.label}
      </span>
      {d.caption && (
        <span className="text-[12px] text-text-faint/70 normal-case tracking-normal">
          · {d.caption}
        </span>
      )}
    </div>
  )
}
