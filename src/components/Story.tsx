import { useRef } from "react"
import AnimatedTitle from "./AnimatedTitle"
import gsap from "gsap"
import Button from "./Button"

function Story() {
  const frameRef=useRef<HTMLImageElement | null>(null)
  const hanldeMouseLeave=()=>{

    gsap.to(frameRef.current,{
      duration:0.3,
      rotateX:0,
      rotateY:0,
      ease:'power1.inOut'
    })
  }

  const hanldeMouseMove=(e:any)=>{
    const {clientX,clientY}=e
    if(!frameRef.current) return
    const rect =frameRef.current.getBoundingClientRect()
    const x= clientX -rect.left 
    const y=clientY - rect.top

    const centerX=rect.width /2
    const centerY=rect.height /2
    
    const rotateX =((x-centerY) / centerY)*10 
    const rotateY =((y-centerX) / centerX)* -10
    
    gsap.to(frameRef.current,{
      duration:0.3,
      rotateX,
      rotateY,
      transformPerspective:500,
      ease:'power1.inOut'
    })
  }

  return (
    <section className="min-h-dvh w-screen bg-black text-blue-50" id="prologue">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">the multiversal ip world </p>
        <div className="relative size-full">
          <AnimatedTitle 
            title="The Story of<br/> a hidden realm" 
            clasContainer="mt-5 pointer-event-none mix-blend-difference z-10 relative"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img src="/img/entrance.webp"
                  alt="entrance" 
                  onMouseUp={hanldeMouseLeave}
                  onMouseEnter={hanldeMouseLeave}
                  onMouseLeave={hanldeMouseLeave}
                  onMouseMove={hanldeMouseMove}
                  className="object-contain" 
                  ref={frameRef} />
              </div>
            </div>
          </div>
          <div className="mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full flex-col w-fit md:items-start items-center">
              <p className="mt-3 max-w-sm text-center text-violet-50 md:text-start font-circular ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor culpa? Tempora,
                 libero accusamus dignissimos error natus nisi perspiciatis suscipit architecto
                harum ipsum.Incidunt est qui, ipsum sint harum voluptatem?
              </p>
              <Button id="real-button" title="discover prologue" containerClass="mt-5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story