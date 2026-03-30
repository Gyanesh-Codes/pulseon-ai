import AppShell from '../components/layout/AppShell'
import HospitalTable from '../components/hospitals/HospitalTable'
import { SurfaceCard } from '../components/ui/Cards'

export default function HospitalsPage() {
  return (
    <AppShell>
      <section className="rounded-[34px] border border-white/70 bg-white/82 p-6 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950">Clinical Archive</h1>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
          Access and manage high-precision medical facilities across the primary diagnostic network. Curated data synchronization for AI-assisted surgical planning.
        </p>

        <div className="mt-8 grid gap-4 rounded-[28px] bg-sky-50/70 p-5 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">All Global Sectors</div>
          <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">All Assets</div>
          <div className="rounded-2xl bg-white px-4 py-4 text-sm text-slate-700">General Medicine</div>
          <button className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" type="button">
            Apply Filters
          </button>
        </div>

        <div className="mt-8">
          <HospitalTable />
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1fr_1fr_1.1fr]">
          <SurfaceCard className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Network Integrity</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">99.98%</p>
            <p className="mt-2 text-sm font-semibold text-emerald-600">+2.4%</p>
          </SurfaceCard>
          <SurfaceCard className="p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Diagnostic Latency</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">0.45s</p>
            <p className="mt-2 text-sm font-semibold text-rose-500">+0.12s</p>
          </SurfaceCard>
          <div className="rounded-[30px] bg-sky-700 p-6 text-white shadow-[0_24px_70px_-38px_rgba(3,105,161,0.75)]">
            <h2 className="text-2xl font-semibold tracking-tight">Facility Insights</h2>
            <p className="mt-3 leading-7 text-sky-100">Automated capacity forecasting for next 72 clinical hours.</p>
            <button className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50" type="button">
              Download Forecast
            </button>
          </div>
        </div>
      </section>
    </AppShell>
  )
}
