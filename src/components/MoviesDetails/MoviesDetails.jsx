import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMovieById } from '../../api/themoviedb-api';
import { Link, Outlet } from "react-router-dom";

export default function MoviesDetails() {
  const [idMovie, setIdMovie] = useState({});
  const { id } = useParams();
 
  useEffect(() => {
    getMovieById(id).then(setIdMovie)
  }, [id]);
    
    return <>{idMovie && <>
        <img src="" alt="" />
        <h2>{idMovie.title} </h2>
        <h5>{idMovie.release_date} </h5>
        <h4>Overview</h4>
        <p>{idMovie.overview}</p>
        <h4>Genres</h4>
        <p>{idMovie.vote_average}</p>



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
