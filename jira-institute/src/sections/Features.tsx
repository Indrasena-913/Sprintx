const features = [
  { title: 'Hands-on Labs', desc: 'Guided labs that simulate real JIRA scenarios.' },
  { title: 'Live Projects', desc: 'Work on Agile sprints with standups and retros.' },
  { title: 'Certifications', desc: 'Preparation for Atlassian certifications.' },
  { title: 'Placement Support', desc: 'Mock interviews, resume, and referrals.' },
  { title: 'Corporate Tie-ups', desc: 'Hiring partners across product and service firms.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Features & Benefits</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-[color:var(--color-blue-primary)] font-semibold">{f.title}</div>
              <p className="text-sm text-slate-700 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
