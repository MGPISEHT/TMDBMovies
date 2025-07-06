const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

// movie is the prop type for MovieCard component
const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title || movie.name}
        className="w-[110px] md:w-[200px] rounded-lg shadow-lg hover:scale-110 hover:border-[2px] 
        duration-300 hover:border-yellow-500 cursor-pointer ease-in-out flex-shrink-0"
      />
    </>
  );
};

export default MovieCard;
