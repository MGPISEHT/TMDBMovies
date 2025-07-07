import { useEffect, useState, useRef } from "react";
import TmdbApi from "../api/TmdbApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
       elementRef.current.scrollLeft -= screenWidth  ;
    }
  };

  // មុខងារ scroll ស្តាំ
  const handleRightClick = () => {
    // ត្រូវប្រាកដថា elementRef.current មានតម្លៃមុនពេលប្រើ
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth ; 
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
        onClick={() => handleLeftClick()}
        className="text-white cursor-pointer hidden md:block absolute mx-8 mt-[20rem] left-0"
      />
      <ChevronRight
        onClick={() => handleRightClick()}
        size={40}
        className="text-white cursor-pointer hidden md:block absolute mx-8 mt-[20rem] right-0"
      />

      <div
        className="flex w-full px-6 p-16 scroll-smooth overflow-auto md:no-scrollbar no-scrollbar"
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

    </div>
  );
};

export default Slider;
