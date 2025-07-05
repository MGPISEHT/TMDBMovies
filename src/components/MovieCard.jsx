import MovieList from "./MovieList";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} 
      className="w-[110px md:w-[200px]" 
      />
    </>
  );
};

export default MovieCard;
