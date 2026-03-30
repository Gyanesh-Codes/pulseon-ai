import AppShell from '../components/layout/AppShell'
import KpiCards from '../components/dashboard/KpiCards'
import PerformanceChart from '../components/dashboard/PerformanceChart'
import QuickActionsPanel from '../components/dashboard/QuickActionsPanel'
import AlertsSection from '../components/dashboard/AlertsSection'

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="rounded-[34px] border border-white/70 bg-white/82 p-6 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950">Clinical Intelligence</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Curation of nationwide hospital performance and diagnostic integrity benchmarks.
          </p>
        </div>

        <div className="mt-8">
          <KpiCards />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <PerformanceChart />
          <QuickActionsPanel />
        </div>

        <div className="mt-8">
          <AlertsSection />
        </div>
      </section>
    </AppShell>
  )
}
