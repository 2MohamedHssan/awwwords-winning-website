import gsap from "gsap"
import Hero from "./components/Hero"
import { ScrollTrigger } from "gsap/all"

function App() {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <div className="min-h-screen bg-blue-500"/>
    </main>
  )
}

export default App