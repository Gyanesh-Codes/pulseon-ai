import { Circle, Polygon, MapContainer, TileLayer, Tooltip, ZoomControl } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import { SurfaceCard } from '../ui/Cards'
import { type MapRegion } from '../../data/maps'

const mapCenter: LatLngExpression = [28.649, 77.222]

type MapComponentProps = {
  loading: boolean
  regions: MapRegion[]
  selectedRegion: MapRegion
  onSelect: (id: string) => void
}

export default function MapComponent({ loading, regions, selectedRegion, onSelect }: MapComponentProps) {
  return (
    <div className="relative h-[760px] overflow-hidden rounded-[30px]">
      {loading ? <div className="shimmer absolute inset-0 z-[600] rounded-[30px] bg-slate-200/70" /> : null}
      <MapContainer center={mapCenter} zoom={11} zoomControl={false} scrollWheelZoom={false} className="h-full w-full">
        <ZoomControl position="bottomright" />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        {regions.map((region) => (
          <Circle
            key={`${region.id}-glow`}
            center={region.center}
            radius={2600}
            pathOptions={{ color: region.color, opacity: 0, fillColor: region.color, fillOpacity: 0.16 }}
            className="map-glow"
          />
        ))}
        {regions.map((region) => (
          <Polygon
            key={region.id}
            eventHandlers={{ click: () => onSelect(region.id) }}
            pathOptions={{
              color: selectedRegion.id === region.id ? '#0f172a' : '#e2e8f0',
              weight: selectedRegion.id === region.id ? 2.6 : 1.8,
              fillColor: region.color,
              fillOpacity: selectedRegion.id === region.id ? 0.74 : 0.58,
            }}
            positions={region.positions}
          >
            <Tooltip sticky>
              <div className="text-sm">
                <div className="font-semibold">{region.name}</div>
                <div>Score: {region.score}</div>
                <div>Risk: {region.risk}</div>
              </div>
            </Tooltip>
          </Polygon>
        ))}
        <Circle
          center={selectedRegion.center}
          radius={620}
          pathOptions={{ color: '#0284c7', weight: 3, fillColor: '#38bdf8', fillOpacity: 0.2 }}
          className="selected-pulse"
        />
      </MapContainer>

      <SurfaceCard className="absolute left-8 top-8 z-[500] w-[332px] bg-white/88 p-7">
        <p className="text-lg font-semibold text-slate-950">Map Filters</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Region Type</p>
            <div className="mt-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">All Urban Districts</div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Score Range</p>
            <input className="mt-3 w-full accent-sky-600" defaultValue={60} max={100} min={0} type="range" />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
          <button className="w-full rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200" type="button">
            Apply Parameters
          </button>
        </div>
      </SurfaceCard>

      <div className="absolute left-8 top-[356px] z-[500] w-[228px] rounded-[24px] bg-sky-800 px-6 py-6 text-white shadow-[0_24px_60px_-36px_rgba(3,105,161,0.8)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">Global Index</p>
        <p className="mt-3 text-5xl font-semibold tracking-tight">64.2</p>
        <p className="mt-2 text-sm text-sky-100">+2.4% from last quarter</p>
      </div>

      <div className="absolute bottom-6 right-6 z-[500] rounded-[22px] border border-slate-200 bg-white/92 px-5 py-4 shadow-lg backdrop-blur">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Care Index Legend</p>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-green-600" /> Adequate Care (&gt;75)</div>
          <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-yellow-400" /> Moderate Care (40-75)</div>
          <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-red-600" /> Medical Desert (&lt;40)</div>
        </div>
      </div>
    </div>
  )
}
