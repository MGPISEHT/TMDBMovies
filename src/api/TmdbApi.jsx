import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

// const api_key = process.env.VITE_THE_MOVIE_DB_API_KEY; use for Node.js not vite
const api_key = import.meta.env.VITE_THE_MOVIE_DB_API_KEY;

// Check if the API key is loaded
if(!api_key){
  console.log("API key is not loaded. Please check your .env file ensure your using VITE_THE_MOVIE_DB_API_KEY in file.");
}

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const movieByGenereBaseURL = movieBaseUrl + "/discover/movie?api_key=" + api_key;
const getMovieByGenereId = (id) =>
  axios.get(movieByGenereBaseURL + "&with_generes=" + id);
// This endpoint now correctly uses the API key from .env

export default {
  getTrendingVideos,
  getMovieByGenereId,
};
