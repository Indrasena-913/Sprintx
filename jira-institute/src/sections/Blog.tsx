const posts = [
  { title: 'JIRA for Agile Teams: A Beginner Guide', date: 'Aug 2025', href: '#', excerpt: 'Understand boards, sprints, and ceremonies with practical tips.' },
  { title: 'JQL Tips to Supercharge Your Queries', date: 'Jul 2025', href: '#', excerpt: 'Powerful query patterns to slice and dice your issues.' },
  { title: 'Becoming a JIRA Admin: Skills and Path', date: 'Jun 2025', href: '#', excerpt: 'From schemes to permissions — roadmap for admin roles.' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-[color:var(--color-gray-light)]">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Blog & Resources</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.title} className="rounded-xl border border-slate-200 bg-white p-6" aria-labelledby={p.title.replace(/\s+/g, '-')}> 
              <h3 id={p.title.replace(/\s+/g, '-')} className="font-semibold text-[color:var(--color-blue-dark)]">{p.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{p.date}</p>
              <p className="text-sm text-slate-700 mt-2">{p.excerpt}</p>
              <a href={p.href} className="mt-3 inline-block text-[color:var(--color-blue-primary)] hover:underline">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
