export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[color:var(--color-blue-dark)]">Contact Us</h2>
          <p className="mt-3 text-slate-600">Have questions? Reach out for counseling or batch schedules.</p>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div>
              <label className="block text-sm font-medium text-[color:var(--color-blue-dark)]" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[color:var(--color-blue-dark)]" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[color:var(--color-blue-dark)]" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[color:var(--color-blue-dark)]" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-[color:var(--color-blue-primary)] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Submit</button>
          </form>
        </div>
        <div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
            <iframe title="JIRA Institute Bangalore" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Bangalore&output=embed"></iframe>
          </div>
          <div className="mt-4 text-sm text-slate-700">
            <div><strong>Phone:</strong> <a href="tel:+919999999999" className="text-[color:var(--color-blue-primary)]">+91 99999 99999</a></div>
            <div><strong>Email:</strong> <a href="mailto:admissions@jirainstitute.in" className="text-[color:var(--color-blue-primary)]">admissions@jirainstitute.in</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
