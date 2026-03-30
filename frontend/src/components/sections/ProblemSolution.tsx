import Section from '../ui/Section'
import { SurfaceCard } from '../ui/Cards'
import { problems } from '../../data/content'

export default function ProblemSolution() {
  return (
    <Section
      eyebrow="Problem to Solution"
      title="From fragmented records to a coordinated intelligence layer"
      description="Pulseon.ai connects clinical documents, facility performance, and regional healthcare signals so planning teams can act on the full picture."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <SurfaceCard key={problem.title} className="h-full">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Problem</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{problem.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{problem.body}</p>
            </SurfaceCard>
          ))}
        </div>
        <SurfaceCard className="relative overflow-hidden !border-slate-800 !bg-slate-950 !text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.95)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">Pulseon.ai solution</p>
          <h3 className="mt-5 text-3xl font-semibold">Operational clarity for healthcare planners, NGOs, and analysts</h3>
          <p className="mt-4 max-w-xl leading-8 text-slate-100">
            Bring every disconnected source into one AI-powered workspace that parses documents, surfaces regional gaps,
            and explains where capacity investment should happen next.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Unified archive ingestion',
              'Explainable AI recommendations',
              'Regional gap heat-mapping',
              'Facility capability tracking',
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-white/15 bg-white/10 px-4 py-4 text-sm font-medium text-white">
                {item}
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </Section>
  )
}
