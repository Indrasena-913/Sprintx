import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
        <main id="main" className="min-h-screen">
          <div className="container py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-blue-dark)]">
              Master JIRA with Placement Support in Bangalore
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              We are building your production-ready site scaffold now. Next, the full sections, components, and animations will appear here.
            </p>
          </div>
        </main>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
