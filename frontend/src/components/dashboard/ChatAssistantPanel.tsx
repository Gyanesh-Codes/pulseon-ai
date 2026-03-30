import { chatCitations } from '../../data/dashboard'
import { SurfaceCard } from '../ui/Cards'

export default function ChatAssistantPanel() {
  return (
    <SurfaceCard className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">AI Assistant</p>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Clinical intelligence companion</p>
        </div>
        <span className="live-badge rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Live
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <div className="ml-auto max-w-xl rounded-[24px] bg-sky-100 px-5 py-4 text-sm leading-7 text-sky-950">
          Ask about healthcare data, trends, or gaps...
        </div>
        <div className="max-w-2xl rounded-[26px] border border-slate-100 bg-white p-5 shadow-sm">
          <p className="text-lg font-semibold text-slate-950">Answer</p>
          <p className="mt-3 leading-8 text-slate-600">
            Northern regions show the strongest care deterioration this week, driven by specialist shortages, equipment
            latency, and delayed cardiology routing across two monitored districts.
          </p>
          <div className="mt-5 rounded-[22px] bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Citations</p>
            <div className="mt-3 space-y-2">
              {chatCitations.map((citation, index) => (
                <div key={citation} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 font-semibold text-sky-700">{index + 1}</span>
                  {citation}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SurfaceCard>
  )
}
