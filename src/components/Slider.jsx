import { useEffect, useState, useRef } from "react";
import TmdbApi from "../api/TmdbApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagesAndVideos } from "./ImagesAndVideos";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  // មុខងារ scroll ឆ្វេង
  const handleLeftClick = () => {
    // ត្រូវប្រាកដថា elementRef.current មានតម្លៃមុនពេលប្រើ
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  };

  // មុខងារ scroll ស្តាំ
  const handleRightClick = () => {
    // ត្រូវប្រាកដថា elementRef.current មានតម្លៃមុនពេលប្រើ
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  };
  const getTrendingMovies = () => {
    TmdbApi.getTrendingVideos.then((resp) => {
      // resp.data.results សម្រាប់ថា data នៅកន្លែង​ results ដែលមានទិន្នន័យដែលយើងចង់បាន
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  return (
    <div>
      <ChevronLeft
        size={40}
        ref={elementRef}
        onClick={() => handleLeftClick()}
        className="text-white cursor-pointer hidden md:block absolute mx-8 mt-[20rem] left-0"
      />
      <ChevronRight
        onClick={() => handleRightClick()}
        size={40}
        ref={elementRef}
        className="text-white cursor-pointer hidden md:block absolute mx-8 mt-[20rem] right-0"
      />

      <div
        className="flex w-full px-5 overflow-hidden scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => {
          return (
            <img
              key={index}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full md:h-[640px] object-cover object-left-top mr-5 rounded-md"
              alt=""
            />
          );
        })}
      </div>
      {/* this animetion and logo  */}
      <div className="flex justify-center items-center mt-5 p-5 ">
        {ImagesAndVideos.map((item) => {
          return (
            <div
              className={`flex flex-col mx-1 relative items-center  md:mx-5 border-[2px]
                 border-gray-400 transition-all   hover:scale-110 md:rounded-2xl rounded-lg
                 hover:shadow-2xl hover:shadow-amber-300  duration-300 ease-in-out cursor-pointer`}
              key={item.id}
            >
               <video
                autoPlay
                loop
                muted
                playsInline
                className="md:rounded-2xl lg:rounded-xl w-full object-cover absolute top-0 opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out"
                src={item.video}
              />
              <img className="" src={item.image} alt={item.title} />
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
