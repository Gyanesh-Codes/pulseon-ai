import { useEffect, useMemo, useState } from 'react'
import AppShell from '../components/layout/AppShell'
import MapComponent from '../components/maps/MapComponent'
import SidebarPanel from '../components/maps/SidebarPanel'
import { mapRegions } from '../data/maps'

export default function MapsPage() {
  const [selectedId, setSelectedId] = useState(mapRegions[0].id)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  const selectedRegion = useMemo(
    () => mapRegions.find((region) => region.id === selectedId) ?? mapRegions[0],
    [selectedId],
  )

  return (
    <AppShell>
      <section className="rounded-[34px] border border-white/70 bg-white/82 p-4 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <MapComponent loading={loading} onSelect={setSelectedId} regions={mapRegions} selectedRegion={selectedRegion} />
          <SidebarPanel region={selectedRegion} />
        </div>
      </section>
    </AppShell>
  )
}
