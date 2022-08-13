import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieById } from '../../api/themoviedb-api';
import { Link, Outlet } from "react-router-dom";
import s from './MovieDetails.module.css';

export default function MoviesDetails() {
  const [idMovie, setIdMovie] = useState({});
  // const [movieYear, setMovieYear] = useState("");
  const { id } = useParams();
 
  useEffect(() => {
    getMovieById(id).then(setIdMovie)


    // getImageFormMovieById(id).then(data => console.log(data))
  }, [id]);
    

  // https://www.themoviedb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg
  return <>{idMovie && <>
      <div className={s.moviePage}>
      <img src="https://www.themoviedb.org/t/p/original/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" alt={idMovie.title} width="250" />
      <div className={s.movieDiscription}>
        <h1>{idMovie.title} </h1>
        {idMovie.release_date && <h2>Year: {idMovie.release_date.slice(0, 4)} </h2>}
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
        {idMovie.vote_average && <p> {idMovie.vote_average.toFixed(1)} </p>}
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
      <Outlet />
    </>}</>;
}
