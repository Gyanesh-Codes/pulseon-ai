import type { ReactNode } from 'react'
import Sidebar from '../dashboard/Sidebar'
import Topbar from '../dashboard/Topbar'

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.42),_rgba(248,250,252,0.88)_35%,_#eef7f6_100%)] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        <Sidebar />
        <main className="min-w-0 flex-1 space-y-6">
          <Topbar />
          {children}
        </main>
      </div>
    </div>
  )
}
