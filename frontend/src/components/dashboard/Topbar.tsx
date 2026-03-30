import LogoMark from '../ui/LogoMark'
import { NavLink } from 'react-router-dom'
import { topNavItems } from '../../data/dashboard'

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5a4 4 0 0 0-4 4v2.4c0 .7-.24 1.37-.68 1.92L6 15h12l-1.32-1.68A3.08 3.08 0 0 1 16 11.4V9a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function DirectionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m13 4 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20c0-6.2 4.8-10 12-10h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 19c1.8-3 4.2-4.5 7-4.5s5.2 1.5 7 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-4.2-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Topbar() {
  const topIcons = [
    { label: 'Notifications', icon: <BellIcon /> },
    { label: 'Directions', icon: <DirectionIcon /> },
    { label: 'Profile', icon: <UserIcon /> },
  ]

  return (
    <header className="rounded-[30px] border border-white/70 bg-white/86 px-5 py-4 shadow-[0_24px_70px_-54px_rgba(15,23,42,0.4)] backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 xl:hidden">
          <LogoMark className="h-11 w-11" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">Pulseon.ai</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Clinical Intelligence</p>
          </div>
        </div>
        <nav className="hidden items-center gap-2 lg:flex">
          {topNavItems.map((item) => (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-sky-50 text-sky-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <label className="ml-auto flex w-full max-w-[340px] items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 transition focus-within:border-sky-200 focus-within:bg-white focus-within:shadow-sm">
          <SearchIcon />
          <input
            className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Search archive..."
            type="text"
          />
        </label>
        <div className="flex items-center gap-3">
          {topIcons.map((item) => (
            <button
              key={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-sky-700 hover:shadow-md"
              title={item.label}
              type="button"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
