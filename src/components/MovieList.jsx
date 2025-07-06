import { useEffect, useState, useRef } from "react";
import TmdbApi from "../api/TmdbApi.jsx";
import MovieCard from "./MovieCard.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HrMovieCard from "./HrMovieCard.jsx";

const MovieList = ({ genreID, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const handleLeftClick = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  };

  const handleRightClick = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  };

  const getMovieByGenereId = () => {
    setIsLoading(true);
    setError(null);

    // use TmdbApi to fetch movies by genre ID
    TmdbApi.getMovieByGenereId(genreID)
      .then((resp) => {
        setMovieList(resp.data.results);
        console.log(
          "Fetched Movies for genreID",
          genreID,
          ":",
          resp.data.results
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies by genre:", err);
        setError("Error loading movies. Please try again.");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovieByGenereId();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 text-center text-xl mt-5">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="relative">
      <ChevronLeft
        size={35}
        className="text-white text-4xl hidden md:block absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-1 bg-black/50 rounded-full"
        onClick={handleLeftClick}
      />
      <ChevronRight
        size={35}
        className="text-white text-4xl  hidden md:block absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-1 bg-black/50 rounded-full"
        onClick={handleRightClick}
      />
      <div
        ref={elementRef}
        className="flex scroll-smooth md:gap-8 gap-3 overflow-x-scroll pt-5 pb-5 px-3 no-scrollbar"
        style={{
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
        }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full min-h-[300px]">
            <h1 className="text-white text-center text-2xl font-bold">
              Loading...
            </h1>
          </div>
        ) : (
          movieList.map((item, index) => (
            <>
              {/* Use index (mod3) to check whether index is divisible by 3 or not ( equal to 0 or not). */}
              {index_ % 3 == 0 ? (
                <HrMovieCard key={item.id} movie={item} />
              ) : (
                <MovieCard key={item.id} movie={item} />
              )}
            </>
          ))
        )}
        {!isLoading && movieList.length === 0 && (
          <div className="text-white text-center text-xl mt-5 w-full">
            No movies found for this genre.
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
