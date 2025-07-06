import { useEffect, useState } from "react";
import HeroBg2 from "../assets/herobg2.jpg"
import { Bookmark, Play } from "lucide-react"

const Hero = () => {

  const [movie, setMovie] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzFiMzBmNGYyZjc5Y2ZkZWVkNDZiMTdjOTBiYTAwYyIsIm5iZiI6MTcxNTI4ODgyOS4xMzc5OTk4LCJzdWIiOiI2NjNkM2FmZGY2NDdmZTc0NjBmMTBmNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MVQpM2Lzh2ZWBWe3lwAVqSdHDp3Uw71pEQMpAw9RS9E'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => {
      if(res.results && res.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * res.results.length);
        setMovie(res.results[randomIndex])
      }
    })
    .catch(err => console.error(err));

  }, [])

  if(!movie) {
    return <p>Loading...</p>
  }

  return (
    <div className="text-white relative">
        <img src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } alt="Hero Background" className="w-full rounded-2xl h-[450px] object-center object-cover"/>

        <div className="flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium">
            <button className="flex justify-center items-center bg-white rounded-full hover:bg-gray-400 py-3 px-4 text-[#e50914] cursor-pointer text-sm md:text-base"><Bookmark className="mr-1 w-4 h-5 md:w-5 md:h-5"/>Save for later</button>
            <button className="flex justify-center items-center bg-[#e50914] rounded-full hover:bg-gray-400 py-3 px-4 text-white cursor-pointer text-sm md:text-base"><Play className="mr-1 w-4 h-5 md:w-5 md:h-5"/> Watch now</button>
        </div>
    </div>
  )
}

export default Hero