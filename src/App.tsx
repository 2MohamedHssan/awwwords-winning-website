import gsap from "gsap"
import Hero from "./components/Hero"
import { ScrollTrigger } from "gsap/all"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Featuers from "./components/Featuers"
import Story from "./components/Story"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Featuers />
      <Story />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App