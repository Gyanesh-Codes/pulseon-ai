import MessageBubble from './MessageBubble'
import InsightCard from './InsightCard'

function SmallAction({ label }: { label: string }) {
  return (
    <button className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 transition hover:text-sky-700" type="button">
      {label}
    </button>
  )
}

export default function ChatPanel() {
  return (
    <section className="flex h-full min-h-[760px] flex-col bg-white/65">
      <div className="border-b border-slate-100 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-sm">✦</div>
            <div>
              <h1 className="text-4xl font-semibold leading-none tracking-tight text-slate-950">AI Diagnostic Assistant</h1>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Precision Engine v4.0 Active</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900" type="button">
              Share
            </button>
            <button className="rounded-2xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_36px_-20px_rgba(2,132,199,0.75)] transition hover:bg-sky-500" type="button">
              Export PDF
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto px-6 py-6">
        <MessageBubble>
          Analyze the latest metabolic screening for Patient #8821. Highlight any markers indicating early insulin
          resistance compared to the last longitudinal study and visualize the trend.
        </MessageBubble>

        <div className="max-w-xl rounded-[22px] bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500 shadow-sm">
          <span className="typing-loader inline-flex items-center gap-1">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </span>
          <span className="ml-3">Analyzing...</span>
        </div>

        <InsightCard />
      </div>

      <div className="sticky bottom-0 border-t border-slate-100 bg-white/92 px-6 py-4 backdrop-blur">
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.28)]">
          <button className="text-slate-400 transition hover:text-sky-700" type="button">⌂</button>
          <input
            className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Ask about clinical data, trends, or diagnostic context"
            type="text"
          />
          <button className="text-slate-400 transition hover:text-sky-700" type="button">◉</button>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white shadow-[0_16px_36px_-20px_rgba(2,132,199,0.75)] transition hover:bg-sky-500" type="button">
            →
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <SmallAction label="Suggest Queries" />
          <SmallAction label="Clear Context" />
          <SmallAction label="Advanced Mode" />
        </div>
      </div>
    </section>
  )
}
