import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#features', label: 'Features' },
  { href: '#placement', label: 'Placements' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200" role="banner" aria-label="Primary">
      <div className="container flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-2" aria-label="Home">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0052CC" />
                <stop offset="100%" stopColor="#172B4D" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="12" fill="url(#g2)" />
            <path d="M20 42l12-20 12 20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-[color:var(--color-blue-dark)]">JIRA Institute</span>
        </a>
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="primary-nav">
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" fill="none" stroke="#172B4D" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <nav id="primary-nav" className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {navItems.map(i => (
            <a key={i.href} href={i.href} className="text-sm text-slate-700 hover:text-[color:var(--color-blue-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-1">
              {i.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center px-4 py-2 rounded-md bg-[color:var(--color-blue-primary)] text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Join Now</a>
        </nav>
      </div>
      {open && (
        <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} className="md:hidden border-t border-slate-200 bg-white" aria-label="Mobile menu">
          <ul className="flex flex-col p-2">
            {navItems.map(i => (
              <li key={i.href}>
                <a href={i.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-slate-700 hover:bg-[color:var(--color-gray-light)] rounded">{i.label}</a>
              </li>
            ))}
            <li>
              <a href="#cta" onClick={() => setOpen(false)} className="block text-center mt-2 px-4 py-2 rounded-md bg-[color:var(--color-blue-primary)] text-white font-medium">Join Now</a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  )
}

export default Navbar
