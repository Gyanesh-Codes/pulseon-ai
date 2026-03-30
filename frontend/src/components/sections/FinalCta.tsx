import { LinkButton, RouteButton } from '../ui/Button'

export default function FinalCta() {
  return (
    <section className="px-6 pb-20 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-slate-950 px-8 py-12 text-white shadow-[0_45px_120px_-70px_rgba(15,23,42,0.9)] sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">Launch faster decisions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring AI-powered healthcare intelligence into every planning cycle.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Start with a modern, explainable interface built for hospital data, regional mapping, and fast operational action.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
          <RouteButton to="/auth">Get Started</RouteButton>
          <LinkButton href="#ai-assistant" variant="secondary">
            View Demo
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
