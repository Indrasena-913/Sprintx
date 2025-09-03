import Testimonial from '../components/Testimonial'

const data = [
  { name: 'Aishwarya N', role: 'Project Coordinator @ SaaSCo', imageUrl: 'https://i.pravatar.cc/100?img=1', quote: 'Structured learning and real projects helped me switch to a project role.' },
  { name: 'Karthik S', role: 'Scrum Master @ StartupX', imageUrl: 'https://i.pravatar.cc/100?img=5', quote: 'Great interview prep and JQL deep dives. Highly recommend.' },
  { name: 'Neha Gupta', role: 'JIRA Admin @ FinTech', imageUrl: 'https://i.pravatar.cc/100?img=11', quote: 'Practical labs mirror real company workflows. Placement team is solid.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map(t => <Testimonial key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  )
}
