import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastFromMovieById } from '../../api/themoviedb-api';

export default function Cast() {
  const [Cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCastFromMovieById(id).then(data => setCast(data.cast));
  }, [id]);
  return (
    <>
      {Cast && (
        <ul>
          {Cast.map(el => (
            <li key={el.id}>
              <img src="" alt="" />
              <p>{el.original_name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
