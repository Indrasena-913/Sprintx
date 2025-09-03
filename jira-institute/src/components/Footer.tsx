export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-[color:var(--color-gray-light)]" role="contentinfo">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="100%" stopColor="#172B4D" />
                </linearGradient>
              </defs>
              <rect width="64" height="64" rx="12" fill="url(#g3)" />
              <path d="M20 42l12-20 12 20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-[color:var(--color-blue-dark)]">JIRA Institute</span>
          </div>
          <p className="text-sm text-slate-600">Master JIRA with hands-on labs, projects, and career mentorship in Bangalore.</p>
        </div>
        <nav aria-label="Quick links" className="text-sm">
          <h3 className="font-semibold text-[color:var(--color-blue-dark)] mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
          </ul>
        </nav>
        <nav aria-label="Contact" className="text-sm">
          <h3 className="font-semibold text-[color:var(--color-blue-dark)] mb-2">Contact</h3>
          <ul className="space-y-1">
            <li><a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a></li>
            <li><a href="mailto:admissions@jirainstitute.in" className="hover:underline">admissions@jirainstitute.in</a></li>
            <li>Bangalore, Karnataka</li>
          </ul>
        </nav>
        <div className="text-sm">
          <h3 className="font-semibold text-[color:var(--color-blue-dark)] mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <a aria-label="Twitter" href="#" className="hover:opacity-80"><svg width="20" height="20" viewBox="0 0 24 24" fill="#172B4D"><path d="M22 5.8c-.6.3-1.2.5-1.8.6.7-.4 1.2-1 1.5-1.8-.6.3-1.3.6-2 .7-.6-.6-1.4-1-2.3-1-1.8 0-3.2 1.5-3.2 3.2 0 .3 0 .6.1.8-2.6-.1-5-1.4-6.5-3.4-.3.6-.5 1.2-.5 1.9 0 1.1.5 2.1 1.4 2.7-.5 0-1-.2-1.5-.4 0 0 0 .1 0 .1 0 1.6 1.1 2.8 2.5 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.2 1.6 2.2 3.1 2.2-1.1.9-2.4 1.5-3.9 1.5H4c1.4.9 3.1 1.4 4.9 1.4 5.9 0 9.2-4.9 9.2-9.2v-.4c.6-.4 1.2-1 1.6-1.6z"/></svg></a>
            <a aria-label="LinkedIn" href="#" className="hover:opacity-80"><svg width="20" height="20" viewBox="0 0 24 24" fill="#172B4D"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 text-center text-xs text-slate-500 py-4">© {new Date().getFullYear()} JIRA Institute. All rights reserved.</div>
    </footer>
  )
}
