import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ searchMovieResult }) => {
  const location = useLocation();
  return (
    <ul>
      {searchMovieResult.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {el.title}
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
