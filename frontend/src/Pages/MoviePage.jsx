import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Play } from "lucide-react";


const MoviePage = () => {
  const id = useParams()["id"];
  const [movie, setMovie] = useState(null);

  console.log(id);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzFiMzBmNGYyZjc5Y2ZkZWVkNDZiMTdjOTBiYTAwYyIsIm5iZiI6MTcxNTI4ODgyOS4xMzc5OTk4LCJzdWIiOiI2NjNkM2FmZGY2NDdmZTc0NjBmMTBmNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MVQpM2Lzh2ZWBWe3lwAVqSdHDp3Uw71pEQMpAw9RS9E",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div
        className="relative h-[60vh] flex item-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
        <div className="z-10 gap-10 p-10 flex items-end">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            className="rounded-lg shadow-lg w-48 hidden md:block"
          />

          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center gap-6 mb-2">
              <span>⭐ {movie.vote_average?.toFixed(1)}</span>
              <span className="text-[#756d6c]">{movie.release_date}</span>
              <span>{movie.runtime} minutes</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-2">
              {movie.genres.map((genre) => (
                <span className="bg-gray-800 py-3 px-1 rounded-full text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="max-w-3xl text-gray-200 mb-3">{movie.overview}</p>
            <button className="flex justify-center items-center bg-[#e50914] rounded-full hover:bg-gray-400 py-3 px-4 text-white cursor-pointer text-sm md:text-base">
              <Play className="mr-1 w-4 h-5 md:w-5 md:h-5" /> Watch now
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2>Details</h2>
        <div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
