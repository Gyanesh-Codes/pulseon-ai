import type { LatLngExpression } from 'leaflet'

export const sidebarItems = [
  { label: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
  { label: 'Maps', icon: 'maps', to: '/maps' },
  { label: 'Hospitals', icon: 'hospitals', to: '/hospitals' },
  { label: 'Insights', icon: 'insights', to: '/insights' },
  { label: 'Data Upload', icon: 'upload', to: '/data-upload' },
  { label: 'Settings', icon: 'settings', to: '/settings' },
]

export const topNavItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Insights', to: '/insights' },
  { label: 'Data Upload', to: '/data-upload' },
]

export const kpis = [
  { label: 'Total Hospitals', value: '1,240', trend: '+2.4%', icon: 'H', tone: 'sky' },
  { label: 'Regions at Risk', value: '12', trend: 'At risk', icon: 'R', tone: 'amber' },
  { label: 'Critical Gaps', value: '34', trend: 'High priority', icon: 'C', tone: 'slate' },
  { label: 'Avg Healthcare Score', value: '78.5', trend: 'Above avg', icon: 'A', tone: 'teal' },
] as const

export const monthlyPoints = [2980, 3070, 2990, 2520, 2010, 2280, 2470, 2230, 1960, 1820, 2460, 2050]
export const quarterlyPoints = [3120, 2260, 2410, 1980]
export const monthlyLabels = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec']
export const quarterlyLabels = ['Q1', 'Q2', 'Q3', 'Q4']

export const quickActions = ['Add Hospital', 'Generate Insight', 'Upload Data']

export const alertCards = [
  {
    tag: 'critical',
    title: 'Equipment Shortage in Region 4',
    description: 'Dialysis supply levels dropped 30% below the safety threshold in centralized review.',
    timestamp: '2h ago',
    action: 'Resolve',
  },
  {
    tag: 'success',
    title: "Efficiency Gains: Saint Luke's",
    description: 'Patient processing time improved by 12% following AI-driven staff reallocation.',
    timestamp: '5h ago',
    action: 'Details',
  },
  {
    tag: 'info',
    title: 'Regional Score Divergence',
    description: 'Unexpected 4-point drop in healthcare score for Northern Hospital cluster.',
    timestamp: '8h ago',
    action: 'Audit',
  },
]

export const dashboardMapRegions = [
  {
    name: 'South Care Zone',
    score: 81,
    hospitals: 5,
    color: '#16a34a',
    center: [28.587, 77.186] as LatLngExpression,
    positions: [
      [28.564, 77.148],
      [28.603, 77.152],
      [28.618, 77.198],
      [28.584, 77.221],
      [28.553, 77.194],
    ] as LatLngExpression[],
  },
  {
    name: 'Central Capacity Zone',
    score: 58,
    hospitals: 3,
    color: '#eab308',
    center: [28.626, 77.236] as LatLngExpression,
    positions: [
      [28.606, 77.206],
      [28.651, 77.208],
      [28.665, 77.249],
      [28.628, 77.281],
      [28.595, 77.246],
    ] as LatLngExpression[],
  },
  {
    name: 'Northern Gap Cluster',
    score: 34,
    hospitals: 2,
    color: '#dc2626',
    center: [28.677, 77.191] as LatLngExpression,
    positions: [
      [28.653, 77.156],
      [28.694, 77.168],
      [28.708, 77.206],
      [28.678, 77.232],
      [28.648, 77.202],
    ] as LatLngExpression[],
  },
]

export const chatCitations = ['District Capacity Review v2.4', 'Hospital Readiness Upload - March', 'AI Field Alert Stream']
