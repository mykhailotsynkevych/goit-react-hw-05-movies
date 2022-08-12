import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '7636cf9d603a531a6043a00a518eaa9c';

export const getTrandingMovies = () => {
  return axios
    .get('trending/movie/day?', {
        params: {
        api_key: API_KEY,
      },
    })
        .then(response => response.data) 
};

export const getSearchMovies = (searchMovie) => {
  return axios
      .get('search/movie?', {
          params: {
        query: searchMovie,
        api_key: API_KEY,
      },
    })
        .then(response => response.data) 
};