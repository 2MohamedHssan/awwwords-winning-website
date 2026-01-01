import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedTitle from "./AnimatedTitle"

function About() {
  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'#clip',
        start:'center center',
        end:'+=800 center',
        scrub:0.5,
        pin:true,
        pinSpacing:true

      }
    })
    tl.to('.mask-clip-path',{
      width:'100%',
      height:'100%',
      borderRadius:0
    })
  },[])
  return (
    <div className="min-h-screen w-screen" id="about">
      <div className="relative mb-8 mt-36 items-center flex flex-col gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry 
        </h2>
        <AnimatedTitle 
          title="Disc<b>o</b>ver the World's<br/> l<b>a</b>rgest shared adventure" 
          clasContainer="mt-5 text-center !text-black" 
        /> 
        <div className="about-subtext font-circular ">
          <p>The Game of Games begins-your life, now an epic MMORPG </p>
          <p>Zentry unites evry player from countless games and platforms </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className=" mask-clip-path about-image">
          <img src="/img/about.webp" alt="Backgrouind" className=" absolute top-0 left-0 size-full object-cover" />
        </div>

      </div>
    </div>
  )
}

export default About