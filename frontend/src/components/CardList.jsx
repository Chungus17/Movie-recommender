import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = ({ title, category }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzFiMzBmNGYyZjc5Y2ZkZWVkNDZiMTdjOTBiYTAwYyIsIm5iZiI6MTcxNTI4ODgyOS4xMzc5OTk4LCJzdWIiOiI2NjNkM2FmZGY2NDdmZTc0NjBmMTBmNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MVQpM2Lzh2ZWBWe3lwAVqSdHDp3Uw71pEQMpAw9RS9E",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">
        {title}
      </h2>

      <Swiper slidesPerView={"auto"} spaceBetween={10} className="MySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
              alt="Image"
              className="h-44 w-full object-center object-cover"
            />
            <p className="text-center pt-2">{item.original_title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
