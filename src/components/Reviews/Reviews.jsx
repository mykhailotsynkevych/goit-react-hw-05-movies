import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsFromMovieById } from '../../api/themoviedb-api';

export default function Reviews() {
  const [Reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviewsFromMovieById(id).then(data => setReviews(data.results));
  }, [id]);
  return (
    <>
      {Reviews.length > 0 ? (
        <ul>
          {Reviews.map(el => (
            <li key={el.id}>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4>No Reviews</h4>
      )}
    </>
  );
}

Reviews.propTypes = {
  Reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
