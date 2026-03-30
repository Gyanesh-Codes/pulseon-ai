export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-600 via-cyan-500 to-teal-400 shadow-[0_16px_36px_-18px_rgba(14,116,144,0.7)] ${className}`}
    >
      <div className="absolute inset-[3px] rounded-[15px] border border-white/20 bg-slate-950/10" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="relative z-10">
        <path
          d="M4.5 12h2.7l1.9-3.7 2.6 7.4 2.2-5.2 1.9 2.5H19.5"
          stroke="#06283D"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
