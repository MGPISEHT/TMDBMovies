const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const HrMovieCard = ({ movie }) => {
  return (
    <div  className="relative w-[300px] md:w-[400px] rounded-lg shadow-lg hover:scale-110 hover:border-[2px]">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title || movie.name}
        className="w-[3000px] md:w-[400px] rounded-lg shadow-lg hover:scale-110 hover:border-[2px]"
      />
    </div>
  );
};

export default HrMovieCard;
