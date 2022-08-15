import PageHeading from '../components/PageHeading/PageHeading';
import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getSearchMovies } from '../api/themoviedb-api';

import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovieResult, setSearchMovieResult] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie');

  const handleNameChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Введите запрос.');
      return;
    }
    setSearchParams({ movie: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movie) return;

    getSearchMovies(movie).then(({ results }) => setSearchMovieResult(results));
  }, [movie]);

  return (
    <>
      <PageHeading text="Movies" />

      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleNameChange}
          value={query}
        />
        <button type="submit" className="SearchForm-button">
          <span style={{ fontSize: 30 }}>&#9906;</span>
        </button>
      </form>

      {movie && <MoviesList searchMovieResult={searchMovieResult} />}
    </>
  );
};

export default MoviesPage;
