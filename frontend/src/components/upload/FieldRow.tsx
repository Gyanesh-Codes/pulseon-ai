export default function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <div className="mt-2 flex items-center justify-between rounded-[18px] border border-slate-100 bg-white px-4 py-4 shadow-sm">
        <span className="font-semibold text-slate-900">{value}</span>
        <div className="flex items-center gap-3">
          <span className="text-emerald-600">✓</span>
          <button className="text-slate-400 transition hover:text-sky-700" type="button">
            ✎
          </button>
        </div>
      </div>
    </div>
  )
}
