export default function Placement() {
  return (
    <section id="placement" className="py-16 bg-[color:var(--color-gray-light)]">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Placement Support</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">We partner with tech companies in Bangalore for placement drives. Our career services include resume workshops, mock interviews, and referrals.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-14 rounded-lg bg-white border border-slate-200 grid place-items-center text-slate-500 text-sm">Partner {i+1}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
