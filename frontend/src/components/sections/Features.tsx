import { features } from '../../data/content'
import { FeatureCard, SurfaceCard } from '../ui/Cards'
import Section from '../ui/Section'

export default function Features() {
  const primaryFeature = features.find((feature) => feature.primary)
  const secondaryFeatures = features.filter((feature) => !feature.primary)

  return (
    <Section
      id="features"
      eyebrow="Core Features"
      title="Built for healthcare intelligence teams that need answers fast"
      description="Every module mirrors the dashboard language of the product, keeping the marketing experience close to the software itself."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        {primaryFeature ? (
          <SurfaceCard className="!border-slate-800 !bg-slate-950 !text-white overflow-hidden">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">Primary capability</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{primaryFeature.title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">{primaryFeature.body}</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-sky-500 to-teal-400 text-lg font-semibold text-white shadow-lg">
                {primaryFeature.icon}
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                'High-risk district scoring',
                'Travel-time weighted access analysis',
                'Regional intervention prioritization',
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-white/7 px-4 py-4 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        ) : null}
        <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-1">
          {secondaryFeatures.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} body={feature.body} />
          ))}
        </div>
      </div>
    </Section>
  )
}
