import { Circle, MapContainer, Polygon, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import { citedSources, linkedRecords } from '../../data/insights'

const zoneCenter: LatLngExpression = [28.662, 77.214]
const zoneShape: LatLngExpression[] = [
  [28.646, 77.186],
  [28.678, 77.194],
  [28.689, 77.222],
  [28.663, 77.242],
  [28.639, 77.224],
]

export default function ContextPanel() {
  return (
    <aside className="flex h-full min-h-[760px] flex-col bg-white/75">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Clinical Context</h2>
        <p className="mt-2 text-sm text-slate-500">Sourced from current thread</p>
      </div>
      <div className="flex-1 space-y-8 overflow-y-auto px-5 py-5">
        <section>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Cited Sources & Data</p>
          <div className="mt-4 space-y-3">
            {citedSources.map((source) => (
              <div key={source.id} className="flex gap-4 rounded-[22px] border border-slate-100 bg-white px-4 py-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.2)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-semibold text-sky-700">
                  {source.id}
                </div>
                <div>
                  <p className="font-semibold leading-6 text-slate-900">{source.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">{source.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Regional Comparison</p>
          <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_18px_40px_-34px_rgba(15,23,42,0.2)]">
            <div className="relative h-44">
              <MapContainer center={zoneCenter} zoom={11} scrollWheelZoom={false} zoomControl={false} dragging={false} doubleClickZoom={false} attributionControl={false} className="h-full w-full">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                <Circle
                  center={zoneCenter}
                  radius={2600}
                  pathOptions={{ color: '#0284c7', opacity: 0, fillColor: '#38bdf8', fillOpacity: 0.18 }}
                  className="map-glow"
                />
                <Polygon
                  positions={zoneShape}
                  pathOptions={{
                    color: '#0f172a',
                    weight: 1.8,
                    fillColor: '#1e293b',
                    fillOpacity: 0.36,
                  }}
                />
                <Circle
                  center={zoneCenter}
                  radius={580}
                  pathOptions={{ color: '#0284c7', weight: 3, fillColor: '#38bdf8', fillOpacity: 0.14 }}
                />
              </MapContainer>
              <div className="absolute bottom-4 right-4 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-md">
                Zone A4 Active
              </div>
            </div>
            <div className="px-4 py-3 text-sm leading-6 text-slate-500">
              Correlating metabolic drift with regional environmental factors in Area: Zone-A4.
            </div>
          </div>
        </section>

        <section>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Linked Medical Records</p>
          <div className="mt-4 space-y-3">
            {linkedRecords.map((record) => (
              <div key={record.title} className="flex items-start gap-3 rounded-[22px] border border-slate-100 bg-white px-4 py-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.2)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">⌘</div>
                <div>
                  <p className="font-semibold text-slate-900">{record.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{record.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
