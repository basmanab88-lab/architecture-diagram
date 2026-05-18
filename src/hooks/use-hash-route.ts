import { useEffect, useState } from 'react'

function readHash(): string {
  if (typeof window === 'undefined') return 'overview'
  const h = window.location.hash.replace(/^#\/?/, '')
  return h || 'overview'
}

export function useHashRoute() {
  const [route, setRoute] = useState<string>(readHash())
  useEffect(() => {
    const onChange = () => setRoute(readHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  const navigate = (id: string) => {
    window.location.hash = `#/${id}`
  }
  return { route, navigate }
}
