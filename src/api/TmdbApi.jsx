import axios from "axios";


const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = "992120e9e696feee647b0e5547df1c48";
// https://api.themoviedb.org/3/trending/all/day?api_key=992120e9e696feee647b0e5547df1c48
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + api_key);


export default{
    getTrendingVideos
}
