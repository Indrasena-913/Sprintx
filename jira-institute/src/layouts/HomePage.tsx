import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Courses from '../sections/Courses'
import Features from '../sections/Features'
import Placement from '../sections/Placement'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import Blog from '../sections/Blog'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Placement />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
