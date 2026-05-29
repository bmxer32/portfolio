import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Workflow from '../components/Workflow'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{position: 'sticky', top: 0, zIndex: 1}}>
        <Hero />
      </div>
      <div style={{position: 'relative', zIndex: 2}}>
        <Portfolio />
        <Skills />
        <Workflow />
        <Footer />
      </div>
    </main>
  )
}
