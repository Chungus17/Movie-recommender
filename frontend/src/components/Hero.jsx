import HeroBg2 from "../assets/herobg2.jpg"
import { Bookmark, Play } from "lucide-react"

const Hero = () => {
  return (
    <div className="text-white relative">
        <img src={ HeroBg2 } alt="Hero Background" className="w-full rounded-2xl h-[450px] object-center object-cover"/>

        <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
            <button className="flex justify-center items-center bg-white rounded-full hover:bg-gray-400 py-3 px-4 text-[#e50914] cursor-pointer text-sm md:text-base"><Bookmark className="mr-1 w-4 h-5 md:w-5 md:h-5"/>Save for later</button>
            <button className="flex justify-center items-center bg-[#e50914] rounded-full hover:bg-gray-400 py-3 px-4 text-white cursor-pointer text-sm md:text-base"><Play className="mr-1 w-4 h-5 md:w-5 md:h-5"/> Watch now</button>
        </div>
    </div>
  )
}

export default Hero