import type { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoMark from '../ui/LogoMark'
import { sidebarItems } from '../../data/dashboard'

function SidebarIcon({ name, active = false }: { name: string; active?: boolean }) {
  const stroke = active ? '#2563eb' : 'currentColor'

  const commonProps = {
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }

  const icons: Record<string, ReactElement> = {
    dashboard: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" {...commonProps} />
        <rect x="14" y="4" width="6" height="6" {...commonProps} />
        <rect x="4" y="14" width="6" height="6" {...commonProps} />
        <rect x="14" y="14" width="6" height="6" {...commonProps} />
      </svg>
    ),
    maps: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5Z" {...commonProps} />
        <path d="M9 4v13.5M15 6.5V20" {...commonProps} />
      </svg>
    ),
    hospitals: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" {...commonProps} />
        <path d="M12 7v6M9 10h6M9 20v-4h6v4" {...commonProps} />
      </svg>
    ),
    insights: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 16 4-4 3 3 5-7 4 4" {...commonProps} />
        <path d="M4 20h16" {...commonProps} />
        <circle cx="8" cy="12" r="1" fill={stroke} stroke="none" />
        <circle cx="11" cy="15" r="1" fill={stroke} stroke="none" />
        <circle cx="16" cy="8" r="1" fill={stroke} stroke="none" />
      </svg>
    ),
    upload: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 20h10a2 2 0 0 0 2-2V8l-5-5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" {...commonProps} />
        <path d="M14 3v5h5M12 17V10M9.5 12.5 12 10l2.5 2.5" {...commonProps} />
      </svg>
    ),
    settings: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" {...commonProps} />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.8-1l-.4-2.5h-4l-.4 2.5a8 8 0 0 0-1.8 1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.8 1l.4 2.5h4l.4-2.5a8 8 0 0 0 1.8-1l2.4 1 2-3.4-2-1.5c.07-.33.1-.66.1-1Z" {...commonProps} />
      </svg>
    ),
  }

  return icons[name] ?? <span className="text-xs font-semibold">?</span>
}

export default function Sidebar() {
  const { pathname } = useLocation()

  const isItemActive = (label: string) => {
    if (label === 'Dashboard') return pathname === '/dashboard'
    if (label === 'Maps') return pathname === '/maps'
    if (label === 'Hospitals') return pathname === '/hospitals'
    if (label === 'Insights') return pathname === '/insights'
    if (label === 'Data Upload') return pathname === '/data-upload'
    if (label === 'Settings') return pathname === '/settings'
    return false
  }

  return (
    <aside className="hidden w-[248px] shrink-0 rounded-[34px] border border-white/70 bg-white/86 p-5 shadow-[0_30px_100px_-65px_rgba(15,23,42,0.45)] backdrop-blur xl:flex xl:flex-col">
      <div className="flex items-center gap-3 px-2 pb-6">
        <LogoMark />
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-950">Pulseon.ai</p>
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Clinical archive v2.4</p>
        </div>
      </div>
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-semibold tracking-[0.12em] uppercase transition ${
              isItemActive(item.label)
                ? 'bg-sky-50 text-sky-700 shadow-[0_16px_40px_-28px_rgba(14,116,144,0.55)]'
                : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
            to={item.to}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 ${
                isItemActive(item.label) ? 'bg-white shadow-sm' : 'bg-transparent group-hover:bg-white group-hover:shadow-sm'
              }`}
            >
              <SidebarIcon name={item.icon} active={isItemActive(item.label)} />
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto px-1 pt-8">
        <button className="flex w-full items-center justify-center rounded-2xl bg-sky-600 px-4 py-3.5 text-[15px] font-semibold text-white shadow-[0_20px_40px_-22px_rgba(2,132,199,0.7)] transition hover:-translate-y-0.5 hover:bg-sky-500">
          AI Diagnostic Scan
        </button>
        <div className="mt-4 space-y-2">
          <button
            className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
            type="button"
          >
            Support
          </button>
          <button
            className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
            type="button"
          >
            Sign out
          </button>
        </div>
      </div>
    </aside>
  )
}
