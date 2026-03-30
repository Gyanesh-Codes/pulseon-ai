import type { MapRegion } from '../../data/maps'

export default function RegionCard({ region }: { region: MapRegion }) {
  const riskTone =
    region.risk === 'Critical'
      ? 'bg-red-100 text-red-700'
      : region.risk === 'Moderate'
        ? 'bg-amber-100 text-amber-700'
        : 'bg-emerald-100 text-emerald-700'

  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Active Selection</p>
      <h2 className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">{region.name}</h2>
      <p className="mt-2 text-slate-500">{region.sector}</p>
      <div className="mt-6 flex items-end gap-3">
        <span className="text-6xl font-semibold tracking-tight text-slate-950">{region.score}</span>
        <span className="mb-2 text-xl text-slate-400">/100</span>
        <span className={`mb-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${riskTone}`}>{region.risk}</span>
      </div>
      <div className="mt-6 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400" style={{ width: `${region.score}%` }} />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Hospitals</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{region.hospitals}</p>
        </div>
        <div className="rounded-[24px] bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Catchment</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{region.catchment}</p>
        </div>
      </div>
    </>
  )
}
