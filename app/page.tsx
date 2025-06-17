
import Gallery from './components/Gallery'
// import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
// import Section1 from './components/Section1'
import Section2 from './components/Sectiontwo'
import Section3 from './components/Section3'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Hero from './section/hero'
import DiscoverSection from './section/discover'
import ImageShowcase from './components/ImageShowcase'
import Sectiontwo from './components/Sectiontwo'




export default function Home() {
  return (
    <main>
  
      {/* <Hero /> */}
      <Hero />
      <DiscoverSection />
       {/* <Section1 /> */}
      <ImageShowcase />
      <Sectiontwo />
      <Section3 /> 
      <MenuShowcase />
      <Testimonials />
       <Gallery />
  

    </main>
  )
}