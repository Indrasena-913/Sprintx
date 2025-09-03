import { motion } from 'framer-motion'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-b from-white to-[color:var(--color-gray-light)] py-16">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold text-[color:var(--color-blue-dark)]">
            Master JIRA with Placement Support in Bangalore
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-slate-600 max-w-xl">
            Industry-aligned curriculum, hands-on labs, real Agile projects, and 100% placement assistance. Weekday and weekend batches available.
          </motion.p>
          <div id="cta" className="mt-6 flex flex-wrap gap-3">
            <Button>Join Now</Button>
            <Button variant="secondary">Book Free Demo</Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">Trusted by hiring partners and led by Atlassian-certified mentors.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-[color:var(--color-blue-dark)]/5 border border-slate-200 flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="gHero" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="100%" stopColor="#172B4D" />
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="12" fill="url(#gHero)" />
              <path d="M20 42l12-20 12 20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
