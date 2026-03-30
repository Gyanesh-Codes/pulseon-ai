import type { MapRegion } from '../../data/maps'
import { SurfaceCard } from '../ui/Cards'
import RegionCard from './RegionCard'

export default function SidebarPanel({ region }: { region: MapRegion }) {
  return (
    <div className="grid gap-6">
      <SurfaceCard className="p-6">
        <RegionCard region={region} />
      </SurfaceCard>

      <SurfaceCard className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">AI Recommendation</h3>
        <p className="mt-4 leading-8 text-slate-600">{region.recommendation}</p>
        <div className="mt-5 text-sm font-medium text-slate-500">Confidence: {region.confidence}</div>
      </SurfaceCard>

      <button className="rounded-2xl bg-sky-700 px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_-22px_rgba(3,105,161,0.7)] transition hover:bg-sky-600" type="button">
        Generate Full Regional Report
      </button>
    </div>
  )
}
