import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteButton } from '../components/ui/Button'
import { SurfaceCard } from '../components/ui/Cards'
import LogoMark from '../components/ui/LogoMark'

const roles = ['NGO', 'Admin', 'Analyst']

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(186,230,253,0.45),_rgba(248,250,252,0.88)_34%,_#f2fbfa_100%)] px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link className="flex items-center gap-3" to="/">
          <LogoMark />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">Pulseon.ai</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Healthcare intelligence</p>
          </div>
        </Link>
        <RouteButton to="/" variant="secondary" className="px-4 py-2.5 text-sm">
          Back
        </RouteButton>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SurfaceCard className="!border-0 !bg-slate-950 !text-white shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Secure access </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">Access healthcare intelligence with confidence</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
            Sign in to monitor regional care gaps, run AI-assisted analysis, and keep planning teams aligned around the same live dataset.
          </p>
          <div className="mt-10 grid gap-4">
            {[
              'Role-aware access for NGOs, admins, and analysts',
              'Dashboard-consistent workflows for insights and uploads',
              'Explainable AI outputs designed for operational trust',
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-white/8 px-5 py-4 text-sm text-white">
                {item}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="p-8 sm:p-10">
          <div className="inline-flex rounded-full bg-slate-100 p-1">
            <button
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              onClick={() => setMode('login')}
              type="button"
            >
              Login
            </button>
            <button
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              onClick={() => setMode('signup')}
              type="button"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              {mode === 'login' ? 'Welcome back' : 'Create your workspace'}
            </h2>
            <p className="mt-3 text-slate-500">
              {mode === 'login'
                ? 'Sign in to continue exploring Pulseon.ai.'
                : 'Start a new Pulseon.ai environment for your team.'}
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
                type="email"
                placeholder="team@pulseon.ai"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100"
                type="password"
                placeholder="Enter your password"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Role</span>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100" defaultValue="NGO">
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <RouteButton to="/dashboard" className="w-full justify-center">
              {mode === 'login' ? 'Login to Pulseon.ai' : 'Create Account'}
            </RouteButton>
          </form>
        </SurfaceCard>
      </div>
    </div>
  )
}
