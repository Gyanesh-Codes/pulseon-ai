export const navItems = [
  { label: 'Platform', href: '#features' },
  { label: 'Coverage Map', href: '#coverage-map' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const metrics: { label: string; value: string; tone: 'sky' | 'teal' | 'amber' }[] = [
  { label: 'Hospitals Indexed', value: '1,240', tone: 'teal' },
  { label: 'Critical Gaps Found', value: '34', tone: 'amber' },
  { label: 'Regions Monitored', value: '82', tone: 'sky' },
]

export const trustMetrics = [
  { value: '10,000+', label: 'records processed' },
  { value: '50+', label: 'healthcare planners' },
  { value: '94%', label: 'AI confidence on routed insights' },
]

export const problems = [
  {
    title: 'Fragmented Data',
    body: 'Clinical archives, PDFs, field surveys, and hospital reports live in separate systems with no shared intelligence layer.',
  },
  {
    title: 'Lack of Visibility',
    body: 'Healthcare leaders struggle to see which districts are under-served, overburdened, or drifting away from care benchmarks.',
  },
  {
    title: 'Poor Planning',
    body: 'Investment and staffing decisions happen too late because insights arrive after the operational window has closed.',
  },
]

export const features = [
  {
    title: 'AI Document Parsing',
    body: 'Turn unstructured reports, forms, and clinical notes into structured intelligence without manual cleanup.',
    icon: 'AI',
  },
  {
    title: 'Capability Intelligence',
    body: 'Track care readiness, infrastructure capacity, and operational performance across every facility.',
    icon: 'CI',
  },
  {
    title: 'Medical Desert Detection',
    body: 'Surface underserved regions using demographic density, travel time, and facility availability signals.',
    icon: 'MD',
    primary: true,
  },
  {
    title: 'AI Query System',
    body: 'Ask plain-language questions and receive sourced, explainable answers grounded in your healthcare data.',
    icon: 'AQ',
  },
]

export const testimonials = [
  {
    name: 'Maya Tiwary',
    role: 'Programs Director, CareReach NGO',
    quote:
      'Pulseon.ai helped us identify specialist shortages two quarters earlier than our previous workflow. The map and AI summaries changed how we allocate outreach funding.',
  },
  {
    name: 'Dr. Karim Sen',
    role: 'Regional Health Planner',
    quote:
      'The platform makes scattered hospital records feel operational. We can brief leadership with one dashboard instead of stitching together six separate reports.',
  },
  {
    name: 'Anika Bose',
    role: 'Healthcare Data Analyst',
    quote:
      'The query interface gives us explainable answers with citations, which means analysts spend less time validating and more time acting on what matters.',
  },
]

export const chatSources = [
  'Metabolic Risk Profile - Patient #8821',
  'Regional Capacity Index - Greater Metro',
  'Specialized Cardiology Referral Network',
]
