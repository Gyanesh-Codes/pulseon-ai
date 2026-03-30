import type { ReactNode } from 'react'

export default function MessageBubble({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto max-w-md rounded-[28px] bg-sky-100 px-5 py-4 text-base leading-8 text-sky-950 shadow-[0_20px_40px_-30px_rgba(14,116,144,0.45)]">
      {children}
    </div>
  )
}
