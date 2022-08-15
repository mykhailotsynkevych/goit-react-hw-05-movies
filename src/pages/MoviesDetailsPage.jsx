import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../api/themoviedb-api';
import { Link, Outlet } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { BackLink } from "../components/BackLink/BackLink";

const MoviesDetailsPage = () => {
  const [idMovie, setIdMovie] = useState({});
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    getMovieById(id).then(setIdMovie);
  }, [id]);

  return (
    <>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {idMovie && (
        <>
          <div className={s.moviePage}>
            {idMovie.poster_path && <img
              src={`https://image.tmdb.org/t/p/w500${idMovie.poster_path}`}
              alt={idMovie.title}
              width="250"
            />}
            
            <div className={s.movieDiscription}>
              <h1>{idMovie.title} </h1>
              {idMovie.release_date && (
                <h2>Year: {idMovie.release_date.slice(0, 4)} </h2>
              )}
              <h4>Overview</h4>
              <p>{idMovie.overview}</p>
              <h4>Genres</h4>
              {idMovie.genres && (
                <ul>
                  {idMovie.genres.map(el => (
                    <li key={el.id}>
                      <p>{el.name}</p>
                    </li>
                  ))}
                </ul>
              )}
              <h4>Rating</h4>
              {idMovie.vote_average && (
                <p> {idMovie.vote_average.toFixed(1)} </p>
              )}
            </div>
          </div>

          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast" state={{ from: location}}>Cast</Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>Reviews</Link>
            </li>
          </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
        </>
      )}
    </>
  );
}

export default MoviesDetailsPage;