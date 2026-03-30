export default function AlertBox() {
  return (
    <div className="rounded-[18px] border border-rose-200 bg-rose-50 px-4 py-4 text-rose-700">
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold">3 Missing Patient IDs</p>
        <button className="text-rose-500 transition hover:text-rose-700" type="button">
          ✎
        </button>
      </div>
    </div>
  )
}
