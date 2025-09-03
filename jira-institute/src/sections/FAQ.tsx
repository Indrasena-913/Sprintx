const faqs = [
  { q: 'What is the course duration?', a: 'Beginner to Pro track spans 8-10 weeks with weekend and weekday options.' },
  { q: 'Do you provide placement support?', a: 'Yes. Resume building, mock interviews, and placement drives with partners.' },
  { q: 'Is the course online or offline?', a: 'Both. Bangalore classroom sessions and live online cohorts are available.' },
  { q: 'What are the fees?', a: 'Packages start at ₹14,999. EMI options available.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-6" aria-expanded={i === 0} open={i === 0}>
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-[color:var(--color-blue-dark)]">{f.q}</span>
                <span className="text-slate-500">+</span>
              </summary>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
