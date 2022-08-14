import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../../api/themoviedb-api';
import { Link, Outlet } from 'react-router-dom';
import s from './MovieDetails.module.css';
import { BackLink } from "../BackLink/BackLink";

const MoviesDetails = () => {
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
            <img
              src="https://www.themoviedb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
              alt={idMovie.title}
              width="250"
            />
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
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
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

export default MoviesDetails;