import type { CSSProperties } from 'react'
import { kpis } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

const toneStyles = {
  sky: 'from-sky-100 to-white text-sky-700',
  amber: 'from-amber-100 to-white text-amber-700',
  slate: 'from-slate-100 to-white text-slate-700',
  teal: 'from-teal-100 to-white text-teal-700',
}

export default function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {kpis.map((card, index) => (
        <SurfaceCard key={card.label} className="floating-card bg-gradient-to-br p-5" style={{ animationDelay: `${index * 0.35}s` } as CSSProperties}>
          <div className={`rounded-[22px] bg-gradient-to-br p-4 ${toneStyles[card.tone]}`}>
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold shadow-sm">
                {card.icon}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">{card.trend}</span>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{card.label}</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{card.value}</p>
          </div>
        </SurfaceCard>
      ))}
    </div>
  )
}
