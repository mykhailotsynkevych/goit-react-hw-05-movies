import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { getSearchMovies } from '../api/themoviedb-api';
import { Link, useLocation  } from 'react-router-dom';

// import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState('Мішуня');
  const [searchMovieResult, setSearchMovieResult] = useState([]);

  const location = useLocation();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get("name") ?? "";
  //   const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  const handleNameChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Введите запрос.');
      return;
    }

    setSearchMovie(query);
    setQuery('');
  };

  useEffect(() => {
    getSearchMovies(searchMovie).then(({ results }) =>
      setSearchMovieResult(results)
    );
  }, [searchMovie]);

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

      {searchMovie !== 'Мішуня' && (
        <ul>
          {searchMovieResult.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>{el.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
