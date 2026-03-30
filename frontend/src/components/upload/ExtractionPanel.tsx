import { extractedFields } from '../../data/upload'
import AlertBox from './AlertBox'
import FieldRow from './FieldRow'

export default function ExtractionPanel({ ready }: { ready: boolean }) {
  return (
    <aside className="rounded-[30px] bg-slate-100/90 p-5 shadow-[0_26px_80px_-52px_rgba(15,23,42,0.32)]">
      <div className="flex items-center justify-between gap-4 rounded-[24px] bg-sky-50 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-white">⌁</div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">AI Extraction Preview</h2>
        </div>
        <span className="rounded-full bg-sky-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">Active Scan</span>
      </div>

      <div className="mt-6 space-y-5">
        {ready ? (
          <>
            {extractedFields.map((field) => (
              <FieldRow key={field.label} label={field.label} value={field.value} />
            ))}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Detected Data Gaps</p>
              <div className="mt-2">
                <AlertBox />
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {[0, 1, 2].map((item) => (
              <div key={item} className="shimmer rounded-[18px] bg-white px-4 py-8" />
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 space-y-3">
        <button className="w-full rounded-2xl bg-sky-700 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_-22px_rgba(3,105,161,0.7)] transition hover:bg-sky-600" type="button">
          Save to Database
        </button>
        <button className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" type="button">
          Discard All
        </button>
      </div>

      <div className="mt-6 text-center text-xs leading-6 text-slate-400">
        By clicking “Save”, data will be committed to the encrypted archival layer and indexed for diagnostic search.
      </div>

      <div className="mt-6 flex items-center justify-center">
        <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Encrypted Session
        </span>
      </div>
    </aside>
  )
}
