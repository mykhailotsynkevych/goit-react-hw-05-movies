import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ searchMovieResult }) => {
  console.log(searchMovieResult)
  const location = useLocation();
  
  return (
    <ul className={s.filmsList}>
      {searchMovieResult.map(el => (
        <li key={el.id} className={s.filmsItem}>
          <Link to={`/movies/${el.id}`} state={{ from: location }} className={s.filmsItemLink}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt={el.title}
              width="220"
              className={s.filmsItempPoster}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  searchMovieResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
