import type { LatLngExpression } from 'leaflet'

export type MapRegion = {
  id: string
  name: string
  sector: string
  score: number
  hospitals: number
  catchment: string
  confidence: string
  risk: 'Good' | 'Moderate' | 'Critical'
  color: string
  center: LatLngExpression
  positions: LatLngExpression[]
  recommendation: string
}

export const mapRegions: MapRegion[] = [
  {
    id: 'greater-metro',
    name: 'Greater Metro',
    sector: 'District Sector 04-A',
    score: 42,
    hospitals: 3,
    catchment: '12.4k',
    confidence: '94%',
    risk: 'Moderate',
    color: '#facc15',
    center: [28.653, 77.221],
    positions: [
      [28.628, 77.195],
      [28.684, 77.188],
      [28.698, 77.247],
      [28.646, 77.264],
      [28.612, 77.228],
    ],
    recommendation:
      'Current data indicates a high mortality risk in Sector 04-A. We recommend an immediate $2.4M investment in specialized cardiology equipment and telehealth routing to bridge the 14km specialist gap.',
  },
  {
    id: 'river-belt',
    name: 'River Belt',
    sector: 'District Sector 02-C',
    score: 81,
    hospitals: 5,
    catchment: '18.7k',
    confidence: '91%',
    risk: 'Good',
    color: '#16a34a',
    center: [28.605, 77.188],
    positions: [
      [28.572, 77.15],
      [28.632, 77.158],
      [28.645, 77.214],
      [28.598, 77.234],
      [28.561, 77.197],
    ],
    recommendation:
      'Maintain current staffing ratios and use River Belt as an operational benchmark for high-performing triage and referral coverage.',
  },
  {
    id: 'north-cluster',
    name: 'North Cluster',
    sector: 'District Sector 07-B',
    score: 28,
    hospitals: 2,
    catchment: '9.8k',
    confidence: '96%',
    risk: 'Critical',
    color: '#dc2626',
    center: [28.693, 77.18],
    positions: [
      [28.663, 77.142],
      [28.717, 77.154],
      [28.731, 77.207],
      [28.696, 77.229],
      [28.656, 77.194],
    ],
    recommendation:
      'Immediate intervention required. North Cluster shows severe specialist scarcity and unstable equipment coverage, raising preventable referral delays.',
  },
  {
    id: 'eastern-corridor',
    name: 'Eastern Corridor',
    sector: 'District Sector 05-D',
    score: 63,
    hospitals: 4,
    catchment: '15.1k',
    confidence: '89%',
    risk: 'Moderate',
    color: '#93c5fd',
    center: [28.646, 77.286],
    positions: [
      [28.617, 77.252],
      [28.681, 77.247],
      [28.694, 77.309],
      [28.642, 77.328],
      [28.606, 77.286],
    ],
    recommendation:
      'Expand telehealth routing and mobile diagnostics to reduce moderate access friction before the corridor trends toward a critical gap.',
  },
]
