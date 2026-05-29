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
        <div style={{position: 'sticky', bottom: 0, zIndex: 1}}>
          <Portfolio />
        </div>
        <div style={{position: 'sticky', bottom: 0, zIndex: 2}}>
          <Skills />
        </div>
        <div style={{position: 'sticky', bottom: 0, zIndex: 3}}>
          <Workflow />
        </div>
        <div style={{position: 'relative', zIndex: 4, background: 'var(--bg-primary)'}}>
          <Footer />
        </div>
      </div>
    </main>
  )
}
