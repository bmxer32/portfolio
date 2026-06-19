import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Workflow from '../components/Workflow'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* HeroSlider itself contains the sticky wrappers and scroll containers */}
      <HeroSlider />
      <div style={{position: 'relative', zIndex: 2}}>
        <Portfolio />
        <Skills />
        <Workflow />
        <Footer />
      </div>
    </main>
  )
}
