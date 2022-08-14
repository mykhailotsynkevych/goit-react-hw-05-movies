import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastFromMovieById } from '../../api/themoviedb-api';
import s from './Cast.module.css';

export default function Cast() {
  const [Cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCastFromMovieById(id).then(data => setCast(data.cast));
  }, [id]);
  return (
    <>
      {Cast && (
        <ul className={s.actorsCards}>
          {Cast.map(el => (
            <li key={el.id}>
              
              {el.profile_path && (<>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt=""
                  width="150"
                />
                              <p>{el.original_name}</p>
              <p>Character: {el.character}</p></>
              )}

            </li>
          ))}
        </ul>
      )}
    </>
  );
}
