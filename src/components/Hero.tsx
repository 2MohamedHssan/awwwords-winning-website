import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)
  
  const totalVideos=4
  const nextVideoRef = useRef<any>(null)
  const newIndex= (currentIndex % totalVideos) +1
  const backgroundIndex = currentIndex === totalVideos ? 1 : currentIndex
  
  const handleVDClick=()=>{
    setHasClicked(true)
    setCurrentIndex(newIndex)
  }


  useGSAP(()=>{
    if(hasClicked){
      gsap.set('#next-video',{visibility:'visible'})
      gsap.to('#next-video',{
        transformOrigin:'center center',
        scale:1,
        duration:1,
        ease:'power1.inOut',
        width:'100%',
        height:'100%',
        onStart:()=>nextVideoRef.current?.play()
      })

      gsap.from('#current-video',{
        duration:1.5,
        ease:'power1.inOut',
        transformOrigin:'center center',
        scale:0,
      })
    }

  },{dependencies: [currentIndex], revertOnUpdate:true})
  const getVideoSrc=(index:number) => `/videos/hero-${index}.mp4` 

  const handleVdloaded=()=>{
    setLoadedVideos(prev=>prev+1)
  }

  useGSAP(()=>{
    gsap.set('#video-frame',{
      clipPath:'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius:'0 0 50% 10%'
    })
    
    gsap.from('#video-frame',{
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius:'0 0 0 0',
      ease:'power1.inOut',
      scrollTrigger:{
        trigger:'#video-frame',
        start:'center center',
        end:'bottom center',
        scrub:true
      }
    })
  },[])

  useEffect(()=>{
    if(loadedVideos == totalVideos -1){
      setIsLoading(false)
    }
  },[loadedVideos])
  
  return (
    <div className="relative h-dvh overflow-x-hidden">
      {isLoading && (
        <div className="flex-center  absolute w-screen overflow-hidden h-dvh z-100 bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
          </div>
        </div>
      )}
      <div className="relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75 " id="video-frame">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" 
              onClick={handleVDClick}
            >
              <video
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVdloaded}
                src={getVideoSrc(newIndex)}
              /> 
            </div>
          </div>

          <video 
            ref={nextVideoRef} 
            src={getVideoSrc(currentIndex)} 
            loop 
            muted 
            id="next-video"
            className=" absolute-center invisible absolute z-40 size-64 object-center object-cover" 
            onLoadedData={handleVdloaded}
          />

          <video 
            src={getVideoSrc(backgroundIndex)} 
            autoPlay 
            loop 
            muted
            className="absolute z-20 size-full top-0 left-0 object-center object-cover" 
            onLoadedData={handleVdloaded}
          />
        </div>
        <h1 className="special-font hero-heading font-zentry absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className=" absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5  sm:px-10"> 
            <h1 className="special-font hero-heading font-zentry text-blue-100">redefi<b>n</b>e</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br/> Unleash the Play Economy </p>
            <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1"/>
          </div>
        </div>
      </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
          G<b>a</b>ming
        </h1>
    </div>
  )
}

export default Hero