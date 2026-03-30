import { useEffect, useState, type DragEvent } from 'react'
import AppShell from '../components/layout/AppShell'
import UploadBox from '../components/upload/UploadBox'
import FileProgressCard from '../components/upload/FileProgressCard'
import ExtractionPanel from '../components/upload/ExtractionPanel'
import { supportedFormats } from '../data/upload'

export default function DataUploadPage() {
  const [dragging, setDragging] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress === 0 || progress >= 100) return
    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 5, 100))
    }, 180)
    return () => window.clearInterval(timer)
  }, [progress])

  const startUpload = () => setProgress((current) => (current >= 100 ? 100 : current || 12))

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragging(false)
    startUpload()
  }

  return (
    <AppShell>
      <section className="rounded-[34px] border border-white/70 bg-white/82 p-6 shadow-[0_34px_100px_-64px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">Admin Only</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">256-bit Encryption Active</span>
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-slate-950">Secure Data Intake</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Upload clinical archives, patient records, or diagnostic reports. Our AI automatically extracts core metrics for instant archival integration.
        </p>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <UploadBox
              dragging={dragging}
              onDragEnter={(event) => {
                event.preventDefault()
                setDragging(true)
              }}
              onDragLeave={(event) => {
                event.preventDefault()
                setDragging(false)
              }}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              onImport={startUpload}
              onSelect={startUpload}
            />

            {progress > 0 ? <FileProgressCard progress={progress} /> : null}

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-slate-100 bg-slate-50 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Supported Formats</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {supportedFormats.map((format) => (
                    <span key={format} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-slate-100 bg-slate-50 px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Need Assistance?</p>
                <button className="mt-4 text-sm font-semibold text-sky-700 underline underline-offset-4" type="button">
                  Read Upload Guide
                </button>
              </div>
            </div>
          </div>

          <ExtractionPanel ready={progress >= 100} />
        </div>
      </section>
    </AppShell>
  )
}
