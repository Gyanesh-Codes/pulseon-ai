export default function InsightCard() {
  return (
    <div className="max-w-lg rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.35)]">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-sm font-semibold text-white shadow-sm">
          ✦
        </div>
        <div>
          <h3 className="text-[28px] font-semibold leading-8 tracking-tight text-slate-950">Precision Insight Engine</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Based on the clinical data uploaded on <span className="font-semibold text-slate-900">October 14, 2023</span>,
            there is a statistically significant shift in metabolic markers compared to the June baseline.
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-[24px] border border-slate-100 bg-slate-50 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">Highlighted Insight</p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Insulin Sensitivity Trend (6-Month Delta)</p>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">-12.4%</span>
        </div>
      </div>
    </div>
  )
}
