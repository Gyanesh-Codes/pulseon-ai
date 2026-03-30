import Section from '../ui/Section'
import { SurfaceCard } from '../ui/Cards'
import { chatSources } from '../../data/content'

export default function ChatPreview() {
  return (
    <Section
      id="ai-assistant"
      eyebrow="AI Chat Preview"
      title="Ask complex healthcare questions in plain language"
      description="The assistant blends dashboard context, cited records, and explainable reasoning so teams can move from question to decision quickly."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <SurfaceCard className="overflow-hidden p-0">
          <div className="grid min-h-[460px] grid-rows-[auto_1fr_auto]">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-lg font-semibold text-slate-900">AI Diagnostic Assistant</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-400">Precision engine v4.0 active</p>
              </div>
              <div className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Live
              </div>
            </div>
            <div className="space-y-6 px-6 py-6">
              <div className="ml-auto max-w-md rounded-[26px] bg-sky-100 px-5 py-4 text-sm leading-7 text-sky-950 shadow-sm">
                Analyze the latest metabolic screening for Patient #8821 and highlight any markers indicating early insulin resistance compared to the last longitudinal study.
              </div>
              <div className="max-w-xl rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.3)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-sm font-semibold text-white">
                    AI
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Precision Insight Engine</p>
                    <p className="text-sm text-slate-500">Cited and grounded answer</p>
                  </div>
                </div>
                <p className="mt-5 leading-8 text-slate-600">
                  Screening indicates a statistically meaningful rise in fasting glucose variance and insulin sensitivity drift compared to the June baseline. The strongest shift appears in the 6-month metabolic delta and aligns with two elevated risk markers in the current archive.
                </p>
                <div className="mt-6 rounded-[22px] bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Detected signal</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-900">Insulin Sensitivity Trend</span>
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">-12.4%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-slate-400">Ask about clinical data, trends, or diagnostic context</span>
                <span className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white">→</span>
              </div>
            </div>
          </div>
        </SurfaceCard>
        <div className="grid gap-6">
          <SurfaceCard>
            <p className="text-sm font-semibold text-slate-900">Cited sources & data</p>
            <div className="mt-4 space-y-3">
              {chatSources.map((source, index) => (
                <div key={source} className="flex items-start gap-4 rounded-[22px] bg-slate-50 px-4 py-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-semibold text-sky-600 shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{source}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Validated source</p>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard className="!border-slate-800 !bg-slate-950 !text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.95)]">
            <p className="text-sm font-semibold text-sky-100">Clinical context</p>
            <h3 className="mt-4 text-2xl font-semibold">Thread-based AI reasoning with dashboard memory</h3>
            <p className="mt-4 leading-8 text-slate-100">
              Pulseon.ai keeps query context tied to records, facility comparisons, and regional trends so every answer is more than a generic chatbot response.
            </p>
          </SurfaceCard>
        </div>
      </div>
    </Section>
  )
}
