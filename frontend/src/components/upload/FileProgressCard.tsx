export default function FileProgressCard({ progress }: { progress: number }) {
  return (
    <div className="rounded-[28px] border border-slate-100 bg-white/90 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">⌘</div>
          <div>
            <p className="text-lg font-semibold text-slate-950">St_Jude_Records_2024.pdf</p>
            <p className="mt-1 text-sm text-slate-500">12.4 MB • {progress}% Complete</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-sky-700">{progress < 100 ? 'Processing...' : 'Ready'}</p>
      </div>
      <div className="mt-5 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-teal-400 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
