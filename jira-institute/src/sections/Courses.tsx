import Card from '../components/Card'

const courses = [
  { title: 'JIRA Beginner', points: ['JIRA fundamentals', 'Issue types & workflows', 'Boards & filters', 'Reporting basics'] },
  { title: 'JIRA Advanced', points: ['Advanced workflows', 'Permissions & schemes', 'Automation', 'JQL mastery'] },
  { title: 'Agile + JIRA', points: ['Scrum & Kanban', 'Backlog grooming', 'Sprint planning', 'Velocity & burndown'] },
  { title: 'Project Management', points: ['Roadmaps', 'Dependencies', 'Releases', 'Cross-team collaboration'] },
  { title: 'Corporate Training', points: ['Custom curriculum', 'Onsite/Remote', 'Team labs', 'Migration support'] },
]

export default function Courses() {
  return (
    <section id="courses" className="py-16 bg-[color:var(--color-gray-light)]">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Courses Offered</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <Card key={c.title} title={c.title}>
              <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                {c.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
