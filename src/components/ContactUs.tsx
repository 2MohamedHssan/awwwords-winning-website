import Button from "./Button"

const ImageClip =({clipClass,src}:{clipClass:string,src:string})=>(
  <div className={clipClass}>
    <img src={`${src}`} alt="contact1" />
  </div>
)
function ContactUs() {
  return (
    <div className="my-20 w-screen px-10 min-h-96" id="contact">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className=" absolute -left-20 top-0 h-full sm:block lg:left-20 lg:w-96 w-72 overflow-hidden hidden">
          <ImageClip clipClass="contact-clip-path-1" src ="/img/contact-1.webp" />
          <ImageClip clipClass="contact-clip-path-1 translate-y-60 lg:translate-y-40" src ="/img/contact-2.webp" />
        </div>
        <div className=" absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClip clipClass="absolute md:scale-125" src ="/img/swordman-partial.webp" />
          <ImageClip clipClass="sword-man-clip-path md:scale-125" src ="/img/swordman.webp" />
        </div>
        <div className=" flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>
          <p className="m-10 w-full font-bold text-5xl md:text-[6rem] ">Let's biuld the<br/> new era of<br/> gaming together </p>
          <Button title="ContactUs" containerClass="cursor-pointer mt-10" id=""/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs