
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'


export default function Home() {
  return (
    <main>
  
      <Hero />
       <Section1 />
      <Section2 />
      <Section3 /> 
      <MenuShowcase />
      <Gallery />
      <Testimonials />
      <Blog />

    </main>
  )
}