import { Circle, MapContainer, Polygon, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import Section from '../ui/Section'
import { SurfaceCard } from '../ui/Cards'

const center: LatLngExpression = [28.619, 77.228]

const regions = [
  {
    name: 'Adequate Care',
    score: 78,
    color: '#15803d',
    glowClass: 'map-glow-green',
    center: [28.602, 77.185] as LatLngExpression,
    positions: [
      [28.592, 77.156],
      [28.621, 77.157],
      [28.633, 77.189],
      [28.618, 77.216],
      [28.591, 77.211],
    ] as LatLngExpression[],
  },
  {
    name: 'Moderate Coverage',
    score: 56,
    color: '#eab308',
    glowClass: 'map-glow-yellow',
    center: [28.632, 77.243] as LatLngExpression,
    positions: [
      [28.618, 77.214],
      [28.652, 77.214],
      [28.666, 77.252],
      [28.638, 77.274],
      [28.612, 77.249],
    ] as LatLngExpression[],
  },
  {
    name: 'Critical Access Gap',
    score: 32,
    color: '#dc2626',
    glowClass: 'map-glow-red',
    center: [28.666, 77.186] as LatLngExpression,
    positions: [
      [28.646, 77.15],
      [28.686, 77.162],
      [28.696, 77.198],
      [28.667, 77.222],
      [28.639, 77.198],
    ] as LatLngExpression[],
  },
]

export default function MapPreview() {
  return (
    <Section
      id="coverage-map"
      eyebrow="Visual Intelligence"
      title="Identify healthcare gaps instantly"
      description="A realistic map view highlights care quality by district, letting teams prioritize interventions with spatial context and confidence."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <SurfaceCard className="overflow-hidden p-0">
          <div className="relative min-h-[540px] overflow-hidden rounded-[28px]">
            <MapContainer center={center} zoom={12} scrollWheelZoom={false} zoomControl={false} className="h-[540px] w-full">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              />
              {regions.map((region) => (
                <Circle
                  key={`${region.name}-glow`}
                  center={region.center}
                  radius={2600}
                  pathOptions={{
                    color: region.color,
                    opacity: 0,
                    fillColor: region.color,
                    fillOpacity: 0.12,
                  }}
                  className={`map-glow ${region.glowClass}`}
                />
              ))}
              {regions.map((region) => (
                <Polygon
                  key={region.name}
                  positions={region.positions}
                  pathOptions={{
                    color: '#f8fafc',
                    weight: 2,
                    fillColor: region.color,
                    fillOpacity: 0.62,
                  }}
                />
              ))}
            </MapContainer>

            <SurfaceCard className="absolute left-6 top-6 z-[500] max-w-xs">
              <p className="text-sm font-semibold text-slate-900">Coverage Filters</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">Urban and peri-urban districts</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">AI severity overlay enabled</div>
              </div>
              <button className="mt-4 w-full rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                Refresh View
              </button>
            </SurfaceCard>

            <div className="absolute bottom-6 right-6 z-[500] rounded-[22px] border border-slate-200 bg-white/94 px-5 py-4 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Care index legend</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-700 shadow-[0_0_18px_rgba(22,163,74,0.45)]" />
                  Good
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_18px_rgba(234,179,8,0.45)]" />
                  Moderate
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,0.45)]" />
                  Critical
                </div>
              </div>
            </div>
          </div>
        </SurfaceCard>

        <div className="grid gap-6">
          <SurfaceCard>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-600">Active selection</p>
            <h3 className="mt-3 text-4xl font-semibold text-slate-900">Greater Metro</h3>
            <p className="mt-2 text-slate-500">District Sector 04-A</p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-6xl font-semibold tracking-tight text-slate-900">42</span>
              <span className="mb-2 text-lg font-medium text-slate-400">/100</span>
              <span className="mb-3 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Moderate
              </span>
            </div>
            <div className="mt-6 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[42%] rounded-full bg-gradient-to-r from-sky-500 to-teal-400" />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Hospitals</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">3</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Catchment</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">12.4k</p>
              </div>
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <p className="text-sm font-semibold text-slate-900">AI Recommendation</p>
            <p className="mt-4 leading-8 text-slate-600">
              Current data indicates elevated mortality risk in Sector 04-A. Recommend immediate investment in
              specialized cardiology equipment and telehealth routing to bridge the 14km specialist access gap.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Confidence 94%</span>
              <span className="text-sm font-semibold text-sky-600">View roadmap</span>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </Section>
  )
}
