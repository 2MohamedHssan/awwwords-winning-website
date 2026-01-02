import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  const Links=[
    {herf:'#',icon:<FaDiscord/>},
    {herf:'https://www.linkedin.com/in/med0-hassan/',icon:<FaLinkedin/>},
    {herf:'https://github.com/2MohamedHssan',icon:<FaGithub/>}
  ]
  return (
    <footer className=" w-screen bg-violet-300 py-4 text-black">
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className=" font-light text-center md:text-left">&copy; by Mohamed 2026. All rights reserved</p>
        <div className="flex justify-center gap-4 md:justify-start">
          {Links.map(({herf,icon},index)=>(
            <a
              key={index} 
              href={`${herf}`}
              target="_blank"
              rel="nooperner noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
        <a href="#" className="text-center text-sm hover:underline md:text-right">
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer