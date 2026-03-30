import Hero from '../components/sections/Hero'
import TrustStats from '../components/sections/TrustStats'
import ProblemSolution from '../components/sections/ProblemSolution'
import Features from '../components/sections/Features'
import MapPreview from '../components/sections/MapPreview'
import ChatPreview from '../components/sections/ChatPreview'
import Testimonials from '../components/sections/Testimonials'
import FinalCta from '../components/sections/FinalCta'
import { navItems } from '../data/content'
import { RouteButton } from '../components/ui/Button'
import LogoMark from '../components/ui/LogoMark'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <a className="flex items-center gap-3" href="#top">
          <LogoMark />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">Pulseon.ai</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Clinical Intelligence</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="group relative py-1 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              href={item.href}
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <RouteButton to="/auth" className="px-4 py-2.5 text-sm">
            Sign in
          </RouteButton>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="px-6 pb-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Pulseon.ai (c) 2026. AI-powered healthcare intelligence platform.</p>
        <div className="flex gap-6">
          <a href="#features">Platform</a>
          <a href="#coverage-map">Coverage Map</a>
          <a href="#ai-assistant">AI Assistant</a>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.38),_rgba(240,249,255,0.8)_28%,_#f8fbff_58%,_#eef7f6_100%)]">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <ProblemSolution />
        <Features />
        <MapPreview />
        <ChatPreview />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
