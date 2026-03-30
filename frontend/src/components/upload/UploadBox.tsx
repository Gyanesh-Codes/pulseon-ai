import type { DragEvent } from 'react'
import { useRef } from 'react'

type UploadBoxProps = {
  dragging: boolean
  onDragEnter: (event: DragEvent<HTMLDivElement>) => void
  onDragLeave: (event: DragEvent<HTMLDivElement>) => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
  onSelect: () => void
  onImport: () => void
}

export default function UploadBox({
  dragging,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onSelect,
  onImport,
}: UploadBoxProps) {
  const enterCounter = useRef(0)

  return (
    <div
      className={`rounded-[30px] border-2 border-dashed px-8 py-14 text-center transition ${
        dragging ? 'border-sky-300 bg-sky-50/70 shadow-[0_26px_80px_-48px_rgba(2,132,199,0.45)]' : 'border-slate-200 bg-white/60'
      }`}
      onDragEnter={(event) => {
        enterCounter.current += 1
        onDragEnter(event)
      }}
      onDragLeave={(event) => {
        enterCounter.current -= 1
        if (enterCounter.current <= 0) {
          enterCounter.current = 0
          onDragLeave(event)
        }
      }}
      onDragOver={onDragOver}
      onDrop={(event) => {
        enterCounter.current = 0
        onDrop(event)
      }}
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-sky-100 text-sky-700 shadow-[0_18px_40px_-28px_rgba(14,116,144,0.4)]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 8.8 3.5 3.5 0 1 1 18 18H7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10v7M9.5 12.5 12 10l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950">Drag and Drop PDF/Text</h2>
      <p className="mt-4 text-lg leading-8 text-slate-500">Maximum file size 50MB. Multiple files supported.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-2xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_-22px_rgba(2,132,199,0.7)] transition hover:-translate-y-0.5 hover:bg-sky-500" onClick={onSelect} type="button">
          Select Files
        </button>
        <button className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" onClick={onImport} type="button">
          Import from Hospital Drive
        </button>
      </div>
    </div>
  )
}
