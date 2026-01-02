import gsap from "gsap"
import { useEffect, useRef } from "react"
interface AnimatedTitleProps{
  title:string;
  children?:any;
  clasContainer:string
} 
function AnimatedTitle({children,title, clasContainer}:AnimatedTitleProps) {
  const containerRef=useRef<any>(null)

  useEffect(()=>{
    const ctx=gsap.context(()=>{
      const tl=gsap.timeline({
        scrollTrigger:{
          trigger:containerRef.current,
          start:'100 bottom',
          end:'center bottom',
          toggleActions:'play none none reverse'
        }
      })
      tl.to('.animated-word',{
        opacity:1,
        transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease:'power2.inOut',
        stagger:0.02
      })
      return ()=>ctx.revert()
    },containerRef)  
  },[])
  return (
      <div ref={containerRef} className={`animated-title ${clasContainer}`}>
        {title.split('<br/>').map((line:string,index:number)=>(
          <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
            {line.split(' ').map((word:string,i:number)=>(
              <span className="animated-word" key={i} dangerouslySetInnerHTML={{__html:word}}/>
            ))}
          </div>
        ))}
        {children}
      </div>
  )
}

export default AnimatedTitle