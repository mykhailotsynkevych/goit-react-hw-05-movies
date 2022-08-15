import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import MoviesList from '../components/MoviesList/MoviesList';
import { getTrandingMovies } from '../api/themoviedb-api';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);


  useEffect(() => {
    getTrandingMovies().then(({ results }) => setTrendMovies(results)).catch(err => console.log(err));
  }, []);

  // console.log(trendMovies);
  return (
    <>
      <PageHeading text="Top movies" />
      {trendMovies && <MoviesList searchMovieResult={trendMovies} />}
    </>
  );
}

export default HomePage;
