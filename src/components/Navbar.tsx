import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"
import { useWindowScroll } from "react-use"
import gsap from "gsap"

function Navbar() {
  const {y}=useWindowScroll()
  const navRef=useRef<any>(null)
  const audoRef=useRef<any>(null)
  const [indecator, setIndecator] = useState(false)
  const [audioPlay, setAudioPlay] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavVidabile, setIsNavVidabile] = useState(true)

  const toggoleIudo=()=>{
    setIndecator(prev=>!prev)
    setAudioPlay(prev=>!prev)
  }
  useEffect(() => {
    if (y===0) {
      navRef.current.classList.remove('floating-nav')
      setIsNavVidabile(true)
    }else if(y >lastScrollY){
      setIsNavVidabile(false)
      navRef.current.classList.add('floating-nav')
    }else if(y<lastScrollY){
      setIsNavVidabile(true)
      navRef.current.classList.add('floating-nav')
    }
    setLastScrollY(y)
  
  }, [y,lastScrollY])
  

  useEffect(() => {
    gsap.to(navRef.current,{
      y:isNavVidabile ?0 : -100,
      opacity: isNavVidabile ? 1 : 0,
      duration:0.2  
    })
  }, [isNavVidabile])
  
  useEffect(()=>{
    if(audioPlay){
      audoRef.current.play()
    }else{
      audoRef.current.pause()
    }
  },[audioPlay])
  const navItems=[
    'Nexus','Vault','Prologue','About','Contact'
  ]
  return (
    <div className="fixed top-4 sm:inset-x-6 inset-0 z-50 h-16 border-none transition-all duration-700" 
      ref={navRef}>
      <header className="absolute top-1/2 -translate-y-1/2 w-full">
      <nav className="flex size-full items-center justify-between p-4">
        <div className="flex items-center gap-7 ">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <Button id="products-button" title="Products" rightIcon={<TiLocationArrow/>} containerClass="bg-blue-500 md:flex hidden items-center gap-1 justify-center" />
        </div>
        <div className="flex h-full items-center">
          <div className="hidden md:block">
            {navItems.map(item=>(
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">{item}</a>
            ))}
          </div>
          <button onClick={toggoleIudo} className=" cursor-pointer flex ml-10 items-center space-x-0.5">
            <audio src="/audio/loop.mp3" loop ref={audoRef} />
            {[1,2,3,4].map(bar=>(
              <div key={bar} className={`indicator-line  ${indecator?"active":''}`} style={{animationDuration:`${bar*0.1}s`, height:bar+3}}></div>
            ))}
          </button>
        </div>
      </nav>
      </header>
    </div>
  )
}

export default Navbar