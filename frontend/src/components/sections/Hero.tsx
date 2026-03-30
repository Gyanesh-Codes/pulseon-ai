import { LinkButton, RouteButton } from '../ui/Button'
import { DashboardChip, SurfaceCard } from '../ui/Cards'
import { metrics } from '../../data/content'

function TrendChart() {
  return (
    <div className="relative h-32 overflow-hidden rounded-[24px] border border-sky-100 bg-sky-50/70 p-4">
      <div className="absolute inset-x-4 top-8 h-px border-t border-dashed border-sky-200" />
      <div className="absolute inset-x-4 top-1/2 h-px border-t border-dashed border-sky-200" />
      <div className="absolute inset-x-4 bottom-8 h-px border-t border-dashed border-sky-200" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 160" fill="none">
        <path
          className="graph-line"
          d="M20 95C60 72 102 118 145 86C186 56 218 65 252 79C290 95 324 32 382 60"
          stroke="url(#pulse-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle className="graph-point" cx="382" cy="60" r="8" fill="#0ea5e9" />
        <defs>
          <linearGradient id="pulse-gradient" x1="20" y1="95" x2="382" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="px-6 pb-10 pt-1 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-[40px] border border-white/70 bg-white/70 px-8 py-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
        <div className="flex flex-col justify-start lg:pt-1">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Clinical archive intelligence for modern care networks
          </div>
          <h1 className="mt-8 max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            AI-Powered Healthcare Intelligence Platform
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Transform unstructured hospital data into actionable insights. Pulseon.ai unifies clinical archives, regional
            signals, and operational context into one premium intelligence layer.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <RouteButton to="/auth" className="group gap-2">
              Start Exploring Data
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </RouteButton>
            <LinkButton href="#ai-assistant" variant="secondary" className="group gap-2">
              See AI in Action
              <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
            </LinkButton>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="floating-card" style={{ animationDelay: `${metrics.indexOf(metric) * 0.4}s` }}>
                <DashboardChip label={metric.label} value={metric.value} tone={metric.tone} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="floating-card absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-teal-200/40 blur-3xl lg:block" />
          <div className="floating-card absolute -right-4 bottom-10 hidden h-32 w-32 rounded-full bg-sky-200/50 blur-3xl lg:block" style={{ animationDelay: '0.8s' }} />
          <SurfaceCard className="relative overflow-hidden p-0">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Pulseon.ai Clinical Console</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Live capability intelligence</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="live-badge rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Live
                  </span>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-sky-500" />
                    <span className="h-3 w-3 rounded-full bg-teal-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-5 p-6">
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[24px] bg-slate-950 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200">Active insight</p>
                  <h2 className="mt-3 text-2xl font-semibold">Greater Metro Care Index</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                    AI indicates elevated mortality risk in Sector 04-A due to delayed specialist routing and low equipment density.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-100">Confidence 94%</span>
                    <span className="rounded-full bg-teal-400/15 px-3 py-1 text-xs font-medium text-teal-200">Updated 2m ago</span>
                  </div>
                </div>
                <div className="grid gap-4">
                  <DashboardChip label="At-risk regions" value="12" tone="amber" />
                  <DashboardChip label="Parsing accuracy" value="98.2%" tone="sky" />
                </div>
              </div>
              <TrendChart />
              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Recent queries</p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">
                      Which regions show rising cardiac referral delays?
                    </div>
                    <div className="rounded-2xl bg-sky-100 p-3 text-sm text-sky-900 shadow-sm">
                      Greater Metro and North Belt show the highest divergence from benchmark.
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] border border-slate-100 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Clinical context</p>
                    <p className="text-xs font-medium text-sky-600">3 cited sources</p>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {['Metabolic Screening Archive', 'District Capacity Benchmarks', 'Referral Network Study'].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  )
}
