import { useMemo, useState } from 'react'
import { monthlyLabels, monthlyPoints, quarterlyLabels, quarterlyPoints } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

type Mode = 'monthly' | 'quarterly'

function buildSmoothPath(points: number[]) {
  const width = 442
  const height = 180
  const left = 28
  const top = 40
  const max = 4000
  const step = points.length > 1 ? width / (points.length - 1) : width

  const coords = points.map((point, index) => ({
    x: left + index * step,
    y: top + (point / max) * height,
  }))

  if (coords.length < 2) {
    return { path: '', lastPoint: { x: left, y: top } }
  }

  let path = `M ${coords[0].x} ${coords[0].y}`

  for (let index = 0; index < coords.length - 1; index += 1) {
    const current = coords[index]
    const next = coords[index + 1]
    const controlX = (current.x + next.x) / 2
    path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`
  }

  return { path, lastPoint: coords.at(-1) ?? { x: left, y: top } }
}

export default function PerformanceChart() {
  const [mode, setMode] = useState<Mode>('monthly')

  const chartData = mode === 'monthly' ? monthlyPoints : quarterlyPoints
  const labels = mode === 'monthly' ? monthlyLabels : quarterlyLabels

  const { path, lastPoint } = useMemo(() => buildSmoothPath(chartData), [chartData])

  return (
    <SurfaceCard className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Healthcare Performance Index</h2>
          <p className="mt-2 text-sm text-slate-500">Nationwide diagnostic scoring trends over 12 months.</p>
        </div>
        <div className="inline-flex rounded-full bg-slate-100 p-1 text-sm font-semibold">
          <button
            className={`rounded-full px-4 py-2 transition ${mode === 'monthly' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setMode('monthly')}
            type="button"
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 transition ${mode === 'quarterly' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setMode('quarterly')}
            type="button"
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] bg-sky-50/60 p-5">
        <svg viewBox="0 0 500 260" className="h-[280px] w-full">
          {[0, 1, 2, 3].map((line) => (
            <line key={line} x1="28" x2="470" y1={40 + line * 50} y2={40 + line * 50} stroke="#cbd5e1" strokeDasharray="4 8" />
          ))}
          {[0, 1, 2, 3].map((line) => (
            <text key={`label-${line}`} x="0" y={44 + line * 50} className="fill-slate-400 text-[11px] font-medium">
              {line * 1000}
            </text>
          ))}
          <path key={mode} d={path} fill="none" stroke="url(#dashboard-line)" strokeWidth="4" strokeLinecap="round" className="graph-line" />
          <circle key={`${mode}-point`} cx={lastPoint.x} cy={lastPoint.y} r="8" fill="#0ea5e9" className="graph-point" />
          <rect x="318" y="130" width="110" height="24" rx="12" fill="#334155" opacity="0.94" />
          <text x="373" y="146" textAnchor="middle" className="fill-white text-[8px] font-semibold uppercase tracking-[0.1em]">
            Archive Benchmark
          </text>
          <defs>
            <linearGradient id="dashboard-line" x1="28" y1="220" x2="470" y2="138" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset="1" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-4 flex justify-between text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </SurfaceCard>
  )
}
