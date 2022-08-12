import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading/PageHeading';
import { getTrandingMovies } from '../api/themoviedb-api';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies()
      .then(({ results }) => setTrendMovies(results));
  }, []);
  
  console.log(trendMovies)
  return (
    <>
      <PageHeading text="Top movies" />
            {trendMovies && (
        <ul>
          {trendMovies.map(el => (
            <li key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}