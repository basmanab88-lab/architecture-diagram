import { useState } from 'react'
import { ReactFlowProvider } from '@xyflow/react'

import { AppSidebar } from '@/components/app-sidebar'
import { PageHeader } from '@/components/page-header'
import { OverviewCanvas } from '@/components/canvas/overview-canvas'
import { useHashRoute } from '@/hooks/use-hash-route'

export default function App() {
  const { route, navigate } = useHashRoute()
  const [search, setSearch] = useState('')

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bg">
      <AppSidebar
        activeRoute={route}
        onNavigate={navigate}
        search={search}
        onSearchChange={setSearch}
      />
      <main className="flex flex-1 flex-col overflow-hidden">
        {route === 'overview' && (
          <>
            <PageHeader
              crumbs={[{ label: 'Map' }]}
              title="Overview"
              subtitle="Every system in Basman's product factory. Click any box to drill into it. Scroll to zoom, drag to pan."
            />
            <div className="flex-1 min-h-0">
              <ReactFlowProvider>
                <OverviewCanvas onNavigate={navigate} />
              </ReactFlowProvider>
            </div>
          </>
        )}
        {route !== 'overview' && (
          <>
            <PageHeader
              crumbs={[{ label: 'Map', id: 'overview' }, { label: route }]}
              title={route}
              subtitle="This drill-down page is being rebuilt. The Overview canvas is live."
              onNavigate={navigate}
            />
            <div className="flex flex-1 items-center justify-center text-text-faint text-sm">
              Coming up next: drill-down content for "{route}"
            </div>
          </>
        )}
      </main>
    </div>
  )
}
