import { useEffect, useState } from "react";
import TmdbApi from "../api/TmdbApi.jsx";
import MovieCart from "./MovieCard.jsx";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieList = ({ genreID }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getMovieByGenereId();
  }, []);

  const getMovieByGenereId = () => {
    setIsLoading(true);
    TmdbApi.getMovieByGenereId(genreID)
      .then((resp) => {
        setMovieList(resp.data.results);
        console.log(resp.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies by genre:", error);
        setIsLoading(false);
      });
  };
  return (
    <div className="flex overflow-x-auto scroll-smooth gap-8 p-4">
      {isLoading ? (
        <div>
          <h1 className="text-white text-center text-2xl font-bold">
            Loading...
          </h1>
        </div>
      ) : (
        movieList.map((item) => <MovieCart movie={item} />)
      )}
    </div>
  );
};

export default MovieList;
