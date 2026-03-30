import { Circle, MapContainer, Polygon, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import { quickActions } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

const regionCenter: LatLngExpression = [28.677, 77.191]
const regionShape: LatLngExpression[] = [
  [28.653, 77.156],
  [28.694, 77.168],
  [28.708, 77.206],
  [28.678, 77.232],
  [28.648, 77.202],
]

export default function QuickActionsPanel() {
  return (
    <SurfaceCard className="p-6">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Quick Actions</h3>
      <div className="mt-6 space-y-4">
        {quickActions.map((action, index) => (
          <button
            key={action}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-sm"
            type="button"
          >
            {action}
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${index === 0 ? 'bg-sky-100 text-sky-600' : index === 1 ? 'bg-amber-100 text-amber-600' : 'bg-teal-100 text-teal-600'}`}>
              +
            </span>
          </button>
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-[24px] bg-slate-950 p-4 text-white">
        <div className="overflow-hidden rounded-[18px] border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <MapContainer center={regionCenter} zoom={11} scrollWheelZoom={false} zoomControl={false} dragging={false} doubleClickZoom={false} attributionControl={false} className="h-28 w-full">
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
            <Circle
              center={regionCenter}
              radius={2600}
              pathOptions={{ color: '#38bdf8', opacity: 0, fillColor: '#38bdf8', fillOpacity: 0.22 }}
              className="map-glow"
            />
            <Polygon
              positions={regionShape}
              pathOptions={{
                color: '#0f172a',
                weight: 1.5,
                fillColor: '#0f172a',
                fillOpacity: 0.34,
              }}
            />
            <Circle
              center={regionCenter}
              radius={520}
              pathOptions={{ color: '#0284c7', weight: 2.5, fillColor: '#38bdf8', fillOpacity: 0.28 }}
            />
          </MapContainer>
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-200">Region 4 Oversight</p>
        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Active monitoring</p>
      </div>
    </SurfaceCard>
  )
}
