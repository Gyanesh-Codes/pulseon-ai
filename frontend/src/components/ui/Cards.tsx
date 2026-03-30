import type { CSSProperties, ReactNode } from 'react'

type BaseCardProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function SurfaceCard({ children, className = '', style }: BaseCardProps) {
  return (
    <div
      style={style}
      className={`rounded-[28px] p-6 backdrop-blur border border-white/70 bg-white/88 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_42px_100px_-56px_rgba(15,23,42,0.42)] ${className}`}
    >
      {children}
    </div>
  )
}

export function DashboardChip({
  label,
  value,
  tone = 'sky',
}: {
  label: string
  value: string
  tone?: 'sky' | 'teal' | 'amber'
}) {
  const tones = {
    sky: 'bg-sky-50 text-sky-700 ring-sky-100',
    teal: 'bg-teal-50 text-teal-700 ring-teal-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  }

  return (
    <div className={`rounded-2xl p-4 ring-1 ${tones[tone]}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] opacity-80">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  )
}

export function FeatureCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <SurfaceCard className="h-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-400 text-sm font-semibold text-white">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </SurfaceCard>
  )
}

export function TestimonialCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <SurfaceCard className="h-full">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-teal-400 text-sm font-semibold text-white">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
      <p className="mt-6 leading-7 text-slate-600">"{quote}"</p>
    </SurfaceCard>
  )
}
