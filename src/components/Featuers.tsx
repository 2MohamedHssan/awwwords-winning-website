import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTitl=({children,className}:any)=>{
  const itemRef=useRef<any>(null)
  const [transformStyle, setTransformStyle] = useState('')
  const handleMouseMove=(e:any)=>{
    if(!itemRef.current) return
    const {left, width, top, height}=itemRef.current.getBoundingClientRect()
    const relativeX=(e.clientX - left) / width
    const relativeY=(e.clientY - top) / height
    const titlX=(relativeX-0.5)* 20
    const titlY=(relativeY-0.5)* -20
    const newTransform=`perspective(700px) rotateX(${titlX}deg) rotateY(${titlY}deg) scale3d(0.95, 0.95, 0.95)`
    setTransformStyle(newTransform)
  }
  
  const handleMouseLeave=()=>{
    setTransformStyle('')
  }

  return(
    <div onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} ref={itemRef} className={className} style={{transform:transformStyle}}>
    {children}
    </div>
  )
}

const BentoCard=({title,src,description}:any)=>{
  return(
    <div className=" relative size-full">
      <video 
        src={src} 
        muted 
        loop 
        autoPlay 
        className=" absolute left-0 top-0 size-full object-center object-cover"/>
      <div className=" relative z-10 flex flex-col justify-between size-full p-5 text-blue-50">
        <div>
          <h1 className="bento-title font-zentry special-font">{title}</h1>
          {description&&<p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
        </div>
      </div>
    </div>
  )
}

function Featuers() {
  return (
    <section className=" bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-50">Into the Metagame Layer</p>
          <p className="font-circular text-lg max-w-md text-blue-50 opacity-50">Immerse yourself in a rich and ecer-expanding universe 
            where a vibrant array of products converge into an  interconnected
            voerlay experiecnce on you wolrd.
          </p>
        </div>
        <BentoTitl className="border-hsla relative mb-7 h-96 w-[96%] md:w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4" 
            title={<>radi<b>n</b>t</>}
            description="A Cross-platform metagame app, turning your activeties  across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTitl>
        <div className="grid h-[135vh] w-[96%] md:w-full grid-cols-2 grid-rows-2 gap-7">
          <BentoTitl className="bento-tilt_1 border-hsla col-span-2 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              title={<>Zig<b>m</b>a</>} 
              src="/videos/feature-2.mp4"
              description="An anime and gaming-inspierd NFT collection - the IP primed of expansion"
            />
          </BentoTitl>
          <BentoTitl className="bento-tilt_1 md:ms-0 border-hsla col-span-2 row-span-1 md:col-span-1">
            <BentoCard
              title={<>n<b>e</b>xus</>} 
              src="/videos/feature-3.mp4"
              description="An anime and gaming-inspierd NFT collection - the IP primed of expansion"
            />
          </BentoTitl>
          <BentoTitl className="bento-tilt_1 md:ms-0 border-hsla col-span-2 row-span-1 md:col-span-1">
            <BentoCard
              title={<>az<b>u</b>l</>} 
              src="/videos/feature-4.mp4"
              description="An anime and gaming-inspierd NFT collection - the IP primed of expansion"
            />
          </BentoTitl>
          <BentoTitl className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300">
              <h1 className="bento-title special-font max-w-64 text-black">M<b>O</b>re co<b>m</b>ing s<b>o</b>on.</h1>
              <TiLocationArrow className="m-5 scale-[4] self-end"/>
            </div>
          </BentoTitl>
          <BentoTitl className="bento-tilt_2">
            <video src="/videos/feature-5.mp4"
             className="size-full object-center object-cover" loop muted autoPlay/>
          </BentoTitl>
        </div>
      </div>
    </section>
  )
}

export default Featuers