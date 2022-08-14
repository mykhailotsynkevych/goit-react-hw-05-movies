import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import { getTrandingMovies } from '../api/themoviedb-api';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
    const location = useLocation();

  useEffect(() => {
    getTrandingMovies().then(({ results }) => setTrendMovies(results));
  }, []);

  // console.log(trendMovies);
  return (
    <>
      <PageHeading text="Top movies" />
      {trendMovies && (
        <ul>
          {trendMovies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`} state={{ from: location }}>{el.title}</Link>
              </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default HomePage;
