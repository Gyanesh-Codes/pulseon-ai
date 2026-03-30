import { researchThreads } from '../../data/insights'

export default function SidebarThreads() {
  return (
    <aside className="flex h-full min-h-[760px] flex-col border-r border-slate-100 bg-white/70">
      <div className="px-6 py-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Research Threads</h2>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
        {researchThreads.map((thread) => (
          <button
            key={thread.title}
            className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${
              thread.active
                ? 'border-sky-200 bg-white shadow-[0_18px_40px_-28px_rgba(14,116,144,0.38)]'
                : 'border-transparent bg-transparent hover:border-slate-100 hover:bg-white/80'
            }`}
            type="button"
          >
            {thread.active ? (
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Active now</p>
            ) : null}
            <p className="mt-1 text-lg font-semibold leading-7 text-slate-900">{thread.title}</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
              <span>{thread.timestamp}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{thread.citations} citations</span>
            </div>
          </button>
        ))}
      </div>
      <div className="border-t border-slate-100 px-6 py-5">
        <button className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 transition hover:text-sky-700" type="button">
          + New Research Thread
        </button>
      </div>
    </aside>
  )
}
