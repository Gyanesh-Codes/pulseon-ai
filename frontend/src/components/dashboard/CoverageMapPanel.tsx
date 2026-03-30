import { Circle, MapContainer, Polygon, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import { dashboardMapRegions } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

const center: LatLngExpression = [28.626, 77.224]

export default function CoverageMapPanel() {
  const activeRegion = dashboardMapRegions[2]

  return (
    <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
      <SurfaceCard className="overflow-hidden p-0">
        <div className="relative h-[520px] overflow-hidden rounded-[28px]">
          <MapContainer center={center} zoom={11} scrollWheelZoom={false} zoomControl={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors &copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {dashboardMapRegions.map((region) => (
              <Circle
                key={`${region.name}-glow`}
                center={region.center}
                radius={3000}
                pathOptions={{ color: region.color, opacity: 0, fillColor: region.color, fillOpacity: 0.14 }}
                className="map-glow"
              />
            ))}
            {dashboardMapRegions.map((region) => (
              <Polygon
                key={region.name}
                positions={region.positions}
                pathOptions={{
                  color: '#e2e8f0',
                  weight: 2,
                  fillColor: region.color,
                  fillOpacity: 0.6,
                }}
              />
            ))}
          </MapContainer>

          <div className="absolute left-6 top-6 z-[500] rounded-[22px] bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Region severity</p>
            <div className="mt-3 flex gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-green-600" /> Good</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-yellow-500" /> Moderate</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-600" /> Critical</span>
            </div>
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-6">
        <SurfaceCard className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">Active selection</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{activeRegion.name}</h3>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-6xl font-semibold tracking-tight text-slate-950">{activeRegion.score}</span>
            <span className="mb-2 text-lg text-slate-400">/100</span>
            <span className="mb-3 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
              Critical
            </span>
          </div>
          <div className="mt-6 h-2 rounded-full bg-slate-100">
            <div className="h-2 w-[34%] rounded-full bg-gradient-to-r from-red-500 to-amber-400" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Hospitals</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{activeRegion.hospitals}</p>
            </div>
            <div className="rounded-[22px] bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Catchment</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">12.4k</p>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">AI Recommendation</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Current data indicates high mortality risk in the Northern Gap Cluster. Immediate investment in specialized
            cardiology equipment and telehealth routing is recommended to close the specialist access gap.
          </p>
          <div className="mt-6 rounded-[22px] bg-slate-950 px-5 py-4 text-white">
            <p className="text-sm font-semibold">Confidence 94%</p>
            <p className="mt-2 text-sm text-slate-300">AI recommendation sourced from regional capacity uploads and anomaly review.</p>
          </div>
        </SurfaceCard>
      </div>
    </div>
  )
}
