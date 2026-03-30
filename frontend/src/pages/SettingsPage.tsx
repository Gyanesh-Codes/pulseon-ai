import AppShell from '../components/layout/AppShell'
import { SurfaceCard } from '../components/ui/Cards'

export default function SettingsPage() {
  return (
    <AppShell>
      <section className="rounded-[34px] border border-white/70 bg-white/82 p-6 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950">Settings</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Manage your clinical workspace preferences, data governance defaults, and team-level security controls.
        </p>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <SurfaceCard className="p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Workspace Controls</h2>
            <div className="mt-6 space-y-4">
              {['Default archive region', 'Clinical timezone', 'Auto-sync interval'].map((item) => (
                <div key={item} className="rounded-[22px] bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Security & Access</h2>
            <div className="mt-6 space-y-4">
              {['Multi-factor authentication enabled', 'Encrypted clinical session active', 'Audit trail retention: 365 days'].map((item) => (
                <div key={item} className="rounded-[22px] border border-emerald-100 bg-emerald-50 px-4 py-4 text-sm font-medium text-emerald-700">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Notification Preferences</h2>
            <div className="mt-6 space-y-4">
              {['Critical gap alerts', 'Data ingestion reports', 'Regional score changes'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-[22px] bg-slate-50 px-4 py-4">
                  <span className="font-medium text-slate-700">{item}</span>
                  <span className={`h-7 w-12 rounded-full ${index === 1 ? 'bg-slate-300' : 'bg-sky-600'} p-1`}>
                    <span className={`block h-5 w-5 rounded-full bg-white transition ${index === 1 ? '' : 'translate-x-5'}`} />
                  </span>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <div className="rounded-[30px] bg-slate-950 p-6 text-white shadow-[0_24px_70px_-38px_rgba(15,23,42,0.85)]">
            <h2 className="text-2xl font-semibold tracking-tight">System Health</h2>
            <p className="mt-3 leading-7 text-slate-300">All archive services are operational. Last integrity scan completed 14 minutes ago.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] bg-white/6 px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Storage</p>
                <p className="mt-2 text-3xl font-semibold">8.2 TB</p>
              </div>
              <div className="rounded-[22px] bg-white/6 px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Integrity</p>
                <p className="mt-2 text-3xl font-semibold">99.99%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  )
}
