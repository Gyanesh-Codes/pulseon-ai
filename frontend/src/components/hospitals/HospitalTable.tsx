import { hospitalRows } from '../../data/hospitals'

const toneMap = {
  green: 'bg-emerald-600',
  red: 'bg-red-600',
  sky: 'bg-sky-500',
}

export default function HospitalTable() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_24px_80px_-54px_rgba(15,23,42,0.25)]">
      <div className="grid grid-cols-[1.8fr_1fr_1.15fr_1.15fr_1.2fr_0.8fr_0.7fr] gap-4 border-b border-slate-100 bg-sky-50/70 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        <span>Facility Name</span>
        <span>City Sector</span>
        <span>Clinical Specialties</span>
        <span>Core Equipment</span>
        <span>Load Capacity</span>
        <span>Score</span>
        <span>Actions</span>
      </div>
      {hospitalRows.map((row) => (
        <div key={row.id} className="grid grid-cols-[1.8fr_1fr_1.15fr_1.15fr_1.2fr_0.8fr_0.7fr] gap-4 border-b border-slate-100 px-5 py-5 text-sm last:border-b-0">
          <div>
            <p className="text-lg font-semibold text-slate-950">{row.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">ID: {row.id}</p>
          </div>
          <div className="text-slate-600">{row.city}</div>
          <div className="space-y-2">
            {row.specialties.map((specialty) => (
              <span key={specialty} className="mr-2 inline-flex rounded-lg bg-sky-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                {specialty}
              </span>
            ))}
          </div>
          <div className="text-slate-600">{row.equipment}</div>
          <div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className={`h-2 rounded-full ${toneMap[row.loadTone as keyof typeof toneMap]}`} style={{ width: `${row.loadValue}%` }} />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{row.load}</p>
          </div>
          <div className="flex items-center">
            <span className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">{row.score}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <button className="transition hover:text-sky-700" type="button">◉</button>
            <button className="transition hover:text-sky-700" type="button">⌂</button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between px-5 py-4 text-sm text-slate-500">
        <p>Showing 4 of 124 medical facilities</p>
        <div className="flex items-center gap-3">
          <button className="text-slate-400" type="button">‹</button>
          <span className="rounded-lg bg-sky-600 px-3 py-1 text-white">1</span>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="text-slate-400" type="button">›</button>
        </div>
      </div>
    </div>
  )
}
