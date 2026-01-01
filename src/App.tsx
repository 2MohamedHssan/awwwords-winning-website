import gsap from "gsap"
import Hero from "./components/Hero"
import { ScrollTrigger } from "gsap/all"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Featuers from "./components/Featuers"

function App() {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Featuers />
    </main>
  )
}

export default App