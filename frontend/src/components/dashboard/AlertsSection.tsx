import type { CSSProperties } from 'react'
import { alertCards } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

const tagStyles = {
  critical: 'text-red-600 bg-red-50',
  success: 'text-green-600 bg-green-50',
  info: 'text-sky-600 bg-sky-50',
}

export default function AlertsSection() {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Recent AI-Flagged Alerts</h2>
          <p className="mt-2 text-sm text-slate-500">Anomalies detected by precision learning analysis.</p>
        </div>
        <button className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">View archive</button>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {alertCards.map((card, index) => (
          <SurfaceCard key={card.title} className="p-5 floating-card" style={{ animationDelay: `${index * 0.25}s` } as CSSProperties}>
            <div className="flex items-center justify-between gap-3">
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${tagStyles[card.tag as keyof typeof tagStyles]}`}>
                {card.tag}
              </span>
              <span className="text-xs font-medium text-slate-400">{card.timestamp}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">{card.timestamp}</span>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
                {card.action}
              </button>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </section>
  )
}
