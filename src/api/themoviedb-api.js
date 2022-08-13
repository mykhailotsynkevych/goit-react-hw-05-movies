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

// export const getMovieById = (id) => {
//   return axios
//       .get('movie/${id}?api_key=7636cf9d603a531a6043a00a518eaa9c&language=en-US')
         
// };

const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export function getCastFromMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
}

export function getReviewsFromMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
}

export function getImageFormMovieById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}/images?api_key=${API_KEY}&language=en-US`);
}

