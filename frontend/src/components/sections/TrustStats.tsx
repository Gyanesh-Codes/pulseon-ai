import { trustMetrics } from '../../data/content'

export default function TrustStats() {
  return (
    <section className="px-6 py-4 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[30px] border border-white/70 bg-white/75 p-6 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.4)] backdrop-blur md:grid-cols-3">
        {trustMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`rounded-[24px] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 ${index !== 2 ? 'border-b border-slate-100 md:border-b-0 md:border-r' : ''}`}
          >
            <p className="text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
