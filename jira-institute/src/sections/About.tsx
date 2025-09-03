import { motion } from 'framer-motion'
import Card from '../components/Card'

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-[color:var(--color-blue-dark)]">About Us</motion.h2>
        <p className="mt-3 text-slate-600 max-w-3xl">We are Bangalore’s dedicated JIRA training institute inspired by Atlassian’s craftsmanship. Our mission is to create job-ready professionals who can manage Agile workflows, deliver projects efficiently, and excel in modern product teams.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card title="Mission" subtitle="Enable job-ready JIRA professionals">
            <p className="text-sm text-slate-700">Deliver hands-on training with real project scenarios, ensuring each learner masters JIRA admin and user workflows.</p>
          </Card>
          <Card title="Vision" subtitle="Bridge skills to careers">
            <p className="text-sm text-slate-700">Become India’s most trusted institute for Atlassian tooling with strong industry partnerships.</p>
          </Card>
          <Card title="Why Us" subtitle="Atlassian-style excellence">
            <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Atlassian-certified mentors</li>
              <li>Capstone projects with Agile ceremonies</li>
              <li>Placement-focused mentorship</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
