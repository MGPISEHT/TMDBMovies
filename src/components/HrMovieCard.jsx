const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const HrMovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title || movie.name}
        className="w-[110px] md:w-[260px] scroll-smooth duration-300 ease-in-out cursor-pointer rounded-lg shadow-lg hover:scale-110 hover:border-[2px]"
      />
    </>
  );
};

export default HrMovieCard;
