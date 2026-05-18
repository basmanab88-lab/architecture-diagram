import { useMemo, useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
} from '@xyflow/react'

import { SystemNode } from './system-node'
import { ZoneNode } from './zone-node'
import { SectionLabelNode } from './section-label-node'
import { overviewNodes, overviewEdges } from '@/data/overview-graph'

type Props = {
  onNavigate: (id: string) => void
}

export function OverviewCanvas({ onNavigate }: Props) {
  const nodeTypes = useMemo(
    () => ({
      system: SystemNode,
      zone: ZoneNode,
      sectionLabel: SectionLabelNode,
    }),
    []
  )

  const handleNodeClick = useCallback(
    (_e: React.MouseEvent, node: Node) => {
      const href = (node.data as { href?: string })?.href
      if (typeof href === 'string' && href.startsWith('#/')) {
        const id = href.slice(2)
        onNavigate(id)
      }
    },
    [onNavigate]
  )

  return (
    <ReactFlow
      nodes={overviewNodes}
      edges={overviewEdges}
      nodeTypes={nodeTypes}
      onNodeClick={handleNodeClick}
      fitView
      fitViewOptions={{ padding: 0.12, maxZoom: 1.1, minZoom: 0.2 }}
      minZoom={0.1}
      maxZoom={4}
      nodesDraggable={false}
      nodesConnectable={false}
      edgesFocusable={false}
      panOnScroll
      panOnScrollSpeed={1}
      proOptions={{ hideAttribution: true }}
      defaultEdgeOptions={{
        type: 'smoothstep',
        style: { stroke: '#2a3450', strokeWidth: 1.25, opacity: 0.7 },
        labelStyle: { fill: '#8a93a8', fontSize: 10, fontWeight: 500, fontFamily: 'Inter' },
        labelBgStyle: { fill: '#0a0d12', stroke: '#232a3d', strokeWidth: 1, fillOpacity: 0.95 },
        labelBgPadding: [4, 3] as [number, number],
        labelBgBorderRadius: 3,
      }}
    >
      <Background gap={24} size={1} color="#1a2030" />
      <Controls
        position="bottom-right"
        showInteractive={false}
      />
      <MiniMap
        position="top-right"
        zoomable
        pannable
        ariaLabel="Mini map"
        maskColor="rgba(10, 13, 18, 0.7)"
        nodeColor={(n) => {
          if (n.type !== 'system') return 'transparent'
          const cat = (n.data as { category?: string }).category
          const colors: Record<string, string> = {
            user: '#7aa2ff',
            core: '#b48cff',
            shared: '#f0b86e',
            product: '#7aa2ff',
            cloud: '#6cd28a',
            ext: '#c98cff',
            enduser: '#e0716b',
          }
          return colors[cat ?? ''] ?? '#5d667c'
        }}
        nodeStrokeWidth={0}
      />
    </ReactFlow>
  )
}
