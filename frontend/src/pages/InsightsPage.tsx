import AppShell from '../components/layout/AppShell'
import SidebarThreads from '../components/insights/SidebarThreads'
import ChatPanel from '../components/insights/ChatPanel'
import ContextPanel from '../components/insights/ContextPanel'

export default function InsightsPage() {
  return (
    <AppShell>
      <section className="overflow-hidden rounded-[34px] border border-white/70 bg-white/82 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="grid min-h-[820px] xl:grid-cols-[0.9fr_1.35fr_0.95fr]">
          <SidebarThreads />
          <div className="border-r border-slate-100 border-l border-slate-100">
            <ChatPanel />
          </div>
          <ContextPanel />
        </div>
      </section>
    </AppShell>
  )
}
